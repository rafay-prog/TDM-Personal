import type { Metadata } from "next";
import "@/app/globals.css";
import { LocaleShell } from "@/components/LocaleShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TDM: The Digital Marketing Services | Your In-House Marketing Agency",
    template: "%s",
  },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", locale: "en_US" },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell locale="en">{children}</LocaleShell>;
}
