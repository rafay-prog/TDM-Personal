import type {
  BlogPost,
  CaseStudy,
  ClientLogo,
  Locale,
  Office,
  Sector,
  Service,
  TeamMember,
  Testimonial,
} from "@/lib/types";
import type { PagesCopy } from "./en/pages";

import { sectors as enSectors } from "./en/sectors";
import { allServices as enServices } from "./en/services";
import { caseStudies as enCaseStudies } from "./en/case-studies";
import { offices as enOffices } from "./en/locations";
import { testimonials as enTestimonials } from "./en/testimonials";
import { leadership as enLeadership, teamIntro as enTeamIntro } from "./en/team";
import { clientLogos, featuredClients } from "./en/clients";
import { blogPosts as enBlogPosts } from "./en/blog";
import { pages as enPages } from "./en/pages";

export interface LocaleContent {
  sectors: Sector[];
  services: Service[];
  caseStudies: CaseStudy[];
  offices: Office[];
  testimonials: Testimonial[];
  leadership: TeamMember[];
  teamIntro: string;
  clientLogos: ClientLogo[];
  featuredClients: ClientLogo[];
  blogPosts: BlogPost[];
  pages: PagesCopy;
}

const en: LocaleContent = {
  sectors: enSectors,
  services: enServices,
  caseStudies: enCaseStudies,
  offices: enOffices,
  testimonials: enTestimonials,
  leadership: enLeadership,
  teamIntro: enTeamIntro,
  clientLogos,
  featuredClients,
  blogPosts: enBlogPosts,
  pages: enPages,
};

import { frContent } from "./fr/bundle";
import { arContent } from "./ar/bundle";

const registry: Record<Locale, LocaleContent> = {
  en,
  fr: frContent,
  ar: arContent,
};

export function getContent(locale: Locale): LocaleContent {
  return registry[locale] ?? en;
}
