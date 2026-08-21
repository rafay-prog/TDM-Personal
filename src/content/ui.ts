import type { Locale } from "@/lib/types";

export interface UiStrings {
  cta: string;
  /** Condensed variant of `cta` for the header, where horizontal room is tight. */
  ctaShort: string;
  ctaHeadline: string;
  ctaSub: string;
  letsTalk: string;
  learnMore: string;
  explore: string;
  seeResults: string;
  allCaseStudies: string;
  faqKicker: string;
  faqTitle: string;
  services: string;
  servicesKicker: string;
  servicesTitle: string;
  servicesSub: string;
  featuredKicker: string;
  featuredTitle: string;
  backToTop: string;
  company: string;
  globalPresence: string;
  footerBlurb: string;
  ourClients: string;
  clientFeedback: string;
  whatOurClientsSay: string;
  proof: string;
  relatedResults: string;
  ourProcess: string;
  howWeWork: string;
  whatsIncluded: string;
  insideTheService: string;
  home: string;
  blog: string;
  about: string;
  portfolio: string;
  contact: string;
  caseStudiesLabel: string;
  locations: string;
  staffAugmentation: string;
  visitUs: string;
  publishedBy: string;
  form: {
    name: string;
    email: string;
    phone: string;
    need: string;
    message: string;
    send: string;
    sending: string;
    thanksTitle: string;
    thanksBody: string;
    error: string;
    options: string[];
  };
  homeProcess: {
    kicker: string;
    title: string;
    steps: { title: string; desc: string }[];
  };
  blogEnglishNote?: string;
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    cta: "Get a Free Consultation",
    ctaShort: "Free Consultation",
    ctaHeadline: "Where creativity and strategy collide.",
    ctaSub: "Book a free consultation and see what an in-house agency feels like.",
    letsTalk: "Let's talk",
    learnMore: "Learn more →",
    explore: "Explore",
    seeResults: "See the results",
    allCaseStudies: "All case studies",
    faqKicker: "FAQ",
    faqTitle: "Frequently asked questions",
    services: "Services",
    servicesKicker: "What we do",
    servicesTitle: "Every service, under one roof.",
    servicesSub:
      "Media, marketing, engineering and staffing: the whole stack, run by one team that already knows your account.",
    featuredKicker: "Trusted by",
    featuredTitle: "Brands that put their growth in our hands.",
    backToTop: "Back to top",
    company: "Company",
    globalPresence: "Global Presence",
    footerBlurb:
      "Your in-house marketing agency. Media, marketing, development and staff augmentation: delivered worldwide in English, French and Arabic.",
    ourClients: "Our clients",
    clientFeedback: "Client feedback",
    whatOurClientsSay: "What our clients say",
    proof: "Proof",
    relatedResults: "Related results",
    ourProcess: "Our process",
    howWeWork: "How we work",
    whatsIncluded: "What's included",
    insideTheService: "Inside the service",
    home: "Home",
    blog: "Blog",
    about: "About",
    portfolio: "Portfolio",
    contact: "Contact",
    caseStudiesLabel: "Case Studies",
    locations: "Locations",
    staffAugmentation: "Staff Augmentation",
    visitUs: "Visit us",
    publishedBy: "TDM Team",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone / WhatsApp (optional)",
      need: "What do you need?",
      message: "Tell us about your project",
      send: "Send message",
      sending: "Sending…",
      thanksTitle: "Thank you: we got your message.",
      thanksBody: "Our team will get back to you within one business day.",
      error: "Something went wrong. Please email us directly at",
      options: [
        "Marketing (SEO / Ads / Social)",
        "Media production",
        "Web or app development",
        "CRM / ERP systems",
        "Staff augmentation",
        "Something else",
      ],
    },
    homeProcess: {
      kicker: "How we deliver",
      title: "From audit to scale, in four moves.",
      steps: [
        {
          title: "Audit & Insight",
          desc: "We dig into your data, market and funnel to find what's actually holding growth back.",
        },
        {
          title: "Strategy",
          desc: "A concrete plan with targets, channels, budgets and timelines: agreed before we spend a dirham.",
        },
        {
          title: "Execution",
          desc: "Creative, campaigns and code ship fast from one team, iterated weekly on live results.",
        },
        {
          title: "Scale",
          desc: "What works gets more budget, more content and more markets: in EN, FR and AR.",
        },
      ],
    },
  },
  fr: {
    cta: "Consultation gratuite",
    ctaShort: "Consultation",
    ctaHeadline: "Là où créativité et stratégie se rencontrent.",
    ctaSub: "Réservez une consultation gratuite et découvrez ce qu'une agence intégrée peut faire pour vous.",
    letsTalk: "Parlons-en",
    learnMore: "En savoir plus →",
    explore: "Découvrir",
    seeResults: "Voir les résultats",
    allCaseStudies: "Toutes les études de cas",
    faqKicker: "FAQ",
    faqTitle: "Questions fréquentes",
    services: "Services",
    servicesKicker: "Ce que nous faisons",
    servicesTitle: "Tous les services, sous un même toit.",
    servicesSub:
      "Média, marketing, ingénierie et renfort d’équipes: toute la chaîne, pilotée par une équipe qui connaît déjà votre compte.",
    featuredKicker: "Ils nous font confiance",
    featuredTitle: "Des marques qui nous confient leur croissance.",
    backToTop: "Haut de page",
    company: "Entreprise",
    globalPresence: "Présence mondiale",
    footerBlurb:
      "Votre agence marketing intégrée. Média, marketing, développement et renfort d'équipes: partout dans le monde, en anglais, français et arabe.",
    ourClients: "Nos clients",
    clientFeedback: "Témoignages",
    whatOurClientsSay: "Ce que disent nos clients",
    proof: "Résultats",
    relatedResults: "Résultats associés",
    ourProcess: "Notre méthode",
    howWeWork: "Comment nous travaillons",
    whatsIncluded: "Ce qui est inclus",
    insideTheService: "Le service en détail",
    home: "Accueil",
    blog: "Blog",
    about: "À propos",
    portfolio: "Portfolio",
    contact: "Contact",
    caseStudiesLabel: "Études de cas",
    locations: "Implantations",
    staffAugmentation: "Renfort d'équipes",
    visitUs: "Nous rendre visite",
    publishedBy: "Équipe TDM",
    form: {
      name: "Nom",
      email: "E-mail",
      phone: "Téléphone / WhatsApp (facultatif)",
      need: "De quoi avez-vous besoin ?",
      message: "Parlez-nous de votre projet",
      send: "Envoyer",
      sending: "Envoi…",
      thanksTitle: "Merci: nous avons bien reçu votre message.",
      thanksBody: "Notre équipe vous répondra sous un jour ouvré.",
      error: "Une erreur est survenue. Écrivez-nous directement à",
      options: [
        "Marketing (SEO / Ads / Réseaux sociaux)",
        "Production média",
        "Développement web ou mobile",
        "Systèmes CRM / ERP",
        "Renfort d'équipes",
        "Autre",
      ],
    },
    homeProcess: {
      kicker: "Notre méthode",
      title: "De l'audit à la croissance, en quatre étapes.",
      steps: [
        {
          title: "Audit & analyse",
          desc: "Nous analysons vos données, votre marché et votre funnel pour identifier ce qui freine réellement la croissance.",
        },
        {
          title: "Stratégie",
          desc: "Un plan concret avec objectifs, canaux, budgets et échéances: validé avant de dépenser le moindre euro.",
        },
        {
          title: "Exécution",
          desc: "Créa, campagnes et code livrés rapidement par une seule équipe, itérés chaque semaine sur des résultats réels.",
        },
        {
          title: "Passage à l'échelle",
          desc: "Ce qui fonctionne reçoit plus de budget, plus de contenu et plus de marchés: en EN, FR et AR.",
        },
      ],
    },
    blogEnglishNote: "Les articles du blog sont disponibles en anglais.",
  },
  ar: {
    cta: "احصل على استشارة مجانية",
    ctaShort: "استشارة مجانية",
    ctaHeadline: "حيث يلتقي الإبداع بالاستراتيجية.",
    ctaSub: "احجز استشارة مجانية واكتشف ما تعنيه وكالة تعمل كفريقك الداخلي.",
    letsTalk: "لنتحدث",
    learnMore: "اعرف المزيد ←",
    explore: "استكشف",
    seeResults: "شاهد النتائج",
    allCaseStudies: "جميع دراسات الحالة",
    faqKicker: "الأسئلة الشائعة",
    faqTitle: "الأسئلة الأكثر شيوعًا",
    services: "الخدمات",
    servicesKicker: "ماذا نقدم",
    servicesTitle: "كل الخدمات تحت سقف واحد.",
    servicesSub:
      "ميديا وتسويق وهندسة وتعزيز فرق العمل: المنظومة كاملة، يديرها فريق واحد يعرف حسابك مسبقًا.",
    featuredKicker: "يثقون بنا",
    featuredTitle: "علامات وضعت نموها بين أيدينا.",
    backToTop: "العودة إلى الأعلى",
    company: "الشركة",
    globalPresence: "حضورنا العالمي",
    footerBlurb:
      "وكالة التسويق الداخلية لعلامتك. ميديا وتسويق وتطوير وتعزيز فرق العمل: نخدم العالم بالإنجليزية والفرنسية والعربية.",
    ourClients: "عملاؤنا",
    clientFeedback: "آراء العملاء",
    whatOurClientsSay: "ماذا يقول عملاؤنا",
    proof: "النتائج",
    relatedResults: "نتائج ذات صلة",
    ourProcess: "منهجيتنا",
    howWeWork: "كيف نعمل",
    whatsIncluded: "ماذا تشمل الخدمة",
    insideTheService: "تفاصيل الخدمة",
    home: "الرئيسية",
    blog: "المدونة",
    about: "من نحن",
    portfolio: "أعمالنا",
    contact: "اتصل بنا",
    caseStudiesLabel: "دراسات الحالة",
    locations: "مواقعنا",
    staffAugmentation: "تعزيز فرق العمل",
    visitUs: "زورونا",
    publishedBy: "فريق TDM",
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف / واتساب (اختياري)",
      need: "ما الذي تحتاجه؟",
      message: "أخبرنا عن مشروعك",
      send: "إرسال الرسالة",
      sending: "جارٍ الإرسال…",
      thanksTitle: "شكرًا لك: وصلتنا رسالتك.",
      thanksBody: "سيتواصل معك فريقنا خلال يوم عمل واحد.",
      error: "حدث خطأ ما. راسلنا مباشرة على",
      options: [
        "التسويق (SEO / إعلانات / سوشيال ميديا)",
        "إنتاج الميديا",
        "تطوير مواقع أو تطبيقات",
        "أنظمة CRM / ERP",
        "تعزيز فرق العمل",
        "أخرى",
      ],
    },
    homeProcess: {
      kicker: "كيف نعمل",
      title: "من التحليل إلى النمو في أربع خطوات.",
      steps: [
        {
          title: "التدقيق والتحليل",
          desc: "نحلل بياناتك وسوقك ومسار التحويل لديك لنكتشف ما يعيق نموك فعلاً.",
        },
        {
          title: "الاستراتيجية",
          desc: "خطة واضحة بأهداف وقنوات وميزانيات وجداول زمنية: نتفق عليها قبل إنفاق أي درهم.",
        },
        {
          title: "التنفيذ",
          desc: "الإبداع والحملات والتطوير من فريق واحد، بوتيرة سريعة وتحسين أسبوعي على نتائج حقيقية.",
        },
        {
          title: "التوسع",
          desc: "ما ينجح يحصل على ميزانية أكبر ومحتوى أكثر وأسواق جديدة: بالإنجليزية والفرنسية والعربية.",
        },
      ],
    },
    blogEnglishNote: "مقالات المدونة متاحة باللغة الإنجليزية.",
  },
};
