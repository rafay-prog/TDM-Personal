import { asset } from "./asset-manifest";

/**
 * A flag per office, keyed by the office slug — the slug is locale-independent,
 * so this map serves all three languages.
 *
 * Artwork is drawn by scripts/make-flags.mjs rather than pulled from a flag
 * pack. Emoji flags were not usable: Windows renders regional-indicator pairs
 * as bare letters ("AE"), which is what most of the audience would have seen.
 *
 * Each flag keeps its own official ratio, so they are rendered at a shared
 * height and left to take their natural widths.
 */
export type Flag = { src: string; width: number; height: number; label: string };

export const officeFlag: Record<string, Flag> = {
  dubai: { src: asset("flags/ae.svg"), width: 60, height: 30, label: "United Arab Emirates" },
  pakistan: { src: asset("flags/pk.svg"), width: 60, height: 40, label: "Pakistan" },
  uk: { src: asset("flags/gb.svg"), width: 60, height: 30, label: "United Kingdom" },
  usa: { src: asset("flags/us.svg"), width: 190, height: 100, label: "United States" },
  cameroon: { src: asset("flags/cm.svg"), width: 60, height: 40, label: "Cameroon" },
  japan: { src: asset("flags/jp.svg"), width: 60, height: 40, label: "Japan" },
  france: { src: asset("flags/fr.svg"), width: 60, height: 40, label: "France" },
  bulgaria: { src: asset("flags/bg.svg"), width: 60, height: 36, label: "Bulgaria" },
};
