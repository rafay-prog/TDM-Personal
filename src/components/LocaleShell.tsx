import { asset } from "@/lib/asset-manifest";
import { Montserrat, Noto_Sans_Arabic } from "next/font/google";
import type { Locale } from "@/lib/types";
import { isRtl } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { BackToTop } from "@/components/motion/BackToTop";
import { ui } from "@/content/ui";
import { getContent } from "@/content";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});
const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-ar",
});

export function LocaleShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const content = getContent(locale);
  const offices = content.offices;

  // Real, already-translated copy for the header's mega-menus. Built here
  // because Header is a client component and cannot reach the content layer.
  const megaSectors = content.sectors
    .filter((s) => content.services.some((sv) => sv.sector === s.slug))
    .map((s) => ({
      slug: s.slug,
      name: s.name,
      tagline: s.tagline,
      services: content.services
        .filter((sv) => sv.sector === s.slug)
        .map((sv) => ({ slug: sv.slug, name: sv.navLabel ?? sv.name, desc: sv.shortDesc })),
    }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: "TDM Services",
    url: site.url,
    logo: `${site.url}${asset("branding/logo.png")}`,
    email: site.email,
    telephone: site.phone,
    slogan: site.tagline,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 12 A Street, Al Qusais Industrial Area 1",
      addressLocality: "Dubai",
      addressCountry: "AE",
      postOfficeBoxNumber: "231578",
    },
    location: offices
      .filter((o) => o.address)
      .map((o) => ({
        "@type": "Place",
        name: `TDM ${o.city ?? o.country}`,
        address: { "@type": "PostalAddress", streetAddress: o.address, addressCountry: o.country },
      })),
    knowsLanguage: ["en", "fr", "ar"],
  };

  return (
    <html lang={locale} dir={isRtl(locale) ? "rtl" : "ltr"} className={`${montserrat.variable} ${notoArabic.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <JsonLd data={organizationSchema} />
        <Header locale={locale} megaSectors={megaSectors} />
        <main>{children}</main>
        <Footer locale={locale} />
        <BackToTop label={ui[locale].backToTop} />
      </body>
    </html>
  );
}
