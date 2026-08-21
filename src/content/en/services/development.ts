import type { Service } from "@/lib/types";

export const developmentServices: Service[] = [
  {
    slug: "wordpress",
    sector: "development",
    name: "WordPress Development",
    navLabel: "WordPress",
    shortDesc:
      "Custom WordPress and WooCommerce sites built for speed, SEO and easy content management: from corporate sites to content platforms with thousands of pages.",
    metaTitle: "WordPress Development Services | TDM",
    metaDescription:
      "TDM builds custom WordPress and WooCommerce websites: fast, secure, SEO-optimized and easy to manage. Corporate sites, content platforms and online stores.",
    hero: {
      headline: "WordPress sites built to rank, load fast and grow.",
      sub: "Custom themes, WooCommerce stores and content platforms: engineered by TDM with clean code, tight security and SEO baked in from the first commit.",
    },
    intro: [
      "TDM's WordPress development service designs and builds custom WordPress websites for businesses that need a fast, secure, easy-to-manage site: corporate websites, service businesses, content publishers and WooCommerce stores. Every site we ship is SEO-optimized, secure and scalable, built on a custom theme rather than a bloated template.",
      "WordPress powers a huge share of the web precisely because it can do almost anything, which is also why so many WordPress sites end up slow, hacked or impossible to edit. We build the opposite: lean custom themes, only the plugins a site actually needs, hardened security, and an admin experience your team can use without calling a developer.",
      "We have used WordPress to ship everything from brochure sites for Dubai service companies to a bilingual legal-content platform with 2,400+ articles serving clients in more than 20 countries. Because TDM also runs SEO and paid campaigns, our builds are structured for marketing from day one: clean URLs, fast Core Web Vitals, schema markup and analytics wired in before launch.",
    ],
    features: [
      {
        title: "Custom theme development",
        desc: "Hand-built themes designed around your brand and content: no page-builder bloat, no template lock-in, and load times that off-the-shelf themes can't match.",
      },
      {
        title: "WooCommerce stores",
        desc: "Full e-commerce on WordPress: product catalogs, payment gateways, shipping rules, and checkout flows optimized for conversion.",
      },
      {
        title: "Content platforms at scale",
        desc: "Architecture for sites with hundreds or thousands of pages: custom post types, taxonomies, multilingual setups and editorial workflows that keep large libraries manageable.",
      },
      {
        title: "SEO-first engineering",
        desc: "Semantic markup, schema, clean URL structures, image optimization and Core Web Vitals tuning built into the theme itself: not bolted on with plugins afterwards.",
      },
      {
        title: "Security hardening & maintenance",
        desc: "Locked-down admin access, managed updates, malware monitoring and automated backups, so your site stays online and uncompromised.",
      },
      {
        title: "Rebuilds & migrations",
        desc: "We take over neglected or slow WordPress sites, rebuild them properly, and migrate content with full redirect maps so existing rankings survive the move.",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        desc: "We map your business goals, audience, content structure and competitive landscape, then define the sitemap, features and technical plan for the build.",
      },
      {
        title: "Design & Prototyping",
        desc: "Our designers produce wireframes and high-fidelity mockups aligned with your brand, so you approve exactly what will be built before development starts.",
      },
      {
        title: "Development",
        desc: "We build a custom theme with clean, scalable code, configure only the plugins the site needs, and structure everything for speed and SEO.",
      },
      {
        title: "Testing & QA",
        desc: "Every template is tested for performance, responsiveness, accessibility and security across devices and browsers before anyone outside the team sees it.",
      },
      {
        title: "Deployment & Support",
        desc: "We handle hosting setup, launch and redirects, then provide ongoing maintenance, updates and improvements after go-live.",
      },
    ],
    faqs: [
      {
        q: "Why choose custom WordPress development over a pre-made theme?",
        a: "Pre-made themes carry code for hundreds of features you'll never use, which slows pages down and creates security holes. A custom theme contains only what your site needs, so it loads faster, ranks better and is far easier to maintain. It also means your site looks like your brand, not like a template thousands of other businesses use.",
      },
      {
        q: "Can TDM handle large, content-heavy WordPress sites?",
        a: "Yes, that's a specialty. We built and maintain a bilingual legal-services platform on this stack with more than 2,400 articles serving clients in over 20 countries. Custom post types, structured taxonomies and a tuned hosting setup keep sites that size fast and manageable.",
      },
      {
        q: "Will my WordPress site be SEO-friendly?",
        a: "Every site TDM builds is SEO-optimized by default: semantic HTML, schema markup, clean URLs, optimized images and strong Core Web Vitals. Because TDM also runs SEO campaigns, our developers build to the same standards our SEO team audits against.",
      },
      {
        q: "Can you fix or rebuild my existing WordPress site?",
        a: "Yes. We regularly take over sites that are slow, outdated or previously hacked. Depending on the audit, we either clean up and harden the existing build or rebuild it on a custom theme, migrating all content with proper 301 redirects so you keep your search rankings.",
      },
      {
        q: "Will I be able to edit the site myself?",
        a: "That's the point of WordPress. We structure the admin so your team can edit pages, publish posts and update products without touching code, and we provide a handover walkthrough at launch. Anything beyond day-to-day editing is covered by our support plans.",
      },
      {
        q: "How long does a WordPress project take?",
        a: "A typical corporate site takes 4–8 weeks from kickoff to launch; WooCommerce stores and large content platforms take longer depending on catalog and content volume. We give you a concrete timeline after the discovery phase, and we stick to it.",
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
    name: "Shopify Development",
    navLabel: "Shopify",
    shortDesc:
      "Shopify and Shopify Plus stores designed and built to convert: custom themes, app integrations, and migrations handled without losing sales or rankings.",
    metaTitle: "Shopify Development Services | TDM",
    metaDescription:
      "TDM designs and builds Shopify stores that convert: custom themes, app integrations, migrations and CRO. One client grew online sales 70% after relaunch.",
    hero: {
      headline: "Shopify stores engineered to sell.",
      sub: "Custom theme design, conversion-focused build-outs and clean migrations: from the agency that also runs the ads and SEO that fill your store with buyers.",
    },
    intro: [
      "TDM's Shopify development service builds and relaunches Shopify stores for brands that want an online store that actually converts: direct-to-consumer brands, retailers moving online, and merchants outgrowing their current setup. As with everything TDM ships, each store is SEO-optimized, secure and scalable from day one.",
      "Shopify handles hosting, checkout and PCI compliance, so the difference between an average store and a great one comes down to what's built on top: theme speed, product page persuasion, navigation, and the app stack. We design custom themes around your catalog and customer, integrate the tools you need, and cut the ones silently slowing your store down.",
      "The results are measurable. After we rebuilt and relaunched one retailer's store, their online sales grew 70%. Because our developers sit next to our performance-marketing and SEO teams, every build decision (from collection structure to page speed) is made with traffic and conversion in mind, not just aesthetics.",
    ],
    features: [
      {
        title: "Custom Shopify theme design & build",
        desc: "Bespoke storefronts built on Shopify's Online Store 2.0 architecture: fast, on-brand and structured around how your customers actually shop.",
      },
      {
        title: "Conversion-focused product & checkout flows",
        desc: "Product pages, collection layouts, cart and checkout customizations designed from real e-commerce data to lift add-to-cart and completed-order rates.",
      },
      {
        title: "App integration & custom functionality",
        desc: "Reviews, subscriptions, loyalty, bundles, ERP and shipping integrations: implemented cleanly, with the app stack audited so it never drags down page speed.",
      },
      {
        title: "Platform migrations",
        desc: "Moves from WooCommerce, Magento, PrestaShop or legacy platforms to Shopify with products, customers, orders and SEO redirects handled so trading never stops.",
      },
      {
        title: "SEO & speed optimization",
        desc: "Structured data, collection and product SEO architecture, image optimization and Core Web Vitals tuning: built in, because TDM's SEO team holds our builds to its own standards.",
      },
      {
        title: "Localization & regional payments",
        desc: "Multi-currency, multi-language storefronts and regional payment options (including installment providers popular in Gulf markets) for brands selling across borders.",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        desc: "We study your catalog, customers, competitors and current store data to define the store architecture, feature set and migration plan.",
      },
      {
        title: "Design & Prototyping",
        desc: "High-fidelity designs of your key templates (home, collection, product, cart) so you see and approve the store before a line of theme code is written.",
      },
      {
        title: "Development",
        desc: "We build the theme, configure apps and integrations, load products and set up payments, shipping and taxes on a private preview store.",
      },
      {
        title: "Testing & QA",
        desc: "Full purchase-path testing on real devices (browsing, search, cart, discount codes, checkout and transactional emails) plus speed and SEO checks.",
      },
      {
        title: "Deployment & Support",
        desc: "We manage the launch or migration cutover, monitor closely through the first weeks, and provide ongoing optimization and support.",
      },
    ],
    faqs: [
      {
        q: "Should I use a Shopify theme or a custom-built store?",
        a: "It depends on stage. For a new brand validating demand, a well-configured premium theme is often the right call, and we do that too. Once you have steady traffic, a custom theme pays for itself through better speed and conversion. We'll tell you honestly which side of that line you're on.",
      },
      {
        q: "What results can a Shopify rebuild actually deliver?",
        a: "One retailer we work with saw online sales grow 70% after we relaunched their store: same products, same brand, but a faster site, clearer navigation and product pages built to convert. Results vary by starting point, which is why every project begins with an audit of your current store's data.",
      },
      {
        q: "Can TDM migrate my store to Shopify without losing SEO?",
        a: "Yes. We map every existing URL to its new equivalent with 301 redirects, carry over metadata and structured data, and re-verify search console after cutover. Migrations are scheduled to minimize downtime, so you keep both your rankings and your revenue through the move.",
      },
      {
        q: "Do you work with Shopify Plus?",
        a: "Yes. For higher-volume merchants we build on Shopify Plus, including checkout extensibility, Shopify Functions for custom discount and shipping logic, expansion stores for new markets, and automation via Shopify Flow.",
      },
      {
        q: "Can you also market the store after launch?",
        a: "That's TDM's core advantage. The same agency that builds your store can run its SEO, Google and Meta ads, email flows and social content. Our marketing team has delivered results like 16x organic traffic growth and sustained 10x ROAS for e-commerce clients, and stores we build are engineered for those campaigns from the start.",
      },
      {
        q: "How much does a Shopify store cost to build?",
        a: "A theme-based setup starts at a few thousand dollars; fully custom builds and Plus projects scale with complexity. After a discovery call we provide a fixed, itemized quote: no open-ended hourly billing, and no surprise line items at launch.",
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
    name: "Magento Development",
    navLabel: "Magento",
    shortDesc:
      "Magento (Adobe Commerce) development for complex catalogs and B2B commerce: custom modules, integrations, performance tuning and version upgrades.",
    metaTitle: "Magento Development Services | TDM",
    metaDescription:
      "TDM builds and maintains Magento / Adobe Commerce stores: custom modules, ERP integrations, performance optimization, upgrades and migrations.",
    hero: {
      headline: "Magento development for serious commerce.",
      sub: "Complex catalogs, B2B pricing, multi-store setups and deep integrations: engineered by TDM to stay fast, secure and maintainable.",
    },
    intro: [
      "TDM's Magento development service builds, extends and maintains Magento Open Source and Adobe Commerce stores for merchants whose requirements outgrow simpler platforms: large or complex catalogs, B2B price lists, multi-store and multi-currency operations, and deep ERP or warehouse integrations. Like every TDM build, each store is SEO-optimized, secure and scalable.",
      "Magento's power is also its risk: in inexperienced hands it becomes slow, fragile and expensive to change. Our engineers work with Magento the way it's meant to be used (proper module development instead of core hacks, sensible extension choices, and a caching and hosting architecture tuned for the platform) so your store stays fast as the catalog and traffic grow.",
      "We also rescue existing Magento stores: performance audits, security patching, upgrades from end-of-life versions, and full re-platforms when Magento is genuinely the wrong fit. Because we build on Shopify, WordPress and custom stacks too, our recommendation is based on your business, not on the only platform we know.",
    ],
    features: [
      {
        title: "Custom module development",
        desc: "Bespoke Magento modules built to platform standards: custom pricing logic, checkout steps, product types and admin tooling that survive upgrades.",
      },
      {
        title: "B2B & complex catalog builds",
        desc: "Tiered and customer-specific pricing, quote workflows, company accounts, configurable and bundled products, and catalogs running into the tens of thousands of SKUs.",
      },
      {
        title: "ERP, CRM & warehouse integrations",
        desc: "Two-way synchronization of products, stock, orders and customers with ERP, CRM, POS and fulfillment systems, so operations run from one source of truth.",
      },
      {
        title: "Performance optimization",
        desc: "Full-page caching, database and indexer tuning, image and frontend optimization, and hosting architecture that keeps a heavy platform feeling light.",
      },
      {
        title: "Upgrades, patches & security",
        desc: "Version upgrades from end-of-life releases, timely security patching and hardening: keeping your store compliant, supported and safe.",
      },
      {
        title: "Multi-store & international setups",
        desc: "Multiple storefronts, languages, currencies and tax regimes managed from a single Magento installation, with SEO handled correctly per market.",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        desc: "We audit your catalog complexity, integrations, traffic and business rules to scope the right Magento architecture, or advise a different platform if it fits better.",
      },
      {
        title: "Design & Prototyping",
        desc: "Designs for your key commerce templates and B2B workflows, prototyped and approved before development begins.",
      },
      {
        title: "Development",
        desc: "Standards-compliant module and theme development, integration builds and data migration on a staging environment mirroring production.",
      },
      {
        title: "Testing & QA",
        desc: "Load testing, full purchase-path and pricing-rule testing, integration verification and security review before any cutover.",
      },
      {
        title: "Deployment & Support",
        desc: "A planned, low-downtime launch followed by monitoring, patching and a retained support arrangement for ongoing changes.",
      },
    ],
    faqs: [
      {
        q: "Is Magento the right platform for my store?",
        a: "Magento earns its complexity when you have a large or highly configurable catalog, B2B pricing rules, multiple storefronts or deep back-office integrations. If your requirements are simpler, Shopify or WooCommerce will be cheaper to run, and since TDM builds on all of these platforms, we'll recommend what fits rather than what we happen to sell.",
      },
      {
        q: "My Magento store is slow. Can you fix it?",
        a: "Usually, yes, and without a rebuild. Most slow Magento stores suffer from misconfigured caching, poorly coded third-party extensions or undersized hosting. We run a performance audit, fix the highest-impact issues first, and give you before/after numbers on page speed and Core Web Vitals.",
      },
      {
        q: "We're on an old Magento version. What are our options?",
        a: "Running an end-of-life version means no security patches, which is a real commercial risk. We handle upgrades to current Magento releases, including extension compatibility and theme migration. Where an upgrade doesn't make business sense, we plan and execute a re-platform to Shopify or a custom stack: with SEO preserved through full redirect mapping.",
      },
      {
        q: "Can Magento connect to our ERP or warehouse system?",
        a: "Yes, that's one of the main reasons merchants choose it. We build integrations that sync stock, pricing, orders and customer data both ways, whether through native APIs, middleware or custom connectors. We've delivered similar operational integrations across our CRM/ERP practice as well.",
      },
      {
        q: "Do you provide ongoing Magento support?",
        a: "Yes. Magento is not a launch-and-leave platform: it needs regular patching, extension updates and performance monitoring. Most of our Magento clients keep us on a monthly support retainer that covers maintenance plus a bank of development hours for improvements.",
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
    name: "Custom Web Development",
    navLabel: "Custom Development",
    shortDesc:
      "Custom platforms and web applications in Next.js, Laravel and other modern stacks: for products and workflows no off-the-shelf platform can handle.",
    metaTitle: "Custom Web Development: Next.js & Laravel | TDM",
    metaDescription:
      "TDM builds custom web platforms and applications with Next.js, Laravel and modern stacks: secure, scalable, SEO-ready software designed around your business.",
    hero: {
      headline: "Custom software for businesses that outgrow templates.",
      sub: "Web platforms, portals and applications built with Next.js, Laravel and other modern stacks: architected by TDM to scale with your business, not against it.",
    },
    intro: [
      "TDM's custom development service designs and builds web platforms and applications from scratch: for businesses whose product, workflow or scale doesn't fit any off-the-shelf platform. Marketplaces, booking systems, client portals, content platforms and internal tools: if you can define it, our engineers can architect and build it, SEO-optimized, secure and scalable from the first release.",
      "We work in modern, proven stacks: Next.js and React on the frontend, Laravel and Node.js on the backend, with the databases, APIs and cloud infrastructure each project calls for. We also build on PrestaShop and other established platforms when a hybrid approach gets you to market faster. The stack is chosen for your requirements and your future hiring pool, never for our convenience.",
      "This is the practice behind some of our most ambitious work, including a bilingual legal-services platform with more than 2,400 structured articles serving clients in 20+ countries, and custom booking and portal systems for real-estate and service businesses. Custom doesn't have to mean risky: our five-step process keeps scope, budget and timeline visible at every stage.",
    ],
    features: [
      {
        title: "Next.js & React applications",
        desc: "Fast, SEO-friendly frontends with server-side rendering and modern React (the same stack this website runs on) for platforms where speed and search visibility both matter.",
      },
      {
        title: "Laravel & API backend development",
        desc: "Robust backends in Laravel and Node.js: authentication, roles and permissions, payments, business logic and clean REST or GraphQL APIs your future apps can build on.",
      },
      {
        title: "Portals, marketplaces & booking systems",
        desc: "Multi-sided platforms with user dashboards, listings, search, scheduling, payments and messaging: the product categories templates can't reach.",
      },
      {
        title: "Third-party integrations",
        desc: "Payment gateways, CRMs, mapping, communication and logistics APIs connected into one coherent system instead of a pile of disconnected tools.",
      },
      {
        title: "Platform-plus-custom builds",
        desc: "When it's smarter than starting from zero, we extend WordPress, PrestaShop or Shopify with custom modules: platform economics with custom capability.",
      },
      {
        title: "Scalable, secure architecture",
        desc: "Cloud hosting, automated deployments, monitoring, backups and security hardening designed in from day one, so growth is a scaling exercise, not a rewrite.",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        desc: "We map your business goals, users and workflows into a concrete specification: features, data model, architecture, milestones and a fixed scope you sign off on.",
      },
      {
        title: "Design & Prototyping",
        desc: "UX wireframes and high-fidelity UI designs for every key screen, prototyped so stakeholders can click through the product before it's built.",
      },
      {
        title: "Development",
        desc: "Iterative development in short cycles with staging previews, so you see working software early and steer it: no six-month silence before a big reveal.",
      },
      {
        title: "Testing & QA",
        desc: "Automated and manual testing of functionality, performance, security and edge cases, so launch day is a formality rather than a gamble.",
      },
      {
        title: "Deployment & Support",
        desc: "Production deployment with monitoring and backups in place, documentation and handover, and ongoing support or feature development after launch.",
      },
    ],
    faqs: [
      {
        q: "When does custom development make more sense than Shopify or WordPress?",
        a: "When the platform starts fighting you: workflows that plugins can't model, unique business logic, multi-sided marketplaces, or performance and scale needs a template stack can't meet. If a platform genuinely fits, we'll say so: TDM builds on Shopify, WordPress, Magento and PrestaShop too, so we have no incentive to oversell custom work.",
      },
      {
        q: "What technologies does TDM use for custom builds?",
        a: "Primarily Next.js and React on the frontend and Laravel or Node.js on the backend, with PostgreSQL or MySQL and modern cloud hosting. We choose per project based on requirements, integrations and who will maintain the system long-term, and we document our choices so you're never locked in.",
      },
      {
        q: "How do you keep custom projects on budget and on time?",
        a: "With a fixed, written specification before development starts, milestone-based delivery, and working software on staging from the early weeks. Scope changes are priced and agreed before they're built. It's the discipline behind projects like our 2,400-article legal platform shipping on schedule despite bilingual content across 20+ countries.",
      },
      {
        q: "Who owns the code when the project is done?",
        a: "You do. On final payment you receive the full source code, repository access, infrastructure credentials and documentation. Any developer can pick up the project: though most clients keep TDM on for continued development because we know the system best.",
      },
      {
        q: "Can you take over a half-built or legacy custom project?",
        a: "Yes, and we do it often. We start with a code and infrastructure audit, give you an honest report on what's salvageable, then either stabilize and continue the existing codebase or plan a phased rebuild: whichever costs less over the life of the product.",
      },
      {
        q: "Will a custom platform be SEO-friendly?",
        a: "Yes: this is a place custom builds can beat platforms. With Next.js server-side rendering we control markup, speed, structured data and URL architecture completely. Every platform TDM ships is built to the same SEO standards our own search team audits against.",
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
    name: "CRM & ERP Development",
    navLabel: "CRM / ERP",
    shortDesc:
      "Custom CRM and ERP systems: sales pipelines, inventory, HR, finance and operations modules, integrations and dashboards built around how your business actually runs.",
    metaTitle: "CRM & ERP Development Services | TDM",
    metaDescription:
      "TDM builds custom CRM and ERP systems: sales, inventory, HR, finance and operations modules with integrations, dashboards and clean data migrations.",
    hero: {
      headline: "Business systems built around your business.",
      sub: "Custom CRM and ERP software: sales, inventory, HR, finance and operations in one system, with dashboards that show you the whole company at a glance.",
    },
    intro: [
      "TDM's CRM and ERP development service builds custom business-management systems for companies that have outgrown spreadsheets and off-the-shelf tools: a CRM shaped around your actual sales process, and ERP modules covering inventory, HR, finance and operations. It's for businesses whose workflows are their competitive edge, and who are tired of bending those workflows to fit generic software.",
      "Off-the-shelf CRMs and ERPs charge per seat forever and still make you work their way. A custom system inverts that: it models your pipeline stages, your approval chains, your stock locations and your reporting lines exactly, with no license fees multiplying as you hire. We build only the modules you need now, on an architecture that lets the next module slot in later.",
      "Every system ships secure, scalable and integrated: connected to your website, store, accounting tools and communication channels, with role-based access and dashboards that turn operational data into decisions. And when you're moving off legacy tools, we migrate your historical data carefully: cleaned, deduplicated and verified, not just dumped.",
    ],
    features: [
      {
        title: "Custom CRM development",
        desc: "Lead capture, pipeline stages, contact histories, task automation and follow-up workflows modeled on how your team actually sells: not on a vendor's template.",
      },
      {
        title: "ERP modules: inventory, HR, finance & operations",
        desc: "Stock and warehouse management, purchasing, payroll and attendance, invoicing and expenses, and operations workflows: built as connected modules, adopted one at a time.",
      },
      {
        title: "Integrations with your existing tools",
        desc: "Two-way connections to your website, e-commerce store, accounting software, email and WhatsApp, payment gateways and logistics providers, ending double data entry.",
      },
      {
        title: "Dashboards & reporting",
        desc: "Real-time role-based dashboards (sales performance, stock levels, cash position, team productivity) replacing the monthly spreadsheet scramble with live numbers.",
      },
      {
        title: "Data migration from legacy systems",
        desc: "Structured migration from spreadsheets and old software: mapped, cleaned, deduplicated and verified against the source before the old system is retired.",
      },
      {
        title: "Role-based access & security",
        desc: "Granular permissions, audit trails, encrypted data and reliable backups, so sensitive HR and finance data is exactly as visible as it should be, and no more.",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        desc: "We sit with the people who do the work (sales, warehouse, HR, finance) to map real workflows, then define modules, data model and rollout order.",
      },
      {
        title: "Design & Prototyping",
        desc: "Clickable prototypes of the core screens your team will live in daily, refined with their feedback before development begins: the cheapest time to change anything.",
      },
      {
        title: "Development",
        desc: "Module-by-module builds with staging access throughout, integrations wired to your existing tools, and migration scripts prepared alongside the software.",
      },
      {
        title: "Testing & QA",
        desc: "Workflow testing with real scenarios and migrated data, permission and security checks, and user acceptance testing with your team before go-live.",
      },
      {
        title: "Deployment & Support",
        desc: "Phased rollout with training and documentation, a hypercare period after launch, and ongoing support as your processes (and the system) evolve.",
      },
    ],
    faqs: [
      {
        q: "Why build a custom CRM or ERP instead of buying one?",
        a: "Buy when a standard tool covers 90% of what you do. Build when your workflows are genuinely specific (regional operations, unusual approval chains, industry quirks) or when per-seat licensing across a growing team costs more over three years than a system you own outright. We'll help you run that comparison honestly before any commitment.",
      },
      {
        q: "What modules can TDM build into an ERP?",
        a: "Inventory and warehouse management, purchasing and suppliers, sales and invoicing, HR (attendance, leave, payroll), finance and expense tracking, and operations or project workflows. Most clients start with the one or two modules causing the most pain and add others on the same platform: the architecture is designed for that from day one.",
      },
      {
        q: "Can the system integrate with our website and other software?",
        a: "Yes: integration is usually the main reason to go custom. Website leads flow straight into the CRM, store orders update inventory in real time, invoices sync with your accounting software, and notifications reach your team by email or WhatsApp. One connected system instead of five disconnected tools.",
      },
      {
        q: "How do you migrate our existing data safely?",
        a: "We export from your current tools, map every field to the new structure, clean and deduplicate the records, and run trial migrations on staging that your team verifies against the source. Only after sign-off does the final migration run, and the legacy system stays available read-only until you're confident.",
      },
      {
        q: "How long does a custom CRM or ERP project take?",
        a: "A focused CRM typically takes 8–12 weeks to first release; multi-module ERP systems roll out over several months, module by module, so your team gets value early instead of waiting for a big bang. Discovery produces a concrete milestone plan before you commit to the build.",
      },
      {
        q: "What happens after launch?",
        a: "You own the source code and data outright. Most clients keep TDM on a support arrangement covering maintenance, user requests and new modules, but you're never locked in, and full documentation means any competent team can take over.",
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
    name: "Mobile App Development",
    navLabel: "Mobile Apps",
    shortDesc:
      "Native iOS (Swift), native Android (Kotlin & Jetpack Compose) and cross-platform (Flutter, React Native) apps: from UX research to App Store and Play Store release.",
    metaTitle: "Mobile App Development: iOS & Android | TDM",
    metaDescription:
      "TDM builds native iOS (Swift), Android (Kotlin/Jetpack Compose) and cross-platform (Flutter, React Native) apps: from UX research to store release and beyond.",
    hero: {
      headline: "Mobile apps users keep, not delete.",
      sub: "Native iOS and Android, and cross-platform builds in Flutter and React Native: designed from UX research and shipped through the App Store and Google Play by TDM.",
    },
    intro: [
      "TDM's mobile app development service designs and builds iOS and Android apps for startups and established businesses: native apps in Swift and Kotlin when performance and platform feel matter most, and cross-platform apps in Flutter or React Native when speed to market and budget lead. Every app we ship is user-friendly, feature-rich, secure and scalable, and we carry it all the way through App Store and Play Store release.",
      "Our portfolio spans demanding, real-world categories: ride-hailing apps built in Swift for operators across the MENA region (with live GPS tracking, booking flows and driver-passenger coordination) and a native Kotlin and Jetpack Compose food-delivery marketplace for a UK startup, connecting diners, restaurants and delivery drivers with live order tracking.",
      "What separates apps that get used from apps that get deleted is decided before the first line of code. That's why every project starts with UX research (user personas, journey mapping, wireframes and a design system) so by the time our engineers build, we're building something users have already validated.",
    ],
    features: [
      {
        title: "Native iOS development (Swift)",
        desc: "High-performance iPhone and iPad apps in Swift with clean architecture, push notifications, real-time features and full App Store submission handled: the stack behind our MENA ride-hailing work.",
      },
      {
        title: "Native Android development (Kotlin & Jetpack Compose)",
        desc: "Modern Android apps in Kotlin with Jetpack Compose UI and MVVM architecture, optimized across the fragmented Android device landscape and released through Google Play.",
      },
      {
        title: "Cross-platform apps (Flutter & React Native)",
        desc: "One codebase serving both iOS and Android: the right economics for MVPs and content or commerce apps, without the compromised feel cross-platform used to imply.",
      },
      {
        title: "UX research → design → build → release",
        desc: "User personas, journey maps, wireframes, a design system and high-fidelity UI before development, then iterative builds, QA on real devices and managed store release.",
      },
      {
        title: "Backend, APIs & real-time features",
        desc: "The server side your app runs on: REST APIs, authentication, payments, push notifications via FCM, and live features like GPS tracking, chat and order status.",
      },
      {
        title: "Post-launch support & iteration",
        desc: "Crash and analytics monitoring, OS-update compatibility, store listing optimization and a data-informed feature roadmap after release: launch is the start, not the finish.",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        desc: "We define the app's core job, users and success metrics, run UX research and personas, and scope an MVP worth shipping: not a feature list that delays it.",
      },
      {
        title: "Design & Prototyping",
        desc: "Wireframes, a design system and pixel-perfect UI for every screen, delivered as a clickable prototype you can put in real users' hands before development.",
      },
      {
        title: "Development",
        desc: "Native or cross-platform builds in agile sprints (Swift, Kotlin/Jetpack Compose, Flutter or React Native) with regular test builds on your own device throughout.",
      },
      {
        title: "Testing & QA",
        desc: "Functional, performance and security testing across real devices and OS versions, including the slow-network and edge-case scenarios that break lesser apps.",
      },
      {
        title: "Deployment & Support",
        desc: "We manage App Store and Google Play submission and review, then monitor crashes and analytics post-launch and iterate on real usage data.",
      },
    ],
    faqs: [
      {
        q: "Should I build native or cross-platform?",
        a: "Native (Swift for iOS, Kotlin for Android) wins when you need maximum performance, heavy device integration or a flawless platform feel: it's what we used for ride-hailing apps with live GPS tracking. Flutter or React Native wins when budget and time-to-market lead and the app is primarily content, commerce or workflow. We recommend per project, and we build both, so the advice is unbiased.",
      },
      {
        q: "What kinds of apps has TDM built?",
        a: "Ride-hailing and transportation apps in Swift for operators in the MENA region, with real-time tracking, airport transfers and in-app wallets; a native Kotlin/Jetpack Compose food-delivery marketplace for a UK startup connecting diners, restaurants and drivers; and media, e-commerce and audio-recording apps. Real-time, location-driven products are a particular strength.",
      },
      {
        q: "How much does a mobile app cost?",
        a: "A focused MVP typically starts around the cost of a serious website project; apps with real-time features, payments and multi-sided users cost more. Cross-platform builds reduce cost when both stores matter from day one. After discovery you get a fixed, milestone-based quote: never an open-ended hourly estimate.",
      },
      {
        q: "How long does it take to launch an app?",
        a: "A well-scoped MVP typically takes 3–5 months from kickoff to store release, including UX research, design, development, QA and review. Complex real-time apps take longer. Our phased approach means you're testing working builds on your own phone within weeks, not waiting months for a first look.",
      },
      {
        q: "Do you handle App Store and Google Play submission?",
        a: "Yes, end to end: developer account setup, store listings, screenshots and metadata, review submission and any back-and-forth with Apple or Google. We've shipped through both stores' review processes many times and design to their guidelines from the start, so approval is rarely eventful.",
      },
      {
        q: "Do you also build the backend the app needs?",
        a: "Yes. Most serious apps are half server: APIs, databases, authentication, payments and push infrastructure. Our custom-development team builds that backend alongside the app in Laravel or Node.js, so one accountable team owns the whole product instead of two vendors blaming each other.",
      },
    ],
    relatedCaseStudies: [
      "uk-food-delivery-app",
      "ride-hailing-apps",
    ],
  },
];

export function getDevelopmentService(slug: string) {
  return developmentServices.find((s) => s.slug === slug);
}
