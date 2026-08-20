import type { Metadata } from "next";
import "@/app/globals.css";
import { LocaleShell } from "@/components/LocaleShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TDM — The Digital Marketing Services | Votre agence marketing intégrée",
    template: "%s",
  },
  description:
    "TDM est une agence digitale complète : production média, marketing à la performance, SEO, développement web et mobile, systèmes CRM/ERP et renfort d'équipes — depuis 8 pays, en anglais, français et arabe.",
  openGraph: { siteName: site.name, type: "website", locale: "fr_FR" },
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="fr">{children}</LocaleShell>;
}
