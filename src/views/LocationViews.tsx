import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/types";
import { href, localePrefix } from "@/lib/i18n";
import { site } from "@/lib/site";
import { getContent } from "@/content";
import { ui } from "@/content/ui";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, FaqSection, PageHero, Prose } from "@/components/Sections";
import { Reveal } from "@/components/motion/Reveal";

export function LocationsIndexView({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const t = ui[locale];
  const p = c.pages.locationsPage;

  return (
    <>
      <PageHero kicker={p.hero.kicker} headline={p.hero.headline} sub={p.hero.sub} dark />
      <Breadcrumbs
        items={[
          { label: t.home, href: href(locale, "/") },
          { label: t.locations, href: href(locale, "/locations/") },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.offices.map((o, i) => (
            <Reveal key={o.slug} delay={(i % 3) * 0.08}>
              <Link
                href={href(locale, `/locations/${o.slug}/`)}
                className="group card-lift block h-full rounded-2xl border border-mint bg-white p-6 hover:border-fern hover:shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-amber">{o.roleLabel}</p>
                <h2 className="mt-2 font-display text-xl font-semibold text-forest">
                  {o.city ? `${o.city}, ` : ""}
                  {o.country}
                </h2>
                {o.address && <p className="mt-2 text-sm text-ink/70">{o.address}</p>}
                <p className="mt-4 text-sm font-semibold text-forest group-hover:underline">{t.learnMore}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}

export function LocationView({ locale, slug }: { locale: Locale; slug: string }) {
  const c = getContent(locale);
  const t = ui[locale];
  const o = c.offices.find((x) => x.slug === slug);
  if (!o) notFound();

  return (
    <>
      {o.address && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `TDM — The Digital Marketing Services (${o.city ?? o.country})`,
            url: `${site.url}${localePrefix(locale)}/locations/${o.slug}/`,
            email: site.email,
            telephone: o.slug === "uk" ? site.phoneUk : site.phone,
            address: { "@type": "PostalAddress", streetAddress: o.address, addressCountry: o.country },
            parentOrganization: { "@type": "Organization", name: site.name, url: site.url },
          }}
        />
      )}
      <PageHero kicker={o.roleLabel} headline={o.hero.headline} sub={o.hero.sub} dark />
      <Breadcrumbs
        items={[
          { label: t.home, href: href(locale, "/") },
          { label: t.locations, href: href(locale, "/locations/") },
          { label: o.country, href: href(locale, `/locations/${o.slug}/`) },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Prose paragraphs={o.intro} />
        {o.address && (
          <div className="card-lift mt-8 max-w-md rounded-2xl border border-mint bg-white p-6 hover:border-fern hover:shadow-lg">
            <p className="kicker text-fern">{t.visitUs}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/85">{o.address}</p>
            <p className="mt-2 text-sm text-ink/70">
              <a className="hover:text-forest" href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a className="hover:text-forest" href={`tel:${site.phoneHref}`} dir="ltr">
                {o.slug === "uk" ? site.phoneUk : site.phone}
              </a>
            </p>
          </div>
        )}
      </section>

      <FaqSection faqs={o.faqs} locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}
