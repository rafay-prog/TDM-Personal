import type { LocaleContent } from "@/content";
import { clientLogos, featuredClients } from "@/content/en/clients";
import { blogPosts } from "@/content/en/blog";
import { arMediaServices, arMarketingServices } from "./services-media-marketing";
import { arDevelopmentServices, arSectors } from "./services-development-sectors";
import {
  arCaseStudies,
  arOffices,
  arPages,
  arTestimonials,
  arLeadership,
  arTeamIntro,
} from "./site";

export const arContent: LocaleContent = {
  sectors: arSectors,
  services: [...arMediaServices, ...arMarketingServices, ...arDevelopmentServices],
  caseStudies: arCaseStudies,
  offices: arOffices,
  testimonials: arTestimonials,
  leadership: arLeadership,
  teamIntro: arTeamIntro,
  clientLogos,
  featuredClients,
  blogPosts, // blog is EN-only for v1
  pages: arPages,
};
