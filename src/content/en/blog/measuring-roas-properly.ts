import type { BlogPost } from "@/lib/types";

export const measuringRoasProperly: BlogPost = {
  slug: "measuring-roas-properly",
  title: "You're Measuring ROAS Wrong: A Practical Guide to Ad Profitability",
  metaTitle: "Measuring ROAS Properly: A Guide to Ad Profitability",
  metaDescription:
    "Platform ROAS, blended ROAS and MER measure different things. Learn which to trust, why attribution windows distort results, and how to track real profit.",
  date: "2026-07-28",
  category: "Marketing",
  excerpt:
    "Platform-reported ROAS, blended ROAS and MER are three different numbers that answer three different questions. Most brands only look at one — and it's usually the least reliable.",
  body: [
    "Ask an e-commerce founder what their ROAS is and you'll usually get one number: whatever Meta or Google Ads reported this morning. That number is real, but it isn't what most people think it is — and making budget decisions on it alone is one of the most expensive habits in performance marketing.",
    "This guide walks through the three ROAS numbers every brand should track, why they disagree, and how to turn them into a simple profitability dashboard you can actually run the business on.",
    "## Three numbers, three different questions",
    "### Platform-reported ROAS",
    "This is the ROAS inside Meta Ads Manager or Google Ads. It answers a narrow question: of the conversions this platform claims credit for, how much revenue did they generate per dollar of spend on this platform? The key word is claims. Ad platforms grade their own homework. They count view-through conversions, they can't see what other channels did, and since iOS privacy changes they increasingly model conversions they can't directly observe. Two platforms will happily claim credit for the same order.",
    "Platform ROAS is still useful — for comparing campaigns, ad sets and creatives against each other inside the same account. It is a relative signal, not an absolute truth.",
    "### Blended ROAS",
    "Blended ROAS is total revenue divided by total ad spend across all paid channels. No attribution model, no modeled conversions — just two numbers from your store backend and your ad invoices. If you spent $20,000 across Meta and Google last month and did $130,000 in revenue, your blended ROAS is 6.5×.",
    "Its weakness is the opposite of the platform number's: it gives paid ads credit for everything, including orders that would have arrived through organic search, email or word of mouth anyway. A brand with strong SEO can show a flattering blended ROAS while its ads quietly underperform.",
    "### MER (marketing efficiency ratio)",
    "MER widens the denominator to all marketing spend — ads, agency or freelancer fees, influencer payments, content production. It answers the question a CFO cares about: for every dollar the business spends on marketing, how much revenue comes back? MER is the number that should trend on your monthly management dashboard, because it can't be gamed by shifting budget between channels or switching attribution settings.",
    "## Attribution windows quietly change the score",
    "A 7-day click attribution window and a 1-day click window can report wildly different ROAS on identical campaigns. Neither is wrong; they are different measuring sticks. The mistake is comparing periods or platforms measured with different sticks — for example, benchmarking this quarter's Meta performance (7-day click, 1-day view) against last year's (28-day click) and concluding performance collapsed.",
    "Practical rules: pick one window per platform and freeze it. Match the window to your purchase cycle — a $30 impulse product doesn't need a 28-day window, but considered purchases do. And when comparing platform numbers to your backend, remember platforms report by conversion date within the window, while your store reports by order date, so the daily numbers will never reconcile perfectly. Weekly or monthly views reconcile far better than daily ones.",
    "## Incrementality: the question behind all of this",
    "Every ROAS metric is a proxy for the only question that matters: how much revenue would disappear if you turned the ads off? That's incrementality, and you don't need an enterprise measurement suite to get a directional answer.",
    "The simplest test is a geo holdout: pause a channel in one comparable region for two to four weeks and compare revenue against regions where it kept running. A cruder version is a spend step test — raise or cut a channel's budget by 30–50% for a defined period and watch blended revenue, not platform ROAS. Branded search campaigns are the classic offender here: they often show spectacular platform ROAS while capturing demand that would have converted through the free organic listing one position below.",
    "If a channel's platform ROAS is high but cutting it barely moves blended revenue, the platform was taking credit, not creating demand.",
    "## ROAS without contribution margin is a vanity metric",
    "A 4× ROAS sounds healthy. Whether it is depends entirely on your margins. Work out your break-even ROAS: divide 1 by your contribution margin — revenue minus cost of goods, shipping, payment fees and per-order variable costs, as a fraction of revenue. A brand with a 40% contribution margin breaks even at 2.5× ROAS; a brand at 20% needs 5× just to stop losing money on each order.",
    "This is why two brands can run identical campaigns and one scales while the other bleeds. It's also why 'what's a good ROAS?' has no universal answer. Know your break-even number before you judge any campaign, and decide deliberately whether you're optimizing for first-order profit or paying up front for customers whose lifetime value justifies a first-order loss.",
    "## When a 10× ROAS is actually real",
    "Big multiples deserve skepticism, but they do happen when the fundamentals line up. TDM has sustained a 10× blended ROAS for a UAE fragrance retailer over twelve months — not through a measurement trick, but through the conditions that make high multiples possible: strong product margins, a high repeat-purchase rate that compounds returns on acquisition spend, creative refreshed on a fixed cadence before fatigue set in, and continuous restructuring of campaigns around the products and audiences that the data — not the platform's claimed attribution — showed were incremental.",
    "The verification test for any headline ROAS claim is simple: is it blended (total revenue over total spend, from the backend), and did it hold over months rather than a cherry-picked fortnight? A platform-reported 10× over one good week is noise. A blended 10× over a year is a business.",
    "## Build a simple profitability dashboard",
    "You don't need a data warehouse to see clearly. A weekly spreadsheet with eight columns covers most brands: total revenue (from your store, not the ad platforms), total ad spend by channel, blended ROAS, MER, contribution margin percentage, contribution profit after ad spend, new-customer revenue versus returning-customer revenue, and platform-reported ROAS per channel as a directional column at the end.",
    "Review it weekly, decide on it monthly. Use platform ROAS to choose between creatives and campaigns; use blended ROAS and MER to choose budgets; use contribution profit after ad spend to judge whether the whole machine is working. When the platform number and the blended number diverge for more than a few weeks, that's your cue to run an incrementality test rather than argue about attribution.",
    "This is the reporting discipline we build into every performance marketing engagement at TDM: one accountable set of numbers, visible to the client, reconciled against the store backend — because a ROAS you can't verify is a ROAS you shouldn't scale.",
  ],
  faqs: [
    {
      q: "What is the difference between ROAS and MER?",
      a: "ROAS (return on ad spend) is revenue divided by advertising spend, usually per channel or campaign. MER (marketing efficiency ratio) is total revenue divided by total marketing spend, including ad platforms, agency fees and content production. ROAS helps optimize within channels; MER shows whether marketing as a whole is profitable.",
    },
    {
      q: "Why is my platform-reported ROAS higher than my actual revenue suggests?",
      a: "Ad platforms attribute conversions using their own models, count view-through conversions, and cannot see other channels — so Meta and Google often both claim credit for the same order, and modeled conversions inflate totals further. Blended ROAS, calculated from your store's actual revenue divided by total ad spend, is the reliable check.",
    },
    {
      q: "What is a good ROAS for e-commerce?",
      a: "It depends on contribution margin. Break-even ROAS equals 1 divided by your contribution margin: a brand keeping 40% of revenue after product, shipping and payment costs breaks even at 2.5×, while a 20%-margin brand needs 5×. A 'good' ROAS is one comfortably above your own break-even, sustained at meaningful spend.",
    },
    {
      q: "How can I test whether my ads are actually driving incremental sales?",
      a: "Run a holdout test: pause a channel in one comparable region, or cut its budget 30–50% for two to four weeks, and watch total blended revenue rather than platform metrics. If revenue barely moves, the channel was claiming credit for sales that would have happened anyway; if revenue drops in proportion, the spend is genuinely incremental.",
    },
  ],
};
