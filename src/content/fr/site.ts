import { asset } from "@/lib/asset-manifest";
import type { Office, TeamMember, Testimonial } from "@/lib/types";
import type { PagesCopy } from "@/content/en/pages";

/**
 * French (fr) site content — translated from src/content/en/*.
 * Slugs, client names, anonymous flags, emails, phone numbers and
 * street addresses are kept identical to the English source.
 */


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
      "TDM: The Digital Marketing Services a son siège à Dubaï, aux Émirats arabes unis. De là, nous servons des marques de l'e-commerce, du retail, de l'immobilier, du juridique et du voyage à travers les Émirats et l'ensemble du Golfe, en anglais, en français et en arabe.",
      "Nos missions aux EAU comptent parmi nos résultats documentés les plus solides : trafic organique multiplié par 16 et retour sur dépenses publicitaires ×10 pour un parfumeur de Dubaï, top 3 en six mois sur des mots-clés parfum très concurrentiels, et des boutiques complètes pour des marques e-commerce du Golfe avec des moyens de paiement locaux comme Tabby et Tamara.",
    ],
    faqs: [
      {
        q: "Où se trouve le bureau de TDM à Dubaï ?",
        a: "Le siège de TDM est situé au 17 12 A Street, Al Qusais Industrial Area 1, Dubaï, Émirats arabes unis (P.O. Box 231578). Vous pouvez nous joindre au +971 58 909 4045 ou à info@thedigitalmarketing.services.",
      },
      {
        q: "TDM mène-t-elle des campagnes marketing en arabe ?",
        a: "Oui. TDM conçoit et exécute nativement du SEO en arabe, des campagnes publicitaires en arabe et du contenu social en arabe (avec notamment des projets SEO arabophones réussis pour des e-commerces des EAU) en plus de l'anglais et du français.",
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
    metaTitle: "TDM Lahore: Hub de production et renfort d'équipes",
    metaDescription:
      "Le hub TDM de Lahore réunit 50+ spécialistes marketing et tech : SEO, développement, production média et renfort d'équipes dédiées pour le monde entier.",
    hero: {
      headline: "La salle des machines : TDM Lahore.",
      sub: "Notre hub de production au Pakistan, c'est là que plus de 50 spécialistes produisent le travail, et que nous recrutons, encadrons et faisons progresser des équipes dédiées pour nos clients à l'étranger.",
    },
    intro: [
      "Lahore est le cœur opérationnel de TDM. Notre hub de production à DHA Rahbar réunit les développeurs, designers, monteurs, spécialistes SEO et responsables de campagnes qui produisent le travail client pour tous les marchés de TDM dans le monde.",
      "C'est aussi le foyer de notre division de renfort d'équipes : des entreprises internationales y recrutent des professionnels dédiés qui travaillent exclusivement pour elles, recrutés, employés, encadrés et accompagnés par TDM dans notre bureau de Lahore, pour une fraction du coût d'une embauche locale équivalente.",
    ],
    faqs: [
      {
        q: "Que fait le bureau de TDM au Pakistan ?",
        a: "Lahore est le hub de production mondial de TDM : plus de 50 spécialistes du marketing et de la technologie y assurent SEO, développement, design, montage vidéo et gestion de campagnes pour les clients de TDM dans le monde entier, ainsi que des équipes dédiées en renfort pour des entreprises internationales.",
      },
      {
        q: "Puis-je recruter du personnel dédié via le bureau de TDM à Lahore ?",
        a: "Oui. TDM recrute, emploie et encadre des professionnels dédiés à temps plein (développeurs, designers, marketeurs et plus encore) qui travaillent exclusivement sur vos projets, alignés sur votre fuseau horaire et vos outils. Consultez notre service de renfort d'équipes pour en savoir plus.",
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
      "SEO, publicité, développement web et équipes offshore dédiées pour les entreprises britanniques: depuis Bury, avec un interlocuteur local.",
    hero: {
      headline: "Une présence britannique, une puissance mondiale.",
      sub: "Depuis Bury, dans le Grand Manchester, TDM offre aux entreprises britanniques une gestion de compte locale, appuyée par un hub de production de plus de 50 spécialistes.",
    },
    intro: [
      "Le bureau britannique de TDM à Bury, dans le Grand Manchester, est le point de contact local de nos clients britanniques: des boutiques e-commerce aux applications de livraison de repas conçues pour des entreprises du Yorkshire.",
      "Les clients britanniques bénéficient d'une communication et d'une responsabilité locales, avec une production assurée par notre équipe mondiale: dont des résultats documentés comme +20% de trafic organique en deux mois pour un fabricant ciblant le Royaume-Uni, et des applications Android de livraison de repas développées de A à Z.",
    ],
    faqs: [
      {
        q: "TDM a-t-elle un bureau au Royaume-Uni ?",
        a: "Oui: le bureau britannique de TDM se trouve sur Lowercroft Rd, Bury BL8 3PA, dans le Grand Manchester. Les demandes britanniques peuvent aussi passer par le +44 7946 186955.",
      },
      {
        q: "Pourquoi des entreprises britanniques choisissent-elles TDM plutôt qu'une agence purement locale ?",
        a: "TDM combine un interlocuteur basé au Royaume-Uni et un hub de production de plus de 50 personnes : les entreprises britanniques obtiennent un SEO, des médias payants, du développement et du contenu de niveau agence à des tarifs nettement plus avantageux que des équipes exclusivement britanniques comparables, avec la même exigence de résultats.",
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
      "TDM accompagne les entreprises américaines depuis la Floride du Sud et Greenville (SC): marketing de performance, SEO, e-commerce et équipes dédiées.",
    hero: {
      headline: "Des marques américaines, une production 24h/24.",
      sub: "La présence américaine de TDM en Floride du Sud et à Greenville, en Caroline du Sud, apporte marketing à la performance, développement et renfort d'équipes aux entreprises américaines.",
    },
    intro: [
      "TDM sert ses clients américains via des partenaires en Floride du Sud et à Greenville, en Caroline du Sud. Les marques américaines disposent d'un interlocuteur aux États-Unis pendant que notre hub de production mondial exécute: souvent de nuit, pour que le travail soit prêt au début de votre journée.",
      "Notre portefeuille américain couvre des sites de gestion immobilière à Nashville, des plateformes e-commerce adossées à des centres logistiques, des marques de limousines et de transport, et des boutiques de cosmétiques à Los Angeles.",
    ],
    faqs: [
      {
        q: "TDM travaille-t-elle avec des entreprises basées aux États-Unis ?",
        a: "Oui. TDM est présente en Floride du Sud et à Greenville, en Caroline du Sud, et a livré sites web, SEO et marketing pour des clients américains dans la gestion immobilière, la logistique, le transport, les produits forestiers et l'e-commerce beauté.",
      },
      {
        q: "Quel avantage les entreprises américaines tirent-elles du renfort d'équipes de TDM ?",
        a: "Les entreprises américaines recrutent des développeurs, designers ou marketeurs dédiés, encadrés depuis le hub de TDM à Lahore, à des coûts généralement inférieurs de 50 à 70% aux salaires américains équivalents: des professionnels à temps plein alignés sur les horaires américains, TDM prenant en charge recrutement, RH et qualité.",
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
    metaTitle: "Agence de marketing digital au Cameroun: Douala | TDM",
    metaDescription:
      "TDM accompagne les entreprises du Cameroun et d'Afrique centrale depuis Akwa, Douala: marketing bilingue français/anglais, développement web et e-commerce.",
    hero: {
      headline: "La croissance digitale pour l'Afrique centrale.",
      sub: "Depuis Akwa, à Douala, TDM apporte aux entreprises camerounaises un marketing bilingue français–anglais, du développement web et une expertise e-commerce.",
    },
    intro: [
      "Le bureau de TDM à Douala sert les entreprises du Cameroun et de l'Afrique centrale. Agence nativement bilingue, nous menons des campagnes et développons des plateformes en français comme en anglais: exactement le mélange qu'exige le marché camerounais.",
      "Les entreprises africaines travaillent avec un interlocuteur local à Akwa tout en bénéficiant de la même qualité de production, des mêmes outils et du même reporting que nos clients de Dubaï, Londres ou Miami.",
    ],
    faqs: [
      {
        q: "TDM a-t-elle un bureau au Cameroun ?",
        a: "Oui: TDM opère depuis Akwa, à Douala, et sert les entreprises du Cameroun et de l'Afrique centrale avec des services de marketing digital, de développement web et d'e-commerce en français et en anglais.",
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
        a: "Oui: TDM dispose d'un bureau partenaire dans la préfecture de Gifu, au Japon, proposant marketing digital, développement e-commerce et renfort d'équipes aux entreprises japonaises.",
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
      "TDM accompagne les entreprises françaises : marketing, SEO et plateformes en français natif, dont une plateforme juridique de 2 400 articles à Paris.",
    hero: {
      headline: "Une production digitale en français natif.",
      sub: "TDM conçoit et fait croître des plateformes francophones: des cabinets d'avocats parisiens à l'e-commerce francophone.",
    },
    intro: [
      "La France est l'un des marchés les plus solides de TDM. Nous avons conçu, développé et fait croître une plateforme digitale complète pour un cabinet d'avocats d'affaires parisien (plus de 2 400 articles juridiques, une prestation bilingue EN/FR, des clients venus de plus de 20 pays) et nous exploitons des sites francophones dédiés à la création d'entreprise, au recouvrement de créances et à l'immobilier haut de gamme.",
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
        a: "Oui: TDM sert les entreprises bulgares via des partenaires commerciaux locaux, avec une production assurée par notre hub mondial. Écrivez à info@thedigitalmarketing.services pour être mis en relation avec notre équipe Bulgarie.",
      },
    ],
  },
];

export const frPages: PagesCopy = {
  home: {
    metaTitle: "TDM: The Digital Marketing Services | Agence intégrée",
    metaDescription:
      "TDM, agence digitale : production média, marketing de performance, SEO, développement web & mobile, CRM/ERP et renfort d'équipes, 8 pays, 3 langues.",
    heroKicker: "Votre équipe croissance intégrée",
    heroHeadline: "Des campagnes, du contenu et du code qui transforment vos budgets en revenus.",
    heroSub:
      "Une seule équipe pilote vos campagnes, votre création et votre boutique, plus de 50 spécialistes dans 8 pays, en anglais, français et arabe. Aucun transfert entre agences. Aucun forfait qui s'essouffle.",
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
      ["L'e-commerce d'abord", "Le commerce en ligne est notre quotidien: ses indicateurs, ses marges, sa saisonnalité."],
      ["Le modèle « équipe interne »", "Une équipe dédiée qui se comporte comme votre propre service, pas comme un prestataire."],
      ["Des décisions fondées sur la donnée", "Chaque stratégie s'appuie sur l'analytics et les indicateurs de performance."],
      ["Un reporting transparent", "Des rapports clairs et actionnables qui montrent exactement ce qu'a produit votre budget."],
      ["Une portée multilingue", "Des campagnes en anglais, en français et en arabe pour des marchés réellement mondiaux."],
      ["Un accompagnement à chaque étape", "De la stratégie à l'exécution et à l'optimisation: une seule équipe, de bout en bout."],
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
    metaTitle: "À propos de TDM: L'agence des marques lassées des agences",
    metaDescription:
      "TDM, agence digitale basée à Dubaï : hub de production de 50+ spécialistes à Lahore, présence dans 8 pays et 100% de satisfaction client, en EN, FR et AR.",
    hero: {
      kicker: "Qui nous sommes",
      headline: "Une agence pensée pour les marques lassées des agences.",
      sub: "TDM travaille comme une extension de votre propre équipe: mêmes objectifs, mêmes chiffres, même urgence. Pas d'abonnements qui s'enlisent, pas de rapports qui maquillent la réalité.",
    },
    intro: [
      "De la stratégie à la boutique en ligne, nos spécialistes maîtrisent toute la chaîne de croissance : marketing, création, ingénierie et opérations marketplace. Ce qui a commencé comme une équipe de marketing e-commerce compte aujourd'hui quatre divisions (Média, Marketing, Développement et Renfort d'équipes) au service de marques sur quatre continents.",
      "La promesse TDM : nous avons repris des marques qui avaient renoncé aux agences, et nous leur avons prouvé qu'une agence peut performer.",
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
        q: "Qui est TDM: The Digital Marketing Services ?",
        a: "TDM est une agence digitale full-service dont le siège est à Dubaï, avec un hub de production à Lahore, au Pakistan, et une présence au Royaume-Uni, aux États-Unis, au Cameroun, au Japon, en France et en Bulgarie. Nous livrons production média, marketing, développement logiciel et renfort d'équipes comme une seule équipe intégrée.",
      },
      {
        q: "Quelle est la taille de TDM ?",
        a: "TDM s'appuie sur plus de 50 spécialistes du marketing et de la technologie, a servi plus de 150 clients dans le monde et maintient un taux de satisfaction client de 100%. Nous sommes partenaires Meta Business, Shopify et Google.",
      },
      {
        q: "Dans quelles langues TDM travaille-t-elle ?",
        a: "TDM livre nativement campagnes, contenus et plateformes en anglais, en français et en arabe: avec des compétences internes supplémentaires en ourdou et en hindi.",
      },
    ],
  },
  contact: {
    metaTitle: "Contacter TDM: Consultation gratuite | TDM",
    metaDescription:
      "Parlez à TDM de marketing, de média, de développement ou de renfort d'équipes. Bureaux à Dubaï, Lahore et dans 6 autres pays.",
    hero: {
      kicker: "Parlons-en",
      headline: "Réservez une consultation gratuite.",
      sub: "Dites-nous où vous voulez croître: nous revenons vers vous sous un jour ouvré avec une évaluation honnête et un plan concret.",
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
        a: "Oui. Nous auditons votre dispositif actuel, identifions les plus grandes opportunités et vous proposons un plan concret avec des objectifs mesurables: avant tout engagement de votre part.",
      },
    ],
  },
  clientsPage: {
    metaTitle: "Nos clients: 150+ marques dans le monde | TDM",
    metaDescription:
      "Plus de 150 marques de l'e-commerce, de l'immobilier, du juridique, du voyage et de la tech confient leur croissance à TDM: avec 100% de satisfaction client.",
    hero: {
      kicker: "Nos clients",
      headline: "Plus de 150 marques, et ce n'est pas fini.",
      sub: "Des boutiques e-commerce régionales aux organisations internationales: avec un taux de satisfaction client de 100%.",
    },
    inTheirWords: "Ils en parlent mieux que nous",
  },
  portfolioPage: {
    metaTitle: "Portfolio: Média, marketing et développement | TDM",
    metaDescription:
      "Le portfolio de TDM : boutiques, plateformes et applis développées, campagnes SEO et publicitaires pilotées, créations produites, résultats documentés.",
    hero: {
      kicker: "Portfolio",
      headline: "Le travail parle. Les chiffres témoignent.",
      sub: "Plutôt qu'un PDF, voici le portfolio vivant : ce que nous avons construit, ce que nous avons piloté et ce que cela a produit, organisé par division.",
    },
    ctaHeadline: "Envie de voir des projets dans votre secteur ?",
    ctaSub: "Demandez-nous: nous vous présenterons des projets pertinents et, quand c'est possible, des clients de référence.",
  },
  caseStudiesPage: {
    metaTitle: "Études de cas: Résultats clients documentés | TDM",
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
    metaTitle: "Présence mondiale: TDM dans 8 pays | TDM",
    metaDescription:
      "TDM opère depuis Dubaï (siège), Lahore (hub de production) et 6 autres pays: une seule agence, en anglais, français et arabe.",
    hero: {
      kicker: "Présence mondiale",
      headline: "8 pays. 4 continents. Une seule équipe.",
      sub: "Un siège à Dubaï, un hub de production à Lahore, et une présence locale partout où se trouvent nos clients.",
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
          desc: "Développeurs, designers, marketeurs et plus encore: à temps plein, sur vos projets uniquement.",
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
      roles: {
        kicker: "Les profils que nous plaçons",
        title: "Les personnes que vous pouvez recruter chez nous.",
        sub: "Des spécialistes en développement et en marketing, salariés de TDM et affectés uniquement à vos projets.",
        groups: [
          {
            name: "Technologie",
            items: [
              "Front-end: React, Next.js, Vue",
              "Back-end: Node, Django, Laravel",
              "Full-stack: développement de bout en bout",
              "CMS & e-commerce: WordPress, Shopify",
              "Mobile: React Native, Flutter",
              "QA & tests: manuels et automatisés",
            ],
          },
          {
            name: "Marketing",
            items: [
              "SEO: technique, on-page et contenu",
              "PPC & médias payants: Google, Meta, TikTok",
              "Réseaux sociaux: stratégie et gestion quotidienne",
              "Contenu & rédaction",
              "Email & marketing automation",
              "Design graphique",
            ],
          },
        ],
      },
      process: {
        kicker: "Comment ça marche",
        title: "Quatre étapes avant la prise de poste.",
        steps: [
          { title: "Décrivez le poste", desc: "Les compétences, le niveau d'expérience et les horaires à couvrir." },
          {
            title: "Nous sélectionnons et évaluons",
            desc: "Nous puisons parmi les spécialistes déjà salariés chez nous, ou recrutons pour le poste, puis évaluons l'adéquation.",
          },
          { title: "Vous validez", desc: "Vous rencontrez le candidat et décidez. Aucun engagement si ce n'est pas la bonne personne." },
          {
            title: "Il commence: nous gérons",
            desc: "Il rejoint vos processus, pendant que TDM assure l'encadrement quotidien, les RH et la performance.",
          },
        ],
      },
      paragraphs: [
        "Vous choisissez les postes. Nous gérons le sourcing, la paie, la fidélisation et la qualité, et l'équipe travaille à vos horaires, sur vos outils. Nos clients économisent généralement 50 à 70% par rapport à une embauche locale équivalente, sans frais de recrutement ni charges de bureau.",
        "Chaque professionnel travaille depuis notre hub de production encadré de Lahore, accompagné par les seniors de TDM: pas seul dans une chambre d'amis. Si quelqu'un ne convient pas, nous le remplaçons sans coût supplémentaire.",
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
    ctaSub: "Réservez une consultation gratuite: nous auditerons votre dispositif actuel et vous proposerons un plan concret.",
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
  { name: "Abdul Rehman", title: "Directeur général", photo: asset("team/abdul-rehman.webp") },
  { name: "Muhammad Adnan", title: "Directeur des revenus", photo: asset("team/muhammad-adnan.webp") },
  { name: "Ernest Ekwoge", title: "Directeur marketing", photo: asset("team/ernest-ekwoge.webp") },
];

export const frTeamIntro =
  "Rencontrez les experts derrière chaque stratégie et chaque réussite. Épaulé par plus de 50 spécialistes du marketing et de la technologie dans le monde, chaque membre apporte un regard unique sur votre croissance.";
