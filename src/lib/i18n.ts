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
