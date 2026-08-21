import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/types";
import { href, isRtl } from "@/lib/i18n";
import { site } from "@/lib/site";
import { ConsultationLink } from "@/components/ConsultationLink";
import { asset } from "@/lib/asset-manifest";
import { getContent } from "@/content";
import { getCaseStudies } from "@/content/db";
import { ui } from "@/content/ui";
import {
  ArrowPill,
  AuroraField,
  CtaBand,
  FaqSection,
  FeaturedClients,
  GlobeField,
  HeroBlobs,
  Kicker,
  LogoWall,
  PartnerRail,
  ServiceLoops,
  TestimonialCard,
} from "@/components/Sections";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

const displayName = (cs: { anonymous: boolean; publicName: string; client: string }) =>
  cs.anonymous ? cs.publicName : cs.client;

/**
 * Artwork for the six "why" cards, in `whyItems` order. Alt text is generic
 * rather than translated because the cards' own titles carry the meaning and
 * these images are supporting, not informational.
 */
const whyImages = [
  { src: asset("why/01-ecommerce.webp"), alt: "Online store checkout on a laptop" },
  { src: asset("why/02-in-house.webp"), alt: "A team joining hands over a desk" },
  { src: asset("why/03-data.webp"), alt: "Scales weighing decisions against data" },
  { src: asset("why/04-reporting.webp"), alt: "Signing off an approved report" },
  { src: asset("why/05-multilingual.webp"), alt: "A globe labelled English, Français and العربية" },
  { src: asset("why/06-support.webp"), alt: "A handshake in front of a rising growth chart" },
];

/**
 * Icons for the six "why" cards, keyed by position. Safe because `whyItems`
 * holds the same six reasons in the same order in every locale.
 */
function WhyIcon({ index }: { index: number }) {
  const paths = [
    <path key="0" d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 8H6M9 21h.01M17 21h.01" />,
    <path key="1" d="M9 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM2 20a7 7 0 0 1 14 0M17 8a2.5 2.5 0 1 1 0 5M18 20a5.5 5.5 0 0 0-2-4.3" />,
    <path key="2" d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    <path key="3" d="M6 3h9l3 3v15H6zM15 3v4h4M9 12h6M9 16h4" />,
    <path key="4" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18ZM3 12h18M12 3c2.5 2.6 3.8 6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-6-3.8-9s1.3-6.4 3.8-9Z" />,
    <path key="5" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM5.6 5.6l3.2 3.2M15.2 15.2l3.2 3.2M18.4 5.6l-3.2 3.2M8.8 15.2l-3.2 3.2" />,
  ];
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[index] ?? paths[0]}
    </svg>
  );
}

export async function HomeView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const t = ui[locale];
  const p = c.pages.home;
  const featured = (await getCaseStudies(locale)).slice(0, 3);

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
            <span className="pill-shimmer inline-flex items-center gap-3 rounded-full border border-amber/45 bg-amber/12 px-5 py-2.5 shadow-lg shadow-amber/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-80" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber shadow-[0_0_10px_2px_rgba(232,134,45,0.7)]" />
              </span>
              <span className="kicker text-amber">{p.heroKicker}</span>
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
            <ConsultationLink
              locale={locale}
              className="btn-fluid btn-shine rounded-full bg-amber px-8 py-4 font-bold text-white shadow-xl shadow-amber/30"
            >
              {t.cta}
            </ConsultationLink>
            <Link
              href={href(locale, "/case-studies/")}
              className="btn-fluid glass rounded-full px-8 py-4 font-bold text-white hover:border-white/40"
            >
              {t.seeResults}
            </Link>
          </div>

          <div
            className="hero-enter mt-10"
            style={{ "--enter-delay": `${afterHeadline + 0.45}s` } as React.CSSProperties}
          >
            <PartnerRail />
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
              <Kicker glow>{p.sectorsKicker}</Kicker>
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
              <Kicker glow>{p.caseKicker}</Kicker>
              <h2 className="mt-3 text-3xl font-bold text-forest md:text-4xl">{p.caseTitle}</h2>
              <p className="mt-4 text-ink/75">{p.caseSub}</p>
              <ArrowPill to={href(locale, "/case-studies/")} locale={locale}>
                {t.allCaseStudies}
              </ArrowPill>
            </Reveal>

            <ul className="border-t border-mint">
              {featured.map((cs, i) => (
                <Reveal key={cs.slug} delay={i * 0.08} from="right">
                  <li className="border-b border-mint">
                    {/* The whole row is the link, so the affordance is an arrow
                        rather than a second "learn more" target beside it. */}
                    <Link
                      href={href(locale, `/case-studies/${cs.slug}/`)}
                      className="card-lift group -mx-4 grid grid-cols-[auto_1fr] items-center gap-5 rounded-2xl px-4 py-6 hover:bg-white hover:shadow-xl md:gap-7 md:px-6"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-fern/40 font-display text-sm font-bold text-fern transition-all duration-300 group-hover:scale-110 group-hover:border-amber group-hover:bg-amber group-hover:text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-ink/50">{cs.industry}</p>
                        {/* The arrow rides beside the title rather than in a
                            column of its own, which stranded it a screen-width
                            away from the text it belongs to. */}
                        <div className="mt-1 flex items-center gap-3">
                          <h3 className="font-display text-lg font-bold text-forest transition-colors group-hover:text-fern md:text-xl">
                            {displayName(cs)}
                          </h3>
                          <span
                            aria-hidden
                            className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-mint text-forest transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-white md:flex"
                          >
                            <span className="arrow-nudge text-base leading-none">{isRtl(locale) ? "←" : "→"}</span>
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {cs.results.slice(0, 2).map((r) => (
                            <span
                              key={r.label}
                              className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-forest transition-colors duration-300 group-hover:bg-amber/15 group-hover:text-forest"
                            >
                              {r.value} {r.label.split("(")[0].trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Six reasons as cards, three to a row. */}
      <section className="ribbon-bg border-y border-mint">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <Reveal>
            <div className="text-center">
              <Kicker glow>{p.whyKicker}</Kicker>
              <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold text-forest md:text-4xl">{p.whyTitle}</h2>
              <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-amber" />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.whyItems.map(([title, desc], i) => (
              <Reveal
                key={title}
                delay={(i % 3) * 0.08}
                from={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "snap"}
                className="h-full"
              >
                <div className="group sheen card-lift relative flex h-full flex-col overflow-hidden rounded-3xl border border-mint bg-white hover:border-fern hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={whyImages[i].src}
                      alt={whyImages[i].alt}
                      width={800}
                      height={500}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="aspect-8/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/45 to-transparent" />
                    {/* Sits fully inside the image — the wrapper clips, so anything
                        hanging over the edge would be cut in half. */}
                    <span className="absolute bottom-4 start-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-fern shadow-lg ring-1 ring-white/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber group-hover:text-white">
                      <WhyIcon index={i} />
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-lg font-bold text-forest transition-colors duration-300 group-hover:text-fern">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink/75">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
            <Kicker glow dark>{t.homeProcess.kicker}</Kicker>
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

      {/* Quotes drifting in orbit around a slowly turning globe. */}
      <section className="relative overflow-hidden bg-forest text-white">
        <GlobeField />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <Reveal>
            <div className="text-center">
              <p className="kicker flex items-center justify-center gap-2.5 text-sage">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                </span>
                {t.clientFeedback}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{t.whatOurClientsSay}</h2>
              <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-amber" />
            </div>
          </Reveal>

          <div className="mt-14 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.testimonials.slice(0, 3).map((tm, i) => (
              <Reveal
                key={tm.quote}
                delay={(i % 3) * 0.09}
                from="snap"
                className={i === 1 ? "lg:mt-16" : i === 2 ? "lg:mt-8" : ""}
              >
                <div
                  className="float-card"
                  style={
                    {
                      "--tilt": ["-2.5deg", "2deg", "-1.5deg"][i],
                      "--float-dur": ["8s", "10.5s", "9.2s"][i],
                      "--float-delay": ["0s", "-3.4s", "-6.1s"][i],
                    } as React.CSSProperties
                  }
                >
                  <TestimonialCard t={tm} dark />
                </div>
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
