import type {
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
import { offices as enOffices } from "./en/locations";
import { testimonials as enTestimonials } from "./en/testimonials";
import { leadership as enLeadership, teamIntro as enTeamIntro } from "./en/team";
import { clientLogos, featuredClients } from "./en/clients";
import { pages as enPages } from "./en/pages";

/**
 * Everything that lives in the codebase. Blog posts and case studies are not
 * here — they are in Postgres and fetched per request from @/content/db, so
 * they can be added without a deploy.
 */
export interface LocaleContent {
  sectors: Sector[];
  services: Service[];
  offices: Office[];
  testimonials: Testimonial[];
  leadership: TeamMember[];
  teamIntro: string;
  clientLogos: ClientLogo[];
  featuredClients: ClientLogo[];
  pages: PagesCopy;
}

const en: LocaleContent = {
  sectors: enSectors,
  services: enServices,
  offices: enOffices,
  testimonials: enTestimonials,
  leadership: enLeadership,
  teamIntro: enTeamIntro,
  clientLogos,
  featuredClients,
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
