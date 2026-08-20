import Link from "next/link";
import Image from "next/image";
import type { Faq, Feature, Locale, ProcessStep, ResultStat, Testimonial } from "@/lib/types";
import { href, isRtl } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { SECTOR_IMAGE } from "@/lib/sector-media";
import { ConsultationLink } from "./ConsultationLink";
import { JsonLd } from "./JsonLd";
import { Reveal } from "./motion/Reveal";
import { CountUp } from "./motion/CountUp";

/**
 * Section eyebrow. `glow` wraps it in the same amber pill the hero kicker
 * wears, so section openings carry the headline's signal. The label keeps its
 * contextual colour rather than going amber like the hero's: amber text clears
 * contrast on the forest sections but not on cream or mint, so `dark` picks the
 * one that reads.
 */
export function Kicker({
  children,
  glow = false,
  dark = false,
}: {
  children: React.ReactNode;
  glow?: boolean;
  dark?: boolean;
}) {
  if (!glow) return <p className={`kicker ${dark ? "text-sage" : "text-fern"}`}>{children}</p>;

  return (
    <p className="kicker-pill pill-shimmer inline-flex items-center gap-2.5 rounded-full border border-amber/45 bg-amber/12 px-4 py-2 backdrop-blur-sm">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-80" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber shadow-[0_0_8px_2px_rgba(232,134,45,0.7)]" />
      </span>
      <span className={`kicker ${dark ? "text-amber" : "text-fern"}`}>{children}</span>
    </p>
  );
}

/**
 * The "all case studies" control. It was an underlined text link, which read as
 * body copy rather than as somewhere to go — this gives it an amber outline
 * that fills on hover and an arrow badge that inverts with it.
 *
 * The arrow is an element rather than part of the label, so it can animate and
 * so it flips for Arabic without three separate strings carrying a glyph.
 */
export function ArrowPill({
  to,
  children,
  locale = "en",
  dark = false,
}: {
  to: string;
  children: React.ReactNode;
  locale?: Locale;
  dark?: boolean;
}) {
  return (
    <Link
      href={to}
      className={`group/pill btn-fluid mt-6 inline-flex items-center gap-3 rounded-full border-2 px-5 py-2.5 font-bold transition-all duration-300 hover:shadow-lg hover:shadow-amber/30 ${
        dark
          ? "border-amber/60 bg-white/5 text-white hover:border-amber hover:bg-amber"
          : "border-amber/60 bg-amber/10 text-forest hover:border-amber hover:bg-amber hover:text-white"
      }`}
    >
      {children}
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber text-white transition-colors duration-300 group-hover/pill:bg-white group-hover/pill:text-amber">
        <span className="arrow-nudge text-sm leading-none">{isRtl(locale) ? "←" : "→"}</span>
      </span>
    </Link>
  );
}

/**
 * The white surface of a card, cut into shards that sit apart until hover.
 *
 * Each variant is a true partition of the rectangle — the polygons tile it with
 * no overlap and no gap — so once every shard is back in place the surface is
 * continuous. The interior vertices are shared between neighbouring shards,
 * which is what makes the pieces read as one card that broke rather than as
 * shapes that happen to be near each other.
 *
 * Three variants, picked by card index, so a grid does not repeat one break.
 */
type Shard = { clip: string; tx: string; ty: string; r: string };

const SHATTER: Shard[][] = [
  [
    { clip: "polygon(0% 0%, 100% 0%, 100% 20%, 0% 30%)", tx: "-4px", ty: "-6px", r: "-0.6deg" },
    { clip: "polygon(0% 30%, 44% 25.6%, 50% 62%, 0% 66%)", tx: "-7px", ty: "2px", r: "0.7deg" },
    { clip: "polygon(44% 25.6%, 100% 20%, 100% 58%, 50% 62%)", tx: "6px", ty: "-3px", r: "0.5deg" },
    { clip: "polygon(0% 66%, 50% 62%, 100% 58%, 100% 100%, 0% 100%)", tx: "2px", ty: "7px", r: "-0.5deg" },
  ],
  [
    { clip: "polygon(0% 0%, 100% 0%, 100% 34%, 0% 22%)", tx: "5px", ty: "-6px", r: "0.5deg" },
    { clip: "polygon(0% 22%, 56% 28.7%, 48% 65.2%, 0% 70%)", tx: "-6px", ty: "-2px", r: "-0.7deg" },
    { clip: "polygon(56% 28.7%, 100% 34%, 100% 60%, 48% 65.2%)", tx: "7px", ty: "3px", r: "0.6deg" },
    { clip: "polygon(0% 70%, 48% 65.2%, 100% 60%, 100% 100%, 0% 100%)", tx: "-3px", ty: "7px", r: "-0.4deg" },
  ],
  [
    { clip: "polygon(0% 0%, 38% 0%, 46% 37.6%, 0% 44%)", tx: "-6px", ty: "-5px", r: "-0.7deg" },
    { clip: "polygon(38% 0%, 100% 0%, 100% 30%, 46% 37.6%)", tx: "6px", ty: "-6px", r: "0.6deg" },
    { clip: "polygon(0% 44%, 46% 37.6%, 100% 30%, 100% 80%, 0% 74%)", tx: "-4px", ty: "3px", r: "0.45deg" },
    { clip: "polygon(0% 74%, 100% 80%, 100% 100%, 0% 100%)", tx: "3px", ty: "7px", r: "-0.6deg" },
  ],
];

export function ShatterSurface({ index = 0 }: { index?: number }) {
  return (
    <span className="shatter" aria-hidden>
      {SHATTER[index % SHATTER.length].map((sh, n) => (
        <i
          key={n}
          style={{ "--clip": sh.clip, "--tx": sh.tx, "--ty": sh.ty, "--r": sh.r } as React.CSSProperties}
        />
      ))}
    </span>
  );
}

/** Decorative animated blobs for dark sections. */
export function HeroBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="blob absolute -top-24 -end-24 h-96 w-96 rounded-full bg-fern/30 blur-3xl" />
      <div className="blob blob-slow absolute -bottom-32 start-1/4 h-80 w-80 rounded-full bg-amber/15 blur-3xl" />
      <div className="blob blob-slow absolute top-1/3 -start-20 h-64 w-64 rounded-full bg-sage/20 blur-3xl" />
    </div>
  );
}

/**
 * Layered atmosphere for the home hero: drifting aurora washes, a creeping dot
 * lattice, a slow conic ring and a vignette that keeps the headline legible.
 */
export function AuroraField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="aurora aurora-a absolute -top-1/3 -end-1/4 h-[46rem] w-[46rem] rounded-full bg-fern/55 blur-[110px]" />
      <div className="aurora aurora-b absolute -bottom-1/2 start-0 h-[38rem] w-[38rem] rounded-full bg-amber/25 blur-[120px]" />
      <div className="aurora aurora-c absolute top-1/4 start-1/3 h-[32rem] w-[32rem] rounded-full bg-sage/35 blur-[130px]" />

      <div
        className="grid-creep absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute -top-40 end-[-12rem] hidden h-[34rem] w-[34rem] lg:block">
        <div
          className="spin-slow h-full w-full rounded-full opacity-[0.24]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(107,165,140,0.95) 90deg, transparent 200deg, rgba(232,134,45,0.8) 300deg, transparent 360deg)",
            maskImage: "radial-gradient(circle, transparent 61%, #000 62%, #000 66%, transparent 67%)",
            WebkitMaskImage: "radial-gradient(circle, transparent 61%, #000 62%, #000 66%, transparent 67%)",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-forest/25 via-transparent to-forest/60" />
    </div>
  );
}

/**
 * Rotating wireframe globe with orbit rings, for the testimonials band.
 * Every spinning element is wrapped in a positioning div, because the spin
 * animation's transform would otherwise overwrite Tailwind's centring translate.
 */
export function GlobeField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[34rem] w-[34rem] rounded-full bg-fern/25 blur-[130px]" />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="spin-slow h-[52rem] w-[52rem] rounded-full border border-white/[0.06]" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] rounded-full border border-white/[0.08]" />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          className="spin-slow h-[30rem] w-[30rem] opacity-[0.16]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="white"
          strokeWidth="0.7"
          style={{ animationDuration: "60s" }}
        >
          <circle cx="100" cy="100" r="92" />
          <ellipse cx="100" cy="100" rx="92" ry="30" />
          <ellipse cx="100" cy="100" rx="92" ry="62" />
          <ellipse cx="100" cy="100" rx="30" ry="92" />
          <ellipse cx="100" cy="100" rx="62" ry="92" />
          <path d="M8 100h184M100 8v184" />
        </svg>
      </div>

      <div
        className="grid-creep absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

/** One line icon per service, keyed by slug. Falls back to a generic mark. */
export function ServiceIcon({ slug }: { slug: string }) {
  const paths: Record<string, React.ReactNode> = {
    "video-editing": <path d="M4 5h16v14H4zM9 5v14M15 5v14M4 9h5M4 15h5M15 9h5M15 15h5" />,
    "video-shoots": <path d="M2 7h11v10H2zM13 10l7-3v10l-7-3" />,
    "ugc-ads": <path d="M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM4 21a8 8 0 0 1 16 0" />,
    "product-shoots": <path d="M4 8h16v12H4zM9 8V5h6v3M12 12v4M10 14h4" />,
    "ad-creatives": <path d="M4 4h16v12H4zM8 20h8M12 16v4M8 10l3 3 5-5" />,
    "performance-marketing": <path d="M3 17l5-5 4 4 8-8M21 8v5h-5" />,
    seo: <path d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14ZM20 20l-4-4" />,
    "social-media": <path d="M18 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM6 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM18 14a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" />,
    shopify: <path d="M6 8h12l-1 12H7L6 8ZM9 8V6a3 3 0 0 1 6 0v2" />,
    wordpress: <path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18ZM4 9h16M7 9l3 10M14 9l3 10" />,
    magento: <path d="M12 3 5 7v10l2 1V9l5-3 5 3v9l2-1V7l-7-4ZM12 11l-2 1v6l2 1 2-1v-6l-2-1Z" />,
    "custom-development": <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
    "crm-erp": <path d="M4 6h16v4H4zM4 14h16v4H4zM8 8h.01M8 16h.01" />,
    "mobile-apps": <path d="M7 3h10v18H7zM11 18h2" />,
  };
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[slug] ?? <path d="M12 3v18M3 12h18" />}
    </svg>
  );
}

export function PageHero({
  kicker,
  headline,
  sub,
  dark = false,
  image,
  imageAlt,
}: {
  kicker: string;
  headline: string;
  sub?: string;
  dark?: boolean;
  /** Optional artwork; when present the hero splits into copy + image. */
  image?: string;
  imageAlt?: string;
}) {
  const copy = (
    <div>
      <p className={`kicker hero-enter ${dark ? "text-sage" : "text-fern"}`}>{kicker}</p>
      <h1
        className="hero-enter mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl"
        style={{ "--enter-delay": "0.12s" } as React.CSSProperties}
      >
        {headline}
      </h1>
      {sub && (
        <p
          className={`hero-enter mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-white/80" : "text-ink/75"}`}
          style={{ "--enter-delay": "0.24s" } as React.CSSProperties}
        >
          {sub}
        </p>
      )}
    </div>
  );

  return (
    <section className={`relative ${dark ? "bg-forest text-white" : "bg-cream ribbon-bg"}`}>
      {dark && <HeroBlobs />}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        {image ? (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {copy}
            <div
              className="hero-enter relative"
              style={{ "--enter-delay": "0.36s" } as React.CSSProperties}
            >
              {/* Warm halo so the photo sits in the section rather than on it. */}
              <div aria-hidden className="absolute -inset-8 rounded-[2.5rem] bg-fern/25 blur-3xl" />
              <div aria-hidden className="absolute -bottom-5 -end-5 h-24 w-24 rounded-full bg-amber/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/50 ring-1 ring-white/15">
                {/* All sector photos are pre-cropped to the same 3:2, so every hero
                    frame is identical rather than varying page to page. */}
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  width={SECTOR_IMAGE.width}
                  height={SECTOR_IMAGE.height}
                  priority
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="aspect-3/2 w-full object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-forest/50 to-transparent"
                />
              </div>
            </div>
          </div>
        ) : (
          copy
        )}
      </div>
    </section>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-3xl space-y-5 text-base leading-relaxed text-ink/85 md:text-lg">
      {paragraphs.map((p, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <p>{p}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <Reveal key={f.title} delay={(i % 3) * 0.08} from={i % 2 === 0 ? "left" : "right"}>
          <div className="card-lift h-full rounded-2xl border border-mint bg-white p-6 hover:border-fern hover:shadow-lg">
            <span className="font-display text-sm font-bold text-sage">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-display text-lg font-semibold text-forest">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{f.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ProcessList({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative space-y-8 before:absolute before:start-5 before:top-4 before:bottom-4 before:w-px before:bg-mint">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.1} from="left">
          <li className="relative flex gap-5">
            <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm font-bold text-white ring-4 ring-cream">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-forest">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/75">{s.desc}</p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function StatBand({ stats, dark = true }: { stats: ResultStat[]; dark?: boolean }) {
  return (
    <div className={`grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4 ${dark ? "bg-white/10" : "bg-mint"}`}>
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.09} from="snap" className="h-full">
          <div className={`h-full p-6 ${dark ? "bg-forest text-white" : "bg-white"}`}>
            <p className={`font-display text-3xl font-bold md:text-4xl ${dark ? "text-amber" : "text-fern"}`}>
              <CountUp value={s.value} />
            </p>
            <p className={`mt-1 text-sm ${dark ? "text-white/75" : "text-ink/70"}`}>{s.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/**
 * Everything we do, as three vertical loops. Each column is the same service
 * list rotated to a different starting point and given its own duration, with
 * the middle one running upward — so no two columns ever read as the same belt.
 */
export function ServiceLoops({
  services,
  sectors = [],
  kicker,
  title,
  sub,
  locale = "en",
}: {
  services: { slug: string; name: string; sector: string }[];
  sectors?: { slug: string; name: string }[];
  kicker: string;
  title: string;
  sub?: string;
  locale?: Locale;
}) {
  if (services.length === 0) return null;
  const step = Math.max(1, Math.floor(services.length / 3));
  const columns = [0, 1, 2].map((col) => {
    const start = (col * step) % services.length;
    return [...services.slice(start), ...services.slice(0, start)];
  });

  // Gradient the closing word, matching the hero headline's treatment.
  const words = title.split(" ");
  const lead = words.slice(0, -1).join(" ");
  const last = words[words.length - 1];

  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <HeroBlobs />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
          <Reveal from="left">
            <p className="kicker flex items-center gap-2.5 text-sage">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
              </span>
              {kicker}
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] md:text-4xl lg:text-5xl">
              {lead} <span className="gradient-text">{last}</span>
            </h2>
            <div className="mt-5 h-1 w-14 rounded-full bg-amber" />

            {sub && <p className="mt-5 leading-relaxed text-white/70">{sub}</p>}

            {sectors.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <Link
                    key={s.slug}
                    href={href(locale, `/${s.slug}/`)}
                    className="btn-fluid rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/75 hover:border-amber/60 hover:bg-white/10 hover:text-white"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </Reveal>

          <div
            className="loop-wrap -mx-3 grid h-[26rem] grid-cols-2 gap-3 overflow-hidden px-3 sm:grid-cols-3 md:h-[32rem] md:gap-4"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)",
            }}
            aria-hidden
          >
            {columns.map((col, i) => (
              <div
                key={i}
                className={`loop-col space-y-3 md:space-y-4 ${i === 1 ? "loop-col-rev" : ""} ${
                  i === 2 ? "hidden sm:block" : ""
                }`}
                style={{ "--loop-dur": `${30 + i * 9}s` } as React.CSSProperties}
              >
                {[...col, ...col].map((sv, j) => (
                  <div
                    key={`${sv.slug}-${j}`}
                    className="btn-fluid rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-sm hover:border-amber/60 hover:bg-white/[0.12] md:p-5"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-sage">{sv.sector}</p>
                    <p className="mt-1.5 font-display text-sm font-bold leading-snug md:text-base">{sv.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* The loops are decorative; keep the real links crawlable and reachable. */}
        <ul className="sr-only">
          {services.map((sv) => (
            <li key={sv.slug}>
              <Link href={href(locale, `/${sv.sector}/${sv.slug}/`)}>{sv.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FaqSection({
  faqs,
  title,
  locale = "en",
}: {
  faqs: Faq[];
  title?: string;
  locale?: Locale;
}) {
  if (faqs.length === 0) return null;
  const t = ui[locale];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      {/* Split: the intro stays pinned on the left while the answers scroll past. */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
        <Reveal from="left" className="lg:sticky lg:top-28 lg:self-start">
          <Kicker glow>{t.faqKicker}</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-forest md:text-4xl">{title ?? t.faqTitle}</h2>
          <div className="mt-5 h-1 w-14 rounded-full bg-amber" />
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05} from="right">
              <details className="group rounded-2xl border border-mint bg-white px-5 transition-colors duration-300 open:border-fern hover:border-fern">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display font-semibold text-ink transition-colors group-hover:text-forest">
                  {f.q}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint text-lg text-fern transition-all duration-300 group-open:rotate-45 group-open:bg-amber group-open:text-white"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="faq-answer pb-5 text-sm leading-relaxed text-ink/75">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialCard({ t, dark = false }: { t: Testimonial; dark?: boolean }) {
  return (
    <figure
      className={`card-lift flex h-full flex-col justify-between rounded-2xl p-6 ${
        dark
          ? "glass hover:border-white/35 hover:shadow-2xl hover:shadow-black/30"
          : "border border-mint bg-white hover:border-fern hover:shadow-lg"
      }`}
    >
      <div>
        <span aria-hidden className={`font-display text-4xl leading-none ${dark ? "text-amber" : "text-sage"}`}>
          &ldquo;
        </span>
        <blockquote className={`mt-1 text-sm leading-relaxed ${dark ? "text-white/80" : "text-ink/85"}`}>
          {t.quote}
        </blockquote>
      </div>
      <figcaption className={`mt-4 text-sm font-semibold ${dark ? "text-white" : "text-forest"}`}>
        {t.author}
        {t.source && (
          <span className={`font-normal ${dark ? "text-white/55" : "text-ink/60"}`}> · {t.source}</span>
        )}
      </figcaption>
    </figure>
  );
}

export function CtaBand({
  headline,
  sub,
  locale = "en",
}: {
  headline?: string;
  sub?: string;
  locale?: Locale;
}) {
  const t = ui[locale];
  return (
    <section className="relative overflow-hidden bg-forest">
      <HeroBlobs />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <Kicker glow dark>{t.letsTalk}</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{headline ?? t.ctaHeadline}</h2>
          <p className="mt-3 max-w-xl text-white/80">{sub ?? t.ctaSub}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <ConsultationLink
            locale={locale}
            className="btn-fluid btn-shine inline-block shrink-0 rounded-full bg-amber px-7 py-3.5 font-semibold text-white shadow-lg shadow-amber/25 hover:brightness-110"
          >
            {t.cta}
          </ConsultationLink>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Named, top-billed clients — deliberately a static grid rather than a marquee,
 * so these read as specific claims instead of blending into the 36-logo roster
 * further down the page.
 */
export function FeaturedClients({
  clients,
  locale = "en",
}: {
  clients: { name: string; file: string }[];
  locale?: Locale;
}) {
  if (clients.length === 0) return null;
  const t = ui[locale];

  return (
    <section className="border-y border-mint bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <div className="text-center">
            <Kicker glow>{t.featuredKicker}</Kicker>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-forest md:text-4xl">
              {t.featuredTitle}
            </h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-amber" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((cl, i) => (
            <Reveal key={cl.file} delay={(i % 4) * 0.07} from="snap">
              <div className="btn-fluid group flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-mint bg-white p-6 hover:border-fern hover:shadow-xl">
                <div className="flex h-16 items-center justify-center">
                  <Image
                    src={`/clients/${cl.file}`}
                    alt={`${cl.name} logo`}
                    width={200}
                    height={100}
                    className="max-h-16 w-auto object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <p className="text-center text-xs font-semibold uppercase tracking-wider text-ink/60 transition-colors duration-300 group-hover:text-forest">
                  {cl.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LogoWall({
  logos,
  title,
  locale = "en",
  marquee = false,
}: {
  logos: { name: string; file: string }[];
  title?: string;
  locale?: Locale;
  marquee?: boolean;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      {title && (
        <Reveal className="text-center">
          <Kicker glow>{ui[locale].ourClients}</Kicker>
          <h2 className="mt-3 text-3xl font-bold text-forest">{title}</h2>
        </Reveal>
      )}
      {marquee ? (
        <div className="marquee mt-8 overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {/* py-5 above gives the hover scale room to grow before overflow clips it. */}
          <div className="marquee-track flex w-max items-center gap-5">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={`${l.file}-${i}`}
                className="btn-fluid group flex h-32 w-64 shrink-0 items-center justify-center rounded-2xl border border-mint bg-white p-4 hover:border-fern hover:shadow-lg"
                title={l.name}
              >
                {/* Most client logos are wide, so tile width — not max-height —
                    is what actually caps their size here. */}
                <Image
                  src={`/clients/${l.file}`}
                  alt={`${l.name} logo`}
                  width={240}
                  height={120}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {logos.map((l, i) => (
            <Reveal key={l.file} delay={(i % 6) * 0.05}>
              <div
                className="card-lift flex items-center justify-center rounded-xl border border-mint bg-white p-4 hover:border-fern"
                title={l.name}
              >
                <Image
                  src={`/clients/${l.file}`}
                  alt={`${l.name} logo`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
                />
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: it.label,
            item: `https://thedigitalmarketing.services${it.href}`,
          })),
        }}
      />
      <ol className="flex flex-wrap gap-1 text-xs text-ink/60">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden>/</span>}
            {i < items.length - 1 ? (
              <Link href={it.href} className="transition-colors hover:text-forest">{it.label}</Link>
            ) : (
              <span aria-current="page" className="text-ink/80">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
