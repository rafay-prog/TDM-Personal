"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/types";
import { href, isRtl } from "@/lib/i18n";
import { site } from "@/lib/site";
import { ui } from "@/content/ui";

interface NavChild {
  label: string;
  path: string;
}
interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

const navByLocale: Record<Locale, NavItem[]> = {
  en: [
    {
      label: "Media",
      path: "/media/",
      children: [
        { label: "Video Editing", path: "/media/video-editing/" },
        { label: "Video Shoots", path: "/media/video-shoots/" },
        { label: "UGC Ads", path: "/media/ugc-ads/" },
        { label: "Product Shoots", path: "/media/product-shoots/" },
        { label: "Ad Creatives", path: "/media/ad-creatives/" },
      ],
    },
    {
      label: "Marketing",
      path: "/marketing/",
      children: [
        { label: "Performance Marketing", path: "/marketing/performance-marketing/" },
        { label: "SEO", path: "/marketing/seo/" },
        { label: "Social Media", path: "/marketing/social-media/" },
      ],
    },
    {
      label: "Development",
      path: "/development/",
      children: [
        { label: "Shopify", path: "/development/shopify/" },
        { label: "WordPress", path: "/development/wordpress/" },
        { label: "Magento", path: "/development/magento/" },
        { label: "Custom Development", path: "/development/custom-development/" },
        { label: "CRM & ERP", path: "/development/crm-erp/" },
        { label: "Mobile Apps", path: "/development/mobile-apps/" },
      ],
    },
    { label: "Staff Augmentation", path: "/staff-augmentation/" },
    { label: "Portfolio", path: "/portfolio/" },
    { label: "About", path: "/about/" },
    { label: "Blog", path: "/blog/" },
  ],
  fr: [
    {
      label: "Média",
      path: "/media/",
      children: [
        { label: "Montage vidéo", path: "/media/video-editing/" },
        { label: "Tournages vidéo", path: "/media/video-shoots/" },
        { label: "Publicités UGC", path: "/media/ugc-ads/" },
        { label: "Shooting produits", path: "/media/product-shoots/" },
        { label: "Créations publicitaires", path: "/media/ad-creatives/" },
      ],
    },
    {
      label: "Marketing",
      path: "/marketing/",
      children: [
        { label: "Marketing à la performance", path: "/marketing/performance-marketing/" },
        { label: "SEO", path: "/marketing/seo/" },
        { label: "Réseaux sociaux", path: "/marketing/social-media/" },
      ],
    },
    {
      label: "Développement",
      path: "/development/",
      children: [
        { label: "Shopify", path: "/development/shopify/" },
        { label: "WordPress", path: "/development/wordpress/" },
        { label: "Magento", path: "/development/magento/" },
        { label: "Développement sur mesure", path: "/development/custom-development/" },
        { label: "CRM & ERP", path: "/development/crm-erp/" },
        { label: "Applications mobiles", path: "/development/mobile-apps/" },
      ],
    },
    { label: "Renfort d'équipes", path: "/staff-augmentation/" },
    { label: "Portfolio", path: "/portfolio/" },
    { label: "À propos", path: "/about/" },
  ],
  ar: [
    {
      label: "الميديا",
      path: "/media/",
      children: [
        { label: "مونتاج الفيديو", path: "/media/video-editing/" },
        { label: "تصوير الفيديو", path: "/media/video-shoots/" },
        { label: "إعلانات UGC", path: "/media/ugc-ads/" },
        { label: "تصوير المنتجات", path: "/media/product-shoots/" },
        { label: "التصاميم الإعلانية", path: "/media/ad-creatives/" },
      ],
    },
    {
      label: "التسويق",
      path: "/marketing/",
      children: [
        { label: "التسويق بالأداء", path: "/marketing/performance-marketing/" },
        { label: "تحسين محركات البحث", path: "/marketing/seo/" },
        { label: "السوشيال ميديا", path: "/marketing/social-media/" },
      ],
    },
    {
      label: "التطوير",
      path: "/development/",
      children: [
        { label: "شوبيفاي", path: "/development/shopify/" },
        { label: "ووردبريس", path: "/development/wordpress/" },
        { label: "ماجنتو", path: "/development/magento/" },
        { label: "تطوير مخصص", path: "/development/custom-development/" },
        { label: "أنظمة CRM و ERP", path: "/development/crm-erp/" },
        { label: "تطبيقات الجوال", path: "/development/mobile-apps/" },
      ],
    },
    { label: "تعزيز فرق العمل", path: "/staff-augmentation/" },
    { label: "أعمالنا", path: "/portfolio/" },
    { label: "من نحن", path: "/about/" },
  ],
};

const languageSwitch: { locale: Locale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "fr", label: "FR" },
  { locale: "ar", label: "AR" },
];

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m3 7 8.2 5.5a1.5 1.5 0 0 0 1.6 0L21 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6.6 3h-.9A2.7 2.7 0 0 0 3 5.8C3 14.7 9.3 21 18.2 21a2.7 2.7 0 0 0 2.8-2.7v-.9a1.4 1.4 0 0 0-1-1.3l-3-.9a1.4 1.4 0 0 0-1.5.5l-.8 1a13.6 13.6 0 0 1-5.4-5.4l1-.8a1.4 1.4 0 0 0 .5-1.5l-.9-3a1.4 1.4 0 0 0-1.3-1Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.5 2.6 3.8 6 3.8 9.5s-1.3 6.9-3.8 9.5c-2.5-2.6-3.8-6-3.8-9.5S9.5 5.1 12 2.5Z" />
    </svg>
  );
}

export interface MegaSector {
  slug: string;
  name: string;
  tagline: string;
  services: { slug: string; name: string; desc: string }[];
}

/** One line icon per service, keyed by slug. Falls back to a generic mark. */
function ServiceIcon({ slug }: { slug: string }) {
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

export function Header({
  locale = "en",
  megaSectors = [],
}: {
  locale?: Locale;
  megaSectors?: MegaSector[];
}) {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const nav = navByLocale[locale];
  const t = ui[locale];
  const megaBySlug = new Map(megaSectors.map((s) => [`/${s.slug}/`, s]));
  const activeMega = openMega ? megaBySlug.get(openMega) : undefined;
  const closeDrawer = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setOpenMega(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        onMouseLeave={() => setOpenMega(null)}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "border-b border-white/10 bg-forest/85 shadow-[0_8px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between gap-2.5 px-4 transition-all duration-500 sm:px-6 ${
            solid ? "h-[68px]" : "h-20"
          }`}
        >
          <Link href={href(locale, "/")} className="flex shrink-0 items-center" aria-label={site.name}>
            <Image
              src="/logo-white.png"
              alt={site.name}
              width={679}
              height={164}
              priority
              className={`w-auto transition-all duration-500 ${solid ? "h-8" : "h-9"}`}
            />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
            {nav.map((item) => {
              const hasMega = megaBySlug.has(item.path);
              return (
                <div
                  key={item.path}
                  className="group"
                  onMouseEnter={() => setOpenMega(hasMega ? item.path : null)}
                  onFocus={() => setOpenMega(hasMega ? item.path : null)}
                >
                  <Link
                    href={href(locale, item.path)}
                    aria-expanded={hasMega ? openMega === item.path : undefined}
                    className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2 text-[14px] font-medium transition-colors duration-200 hover:bg-white/10 hover:text-white ${
                      openMega === item.path ? "bg-white/10 text-white" : "text-white/85"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronIcon
                        className={`text-white/45 transition-transform duration-300 group-hover:text-white/80 ${
                          openMega === item.path ? "rotate-180 text-white/80" : ""
                        }`}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 xl:flex">
            {/* Segmented language switcher */}
            <div className="flex items-center gap-0.5 rounded-full border border-white/20 bg-white/5 p-1 ps-2.5 text-white/60 backdrop-blur-sm">
              <GlobeIcon />
              {languageSwitch.map((l) => (
                <Link
                  key={l.locale}
                  href={l.locale === "en" ? "/" : `/${l.locale}/`}
                  aria-current={l.locale === locale ? "true" : undefined}
                  className={`btn-fluid btn-fluid-sm rounded-full px-2 py-1 text-[11px] font-bold tracking-wide ${
                    l.locale === locale ? "bg-white text-forest" : "hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <a
              href={`mailto:${site.email}`}
              aria-label={site.email}
              title={site.email}
              className="btn-fluid btn-fluid-sm hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-white 2xl:flex"
            >
              <MailIcon />
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              aria-label={site.phone}
              title={site.phone}
              className="btn-fluid btn-fluid-sm hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-white 2xl:flex"
            >
              <PhoneIcon />
            </a>

            <Link
              href={href(locale, "/contact/")}
              className="btn-fluid btn-shine whitespace-nowrap rounded-full bg-amber px-4 py-2.5 text-[13.5px] font-bold text-white shadow-lg shadow-amber/25 hover:bg-amber/90 hover:shadow-xl hover:shadow-amber/30"
            >
              {t.ctaShort}
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="btn-fluid btn-fluid-sm relative h-11 w-11 shrink-0 rounded-full border border-white/20 text-white hover:bg-white/10 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span className={`absolute start-3 end-3 h-0.5 rounded-full bg-white transition-all duration-300 ${open ? "top-[21px] rotate-45" : "top-[15px]"}`} />
            <span className={`absolute start-3 end-3 top-[21px] h-0.5 rounded-full bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute start-3 end-3 h-0.5 rounded-full bg-white transition-all duration-300 ${open ? "top-[21px] -rotate-45" : "top-[27px]"}`} />
          </button>
        </div>

        {/* Full-width mega panel, anchored to the header rather than the trigger
            so it can span the container without overflowing near the edges. */}
        <div
          className={`absolute inset-x-0 top-full hidden px-4 transition-all duration-200 sm:px-6 xl:block ${
            activeMega ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-[1440px]">
            {activeMega && (
              <div className="overflow-hidden rounded-3xl border border-mint/70 bg-white shadow-[0_28px_70px_-18px_rgba(15,53,39,0.45)]">
                <div className="flex items-start justify-between gap-8 px-8 pt-7">
                  <div>
                    <p className="kicker flex items-center gap-2 text-fern">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
                      {activeMega.name}
                    </p>
                    <p className="mt-2 max-w-xl font-display text-xl font-bold text-forest">{activeMega.tagline}</p>
                  </div>
                  <Link
                    href={href(locale, `/${activeMega.slug}/`)}
                    className="group/all mt-1 flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-bold text-forest hover:text-fern"
                  >
                    {t.explore} {activeMega.name}
                    <span className="arrow-nudge" aria-hidden>
                      {isRtl(locale) ? "←" : "→"}
                    </span>
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-1 border-t border-mint px-5 py-5 lg:grid-cols-3">
                  {activeMega.services.map((sv) => (
                    <Link
                      key={sv.slug}
                      href={href(locale, `/${activeMega.slug}/${sv.slug}/`)}
                      className="group/item flex gap-3 rounded-2xl p-3 transition-colors duration-200 hover:bg-cream"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mint text-fern transition-colors duration-200 group-hover/item:bg-amber group-hover/item:text-white">
                        <ServiceIcon slug={sv.slug} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold text-forest">{sv.name}</span>
                        <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-ink/60">{sv.desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-6 border-t border-mint bg-cream px-8 py-4">
                  <p className="text-xs text-ink/60">
                    {activeMega.services.length} {t.services} · EN / FR / AR
                  </p>
                  <Link
                    href={href(locale, "/contact/")}
                    className="btn-fluid btn-shine whitespace-nowrap rounded-full bg-forest px-5 py-2.5 text-xs font-bold text-white"
                  >
                    {t.cta}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-forest transition-all duration-400 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <nav className="relative h-full overflow-y-auto px-5 pb-10 pt-[88px]" aria-label="Mobile">
          {nav.map((item) => {
            const expanded = openGroup === item.path;
            return (
              <div key={item.path} className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <Link
                    href={href(locale, item.path)}
                    className="flex-1 py-4 text-lg font-semibold text-white"
                    onClick={closeDrawer}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={item.label}
                      aria-expanded={expanded}
                      onClick={() => setOpenGroup(expanded ? null : item.path)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70"
                    >
                      <ChevronIcon className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && (
                  <div className={`grid overflow-hidden transition-all duration-300 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="min-h-0 overflow-hidden">
                      <div className="ms-1 border-s border-white/15 ps-4 pb-3">
                        {item.children.map((c) => (
                          <Link
                            key={c.path}
                            href={href(locale, c.path)}
                            className="block py-2 text-[15px] text-white/70"
                            onClick={closeDrawer}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div className="mt-7 flex items-center gap-1 rounded-full border border-white/20 bg-white/5 p-1 ps-3 text-white/60">
            <GlobeIcon />
            {languageSwitch.map((l) => (
              <Link
                key={l.locale}
                href={l.locale === "en" ? "/" : `/${l.locale}/`}
                className={`btn-fluid btn-fluid-sm rounded-full px-3 py-1.5 text-xs font-bold ${
                  l.locale === locale ? "bg-white text-forest" : ""
                }`}
                onClick={closeDrawer}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <Link
            href={href(locale, "/contact/")}
            className="btn-fluid btn-shine mt-4 block rounded-full bg-amber px-5 py-4 text-center font-bold text-white shadow-lg shadow-amber/25"
            onClick={closeDrawer}
          >
            {t.cta}
          </Link>

          <div className="mt-6 space-y-2 text-sm text-white/65">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3">
              <MailIcon />
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3">
              <PhoneIcon />
              {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
