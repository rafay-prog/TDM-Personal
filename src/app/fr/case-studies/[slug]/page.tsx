import { CaseStudyView } from "@/views/CaseStudyViews";
import { localizedMetadata } from "@/lib/meta";
import { getCaseStudies, getCaseStudy } from "@/content/db";

const locale = "fr" as const;

/**
 * Pre-rendered at build time, but not limited to that set: a case study added
 * in the admin afterwards is rendered on first request and then cached, which
 * is the whole point of the content living in the database.
 */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getCaseStudies(locale)).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = await getCaseStudy(locale, slug);
  if (!cs) return {};
  return localizedMetadata(locale, `/case-studies/${cs.slug}/`, cs.metaTitle, cs.metaDescription);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseStudyView locale={locale} slug={slug} />;
}
