import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import type { BlogPost, CaseStudy, Locale } from "@/lib/types";

/**
 * Reads blog posts and case studies from the editable JSON under /content.
 *
 * These files are what the CMS at /admin writes to, so adding a post is a
 * commit rather than a code change. Everything is read once at module load and
 * the site is a static export, so this runs at build time only — nothing here
 * ever touches a filesystem at request time, because there are no requests.
 *
 * Server-only by construction: `node:fs` cannot be bundled into a client
 * component. Nothing marked "use client" imports this, or its transitive
 * parent `@/content` — the client components take `@/content/ui`, which holds
 * no file access. Keep it that way.
 */

const CONTENT = path.join(process.cwd(), "content");

/** `order` is stored on disk to preserve a curated sequence; it is not part of
 *  the rendered shape, so it is stripped once it has done its job. */
type Ordered<T> = T & { order?: number };

function readDir<T>(dir: string): T[] {
  let files: string[];
  try {
    files = readdirSync(dir).filter((f) => f.endsWith(".json"));
  } catch {
    return [];
  }
  return files
    .map((f) => JSON.parse(readFileSync(path.join(dir, f), "utf8")) as Ordered<T>)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((entry) => {
      // order has done its job once the list is sorted; it is not part of the
      // rendered shape, so it does not travel any further.
      delete entry.order;
      return entry as T;
    });
}

/**
 * Case studies for one locale. The order on disk is load-bearing: the first
 * entry is featured on the home page and heads the case-studies index.
 */
export function loadCaseStudies(locale: Locale): CaseStudy[] {
  return readDir<CaseStudy>(path.join(CONTENT, "case-studies", locale));
}

/**
 * Blog posts, English only. The index page sorts these by date, but the array
 * order still shows: it decides the "keep reading" set on a post page.
 */
export function loadBlogPosts(): BlogPost[] {
  const posts = readDir<BlogPost & { body: unknown }>(path.join(CONTENT, "blog"));
  return posts.map((p) => ({
    ...p,
    // Stored as one markdown string; the renderer wants blocks. Blank lines
    // separate them, which round-trips because a list block keeps single
    // newlines between its items.
    body: String(p.body)
      .split(/\r?\n\s*\r?\n/)
      .map((b) => b.trim())
      .filter(Boolean),
  }));
}
