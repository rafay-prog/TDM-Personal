import type { CaseStudy, Office, TeamMember, Testimonial } from "@/lib/types";
import type { PagesCopy } from "@/content/en/pages";

/**
 * French (fr) site content — translated from src/content/en/*.
 * Slugs, client names, anonymous flags, emails, phone numbers and
 * street addresses are kept identical to the English source.
 */

export const frCaseStudies: CaseStudy[] = [
  {
    slug: "uae-fragrance-retailer-seo-ads",
    client: "V Perfumes",
    anonymous: true,
    publicName: "Un détaillant de parfums aux Émirats arabes unis",
    industry: "E-commerce de parfums et fragrances",
    country: "Émirats arabes unis",
    sector: "marketing",
    services: ["SEO", "Marketing à la performance", "E-commerce"],
    timeline: "12 mois",
    summary:
      "En douze mois, nous avons reconstruit le moteur organique de ce détaillant régional et repris son acquisition payante — pour en faire un leader de sa catégorie.",
    challenge:
      "Une faible visibilité sur un marché du parfum ultra-concurrentiel : pages produits mal positionnées, faible autorité de domaine, aucun ciblage de mots-clés ni structure SEO, et des campagnes payantes impossibles à rentabiliser à grande échelle.",
    approach: [
      "Refonte SEO complète : optimisation on-page, contenu et blog, SEO technique et netlinking soutenu sur l'ensemble du catalogue produits.",
      "Reprise de l'acquisition payante avec des comptes Google et Meta restructurés, et la gestion d'un budget mensuel à six chiffres en AED sous des objectifs de ROAS stricts.",
      "Itération continue entre données organiques et payantes — les termes de recherche alimentaient le plan de contenu ; les contenus gagnants alimentaient les annonces.",
    ],
    results: [
      { value: "16×", label: "de croissance du trafic organique (22K → 350K sessions/mois)" },
      { value: "10×", label: "de retour sur dépenses publicitaires, maintenu sur l'année" },
      { value: "60", label: "mots-clés à fort trafic classés dans le top 3 de Google" },
      { value: "+50%", label: "de croissance du chiffre d'affaires" },
    ],
    metaTitle: "Étude de cas : trafic ×16 et ROAS ×10 aux EAU | TDM",
    metaDescription:
      "Comment TDM a fait passer un e-commerce de parfums aux EAU de 22K à 350K sessions mensuelles, avec un retour sur dépenses publicitaires ×10 maintenu douze mois.",
  },
  {
    slug: "french-legal-platform",
    client: "French Business Law (Petroff)",
    anonymous: true,
    publicName: "Un cabinet d'avocats d'affaires parisien",
    industry: "Services juridiques",
    country: "France",
    sector: "development",
    services: ["Conception et développement de plateforme", "Contenu multilingue", "SEO et génération de leads"],
    timeline: "Partenariat en cours",
    summary:
      "Une plateforme digitale complète pour un cabinet d'avocats d'affaires parisien au service des entreprises anglophones en France — conçue, développée et développée commercialement de bout en bout par TDM.",
    challenge:
      "Le cabinet avait besoin de bien plus qu'un site web : une plateforme de connaissances consultable couvrant le droit des affaires français pour les entreprises étrangères, avec profils d'avocats, parcours de contact et production de contenu — en deux langues.",
    approach: [
      "Conception et développement de l'intégralité de la plateforme, y compris une infrastructure de recherche d'entreprises couvrant plus de 26 millions de sociétés françaises.",
      "Mise en place d'une production de contenu bilingue EN/FR qui a publié plus de 2 400 articles juridiques.",
      "Pilotage continu du SEO et de la génération de leads en tant que partenaire de croissance attitré du cabinet.",
    ],
    results: [
      { value: "2,400+", label: "articles juridiques publiés" },
      { value: "26M+", label: "entreprises françaises consultables sur la plateforme" },
      { value: "20+", label: "pays d'origine des clients" },
      { value: "EN·FR", label: "prestation entièrement bilingue" },
    ],
    metaTitle: "Étude de cas : plateforme juridique de 2 400 articles | TDM",
    metaDescription:
      "TDM a conçu, développé et fait croître une plateforme juridique bilingue pour un cabinet parisien — infrastructure, 2 400+ articles et génération de leads.",
  },
  {
    slug: "uae-perfume-store-seo",
    client: "Sahara Perfumes",
    anonymous: true,
    publicName: "Une parfumerie en ligne aux Émirats arabes unis",
    industry: "E-commerce de parfums",
    country: "Émirats arabes unis",
    sector: "marketing",
    services: ["SEO on-page", "SEO technique", "SEO off-page", "Développement web"],
    timeline: "9 mois",
    summary:
      "D'un historique SEO inexistant au top 3 sur le mot-clé principal de la boutique — grâce à une campagne d'autorité de 3 000 backlinks.",
    challenge:
      "Un détaillant 100% en ligne dans l'une des niches e-commerce les plus concurrentielles du Golfe, sans aucun travail SEO préalable ni autorité de domaine.",
    approach: [
      "SEO full-stack : optimisation on-page et du contenu, corrections techniques et améliorations du développement du site.",
      "Une campagne off-page soutenue qui a construit plus de 3 000 backlinks de haute qualité.",
    ],
    results: [
      { value: "Top 3", label: "sur le mot-clé principal en moins de 6 mois" },
      { value: "3,000+", label: "backlinks de haute qualité créés" },
      { value: "+70%", label: "de croissance des ventes en ligne après la mise en ligne du nouveau site" },
    ],
    testimonial: {
      quote:
        "Nous n'aurions pas pu rêver d'un meilleur partenaire que TDM. Leurs stratégies pointues et leurs efforts constants nous ont permis de dominer notre niche. Nos positions et nos ventes se sont améliorées de façon spectaculaire.",
      author: "Client e-commerce, EAU",
    },
    metaTitle: "Étude de cas : top 3 et +70% pour une parfumerie | TDM",
    metaDescription:
      "Comment TDM a hissé une parfumerie en ligne des EAU dans le top 3 de Google en six mois grâce au SEO technique et à plus de 3 000 backlinks de qualité.",
  },
  {
    slug: "new-business-seo-from-scratch",
    client: "We Wash",
    anonymous: true,
    publicName: "Une nouvelle entreprise de services de blanchisserie",
    industry: "Services de proximité",
    sector: "marketing",
    services: ["SEO", "Développement web", "Contenu"],
    timeline: "3 mois",
    summary:
      "Une entreprise toute neuve, sans aucune présence en ligne — site web, fondations SEO et 250% de croissance organique en un trimestre.",
    challenge: "Partir de zéro absolu : pas de site web, pas de positions, pas de contenu, pas d'autorité.",
    approach: [
      "Création d'un site web entièrement optimisé, à partir de zéro.",
      "Mise en place de fondations SEO complètes — on-page, contenu et technique — avant le lancement, puis itérations hebdomadaires.",
    ],
    results: [
      { value: "+250%", label: "de trafic organique en 3 mois" },
      { value: "~8K", label: "visites organiques mensuelles atteintes" },
    ],
    testimonial: {
      quote:
        "TDM a joué un rôle décisif dans la mise en place de notre présence en ligne. De la conception de notre site à son optimisation pour les moteurs de recherche, ils ont tout pris en charge. Leur approche proactive et leurs points réguliers ont rendu le processus fluide.",
      author: "Client secteur services",
    },
    metaTitle: "Étude de cas : +250% de trafic organique en 3 mois | TDM",
    metaDescription:
      "D'aucun site web à environ 8K visites organiques mensuelles : comment TDM a créé et positionné une nouvelle entreprise de services en un trimestre.",
  },
  {
    slug: "uk-manufacturer-seo",
    client: "Tec Gloves",
    anonymous: true,
    publicName: "Un fabricant d'équipements de sécurité visant le marché britannique",
    industry: "Industrie / équipements de sécurité",
    country: "Royaume-Uni",
    sector: "marketing",
    services: ["SEO on-page", "SEO technique", "Optimisation WordPress"],
    timeline: "12 mois",
    summary:
      "Un fabricant malaisien à la conquête du marché britannique — optimisation WordPress et SEO, avec +20% de trafic dès les deux premiers mois.",
    challenge:
      "Pénétrer le marché britannique, très concurrentiel, avec un site WordPress sous-performant et aucune visibilité dans les recherches locales.",
    approach: [
      "Optimisation on-page et du contenu ciblée sur les mots-clés commerciaux britanniques.",
      "SEO technique et optimisation des performances WordPress, avec une nette amélioration des scores PageSpeed.",
    ],
    results: [
      { value: "+20%", label: "de trafic organique dans les 2 premiers mois" },
      { value: "~12×", label: "de trafic organique mensuel sur la durée de la mission (≈50 → ≈650)" },
    ],
    testimonial: {
      quote:
        "Travailler avec TDM a été une expérience exceptionnelle. Leur équipe a non seulement optimisé notre site, mais aussi amélioré sa vitesse, ce qui a bonifié l'expérience utilisateur. Nous avons constaté des résultats tangibles en matière de trafic et de génération de leads.",
      author: "Client industriel, marché britannique",
    },
    metaTitle: "Étude de cas : SEO d'entrée sur le marché britannique | TDM",
    metaDescription:
      "Optimisation WordPress et SEO ciblé Royaume-Uni : le trafic organique d'un fabricant multiplié par environ 12 sur la durée de la mission.",
  },
  {
    slug: "arabic-seo-perfume-ecommerce",
    client: "7 Perfumes",
    anonymous: true,
    publicName: "Une parfumerie en ligne arabophone",
    industry: "E-commerce de parfums",
    country: "Émirats arabes unis",
    sector: "marketing",
    services: ["SEO en arabe", "Optimisation de contenu"],
    timeline: "3 mois",
    summary:
      "Un SEO natif en arabe pour un e-commerce du marché local — des pages produits en première page en un trimestre.",
    challenge:
      "Positionner des pages produits en langue arabe, en partant de zéro, sur un marché e-commerce local concurrentiel — une discipline que la plupart des agences ne maîtrisent pas nativement.",
    approach: [
      "Recherche de mots-clés en arabe et optimisation on-page par des locuteurs natifs.",
      "Production de contenu en arabe alignée sur les comportements de recherche locaux.",
    ],
    results: [
      { value: "Page 1", label: "de positions sur plusieurs mots-clés produits" },
      { value: "Local", label: "gain de trafic grâce à la présence sur le marché local" },
    ],
    metaTitle: "Étude de cas : SEO natif en arabe pour un e-commerce | TDM",
    metaDescription:
      "Comment TDM a positionné des mots-clés produits en arabe en première page en trois mois grâce à un SEO et à des contenus natifs en arabe.",
  },
  {
    slug: "real-estate-platform-seo",
    client: "Chirag.com",
    anonymous: true,
    publicName: "Une plateforme d'annonces immobilières",
    industry: "Immobilier",
    sector: "marketing",
    services: ["SEO", "Développement web", "Réseaux sociaux", "Publicité payante"],
    timeline: "3 mois",
    summary:
      "Une nouvelle plateforme immobilière passée d'une visibilité nulle au top 10 avec des leads d'annonces qualifiés en trois mois.",
    challenge:
      "Une plateforme immobilière fraîchement lancée en quête de visibilité, de positions sur les mots-clés immobiliers et d'un flux de leads issus des canaux organiques et sociaux.",
    approach: [
      "Livraison d'une plateforme entièrement optimisée avec une expérience utilisateur fluide.",
      "Combinaison du SEO avec la gestion des réseaux sociaux et la publicité payante pour une visibilité cumulative.",
    ],
    results: [
      { value: "Top 10", label: "sur les mots-clés immobiliers en 3 mois" },
      { value: "+35%", label: "de croissance du trafic avec des leads qualifiés" },
    ],
    testimonial: {
      quote:
        "TDM nous a aidés à bâtir une forte présence en ligne sur le marché immobilier. De l'amélioration du SEO de notre site à la génération de trafic via les réseaux sociaux et la publicité payante, ils ont livré des résultats exceptionnels.",
      author: "Client secteur immobilier",
    },
    metaTitle: "Étude de cas : SEO de lancement d'une plateforme immo | TDM",
    metaDescription:
      "Top 10 sur les mots-clés immobiliers et +35% de trafic en trois mois pour une plateforme immobilière fraîchement lancée.",
  },
  {
    slug: "travel-agency-digital-presence",
    client: "Tashkeel Travels",
    anonymous: true,
    publicName: "Une agence de voyages",
    industry: "Voyage et tourisme",
    sector: "marketing",
    services: ["SEO", "Développement web", "Gestion des réseaux sociaux"],
    timeline: "3 mois",
    summary:
      "Site web, SEO et gestion des réseaux sociaux pour un voyagiste à la présence en ligne limitée — engagement en hausse de 70%.",
    challenge: "Un voyagiste à l'empreinte digitale minimale, qui avait besoin d'une présence en ligne complète, rapidement.",
    approach: [
      "Création d'un site web responsive et intuitif.",
      "Pilotage du SEO on-page, du contenu et de la technique, en parallèle d'une gestion active des réseaux sociaux.",
    ],
    results: [
      { value: "+70%", label: "d'engagement sur les réseaux sociaux" },
      { value: "220", label: "mots-clés positionnés (6,2K de trafic mensuel estimé, valeur ≈ 22,9K $)" },
    ],
    metaTitle: "Étude de cas : présence digitale d'un voyagiste | TDM",
    metaDescription:
      "Création de site, SEO et gestion des réseaux sociaux : l'engagement d'une agence de voyages en hausse de 70% en trois mois.",
  },
  {
    slug: "uk-food-delivery-app",
    client: "Tasty Hasty",
    anonymous: true,
    publicName: "Une startup britannique de livraison de repas",
    industry: "Livraison de repas",
    country: "Royaume-Uni",
    sector: "development",
    services: ["Développement d'applications mobiles", "Design UI/UX"],
    summary:
      "Une application native Android de livraison de repas pour une startup du Yorkshire — développée avec Kotlin et Jetpack Compose.",
    challenge:
      "Une startup régionale britannique en concurrence avec les plateformes nationales de livraison avait besoin d'une application native rapide et fiable, taillée pour les restaurants locaux.",
    approach: [
      "Développement natif Android en Kotlin avec Jetpack Compose pour une interface moderne et réactive.",
      "Prestation de bout en bout : recherche UX, design system, développement, tests et publication sur les stores.",
    ],
    results: [
      { value: "Natif", label: "application Android livrée (Kotlin / Jetpack Compose)" },
      { value: "Intégral", label: "design → développement → publication par une seule équipe" },
    ],
    metaTitle: "Étude de cas : appli Android de livraison de repas | TDM",
    metaDescription:
      "TDM a conçu et développé de bout en bout une application de livraison de repas en Kotlin/Jetpack Compose pour une startup du Yorkshire.",
  },
  {
    slug: "ride-hailing-apps",
    client: "London Cab Egypt / Jeeny",
    anonymous: true,
    publicName: "Des opérateurs de VTC (Égypte, Arabie saoudite et Jordanie)",
    industry: "Transport / VTC",
    sector: "development",
    services: ["Développement d'applications mobiles (iOS)", "Design UI/UX"],
    summary:
      "Des applications VTC natives iOS développées en Swift pour des opérateurs en Égypte, en Arabie saoudite et en Jordanie.",
    challenge:
      "Le VTC exige une fiabilité en temps réel : suivi en direct, répartition des courses, paiements et parcours conducteur/passager qui n'ont tout simplement pas le droit de flancher.",
    approach: [
      "Développement natif en Swift pour des fonctionnalités temps réel aux performances critiques.",
      "Recherche UX complète, wireframes et design system avant la moindre ligne de code.",
    ],
    results: [
      { value: "iOS", label: "applications natives Swift livrées pour plusieurs marchés" },
      { value: "MENA", label: "opérateurs servis en Égypte, en Arabie saoudite et en Jordanie" },
    ],
    metaTitle: "Étude de cas : applis VTC natives iOS en région MENA | TDM",
    metaDescription:
      "Des applications VTC développées en Swift pour des opérateurs en Égypte, en Arabie saoudite et en Jordanie — conçues et réalisées par TDM.",
  },
  {
    slug: "baby-products-ecommerce-store",
    client: "Le Bouquet Baby Gallery",
    anonymous: true,
    publicName: "Un détaillant premium de produits de puériculture",
    industry: "E-commerce de produits de puériculture",
    sector: "development",
    services: ["Développement e-commerce", "Design UI/UX"],
    summary:
      "Une réalisation e-commerce vitrine : catalogue complet, espaces de marque, paiement fractionné et expérience d'achat premium.",
    challenge:
      "Un détaillant premium distribuant des marques comme Inglesina, Peg Perego et Cybex avait besoin d'une boutique à la hauteur — rapide, soignée et pensée pour la conversion.",
    approach: [
      "Conception et développement complets de la boutique : navigation par catégorie, pages de marque, promotions et cartes cadeaux.",
      "Intégration du paiement fractionné (Tabby) pour le marché du Golfe.",
    ],
    results: [
      { value: "Vitrine", label: "boutique e-commerce premium livrée" },
      { value: "Fractionné", label: "paiement en plusieurs fois Tabby intégré" },
    ],
    metaTitle: "Étude de cas : e-commerce premium de puériculture | TDM",
    metaDescription:
      "TDM a conçu et développé une boutique premium de produits de puériculture avec espaces de marque et paiement fractionné.",
  },
  {
    slug: "real-estate-brokerage-website",
    client: "Hemnet Properties",
    anonymous: true,
    publicName: "Une agence immobilière de Dubaï",
    industry: "Immobilier",
    country: "Émirats arabes unis",
    sector: "development",
    services: ["Développement web", "Design UI/UX", "Réseaux sociaux", "SEO"],
    summary:
      "Un site de recherche immobilière avec parcours achat/location/commercial — plus un marketing social et search au long cours.",
    challenge:
      "Sur un marché qui bouge vite, cette agence avait besoin de recherche de biens, de gestion d'annonces et de capture de leads — puis d'une visibilité durable pour les alimenter.",
    approach: [
      "Conception et développement d'un site de recherche immobilière avec onglets achat/location/commercial et parcours de dépôt d'annonce.",
      "Pilotage continu du contenu social et du SEO en soutien de la croissance.",
    ],
    results: [
      { value: "Recherche", label: "expérience complète de recherche de biens livrée" },
      { value: "Multicanal", label: "développement + SEO + social par une seule équipe" },
    ],
    metaTitle: "Étude de cas : site immobilier d'une agence de Dubaï | TDM",
    metaDescription:
      "TDM a développé un site de recherche immobilière et pilote le SEO et les réseaux sociaux d'une agence immobilière de Dubaï.",
  },
];

export const frOffices: Office[] = [
  {
    slug: "dubai",
    country: "Émirats arabes unis",
    city: "Dubaï",
    address: "17 12 A Street, Al Qusais Industrial Area 1, P.O. Box 231578, Dubai, UAE",
    role: "hq",
    roleLabel: "Siège social",
    metaTitle: "Agence de marketing digital à Dubaï, EAU | TDM Services",
    metaDescription:
      "TDM, agence digitale à Dubaï : SEO, marketing de performance, production média et développement web pour les marques des EAU et du Golfe. Satisfaction : 100%.",
    hero: {
      headline: "Votre partenaire de croissance digitale à Dubaï.",
      sub: "Depuis notre siège aux EAU, TDM pilote SEO, publicité payante, production média et développement e-commerce pour les marques de Dubaï et du Golfe.",
    },
    intro: [
      "TDM — The Digital Marketing Services a son siège à Dubaï, aux Émirats arabes unis. De là, nous servons des marques de l'e-commerce, du retail, de l'immobilier, du juridique et du voyage à travers les Émirats et l'ensemble du Golfe, en anglais, en français et en arabe.",
      "Nos missions aux EAU comptent parmi nos résultats documentés les plus solides : trafic organique multiplié par 16 et retour sur dépenses publicitaires ×10 pour un parfumeur de Dubaï, top 3 en six mois sur des mots-clés parfum très concurrentiels, et des boutiques complètes pour des marques e-commerce du Golfe avec des moyens de paiement locaux comme Tabby et Tamara.",
    ],
    faqs: [
      {
        q: "Où se trouve le bureau de TDM à Dubaï ?",
        a: "Le siège de TDM est situé au 17 12 A Street, Al Qusais Industrial Area 1, Dubaï, Émirats arabes unis (P.O. Box 231578). Vous pouvez nous joindre au +971 58 909 4045 ou à info@thedigitalmarketing.services.",
      },
      {
        q: "TDM mène-t-elle des campagnes marketing en arabe ?",
        a: "Oui. TDM conçoit et exécute nativement du SEO en arabe, des campagnes publicitaires en arabe et du contenu social en arabe — avec notamment des projets SEO arabophones réussis pour des e-commerces des EAU — en plus de l'anglais et du français.",
      },
    ],
  },
  {
    slug: "pakistan",
    country: "Pakistan",
    city: "Lahore",
    address: "DHA Rahbar Phase 11, Sector 1, 67 CCA, 5th Floor, Lahore, Pakistan",
    role: "delivery-hub",
    roleLabel: "Hub de production mondial",
    metaTitle: "TDM Lahore — Hub de production et renfort d'équipes",
    metaDescription:
      "Le hub TDM de Lahore réunit 50+ spécialistes marketing et tech : SEO, développement, production média et renfort d'équipes dédiées pour le monde entier.",
    hero: {
      headline: "La salle des machines : TDM Lahore.",
      sub: "Notre hub de production au Pakistan, c'est là que plus de 50 spécialistes produisent le travail — et que nous recrutons, encadrons et faisons progresser des équipes dédiées pour nos clients à l'étranger.",
    },
    intro: [
      "Lahore est le cœur opérationnel de TDM. Notre hub de production à DHA Rahbar réunit les développeurs, designers, monteurs, spécialistes SEO et responsables de campagnes qui produisent le travail client pour tous les marchés de TDM dans le monde.",
      "C'est aussi le foyer de notre division de renfort d'équipes : des entreprises internationales y recrutent des professionnels dédiés qui travaillent exclusivement pour elles — recrutés, employés, encadrés et accompagnés par TDM dans notre bureau de Lahore, pour une fraction du coût d'une embauche locale équivalente.",
    ],
    faqs: [
      {
        q: "Que fait le bureau de TDM au Pakistan ?",
        a: "Lahore est le hub de production mondial de TDM : plus de 50 spécialistes du marketing et de la technologie y assurent SEO, développement, design, montage vidéo et gestion de campagnes pour les clients de TDM dans le monde entier, ainsi que des équipes dédiées en renfort pour des entreprises internationales.",
      },
      {
        q: "Puis-je recruter du personnel dédié via le bureau de TDM à Lahore ?",
        a: "Oui. TDM recrute, emploie et encadre des professionnels dédiés à temps plein — développeurs, designers, marketeurs et plus encore — qui travaillent exclusivement sur vos projets, alignés sur votre fuseau horaire et vos outils. Consultez notre service de renfort d'équipes pour en savoir plus.",
      },
    ],
  },
  {
    slug: "uk",
    country: "Royaume-Uni",
    city: "Bury",
    address: "Lowercroft Rd, Bury BL8 3PA, United Kingdom",
    role: "partner",
    roleLabel: "Bureau Royaume-Uni",
    metaTitle: "Agence digitale pour les entreprises britanniques | TDM",
    metaDescription:
      "SEO, publicité, développement web et équipes offshore dédiées pour les entreprises britanniques — depuis Bury, avec un interlocuteur local.",
    hero: {
      headline: "Une présence britannique, une puissance mondiale.",
      sub: "Depuis Bury, dans le Grand Manchester, TDM offre aux entreprises britanniques une gestion de compte locale, appuyée par un hub de production de plus de 50 spécialistes.",
    },
    intro: [
      "Le bureau britannique de TDM à Bury, dans le Grand Manchester, est le point de contact local de nos clients britanniques — des boutiques e-commerce aux applications de livraison de repas conçues pour des entreprises du Yorkshire.",
      "Les clients britanniques bénéficient d'une communication et d'une responsabilité locales, avec une production assurée par notre équipe mondiale — dont des résultats documentés comme +20% de trafic organique en deux mois pour un fabricant ciblant le Royaume-Uni, et des applications Android de livraison de repas développées de A à Z.",
    ],
    faqs: [
      {
        q: "TDM a-t-elle un bureau au Royaume-Uni ?",
        a: "Oui — le bureau britannique de TDM se trouve sur Lowercroft Rd, Bury BL8 3PA, dans le Grand Manchester. Les demandes britanniques peuvent aussi passer par le +44 7946 186955.",
      },
      {
        q: "Pourquoi des entreprises britanniques choisissent-elles TDM plutôt qu'une agence purement locale ?",
        a: "TDM combine un interlocuteur basé au Royaume-Uni et un hub de production de plus de 50 personnes : les entreprises britanniques obtiennent un SEO, des médias payants, du développement et du contenu de niveau agence à des tarifs nettement plus avantageux que des équipes exclusivement britanniques comparables — avec la même exigence de résultats.",
      },
    ],
  },
  {
    slug: "usa",
    country: "États-Unis",
    city: "Floride du Sud et Greenville",
    address: undefined,
    role: "partner",
    roleLabel: "Bureaux États-Unis",
    metaTitle: "Agence digitale pour les marques américaines | TDM",
    metaDescription:
      "TDM accompagne les entreprises américaines depuis la Floride du Sud et Greenville (SC) — marketing de performance, SEO, e-commerce et équipes dédiées.",
    hero: {
      headline: "Des marques américaines, une production 24h/24.",
      sub: "La présence américaine de TDM en Floride du Sud et à Greenville, en Caroline du Sud, apporte marketing à la performance, développement et renfort d'équipes aux entreprises américaines.",
    },
    intro: [
      "TDM sert ses clients américains via des partenaires en Floride du Sud et à Greenville, en Caroline du Sud. Les marques américaines disposent d'un interlocuteur aux États-Unis pendant que notre hub de production mondial exécute — souvent de nuit, pour que le travail soit prêt au début de votre journée.",
      "Notre portefeuille américain couvre des sites de gestion immobilière à Nashville, des plateformes e-commerce adossées à des centres logistiques, des marques de limousines et de transport, et des boutiques de cosmétiques à Los Angeles.",
    ],
    faqs: [
      {
        q: "TDM travaille-t-elle avec des entreprises basées aux États-Unis ?",
        a: "Oui. TDM est présente en Floride du Sud et à Greenville, en Caroline du Sud, et a livré sites web, SEO et marketing pour des clients américains dans la gestion immobilière, la logistique, le transport, les produits forestiers et l'e-commerce beauté.",
      },
      {
        q: "Quel avantage les entreprises américaines tirent-elles du renfort d'équipes de TDM ?",
        a: "Les entreprises américaines recrutent des développeurs, designers ou marketeurs dédiés, encadrés depuis le hub de TDM à Lahore, à des coûts généralement inférieurs de 50 à 70% aux salaires américains équivalents — des professionnels à temps plein alignés sur les horaires américains, TDM prenant en charge recrutement, RH et qualité.",
      },
    ],
  },
  {
    slug: "cameroon",
    country: "Cameroun",
    city: "Douala",
    address: "Akwa, Douala, Cameroon",
    role: "partner",
    roleLabel: "Bureau Afrique centrale",
    metaTitle: "Agence de marketing digital au Cameroun — Douala | TDM",
    metaDescription:
      "TDM accompagne les entreprises du Cameroun et d'Afrique centrale depuis Akwa, Douala — marketing bilingue français/anglais, développement web et e-commerce.",
    hero: {
      headline: "La croissance digitale pour l'Afrique centrale.",
      sub: "Depuis Akwa, à Douala, TDM apporte aux entreprises camerounaises un marketing bilingue français–anglais, du développement web et une expertise e-commerce.",
    },
    intro: [
      "Le bureau de TDM à Douala sert les entreprises du Cameroun et de l'Afrique centrale. Agence nativement bilingue, nous menons des campagnes et développons des plateformes en français comme en anglais — exactement le mélange qu'exige le marché camerounais.",
      "Les entreprises africaines travaillent avec un interlocuteur local à Akwa tout en bénéficiant de la même qualité de production, des mêmes outils et du même reporting que nos clients de Dubaï, Londres ou Miami.",
    ],
    faqs: [
      {
        q: "TDM a-t-elle un bureau au Cameroun ?",
        a: "Oui — TDM opère depuis Akwa, à Douala, et sert les entreprises du Cameroun et de l'Afrique centrale avec des services de marketing digital, de développement web et d'e-commerce en français et en anglais.",
      },
      {
        q: "TDM peut-elle mener des campagnes en français en Afrique ?",
        a: "Oui. Le français est l'une des trois langues de travail de TDM. Nous produisons nativement du contenu SEO en français, des campagnes publicitaires en français et des sites web en français, y compris pour les marchés francophones d'Europe et d'Afrique.",
      },
    ],
  },
  {
    slug: "japan",
    country: "Japon",
    city: "Gifu",
    address: "Gifu Prefecture, Japan",
    role: "partner",
    roleLabel: "Bureau Japon",
    metaTitle: "Partenaire marketing et développement au Japon | TDM",
    metaDescription:
      "Depuis la préfecture de Gifu, TDM relie les entreprises japonaises à un marketing digital, un développement e-commerce et des équipes offshore dédiées.",
    hero: {
      headline: "Des services digitaux mondiaux, une présence japonaise.",
      sub: "Le bureau de TDM à Gifu relie les entreprises japonaises à un marketing e-commerce, un développement et des équipes offshore dédiées de classe mondiale.",
    },
    intro: [
      "TDM maintient une présence dans la préfecture de Gifu, au Japon, au service des entreprises japonaises qui recherchent un marketing digital et un développement aux standards internationaux, avec un point de contact local.",
      "Les clients japonais tirent particulièrement parti de notre modèle de renfort d'équipes : des développeurs et marketeurs dédiés maîtrisant l'anglais, à des tarifs compétitifs à l'échelle mondiale, encadrés de bout en bout par TDM.",
    ],
    faqs: [
      {
        q: "TDM opère-t-elle au Japon ?",
        a: "Oui — TDM dispose d'un bureau partenaire dans la préfecture de Gifu, au Japon, proposant marketing digital, développement e-commerce et renfort d'équipes aux entreprises japonaises.",
      },
    ],
  },
  {
    slug: "france",
    country: "France",
    city: undefined,
    address: undefined, // TODO(user): France office address
    role: "partner",
    roleLabel: "Bureau France",
    metaTitle: "Agence Digitale pour Entreprises Françaises | TDM Services",
    metaDescription:
      "TDM accompagne les entreprises françaises : marketing, SEO et plateformes en français natif — dont une plateforme juridique de 2 400 articles à Paris.",
    hero: {
      headline: "Une production digitale en français natif.",
      sub: "TDM conçoit et fait croître des plateformes francophones — des cabinets d'avocats parisiens à l'e-commerce francophone.",
    },
    intro: [
      "La France est l'un des marchés les plus solides de TDM. Nous avons conçu, développé et fait croître une plateforme digitale complète pour un cabinet d'avocats d'affaires parisien — plus de 2 400 articles juridiques, une prestation bilingue EN/FR, des clients venus de plus de 20 pays — et nous exploitons des sites francophones dédiés à la création d'entreprise, au recouvrement de créances et à l'immobilier haut de gamme.",
      "Les entreprises françaises bénéficient de contenus, de campagnes et de plateformes en français natif, appuyés par notre hub de production mondial et nos partenaires commerciaux en France.",
    ],
    faqs: [
      {
        q: "TDM travaille-t-elle avec des entreprises françaises ?",
        a: "Oui. TDM dispose de partenaires commerciaux en France et d'une solide expérience du marché français : plateformes de services juridiques, portails de création d'entreprise, sites de recouvrement de créances et marques immobilières haut de gamme, le tout livré nativement en français.",
      },
    ],
  },
  {
    slug: "bulgaria",
    country: "Bulgarie",
    city: undefined,
    address: undefined, // TODO(user): Bulgaria office/partner details
    role: "partner",
    roleLabel: "Bureau Bulgarie",
    metaTitle: "Partenaire marketing et développement en Bulgarie | TDM",
    metaDescription:
      "TDM accompagne les entreprises bulgares et d'Europe du Sud-Est : marketing digital, développement e-commerce et équipes offshore dédiées.",
    hero: {
      headline: "Au service de la Bulgarie et de l'Europe du Sud-Est.",
      sub: "TDM apporte marketing à la performance, développement e-commerce et renfort d'équipes aux entreprises bulgares via nos partenaires locaux.",
    },
    intro: [
      "TDM travaille avec les entreprises de Bulgarie et d'Europe du Sud-Est via des partenaires commerciaux locaux, en livrant les mêmes services que nos clients reçoivent partout dans le monde : marketing à la performance, SEO, e-commerce et développement sur mesure, production média et renfort d'équipes.",
    ],
    faqs: [
      {
        q: "TDM opère-t-elle en Bulgarie ?",
        a: "Oui — TDM sert les entreprises bulgares via des partenaires commerciaux locaux, avec une production assurée par notre hub mondial. Écrivez à info@thedigitalmarketing.services pour être mis en relation avec notre équipe Bulgarie.",
      },
    ],
  },
];

export const frPages: PagesCopy = {
  home: {
    metaTitle: "TDM — The Digital Marketing Services | Agence intégrée",
    metaDescription:
      "TDM, agence digitale : production média, marketing de performance, SEO, développement web & mobile, CRM/ERP et renfort d'équipes — 8 pays, 3 langues.",
    heroKicker: "Votre équipe croissance intégrée",
    heroHeadline: "Des campagnes, du contenu et du code qui transforment vos budgets en revenus.",
    heroSub:
      "Une seule équipe pilote vos campagnes, votre création et votre boutique — plus de 50 spécialistes dans 8 pays, en anglais, français et arabe. Aucun transfert entre agences. Aucun forfait qui s'essouffle.",
    statLabels: {
      satisfaction: "de taux de satisfaction client",
      clients: "clients servis dans le monde",
      specialists: "spécialistes marketing & tech",
      roas: "meilleur ROAS livré à ce jour",
      countries: "pays où TDM est présente",
    },
    sectorsKicker: "Ce que nous faisons",
    sectorsTitle: "Un seul partenaire, toute la chaîne de croissance.",
    sectorsSub: "Des solutions de bout en bout pour développer votre marque, bâtir votre boutique et conquérir chaque marché.",
    caseKicker: "Études de cas",
    caseTitle: "Nous avons repris des marques qui avaient renoncé aux agences.",
    caseSub: "Et nous leur avons prouvé qu'une agence peut performer. Des résultats documentés, pas des promesses.",
    whyKicker: "Pourquoi les marques restent chez TDM",
    whyTitle: "Mêmes objectifs. Mêmes chiffres. Même urgence.",
    whyItems: [
      ["L'e-commerce d'abord", "Le commerce en ligne est notre quotidien — ses indicateurs, ses marges, sa saisonnalité."],
      ["Le modèle « équipe interne »", "Une équipe dédiée qui se comporte comme votre propre service, pas comme un prestataire."],
      ["Des décisions fondées sur la donnée", "Chaque stratégie s'appuie sur l'analytics et les indicateurs de performance."],
      ["Un reporting transparent", "Des rapports clairs et actionnables qui montrent exactement ce qu'a produit votre budget."],
      ["Une portée multilingue", "Des campagnes en anglais, en français et en arabe pour des marchés réellement mondiaux."],
      ["Un accompagnement à chaque étape", "De la stratégie à l'exécution et à l'optimisation — une seule équipe, de bout en bout."],
    ],
    logosTitle: "Plus de 150 marques, et ce n'est pas fini",
    faqs: [
      {
        q: "Quels services propose TDM ?",
        a: "TDM opère quatre divisions : Média (tournages vidéo, montage, publicités UGC, shootings produits, créations publicitaires), Marketing (marketing à la performance, SEO, gestion des réseaux sociaux), Développement (Shopify, WordPress, Magento, plateformes sur mesure, systèmes CRM/ERP, applications mobiles) et Renfort d'équipes (professionnels dédiés à distance, encadrés depuis notre hub de Lahore).",
      },
      {
        q: "Où TDM opère-t-elle ?",
        a: "TDM a son siège à Dubaï, son hub de production à Lahore, au Pakistan, et une présence au Royaume-Uni, aux États-Unis, au Cameroun, au Japon, en France et en Bulgarie. Nous livrons campagnes et plateformes en anglais, en français et en arabe.",
      },
      {
        q: "Qu'est-ce qui distingue TDM des autres agences ?",
        a: "TDM travaille comme votre équipe interne, pas comme un prestataire : une seule équipe dédiée couvrant marketing, création et ingénierie, des décisions fondées sur la donnée, et des rapports transparents qui montrent exactement ce qu'a produit votre budget. Ce modèle maintient notre taux de satisfaction client à 100%.",
      },
      {
        q: "Comment démarrer avec TDM ?",
        a: "Réservez une consultation gratuite via la page contact, écrivez à info@thedigitalmarketing.services ou appelez le +971 58 909 4045. Nous auditerons votre dispositif actuel et vous proposerons un plan concret avec des objectifs mesurables, avant tout engagement.",
      },
    ],
  },
  about: {
    metaTitle: "À propos de TDM — L'agence des marques lassées des agences",
    metaDescription:
      "TDM, agence digitale basée à Dubaï : hub de production de 50+ spécialistes à Lahore, présence dans 8 pays et 100% de satisfaction client, en EN, FR et AR.",
    hero: {
      kicker: "Qui nous sommes",
      headline: "Une agence pensée pour les marques lassées des agences.",
      sub: "TDM travaille comme une extension de votre propre équipe — mêmes objectifs, mêmes chiffres, même urgence. Pas d'abonnements qui s'enlisent, pas de rapports qui maquillent la réalité.",
    },
    intro: [
      "De la stratégie à la boutique en ligne, nos spécialistes maîtrisent toute la chaîne de croissance : marketing, création, ingénierie et opérations marketplace. Ce qui a commencé comme une équipe de marketing e-commerce compte aujourd'hui quatre divisions — Média, Marketing, Développement et Renfort d'équipes — au service de marques sur quatre continents.",
      "La promesse TDM : nous avons repris des marques qui avaient renoncé aux agences — et nous leur avons prouvé qu'une agence peut performer.",
    ],
    missionLabel: "Notre mission",
    mission: "Mener le marketing e-commerce mondial et donner aux marques les moyens de croître et de créer du lien avec leurs clients.",
    visionLabel: "Notre vision",
    vision: "Transformer l'e-commerce grâce à des stratégies innovantes et pilotées par la donnée, au service de la croissance et de la fidélité.",
    leadershipKicker: "Direction",
    leadershipTitle: "Les personnes qui vous rendent des comptes",
    presenceKicker: "Présence mondiale",
    presenceTitle: "8 pays · 4 continents · 3 langues",
    partnersNote: "Partenaires certifiés :",
    faqs: [
      {
        q: "Qui est TDM — The Digital Marketing Services ?",
        a: "TDM est une agence digitale full-service dont le siège est à Dubaï, avec un hub de production à Lahore, au Pakistan, et une présence au Royaume-Uni, aux États-Unis, au Cameroun, au Japon, en France et en Bulgarie. Nous livrons production média, marketing, développement logiciel et renfort d'équipes comme une seule équipe intégrée.",
      },
      {
        q: "Quelle est la taille de TDM ?",
        a: "TDM s'appuie sur plus de 50 spécialistes du marketing et de la technologie, a servi plus de 150 clients dans le monde et maintient un taux de satisfaction client de 100%. Nous sommes partenaires Meta Business, Shopify et Google.",
      },
      {
        q: "Dans quelles langues TDM travaille-t-elle ?",
        a: "TDM livre nativement campagnes, contenus et plateformes en anglais, en français et en arabe — avec des compétences internes supplémentaires en ourdou et en hindi.",
      },
    ],
  },
  contact: {
    metaTitle: "Contacter TDM — Consultation gratuite | TDM",
    metaDescription:
      "Parlez à TDM de marketing, de média, de développement ou de renfort d'équipes. Bureaux à Dubaï, Lahore et dans 6 autres pays.",
    hero: {
      kicker: "Parlons-en",
      headline: "Réservez une consultation gratuite.",
      sub: "Dites-nous où vous voulez croître — nous revenons vers vous sous un jour ouvré avec une évaluation honnête et un plan concret.",
    },
    directLabel: "Contact direct",
    officesLabel: "Bureaux",
    faqs: [
      {
        q: "Sous quel délai TDM répond-elle aux demandes ?",
        a: "Nous répondons à chaque demande sous un jour ouvré. Pour les projets urgents, appelez directement le +971 58 909 4045.",
      },
      {
        q: "La consultation est-elle vraiment gratuite ?",
        a: "Oui. Nous auditons votre dispositif actuel, identifions les plus grandes opportunités et vous proposons un plan concret avec des objectifs mesurables — avant tout engagement de votre part.",
      },
    ],
  },
  clientsPage: {
    metaTitle: "Nos clients — 150+ marques dans le monde | TDM",
    metaDescription:
      "Plus de 150 marques de l'e-commerce, de l'immobilier, du juridique, du voyage et de la tech confient leur croissance à TDM — avec 100% de satisfaction client.",
    hero: {
      kicker: "Nos clients",
      headline: "Plus de 150 marques, et ce n'est pas fini.",
      sub: "Des boutiques e-commerce régionales aux organisations internationales — avec un taux de satisfaction client de 100%.",
    },
    inTheirWords: "Ils en parlent mieux que nous",
  },
  portfolioPage: {
    metaTitle: "Portfolio — Média, marketing et développement | TDM",
    metaDescription:
      "Le portfolio de TDM : boutiques, plateformes et applis développées, campagnes SEO et publicitaires pilotées, créations produites — résultats documentés.",
    hero: {
      kicker: "Portfolio",
      headline: "Le travail parle. Les chiffres témoignent.",
      sub: "Plutôt qu'un PDF, voici le portfolio vivant : ce que nous avons construit, ce que nous avons piloté et ce que cela a produit — organisé par division.",
    },
    ctaHeadline: "Envie de voir des projets dans votre secteur ?",
    ctaSub: "Demandez-nous — nous vous présenterons des projets pertinents et, quand c'est possible, des clients de référence.",
  },
  caseStudiesPage: {
    metaTitle: "Études de cas — Résultats clients documentés | TDM",
    metaDescription:
      "Des résultats réels et documentés issus des missions TDM : trafic organique ×16, ROAS ×10, top 3, plateformes et applications natives. Découvrez notre méthode.",
    hero: {
      kicker: "Études de cas",
      headline: "Des résultats documentés, pas des promesses.",
      sub: "Chaque chiffre ci-dessous provient d'une mission réelle. Les noms des clients sont communiqués sur demande lorsque la confidentialité s'applique.",
    },
    ctaHeadline: "Vous voulez des résultats comme ceux-ci ?",
  },
  locationsPage: {
    metaTitle: "Présence mondiale — TDM dans 8 pays | TDM",
    metaDescription:
      "TDM opère depuis Dubaï (siège), Lahore (hub de production) et 6 autres pays — une seule agence, en anglais, français et arabe.",
    hero: {
      kicker: "Présence mondiale",
      headline: "8 pays. 4 continents. Une seule équipe.",
      sub: "Un siège à Dubaï, un hub de production à Lahore — et une présence locale partout où se trouvent nos clients.",
    },
  },
  sectorExtras: {
    servicesKicker: "Services",
    servicesTitle: (sectorName: string) => `Ce que couvre ${sectorName}`,
    resultsTitle: "Les résultats de cette division",
    staffAug: {
      kicker: "Comment ça marche",
      title: "Des équipes futées. Des coûts réduits. De meilleurs résultats.",
      pillars: [
        {
          title: "Des recrues dédiées, pas des freelances",
          desc: "Développeurs, designers, marketeurs et plus encore — à temps plein, sur vos projets uniquement.",
        },
        {
          title: "Votre fuseau horaire, vos outils",
          desc: "Les équipes s'alignent sur vos horaires de travail et s'intègrent directement à votre organisation.",
        },
        {
          title: "Encadrés et fidélisés par TDM",
          desc: "Recrutement, RH et gestion de la performance restent à notre charge, pas à la vôtre.",
        },
      ],
      paragraphs: [
        "Vous choisissez les postes. Nous gérons le sourcing, la paie, la fidélisation et la qualité — et l'équipe travaille à vos horaires, sur vos outils. Nos clients économisent généralement 50 à 70% par rapport à une embauche locale équivalente, sans frais de recrutement ni charges de bureau.",
        "Chaque professionnel travaille depuis notre hub de production encadré de Lahore, accompagné par les seniors de TDM — pas seul dans une chambre d'amis. Si quelqu'un ne convient pas, nous le remplaçons sans coût supplémentaire.",
      ],
    },
  },
  caseStudyPage: {
    kickerPrefix: "Étude de cas",
    challengeLabel: "Le défi",
    approachLabel: "Ce que nous avons fait",
    ctaHeadline: "Votre marque pourrait être la prochaine étude de cas.",
  },
  servicePage: {
    ctaHeadline: (serviceName: string) => `Prêt à parler ${serviceName.toLowerCase()} ?`,
    ctaSub: "Réservez une consultation gratuite — nous auditerons votre dispositif actuel et vous proposerons un plan concret.",
    showreelKicker: "Showreel",
    showreelTitle: "Découvrez notre travail en vidéo",
  },
};

export const frTestimonials: Testimonial[] = [
  {
    quote:
      "Nous n'aurions pas pu rêver d'un meilleur partenaire que TDM. Leurs stratégies pointues et leurs efforts constants nous ont permis de dominer notre niche. Nos positions et nos ventes se sont améliorées de façon spectaculaire.",
    author: "Client e-commerce parfumerie",
    source: "EAU",
  },
  {
    quote:
      "Notre activité a enregistré 70% de croissance des ventes en ligne après la mise en ligne du site développé par TDM. Leur accompagnement a été remarquable.",
    author: "Client détaillant de parfums",
    source: "EAU",
  },
  {
    quote:
      "TDM a joué un rôle décisif dans la mise en place de notre présence en ligne. De la conception de notre site à son optimisation pour les moteurs de recherche, ils ont tout pris en charge. Leur approche proactive et leurs points réguliers ont rendu le processus fluide.",
    author: "Client secteur services",
  },
  {
    quote:
      "Travailler avec TDM a été une expérience exceptionnelle. Leur équipe a non seulement optimisé notre site, mais aussi amélioré sa vitesse, ce qui a bonifié l'expérience utilisateur. Nous avons constaté des résultats tangibles en matière de trafic et de génération de leads.",
    author: "Client industriel",
    source: "Marché britannique",
  },
  {
    quote:
      "Le site sur mesure qu'ils ont développé pour nous a tout changé. L'expérience utilisateur fluide et les fonctionnalités ont dépassé nos attentes.",
    author: "Client secteur technologie",
  },
  {
    quote:
      "Notre projet était complexe, mais le processus structuré et l'expertise technique de TDM ont livré exactement ce que nous avions imaginé.",
    author: "Client produits forestiers",
    source: "États-Unis",
  },
  {
    quote:
      "L'équipe de TDM a créé une plateforme e-commerce superbe et fonctionnelle, parfaitement alignée avec notre marque. Les résultats ont été phénoménaux.",
    author: "Client design et fabrication",
    source: "Dubaï",
  },
];

/** Titres selon le profil d'entreprise 2026. Photos en attente. */
export const frLeadership: TeamMember[] = [
  { name: "Abdul Rehman", title: "Directeur général" },
  { name: "Muhammad Adnan", title: "Directeur des revenus" },
  { name: "Ernest Ekwoge", title: "Directeur marketing" },
];

export const frTeamIntro =
  "Rencontrez les experts derrière chaque stratégie et chaque réussite. Épaulé par plus de 50 spécialistes du marketing et de la technologie dans le monde, chaque membre apporte un regard unique sur votre croissance.";
