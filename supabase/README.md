# Database setup

Blog posts and case studies live in Postgres, on Supabase. The admin at `/admin`
writes to it, the site reads from it, and neither needs a deploy for a new post
to appear.

Everything else — sectors, services, locations, page copy — stays in the
codebase, because it changes when the site changes, not when someone publishes.

## One-time setup

### 1. Create the project

<https://supabase.com> → **New project**. Any region near your audience; the
free tier is enough. Save the database password somewhere safe — you will not
need it for this, but you will eventually.

### 2. Create the tables

Dashboard → **SQL Editor** → **New query**. Paste all of `supabase/schema.sql`
and run it. It is idempotent, so running it again later is safe.

That creates both tables, their indexes, `updated_at` triggers, and the row
level security policies — public read, writes only for a signed-in user.

### 3. Put the keys in `.env.local`

Dashboard → **Project Settings** → **API**:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
```

`.env.local` is gitignored, and should stay that way.

The **anon key is meant to be public** — it ships to the browser, and the RLS
policies decide what it can do. The **service role key bypasses those policies
entirely**: it is only for the seed script below, never in a component, never in
anything with `NEXT_PUBLIC_` in the name.

### 4. Move the existing content in

```bash
node scripts/seed-content.mjs
```

Reads the JSON under `/content` and upserts it: 8 blog posts and 36 case-study
rows, twelve in each language. It prints what landed and fails loudly if the
counts do not match.

Run this **once**. After it, the database is the source of truth — running it
again would overwrite anything edited in the admin since.

`/content` is kept as a record of what was migrated. Nothing reads it any more.

### 5. Create the editor's account

Dashboard → **Authentication** → **Users** → **Add user** → set an email and
password, and tick **Auto Confirm User**.

There is deliberately no sign-up form on the site — accounts are created here,
so the only people who can publish are the ones you add. To revoke access,
delete the user.

### 6. Add the same variables to Vercel

Project → **Settings** → **Environment Variables**. The two `NEXT_PUBLIC_` ones
are needed for every environment. `SUPABASE_SERVICE_ROLE_KEY` is not needed on
Vercel at all — it is only used by the seed script on your machine.

## How the site reads it

Pages that show content set `revalidate = 60`, so a visitor gets a cached render
and a newly published post appears within the minute — no deploy, no rebuild.

Pages are still pre-rendered at build for the content that exists then, but
`generateStaticParams` no longer limits what can be served: a post written
afterwards renders on first request and is cached from there.

If the database is unreachable, reads return empty rather than throwing, and the
failure is logged to the Vercel logs. A section goes missing; the site does not
go down.

## Using the admin

`/admin` — sign in with the account from step 5.

- **Blog posts** are English only.
- **Case studies** exist in English, French and Arabic, on tabs. A language with
  no translation shows an amber dot and is skipped on save rather than written
  blank, so you can add translations whenever.
- **Order** decides sequence: case study `0` is featured on the home page and
  heads the index; blog order decides the "keep reading" set at the foot of a
  post. The blog index sorts by date.
- **Shared case-study fields** — order, slug, sector, anonymous, client name —
  are written to all three language rows at once, so translations cannot drift
  apart on what must match.
- **Anonymous** is a safety switch. While it is on, only the public name is
  rendered and the real client name never reaches the page.
- **Renaming a slug** deletes the old row, so nothing is published twice under
  two names — but existing links to the old URL break.

## What to watch

`/admin` is `noindex` and disallowed in `robots.txt`, but it is a public URL —
its protection is the login, not obscurity. Use a real password.

The site is no longer a static export. It runs as an application on Vercel,
which means it can be slow or fail in ways a folder of HTML could not. The
`revalidate` windows are what keep the database out of the request path for
almost every visitor.
