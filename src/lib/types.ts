export type Locale = "en" | "fr" | "ar";

export type SectorSlug = "media" | "marketing" | "development" | "staff-augmentation";

export interface Faq {
  q: string;
  a: string;
}

export interface Feature {
  title: string;
  desc: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  sector: SectorSlug;
  name: string;
  navLabel?: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  hero: { headline: string; sub: string };
  /** First paragraph must directly answer "what is this service / who is it for" for AEO. */
  intro: string[];
  features: Feature[];
  process?: ProcessStep[];
  faqs: Faq[];
  relatedCaseStudies?: string[];
  /** Video embed URLs (YouTube/Vimeo) — media services; filled when client sends links. */
  videos?: string[];
}

export interface Sector {
  slug: SectorSlug;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  hero: { headline: string; sub: string };
  intro: string[];
  faqs: Faq[];
}

export interface ResultStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  /** Real client name — never rendered when anonymous is true. */
  client: string;
  /** True until the client is approved for naming; publicName is shown instead. */
  anonymous: boolean;
  /** e.g. "A UAE fragrance retailer" — always safe to render. */
  publicName: string;
  industry: string;
  country?: string;
  sector: SectorSlug;
  services: string[];
  timeline?: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: ResultStat[];
  testimonial?: { quote: string; author: string };
  metaTitle: string;
  metaDescription: string;
}

export interface Office {
  slug: string;
  country: string;
  city?: string;
  address?: string;
  role: "hq" | "delivery-hub" | "partner";
  roleLabel: string;
  metaTitle: string;
  metaDescription: string;
  hero: { headline: string; sub: string };
  intro: string[];
  faqs: Faq[];
}

export interface TeamMember {
  name: string;
  title: string;
  photo?: string;
}

export interface ClientLogo {
  name: string;
  file: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  source?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  category: string;
  excerpt: string;
  /** Markdown-ish paragraphs & headings: strings starting with "## " render as h2, "### " as h3. */
  body: string[];
  faqs?: Faq[];
}
