import { LocationView } from "@/views/LocationViews";
import { localizedMetadata } from "@/lib/meta";
import { getContent } from "@/content";

const locale = "ar" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent(locale).offices.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const o = getContent(locale).offices.find((x) => x.slug === slug);
  if (!o) return {};
  return localizedMetadata(locale, `/locations/${o.slug}/`, o.metaTitle, o.metaDescription);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LocationView locale={locale} slug={slug} />;
}
