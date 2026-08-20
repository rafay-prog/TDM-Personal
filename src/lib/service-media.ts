import { asset } from "./asset-manifest";

/** Every service photo is pre-cropped to this size, so all the cards match. */
export const SERVICE_IMAGE = { width: 800, height: 500 } as const;

/**
 * Artwork for individual service cards, keyed by "<sector>/<slug>".
 *
 * Media and Marketing are covered so far. Services without an entry fall back to the
 * icon-only card, so adding artwork for Development later is just
 * a matter of dropping files in /public/services and adding lines here.
 *
 * Run `node scripts/hash-assets.mjs` after adding a file.
 */
export const serviceImage: Record<string, string> = {
  "media/video-editing": asset("services/video-editing.webp"),
  "media/video-shoots": asset("services/video-shoots.webp"),
  "media/ugc-ads": asset("services/ugc-ads.webp"),
  "media/product-shoots": asset("services/product-shoots.webp"),
  "media/ad-creatives": asset("services/ad-creatives.webp"),

  "marketing/performance-marketing": asset("services/performance-marketing.webp"),
  "marketing/seo": asset("services/seo.webp"),
  "marketing/social-media": asset("services/social-media.webp"),
};
