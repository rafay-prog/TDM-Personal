export const site = {
  name: "TDM — The Digital Marketing Services",
  shortName: "TDM",
  domain: "thedigitalmarketing.services",
  url: "https://thedigitalmarketing.services",
  tagline: "Your in-house marketing agency.",
  description:
    "TDM is a full-service digital agency delivering media production, performance marketing, software development, and staff augmentation from six offices across four continents.",
  email: "info@thedigitalmarketing.services",
  phone: "+971 58 909 4045",
  phoneHref: "+971589094045",
  phoneUk: "+44 7946 186955",
  /**
   * Scheduling link for every "book a consultation" CTA — a Calendly event URL
   * such as https://calendly.com/tdm/30min. While this is empty the CTAs fall
   * back to the contact page, so nothing is ever a dead link.
   */
  booking: "",
  // TODO(user): WhatsApp number + social profile URLs
  socials: [] as { label: string; href: string }[],
  stats: {
    satisfaction: "100%",
    clients: "150+",
    specialists: "50+",
    countries: "8",
    languages: "3",
    bestRoas: "10×",
  },
  partnerBadges: ["Meta Business Partner", "Shopify Partner", "Google Partner"],
  founded: undefined as string | undefined, // TODO(user): year established
};

export const routes = {
  home: "/",
  about: "/about/",
  contact: "/contact/",
  clients: "/clients/",
  portfolio: "/portfolio/",
  caseStudies: "/case-studies/",
  blog: "/blog/",
  locations: "/locations/",
};

export function absoluteUrl(path: string): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
