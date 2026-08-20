import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/types";
import { href, localePrefix } from "@/lib/i18n";
import { site } from "@/lib/site";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import { JsonLd } from "@/components/JsonLd";
import {
  Breadcrumbs,
  CtaBand,
  FaqSection,
  FeatureGrid,
  Kicker,
  PageHero,
  ProcessList,
  Prose,
} from "@/components/Sections";
import { Reveal } from "@/components/motion/Reveal";

const displayName = (cs: { anonymous: boolean; publicName: string; client: string }) =>
  cs.anonymous ? cs.publicName : cs.client;

export function ServiceView({
  locale,
  sectorSlug,
  serviceSlug,
}: {
  locale: Locale;
  sectorSlug: string;
  serviceSlug: string;
}) {
  const c = getContent(locale);
  const t = ui[locale];
  const sv = c.services.find((x) => x.sector === sectorSlug && x.slug === serviceSlug);
  const sec = c.sectors.find((x) => x.slug === sectorSlug);
  if (!sv || !sec) notFound();

  const copy = c.pages.servicePage;
  const related = (sv.relatedCaseStudies ?? [])
    .map((slug) => c.caseStudies.find((cs) => cs.slug === slug))
    .filter((cs): cs is NonNullable<typeof cs> => Boolean(cs));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: sv.name,
          description: sv.metaDescription,
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: ["AE", "PK", "GB", "US", "CM", "JP", "FR", "BG"],
          url: `${site.url}${localePrefix(locale)}/${sv.sector}/${sv.slug}/`,
          inLanguage: locale,
        }}
      />
      <PageHero kicker={sec.name} headline={sv.hero.headline} sub={sv.hero.sub} dark />
      <Breadcrumbs
        items={[
          { label: t.home, href: href(locale, "/") },
          { label: sec.name, href: href(locale, `/${sec.slug}/`) },
          { label: sv.name, href: href(locale, `/${sv.sector}/${sv.slug}/`) },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Prose paragraphs={sv.intro} />
      </section>

      {sv.videos && sv.videos.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <Kicker>{copy.showreelKicker}</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-forest">{copy.showreelTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {sv.videos.map((v) => (
              <div key={v} className="aspect-video overflow-hidden rounded-2xl border border-mint bg-white">
                <iframe src={v} title={`${sv.name} showreel`} className="h-full w-full" allowFullScreen loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-mint/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <Reveal>
            <Kicker>{t.whatsIncluded}</Kicker>
            <h2 className="mt-3 text-3xl font-bold text-forest">{t.insideTheService}</h2>
          </Reveal>
          <div className="mt-8">
            <FeatureGrid features={sv.features} />
          </div>
        </div>
      </section>

      {sv.process && sv.process.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <Reveal>
            <Kicker>{t.ourProcess}</Kicker>
            <h2 className="mt-3 text-3xl font-bold text-forest">{t.howWeWork}</h2>
          </Reveal>
          <div className="mt-8 max-w-3xl">
            <ProcessList steps={sv.process} />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-mint/50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <Reveal>
              <Kicker>{t.proof}</Kicker>
              <h2 className="mt-3 text-3xl font-bold text-forest">{t.relatedResults}</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {related.map((cs, i) => (
                <Reveal key={cs.slug} delay={(i % 3) * 0.08}>
                  <Link
                    href={href(locale, `/case-studies/${cs.slug}/`)}
                    className="group card-lift block h-full rounded-2xl border border-mint bg-white p-6 hover:border-fern hover:shadow-xl"
                  >
                    <p className="text-xs font-medium uppercase tracking-wide text-ink/50">{cs.industry}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-forest">{displayName(cs)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">{cs.summary}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqSection faqs={sv.faqs} locale={locale} />
      <CtaBand locale={locale} headline={copy.ctaHeadline(sv.name)} sub={copy.ctaSub} />
    </>
  );
}
