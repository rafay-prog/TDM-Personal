/**
 * What the admin forms are made of.
 *
 * The two collections are described as data rather than hand-written inputs, so
 * the form renderer stays one component and adding a field is a line here.
 *
 * Names are the database column names, not the camelCase shape the site uses —
 * the admin edits rows, and the translation to BlogPost / CaseStudy happens in
 * src/content/db.ts for the public pages. Keeping the mapping in one direction,
 * in one place, is what stops the two drifting.
 */

export type Field =
  | { name: string; label: string; type: "text" | "textarea" | "markdown" | "date"; hint?: string; required?: boolean }
  | { name: string; label: string; type: "number"; hint?: string; required?: boolean }
  | { name: string; label: string; type: "boolean"; hint?: string }
  | { name: string; label: string; type: "select"; options: string[]; hint?: string; required?: boolean }
  | { name: string; label: string; type: "list"; item: "text" | "textarea"; hint?: string }
  | {
      name: string;
      label: string;
      type: "objectList" | "object";
      hint?: string;
      fields: { name: string; label: string; type: "text" | "textarea" }[];
    };

export const BLOG_FIELDS: Field[] = [
  {
    name: "sort_order",
    label: "Order",
    type: "number",
    hint: "Lower comes first. Decides the “keep reading” set at the foot of a post; the blog index itself sorts by date.",
  },
  {
    name: "slug",
    label: "URL slug",
    type: "text",
    required: true,
    hint: "Lowercase words separated by hyphens. Changing this on a published post breaks its existing links.",
  },
  { name: "title", label: "Title", type: "text", required: true },
  { name: "published_on", label: "Date", type: "date", required: true },
  {
    name: "category",
    label: "Category",
    type: "select",
    required: true,
    options: ["Marketing", "Media", "Development", "Staff Augmentation"],
  },
  { name: "excerpt", label: "Excerpt", type: "textarea", required: true, hint: "One or two sentences, shown on the blog index." },
  {
    name: "body",
    label: "Body",
    type: "markdown",
    required: true,
    hint: "Blank line between paragraphs. “## ” starts a heading, “### ” a sub-heading, and lines beginning “- ” become a bullet list.",
  },
  { name: "meta_title", label: "SEO title", type: "text", required: true },
  { name: "meta_description", label: "SEO description", type: "textarea", required: true },
  {
    name: "faqs",
    label: "FAQs",
    type: "objectList",
    hint: "Published as structured data, so search engines and AI assistants can quote them directly.",
    fields: [
      { name: "q", label: "Question", type: "text" },
      { name: "a", label: "Answer", type: "textarea" },
    ],
  },
];

/**
 * Case-study fields that are the same in every language. Editing one writes it
 * to all three rows, so the translations cannot drift apart on the things that
 * have to match.
 */
export const CASE_SHARED_FIELDS: Field[] = [
  { name: "sort_order", label: "Order", type: "number", hint: "0 is featured on the home page and heads the case-studies index." },
  { name: "slug", label: "URL slug", type: "text", required: true },
  {
    name: "sector",
    label: "Sector",
    type: "select",
    required: true,
    options: ["marketing", "development", "media", "staff-augmentation"],
  },
  {
    name: "anonymous",
    label: "Client is anonymous",
    type: "boolean",
    hint: "While this is on, only the public name is ever rendered. Turn it off only once the client has approved being named.",
  },
  { name: "client", label: "Real client name", type: "text", hint: "Never rendered while the switch above is on." },
];

/** Everything written afresh for each language. */
export const CASE_LOCALE_FIELDS: Field[] = [
  { name: "public_name", label: "Public name", type: "text", required: true, hint: "e.g. “A UAE fragrance retailer”, always safe to show." },
  { name: "industry", label: "Industry", type: "text", required: true },
  { name: "country", label: "Country", type: "text" },
  { name: "timeline", label: "Timeline", type: "text" },
  { name: "services", label: "Services", type: "list", item: "text" },
  { name: "summary", label: "Summary", type: "textarea", required: true },
  { name: "challenge", label: "Challenge", type: "textarea", required: true },
  { name: "approach", label: "Approach", type: "list", item: "textarea", hint: "One entry per paragraph." },
  {
    name: "results",
    label: "Results",
    type: "objectList",
    hint: "The headline numbers. The first three show on the featured card.",
    fields: [
      { name: "value", label: "Value", type: "text" },
      { name: "label", label: "Label", type: "text" },
    ],
  },
  {
    name: "testimonial",
    label: "Testimonial",
    type: "object",
    fields: [
      { name: "quote", label: "Quote", type: "textarea" },
      { name: "author", label: "Author", type: "text" },
    ],
  },
  { name: "meta_title", label: "SEO title", type: "text", required: true },
  { name: "meta_description", label: "SEO description", type: "textarea", required: true },
];

export const LOCALES = ["en", "fr", "ar"] as const;
export type AdminLocale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<AdminLocale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

/** A blank row, so “New” starts from the right shape rather than from {}. */
export function emptyFor(fields: Field[]): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const f of fields) {
    if (f.type === "list" || f.type === "objectList") out[f.name] = [];
    else if (f.type === "object") out[f.name] = null;
    else if (f.type === "boolean") out[f.name] = false;
    else if (f.type === "number") out[f.name] = 99;
    else if (f.type === "select") out[f.name] = f.options[0];
    else out[f.name] = "";
  }
  return out;
}
