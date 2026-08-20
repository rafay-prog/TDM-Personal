import type { SectorSlug } from "./types";

export interface SectorImage {
  src: string;
  width: number;
  height: number;
}

/**
 * Hero artwork per sector. Kept here rather than in the per-locale sector
 * content so one asset path isn't duplicated across en/fr/ar.
 *
 * Intrinsic dimensions are stored because these three photos have genuinely
 * different shapes — two tall, one wide. The hero renders each at its own
 * ratio under a shared height cap rather than forcing them all into one frame,
 * which would have cropped the tall ones to ribbons.
 *
 * Files live in /public/sectors/ and are served as-is — `images.unoptimized`
 * is on for the static export, so compress before adding.
 */
export const sectorHeroImage: Partial<Record<SectorSlug, SectorImage>> = {
  media: { src: "/sectors/media.webp", width: 736, height: 1349 },
  development: { src: "/sectors/development.webp", width: 736, height: 1104 },
  marketing: { src: "/sectors/marketing.webp", width: 800, height: 522 },
};
