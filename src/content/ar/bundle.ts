import type { LocaleContent } from "@/content";
import { clientLogos, featuredClients } from "@/content/en/clients";
import { arMediaServices, arMarketingServices } from "./services-media-marketing";
import { arDevelopmentServices, arSectors } from "./services-development-sectors";
import {
  arOffices,
  arPages,
  arTestimonials,
  arLeadership,
  arTeamIntro,
} from "./site";

export const arContent: LocaleContent = {
  sectors: arSectors,
  services: [...arMediaServices, ...arMarketingServices, ...arDevelopmentServices],
  offices: arOffices,
  testimonials: arTestimonials,
  leadership: arLeadership,
  teamIntro: arTeamIntro,
  clientLogos,
  featuredClients,
  pages: arPages,
};
