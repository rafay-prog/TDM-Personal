import { CaseStudiesIndexView } from "@/views/CaseStudyViews";
import { localizedMetadata } from "@/lib/meta";
import { getContent } from "@/content";

const locale = "ar" as const;

export function generateMetadata() {
  const p = getContent(locale).pages.caseStudiesPage;
  return localizedMetadata(locale, "/case-studies/", p.metaTitle, p.metaDescription);
}

export default function Page() {
  return <CaseStudiesIndexView locale={locale} />;
}
