import type { BlogPost } from "@/lib/types";
import { staffAugmentationPakistanGuide } from "./staff-augmentation-pakistan-guide";
import { ugcAdsGuide } from "./ugc-ads-guide";
import { shopifyVsCustomEcommerce } from "./shopify-vs-custom-ecommerce";
import { ecommerceSeoChecklist } from "./ecommerce-seo-checklist";
import { measuringRoasProperly } from "./measuring-roas-properly";
import { arabicSeoGuide } from "./arabic-seo-guide";
import { whenYourBusinessNeedsCrmErp } from "./when-your-business-needs-crm-erp";
import { productVideoThatConverts } from "./product-video-that-converts";

export const blogPosts: BlogPost[] = [
  staffAugmentationPakistanGuide,
  ugcAdsGuide,
  shopifyVsCustomEcommerce,
  ecommerceSeoChecklist,
  measuringRoasProperly,
  arabicSeoGuide,
  whenYourBusinessNeedsCrmErp,
  productVideoThatConverts,
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
