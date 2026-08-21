/**
 * Loads the JSON under /content into Supabase.
 *
 *   node scripts/seed-content.mjs
 *
 * Run it once after creating the tables. It upserts on the primary key, so
 * running it again is harmless — but note that it will overwrite anything
 * edited in the admin since, because the files are the source here, not the
 * database. After the first successful seed, the database is the source of
 * truth and /content is only a record of what was migrated.
 *
 * Needs the service role key, not the anon key: seeding writes without a signed
 * in user, which the row level security policies otherwise forbid. That key
 * bypasses RLS entirely, so it belongs in .env.local and never in the browser.
 */
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const ROOT = process.cwd();

/** Minimal .env.local reader — enough for KEY=value, quoted or not. */
async function loadEnv() {
  try {
    const text = await readFile(path.join(ROOT, ".env.local"), "utf8");
    for (const line of text.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/i);
      if (!m) continue;
      const value = m[2].trim().replace(/^["']|["']$/g, "");
      if (!process.env[m[1]]) process.env[m[1]] = value;
    }
  } catch {
    /* no .env.local — rely on the real environment */
  }
}

await loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.\n" +
      "Put both in .env.local — see supabase/README.md.",
  );
  process.exit(1);
}

const db = createClient(url, serviceKey, { auth: { persistSession: false } });

const readJsonDir = async (dir) => {
  const files = (await readdir(dir)).filter((f) => f.endsWith(".json"));
  return Promise.all(files.map(async (f) => JSON.parse(await readFile(path.join(dir, f), "utf8"))));
};

// --- blog posts -------------------------------------------------------------

const posts = await readJsonDir(path.join(ROOT, "content", "blog"));
const blogRows = posts.map((p) => ({
  slug: p.slug,
  sort_order: p.order ?? 99,
  title: p.title,
  published_on: p.date,
  category: p.category,
  excerpt: p.excerpt,
  body: p.body,
  meta_title: p.metaTitle,
  meta_description: p.metaDescription,
  faqs: p.faqs ?? [],
}));

{
  const { error } = await db.from("blog_posts").upsert(blogRows, { onConflict: "slug" });
  if (error) {
    console.error("blog_posts failed:", error.message);
    process.exit(1);
  }
  console.log(`blog_posts: ${blogRows.length} rows`);
}

// --- case studies -----------------------------------------------------------

const caseRows = [];
for (const locale of ["en", "fr", "ar"]) {
  const dir = path.join(ROOT, "content", "case-studies", locale);
  for (const c of await readJsonDir(dir)) {
    caseRows.push({
      slug: c.slug,
      locale,
      sort_order: c.order ?? 99,
      sector: c.sector,
      anonymous: c.anonymous ?? true,
      client: c.client ?? null,
      public_name: c.publicName,
      industry: c.industry,
      country: c.country ?? null,
      timeline: c.timeline ?? null,
      services: c.services ?? [],
      summary: c.summary,
      challenge: c.challenge,
      approach: c.approach ?? [],
      results: c.results ?? [],
      testimonial: c.testimonial ?? null,
      meta_title: c.metaTitle,
      meta_description: c.metaDescription,
    });
  }
}

{
  const { error } = await db.from("case_studies").upsert(caseRows, { onConflict: "slug,locale" });
  if (error) {
    console.error("case_studies failed:", error.message);
    process.exit(1);
  }
  const byLocale = caseRows.reduce((acc, r) => ({ ...acc, [r.locale]: (acc[r.locale] ?? 0) + 1 }), {});
  console.log(`case_studies: ${caseRows.length} rows (${JSON.stringify(byLocale)})`);
}

// --- verify what actually landed --------------------------------------------

const counts = await Promise.all([
  db.from("blog_posts").select("slug", { count: "exact", head: true }),
  db.from("case_studies").select("slug", { count: "exact", head: true }),
]);

console.log(`\nin the database now: ${counts[0].count} blog posts, ${counts[1].count} case-study rows`);
if (counts[0].count !== blogRows.length || counts[1].count !== caseRows.length) {
  console.error("Counts do not match what was sent — check for rows that failed to insert.");
  process.exit(1);
}
console.log("Seed complete.");
