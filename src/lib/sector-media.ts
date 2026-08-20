import type { SectorSlug } from "./types";
import { asset } from "./asset-manifest";

/** Every sector photo is pre-cropped to this size, so all the heroes match. */
export const SECTOR_IMAGE = { width: 1100, height: 733 } as const;

/**
 * Hero artwork per sector. Kept here rather than in the per-locale sector
 * content so one asset path isn't duplicated across en/fr/ar.
 *
 * The source photos have very different shapes (two tall, one wide), so they
 * are cropped to a shared 3:2 at build time with `scripts/optimize-images.mjs`
 * rather than being squeezed by CSS — a fixed frame with mismatched sources
 * either crops a portrait to a ribbon or leaves each page a different size.
 *
 * Files are served as-is: `images.unoptimized` is on for the static export.
 */
export const sectorHeroImage: Partial<Record<SectorSlug, string>> = {
  media: asset("sectors/media.webp"),
  development: asset("sectors/development.webp"),
  marketing: asset("sectors/marketing.webp"),
};
