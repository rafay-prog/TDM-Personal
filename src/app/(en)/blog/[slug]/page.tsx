import { asset } from "@/lib/asset-manifest";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/content/db";
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
import { ConsultationLink } from "@/components/ConsultationLink";
import { ReadingProgress } from "@/components/motion/ReadingProgress";

/**
 * Pre-rendered at build time, but not limited to that set: a post written in
 * the admin afterwards renders on first request and is then cached.
 */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getBlogPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = await getBlogPost(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/blog/${p.slug}/` },
    openGraph: { type: "article", publishedTime: p.date },
  };
}

/** Blocks keep their list items on single newlines; splitting on one recovers them. */
const NEWLINE = "\n";

/** Stable, readable anchors for the contents list to point at. */
const headingId = (text: string) =>
  text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);

/** The h2s, so the sidebar can list what the piece covers. */
function outline(body: string[]) {
  return body
    .filter((b) => b.startsWith("## "))
    .map((b) => ({ text: b.slice(3), id: headingId(b.slice(3)) }));
}

function Body({ body }: { body: string[] }) {
  // The opening paragraph is set larger — it does the work a standfirst does,
  // giving the eye somewhere to land before the body proper.
  const firstProse = body.findIndex((b) => !b.startsWith("#") && !b.startsWith("- "));

  return (
    <div className="max-w-3xl">
      {body.map((block, i) => {
        if (block.startsWith("### ")) {
          return (
            <h3 key={i} id={headingId(block.slice(4))} className="mt-8 scroll-mt-28 font-display text-xl font-semibold text-forest">
              {block.slice(4)}
            </h3>
          );
        }
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              id={headingId(block.slice(3))}
              className="mt-12 scroll-mt-28 border-s-4 border-amber ps-4 font-display text-2xl font-bold text-forest md:text-3xl"
            >
              {block.slice(3)}
            </h2>
          );
        }
        if (block.startsWith("- ")) {
          return (
            <ul key={i} className="mt-4 space-y-2.5 text-base leading-relaxed text-ink/85">
              {block.split(NEWLINE).map((li, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  {li.replace(/^- /, "")}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={i}
            className={
              i === firstProse
                ? "mt-6 border-s-2 border-mint ps-5 font-display text-lg leading-relaxed text-forest md:text-xl"
                : "mt-5 text-base leading-relaxed text-ink/85"
            }
          >
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
  const p = await getBlogPost(slug);
  if (!p) notFound();

  const words = p.body.join(" ").split(/\s+/).length;
  const minutes = Math.max(2, Math.round(words / 200));
  const others = (await getBlogPosts()).filter((x) => x.slug !== p.slug).slice(0, 3);
  const sections = outline(p.body);

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
            logo: { "@type": "ImageObject", url: `${site.url}${asset("branding/logo.png")}` },
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
      {/* Two columns from lg. The article used to sit alone in a max-w-7xl
          container while its own body was capped at max-w-3xl, which left about
          500px of empty page beside every post. That space now carries the
          contents and a way to get in touch. */}
      <div className="ribbon-bg mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-14">
        <article>
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

        {/* Capped to the space below the header. A sticky column taller than
            the viewport strands whatever hangs off the bottom: the contents
            list plus the card came to 660px in a 702px window, so the call to
            action sat permanently out of reach. The list scrolls inside itself
            instead, and the card stays put. */}
        <aside className="lg:sticky lg:top-28 lg:flex lg:max-h-[calc(100vh-8rem)] lg:flex-col lg:self-start">
          {sections.length > 0 && (
            <nav
              aria-label="On this page"
              className="rounded-3xl border border-mint bg-white p-6 lg:min-h-0 lg:overflow-y-auto [scrollbar-width:thin]"
            >
              <p className="kicker text-fern">On this page</p>
              <ol className="mt-4 space-y-2.5">
                {sections.map((sec, i) => (
                  <li key={sec.id} className="flex gap-3 text-sm leading-snug">
                    <span aria-hidden className="font-display text-xs font-bold text-mint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a href={`#${sec.id}`} className="text-ink/70 transition-colors hover:text-fern">
                      {sec.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="relative mt-6 shrink-0 overflow-hidden rounded-3xl bg-forest p-6 text-white">
            <div
              aria-hidden
              className="blob pointer-events-none absolute -end-12 -top-12 h-40 w-40 rounded-full bg-fern/40 blur-3xl"
            />
            <p className="relative kicker text-sage">Work with us</p>
            <p className="relative mt-3 font-display text-lg font-bold leading-snug">
              Want this done on your account?
            </p>
            <p className="relative mt-2 text-sm leading-relaxed text-white/70">
              Book a free consultation and we&rsquo;ll give you an honest read on where you stand.
            </p>
            <ConsultationLink
              locale="en"
              className="btn-fluid btn-shine relative mt-5 inline-block rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-white"
            >
              Get a Free Consultation
            </ConsultationLink>
          </div>
        </aside>
      </div>
      {p.faqs && <FaqSection faqs={p.faqs} />}
      <CtaBand />
    </>
  );
}
