import { LocationsIndexView } from "@/views/LocationViews";
import { localizedMetadata } from "@/lib/meta";
import { getContent } from "@/content";

const locale = "en" as const;

export function generateMetadata() {
  const p = getContent(locale).pages.locationsPage;
  return localizedMetadata(locale, "/locations/", p.metaTitle, p.metaDescription);
}

export default function Page() {
  return <LocationsIndexView locale={locale} />;
}
