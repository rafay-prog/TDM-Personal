"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/types";
import { localeSwitchHref } from "@/lib/i18n";

const locales: { locale: Locale; short: string; long: string }[] = [
  { locale: "en", short: "EN", long: "English" },
  { locale: "fr", short: "FR", long: "Français" },
  { locale: "ar", short: "AR", long: "العربية" },
];

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.5 2.6 3.8 6 3.8 9.5s-1.3 6.9-3.8 9.5c-2.5-2.6-3.8-6-3.8-9.5S9.5 5.1 12 2.5Z" />
    </svg>
  );
}

/**
 * Language switcher. Keeps the reader on the page they are already reading
 * rather than dropping them on the target locale's home page, and skips the
 * scroll-to-top so their place on that page survives the switch.
 */
export function LocaleSwitch({
  locale,
  variant = "header",
  onNavigate,
}: {
  locale: Locale;
  variant?: "header" | "drawer" | "footer";
  onNavigate?: () => void;
}) {
  const pathname = usePathname() ?? "/";

  if (variant === "footer") {
    return (
      <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold">
        {locales.map((l) => (
          <Link
            key={l.locale}
            href={localeSwitchHref(pathname, l.locale)}
            scroll={false}
            hrefLang={l.locale}
            aria-current={l.locale === locale ? "true" : undefined}
            className={`btn-fluid btn-fluid-sm rounded-full px-3.5 py-1.5 ${
              l.locale === locale
                ? "bg-white text-forest"
                : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white"
            }`}
          >
            {l.long}
          </Link>
        ))}
      </div>
    );
  }

  const drawer = variant === "drawer";
  return (
    <div
      className={`flex items-center rounded-full border border-white/20 bg-white/5 text-white/60 ${
        drawer ? "mt-7 gap-1 p-1 ps-3" : "gap-0.5 p-1 ps-2.5 backdrop-blur-sm"
      }`}
    >
      <GlobeIcon />
      {locales.map((l) => (
        <Link
          key={l.locale}
          href={localeSwitchHref(pathname, l.locale)}
          scroll={false}
          hrefLang={l.locale}
          aria-current={l.locale === locale ? "true" : undefined}
          onClick={onNavigate}
          className={`btn-fluid btn-fluid-sm rounded-full font-bold tracking-wide ${
            drawer ? "px-3 py-1.5 text-xs" : "px-2 py-1 text-[11px]"
          } ${l.locale === locale ? "bg-white text-forest" : "hover:text-white"}`}
        >
          {l.short}
        </Link>
      ))}
    </div>
  );
}
