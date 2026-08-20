import { HomeView } from "@/views/HomeView";
import { localizedMetadata } from "@/lib/meta";
import { getContent } from "@/content";

const locale = "en" as const;

export function generateMetadata() {
  const p = getContent(locale).pages.home;
  return localizedMetadata(locale, "/", p.metaTitle, p.metaDescription);
}

export default function Page() {
  return <HomeView locale={locale} />;
}
