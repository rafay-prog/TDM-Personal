import type { LocaleContent } from "@/content";
import { clientLogos, featuredClients } from "@/content/en/clients";
import { blogPosts } from "@/content/en/blog";
import { frMediaServices, frMarketingServices } from "./services-media-marketing";
import { frDevelopmentServices, frSectors } from "./services-development-sectors";
import {
  frCaseStudies,
  frOffices,
  frPages,
  frTestimonials,
  frLeadership,
  frTeamIntro,
} from "./site";

export const frContent: LocaleContent = {
  sectors: frSectors,
  services: [...frMediaServices, ...frMarketingServices, ...frDevelopmentServices],
  caseStudies: frCaseStudies,
  offices: frOffices,
  testimonials: frTestimonials,
  leadership: frLeadership,
  teamIntro: frTeamIntro,
  clientLogos,
  featuredClients,
  blogPosts, // blog is EN-only for v1
  pages: frPages,
};
