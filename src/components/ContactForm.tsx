"use client";

import { useState } from "react";
import type { Locale } from "@/lib/types";
import { site } from "@/lib/site";
import { ui } from "@/content/ui";

// TODO(user): create a free access key at https://web3forms.com (submissions
// are emailed to the address the key is registered with) and set it here or
// via NEXT_PUBLIC_WEB3FORMS_KEY at build time.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const t = ui[locale].form;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: ACCESS_KEY, subject: "New inquiry - thedigitalmarketing.services", ...data }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-mint bg-white p-8 text-center">
        <p className="font-display text-xl font-semibold text-forest">{t.thanksTitle}</p>
        <p className="mt-2 text-sm text-ink/75">{t.thanksBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">{t.name}</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-1 w-full rounded-lg border border-mint bg-white px-4 py-2.5 text-sm outline-none transition-all duration-300 hover:border-sage focus:border-fern focus:ring-4 focus:ring-fern/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">{t.email}</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-1 w-full rounded-lg border border-mint bg-white px-4 py-2.5 text-sm outline-none transition-all duration-300 hover:border-sage focus:border-fern focus:ring-4 focus:ring-fern/10"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">{t.phone}</span>
          <input
            name="phone"
            autoComplete="tel"
            className="mt-1 w-full rounded-lg border border-mint bg-white px-4 py-2.5 text-sm outline-none transition-all duration-300 hover:border-sage focus:border-fern focus:ring-4 focus:ring-fern/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">{t.need}</span>
          <select
            name="service"
            className="mt-1 w-full rounded-lg border border-mint bg-white px-4 py-2.5 text-sm outline-none transition-all duration-300 hover:border-sage focus:border-fern focus:ring-4 focus:ring-fern/10"
          >
            {t.options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium">{t.message}</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1 w-full rounded-lg border border-mint bg-white px-4 py-2.5 text-sm outline-none transition-all duration-300 hover:border-sage focus:border-fern focus:ring-4 focus:ring-fern/10"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-fluid btn-shine rounded-full bg-forest px-7 py-3 font-semibold text-white shadow-md shadow-forest/20 hover:bg-pine hover:shadow-lg hover:shadow-forest/30 disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "sending" ? t.sending : t.send}
      </button>
      {status === "error" && (
        <p className="text-sm text-amber">
          {t.error}{" "}
          <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}
