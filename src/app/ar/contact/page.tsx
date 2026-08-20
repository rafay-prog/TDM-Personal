import { ContactView } from "@/views/CompanyViews";
import { localizedMetadata } from "@/lib/meta";
import { getContent } from "@/content";

const locale = "ar" as const;

export function generateMetadata() {
  const p = getContent(locale).pages.contact;
  return localizedMetadata(locale, "/contact/", p.metaTitle, p.metaDescription);
}

export default function Page() {
  return <ContactView locale={locale} />;
}
