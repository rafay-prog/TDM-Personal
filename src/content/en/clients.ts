import type { ClientLogo } from "@/lib/types";

/**
 * Logos present in /public/clients/. Pending per-client approval
 * (E:\TDM\build\client-approval-list.md) — remove any client marked OMIT
 * before launch. High-recognition names are last so removing them is easy.
 */
export const clientLogos: ClientLogo[] = [
  { name: "V Perfumes", file: "v-perfumes.png" },
  { name: "7 Perfumes", file: "7-perfumes.png" },
  { name: "Sahara Perfumes", file: "sahara-perfumes.png" },
  { name: "By Cloud Fragrance", file: "by-cloud-fragrance.png" },
  { name: "Olfactory", file: "olfactory.png" },
  { name: "Tashkeel Travels", file: "tashkeel-travels.png" },
  { name: "Tec Gloves", file: "tec-gloves.png" },
  { name: "Hemnet Properties", file: "hemnet-properties.png" },
  { name: "Calvo Home", file: "calvo-home.png" },
  { name: "Frenchco", file: "frenchco.png" },
  { name: "Petroff Business Law Firm", file: "petroff.png" },
  { name: "French Business Law", file: "french-business-law.png" },
  { name: "Debt Collection France", file: "debt-collection-france.png" },
  { name: "French Chateau For Sale", file: "french-chateau-for-sale.png" },
  { name: "Magnify", file: "magnify.png" },
  { name: "FutureGen Labs", file: "futuregen-labs.png" },
  { name: "Puissant Technologies", file: "puissant-technologies.png" },
  { name: "SmartShifts", file: "smartshifts.png" },
  { name: "Swift Launch", file: "swift-launch.png" },
  { name: "Filter to Fork", file: "filter-to-fork.png" },
  { name: "Multiwood", file: "multiwood.png" },
  { name: "Sapphire", file: "sapphire.png" },
  { name: "Mark Des Vince", file: "mark-des-vince.png" },
  { name: "Meticulous Blinds", file: "meticulous-blinds.png" },
  { name: "Zaineb Elkhayat", file: "zaineb-elkhayat.png" },
  { name: "Aleid", file: "aleid.png" },
  { name: "NYC Pest Control", file: "nyc-pest-control.png" },
  { name: "NB Sons", file: "nb-sons.png" },
  { name: "Alla Shakra", file: "alla-shakra.png" },
  { name: "Exotic", file: "exotic.png" },
  { name: "Cheez Wala", file: "cheez-wala.png" },
  { name: "Baby Foot", file: "baby-foot.png" },
  { name: "Portland Lux Car", file: "portland-lux-car.png" },
  // High-recognition names — confirm relationship before launch (flagged ⚠️ in approval list)
  { name: "Samsung", file: "samsung.png" },
  { name: "American Red Cross", file: "american-red-cross.png" },
  { name: "LJ Hooker", file: "lj-hooker.png" },
];

/**
 * The eight names given top billing in the "Featured clients" band on the home
 * page. Resolved against `clientLogos` rather than re-listing files, so pulling
 * a client from the roster above removes it here too and can never leave a
 * broken image behind.
 *
 * ⚠️ Samsung, American Red Cross and LJ Hooker are the entries flagged for
 * relationship confirmation. Featuring a name here is a far stronger public
 * claim than including it in the scrolling roster — drop any that are not
 * confirmed, and the grid reflows on its own.
 */
const featuredNames = [
  "Samsung",
  "American Red Cross",
  "LJ Hooker",
  "Sapphire",
  "Multiwood",
  "V Perfumes",
  "7 Perfumes",
  "French Business Law",
];

export const featuredClients: ClientLogo[] = featuredNames
  .map((n) => clientLogos.find((c) => c.name === n))
  .filter((c): c is ClientLogo => Boolean(c));
