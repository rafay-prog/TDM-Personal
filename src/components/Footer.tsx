import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/types";
import { href } from "@/lib/i18n";
import { site } from "@/lib/site";
import { ui } from "@/content/ui";
import { getContent } from "@/content";

const servicePaths = [
  "/media/ugc-ads/",
  "/marketing/performance-marketing/",
  "/marketing/seo/",
  "/marketing/social-media/",
  "/development/shopify/",
  "/development/wordpress/",
  "/development/crm-erp/",
  "/staff-augmentation/",
];

const languageSwitch: { locale: Locale; label: string }[] = [
  { locale: "en", label: "English" },
  { locale: "fr", label: "Français" },
  { locale: "ar", label: "العربية" },
];

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      href={to}
      className="group inline-flex items-center gap-1.5 text-white/75 transition-all duration-300 hover:translate-x-1 hover:text-white rtl:hover:-translate-x-1"
    >
      <span className="h-px w-0 bg-amber transition-all duration-300 group-hover:w-3" aria-hidden />
      {children}
    </Link>
  );
}

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = ui[locale];
  const c = getContent(locale);

  const serviceLinks = servicePaths.map((p) => {
    if (p === "/staff-augmentation/") {
      return { label: t.staffAugmentation, path: p };
    }
    const [, sector, slug] = p.split("/");
    const sv = c.services.find((s) => s.sector === sector && s.slug === slug);
    return { label: sv?.navLabel ?? sv?.name ?? slug, path: p };
  });

  const companyLinks = [
    { label: t.about, path: "/about/" },
    { label: t.portfolio, path: "/portfolio/" },
    { label: t.caseStudiesLabel, path: "/case-studies/" },
    { label: t.ourClients, path: "/clients/" },
    ...(locale === "en" ? [{ label: t.blog, path: "/blog/" }] : []),
    { label: t.contact, path: "/contact/" },
    ...(locale === "en" ? [{ label: "Terms & Conditions", path: "/terms-and-conditions/" }] : []),
  ];

  return (
    <footer className="relative overflow-hidden bg-forest text-white">
      {/* gradient accent line */}
      <div className="h-1 bg-gradient-to-r from-forest via-sage to-amber" />
      {/* dot grid + drifting glow, matching the hero treatment */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob absolute -top-32 -end-32 h-96 w-96 rounded-full bg-fern/25 blur-3xl" />
        <div className="blob blob-slow absolute -bottom-40 start-1/3 h-80 w-80 rounded-full bg-amber/10 blur-3xl" />
      </div>
      {/* giant watermark */}
      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-10 end-0 select-none font-display text-[11rem] font-bold leading-none text-white/[0.04] md:text-[16rem]"
      >
        TDM
      </p>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Image src="/logo-white.png" alt="TDM — The Digital Marketing Services" width={160} height={39} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">{t.footerBlurb}</p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="group flex w-fit items-center gap-3 text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                </span>
                {site.email}
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="group flex w-fit items-center gap-3 text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span dir="ltr">{site.phone}</span>
              </a>
              <a
                href={`tel:${site.phoneUk.replace(/\s/g, "")}`}
                className="group flex w-fit items-center gap-3 text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </span>
                <span dir="ltr">{site.phoneUk}</span>
              </a>
            </div>

            {/* Language switcher */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold">
              {languageSwitch.map((l) => (
                <Link
                  key={l.locale}
                  href={l.locale === "en" ? "/" : `/${l.locale}/`}
                  className={`btn-fluid btn-fluid-sm rounded-full px-3.5 py-1.5 ${
                    l.locale === locale
                      ? "bg-white text-forest"
                      : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="kicker text-sage">{t.services}</h3>
            <div className="mt-2 h-0.5 w-8 rounded-full bg-amber" />
            <ul className="mt-5 space-y-2.5 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.path}>
                  <FooterLink to={href(locale, l.path)}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="kicker text-sage">{t.company}</h3>
            <div className="mt-2 h-0.5 w-8 rounded-full bg-amber" />
            <ul className="mt-5 space-y-2.5 text-sm">
              {companyLinks.map((l) => (
                <li key={l.path}>
                  <FooterLink
                    to={l.path === "/blog/" || l.path === "/terms-and-conditions/" ? l.path : href(locale, l.path)}
                  >
                    {l.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Global presence */}
          <div>
            <h3 className="kicker text-sage">{t.globalPresence}</h3>
            <div className="mt-2 h-0.5 w-8 rounded-full bg-amber" />
            <ul className="mt-5 space-y-2.5 text-sm">
              {c.offices.map((o) => (
                <li key={o.slug}>
                  <FooterLink to={href(locale, `/locations/${o.slug}/`)}>
                    {o.city ? `${o.city}, ` : ""}
                    {o.country}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner badges */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
          {site.partnerBadges.map((b) => (
            <span
              key={b}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/85 transition-all duration-300 hover:border-sage hover:bg-white/10 cursor-default"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-amber" aria-hidden>
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {b}
            </span>
          ))}
          <span className="ms-auto flex items-center gap-2 rounded-full bg-amber/20 px-4 py-1.5 text-xs font-bold text-amber">
            ★ {site.stats.satisfaction} {locale === "fr" ? "satisfaction client" : locale === "ar" ? "رضا العملاء" : "client satisfaction"}
          </span>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TDM — The Digital Marketing Services. All rights reserved.</p>
          <a
            href="#"
            className="group flex w-fit items-center gap-2 font-semibold text-white/70 transition-colors hover:text-white"
            aria-label={t.backToTop}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-amber group-hover:bg-amber">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
