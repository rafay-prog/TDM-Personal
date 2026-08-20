import { PortfolioView } from "@/views/CompanyViews";
import { localizedMetadata } from "@/lib/meta";
import { getContent } from "@/content";

const locale = "en" as const;

export function generateMetadata() {
  const p = getContent(locale).pages.portfolioPage;
  return localizedMetadata(locale, "/portfolio/", p.metaTitle, p.metaDescription);
}

export default function Page() {
  return <PortfolioView locale={locale} />;
}
