"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Session, SupabaseClient } from "@supabase/supabase-js";
import { browserDb, isConfigured } from "@/lib/supabase";
import { FieldInput } from "./FieldInput";
import {
  BLOG_FIELDS,
  CASE_LOCALE_FIELDS,
  CASE_SHARED_FIELDS,
  LOCALES,
  LOCALE_LABELS,
  emptyFor,
  type AdminLocale,
  type Field,
} from "./schema";

type Row = Record<string, unknown>;
type Collection = "blog" | "case-studies";

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);

/** Empty optional values are stored as null rather than "", so the columns stay honest. */
function clean(row: Row): Row {
  const out: Row = {};
  for (const [k, v] of Object.entries(row)) {
    if (v === "" || v === undefined) {
      out[k] = null;
      continue;
    }
    if (Array.isArray(v)) {
      out[k] = v.filter((x) =>
        typeof x === "string" ? x.trim() : Object.values(x ?? {}).some((s) => String(s ?? "").trim()),
      );
      continue;
    }
    if (v && typeof v === "object" && !Object.values(v).some((s) => String(s ?? "").trim())) {
      out[k] = null;
      continue;
    }
    out[k] = v;
  }
  return out;
}

const missingRequired = (fields: Field[], row: Row) =>
  fields.filter((f) => "required" in f && f.required && !String(row[f.name] ?? "").trim()).map((f) => f.label);

// --- sign in ----------------------------------------------------------------

function SignIn({ db }: { db: SupabaseClient }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error: err } = await db.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false);
    if (err) setError(err.message);
    // On success onAuthStateChange fires, which swaps this form for the editor.
  };

  const box =
    "mt-1.5 w-full rounded-xl border border-mint bg-white px-3 py-2.5 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30";

  return (
    <main className="grid min-h-screen place-items-center px-6">
      <form onSubmit={submit} className="w-full max-w-sm rounded-3xl border border-mint bg-white p-8 shadow-xl shadow-forest/5">
        <h1 className="font-display text-xl font-bold text-forest">TDM content admin</h1>
        <p className="mt-1.5 text-sm text-ink/60">Sign in to add or edit posts and case studies.</p>

        {error && (
          <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
        )}

        <label className="mt-5 block text-[0.72rem] font-bold uppercase tracking-[0.09em] text-fern">
          Email
          <input className={box} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
        </label>
        <label className="mt-4 block text-[0.72rem] font-bold uppercase tracking-[0.09em] text-fern">
          Password
          <input
            className={box}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </label>

        <button
          type="submit"
          disabled={busy}
          className="mt-6 w-full rounded-full bg-amber py-3 text-sm font-bold text-white hover:brightness-110 disabled:opacity-60"
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}

// --- admin ------------------------------------------------------------------

export default function AdminPage() {
  const configured = isConfigured();
  const db = useMemo(() => (configured ? browserDb() : null), [configured]);

  const [session, setSession] = useState<Session | null>(null);
  // Derived, not stored: with no database configured there is nothing to wait
  // for, so readiness is a fact about the inputs rather than another state
  // update fired synchronously from the effect.
  const [checked, setChecked] = useState(false);
  const ready = !db || checked;

  const [collection, setCollection] = useState<Collection>("blog");
  const [locale, setLocale] = useState<AdminLocale>("en");
  const [blog, setBlog] = useState<Row[]>([]);
  const [cases, setCases] = useState<Record<AdminLocale, Row[]>>({ en: [], fr: [], ar: [] });
  const [selected, setSelected] = useState<string | null>(null);
  const [draft, setDraft] = useState<{ blog: Row; cases: Record<AdminLocale, Row> } | null>(null);
  const [status, setStatus] = useState<{ tone: "ok" | "bad" | "busy"; text: string } | null>(null);
  const [dirty, setDirty] = useState(false);

  const load = useCallback(async () => {
    if (!db) return;
    setStatus({ tone: "busy", text: "Loading…" });
    const [posts, studies] = await Promise.all([
      db.from("blog_posts").select("*").order("sort_order"),
      db.from("case_studies").select("*").order("sort_order"),
    ]);
    if (posts.error || studies.error) {
      setStatus({ tone: "bad", text: posts.error?.message ?? studies.error?.message ?? "Load failed" });
      return;
    }
    const byLocale: Record<AdminLocale, Row[]> = { en: [], fr: [], ar: [] };
    for (const row of studies.data ?? []) byLocale[(row as Row).locale as AdminLocale]?.push(row as Row);
    setBlog((posts.data ?? []) as Row[]);
    setCases(byLocale);
    setStatus({ tone: "ok", text: `${posts.data?.length ?? 0} posts · ${byLocale.en.length} case studies` });
  }, [db]);

  useEffect(() => {
    if (!db) return;
    // Loading happens in the auth callbacks rather than in a second effect
    // keyed on the session: the data depends on being signed in, not on a
    // render, and this keeps the fetch out of the render cycle.
    db.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecked(true);
      if (data.session) void load();
    });
    const { data: sub } = db.auth.onAuthStateChange((_event, next) => {
      setSession(next);
      if (next) void load();
    });
    return () => sub.subscription.unsubscribe();
  }, [db, load]);


  if (!ready) return <main className="min-h-screen" />;

  if (!configured || !db) {
    return (
      <main className="mx-auto max-w-lg px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-forest">Database not configured</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in{" "}
          <code>.env.local</code>, and in the Vercel project settings. See <code>supabase/README.md</code>.
        </p>
      </main>
    );
  }

  if (!session) return <SignIn db={db} />;

  const rows = collection === "blog" ? blog : cases[locale];
  const fields = collection === "blog" ? BLOG_FIELDS : [...CASE_SHARED_FIELDS, ...CASE_LOCALE_FIELDS];
  const current: Row = draft ? (collection === "blog" ? draft.blog : draft.cases[locale]) : {};

  const confirmDiscard = () => !dirty || confirm("Discard unsaved changes?");

  const select = (slug: string) => {
    if (!confirmDiscard()) return;
    setSelected(slug);
    setDirty(false);
    if (collection === "blog") {
      setDraft({ blog: { ...(blog.find((b) => b.slug === slug) ?? {}) }, cases: { en: {}, fr: {}, ar: {} } });
    } else {
      const byLocale = {} as Record<AdminLocale, Row>;
      for (const l of LOCALES) byLocale[l] = { ...(cases[l].find((c) => c.slug === slug) ?? {}) };
      setDraft({ blog: {}, cases: byLocale });
    }
  };

  const startNew = () => {
    if (!confirmDiscard()) return;
    setSelected(null);
    setDirty(true);
    if (collection === "blog") {
      setDraft({
        blog: { ...emptyFor(BLOG_FIELDS), published_on: new Date().toISOString().slice(0, 10) },
        cases: { en: {}, fr: {}, ar: {} },
      });
    } else {
      const shared = emptyFor(CASE_SHARED_FIELDS);
      const byLocale = {} as Record<AdminLocale, Row>;
      for (const l of LOCALES) byLocale[l] = { ...shared, ...emptyFor(CASE_LOCALE_FIELDS), locale: l };
      setDraft({ blog: {}, cases: byLocale });
    }
  };

  const setValue = (name: string, value: unknown) => {
    if (!draft) return;
    setDirty(true);
    if (collection === "blog") {
      setDraft({ ...draft, blog: { ...draft.blog, [name]: value } });
      return;
    }
    // Shared fields go to all three rows, so translations cannot drift apart on
    // slug, order, sector or the real client name.
    const shared = CASE_SHARED_FIELDS.some((f) => f.name === name);
    const next = { ...draft.cases };
    for (const l of LOCALES) if (shared || l === locale) next[l] = { ...next[l], [name]: value };
    setDraft({ ...draft, cases: next });
  };

  const save = async () => {
    if (!draft) return;
    try {
      if (collection === "blog") {
        const row = clean(draft.blog);
        const missing = missingRequired(BLOG_FIELDS, row);
        if (missing.length) return setStatus({ tone: "bad", text: `Still needed: ${missing.join(", ")}` });

        const slug = slugify(String(row.slug));
        setStatus({ tone: "busy", text: "Saving…" });
        // A renamed slug is a new row; drop the old one so the post is not
        // published twice under two names.
        if (selected && selected !== slug) await db.from("blog_posts").delete().eq("slug", selected);
        const { error } = await db.from("blog_posts").upsert({ ...row, slug }, { onConflict: "slug" });
        if (error) return setStatus({ tone: "bad", text: error.message });
        setSelected(slug);
      } else {
        const en = clean(draft.cases.en);
        const missing = missingRequired([...CASE_SHARED_FIELDS, ...CASE_LOCALE_FIELDS], en);
        if (missing.length) return setStatus({ tone: "bad", text: `English is missing: ${missing.join(", ")}` });

        const slug = slugify(String(en.slug));
        setStatus({ tone: "busy", text: "Saving…" });
        if (selected && selected !== slug) await db.from("case_studies").delete().eq("slug", selected);

        // A language with nothing written is left out rather than saved blank.
        const payload: Row[] = LOCALES.filter(
          (l) => l === "en" || String(draft.cases[l].public_name ?? "").trim(),
        ).map((l) => ({ ...clean(draft.cases[l]), slug, locale: l }));
        const { error } = await db.from("case_studies").upsert(payload, { onConflict: "slug,locale" });
        if (error) return setStatus({ tone: "bad", text: error.message });
        setSelected(slug);
      }

      await load();
      setDirty(false);
      setStatus({ tone: "ok", text: "Saved. Live within a minute." });
    } catch (err) {
      setStatus({ tone: "bad", text: (err as Error).message });
    }
  };

  const remove = async () => {
    if (!selected) return;
    if (!confirm(`Delete “${selected}”? This cannot be undone.`)) return;
    const table = collection === "blog" ? "blog_posts" : "case_studies";
    const { error } = await db.from(table).delete().eq("slug", selected);
    if (error) return setStatus({ tone: "bad", text: error.message });
    setSelected(null);
    setDraft(null);
    setDirty(false);
    await load();
    setStatus({ tone: "ok", text: "Deleted." });
  };

  const tab = (active: boolean) =>
    `rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${active ? "bg-forest text-white" : "text-ink/60 hover:bg-mint"}`;

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-mint bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-6 py-3">
          <span className="font-display text-lg font-bold text-forest">TDM content</span>

          <div className="flex gap-1 rounded-full bg-white p-1">
            {(["blog", "case-studies"] as Collection[]).map((c) => (
              <button
                key={c}
                className={tab(collection === c)}
                onClick={() => {
                  if (!confirmDiscard()) return;
                  setCollection(c);
                  setSelected(null);
                  setDraft(null);
                  setDirty(false);
                }}
              >
                {c === "blog" ? "Blog posts" : "Case studies"}
              </button>
            ))}
          </div>

          <div className="ms-auto flex items-center gap-3">
            {status && (
              <span
                className={`text-xs font-semibold ${
                  status.tone === "bad" ? "text-red-600" : status.tone === "busy" ? "text-ink/50" : "text-fern"
                }`}
              >
                {status.text}
              </span>
            )}
            <button
              onClick={() => db.auth.signOut()}
              className="rounded-full border border-mint px-4 py-2 text-sm font-bold text-ink/60 hover:border-fern hover:text-forest"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[19rem_1fr]">
        <aside>
          <button
            onClick={startNew}
            className="w-full rounded-full border-2 border-amber bg-amber/10 px-4 py-2.5 text-sm font-bold text-forest hover:bg-amber hover:text-white"
          >
            + New {collection === "blog" ? "post" : "case study"}
          </button>
          <ul className="mt-4 space-y-1">
            {rows.map((r) => {
              const slug = String(r.slug);
              return (
                <li key={slug}>
                  <button
                    onClick={() => select(slug)}
                    className={`w-full rounded-xl px-3 py-2 text-start text-sm transition-colors ${
                      selected === slug ? "bg-forest text-white" : "hover:bg-mint"
                    }`}
                  >
                    <span className="block truncate font-semibold">{String(r.title ?? r.public_name ?? slug)}</span>
                    <span className={`block truncate text-xs ${selected === slug ? "text-white/60" : "text-ink/45"}`}>
                      {String(r.sort_order ?? "-")} · {slug}
                    </span>
                  </button>
                </li>
              );
            })}
            {rows.length === 0 && <li className="px-3 py-6 text-sm text-ink/50">Nothing here yet.</li>}
          </ul>
        </aside>

        <section>
          {!draft ? (
            <p className="py-16 text-center text-sm text-ink/50">Pick something on the left, or start a new one.</p>
          ) : (
            <>
              {collection === "case-studies" && (
                <div className="mb-6 flex flex-wrap gap-1 rounded-full bg-white p-1 shadow-sm">
                  {LOCALES.map((l) => (
                    <button key={l} className={tab(locale === l)} onClick={() => setLocale(l)}>
                      {LOCALE_LABELS[l]}
                      {l !== "en" && !String(draft.cases[l].public_name ?? "").trim() && (
                        <span className="ms-1.5 text-amber">•</span>
                      )}
                    </button>
                  ))}
                  <span className="ms-auto self-center pe-3 text-xs text-ink/45">Shared fields apply to all three</span>
                </div>
              )}

              <div className="space-y-5 rounded-3xl border border-mint bg-white p-6">
                {fields.map((f) => (
                  <FieldInput key={f.name} field={f} value={current[f.name]} onChange={(v) => setValue(f.name, v)} />
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <button onClick={save} className="rounded-full bg-amber px-6 py-2.5 text-sm font-bold text-white hover:brightness-110">
                  Save
                </button>
                {selected && (
                  <button
                    onClick={remove}
                    className="rounded-full border border-mint px-5 py-2.5 text-sm font-bold text-ink/60 hover:border-red-300 hover:text-red-600"
                  >
                    Delete
                  </button>
                )}
                {dirty && <span className="text-xs font-semibold text-amber">Unsaved changes</span>}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
