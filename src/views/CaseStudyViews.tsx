import { asset } from "@/lib/asset-manifest";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/types";
import { href, isRtl } from "@/lib/i18n";
import { absoluteUrl, site } from "@/lib/site";
import { getContent } from "@/content";
import { getCaseStudies, getCaseStudy } from "@/content/db";
import { ui } from "@/content/ui";
import { JsonLd } from "@/components/JsonLd";
import {
  Breadcrumbs,
  CtaBand,
  HeroBlobs,
  Kicker,
  PageHero,
  Prose,
  ShatterDefs,
  ShatterSurface,
  StatBand,
  TestimonialCard,
} from "@/components/Sections";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";

const displayName = (cs: { anonymous: boolean; publicName: string; client: string }) =>
  cs.anonymous ? cs.publicName : cs.client;

export async function CaseStudiesIndexView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const t = ui[locale];
  const p = c.pages.caseStudiesPage;
  const stats = c.pages.home.statLabels;

  // The first study carries the page: a wide dark card with its numbers counted
  // up, so the page opens on a result rather than on a grid of equal boxes.
  const studies = await getCaseStudies(locale);
  const [featured, ...rest] = studies;

  return (
    <>
      <PageHero kicker={p.hero.kicker} headline={p.hero.headline} sub={p.hero.sub} dark />
      <Breadcrumbs
        items={[
          { label: t.home, href: href(locale, "/") },
          { label: t.caseStudiesLabel, href: href(locale, "/case-studies/") },
        ]}
      />

      <ShatterDefs />

      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <StatBand
          stats={[
            { value: `${studies.length}`, label: t.caseStudiesLabel },
            { value: site.stats.bestRoas, label: stats.roas },
            { value: site.stats.satisfaction, label: stats.satisfaction },
            { value: site.stats.countries, label: stats.countries },
          ]}
        />
      </section>

      {featured && (
        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6">
          <Reveal from="snap">
            <Link
              href={href(locale, `/case-studies/${featured.slug}/`)}
              className="group sheen card-lift relative block overflow-hidden rounded-3xl bg-forest p-8 text-white md:p-12"
            >
              <HeroBlobs />
              <div className="relative grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
                <div>
                  <Kicker glow dark>
                    {t.proof}
                  </Kicker>
                  <div className="mt-4 flex items-start gap-4">
                    <h2 className="font-display text-2xl font-bold leading-tight md:text-4xl">
                      {displayName(featured)}
                    </h2>
                    <span
                      aria-hidden
                      className="mt-1 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:border-amber group-hover:bg-amber md:flex"
                    >
                      <span className="arrow-nudge leading-none">{isRtl(locale) ? "←" : "→"}</span>
                    </span>
                  </div>
                  <p className="mt-4 max-w-xl leading-relaxed text-white/75">{featured.summary}</p>
                  <p className="kicker mt-6 text-sage">
                    {featured.industry}
                    {featured.country ? ` · ${featured.country}` : ""}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {featured.results.slice(0, 3).map((r) => (
                    <div key={r.label} className="glass rounded-2xl p-4">
                      <p className="font-display text-2xl font-bold text-amber md:text-3xl">
                        <CountUp value={r.value} />
                      </p>
                      <p className="mt-1 text-xs leading-snug text-white/70">
                        {r.label.split("(")[0].trim()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="ribbon-bg mt-12 border-y border-mint">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((cs, i) => (
              <Reveal key={cs.slug} delay={(i % 2) * 0.08} from={i % 2 === 0 ? "left" : "right"} className="h-full">
                <Link
                  href={href(locale, `/case-studies/${cs.slug}/`)}
                  className="group sheen card-lift relative flex h-full flex-col rounded-3xl border border-transparent p-7 transition-colors duration-300 hover:border-fern hover:shadow-2xl"
                >
                  <ShatterSurface index={i} />
                  {/* Numbered from 02 — the featured study above is 01. */}
                  <span
                    aria-hidden
                    className="bento-index pointer-events-none absolute end-6 top-4 font-display text-5xl font-bold text-mint transition-colors duration-300 group-hover:text-sage"
                  >
                    {String(i + 2).padStart(2, "0")}
                  </span>

                  <p className="relative text-xs font-medium uppercase tracking-wide text-ink/50">
                    {cs.industry}
                    {cs.country ? ` · ${cs.country}` : ""}
                  </p>
                  <div className="relative mt-2 flex items-center gap-3">
                    <h2 className="font-display text-xl font-semibold text-forest transition-colors group-hover:text-fern">
                      {displayName(cs)}
                    </h2>
                    <span
                      aria-hidden
                      className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-mint text-forest transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-white md:flex"
                    >
                      <span className="arrow-nudge text-base leading-none">{isRtl(locale) ? "←" : "→"}</span>
                    </span>
                  </div>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink/75">{cs.summary}</p>
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {cs.results.slice(0, 3).map((r) => (
                      <span
                        key={r.label}
                        className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-forest transition-colors duration-300 group-hover:bg-amber/15"
                      >
                        {r.value} {r.label.split("(")[0].trim()}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} headline={p.ctaHeadline} />
    </>
  );
}

export async function CaseStudyView({ locale, slug }: { locale: Locale; slug: string }) {
  const c = getContent(locale);
  const t = ui[locale];
  const cs = await getCaseStudy(locale, slug);
  if (!cs) notFound();
  const copy = c.pages.caseStudyPage;
  const pageUrl = absoluteUrl(href(locale, `/case-studies/${cs.slug}/`));

  return (
    <>
      <ShatterDefs />

      {/* Answer engines cite proof. Expose the outcome numbers in machine-readable
          form, not just as rendered text. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: displayName(cs),
          description: cs.summary,
          abstract: `${cs.summary} Measured results: ${cs.results
            .map((r) => `${r.value} ${r.label}`)
            .join("; ")}.`,
          about: { "@type": "Thing", name: cs.industry },
          keywords: cs.services.join(", "),
          inLanguage: locale,
          isAccessibleForFree: true,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: {
            "@type": "Organization",
            name: site.name,
            logo: { "@type": "ImageObject", url: `${site.url}${asset("branding/logo.png")}` },
          },
          mainEntityOfPage: pageUrl,
          url: pageUrl,
        }}
      />
      <PageHero
        kicker={`${copy.kickerPrefix} · ${cs.industry}`}
        headline={displayName(cs)}
        sub={cs.summary}
        dark
      />
      <Breadcrumbs
        items={[
          { label: t.home, href: href(locale, "/") },
          { label: t.caseStudiesLabel, href: href(locale, "/case-studies/") },
          { label: displayName(cs), href: href(locale, `/case-studies/${cs.slug}/`) },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {cs.services.map((s) => (
            <span key={s} className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-forest">
              {s}
            </span>
          ))}
          {cs.timeline && (
            <span className="rounded-full border border-mint px-3 py-1 text-xs font-semibold text-ink/70">
              {cs.timeline}
            </span>
          )}
        </div>

        <div className="mt-10">
          <StatBand stats={cs.results} />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <Kicker glow>{copy.challengeLabel}</Kicker>
            <div className="mt-4">
              <Prose paragraphs={[cs.challenge]} />
            </div>
          </div>
          <div>
            <Kicker glow>{copy.approachLabel}</Kicker>
            <ul className="mt-4 space-y-3">
              {cs.approach.map((a) => (
                <li key={a} className="flex gap-3 text-base leading-relaxed text-ink/85">
                  <span className="mt-1 text-fern" aria-hidden>✓</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {cs.testimonial && (
          <Reveal>
            <div className="mt-12 max-w-xl">
              <TestimonialCard t={{ quote: cs.testimonial.quote, author: cs.testimonial.author }} />
            </div>
          </Reveal>
        )}
      </section>

      <CtaBand locale={locale} headline={copy.ctaHeadline} />
    </>
  );
}
