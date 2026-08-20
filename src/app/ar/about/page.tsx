import { AboutView } from "@/views/CompanyViews";
import { localizedMetadata } from "@/lib/meta";
import { getContent } from "@/content";

const locale = "ar" as const;

export function generateMetadata() {
  const p = getContent(locale).pages.about;
  return localizedMetadata(locale, "/about/", p.metaTitle, p.metaDescription);
}

export default function Page() {
  return <AboutView locale={locale} />;
}
