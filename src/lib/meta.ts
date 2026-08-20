import type { Metadata } from "next";
import type { Locale } from "./types";
import { href, languageAlternates } from "./i18n";

/** Metadata for a page that exists in all three locales at the same canonical path. */
export function localizedMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: href(locale, path),
      languages: languageAlternates(path),
    },
  };
}
