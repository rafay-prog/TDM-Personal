import type { Metadata } from "next";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { getBlogPosts } from "@/content/db";
import { Breadcrumbs, CtaBand, Kicker, PageHero, ShatterDefs, ShatterSurface } from "@/components/Sections";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Blog — Growth Insights from TDM | TDM",
  description:
    "Practical guides on SEO, performance marketing, e-commerce development, media production and staff augmentation from the TDM team.",
  alternates: { canonical: "/blog/" },
};

function readMinutes(p: BlogPost): number {
  const words = p.body.join(" ").split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

const categoryColor: Record<string, string> = {
  Marketing: "bg-fern/10 text-fern",
  Media: "bg-amber/10 text-amber",
  Development: "bg-plum/10 text-plum",
  "Staff Augmentation": "bg-forest/10 text-forest",
};

/** Cached, then refreshed within the minute, so a new post appears without a deploy. */
export const revalidate = 60;

export default async function BlogPage() {
  const posts = [...(await getBlogPosts())].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        kicker="Blog"
        headline="What we've learned growing brands."
        sub="Practical, no-fluff guides from the team — the same thinking we apply to client work."
        dark
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }]} />

      <ShatterDefs />

      <section className="ribbon-bg mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Featured (latest) post. Guarded because the posts come from the
            database now — if it is briefly unreachable this renders an empty
            page rather than a 500. */}
        {featured && (
        <Reveal>
          <Link
            href={`/blog/${featured.slug}/`}
            className="group card-lift relative block overflow-hidden rounded-3xl bg-forest p-8 text-white hover:shadow-2xl hover:shadow-forest/20 md:p-12"
          >
            <div
              aria-hidden
              className="blob pointer-events-none absolute -top-20 -end-20 h-72 w-72 rounded-full bg-fern/40 blur-3xl"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                <span className="rounded-full bg-amber px-3 py-1 text-white">Latest</span>
                <span className="rounded-full bg-white/10 px-3 py-1">{featured.category}</span>
                <span className="text-white/60">
                  {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  {" · "}
                  {readMinutes(featured)} min read
                </span>
              </div>
              <h2 className="mt-5 max-w-3xl font-display text-2xl font-bold leading-snug md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-white/75">{featured.excerpt}</p>
              <p className="mt-6 font-semibold text-amber">
                Read the article <span className="arrow-nudge">→</span>
              </p>
            </div>
          </Link>
        </Reveal>
        )}

        {/* Remaining posts */}
        <Reveal>
          <div className="mt-16 text-center">
            <Kicker>More reading</Kicker>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-forest md:text-4xl">
              Guides from the people doing the work.
            </h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-amber" />
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 3) * 0.08}
              from={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "snap"}
              className="h-full"
            >
              <Link
                href={`/blog/${p.slug}/`}
                className="group sheen card-lift relative flex h-full flex-col rounded-3xl border border-transparent p-7 transition-colors duration-300 hover:border-fern hover:shadow-2xl"
              >
                <ShatterSurface index={i} />
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className={`rounded-full px-3 py-1 ${categoryColor[p.category] ?? "bg-mint text-forest"}`}>
                    {p.category}
                  </span>
                  <span className="font-normal text-ink/50">{readMinutes(p)} min read</span>
                </div>
                <h2 className="mt-4 font-display text-lg font-bold leading-snug text-forest transition-colors group-hover:text-fern">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-ink/50">
                  <span>
                    {new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-mint text-forest transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-white"
                  >
                    <span className="arrow-nudge leading-none">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
