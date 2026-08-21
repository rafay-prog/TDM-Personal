import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // /admin is the content editor. It is behind a GitHub login, but there is
    // no reason for it to appear in search results either.
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin/"] }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
