import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";

/**
 * The admin gets its own route group and a bare shell — no site header, footer
 * or locale switcher. It is a tool, not a page of the site.
 */

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Content admin: TDM",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-cream text-ink">{children}</body>
    </html>
  );
}
