import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/types";
import { href, isRtl } from "@/lib/i18n";
import { site } from "@/lib/site";
import { sectorHeroImage } from "@/lib/sector-media";
import { serviceImage, SERVICE_IMAGE } from "@/lib/service-media";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import {
  ArrowPill,
  Breadcrumbs,
  CtaBand,
  FaqSection,
  HeroBlobs,
  Kicker,
  PageHero,
  Prose,
  ServiceIcon,
  StatBand,
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

      {/* Intro pins on the left while the copy scrolls past, as on the home page. */}
      <section className="ribbon-bg border-b border-mint">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
            <Reveal from="left" className="lg:sticky lg:top-28 lg:self-start">
              <p className="kicker flex items-center gap-2.5 text-fern">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                </span>
                {s.name}
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-forest md:text-3xl">
                {s.tagline}
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-amber" />
            </Reveal>
            <Reveal from="right">
              <Prose paragraphs={s.intro} />
            </Reveal>
          </div>
        </div>
      </section>

      {services.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <Reveal>
            <div className="text-center">
              <Kicker>{extras.servicesKicker}</Kicker>
              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-forest md:text-4xl">
                {extras.servicesTitle(s.name)}
              </h2>
              <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-amber" />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((sv, i) => (
              <Reveal
                key={sv.slug}
                delay={(i % 3) * 0.08}
                from={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "snap"}
                className="h-full"
              >
                <Link
                  href={href(locale, `/${s.slug}/${sv.slug}/`)}
                  className="group sheen card-lift relative flex h-full flex-col overflow-hidden rounded-3xl border border-mint bg-white hover:border-fern hover:shadow-2xl"
                >
                  {serviceImage[`${s.slug}/${sv.slug}`] ? (
                    <div className="relative overflow-hidden">
                      <Image
                        src={serviceImage[`${s.slug}/${sv.slug}`]}
                        alt={`${sv.name} — ${s.name}`}
                        width={SERVICE_IMAGE.width}
                        height={SERVICE_IMAGE.height}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="aspect-8/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/45 to-transparent" />
                      <span className="absolute bottom-4 start-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-fern shadow-lg ring-1 ring-white/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber group-hover:text-white">
                        <ServiceIcon slug={sv.slug} />
                      </span>
                    </div>
                  ) : (
                    <span className="ms-7 mt-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-fern transition-all duration-300 group-hover:scale-110 group-hover:bg-amber group-hover:text-white">
                      <ServiceIcon slug={sv.slug} />
                    </span>
                  )}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-lg font-bold text-forest transition-colors duration-300 group-hover:text-fern">
                      {sv.name}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink/75">{sv.shortDesc}</p>
                    <p className="mt-5 flex items-center gap-2 text-sm font-bold text-forest">
                      {t.explore}
                      <span className="arrow-nudge" aria-hidden>
                        {isRtl(locale) ? "←" : "→"}
                      </span>
                    </p>
                  </div>
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
              <div className="text-center">
                <Kicker>{extras.staffAug.kicker}</Kicker>
                <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-forest md:text-4xl">
                  {extras.staffAug.title}
                </h2>
                <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-amber" />
              </div>
            </Reveal>

            {/* This sector has no service cards, so the numbers carry the weight. */}
            <div className="mt-10">
              <StatBand
                dark={false}
                stats={[
                  { value: site.stats.specialists, label: c.pages.home.statLabels.specialists },
                  { value: site.stats.countries, label: c.pages.home.statLabels.countries },
                  { value: site.stats.clients, label: c.pages.home.statLabels.clients },
                  { value: site.stats.satisfaction, label: c.pages.home.statLabels.satisfaction },
                ]}
              />
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {extras.staffAug.pillars.map((pl, i) => (
                <Reveal key={pl.title} delay={i * 0.1} from={i === 0 ? "left" : i === 2 ? "right" : "snap"} className="h-full">
                  <div className="group sheen card-lift relative h-full rounded-3xl border border-mint bg-white p-7 hover:border-fern hover:shadow-2xl">
                    <p className="font-display text-2xl font-bold text-amber transition-transform duration-500 group-hover:-translate-y-1">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-forest transition-colors duration-300 group-hover:text-fern">
                      {pl.title}
                    </h3>
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
        <section className="relative overflow-hidden bg-forest text-white">
          <HeroBlobs />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
              <Reveal from="left" className="lg:sticky lg:top-28 lg:self-start">
                <p className="kicker text-sage">{t.proof}</p>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{extras.resultsTitle}</h2>
                <div className="mt-5 h-1 w-14 rounded-full bg-amber" />
                <ArrowPill to={href(locale, "/case-studies/")} locale={locale} dark>
                  {t.allCaseStudies}
                </ArrowPill>
              </Reveal>

              <ul className="border-t border-white/10">
                {related.map((cs, i) => (
                  <Reveal key={cs.slug} delay={i * 0.08} from="right">
                    <li className="border-b border-white/10">
                      <Link
                        href={href(locale, `/case-studies/${cs.slug}/`)}
                        className="card-lift group -mx-4 grid grid-cols-[auto_1fr] items-center gap-5 rounded-2xl px-4 py-6 hover:bg-white/[0.06] md:grid-cols-[auto_1fr_auto] md:gap-8 md:px-6"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sage/40 font-display text-sm font-bold text-sage transition-all duration-300 group-hover:scale-110 group-hover:border-amber group-hover:bg-amber group-hover:text-white">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-white/45">{cs.industry}</p>
                          <h3 className="mt-1 font-display text-lg font-bold transition-colors group-hover:text-sage md:text-xl">
                            {displayName(cs)}
                          </h3>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {cs.results.slice(0, 2).map((r) => (
                              <span
                                key={r.label}
                                className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 transition-colors duration-300 group-hover:bg-amber/25"
                              >
                                {r.value} {r.label.split("(")[0].trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span
                          aria-hidden
                          className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-amber group-hover:bg-amber md:flex"
                        >
                          <span className="arrow-nudge text-lg leading-none">{isRtl(locale) ? "←" : "→"}</span>
                        </span>
                      </Link>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <FaqSection faqs={s.faqs} locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}
