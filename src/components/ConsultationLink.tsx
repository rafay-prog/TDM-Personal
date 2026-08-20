import Link from "next/link";
import type { Locale } from "@/lib/types";
import { href } from "@/lib/i18n";
import { site } from "@/lib/site";

/**
 * Every "book a consultation" CTA on the site.
 *
 * Points at `site.booking` (Calendly or similar) when one is configured, and
 * falls back to the contact page when it isn't — so the button is never dead
 * while the scheduling link is still being set up. Routing all six CTAs through
 * here means switching the destination is a one-line change in site.ts.
 */
export function ConsultationLink({
  locale,
  className,
  onClick,
  children,
}: {
  locale: Locale;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (site.booking) {
    return (
      <a
        href={site.booking}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href(locale, "/contact/")} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
