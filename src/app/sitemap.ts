import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { sectors } from "@/content/en/sectors";
import { allServices } from "@/content/en/services";
import { getBlogPosts, getCaseStudies } from "@/content/db";
import { offices } from "@/content/en/locations";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    "/",
    "/about/",
    "/contact/",
    "/clients/",
    "/portfolio/",
    "/case-studies/",
    "/locations/",
    "/blog/",
  ];

  const urls: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.8,
  }));

  for (const s of sectors) {
    urls.push({ url: `${site.url}/${s.slug}/`, changeFrequency: "monthly", priority: 0.9 });
  }
  for (const sv of allServices) {
    urls.push({ url: `${site.url}/${sv.sector}/${sv.slug}/`, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const cs of await getCaseStudies("en")) {
    urls.push({ url: `${site.url}/case-studies/${cs.slug}/`, changeFrequency: "yearly", priority: 0.7 });
  }
  for (const o of offices) {
    urls.push({ url: `${site.url}/locations/${o.slug}/`, changeFrequency: "yearly", priority: 0.7 });
  }
  for (const p of await getBlogPosts()) {
    urls.push({ url: `${site.url}/blog/${p.slug}/`, lastModified: p.date, changeFrequency: "yearly", priority: 0.6 });
  }

  // FR/AR mirrors of every localized page (blog and terms are EN-only)
  const localized = urls
    .filter((u) => !u.url.includes("/blog") && !u.url.includes("terms"))
    .flatMap((u) => {
      const path = u.url.slice(site.url.length);
      return (["fr", "ar"] as const).map((l) => ({
        ...u,
        url: `${site.url}/${l}${path}`,
        priority: (u.priority ?? 0.5) * 0.9,
      }));
    });

  return [...urls, ...localized];
}
