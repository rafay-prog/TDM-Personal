import type { Metadata } from "next";
import "@/app/globals.css";
import { LocaleShell } from "@/components/LocaleShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TDM: خدمات التسويق الرقمي | وكالة التسويق الداخلية لعلامتك",
    template: "%s",
  },
  description:
    "TDM وكالة رقمية متكاملة: إنتاج الميديا، التسويق بالأداء، تحسين محركات البحث، تطوير المواقع والتطبيقات، أنظمة CRM/ERP وتعزيز فرق العمل، من 8 دول وبثلاث لغات.",
  openGraph: { siteName: site.name, type: "website", locale: "ar_AE" },
};

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="ar">{children}</LocaleShell>;
}
