# Deploying thedigitalmarketing.services

## Build

```bash
npm install
npm run build
```

The complete static site is written to `out/` — plain HTML/CSS/JS, no server needed.

Before building for production, set the contact-form key (free at https://web3forms.com,
registered to the email that should receive inquiries):

```bash
# PowerShell
$env:NEXT_PUBLIC_WEB3FORMS_KEY = "your-key-here"; npm run build
```

## Option A — Vercel (recommended)

1. Push this folder to a Git repo and import it in Vercel (framework: Next.js — it detects
   the static export automatically), or run `npx vercel deploy` from this folder.
2. Copy `deploy/vercel.json` to the project root as `vercel.json` (it carries the 301
   redirects from the old WordPress URLs).
3. In Vercel → Domains, add `thedigitalmarketing.services` and follow the DNS instructions
   (point the domain's A/CNAME records at Vercel).

## Option B — Existing cPanel/Apache hosting

1. Run `npm run build`.
2. Upload the **contents** of `out/` to `public_html/` (replacing the WordPress site —
   back it up first: files + database).
3. `out/.htaccess` is already included — it carries the 301 redirects and caching rules.

## After go-live (either option)

1. Verify a few old URLs 301 correctly, e.g.
   `/search-engine-optimization-services/` → `/marketing/seo/`.
2. In Google Search Console, submit `https://thedigitalmarketing.services/sitemap.xml`.
3. Keep the old WordPress database backup for 30 days in case content needs recovering.

## Content still pending (safe to launch without, better with)

- `NEXT_PUBLIC_WEB3FORMS_KEY` — until set, the contact form shows an error directing
  users to email instead. **Set this before launch.**
- Client approval list (`E:\TDM\build\client-approval-list.md`) — case studies are
  anonymized by default; flip `anonymous: false` in
  `src/content/en/case-studies.ts` (+ fr/ar files) per approved client.
- Team photos (`src/content/en/team.ts` + `/public/team/`), media showreel links
  (`videos` arrays in `src/content/en/services/media.ts`), WhatsApp + social links
  (`src/lib/site.ts`), France/Bulgaria office addresses
  (`src/content/en/locations.ts`).
