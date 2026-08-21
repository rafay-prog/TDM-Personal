import type { Faq } from "@/lib/types";

export interface HeroCopy {
  kicker: string;
  headline: string;
  sub: string;
}

export interface PagesCopy {
  home: {
    metaTitle: string;
    metaDescription: string;
    heroKicker: string;
    heroHeadline: string;
    heroSub: string;
    statLabels: { satisfaction: string; clients: string; specialists: string; roas: string; countries: string };
    sectorsKicker: string;
    sectorsTitle: string;
    sectorsSub: string;
    caseKicker: string;
    caseTitle: string;
    caseSub: string;
    whyKicker: string;
    whyTitle: string;
    whyItems: [string, string][];
    logosTitle: string;
    faqs: Faq[];
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    hero: HeroCopy;
    intro: string[];
    missionLabel: string;
    mission: string;
    visionLabel: string;
    vision: string;
    leadershipKicker: string;
    leadershipTitle: string;
    presenceKicker: string;
    presenceTitle: string;
    partnersNote: string;
    faqs: Faq[];
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    hero: HeroCopy;
    directLabel: string;
    officesLabel: string;
    faqs: Faq[];
  };
  clientsPage: {
    metaTitle: string;
    metaDescription: string;
    hero: HeroCopy;
    inTheirWords: string;
  };
  portfolioPage: {
    metaTitle: string;
    metaDescription: string;
    hero: HeroCopy;
    ctaHeadline: string;
    ctaSub: string;
  };
  caseStudiesPage: {
    metaTitle: string;
    metaDescription: string;
    hero: HeroCopy;
    ctaHeadline: string;
  };
  locationsPage: {
    metaTitle: string;
    metaDescription: string;
    hero: HeroCopy;
  };
  sectorExtras: {
    servicesKicker: string;
    servicesTitle: (sectorName: string) => string;
    resultsTitle: string;
    staffAug: {
      kicker: string;
      title: string;
      pillars: { title: string; desc: string }[];
      paragraphs: string[];
      roles: {
        kicker: string;
        title: string;
        sub: string;
        groups: { name: string; items: string[] }[];
      };
      process: {
        kicker: string;
        title: string;
        steps: { title: string; desc: string }[];
      };
    };
  };
  caseStudyPage: {
    kickerPrefix: string;
    challengeLabel: string;
    approachLabel: string;
    ctaHeadline: string;
  };
  servicePage: {
    ctaHeadline: (serviceName: string) => string;
    ctaSub: string;
    showreelKicker: string;
    showreelTitle: string;
  };
}

export const pages: PagesCopy = {
  home: {
    metaTitle: "TDM — The Digital Marketing Services | Your In-House Marketing Agency",
    metaDescription:
      "TDM is a full-service digital agency: media production, performance marketing, SEO, web & app development, CRM/ERP systems and staff augmentation — from 8 countries, in English, French and Arabic. 100% client satisfaction.",
    heroKicker: "Your in-house growth team",
    heroHeadline: "Campaigns, content and code that turn spend into revenue.",
    heroSub:
      "One team runs your ads, your creative and your storefront — 50+ specialists across 8 countries, working in English, French and Arabic. No handoffs between agencies. No retainers that quietly drift.",
    statLabels: {
      satisfaction: "client satisfaction rate",
      clients: "clients served worldwide",
      specialists: "marketing & tech specialists",
      roas: "best ROAS delivered to date",
      countries: "countries with TDM presence",
    },
    sectorsKicker: "What we do",
    sectorsTitle: "One partner, the full growth stack.",
    sectorsSub: "End-to-end solutions to grow your brand, build your store, and scale across every market.",
    caseKicker: "Case studies",
    caseTitle: "We took on brands that had given up on agencies.",
    caseSub: "And made them believe an agency can perform. Documented results, not promises.",
    whyKicker: "Why brands stay with TDM",
    whyTitle: "Same goals. Same numbers. Same urgency.",
    whyItems: [
      ["E-commerce first", "We live in online retail — its metrics, margins, and seasonality."],
      ["The in-house model", "One dedicated team that behaves like your own department, not a vendor."],
      ["Decisions from data", "Every strategy is grounded in analytics and performance metrics."],
      ["Transparent reporting", "Clear, actionable reports that show exactly what your budget did."],
      ["Multilingual reach", "Campaigns in English, French, and Arabic for genuinely global markets."],
      ["Support at every step", "From strategy to execution to optimization — one team, end to end."],
    ],
    logosTitle: "150+ brands and counting",
    faqs: [
      {
        q: "What services does TDM offer?",
        a: "TDM operates four divisions: Media (video shoots, editing, UGC ads, product shoots, ad creatives), Marketing (performance marketing, SEO, social media management), Development (Shopify, WordPress, Magento, custom platforms, CRM/ERP systems, mobile apps) and Staff Augmentation (dedicated remote professionals managed from our Lahore hub).",
      },
      {
        q: "Where does TDM operate?",
        a: "TDM is headquartered in Dubai with its delivery hub in Lahore, Pakistan, and presence in the UK, USA, Cameroon, Japan, France and Bulgaria. We deliver campaigns and platforms in English, French and Arabic.",
      },
      {
        q: "What makes TDM different from other agencies?",
        a: "TDM works as your in-house team, not a vendor: one dedicated team across marketing, creative and engineering, decisions grounded in data, and transparent reports that show exactly what your budget did. That model has kept our client satisfaction rate at 100%.",
      },
      {
        q: "How do I start working with TDM?",
        a: "Book a free consultation via the contact page, email info@thedigitalmarketing.services or call +971 58 909 4045. We'll audit your current setup and propose a concrete plan with measurable targets before you commit.",
      },
    ],
  },
  about: {
    metaTitle: "About TDM — An Agency Built for Brands Tired of Agencies",
    metaDescription:
      "TDM is a Dubai-headquartered digital agency with a 50+ specialist delivery hub in Lahore and presence in 8 countries. 100% client satisfaction, in EN, FR & AR.",
    hero: {
      kicker: "Who we are",
      headline: "An agency built for brands tired of agencies.",
      sub: "TDM works as an extension of your own team — same goals, same numbers, same urgency. No retainers that drift, no reports that hide the truth.",
    },
    intro: [
      "From strategy to storefront, our specialists own the full growth stack: marketing, creative, engineering, and marketplace operations. What started as an e-commerce marketing team is now four divisions — Media, Marketing, Development and Staff Augmentation — serving brands on four continents.",
      "The TDM promise: we took on brands that had given up on agencies — and made them believe an agency can perform.",
    ],
    missionLabel: "Our mission",
    mission: "Leading global e-commerce marketing, empowering brands to grow and connect with customers.",
    visionLabel: "Our vision",
    vision: "Transforming e-commerce with innovative, data-driven strategies for growth and loyalty.",
    leadershipKicker: "Leadership",
    leadershipTitle: "The people accountable to you",
    presenceKicker: "Global presence",
    presenceTitle: "8 countries · 4 continents · 3 languages",
    partnersNote: "Certified partners:",
    faqs: [
      {
        q: "Who is TDM — The Digital Marketing Services?",
        a: "TDM is a full-service digital agency headquartered in Dubai, with its delivery hub in Lahore, Pakistan, and presence in the UK, USA, Cameroon, Japan, France and Bulgaria. We deliver media production, marketing, software development and staff augmentation as one in-house-style team.",
      },
      {
        q: "How big is TDM?",
        a: "TDM is powered by 50+ marketing and technology specialists, has served 150+ clients worldwide, and maintains a 100% client satisfaction rate. We are Meta Business, Shopify and Google partners.",
      },
      {
        q: "What languages does TDM work in?",
        a: "TDM delivers campaigns, content and platforms natively in English, French and Arabic — with additional internal capability in Urdu and Hindi.",
      },
    ],
  },
  contact: {
    metaTitle: "Contact TDM — Get a Free Consultation | TDM",
    metaDescription:
      "Talk to TDM about marketing, media, development or staff augmentation. Offices in Dubai, Lahore, the UK, USA, Cameroon, Japan, France and Bulgaria.",
    hero: {
      kicker: "Let's talk",
      headline: "Book a free consultation.",
      sub: "Tell us where you want to grow — we'll come back within one business day with an honest assessment and a concrete plan.",
    },
    directLabel: "Direct",
    officesLabel: "Offices",
    faqs: [
      {
        q: "How quickly does TDM respond to inquiries?",
        a: "We reply to every inquiry within one business day. For urgent projects, call +971 58 909 4045 directly.",
      },
      {
        q: "Is the consultation really free?",
        a: "Yes. We audit your current setup, identify the biggest opportunities and propose a concrete plan with measurable targets — before you commit to anything.",
      },
    ],
  },
  clientsPage: {
    metaTitle: "Our Clients — 150+ Brands Worldwide | TDM",
    metaDescription:
      "150+ brands across e-commerce, real estate, legal, travel and technology trust TDM with their growth — with a 100% client satisfaction rate.",
    hero: {
      kicker: "Our clients",
      headline: "150+ brands and counting.",
      sub: "From regional e-commerce stores to international organizations — with a 100% client satisfaction rate.",
    },
    inTheirWords: "In their words",
  },
  portfolioPage: {
    metaTitle: "Portfolio — Work Across Media, Marketing & Development | TDM",
    metaDescription:
      "Explore TDM's portfolio: e-commerce stores, platforms and apps we've built, SEO and ad campaigns we've run, and creative we've produced — with documented results.",
    hero: {
      kicker: "Portfolio",
      headline: "The work speaks. The numbers testify.",
      sub: "Instead of a PDF, here's the living portfolio: what we built, what we ran, and what it did — organized by division.",
    },
    ctaHeadline: "Want to see work in your industry?",
    ctaSub: "Ask us — we'll walk you through relevant projects and introduce reference clients where possible.",
  },
  caseStudiesPage: {
    metaTitle: "Case Studies — Documented Client Results | TDM",
    metaDescription:
      "Real, documented results from TDM engagements: 16× organic traffic, 10× ROAS, top-3 rankings, platform builds and native apps. See how we work.",
    hero: {
      kicker: "Case studies",
      headline: "Documented results, not promises.",
      sub: "Every number below comes from a real engagement. Client names are shared on request where confidentiality applies.",
    },
    ctaHeadline: "Want results like these?",
  },
  locationsPage: {
    metaTitle: "Global Presence — TDM Offices in 8 Countries | TDM",
    metaDescription:
      "TDM operates from Dubai (HQ), Lahore (delivery hub), the UK, USA, Cameroon, Japan, France and Bulgaria — one agency, delivering in English, French and Arabic.",
    hero: {
      kicker: "Global presence",
      headline: "8 countries. 4 continents. One team.",
      sub: "Headquartered in Dubai with our delivery hub in Lahore — and local presence wherever our clients are.",
    },
  },
  sectorExtras: {
    servicesKicker: "Services",
    servicesTitle: (sectorName: string) => `What ${sectorName} covers`,
    resultsTitle: "Results from this division",
    staffAug: {
      kicker: "How it works",
      title: "Smart teams. Lower costs. Better results.",
      pillars: [
        {
          title: "Dedicated hires, not freelancers",
          desc: "Developers, designers, marketers and more — full-time, on your projects only.",
        },
        {
          title: "Your timezone, your tools",
          desc: "Teams align to your working hours and report directly into your workflow.",
        },
        {
          title: "Managed & retained by TDM",
          desc: "Recruiting, HR, and performance management stay on our books, not yours.",
        },
      ],
      roles: {
        kicker: "Roles we place",
        title: "The people you can hire through us.",
        sub: "Engineering and marketing specialists, employed by TDM and working only on your projects.",
        groups: [
          {
            name: "Technology",
            items: [
              "Front-end — React, Next.js, Vue",
              "Back-end — Node, Django, Laravel",
              "Full-stack — end-to-end builds",
              "CMS & e-commerce — WordPress, Shopify",
              "Mobile — React Native, Flutter",
              "QA & testing — manual and automation",
            ],
          },
          {
            name: "Marketing",
            items: [
              "SEO — technical, on-page and content",
              "PPC & paid media — Google, Meta, TikTok",
              "Social media — strategy and daily management",
              "Content & copywriting",
              "Email & marketing automation",
              "Graphic design",
            ],
          },
        ],
      },
      process: {
        kicker: "How it works",
        title: "Four steps to someone at their desk.",
        steps: [
          { title: "Tell us the role", desc: "The skills, the seniority and the hours you need covered." },
          {
            title: "We match and vet",
            desc: "We select from the specialists already on our payroll, or recruit for the role, and vet them for fit.",
          },
          { title: "You approve", desc: "Meet the candidate and decide. No obligation if they are not the right person." },
          {
            title: "They start — we manage",
            desc: "They join your workflow, while TDM handles the daily oversight, HR and performance.",
          },
        ],
      },
      paragraphs: [
        "You choose the roles. We handle sourcing, payroll, retention, and quality — and the team works your hours, on your tools. Clients typically save 50–70% versus an equivalent local hire, with no recruiting fees or office overhead.",
        "Every professional works from our managed Lahore delivery hub, mentored by TDM seniors — not alone in a spare room. If someone isn't the right fit, we replace them at no extra cost.",
      ],
    },
  },
  caseStudyPage: {
    kickerPrefix: "Case study",
    challengeLabel: "The challenge",
    approachLabel: "What we did",
    ctaHeadline: "Your brand could be the next case study.",
  },
  servicePage: {
    ctaHeadline: (serviceName: string) => `Ready to talk about ${serviceName.toLowerCase()}?`,
    ctaSub: "Book a free consultation — we'll audit your current setup and propose a concrete plan.",
    showreelKicker: "Showreel",
    showreelTitle: "Watch our work",
  },
};
