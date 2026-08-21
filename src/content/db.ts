import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import type { BlogPost, CaseStudy, Locale, SectorSlug } from "@/lib/types";
import { publicDb } from "@/lib/supabase";

/**
 * Blog posts and case studies, read from Postgres.
 *
 * These used to be arrays on the content bundle, which is why every caller
 * still gets the same BlogPost and CaseStudy shapes — the mapping from
 * snake_case columns happens here so nothing downstream had to change beyond
 * awaiting the call.
 *
 * Pages that use these set a `revalidate`, so a reader is served a cached
 * render rather than a database round trip, and a newly published post appears
 * within that window without a deploy.
 */

type BlogRow = {
  slug: string;
  sort_order: number;
  title: string;
  published_on: string;
  category: string;
  excerpt: string;
  body: string;
  meta_title: string;
  meta_description: string;
  faqs: { q: string; a: string }[] | null;
};

type CaseRow = {
  slug: string;
  locale: string;
  sort_order: number;
  sector: string;
  anonymous: boolean;
  client: string | null;
  public_name: string;
  industry: string;
  country: string | null;
  timeline: string | null;
  services: string[] | null;
  summary: string;
  challenge: string;
  approach: string[] | null;
  results: { value: string; label: string }[] | null;
  testimonial: { quote: string; author: string } | null;
  meta_title: string;
  meta_description: string;
};

/** The renderer wants blocks; the column holds one markdown string. Blank lines
 *  separate them, which round-trips because a list keeps single newlines
 *  between its items. */
const toBlocks = (body: string) =>
  body
    .split(/\r?\n\s*\r?\n/)
    .map((b) => b.trim())
    .filter(Boolean);

const toPost = (r: BlogRow): BlogPost => ({
  slug: r.slug,
  title: r.title,
  metaTitle: r.meta_title,
  metaDescription: r.meta_description,
  date: r.published_on,
  category: r.category,
  excerpt: r.excerpt,
  body: toBlocks(r.body),
  ...(r.faqs?.length ? { faqs: r.faqs } : {}),
});

const toCase = (r: CaseRow): CaseStudy => ({
  slug: r.slug,
  client: r.client ?? "",
  anonymous: r.anonymous,
  publicName: r.public_name,
  industry: r.industry,
  ...(r.country ? { country: r.country } : {}),
  sector: r.sector as SectorSlug,
  services: r.services ?? [],
  ...(r.timeline ? { timeline: r.timeline } : {}),
  summary: r.summary,
  challenge: r.challenge,
  approach: r.approach ?? [],
  results: r.results ?? [],
  ...(r.testimonial ? { testimonial: r.testimonial } : {}),
  metaTitle: r.meta_title,
  metaDescription: r.meta_description,
});

/**
 * A read failure returns an empty list rather than throwing.
 *
 * The alternative is a 500 on the home page because the database blinked. An
 * empty section is a bad day; a dead site is a worse one. The error is logged
 * so it shows up in the Vercel logs rather than passing silently.
 */
async function safely<T>(
  what: string,
  run: () => PromiseLike<{ data: T[] | null; error: { message: string } | null }>,
) {
  try {
    const { data, error } = await run();
    if (error) {
      console.error(`[content] ${what} failed: ${error.message}`);
      return [];
    }
    return data ?? [];
  } catch (err) {
    console.error(`[content] ${what} threw: ${(err as Error).message}`);
    return [];
  }
}

/**
 * Fallback to the JSON under /content while the database is still empty.
 *
 * This is a bridge, not a design. The migration moved this content into
 * Postgres but the rows have not been loaded yet, and a blank blog and an empty
 * portfolio are a worse answer than serving what we already have on disk.
 *
 * It only fires when a table returns nothing at all. Once the seed has run it
 * never fires again, and it should be deleted then — two sources of truth is
 * exactly the sort of thing that bites six months later, when someone empties a
 * collection in the admin and watches the old content reappear.
 */
const CONTENT = path.join(process.cwd(), "content");

function readFiles<T>(...segments: string[]): T[] {
  const dir = path.join(CONTENT, ...segments);
  try {
    return readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => JSON.parse(readFileSync(path.join(dir, f), "utf8")) as T & { order?: number })
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((entry) => {
        delete entry.order;
        return entry as T;
      });
  } catch {
    return [];
  }
}

let warned = false;
function bridging<T>(what: string, rows: T[]): boolean {
  if (rows.length) return false;
  if (!warned) {
    warned = true;
    console.warn(
      `[content] ${what} is empty in the database — serving /content from disk instead. ` +
        `Run: node scripts/seed-content.mjs`,
    );
  }
  return true;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const rows = await safely<BlogRow>("blog_posts", () =>
    publicDb().from("blog_posts").select("*").order("sort_order", { ascending: true }),
  );
  if (bridging("blog_posts", rows)) {
    type FilePost = Omit<BlogPost, "body"> & { body: string };
    return readFiles<FilePost>("blog").map((f) => ({ ...f, body: toBlocks(f.body) }));
  }
  return rows.map(toPost);
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug);
}

export async function getCaseStudies(locale: Locale): Promise<CaseStudy[]> {
  const rows = await safely<CaseRow>(`case_studies(${locale})`, () =>
    publicDb().from("case_studies").select("*").eq("locale", locale).order("sort_order", { ascending: true }),
  );
  if (bridging(`case_studies(${locale})`, rows)) {
    return readFiles<CaseStudy>("case-studies", locale);
  }
  return rows.map(toCase);
}

export async function getCaseStudy(locale: Locale, slug: string): Promise<CaseStudy | undefined> {
  const all = await getCaseStudies(locale);
  return all.find((c) => c.slug === slug);
}
