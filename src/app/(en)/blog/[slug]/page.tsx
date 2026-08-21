import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/content/en/blog";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import {
  Breadcrumbs,
  CtaBand,
  FaqSection,
  PageHero,
  ShatterDefs,
  ShatterSurface,
} from "@/components/Sections";
import { Reveal } from "@/components/motion/Reveal";
import { ReadingProgress } from "@/components/motion/ReadingProgress";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/blog/${p.slug}/` },
    openGraph: { type: "article", publishedTime: p.date },
  };
}

function Body({ body }: { body: string[] }) {
  return (
    <div className="max-w-3xl">
      {body.map((block, i) => {
        if (block.startsWith("### ")) {
          return (
            <h3 key={i} className="mt-8 font-display text-xl font-semibold text-forest">
              {block.slice(4)}
            </h3>
          );
        }
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-12 border-s-4 border-sage ps-4 font-display text-2xl font-bold text-forest"
            >
              {block.slice(3)}
            </h2>
          );
        }
        if (block.startsWith("- ")) {
          return (
            <ul key={i} className="mt-4 list-disc space-y-1.5 ps-6 text-base leading-relaxed text-ink/85">
              {block.split("\n").map((li, j) => (
                <li key={j}>{li.replace(/^- /, "")}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="mt-5 text-base leading-relaxed text-ink/85">
            {block}
          </p>
        );
      })}
    </div>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const words = p.body.join(" ").split(/\s+/).length;
  const minutes = Math.max(2, Math.round(words / 200));
  const others = blogPosts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <ShatterDefs />
      <ReadingProgress />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.metaDescription,
          datePublished: p.date,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: {
            "@type": "Organization",
            name: site.name,
            logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
          },
          mainEntityOfPage: `${site.url}/blog/${p.slug}/`,
        }}
      />
      <PageHero kicker={p.category} headline={p.title} sub={p.excerpt} dark />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: p.title, href: `/blog/${p.slug}/` },
        ]}
      />
      <article className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-ink/50">
          <span className="rounded-full bg-mint px-3 py-1 font-semibold text-forest">{p.category}</span>
          <span>
            {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span aria-hidden>·</span>
          <span>{minutes} min read</span>
          <span aria-hidden>·</span>
          <span>TDM Team</span>
        </div>
        <Body body={p.body} />

        <Reveal>
          <div className="mt-14 border-t border-mint pt-10">
            <h2 className="font-display text-xl font-bold text-forest">Keep reading</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${o.slug}/`}
                    className="group sheen card-lift relative flex h-full flex-col rounded-3xl border border-transparent p-6 transition-colors duration-300 hover:border-fern hover:shadow-2xl"
                  >
                    <ShatterSurface index={i} />
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber">{o.category}</p>
                    <h3 className="mt-2 flex-1 font-display text-base font-semibold leading-snug text-forest">
                      {o.title}
                    </h3>
                    <p className="mt-3 text-xs font-semibold text-fern">
                      Read <span className="arrow-nudge">→</span>
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </article>
      {p.faqs && <FaqSection faqs={p.faqs} />}
      <CtaBand />
    </>
  );
}
