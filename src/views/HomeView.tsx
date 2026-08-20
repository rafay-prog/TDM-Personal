import Link from "next/link";
import type { Locale } from "@/lib/types";
import { href, isRtl } from "@/lib/i18n";
import { site } from "@/lib/site";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import {
  AuroraField,
  CtaBand,
  FaqSection,
  FeaturedClients,
  HeroBlobs,
  Kicker,
  LogoWall,
  ServiceLoops,
  TestimonialCard,
} from "@/components/Sections";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

const displayName = (cs: { anonymous: boolean; publicName: string; client: string }) =>
  cs.anonymous ? cs.publicName : cs.client;

export function HomeView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const t = ui[locale];
  const p = c.pages.home;
  const featured = c.caseStudies.slice(0, 3);

  const heroStats = [
    { value: site.stats.satisfaction, label: p.statLabels.satisfaction },
    { value: site.stats.clients, label: p.statLabels.clients },
    { value: site.stats.specialists, label: p.statLabels.specialists },
    { value: site.stats.bestRoas, label: p.statLabels.roas },
  ];

  // Corner placements for the floating variant. Sits high and low on each side,
  // clear of the headline's vertical band. Each drifts on its own clock.
  const floatSlots = [
    { pos: "top-[19%] start-4 2xl:start-10", tilt: "-6deg", dur: "7s", delay: "0s" },
    { pos: "top-[27%] end-4 2xl:end-10", tilt: "5deg", dur: "8.5s", delay: "-2.5s" },
    { pos: "bottom-[20%] start-6 2xl:start-16", tilt: "4deg", dur: "9.5s", delay: "-1.2s" },
    { pos: "bottom-[27%] end-6 2xl:end-14", tilt: "-5deg", dur: "7.8s", delay: "-3.8s" },
  ];

  // The headline reveals word by word; everything else follows once it has landed.
  const words = p.heroHeadline.split(" ");
  const HEAD_START = 0.3;
  const HEAD_STEP = 0.13;
  const afterHeadline = HEAD_START + words.length * HEAD_STEP;

  return (
    <>
      <section className="relative overflow-hidden bg-forest text-white">
        <AuroraField />

        {heroStats.map((s, i) => (
          <div
            key={`float-${s.label}`}
            className={`float-card absolute z-10 hidden w-[196px] xl:block ${floatSlots[i].pos}`}
            style={
              {
                "--tilt": floatSlots[i].tilt,
                "--float-dur": floatSlots[i].dur,
                "--float-delay": floatSlots[i].delay,
              } as React.CSSProperties
            }
          >
            <div
              className="hero-enter btn-fluid glass rounded-2xl px-5 py-4 shadow-2xl shadow-black/30 hover:border-white/35"
              style={{ "--enter-delay": `${afterHeadline + 0.5 + i * 0.12}s` } as React.CSSProperties}
            >
              <p className="font-display text-3xl font-bold text-amber">
                <CountUp value={s.value} />
              </p>
              <p className="mt-1 text-xs leading-snug text-white/70">{s.label}</p>
            </div>
          </div>
        ))}
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 text-center sm:px-6 md:pb-14 md:pt-28">
          <div className="hero-enter flex justify-center">
            <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
              </span>
              <span className="kicker text-sage">{p.heroKicker}</span>
            </span>
          </div>

          {/* Narrower from xl so the floating stat cards have clearance either side. */}
          <h1 className="mx-auto mt-7 max-w-5xl font-display text-[2.2rem] font-bold leading-[1.08] md:text-5xl lg:text-6xl xl:max-w-3xl">
            {words.map((w, i) => (
              <span
                key={`${w}-${i}`}
                className={`word-rise ${i < words.length - 1 ? "me-[0.24em]" : ""}`}
                style={{ "--word-delay": `${HEAD_START + i * HEAD_STEP}s` } as React.CSSProperties}
              >
                {i === words.length - 1 ? <span className="gradient-text">{w}</span> : w}
              </span>
            ))}
          </h1>

          <p
            className="hero-enter mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
            style={{ "--enter-delay": `${afterHeadline + 0.15}s` } as React.CSSProperties}
          >
            {p.heroSub}
          </p>

          <div
            className="hero-enter mt-9 flex flex-wrap items-center justify-center gap-4"
            style={{ "--enter-delay": `${afterHeadline + 0.3}s` } as React.CSSProperties}
          >
            <Link
              href={href(locale, "/contact/")}
              className="btn-fluid btn-shine rounded-full bg-amber px-8 py-4 font-bold text-white shadow-xl shadow-amber/30"
            >
              {t.cta}
            </Link>
            <Link
              href={href(locale, "/case-studies/")}
              className="btn-fluid glass rounded-full px-8 py-4 font-bold text-white hover:border-white/40"
            >
              {t.seeResults}
            </Link>
          </div>

          <div
            className="hero-enter mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
            style={{ "--enter-delay": `${afterHeadline + 0.45}s` } as React.CSSProperties}
          >
            {site.partnerBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/55">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-sage" aria-hidden>
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {badge}
              </span>
            ))}
          </div>

          {/* Below xl the stats stay in flow; from xl they float at the corners.
              Only one copy is ever displayed, so screen readers see it once. */}
          <div
            className="hero-enter mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:hidden"
            style={{ "--enter-delay": `${afterHeadline + 0.6}s` } as React.CSSProperties}
          >
            {heroStats.map((s) => (
              <div key={s.label} className="glass card-lift rounded-2xl p-5 hover:border-white/30 hover:shadow-2xl">
                <p className="font-display text-3xl font-bold text-amber md:text-4xl">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1.5 text-sm leading-snug text-white/70">{s.label}</p>
              </div>
            ))}
          </div>

          <div
            className="hero-enter mt-8 flex justify-center"
            style={{ "--enter-delay": `${afterHeadline + 0.8}s` } as React.CSSProperties}
          >
            <span className="scroll-cue text-white/45" aria-hidden>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
      </section>

      {/* Split: the intro pins on the left, the divisions stack past it on the right. */}
      <section className="ribbon-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
            <Reveal from="left" className="lg:sticky lg:top-28 lg:self-start">
              <Kicker>{p.sectorsKicker}</Kicker>
              <h2 className="mt-3 text-3xl font-bold text-forest md:text-4xl">{p.sectorsTitle}</h2>
              <p className="mt-4 text-ink/75">{p.sectorsSub}</p>
              <div className="mt-5 h-1 w-14 rounded-full bg-amber" />
            </Reveal>

            <div className="space-y-4">
              {c.sectors.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.08} from={i % 2 === 0 ? "right" : "left"}>
                  <Link
                    href={href(locale, `/${s.slug}/`)}
                    className="group sheen card-lift grid grid-cols-[auto_1fr] items-start gap-5 rounded-3xl border border-mint bg-white p-6 hover:border-fern hover:shadow-2xl md:gap-7 md:p-8"
                  >
                    <span className="bento-index font-display text-3xl font-bold text-mint group-hover:text-sage md:text-5xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-forest md:text-2xl">{s.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-fern">{s.tagline}</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink/75">{s.intro[0]}</p>
                      <p className="mt-4 flex items-center gap-2 text-sm font-bold text-forest">
                        {t.explore} {s.name}
                        <span className="arrow-nudge" aria-hidden>
                          {isRtl(locale) ? "←" : "→"}
                        </span>
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceLoops
        services={c.services}
        sectors={c.sectors.map((s) => ({ slug: s.slug, name: s.name }))}
        kicker={t.servicesKicker}
        title={t.servicesTitle}
        sub={t.servicesSub}
        locale={locale}
      />

      <FeaturedClients clients={c.featuredClients} locale={locale} />

      {/* Numbered editorial rows rather than a card grid. */}
      <section className="bg-mint/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
            <Reveal from="left" className="lg:sticky lg:top-28 lg:self-start">
              <Kicker>{p.caseKicker}</Kicker>
              <h2 className="mt-3 text-3xl font-bold text-forest md:text-4xl">{p.caseTitle}</h2>
              <p className="mt-4 text-ink/75">{p.caseSub}</p>
              <Link
                href={href(locale, "/case-studies/")}
                className="mt-6 inline-block border-b-2 border-amber pb-1 font-bold text-forest transition-colors hover:text-fern"
              >
                {t.allCaseStudies}
              </Link>
            </Reveal>

            <ul className="border-t border-mint">
              {featured.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 0.08} from="right">
                  <li className="border-b border-mint">
                    <Link
                      href={href(locale, `/case-studies/${cs.slug}/`)}
                      className="group grid grid-cols-[auto_1fr] items-center gap-5 py-6 md:grid-cols-[auto_1fr_auto] md:gap-8"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-fern/40 font-display text-sm font-bold text-fern transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-ink/50">{cs.industry}</p>
                        <h3 className="mt-1 font-display text-lg font-bold text-forest transition-colors group-hover:text-fern md:text-xl">
                          {displayName(cs)}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {cs.results.slice(0, 2).map((r) => (
                            <span key={r.label} className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-forest">
                              {r.value} {r.label.split("(")[0].trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="hidden whitespace-nowrap text-xs font-bold uppercase tracking-wider text-forest md:block">
                        {t.learnMore}
                      </span>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* A two-column ruled spec list instead of equal-weight cards. */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <Kicker>{p.whyKicker}</Kicker>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-forest md:text-4xl">{p.whyTitle}</h2>
        </Reveal>
        <div className="mt-10 grid border-t border-mint sm:grid-cols-2 sm:gap-x-12 lg:gap-x-20">
          {p.whyItems.map(([title, desc], i) => (
            <Reveal key={title} delay={(i % 2) * 0.1} from={i % 2 === 0 ? "left" : "right"}>
              <div className="group flex h-full gap-5 border-b border-mint py-6">
                <span className="bento-index font-display text-2xl font-bold text-mint group-hover:text-sage">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-forest transition-colors group-hover:text-fern">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How we deliver — process band */}
      <section className="relative overflow-hidden bg-forest text-white">
        <HeroBlobs />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <Reveal>
            <p className="kicker text-sage">{t.homeProcess.kicker}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">{t.homeProcess.title}</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {t.homeProcess.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12} from="left">
                <div className="group relative">
                  {i < t.homeProcess.steps.length - 1 && (
                    <div
                      aria-hidden
                      className="absolute start-14 top-6 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-sage/60 to-transparent md:block"
                    />
                  )}
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-sage/40 bg-white/5 font-display text-lg font-bold text-amber transition-all duration-300 group-hover:scale-110 group-hover:bg-amber group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LogoWall logos={c.clientLogos} title={p.logosTitle} locale={locale} marquee />

      <section className="bg-mint/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Reveal>
            <Kicker>{t.clientFeedback}</Kicker>
            <h2 className="mt-3 text-3xl font-bold text-forest">{t.whatOurClientsSay}</h2>
          </Reveal>
          {/* Diagonal stagger so the three quotes don't sit on one flat line. */}
          <div className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.testimonials.slice(0, 3).map((tm, i) => (
              <Reveal
                key={tm.quote}
                delay={(i % 3) * 0.09}
                from="snap"
                className={i === 1 ? "lg:mt-10" : i === 2 ? "lg:mt-20" : ""}
              >
                <TestimonialCard t={tm} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={p.faqs} locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}
