import type { Service, SectorSlug } from "@/lib/types";
import { mediaServices } from "./media";
import { marketingServices } from "./marketing";
import { developmentServices } from "./development";

export const allServices: Service[] = [
  ...mediaServices,
  ...marketingServices,
  ...developmentServices,
];

export function servicesBySector(sector: SectorSlug): Service[] {
  return allServices.filter((s) => s.sector === sector);
}

export function getService(sector: string, slug: string): Service | undefined {
  return allServices.find((s) => s.sector === sector && s.slug === slug);
}
