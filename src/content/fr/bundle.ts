import type { LocaleContent } from "@/content";
import { clientLogos, featuredClients } from "@/content/en/clients";
import { frMediaServices, frMarketingServices } from "./services-media-marketing";
import { frDevelopmentServices, frSectors } from "./services-development-sectors";
import {
  frOffices,
  frPages,
  frTestimonials,
  frLeadership,
  frTeamIntro,
} from "./site";

export const frContent: LocaleContent = {
  sectors: frSectors,
  services: [...frMediaServices, ...frMarketingServices, ...frDevelopmentServices],
  offices: frOffices,
  testimonials: frTestimonials,
  leadership: frLeadership,
  teamIntro: frTeamIntro,
  clientLogos,
  featuredClients,
  pages: frPages,
};
