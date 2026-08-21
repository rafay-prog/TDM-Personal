import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/types";
import { href, isRtl } from "@/lib/i18n";
import { site } from "@/lib/site";
import { officeFlag } from "@/lib/flags";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import { ContactForm } from "@/components/ContactForm";
import {
  Breadcrumbs,
  CtaBand,
  FaqSection,
  Kicker,
  LogoWall,
  PageHero,
  Prose,
  ShatterDefs,
  ShatterSurface,
  StatBand,
  TestimonialCard,
} from "@/components/Sections";
import { Reveal } from "@/components/motion/Reveal";

const displayName = (cs: { anonymous: boolean; publicName: string; client: string }) =>
  cs.anonymous ? cs.publicName : cs.client;

export function AboutView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const t = ui[locale];
  const p = c.pages.about;
  const home = c.pages.home;

  return (
    <>
      <PageHero kicker={p.hero.kicker} headline={p.hero.headline} sub={p.hero.sub} dark />
      <Breadcrumbs
        items={[
          { label: t.home, href: href(locale, "/") },
          { label: t.about, href: href(locale, "/about/") },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Prose paragraphs={p.intro} />
        <div className="mt-10">
          <StatBand
            stats={[
              { value: site.stats.satisfaction, label: home.statLabels.satisfaction },
              { value: site.stats.clients, label: home.statLabels.clients },
              { value: site.stats.specialists, label: home.statLabels.specialists },
              { value: site.stats.countries, label: home.statLabels.countries },
            ]}
          />
        </div>
      </section>

      <section className="bg-mint/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="group sheen sheen-dark card-lift relative h-full overflow-hidden rounded-3xl bg-fern p-8 text-white">
                <h2 className="kicker text-white/80">{p.missionLabel}</h2>
                <p className="mt-4 text-lg font-medium leading-relaxed">{p.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="group sheen sheen-dark card-lift relative h-full overflow-hidden rounded-3xl bg-forest p-8 text-white">
                <h2 className="kicker text-white/80">{p.visionLabel}</h2>
                <p className="mt-4 text-lg font-medium leading-relaxed">{p.vision}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <Reveal>
          <Kicker>{p.leadershipKicker}</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-forest">{p.leadershipTitle}</h2>
          <p className="mt-4 max-w-2xl text-ink/75">{c.teamIntro}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {c.leadership.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="group sheen card-lift relative h-full rounded-3xl border border-mint bg-white p-6 text-center hover:border-fern hover:shadow-2xl">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-mint font-display text-2xl font-bold text-forest transition-all duration-300 group-hover:scale-110 group-hover:bg-amber group-hover:text-white">
                  {m.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-forest">{m.name}</h3>
                <p className="mt-1 text-sm text-ink/70">{m.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mint/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <Reveal>
            <Kicker>{p.presenceKicker}</Kicker>
            <h2 className="mt-3 text-3xl font-bold text-forest">{p.presenceTitle}</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.offices.map((o, i) => (
              <Reveal key={o.slug} delay={(i % 4) * 0.07}>
                <Link
                  href={href(locale, `/locations/${o.slug}/`)}
                  className="group sheen card-lift relative block h-full rounded-2xl border border-mint bg-white p-5 hover:border-fern hover:shadow-xl"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber">{o.roleLabel}</p>
                  {/* The flag sits beside the place name rather than floating in
                      a corner, so it reads as part of the label. Decorative:
                      the country is already written next to it. */}
                  <div className="mt-1 flex items-start gap-2.5">
                    {officeFlag[o.slug] && (
                      <Image
                        src={officeFlag[o.slug].src}
                        alt=""
                        aria-hidden
                        width={officeFlag[o.slug].width}
                        height={officeFlag[o.slug].height}
                        className="mt-[3px] h-3.5 w-auto shrink-0 rounded-[2px] shadow-sm ring-1 ring-ink/15 transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                    <p className="font-display font-semibold text-forest">
                      {o.city ? `${o.city}, ` : ""}
                      {o.country}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-ink/70">
            {p.partnersNote} {site.partnerBadges.join(" · ")}
          </p>
        </div>
      </section>

      <FaqSection faqs={p.faqs} locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}

export function ContactView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const t = ui[locale];
  const p = c.pages.contact;

  return (
    <>
      <PageHero kicker={p.hero.kicker} headline={p.hero.headline} sub={p.hero.sub} dark />
      <Breadcrumbs
        items={[
          { label: t.home, href: href(locale, "/") },
          { label: t.contact, href: href(locale, "/contact/") },
        ]}
      />

      <section className="ribbon-bg mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <div className="rounded-2xl border border-mint bg-white p-6 shadow-sm md:p-8">
              <ContactForm locale={locale} />
            </div>
          </Reveal>
          <aside className="space-y-6">
            <Reveal delay={0.12}>
            <div className="card-lift rounded-2xl border border-mint bg-white p-6 hover:border-fern hover:shadow-lg">
              <Kicker>{p.directLabel}</Kicker>
              <p className="mt-3 text-sm leading-relaxed">
                <a className="font-semibold text-forest hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <br />
                <a className="text-ink/80 hover:text-forest" href={`tel:${site.phoneHref}`} dir="ltr">
                  {site.phone}
                </a>{" "}
                <span className="text-ink/50">(UAE)</span>
                <br />
                <a className="text-ink/80 hover:text-forest" href={`tel:${site.phoneUk.replace(/\s/g, "")}`} dir="ltr">
                  {site.phoneUk}
                </a>{" "}
                <span className="text-ink/50">(UK)</span>
              </p>
            </div>
            </Reveal>
            <Reveal delay={0.24}>
            <div className="card-lift rounded-2xl border border-mint bg-white p-6 hover:border-fern hover:shadow-lg">
              <Kicker>{p.officesLabel}</Kicker>
              <ul className="mt-3 space-y-3 text-sm text-ink/80">
                {c.offices
                  .filter((o) => o.address)
                  .map((o) => (
                    <li key={o.slug}>
                      <p className="font-semibold text-forest">
                        {o.city ? `${o.city}, ` : ""}
                        {o.country}
                      </p>
                      <p className="text-xs leading-relaxed text-ink/60">{o.address}</p>
                    </li>
                  ))}
              </ul>
            </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <FaqSection faqs={p.faqs} locale={locale} />
    </>
  );
}

export function ClientsView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const t = ui[locale];
  const p = c.pages.clientsPage;

  return (
    <>
      <PageHero kicker={p.hero.kicker} headline={p.hero.headline} sub={p.hero.sub} dark />
      <Breadcrumbs
        items={[
          { label: t.home, href: href(locale, "/") },
          { label: t.ourClients, href: href(locale, "/clients/") },
        ]}
      />

      <LogoWall logos={c.clientLogos} locale={locale} />

      <section className="bg-mint/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <Reveal>
            <Kicker>{t.clientFeedback}</Kicker>
            <h2 className="mt-3 text-3xl font-bold text-forest">{p.inTheirWords}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.testimonials.map((tm, i) => (
              <Reveal key={tm.quote} delay={(i % 3) * 0.08}>
                <TestimonialCard t={tm} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}

export function PortfolioView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const t = ui[locale];
  const p = c.pages.portfolioPage;

  return (
    <>
      <PageHero kicker={p.hero.kicker} headline={p.hero.headline} sub={p.hero.sub} dark />
      <Breadcrumbs
        items={[
          { label: t.home, href: href(locale, "/") },
          { label: t.portfolio, href: href(locale, "/portfolio/") },
        ]}
      />

      <ShatterDefs />

      {/* Headline numbers behind the work */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <StatBand
          stats={[
            { value: site.stats.satisfaction, label: c.pages.home.statLabels.satisfaction },
            { value: site.stats.clients, label: c.pages.home.statLabels.clients },
            { value: site.stats.bestRoas, label: c.pages.home.statLabels.roas },
            { value: site.stats.countries, label: c.pages.home.statLabels.countries },
          ]}
        />
        {/* Sector jump pills */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            {c.sectors
              .filter((s) => c.caseStudies.some((cs) => cs.sector === s.slug))
              .map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="btn-fluid rounded-full border border-mint bg-white px-5 py-2 text-sm font-semibold text-forest hover:border-fern hover:bg-mint hover:shadow-md"
                >
                  {s.name}
                </a>
              ))}
          </div>
        </Reveal>
      </section>

      {c.sectors.map((s, si) => {
        const items = c.caseStudies.filter((cs) => cs.sector === s.slug);
        if (items.length === 0) return null;
        return (
          <div
            key={s.slug}
            // Texture on every band, tint alternating — the tint alone carried
            // the rhythm before, which left half the page reading as blank.
            className={`ribbon-bg ${si % 2 === 1 ? "bg-mint/50" : ""}`}
          >
            <section id={s.slug} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6">
              <Reveal>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl font-bold text-mint md:text-6xl" aria-hidden>
                    {String(si + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <Kicker>{s.name}</Kicker>
                    <h2 className="mt-2 text-2xl font-bold text-forest md:text-3xl">
                      <Link href={href(locale, `/${s.slug}/`)} className="group/title hover:text-fern">
                        {s.tagline}{" "}
                        <span className="arrow-nudge inline-block text-amber">
                          {isRtl(locale) ? "←" : "→"}
                        </span>
                      </Link>
                    </h2>
                    <div className="mt-4 h-1 w-14 rounded-full bg-amber" />
                  </div>
                </div>
              </Reveal>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((cs, i) => (
                  <Reveal
                    key={cs.slug}
                    delay={(i % 3) * 0.08}
                    from={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "snap"}
                    className="h-full"
                  >
                    <Link
                      href={href(locale, `/case-studies/${cs.slug}/`)}
                      className="group sheen card-lift relative flex h-full flex-col rounded-3xl border border-transparent p-6 transition-colors duration-300 hover:border-fern hover:shadow-2xl"
                    >
                      <ShatterSurface index={si * 2 + i} />
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-xs font-medium uppercase tracking-wide text-ink/50">{cs.industry}</p>
                        <span
                          aria-hidden
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-mint text-forest transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-white"
                        >
                          <span className="arrow-nudge leading-none">{isRtl(locale) ? "←" : "→"}</span>
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-bold text-forest transition-colors group-hover:text-fern">
                        {displayName(cs)}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">{cs.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cs.results.slice(0, 2).map((r) => (
                          <span key={r.label} className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-forest">
                            {r.value} {r.label.split("(")[0].trim()}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>
          </div>
        );
      })}

      <CtaBand locale={locale} headline={p.ctaHeadline} sub={p.ctaSub} />
    </>
  );
}
