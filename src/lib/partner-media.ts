import { asset } from "./asset-manifest";

/**
 * Official partner badges.
 *
 * Each artwork is trimmed to its ink and exported 120px tall, so the intrinsic
 * ratios differ. `box` is the rendered height class, tuned per logo rather than
 * shared: Google's and Meta's badges stack two lines of type where Shopify's
 * runs on one, so matching their heights would leave Shopify's wordmark
 * towering over the other two.
 *
 * Run `node scripts/hash-assets.mjs` after replacing a file.
 */
export type Partner = {
  name: string;
  src: string;
  width: number;
  height: number;
  box: string;
};

export const partners: Partner[] = [
  { name: "Meta Business Partner", src: asset("partners/meta.webp"), width: 353, height: 120, box: "h-7" },
  { name: "Shopify Partner", src: asset("partners/shopify.webp"), width: 716, height: 120, box: "h-4" },
  { name: "Google Partner", src: asset("partners/google.webp"), width: 282, height: 120, box: "h-8" },
];
