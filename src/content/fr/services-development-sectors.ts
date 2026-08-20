import type { Sector, Service } from "@/lib/types";

export const frDevelopmentServices: Service[] = [
  {
    slug: "wordpress",
    sector: "development",
    name: "Développement WordPress",
    navLabel: "WordPress",
    shortDesc:
      "Sites WordPress et WooCommerce sur mesure, pensés pour la vitesse, le SEO et une gestion de contenu simple — du site corporate aux plateformes de contenu de plusieurs milliers de pages.",
    metaTitle: "Développement WordPress | TDM",
    metaDescription:
      "TDM crée des sites WordPress et WooCommerce sur mesure — rapides, sécurisés, optimisés SEO et faciles à gérer. Sites corporate, contenus et boutiques en ligne.",
    hero: {
      headline: "Des sites WordPress conçus pour se positionner, charger vite et grandir.",
      sub: "Thèmes sur mesure, boutiques WooCommerce et plateformes de contenu — développés par TDM avec un code propre, une sécurité renforcée et le SEO intégré dès le premier commit.",
    },
    intro: [
      "Le service de développement WordPress de TDM conçoit et réalise des sites WordPress sur mesure pour les entreprises qui ont besoin d'un site rapide, sécurisé et facile à administrer — sites corporate, entreprises de services, éditeurs de contenu et boutiques WooCommerce. Chaque site que nous livrons est optimisé pour le SEO, sécurisé et évolutif, construit sur un thème sur mesure plutôt que sur un template surchargé.",
      "Si WordPress propulse une part considérable du web, c'est précisément parce qu'il peut presque tout faire — et c'est aussi pourquoi tant de sites WordPress finissent lents, piratés ou impossibles à modifier. Nous construisons l'inverse : des thèmes sur mesure allégés, uniquement les extensions dont le site a réellement besoin, une sécurité durcie et une interface d'administration que votre équipe peut utiliser sans appeler un développeur.",
      "Nous avons utilisé WordPress pour livrer aussi bien des sites vitrines pour des sociétés de services de Dubaï qu'une plateforme de contenu juridique bilingue de plus de 2 400 articles au service de clients dans plus de 20 pays. Et parce que TDM pilote aussi le SEO et les campagnes payantes, nos sites sont structurés pour le marketing dès le premier jour — URL propres, Core Web Vitals rapides, balisage schema et analytics configurés avant le lancement.",
    ],
    features: [
      {
        title: "Développement de thèmes sur mesure",
        desc: "Des thèmes conçus à la main autour de votre marque et de vos contenus — sans la lourdeur des constructeurs de pages, sans dépendance à un template, avec des temps de chargement que les thèmes du commerce ne peuvent pas égaler.",
      },
      {
        title: "Boutiques WooCommerce",
        desc: "L'e-commerce complet sur WordPress : catalogues produits, passerelles de paiement, règles de livraison et parcours de commande optimisés pour la conversion.",
      },
      {
        title: "Plateformes de contenu à grande échelle",
        desc: "Une architecture pensée pour les sites de plusieurs centaines ou milliers de pages — types de contenus personnalisés, taxonomies, configurations multilingues et workflows éditoriaux qui gardent les grandes bibliothèques maîtrisables.",
      },
      {
        title: "Ingénierie SEO-first",
        desc: "Balisage sémantique, schema, structures d'URL propres, optimisation des images et réglage des Core Web Vitals intégrés au thème lui-même — pas rajoutés après coup à coups d'extensions.",
      },
      {
        title: "Durcissement de la sécurité & maintenance",
        desc: "Accès administrateur verrouillé, mises à jour gérées, surveillance des malwares et sauvegardes automatisées, pour que votre site reste en ligne et hors d'atteinte.",
      },
      {
        title: "Refontes & migrations",
        desc: "Nous reprenons les sites WordPress négligés ou lents, les reconstruisons dans les règles de l'art et migrons les contenus avec des plans de redirection complets, pour que vos positions existantes survivent au changement.",
      },
    ],
    process: [
      {
        title: "Découverte & cadrage",
        desc: "Nous cartographions vos objectifs, votre audience, la structure de vos contenus et votre paysage concurrentiel, puis définissons l'arborescence, les fonctionnalités et le plan technique du projet.",
      },
      {
        title: "Design & prototypage",
        desc: "Nos designers produisent des wireframes et des maquettes haute fidélité alignées sur votre marque, pour que vous validiez exactement ce qui sera construit avant le début du développement.",
      },
      {
        title: "Développement",
        desc: "Nous développons un thème sur mesure avec un code propre et évolutif, configurons uniquement les extensions nécessaires et structurons l'ensemble pour la vitesse et le SEO.",
      },
      {
        title: "Tests & recette",
        desc: "Chaque template est testé en performance, responsive, accessibilité et sécurité sur tous les appareils et navigateurs avant d'être montré à quiconque hors de l'équipe.",
      },
      {
        title: "Mise en ligne & accompagnement",
        desc: "Nous gérons l'hébergement, le lancement et les redirections, puis assurons la maintenance, les mises à jour et les améliorations après la mise en production.",
      },
    ],
    faqs: [
      {
        q: "Pourquoi choisir un développement WordPress sur mesure plutôt qu'un thème prêt à l'emploi ?",
        a: "Les thèmes prêts à l'emploi embarquent le code de centaines de fonctionnalités que vous n'utiliserez jamais, ce qui ralentit les pages et crée des failles de sécurité. Un thème sur mesure ne contient que ce dont votre site a besoin : il charge plus vite, se positionne mieux et reste bien plus simple à maintenir. Votre site ressemble aussi à votre marque, et non à un template utilisé par des milliers d'autres entreprises.",
      },
      {
        q: "TDM peut-il gérer de gros sites WordPress riches en contenu ?",
        a: "Oui — c'est une de nos spécialités. Nous avons construit et maintenons sur cette stack une plateforme bilingue de services juridiques de plus de 2 400 articles au service de clients dans plus de 20 pays. Types de contenus personnalisés, taxonomies structurées et hébergement optimisé permettent à des sites de cette taille de rester rapides et gérables.",
      },
      {
        q: "Mon site WordPress sera-t-il optimisé pour le SEO ?",
        a: "Chaque site construit par TDM est optimisé pour le SEO par défaut : HTML sémantique, balisage schema, URL propres, images optimisées et Core Web Vitals solides. Comme TDM mène aussi des campagnes SEO, nos développeurs construisent selon les mêmes standards que ceux qu'audite notre équipe SEO.",
      },
      {
        q: "Pouvez-vous corriger ou reconstruire mon site WordPress existant ?",
        a: "Oui. Nous reprenons régulièrement des sites lents, obsolètes ou précédemment piratés. Selon l'audit, nous assainissons et sécurisons l'existant, ou nous le reconstruisons sur un thème sur mesure en migrant tous les contenus avec des redirections 301 propres, pour que vous conserviez vos positions dans les moteurs de recherche.",
      },
      {
        q: "Pourrai-je modifier le site moi-même ?",
        a: "C'est tout l'intérêt de WordPress. Nous structurons l'administration pour que votre équipe puisse modifier les pages, publier des articles et mettre à jour les produits sans toucher au code, et nous organisons une session de prise en main au lancement. Tout ce qui dépasse l'édition quotidienne est couvert par nos formules d'accompagnement.",
      },
      {
        q: "Combien de temps dure un projet WordPress ?",
        a: "Un site corporate classique prend 4 à 8 semaines du lancement du projet à la mise en ligne ; les boutiques WooCommerce et les grandes plateformes de contenu demandent plus de temps selon le volume du catalogue et des contenus. Nous vous donnons un calendrier concret après la phase de découverte — et nous nous y tenons.",
      },
    ],
    relatedCaseStudies: [
      "french-legal-platform",
      "real-estate-brokerage-website",
      "uk-manufacturer-seo",
    ],
  },
  {
    slug: "shopify",
    sector: "development",
    name: "Développement Shopify",
    navLabel: "Shopify",
    shortDesc:
      "Boutiques Shopify et Shopify Plus conçues et développées pour convertir — thèmes sur mesure, intégrations d'applications et migrations menées sans perdre ni ventes ni positions.",
    metaTitle: "Développement Shopify | TDM",
    metaDescription:
      "TDM conçoit des boutiques Shopify qui convertissent — thèmes sur mesure, intégrations, migrations et CRO. Un client a vu ses ventes en ligne croître de 70%.",
    hero: {
      headline: "Des boutiques Shopify conçues pour vendre.",
      sub: "Thèmes sur mesure, développements orientés conversion et migrations sans accroc — par l'agence qui gère aussi les publicités et le SEO qui remplissent votre boutique d'acheteurs.",
    },
    intro: [
      "Le service de développement Shopify de TDM construit et relance des boutiques Shopify pour les marques qui veulent une boutique en ligne qui convertit vraiment — marques en vente directe, commerçants qui passent au digital, marchands à l'étroit dans leur configuration actuelle. Comme tout ce que livre TDM, chaque boutique est optimisée pour le SEO, sécurisée et évolutive dès le premier jour.",
      "Shopify prend en charge l'hébergement, le paiement et la conformité PCI ; la différence entre une boutique moyenne et une excellente boutique se joue donc sur ce qui est construit par-dessus : vitesse du thème, force de persuasion des pages produits, navigation et écosystème d'applications. Nous concevons des thèmes sur mesure autour de votre catalogue et de vos clients, intégrons les outils dont vous avez besoin et supprimons ceux qui ralentissent silencieusement votre boutique.",
      "Les résultats se mesurent. Après la refonte et la relance de la boutique d'un commerçant, ses ventes en ligne ont progressé de 70%. Parce que nos développeurs travaillent aux côtés de nos équipes performance marketing et SEO, chaque décision de conception — de la structure des collections à la vitesse des pages — est prise en pensant trafic et conversion, pas seulement esthétique.",
    ],
    features: [
      {
        title: "Design & développement de thèmes Shopify sur mesure",
        desc: "Des vitrines uniques construites sur l'architecture Online Store 2.0 de Shopify — rapides, fidèles à votre marque et structurées autour de la manière dont vos clients achètent réellement.",
      },
      {
        title: "Parcours produits & paiement orientés conversion",
        desc: "Pages produits, mises en page de collections, personnalisations du panier et du paiement conçues à partir de vraies données e-commerce pour augmenter les ajouts au panier et les commandes finalisées.",
      },
      {
        title: "Intégration d'applications & fonctionnalités sur mesure",
        desc: "Avis, abonnements, fidélité, bundles, intégrations ERP et logistique — implémentés proprement, avec un audit de l'écosystème d'applications pour qu'il ne pénalise jamais la vitesse des pages.",
      },
      {
        title: "Migrations de plateforme",
        desc: "Passages de WooCommerce, Magento, PrestaShop ou de plateformes historiques vers Shopify, avec produits, clients, commandes et redirections SEO pris en charge pour que l'activité ne s'arrête jamais.",
      },
      {
        title: "Optimisation SEO & vitesse",
        desc: "Données structurées, architecture SEO des collections et des produits, optimisation des images et réglage des Core Web Vitals — intégrés d'office, parce que l'équipe SEO de TDM tient nos développements à ses propres standards.",
      },
      {
        title: "Localisation & paiements régionaux",
        desc: "Vitrines multi-devises et multilingues, options de paiement régionales — y compris les solutions de paiement fractionné populaires dans les marchés du Golfe — pour les marques qui vendent à l'international.",
      },
    ],
    process: [
      {
        title: "Découverte & cadrage",
        desc: "Nous étudions votre catalogue, vos clients, vos concurrents et les données de votre boutique actuelle pour définir l'architecture, le périmètre fonctionnel et le plan de migration.",
      },
      {
        title: "Design & prototypage",
        desc: "Maquettes haute fidélité de vos templates clés — accueil, collection, produit, panier — pour voir et valider la boutique avant qu'une seule ligne de code de thème ne soit écrite.",
      },
      {
        title: "Développement",
        desc: "Nous développons le thème, configurons les applications et intégrations, chargeons les produits et paramétrons paiements, livraison et taxes sur une boutique de prévisualisation privée.",
      },
      {
        title: "Tests & recette",
        desc: "Tests complets du parcours d'achat sur appareils réels — navigation, recherche, panier, codes de réduction, paiement et e-mails transactionnels — plus contrôles de vitesse et de SEO.",
      },
      {
        title: "Mise en ligne & accompagnement",
        desc: "Nous gérons le lancement ou la bascule de migration, surveillons de près les premières semaines et assurons l'optimisation et le support en continu.",
      },
    ],
    faqs: [
      {
        q: "Dois-je utiliser un thème Shopify ou une boutique sur mesure ?",
        a: "Tout dépend de votre stade. Pour une jeune marque qui valide sa demande, un thème premium bien configuré est souvent le bon choix — et nous le faisons aussi. Une fois un trafic régulier atteint, un thème sur mesure se rentabilise par une meilleure vitesse et une meilleure conversion. Nous vous dirons honnêtement de quel côté de cette ligne vous vous trouvez.",
      },
      {
        q: "Quels résultats une refonte Shopify peut-elle réellement apporter ?",
        a: "Un commerçant avec lequel nous travaillons a vu ses ventes en ligne progresser de 70% après la relance de sa boutique — mêmes produits, même marque, mais un site plus rapide, une navigation plus claire et des pages produits conçues pour convertir. Les résultats varient selon le point de départ ; c'est pourquoi chaque projet commence par un audit des données de votre boutique actuelle.",
      },
      {
        q: "TDM peut-il migrer ma boutique vers Shopify sans perdre mon SEO ?",
        a: "Oui. Nous faisons correspondre chaque URL existante à son équivalent avec des redirections 301, reprenons les métadonnées et les données structurées, et revérifions la Search Console après la bascule. Les migrations sont planifiées pour minimiser l'interruption, afin que vous conserviez vos positions comme votre chiffre d'affaires.",
      },
      {
        q: "Travaillez-vous avec Shopify Plus ?",
        a: "Oui. Pour les marchands à fort volume, nous développons sur Shopify Plus : extensibilité du checkout, Shopify Functions pour des logiques de remise et de livraison sur mesure, boutiques d'expansion pour de nouveaux marchés et automatisation via Shopify Flow.",
      },
      {
        q: "Pouvez-vous aussi assurer le marketing de la boutique après le lancement ?",
        a: "C'est l'avantage clé de TDM. L'agence qui construit votre boutique peut aussi piloter son SEO, ses publicités Google et Meta, ses séquences e-mail et ses contenus sociaux. Notre équipe marketing a obtenu des résultats comme une croissance du trafic organique de 16× et un ROAS soutenu de 10× pour des clients e-commerce — et les boutiques que nous construisons sont conçues pour ces campagnes dès le départ.",
      },
      {
        q: "Combien coûte le développement d'une boutique Shopify ?",
        a: "Une configuration à base de thème démarre à quelques milliers de dollars ; les développements entièrement sur mesure et les projets Plus évoluent avec la complexité. Après un appel de découverte, nous fournissons un devis fixe et détaillé — pas de facturation horaire sans fin, ni de lignes surprises au lancement.",
      },
    ],
    relatedCaseStudies: [
      "baby-products-ecommerce-store",
      "uae-perfume-store-seo",
      "arabic-seo-perfume-ecommerce",
    ],
  },
  {
    slug: "magento",
    sector: "development",
    name: "Développement Magento",
    navLabel: "Magento",
    shortDesc:
      "Développement Magento (Adobe Commerce) pour catalogues complexes et commerce B2B — modules sur mesure, intégrations, optimisation des performances et montées de version.",
    metaTitle: "Développement Magento | TDM",
    metaDescription:
      "TDM développe et maintient des boutiques Magento / Adobe Commerce — modules sur mesure, intégrations ERP, performances, montées de version et migrations.",
    hero: {
      headline: "Le développement Magento pour le commerce exigeant.",
      sub: "Catalogues complexes, tarification B2B, configurations multi-boutiques et intégrations profondes — conçus par TDM pour rester rapides, sécurisés et maintenables.",
    },
    intro: [
      "Le service de développement Magento de TDM construit, étend et maintient des boutiques Magento Open Source et Adobe Commerce pour les marchands dont les besoins dépassent les plateformes plus simples — catalogues vastes ou complexes, grilles tarifaires B2B, opérations multi-boutiques et multi-devises, intégrations profondes avec ERP ou entrepôts. Comme chaque réalisation TDM, chaque boutique est optimisée pour le SEO, sécurisée et évolutive.",
      "La puissance de Magento est aussi son risque : entre des mains inexpérimentées, il devient lent, fragile et coûteux à faire évoluer. Nos ingénieurs travaillent avec Magento comme il est censé l'être — un vrai développement de modules plutôt que des modifications du cœur, des choix d'extensions raisonnés, et une architecture de cache et d'hébergement réglée pour la plateforme — pour que votre boutique reste rapide à mesure que le catalogue et le trafic grandissent.",
      "Nous sauvons aussi des boutiques Magento existantes : audits de performance, correctifs de sécurité, montées de version depuis des versions en fin de vie, et re-plateformes complètes lorsque Magento n'est réellement pas le bon choix. Comme nous développons aussi sur Shopify, WordPress et des stacks sur mesure, notre recommandation repose sur votre activité, pas sur la seule plateforme que nous connaîtrions.",
    ],
    features: [
      {
        title: "Développement de modules sur mesure",
        desc: "Des modules Magento conçus selon les standards de la plateforme — logiques tarifaires personnalisées, étapes de paiement, types de produits et outils d'administration qui survivent aux montées de version.",
      },
      {
        title: "B2B & catalogues complexes",
        desc: "Tarification par paliers et par client, workflows de devis, comptes entreprises, produits configurables et groupés, et catalogues atteignant plusieurs dizaines de milliers de références.",
      },
      {
        title: "Intégrations ERP, CRM & entrepôts",
        desc: "Synchronisation bidirectionnelle des produits, stocks, commandes et clients avec vos systèmes ERP, CRM, caisse et logistique, pour que l'exploitation repose sur une source de vérité unique.",
      },
      {
        title: "Optimisation des performances",
        desc: "Cache pleine page, réglage de la base de données et des indexeurs, optimisation des images et du front-end, et architecture d'hébergement qui rend légère une plateforme lourde.",
      },
      {
        title: "Montées de version, correctifs & sécurité",
        desc: "Montées de version depuis les versions en fin de vie, application rapide des correctifs de sécurité et durcissement — pour une boutique conforme, supportée et sûre.",
      },
      {
        title: "Multi-boutiques & international",
        desc: "Plusieurs vitrines, langues, devises et régimes fiscaux gérés depuis une seule installation Magento, avec un SEO correctement traité pour chaque marché.",
      },
    ],
    process: [
      {
        title: "Découverte & cadrage",
        desc: "Nous auditons la complexité de votre catalogue, vos intégrations, votre trafic et vos règles métier pour cadrer la bonne architecture Magento — ou recommander une autre plateforme si elle convient mieux.",
      },
      {
        title: "Design & prototypage",
        desc: "Maquettes de vos templates commerciaux clés et de vos workflows B2B, prototypées et validées avant le début du développement.",
      },
      {
        title: "Développement",
        desc: "Développement de modules et de thèmes conforme aux standards, construction des intégrations et migration des données sur un environnement de préproduction identique à la production.",
      },
      {
        title: "Tests & recette",
        desc: "Tests de charge, tests complets du parcours d'achat et des règles tarifaires, vérification des intégrations et revue de sécurité avant toute bascule.",
      },
      {
        title: "Mise en ligne & accompagnement",
        desc: "Un lancement planifié à interruption minimale, suivi d'une surveillance, de correctifs et d'un contrat d'accompagnement pour les évolutions.",
      },
    ],
    faqs: [
      {
        q: "Magento est-il la bonne plateforme pour ma boutique ?",
        a: "Magento justifie sa complexité lorsque vous avez un catalogue vaste ou hautement configurable, des règles tarifaires B2B, plusieurs vitrines ou des intégrations back-office profondes. Si vos besoins sont plus simples, Shopify ou WooCommerce seront moins coûteux à exploiter — et comme TDM développe sur toutes ces plateformes, nous recommanderons ce qui vous convient, pas ce que nous aurions à vendre.",
      },
      {
        q: "Ma boutique Magento est lente. Pouvez-vous y remédier ?",
        a: "En général, oui — et sans refonte. La plupart des boutiques Magento lentes souffrent d'un cache mal configuré, d'extensions tierces mal codées ou d'un hébergement sous-dimensionné. Nous menons un audit de performance, corrigeons d'abord les problèmes à plus fort impact et vous fournissons des chiffres avant/après sur la vitesse des pages et les Core Web Vitals.",
      },
      {
        q: "Nous sommes sur une ancienne version de Magento. Quelles sont nos options ?",
        a: "Rester sur une version en fin de vie signifie l'absence de correctifs de sécurité — un vrai risque commercial. Nous gérons les montées de version vers les versions actuelles de Magento, compatibilité des extensions et migration du thème comprises. Quand une montée de version n'a pas de sens économique, nous planifions et exécutons une re-plateforme vers Shopify ou une stack sur mesure — avec un SEO préservé grâce à un plan de redirection complet.",
      },
      {
        q: "Magento peut-il se connecter à notre ERP ou à notre système d'entrepôt ?",
        a: "Oui — c'est l'une des principales raisons pour lesquelles les marchands le choisissent. Nous construisons des intégrations qui synchronisent stocks, prix, commandes et données clients dans les deux sens, via API natives, middleware ou connecteurs sur mesure. Nous avons livré des intégrations opérationnelles similaires dans le cadre de notre pratique CRM/ERP.",
      },
      {
        q: "Assurez-vous un accompagnement Magento dans la durée ?",
        a: "Oui. Magento n'est pas une plateforme que l'on lance puis abandonne : elle exige des correctifs réguliers, des mises à jour d'extensions et une surveillance des performances. La plupart de nos clients Magento nous confient un forfait mensuel couvrant la maintenance plus un volume d'heures de développement pour les améliorations.",
      },
    ],
    relatedCaseStudies: [
      "baby-products-ecommerce-store",
      "uae-perfume-store-seo",
    ],
  },
  {
    slug: "custom-development",
    sector: "development",
    name: "Développement web sur mesure",
    navLabel: "Développement sur mesure",
    shortDesc:
      "Plateformes et applications web sur mesure en Next.js, Laravel et autres stacks modernes — pour les produits et workflows qu'aucune plateforme du marché ne peut couvrir.",
    metaTitle: "Développement web sur mesure — Next.js, Laravel | TDM",
    metaDescription:
      "TDM développe des plateformes et applications web sur mesure avec Next.js, Laravel et des stacks modernes — des logiciels sûrs, évolutifs et prêts pour le SEO.",
    hero: {
      headline: "Du logiciel sur mesure pour les entreprises trop grandes pour les templates.",
      sub: "Plateformes web, portails et applications construits avec Next.js, Laravel et d'autres stacks modernes — architecturés par TDM pour grandir avec votre entreprise, pas contre elle.",
    },
    intro: [
      "Le service de développement sur mesure de TDM conçoit et construit des plateformes et applications web de zéro — pour les entreprises dont le produit, les workflows ou l'échelle n'entrent dans aucune plateforme du marché. Places de marché, systèmes de réservation, portails clients, plateformes de contenu et outils internes : si vous pouvez le définir, nos ingénieurs peuvent l'architecturer et le construire, optimisé pour le SEO, sécurisé et évolutif dès la première version.",
      "Nous travaillons avec des stacks modernes et éprouvées — Next.js et React côté front, Laravel et Node.js côté back, avec les bases de données, API et infrastructures cloud que chaque projet exige. Nous développons aussi sur PrestaShop et d'autres plateformes établies quand une approche hybride vous amène plus vite sur le marché. La stack est choisie pour vos besoins et votre futur vivier de recrutement, jamais pour notre confort.",
      "C'est la pratique derrière certaines de nos réalisations les plus ambitieuses, dont une plateforme bilingue de services juridiques de plus de 2 400 articles structurés au service de clients dans plus de 20 pays, et des systèmes de réservation et portails sur mesure pour des acteurs de l'immobilier et des services. Sur mesure ne veut pas dire risqué : notre processus en cinq étapes garde périmètre, budget et calendrier visibles à chaque stade.",
    ],
    features: [
      {
        title: "Applications Next.js & React",
        desc: "Des front-ends rapides et SEO-friendly avec rendu côté serveur et React moderne — la stack sur laquelle tourne ce site — pour les plateformes où vitesse et visibilité dans les moteurs comptent autant l'une que l'autre.",
      },
      {
        title: "Back-ends Laravel & API",
        desc: "Des back-ends robustes en Laravel et Node.js : authentification, rôles et permissions, paiements, logique métier et API REST ou GraphQL propres sur lesquelles vos futures applications pourront s'appuyer.",
      },
      {
        title: "Portails, places de marché & systèmes de réservation",
        desc: "Des plateformes multi-acteurs avec tableaux de bord, annonces, recherche, planification, paiements et messagerie — les catégories de produits que les templates ne peuvent pas atteindre.",
      },
      {
        title: "Intégrations tierces",
        desc: "Passerelles de paiement, CRM, cartographie, communication et API logistiques réunis en un système cohérent plutôt qu'un empilement d'outils déconnectés.",
      },
      {
        title: "Plateforme + sur mesure",
        desc: "Quand c'est plus judicieux que de partir de zéro, nous étendons WordPress, PrestaShop ou Shopify avec des modules sur mesure — l'économie d'une plateforme avec les capacités du sur mesure.",
      },
      {
        title: "Architecture évolutive et sécurisée",
        desc: "Hébergement cloud, déploiements automatisés, supervision, sauvegardes et durcissement de la sécurité pensés dès le premier jour, pour que la croissance soit un exercice de montée en charge, pas une réécriture.",
      },
    ],
    process: [
      {
        title: "Découverte & cadrage",
        desc: "Nous transformons vos objectifs, vos utilisateurs et vos workflows en une spécification concrète : fonctionnalités, modèle de données, architecture, jalons et un périmètre fixe que vous validez.",
      },
      {
        title: "Design & prototypage",
        desc: "Wireframes UX et maquettes UI haute fidélité pour chaque écran clé, prototypés pour que les parties prenantes puissent parcourir le produit avant qu'il ne soit construit.",
      },
      {
        title: "Développement",
        desc: "Un développement itératif en cycles courts avec des previews sur préproduction, pour voir un logiciel fonctionnel tôt et l'orienter — pas six mois de silence avant une grande révélation.",
      },
      {
        title: "Tests & recette",
        desc: "Tests automatisés et manuels des fonctionnalités, des performances, de la sécurité et des cas limites, pour que le jour du lancement soit une formalité, pas un pari.",
      },
      {
        title: "Mise en ligne & accompagnement",
        desc: "Déploiement en production avec supervision et sauvegardes en place, documentation et passation, puis support continu ou développement de nouvelles fonctionnalités après le lancement.",
      },
    ],
    faqs: [
      {
        q: "Quand le développement sur mesure a-t-il plus de sens que Shopify ou WordPress ?",
        a: "Quand la plateforme commence à vous résister : des workflows que les extensions ne savent pas modéliser, une logique métier unique, des places de marché multi-acteurs, ou des besoins de performance et d'échelle qu'une stack à base de template ne peut pas satisfaire. Si une plateforme convient réellement, nous vous le dirons — TDM développe aussi sur Shopify, WordPress, Magento et PrestaShop, nous n'avons donc aucun intérêt à survendre le sur mesure.",
      },
      {
        q: "Quelles technologies TDM utilise-t-il pour ses développements sur mesure ?",
        a: "Principalement Next.js et React côté front, Laravel ou Node.js côté back, avec PostgreSQL ou MySQL et un hébergement cloud moderne. Nous choisissons projet par projet selon les besoins, les intégrations et l'équipe qui maintiendra le système à long terme — et nous documentons nos choix pour que vous ne soyez jamais captif.",
      },
      {
        q: "Comment tenez-vous le budget et les délais d'un projet sur mesure ?",
        a: "Avec une spécification écrite et fixée avant le début du développement, une livraison par jalons et un logiciel fonctionnel en préproduction dès les premières semaines. Les changements de périmètre sont chiffrés et validés avant d'être développés. C'est la discipline qui a permis à des projets comme notre plateforme juridique de 2 400 articles d'être livrés dans les temps malgré des contenus bilingues couvrant plus de 20 pays.",
      },
      {
        q: "Qui possède le code une fois le projet terminé ?",
        a: "Vous. Au paiement final, vous recevez l'intégralité du code source, l'accès au dépôt, les identifiants d'infrastructure et la documentation. N'importe quel développeur peut reprendre le projet — même si la plupart des clients gardent TDM pour la suite, parce que nous connaissons le système mieux que quiconque.",
      },
      {
        q: "Pouvez-vous reprendre un projet sur mesure inachevé ou hérité ?",
        a: "Oui, et nous le faisons souvent. Nous commençons par un audit du code et de l'infrastructure, vous remettons un état des lieux honnête de ce qui est récupérable, puis soit nous stabilisons et poursuivons la base de code existante, soit nous planifions une reconstruction par phases — selon ce qui coûte le moins sur la durée de vie du produit.",
      },
      {
        q: "Une plateforme sur mesure sera-t-elle optimisée pour le SEO ?",
        a: "Oui — c'est même un domaine où le sur mesure peut surpasser les plateformes. Avec le rendu côté serveur de Next.js, nous maîtrisons totalement le balisage, la vitesse, les données structurées et l'architecture des URL. Chaque plateforme livrée par TDM répond aux mêmes standards SEO que ceux qu'audite notre propre équipe search.",
      },
    ],
    relatedCaseStudies: [
      "french-legal-platform",
      "real-estate-brokerage-website",
      "ride-hailing-apps",
    ],
  },
  {
    slug: "crm-erp",
    sector: "development",
    name: "Développement CRM & ERP",
    navLabel: "CRM / ERP",
    shortDesc:
      "Systèmes CRM et ERP sur mesure — pipelines commerciaux, stocks, RH, finance et modules opérationnels, intégrations et tableaux de bord construits autour du fonctionnement réel de votre entreprise.",
    metaTitle: "Développement CRM & ERP sur mesure | TDM",
    metaDescription:
      "TDM développe des CRM et ERP sur mesure — modules ventes, stocks, RH, finance et opérations, avec intégrations, tableaux de bord et migrations propres.",
    hero: {
      headline: "Des systèmes de gestion construits autour de votre entreprise.",
      sub: "CRM et ERP sur mesure — ventes, stocks, RH, finance et opérations dans un seul système, avec des tableaux de bord qui montrent toute l'entreprise d'un coup d'œil.",
    },
    intro: [
      "Le service de développement CRM et ERP de TDM construit des systèmes de gestion sur mesure pour les entreprises qui ont dépassé les tableurs et les outils du commerce — un CRM modelé sur votre vrai processus de vente, et des modules ERP couvrant stocks, RH, finance et opérations. Il s'adresse aux entreprises dont les workflows sont l'avantage concurrentiel, et qui en ont assez de les tordre pour entrer dans un logiciel générique.",
      "Les CRM et ERP du marché facturent chaque utilisateur, indéfiniment, tout en vous imposant leur façon de travailler. Un système sur mesure inverse la logique : il modélise exactement vos étapes de pipeline, vos chaînes de validation, vos emplacements de stock et vos lignes de reporting — sans frais de licence qui se multiplient à chaque embauche. Nous ne construisons que les modules dont vous avez besoin maintenant, sur une architecture qui permet d'ajouter le suivant plus tard.",
      "Chaque système est livré sécurisé, évolutif et intégré : connecté à votre site, votre boutique, vos outils comptables et vos canaux de communication, avec des accès par rôle et des tableaux de bord qui transforment les données opérationnelles en décisions. Et lorsque vous quittez des outils historiques, nous migrons vos données avec soin — nettoyées, dédoublonnées et vérifiées, pas simplement déversées.",
    ],
    features: [
      {
        title: "Développement CRM sur mesure",
        desc: "Capture de leads, étapes de pipeline, historiques de contacts, automatisation des tâches et workflows de relance modelés sur la manière dont votre équipe vend réellement — pas sur le template d'un éditeur.",
      },
      {
        title: "Modules ERP : stocks, RH, finance & opérations",
        desc: "Gestion des stocks et entrepôts, achats, paie et présences, facturation et dépenses, workflows opérationnels — construits en modules connectés, adoptés un par un.",
      },
      {
        title: "Intégrations avec vos outils existants",
        desc: "Des connexions bidirectionnelles avec votre site, votre boutique e-commerce, votre logiciel comptable, l'e-mail et WhatsApp, vos passerelles de paiement et vos prestataires logistiques — la fin de la double saisie.",
      },
      {
        title: "Tableaux de bord & reporting",
        desc: "Des tableaux de bord en temps réel par rôle — performance commerciale, niveaux de stock, trésorerie, productivité des équipes — qui remplacent la course mensuelle au tableur par des chiffres vivants.",
      },
      {
        title: "Migration de données depuis les systèmes historiques",
        desc: "Une migration structurée depuis vos tableurs et anciens logiciels : cartographiée, nettoyée, dédoublonnée et vérifiée contre la source avant la mise hors service de l'ancien système.",
      },
      {
        title: "Accès par rôle & sécurité",
        desc: "Permissions granulaires, pistes d'audit, données chiffrées et sauvegardes fiables — pour que les données RH et financières sensibles soient exactement aussi visibles qu'elles doivent l'être, et pas davantage.",
      },
    ],
    process: [
      {
        title: "Découverte & cadrage",
        desc: "Nous nous asseyons avec ceux qui font le travail — ventes, entrepôt, RH, finance — pour cartographier les workflows réels, puis définir les modules, le modèle de données et l'ordre de déploiement.",
      },
      {
        title: "Design & prototypage",
        desc: "Des prototypes cliquables des écrans que votre équipe utilisera au quotidien, affinés avec ses retours avant le début du développement — le moment le moins coûteux pour tout changer.",
      },
      {
        title: "Développement",
        desc: "Un développement module par module avec accès à la préproduction tout du long, des intégrations branchées à vos outils existants et des scripts de migration préparés en parallèle du logiciel.",
      },
      {
        title: "Tests & recette",
        desc: "Tests des workflows avec des scénarios réels et des données migrées, contrôles des permissions et de la sécurité, et recette utilisateur avec votre équipe avant la mise en production.",
      },
      {
        title: "Mise en ligne & accompagnement",
        desc: "Un déploiement par phases avec formation et documentation, une période de suivi renforcé après le lancement, puis un accompagnement continu à mesure que vos processus — et le système — évoluent.",
      },
    ],
    faqs: [
      {
        q: "Pourquoi développer un CRM ou un ERP sur mesure plutôt que d'en acheter un ?",
        a: "Achetez quand un outil standard couvre 90% de votre activité. Développez quand vos workflows sont réellement spécifiques — opérations régionales, chaînes de validation inhabituelles, particularités sectorielles — ou quand les licences par utilisateur d'une équipe qui grandit coûtent plus sur trois ans qu'un système qui vous appartient. Nous vous aidons à faire ce comparatif honnêtement avant tout engagement.",
      },
      {
        q: "Quels modules TDM peut-il intégrer à un ERP ?",
        a: "Gestion des stocks et entrepôts, achats et fournisseurs, ventes et facturation, RH (présences, congés, paie), finance et suivi des dépenses, et workflows opérationnels ou de projet. La plupart des clients commencent par le ou les deux modules qui font le plus mal, puis en ajoutent d'autres sur la même plateforme — l'architecture est conçue pour cela dès le premier jour.",
      },
      {
        q: "Le système peut-il s'intégrer à notre site et à nos autres logiciels ?",
        a: "Oui — l'intégration est généralement la première raison de passer au sur mesure. Les leads du site alimentent directement le CRM, les commandes de la boutique mettent les stocks à jour en temps réel, les factures se synchronisent avec votre logiciel comptable, et les notifications atteignent votre équipe par e-mail ou WhatsApp. Un système connecté plutôt que cinq outils déconnectés.",
      },
      {
        q: "Comment migrez-vous nos données existantes en toute sécurité ?",
        a: "Nous exportons depuis vos outils actuels, faisons correspondre chaque champ à la nouvelle structure, nettoyons et dédoublonnons les enregistrements, puis exécutons des migrations d'essai en préproduction que votre équipe vérifie contre la source. La migration finale ne s'exécute qu'après validation — et l'ancien système reste consultable en lecture seule jusqu'à ce que vous soyez serein.",
      },
      {
        q: "Combien de temps prend un projet CRM ou ERP sur mesure ?",
        a: "Un CRM ciblé demande généralement 8 à 12 semaines jusqu'à la première version ; les ERP multi-modules se déploient sur plusieurs mois, module par module, pour que votre équipe en tire de la valeur tôt au lieu d'attendre un lancement unique. La phase de découverte produit un plan de jalons concret avant tout engagement.",
      },
      {
        q: "Que se passe-t-il après le lancement ?",
        a: "Le code source et les données vous appartiennent intégralement. La plupart des clients conservent TDM sur un contrat d'accompagnement couvrant la maintenance, les demandes utilisateurs et les nouveaux modules — mais vous n'êtes jamais captif, et une documentation complète permet à toute équipe compétente de prendre le relais.",
      },
    ],
    relatedCaseStudies: [
      "real-estate-brokerage-website",
      "french-legal-platform",
    ],
  },
  {
    slug: "mobile-apps",
    sector: "development",
    name: "Développement d'applications mobiles",
    navLabel: "Applications mobiles",
    shortDesc:
      "Applications iOS natives (Swift), Android natives (Kotlin & Jetpack Compose) et cross-platform (Flutter, React Native) — de la recherche UX à la publication sur l'App Store et le Play Store.",
    metaTitle: "Applications mobiles iOS & Android | TDM",
    metaDescription:
      "TDM développe des apps natives iOS (Swift), Android (Kotlin/Jetpack Compose) et cross-platform (Flutter, React Native) — de la recherche UX à la publication.",
    hero: {
      headline: "Des applications que les utilisateurs gardent, au lieu de les supprimer.",
      sub: "iOS et Android natifs, et développements cross-platform en Flutter et React Native — conçus à partir de la recherche UX et publiés sur l'App Store et Google Play par TDM.",
    },
    intro: [
      "Le service de développement mobile de TDM conçoit et développe des applications iOS et Android pour les startups comme pour les entreprises établies — des apps natives en Swift et Kotlin quand la performance et le ressenti de la plateforme priment, et des apps cross-platform en Flutter ou React Native quand la rapidité de mise sur le marché et le budget mènent la danse. Chaque application livrée est intuitive, riche en fonctionnalités, sécurisée et évolutive, et nous la portons jusqu'à sa publication sur l'App Store et le Play Store.",
      "Notre portfolio couvre des catégories exigeantes et bien réelles : des applications de VTC développées en Swift pour des opérateurs de la région MENA — avec suivi GPS en direct, parcours de réservation et coordination conducteur-passager — et une place de marché de livraison de repas native en Kotlin et Jetpack Compose pour une startup britannique, reliant clients, restaurants et livreurs avec un suivi de commande en temps réel.",
      "Ce qui sépare les applications qu'on utilise de celles qu'on supprime se décide avant la première ligne de code. C'est pourquoi chaque projet commence par de la recherche UX — personas, cartographie des parcours, wireframes et design system — pour qu'au moment où nos ingénieurs développent, ils construisent quelque chose que les utilisateurs ont déjà validé.",
    ],
    features: [
      {
        title: "Développement iOS natif (Swift)",
        desc: "Des apps iPhone et iPad haute performance en Swift avec une architecture propre, des notifications push, des fonctionnalités temps réel et la soumission à l'App Store entièrement prise en charge — la stack derrière nos projets VTC au MENA.",
      },
      {
        title: "Développement Android natif (Kotlin & Jetpack Compose)",
        desc: "Des apps Android modernes en Kotlin avec interface Jetpack Compose et architecture MVVM, optimisées pour la diversité du parc Android et publiées sur Google Play.",
      },
      {
        title: "Apps cross-platform (Flutter & React Native)",
        desc: "Une seule base de code pour iOS et Android — la bonne équation économique pour les MVP et les apps de contenu ou de commerce, sans le rendu au rabais que le cross-platform impliquait autrefois.",
      },
      {
        title: "Recherche UX → design → développement → publication",
        desc: "Personas, cartes de parcours, wireframes, design system et UI haute fidélité avant le développement — puis des itérations, une recette sur appareils réels et une publication gérée sur les stores.",
      },
      {
        title: "Back-end, API & fonctionnalités temps réel",
        desc: "Le côté serveur sur lequel tourne votre app : API REST, authentification, paiements, notifications push via FCM, et fonctionnalités en direct comme le suivi GPS, le chat et le statut des commandes.",
      },
      {
        title: "Accompagnement & itération post-lancement",
        desc: "Suivi des crashs et des analytics, compatibilité avec les mises à jour des OS, optimisation des fiches stores et une feuille de route guidée par les données après la publication — le lancement est le début, pas la fin.",
      },
    ],
    process: [
      {
        title: "Découverte & cadrage",
        desc: "Nous définissons la mission centrale de l'app, ses utilisateurs et ses indicateurs de succès, menons la recherche UX et les personas, et cadrons un MVP qui mérite d'être lancé — pas une liste de fonctionnalités qui le retarde.",
      },
      {
        title: "Design & prototypage",
        desc: "Wireframes, design system et UI au pixel près pour chaque écran, livrés sous forme de prototype cliquable que vous pouvez mettre entre les mains de vrais utilisateurs avant le développement.",
      },
      {
        title: "Développement",
        desc: "Des développements natifs ou cross-platform en sprints agiles — Swift, Kotlin/Jetpack Compose, Flutter ou React Native — avec des builds de test réguliers sur votre propre appareil tout au long du projet.",
      },
      {
        title: "Tests & recette",
        desc: "Tests fonctionnels, de performance et de sécurité sur appareils et versions d'OS réels, y compris les scénarios de réseau lent et les cas limites qui font tomber les apps moins bien conçues.",
      },
      {
        title: "Mise en ligne & accompagnement",
        desc: "Nous gérons la soumission et la revue sur l'App Store et Google Play, puis surveillons crashs et analytics après le lancement et itérons sur les données d'usage réelles.",
      },
    ],
    faqs: [
      {
        q: "Dois-je développer en natif ou en cross-platform ?",
        a: "Le natif (Swift pour iOS, Kotlin pour Android) l'emporte quand vous avez besoin de performances maximales, d'une intégration poussée avec l'appareil ou d'un ressenti plateforme irréprochable — c'est ce que nous avons utilisé pour des apps de VTC avec suivi GPS en direct. Flutter ou React Native l'emportent quand budget et délai de mise sur le marché priment et que l'app relève surtout du contenu, du commerce ou du workflow. Nous recommandons au cas par cas, et comme nous développons les deux, le conseil est impartial.",
      },
      {
        q: "Quels types d'applications TDM a-t-il développés ?",
        a: "Des apps de VTC et de transport en Swift pour des opérateurs de la région MENA, avec suivi en temps réel, transferts aéroport et portefeuilles intégrés ; une place de marché de livraison de repas native en Kotlin/Jetpack Compose pour une startup britannique reliant clients, restaurants et livreurs ; ainsi que des apps média, e-commerce et d'enregistrement audio. Les produits temps réel et géolocalisés sont une force particulière.",
      },
      {
        q: "Combien coûte une application mobile ?",
        a: "Un MVP ciblé démarre généralement autour du coût d'un projet web sérieux ; les apps avec fonctionnalités temps réel, paiements et utilisateurs multi-acteurs coûtent davantage. Le cross-platform réduit le coût quand les deux stores comptent dès le premier jour. Après la phase de découverte, vous recevez un devis fixe par jalons — jamais une estimation horaire sans fin.",
      },
      {
        q: "Combien de temps faut-il pour lancer une application ?",
        a: "Un MVP bien cadré prend généralement 3 à 5 mois du lancement du projet à la publication sur les stores, recherche UX, design, développement, recette et revue compris. Les apps temps réel complexes demandent plus de temps. Notre approche par phases signifie que vous testez des builds fonctionnels sur votre propre téléphone en quelques semaines, sans attendre des mois pour un premier aperçu.",
      },
      {
        q: "Gérez-vous la soumission à l'App Store et à Google Play ?",
        a: "Oui, de bout en bout : création des comptes développeur, fiches stores, captures d'écran et métadonnées, soumission à la revue et échanges éventuels avec Apple ou Google. Nous avons publié de nombreuses fois via les processus de revue des deux stores et concevons selon leurs directives dès le départ, si bien que l'approbation est rarement mouvementée.",
      },
      {
        q: "Développez-vous aussi le back-end dont l'app a besoin ?",
        a: "Oui. La plupart des apps sérieuses sont à moitié serveur : API, bases de données, authentification, paiements et infrastructure de push. Notre équipe de développement sur mesure construit ce back-end en Laravel ou Node.js en parallèle de l'app, pour qu'une seule équipe responsable porte tout le produit au lieu de deux prestataires qui se renvoient la faute.",
      },
    ],
    relatedCaseStudies: [
      "uk-food-delivery-app",
      "ride-hailing-apps",
    ],
  },
];

export const frSectors: Sector[] = [
  {
    slug: "media",
    name: "Média",
    tagline: "Des contenus qui arrêtent le scroll et qui vendent.",
    metaTitle: "Production média — Vidéo, UGC & photo produit | TDM",
    metaDescription:
      "La division média de TDM produit tournages vidéo, montage, publicités UGC, photo produit et créations publicitaires pour les marques e-commerce du monde entier.",
    hero: {
      headline: "Une production média pensée pour la performance.",
      sub: "Tournages vidéo, montage, publicités UGC, photographie produit et créations publicitaires — produits en interne et conçus pour convertir, pas seulement pour être beaux.",
    },
    intro: [
      "TDM Média est le pôle de production de contenus de The Digital Marketing Services. Nous concevons, tournons, montons et livrons les actifs créatifs qui alimentent l'e-commerce moderne : films de marque, vidéos produits, publicités UGC (contenu généré par les utilisateurs), photographie produit et créations pour le paid social.",
      "Chaque contenu que nous produisons est pensé pour sa diffusion. Parce que la même agence gère vos publicités, votre SEO et vos réseaux sociaux, notre équipe média sait exactement quel format, quelle accroche et quelle durée chaque plateforme récompense — et nous itérons la création à partir de vraies données de campagne, pas au goût.",
    ],
    faqs: [
      {
        q: "Quels services de production média TDM propose-t-il ?",
        a: "TDM propose des tournages vidéo, du montage vidéo professionnel, des publicités UGC (contenu généré par les utilisateurs), de la photographie et des shootings produits, ainsi que des créations publicitaires statiques ou animées. Nous prenons tout en charge, du concept et de l'écriture jusqu'à la livraison finale dans des formats prêts pour chaque plateforme.",
      },
      {
        q: "TDM peut-il produire du contenu à distance pour des marques internationales ?",
        a: "Oui. Notre hub de production et de montage à Lahore travaille avec des marques aux Émirats, au Royaume-Uni, aux États-Unis, en Europe, en Afrique et en Asie. Les tournages sont organisés localement quand c'est nécessaire, tandis que le montage, la post-production et l'itération créative sont centralisés pour des délais rapides.",
      },
      {
        q: "En quoi le travail média de TDM diffère-t-il d'une agence vidéo indépendante ?",
        a: "Notre équipe média travaille aux côtés de notre équipe performance marketing. Les décisions créatives s'appuient sur les données publicitaires en temps réel — accroches, formats et montages sont testés et itérés contre de véritables indicateurs de conversion, si bien que le contenu est jugé sur ses résultats, pas seulement sur son esthétique.",
      },
    ],
  },
  {
    slug: "marketing",
    name: "Marketing",
    tagline: "Une croissance qui se mesure.",
    metaTitle: "Marketing digital — SEO, performance & social | TDM",
    metaDescription:
      "La division marketing de TDM délivre performance marketing, SEO e-commerce et gestion des réseaux sociaux, reporting transparent et 100% de clients satisfaits.",
    hero: {
      headline: "Un marketing qui rend des comptes au chiffre d'affaires.",
      sub: "Performance marketing, SEO et gestion des réseaux sociaux — pilotés par une seule équipe responsable, avec des rapports chiffrés que vous pouvez vérifier.",
    },
    intro: [
      "TDM Marketing conçoit et pilote les canaux qui font croître les marques e-commerce et de services : publicité payante sur Google et Meta, référencement naturel et gestion complète des réseaux sociaux. Nous avons délivré jusqu'à 10× de retour sur investissement publicitaire et 16× de croissance du trafic organique pour nos clients.",
      "Nous travaillons comme votre équipe interne, pas comme un prestataire. La stratégie s'appuie sur l'analytics, les budgets sont gérés en toute transparence, et chaque rapport montre exactement ce que votre investissement a produit — la discipline qui a maintenu notre taux de satisfaction client à 100%.",
    ],
    faqs: [
      {
        q: "Quels services marketing TDM propose-t-il ?",
        a: "TDM propose du performance marketing (Google Ads, Meta Ads et paid social), du SEO e-commerce (on-page, off-page et technique) et le marketing et la gestion des réseaux sociaux, complétés par l'e-mail marketing et l'optimisation de la conversion en services d'appui.",
      },
      {
        q: "Quels résultats TDM a-t-il obtenus pour ses clients ?",
        a: "Parmi les résultats clients documentés : 16× de croissance du trafic organique et un ROAS soutenu de 10× pour un parfumeur des Émirats, +250% de trafic organique en trois mois pour une nouvelle entreprise de services, et un top 3 Google sur 60 mots-clés à fort trafic pour une boutique e-commerce.",
      },
      {
        q: "TDM travaille-t-il avec des entreprises hors e-commerce ?",
        a: "Oui. L'e-commerce est notre spécialité première, mais nous pilotons aussi le marketing de marques du juridique, de l'immobilier, du voyage, de l'hôtellerie et des services B2B aux Émirats, au Royaume-Uni, aux États-Unis, en Europe, en Afrique et en Asie.",
      },
    ],
  },
  {
    slug: "development",
    name: "Développement",
    tagline: "L'ingénierie des boutiques et des systèmes qui portent la croissance.",
    metaTitle: "Développement web — Shopify, WordPress, CRM/ERP | TDM",
    metaDescription:
      "TDM développe des boutiques Shopify, WordPress et Magento, des plateformes Next.js et Laravel sur mesure et des CRM/ERP — pensés pour vitesse, SEO et échelle.",
    hero: {
      headline: "Un développement qui livre et qui monte en charge.",
      sub: "Boutiques e-commerce, plateformes sur mesure et systèmes de gestion — construits par l'équipe qui les fera ensuite grandir.",
    },
    intro: [
      "TDM Développement conçoit et construit l'infrastructure digitale sur laquelle tournent les marques : vitrines Shopify, WordPress et Magento, plateformes sur mesure en Next.js, Laravel et autres stacks modernes, et systèmes CRM/ERP qui réunissent vos opérations en un seul endroit.",
      "Nous avons livré aussi bien des boutiques e-commerce phares qu'une plateforme complète de services juridiques de plus de 2 400 articles au service de clients dans plus de 20 pays. Chaque réalisation est optimisée pour le SEO, sécurisée et évolutive dès le premier jour — parce que c'est généralement la même entreprise qui répond ensuite de son marketing.",
    ],
    faqs: [
      {
        q: "Sur quelles plateformes TDM développe-t-il ?",
        a: "TDM développe sur Shopify, WordPress (y compris WooCommerce), Magento et PrestaShop, et construit des plateformes sur mesure avec Next.js, Laravel et d'autres frameworks modernes. Nous livrons également des systèmes CRM et ERP adaptés à vos opérations.",
      },
      {
        q: "TDM prend-il en charge à la fois le design et le développement ?",
        a: "Oui. Nos designers UI/UX internes assurent la recherche, les wireframes et le design haute fidélité, et nos ingénieurs implémentent, testent et déploient. Vous avez une seule équipe responsable du concept au lancement, plus un accompagnement continu après la mise en production.",
      },
      {
        q: "TDM peut-il reprendre ou reconstruire un site existant ?",
        a: "Oui. Nous auditons, reconstruisons et migrons régulièrement des sites existants — en préservant le SEO avec des redirections propres, en améliorant la vitesse et les Core Web Vitals, et en modernisant la stack sans perturber l'activité.",
      },
    ],
  },
  {
    slug: "staff-augmentation",
    name: "Renfort d'équipes",
    tagline: "Des équipes intelligentes. Des coûts réduits. De meilleurs résultats.",
    metaTitle: "Renfort d'équipes — Équipes dédiées à distance | TDM",
    metaDescription:
      "TDM recrute, encadre et forme des développeurs, designers et marketeurs dédiés depuis son hub de Lahore — le rendement d'une équipe interne à coût réduit.",
    hero: {
      headline: "Le renfort d'équipes, sans les frais de structure.",
      sub: "Des développeurs, designers et marketeurs dédiés — recrutés, encadrés et accompagnés par TDM à Lahore, travaillant à vos horaires sur vos outils.",
    },
    intro: [
      "TDM Renfort d'équipes met à la disposition des entreprises internationales des professionnels IT et marketing dédiés depuis notre hub de production de Lahore — le rendement d'une embauche interne pour une fraction du coût local. Vous choisissez les rôles ; nous gérons le sourcing, la paie, la fidélisation et la qualité.",
      "Ce sont des collaborateurs dédiés, pas des freelances : des professionnels à temps plein qui travaillent uniquement sur vos projets, alignés sur votre fuseau horaire et intégrés directement à vos workflows, pendant que TDM garde le recrutement, les RH et la gestion de la performance à sa charge — pas à la vôtre.",
    ],
    faqs: [
      {
        q: "Qu'est-ce que le renfort d'équipes ?",
        a: "Le renfort d'équipes (staff augmentation) est un modèle de recrutement dans lequel un partenaire externe recrute et emploie des professionnels dédiés qui travaillent exclusivement pour votre entreprise. TDM source, emploie, encadre et fait progresser ces collaborateurs depuis son bureau de Lahore, tandis qu'ils travaillent à vos horaires, sur vos outils, comme une extension de votre équipe.",
      },
      {
        q: "Quels rôles TDM peut-il pourvoir pour mon entreprise ?",
        a: "Développeurs (web, mobile, full-stack), designers UI/UX, marketeurs digitaux, spécialistes SEO, monteurs vidéo, créateurs de contenu et personnel de support. Si un rôle peut s'exercer à distance, nous pouvons généralement le sourcer et l'encadrer depuis notre hub de Lahore.",
      },
      {
        q: "Combien coûte le renfort d'équipes avec TDM par rapport à un recrutement local ?",
        a: "Nos clients économisent généralement 50 à 70% par rapport à une embauche locale équivalente aux États-Unis, au Royaume-Uni ou dans le Golfe, sans frais de recrutement, charges de paie ni coûts de bureaux. Vous payez un tarif mensuel unique par collaborateur dédié ; TDM absorbe le sourcing, les RH, la fidélisation et l'encadrement.",
      },
      {
        q: "Comment TDM garantit-il la qualité avec des équipes à distance ?",
        a: "Chaque collaborateur est évalué avant son affectation, travaille depuis notre bureau encadré de Lahore plutôt qu'isolé, et est accompagné par les seniors de TDM. La performance est suivie en continu, et si quelqu'un ne convient pas, nous le remplaçons sans coût supplémentaire.",
      },
    ],
  },
];
