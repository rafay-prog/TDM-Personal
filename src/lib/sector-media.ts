import type { SectorSlug } from "./types";

/**
 * Hero artwork per sector. Kept here rather than in the per-locale sector
 * content so one asset path isn't duplicated across en/fr/ar. A sector with no
 * entry simply renders the text-only hero.
 *
 * Files live in /public/sectors/ and are served as-is — `images.unoptimized` is
 * on for the static export, so they must be compressed before they land here.
 */
export const sectorHeroImage: Partial<Record<SectorSlug, string>> = {
  development: "/sectors/development.webp",
  media: "/sectors/media.webp",
  marketing: "/sectors/marketing.webp",
};
