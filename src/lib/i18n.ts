import type { Locale } from "./types";

export const locales: Locale[] = ["en", "fr", "ar"];

export function localePrefix(locale: Locale): string {
  return locale === "en" ? "" : `/${locale}`;
}

/** Prefix an internal path with the locale segment. Path must start with "/". */
export function href(locale: Locale, path: string): string {
  return `${localePrefix(locale)}${path}`;
}

/** hreflang alternates for a canonical (EN) path. Blog is EN-only — pass includeAlternates=false there. */
export function languageAlternates(path: string) {
  return {
    "en": path,
    "fr": `/fr${path}`,
    "ar": `/ar${path}`,
    "x-default": path,
  };
}

export function isRtl(locale: Locale): boolean {
  return locale === "ar";
}

/** Sections that exist in English only — see src/app/fr and src/app/ar. */
const enOnly = [/^\/blog(\/|$)/, /^\/terms-and-conditions(\/|$)/];

/** Drop a leading /fr or /ar, returning the canonical English path. */
export function stripLocale(pathname: string): string {
  return /^\/(fr|ar)(\/|$)/.test(pathname) ? pathname.slice(3) || "/" : pathname;
}

/**
 * Where the language switcher should point from the current page: the same
 * page in the target locale, not that locale's home page. Falls back to the
 * home page only for the English-only sections, which have no counterpart.
 */
export function localeSwitchHref(pathname: string, target: Locale): string {
  const path = stripLocale(pathname) || "/";
  if (target !== "en" && enOnly.some((re) => re.test(path))) return `/${target}/`;
  return target === "en" ? path : `/${target}${path}`;
}
