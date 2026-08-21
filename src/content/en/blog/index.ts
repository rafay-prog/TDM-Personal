import type { BlogPost } from "@/lib/types";
import { loadBlogPosts } from "../../from-files";

/** Blog posts, read from /content/blog at build time. */
export const blogPosts: BlogPost[] = loadBlogPosts();

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
