-- Schema for the TDM site content.
--
-- Run this once in the Supabase SQL editor (Dashboard → SQL Editor → New query).
-- Everything here is idempotent, so re-running it is safe.
--
-- Only blog posts and case studies live in the database — the things that get
-- added over time. Sectors, services, locations and page copy stay in the
-- codebase, because they change when the site changes, not when someone writes
-- a post.

-- ---------------------------------------------------------------------------
-- Blog posts. English only, matching the site.
-- ---------------------------------------------------------------------------
create table if not exists public.blog_posts (
  slug              text primary key,
  -- Lower comes first. Decides the "keep reading" set at the foot of a post;
  -- the blog index sorts by date instead.
  sort_order        integer     not null default 99,
  title             text        not null,
  published_on      date        not null,
  category          text        not null,
  excerpt           text        not null,
  -- Markdown-ish: blank lines separate blocks, "## " is a heading, "### " a
  -- sub-heading, and lines starting "- " become a list.
  body              text        not null,
  meta_title        text        not null,
  meta_description  text        not null,
  -- [{ "q": "...", "a": "..." }] — published as FAQ structured data.
  faqs              jsonb       not null default '[]'::jsonb,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Case studies. One row per language, so a study can be published in English
-- while its translations are still being written.
-- ---------------------------------------------------------------------------
create table if not exists public.case_studies (
  slug              text        not null,
  locale            text        not null check (locale in ('en', 'fr', 'ar')),
  -- 0 is featured on the home page and heads the case-studies index.
  sort_order        integer     not null default 99,
  sector            text        not null check (sector in ('marketing', 'development', 'media', 'staff-augmentation')),
  -- While true, only public_name is ever rendered — client is never shown.
  anonymous         boolean     not null default true,
  client            text,
  public_name       text        not null,
  industry          text        not null,
  country           text,
  timeline          text,
  services          jsonb       not null default '[]'::jsonb,  -- ["SEO", …]
  summary           text        not null,
  challenge         text        not null,
  approach          jsonb       not null default '[]'::jsonb,  -- ["para", …]
  results           jsonb       not null default '[]'::jsonb,  -- [{value,label}, …]
  testimonial       jsonb,                                     -- {quote,author}
  meta_title        text        not null,
  meta_description  text        not null,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  primary key (slug, locale)
);

create index if not exists case_studies_locale_order_idx
  on public.case_studies (locale, sort_order);

create index if not exists case_studies_sector_idx
  on public.case_studies (locale, sector, sort_order);

create index if not exists blog_posts_published_idx
  on public.blog_posts (published_on desc);

-- ---------------------------------------------------------------------------
-- Keep updated_at honest.
-- ---------------------------------------------------------------------------
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists blog_posts_touch on public.blog_posts;
create trigger blog_posts_touch before update on public.blog_posts
  for each row execute function public.touch_updated_at();

drop trigger if exists case_studies_touch on public.case_studies;
create trigger case_studies_touch before update on public.case_studies
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------------
-- Row level security.
--
-- The site reads with the anon key, which ships to the browser, so read access
-- is public — this is published content, and it is all visible on the site
-- anyway. Writing requires a signed-in user, which is what the admin login
-- provides. Without these policies RLS would deny everything, including reads.
-- ---------------------------------------------------------------------------
alter table public.blog_posts   enable row level security;
alter table public.case_studies enable row level security;

drop policy if exists "public read"       on public.blog_posts;
drop policy if exists "authenticated write" on public.blog_posts;
create policy "public read"         on public.blog_posts for select using (true);
create policy "authenticated write" on public.blog_posts for all
  to authenticated using (true) with check (true);

drop policy if exists "public read"       on public.case_studies;
drop policy if exists "authenticated write" on public.case_studies;
create policy "public read"         on public.case_studies for select using (true);
create policy "authenticated write" on public.case_studies for all
  to authenticated using (true) with check (true);
