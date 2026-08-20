import { ClientsView } from "@/views/CompanyViews";
import { localizedMetadata } from "@/lib/meta";
import { getContent } from "@/content";

const locale = "en" as const;

export function generateMetadata() {
  const p = getContent(locale).pages.clientsPage;
  return localizedMetadata(locale, "/clients/", p.metaTitle, p.metaDescription);
}

export default function Page() {
  return <ClientsView locale={locale} />;
}
