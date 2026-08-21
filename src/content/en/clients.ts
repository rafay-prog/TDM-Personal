import { asset } from "@/lib/asset-manifest";
import type { ClientLogo } from "@/lib/types";

/**
 * Logos present in /public/clients/, resolved through the asset manifest so
 * each carries a content hash. Replacing one in place used to serve the old
 * bytes from cache at the same URL; now a new logo means a new filename.
 *
 * Logos present in /public/clients/. Pending per-client approval
 * (E:\TDM\build\client-approval-list.md) — remove any client marked OMIT
 * before launch. High-recognition names are last so removing them is easy.
 */
export const clientLogos: ClientLogo[] = [
  { name: "V Perfumes", file: asset("clients/v-perfumes.png") },
  { name: "7 Perfumes", file: asset("clients/7-perfumes.png") },
  { name: "Sahara Perfumes", file: asset("clients/sahara-perfumes.png") },
  { name: "By Cloud Fragrance", file: asset("clients/by-cloud-fragrance.png") },
  { name: "Olfactory", file: asset("clients/olfactory.png") },
  { name: "Tashkeel Travels", file: asset("clients/tashkeel-travels.png") },
  { name: "Tec Gloves", file: asset("clients/tec-gloves.png") },
  { name: "Hemnet Properties", file: asset("clients/hemnet-properties.png") },
  { name: "Calvo Home", file: asset("clients/calvo-home.png") },
  { name: "Frenchco", file: asset("clients/frenchco.png") },
  { name: "Petroff Business Law Firm", file: asset("clients/petroff.png") },
  { name: "French Business Law", file: asset("clients/french-business-law.png") },
  { name: "Debt Collection France", file: asset("clients/debt-collection-france.png") },
  { name: "French Chateau For Sale", file: asset("clients/french-chateau-for-sale.png") },
  { name: "Magnify", file: asset("clients/magnify.png") },
  { name: "FutureGen Labs", file: asset("clients/futuregen-labs.png") },
  { name: "Puissant Technologies", file: asset("clients/puissant-technologies.png") },
  { name: "SmartShifts", file: asset("clients/smartshifts.png") },
  { name: "Swift Launch", file: asset("clients/swift-launch.png") },
  { name: "Filter to Fork", file: asset("clients/filter-to-fork.png") },
  { name: "Multiwood", file: asset("clients/multiwood.png") },
  { name: "Sapphire", file: asset("clients/sapphire.png") },
  { name: "Mark Des Vince", file: asset("clients/mark-des-vince.png") },
  { name: "Meticulous Blinds", file: asset("clients/meticulous-blinds.png") },
  { name: "Zaineb Elkhayat", file: asset("clients/zaineb-elkhayat.png") },
  { name: "Aleid", file: asset("clients/aleid.png") },
  { name: "NYC Pest Control", file: asset("clients/nyc-pest-control.png") },
  { name: "NB Sons", file: asset("clients/nb-sons.png") },
  { name: "Alla Shakra", file: asset("clients/alla-shakra.png") },
  { name: "Exotic", file: asset("clients/exotic.png") },
  { name: "Cheez Wala", file: asset("clients/cheez-wala.png") },
  { name: "Baby Foot", file: asset("clients/baby-foot.png") },
  { name: "Portland Lux Car", file: asset("clients/portland-lux-car.png") },
  // High-recognition names — confirm relationship before launch (flagged ⚠️ in approval list)
  { name: "Samsung", file: asset("clients/samsung.png") },
  { name: "American Red Cross", file: asset("clients/american-red-cross.png") },
  { name: "LJ Hooker", file: asset("clients/lj-hooker.png") },
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
  "Sapphire",
  "Multiwood",
  "V Perfumes",
  "7 Perfumes",
  "French Business Law",
];

export const featuredClients: ClientLogo[] = featuredNames
  .map((n) => clientLogos.find((c) => c.name === n))
  .filter((c): c is ClientLogo => Boolean(c));
