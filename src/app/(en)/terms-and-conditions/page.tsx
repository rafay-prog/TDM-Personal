import type { Metadata } from "next";
import { Breadcrumbs, PageHero, Prose } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | TDM",
  description: "Terms and conditions for engaging TDM — The Digital Marketing Services.",
  alternates: { canonical: "/terms-and-conditions/" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <PageHero kicker="Legal" headline="Terms & Conditions" dark />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions", href: "/terms-and-conditions/" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Prose
          paragraphs={[
            // TODO(user): replace with reviewed legal terms before launch.
            "These terms govern engagements with TDM — The Digital Marketing Services. A detailed statement of work, deliverables, timelines and fees is agreed in writing before every engagement begins.",
            `For any questions regarding these terms, contact ${site.email}.`,
          ]}
        />
      </section>
    </>
  );
}
