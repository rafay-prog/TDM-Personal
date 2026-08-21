import { asset } from "@/lib/asset-manifest";
import type { TeamMember } from "@/lib/types";

/** Titles per the 2026 company profile. Photos pending from user. */
export const leadership: TeamMember[] = [
  { name: "Abdul Rehman", title: "Chief Executive Officer", photo: asset("team/abdul-rehman.webp") },
  { name: "Muhammad Adnan", title: "Chief Revenue Officer", photo: asset("team/muhammad-adnan.webp") },
  { name: "Ernest Ekwoge", title: "Chief Marketing Officer", photo: asset("team/ernest-ekwoge.webp") },
];

export const teamIntro =
  "Meet the experts behind every strategy and success story. Backed by 50+ marketing and technology specialists worldwide, each member brings unique insight to your growth.";
