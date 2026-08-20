import type { CaseStudy } from "@/lib/types";

/**
 * anonymous: true until the client is approved for public naming
 * (see E:\TDM\build\client-approval-list.md). While anonymous, only
 * publicName is rendered — never client.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "uae-fragrance-retailer-seo-ads",
    client: "V Perfumes",
    anonymous: true,
    publicName: "A UAE fragrance retailer",
    industry: "Perfume & fragrance e-commerce",
    country: "United Arab Emirates",
    sector: "marketing",
    services: ["SEO", "Performance Marketing", "E-commerce"],
    timeline: "12 months",
    summary:
      "In twelve months we rebuilt this regional retailer's organic engine and took over paid acquisition — turning them into a category leader.",
    challenge:
      "Low visibility in a highly competitive fragrance market: poor product-page rankings, low domain authority, no keyword targeting or SEO structure, and paid campaigns that couldn't scale profitably.",
    approach: [
      "Full SEO rebuild: on-page optimization, content and blogging, technical SEO and sustained link building across the product catalogue.",
      "Took over paid acquisition with a restructured Google and Meta account, managing a six-figure AED monthly budget against strict ROAS targets.",
      "Continuous iteration between organic and paid data — search-term insights fed the content plan; content wins fed the ad copy.",
    ],
    results: [
      { value: "16×", label: "organic traffic growth (22K → 350K sessions/month)" },
      { value: "10×", label: "return on ad spend, sustained over the year" },
      { value: "60", label: "high-traffic keywords ranked in Google's top 3" },
      { value: "+50%", label: "sales revenue growth" },
    ],
    metaTitle: "Case Study: 16× Organic Traffic & 10× ROAS for a UAE Fragrance Retailer | TDM",
    metaDescription:
      "How TDM took a UAE perfume e-commerce store from 22K to 350K monthly sessions and sustained 10× return on ad spend over twelve months.",
  },
  {
    slug: "french-legal-platform",
    client: "French Business Law (Petroff)",
    anonymous: true,
    publicName: "A Paris-based business-law practice",
    industry: "Legal services",
    country: "France",
    sector: "development",
    services: ["Platform Design & Build", "Multilingual Content", "SEO & Lead Generation"],
    timeline: "Ongoing partnership",
    summary:
      "A full digital platform for a Paris business-law practice serving English-speaking companies in France — designed, built and grown end-to-end by TDM.",
    challenge:
      "The practice needed more than a website: a searchable knowledge platform covering French business law for foreign companies, with attorney profiles, enquiry flows and content operations — in two languages.",
    approach: [
      "Designed and engineered the entire platform, including company-search infrastructure covering 26M+ French companies.",
      "Built a bilingual EN/FR content operation that has produced 2,400+ legal articles.",
      "Run SEO and lead generation continuously as the practice's ongoing growth partner.",
    ],
    results: [
      { value: "2,400+", label: "legal articles published" },
      { value: "26M+", label: "French companies searchable on the platform" },
      { value: "20+", label: "countries clients come from" },
      { value: "EN·FR", label: "fully bilingual delivery" },
    ],
    metaTitle: "Case Study: Building a 2,400-Article Legal Platform for a Paris Law Practice | TDM",
    metaDescription:
      "TDM designed, built and grew a bilingual legal-services platform for a Paris business-law practice — from infrastructure to 2,400+ articles and ongoing lead generation.",
  },
  {
    slug: "uae-perfume-store-seo",
    client: "Sahara Perfumes",
    anonymous: true,
    publicName: "A UAE online perfume store",
    industry: "Perfume e-commerce",
    country: "United Arab Emirates",
    sector: "marketing",
    services: ["On-Page SEO", "Technical SEO", "Off-Page SEO", "Website Development"],
    timeline: "9 months",
    summary:
      "From zero SEO history to top-3 rankings for the store's main keyword — with a 3,000-backlink authority-building campaign.",
    challenge:
      "An online-only retailer in one of the most competitive e-commerce niches in the Gulf, with no previous SEO work and no domain authority.",
    approach: [
      "Full-stack SEO: on-page and content optimization, technical fixes, and site development improvements.",
      "A sustained off-page campaign that built 3,000+ high-quality backlinks.",
    ],
    results: [
      { value: "Top 3", label: "ranking for the main keyword within 6 months" },
      { value: "3,000+", label: "high-quality backlinks created" },
      { value: "+70%", label: "growth in online sales after the new site went live" },
    ],
    testimonial: {
      quote:
        "We couldn't have asked for a better partner than TDM. Their in-depth strategies and relentless efforts helped us dominate our niche. Our rankings and sales have improved dramatically.",
      author: "E-commerce client, UAE",
    },
    metaTitle: "Case Study: Top-3 Rankings & +70% Online Sales for a UAE Perfume Store | TDM",
    metaDescription:
      "How TDM took a UAE perfume e-commerce store to top-3 Google rankings in six months with technical SEO and 3,000+ quality backlinks.",
  },
  {
    slug: "new-business-seo-from-scratch",
    client: "We Wash",
    anonymous: true,
    publicName: "A new laundry-services business",
    industry: "Local services",
    sector: "marketing",
    services: ["SEO", "Website Development", "Content"],
    timeline: "3 months",
    summary:
      "A brand-new business with zero online presence — website, SEO foundation and 250% organic growth in one quarter.",
    challenge: "Starting from absolute zero: no website, no rankings, no content, no authority.",
    approach: [
      "Built a fully optimized website from scratch.",
      "Laid complete on-page, content and technical SEO foundations before launch, then iterated weekly.",
    ],
    results: [
      { value: "+250%", label: "organic traffic in 3 months" },
      { value: "~8K", label: "monthly organic visits reached" },
    ],
    testimonial: {
      quote:
        "TDM was instrumental in setting up our online presence. From designing our website to optimizing it for search engines, they did it all. Their proactive approach and constant updates made the process seamless.",
      author: "Services client",
    },
    metaTitle: "Case Study: +250% Organic Traffic in 3 Months for a New Business | TDM",
    metaDescription:
      "From no website to ~8K monthly organic visits: how TDM built and ranked a new services business in one quarter.",
  },
  {
    slug: "uk-manufacturer-seo",
    client: "Tec Gloves",
    anonymous: true,
    publicName: "A safety-products manufacturer targeting the UK",
    industry: "Manufacturing / safety products",
    country: "United Kingdom",
    sector: "marketing",
    services: ["On-Page SEO", "Technical SEO", "WordPress Optimization"],
    timeline: "12 months",
    summary:
      "A Malaysian manufacturer entering the UK market — WordPress optimization and SEO that moved traffic +20% in the first two months.",
    challenge:
      "Entering the competitive UK market with an underperforming WordPress site and no local search visibility.",
    approach: [
      "On-page and content optimization targeted at UK commercial keywords.",
      "Technical SEO and WordPress performance work that significantly improved PageSpeed scores.",
    ],
    results: [
      { value: "+20%", label: "organic traffic in the first 2 months" },
      { value: "~12×", label: "monthly organic traffic over the engagement (≈50 → ≈650)" },
    ],
    testimonial: {
      quote:
        "Working with TDM was an exceptional experience. Their team not only optimized our website but also boosted its speed, which improved user experience. We saw noticeable results in terms of traffic and lead generation.",
      author: "Manufacturing client, UK market",
    },
    metaTitle: "Case Study: UK Market-Entry SEO for a Safety-Products Manufacturer | TDM",
    metaDescription:
      "WordPress optimization and UK-targeted SEO that grew a manufacturer's organic traffic roughly 12× over the engagement.",
  },
  {
    slug: "arabic-seo-perfume-ecommerce",
    client: "7 Perfumes",
    anonymous: true,
    publicName: "An Arabic-language perfume store",
    industry: "Perfume e-commerce",
    country: "United Arab Emirates",
    sector: "marketing",
    services: ["Arabic SEO", "Content Optimization"],
    timeline: "3 months",
    summary:
      "Native Arabic SEO for a local-market e-commerce store — first-page product rankings within a quarter.",
    challenge:
      "Ranking Arabic-language product pages from scratch in a competitive local e-commerce market — a discipline most agencies can't deliver natively.",
    approach: [
      "Arabic keyword research and on-page optimization by native speakers.",
      "Arabic content production aligned with local search behaviour.",
    ],
    results: [
      { value: "Page 1", label: "rankings for multiple product keywords" },
      { value: "Local", label: "traffic boost from local-market presence" },
    ],
    metaTitle: "Case Study: Native Arabic SEO for a Gulf E-commerce Store | TDM",
    metaDescription:
      "How TDM ranked Arabic product keywords on page 1 within three months using native Arabic SEO and content.",
  },
  {
    slug: "real-estate-platform-seo",
    client: "Chirag.com",
    anonymous: true,
    publicName: "A real-estate listings platform",
    industry: "Real estate",
    sector: "marketing",
    services: ["SEO", "Website Development", "Social Media", "Paid Advertising"],
    timeline: "3 months",
    summary:
      "A new property platform taken from zero visibility to top-10 rankings and qualified listing leads in three months.",
    challenge:
      "A newly launched real-estate platform needing visibility, rankings for property keywords, and lead flow from both organic and social channels.",
    approach: [
      "Delivered a fully optimized platform with seamless UX.",
      "Combined SEO with social media management and paid advertising for compounding visibility.",
    ],
    results: [
      { value: "Top 10", label: "property keywords within 3 months" },
      { value: "+35%", label: "traffic growth with qualified leads" },
    ],
    testimonial: {
      quote:
        "TDM helped us build a strong online presence in the real estate market. From improving our site's SEO to driving traffic through social media and paid ads, they delivered exceptional results.",
      author: "Real-estate client",
    },
    metaTitle: "Case Study: Launch SEO for a Real-Estate Platform | TDM",
    metaDescription:
      "Top-10 property rankings and +35% traffic in three months for a newly launched real-estate platform.",
  },
  {
    slug: "travel-agency-digital-presence",
    client: "Tashkeel Travels",
    anonymous: true,
    publicName: "A travel agency",
    industry: "Travel & tourism",
    sector: "marketing",
    services: ["SEO", "Website Development", "Social Media Management"],
    timeline: "3 months",
    summary:
      "Website, SEO and social management for a travel company with limited online presence — engagement up 70%.",
    challenge: "A travel company with minimal digital footprint needing a complete online presence, fast.",
    approach: [
      "Built a responsive, user-friendly website.",
      "Ran on-page, content and technical SEO alongside active social media management.",
    ],
    results: [
      { value: "+70%", label: "social media engagement" },
      { value: "220", label: "keywords ranking (6.2K est. monthly traffic value ≈ $22.9K)" },
    ],
    metaTitle: "Case Study: Full Digital Presence for a Travel Agency | TDM",
    metaDescription:
      "Website build, SEO and social management that lifted a travel agency's engagement 70% in three months.",
  },
  {
    slug: "uk-food-delivery-app",
    client: "Tasty Hasty",
    anonymous: true,
    publicName: "A UK food-delivery startup",
    industry: "Food delivery",
    country: "United Kingdom",
    sector: "development",
    services: ["Mobile App Development", "UI/UX Design"],
    summary:
      "A native Android food-delivery app for a Yorkshire startup — built with Kotlin and Jetpack Compose.",
    challenge:
      "A regional UK startup competing with national delivery platforms needed a fast, reliable native app tailored to local restaurants.",
    approach: [
      "Native Android build in Kotlin with Jetpack Compose for a modern, responsive UI.",
      "End-to-end delivery: UX research, design system, development, testing and store release.",
    ],
    results: [
      { value: "Native", label: "Android app shipped (Kotlin / Jetpack Compose)" },
      { value: "End-to-end", label: "design → development → release by one team" },
    ],
    metaTitle: "Case Study: Native Android Food-Delivery App for a UK Startup | TDM",
    metaDescription:
      "TDM designed and built a Kotlin/Jetpack Compose food-delivery app for a Yorkshire startup, end to end.",
  },
  {
    slug: "ride-hailing-apps",
    client: "London Cab Egypt / Jeeny",
    anonymous: true,
    publicName: "Ride-hailing operators (Egypt, KSA & Jordan)",
    industry: "Transport / ride-hailing",
    sector: "development",
    services: ["Mobile App Development (iOS)", "UI/UX Design"],
    summary:
      "Native iOS ride-hailing apps built in Swift for operators in Egypt, Saudi Arabia and Jordan.",
    challenge:
      "Ride-hailing demands real-time reliability: live tracking, dispatch, payments and driver/rider flows that simply cannot fail.",
    approach: [
      "Native Swift development for performance-critical, real-time functionality.",
      "Full UX research, wireframing and design-system work before a line of code.",
    ],
    results: [
      { value: "iOS", label: "native Swift apps shipped for multiple markets" },
      { value: "MENA", label: "operators served across Egypt, KSA and Jordan" },
    ],
    metaTitle: "Case Study: Native iOS Ride-Hailing Apps for MENA Operators | TDM",
    metaDescription:
      "Swift-built ride-hailing apps for operators in Egypt, Saudi Arabia and Jordan — designed and developed by TDM.",
  },
  {
    slug: "baby-products-ecommerce-store",
    client: "Le Bouquet Baby Gallery",
    anonymous: true,
    publicName: "A premium baby-products retailer",
    industry: "Baby products e-commerce",
    sector: "development",
    services: ["E-commerce Development", "UI/UX Design"],
    summary:
      "A flagship e-commerce build: full catalogue, brand shops, installment payments and a premium shopping experience.",
    challenge:
      "A premium retailer carrying brands like Inglesina, Peg Perego and Cybex needed a storefront to match — fast, polished and conversion-focused.",
    approach: [
      "Full storefront design and build with category browsing, brand pages, promos and gift cards.",
      "Integrated installment payments (Tabby) for the Gulf market.",
    ],
    results: [
      { value: "Flagship", label: "e-commerce storefront shipped" },
      { value: "Installments", label: "Tabby buy-now-pay-later integrated" },
    ],
    metaTitle: "Case Study: Premium Baby-Products E-commerce Store | TDM",
    metaDescription:
      "TDM designed and built a premium baby-products storefront with brand shops and installment payments.",
  },
  {
    slug: "real-estate-brokerage-website",
    client: "Hemnet Properties",
    anonymous: true,
    publicName: "A Dubai real-estate brokerage",
    industry: "Real estate",
    country: "United Arab Emirates",
    sector: "development",
    services: ["Web Development", "UI/UX Design", "Social Media", "SEO"],
    summary:
      "A property-search website with buy/rent/commercial flows — plus ongoing social and search marketing.",
    challenge:
      "A brokerage in a fast-moving market needed property search, listing management and lead capture — then sustained visibility to feed it.",
    approach: [
      "Designed and built a property-search site with buy/rent/commercial tabs and list-your-property flows.",
      "Ran social media content and SEO as ongoing growth support.",
    ],
    results: [
      { value: "Search", label: "full property-search experience shipped" },
      { value: "Multi-channel", label: "development + SEO + social from one team" },
    ],
    metaTitle: "Case Study: Property-Search Website for a Dubai Brokerage | TDM",
    metaDescription:
      "TDM built a property-search website and runs ongoing SEO and social for a Dubai real-estate brokerage.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/** Name safe to render everywhere. */
export function displayName(cs: CaseStudy): string {
  return cs.anonymous ? cs.publicName : cs.client;
}
