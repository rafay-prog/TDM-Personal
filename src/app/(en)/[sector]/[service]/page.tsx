import { ServiceView } from "@/views/ServiceView";
import { localizedMetadata } from "@/lib/meta";
import { getContent } from "@/content";

const locale = "en" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent(locale).services.map((s) => ({ sector: s.sector, service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sector: string; service: string }> }) {
  const { sector, service } = await params;
  const sv = getContent(locale).services.find((x) => x.sector === sector && x.slug === service);
  if (!sv) return {};
  return localizedMetadata(locale, `/${sv.sector}/${sv.slug}/`, sv.metaTitle, sv.metaDescription);
}

export default async function Page({ params }: { params: Promise<{ sector: string; service: string }> }) {
  const { sector, service } = await params;
  return <ServiceView locale={locale} sectorSlug={sector} serviceSlug={service} />;
}
