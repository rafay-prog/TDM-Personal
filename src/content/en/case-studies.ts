import type { CaseStudy } from "@/lib/types";
import { loadCaseStudies } from "../from-files";

/**
 * English case studies, read from /content/case-studies/en at build time.
 *
 * anonymous: true until the client is approved for public naming. While
 * anonymous, only publicName is rendered — never client.
 */
export const caseStudies: CaseStudy[] = loadCaseStudies("en");

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
