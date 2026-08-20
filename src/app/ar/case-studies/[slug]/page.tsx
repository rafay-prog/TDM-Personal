import { CaseStudyView } from "@/views/CaseStudyViews";
import { localizedMetadata } from "@/lib/meta";
import { getContent } from "@/content";

const locale = "ar" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return getContent(locale).caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getContent(locale).caseStudies.find((x) => x.slug === slug);
  if (!cs) return {};
  return localizedMetadata(locale, `/case-studies/${cs.slug}/`, cs.metaTitle, cs.metaDescription);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseStudyView locale={locale} slug={slug} />;
}
