import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/types";
import { href } from "@/lib/i18n";
import { sectorHeroImage } from "@/lib/sector-media";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import {
  Breadcrumbs,
  CtaBand,
  FaqSection,
  Kicker,
  PageHero,
  Prose,
} from "@/components/Sections";
import { Reveal } from "@/components/motion/Reveal";

const displayName = (cs: { anonymous: boolean; publicName: string; client: string }) =>
  cs.anonymous ? cs.publicName : cs.client;

export function SectorView({ locale, sectorSlug }: { locale: Locale; sectorSlug: string }) {
  const c = getContent(locale);
  const t = ui[locale];
  const s = c.sectors.find((x) => x.slug === sectorSlug);
  if (!s) notFound();

  const services = c.services.filter((sv) => sv.sector === s.slug);
  const related = c.caseStudies.filter((cs) => cs.sector === s.slug).slice(0, 3);
  const extras = c.pages.sectorExtras;

  return (
    <>
      <PageHero
        kicker={s.name}
        headline={s.hero.headline}
        sub={s.hero.sub}
        dark
        image={sectorHeroImage[s.slug]}
        imageAlt={`${s.name} — ${s.tagline}`}
      />
      <Breadcrumbs
        items={[
          { label: t.home, href: href(locale, "/") },
          { label: s.name, href: href(locale, `/${s.slug}/`) },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Prose paragraphs={s.intro} />
      </section>

      {services.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <Reveal>
            <Kicker>{extras.servicesKicker}</Kicker>
            <h2 className="mt-3 text-3xl font-bold text-forest">{extras.servicesTitle(s.name)}</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((sv, i) => (
              <Reveal key={sv.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={href(locale, `/${s.slug}/${sv.slug}/`)}
                  className="group card-lift block h-full rounded-2xl border border-mint bg-white p-6 hover:border-fern hover:shadow-xl"
                >
                  <h3 className="font-display text-lg font-semibold text-forest">{sv.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{sv.shortDesc}</p>
                  <p className="mt-4 text-sm font-semibold text-forest group-hover:underline">{t.learnMore}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {s.slug === "staff-augmentation" && (
        <section className="bg-mint/50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <Reveal>
              <Kicker>{extras.staffAug.kicker}</Kicker>
              <h2 className="mt-3 text-3xl font-bold text-forest">{extras.staffAug.title}</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {extras.staffAug.pillars.map((pl, i) => (
                <Reveal key={pl.title} delay={i * 0.1}>
                  <div className="card-lift h-full rounded-2xl border border-mint bg-white p-6 hover:border-fern hover:shadow-lg">
                    <p className="font-display text-2xl font-bold text-amber">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-forest">{pl.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">{pl.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-ink/85">
              {extras.staffAug.paragraphs.map((par) => (
                <p key={par}>{par}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <Reveal>
            <Kicker>{t.proof}</Kicker>
            <h2 className="mt-3 text-3xl font-bold text-forest">{extras.resultsTitle}</h2>
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
        </section>
      )}

      <FaqSection faqs={s.faqs} locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}
