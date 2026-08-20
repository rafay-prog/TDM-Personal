import { SectorView } from "@/views/SectorView";
import { localizedMetadata } from "@/lib/meta";
import { getContent } from "@/content";

const locale = "fr" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent(locale).sectors.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }) {
  const { sector } = await params;
  const s = getContent(locale).sectors.find((x) => x.slug === sector);
  if (!s) return {};
  return localizedMetadata(locale, `/${s.slug}/`, s.metaTitle, s.metaDescription);
}

export default async function Page({ params }: { params: Promise<{ sector: string }> }) {
  const { sector } = await params;
  return <SectorView locale={locale} sectorSlug={sector} />;
}
