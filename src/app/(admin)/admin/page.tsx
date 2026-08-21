"use client";

import { useCallback, useMemo, useState, useSyncExternalStore } from "react";
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
import { ensureWritable, looksLikeTheRepo, pickRoot, readAll, removeJson, supported, writeJson } from "./fs";

type Row = Record<string, unknown>;
type Collection = "blog" | "case-studies";

/** Case studies keep one file per language; blog posts are English only. */
type Draft = { blog: Row; cases: Record<AdminLocale, Row> };

const blogPath = ["content", "blog"];
const casePath = (locale: AdminLocale) => ["content", "case-studies", locale];

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);

/** Drop empty optional values so the files stay as tidy as the originals. */
function clean(row: Row): Row {
  const out: Row = {};
  for (const [k, v] of Object.entries(row)) {
    if (v === undefined || v === "") continue;
    if (Array.isArray(v)) {
      const kept = v.filter((x) =>
        typeof x === "string" ? x.trim() : Object.values(x ?? {}).some((s) => String(s ?? "").trim()),
      );
      if (kept.length) out[k] = kept;
      continue;
    }
    if (v && typeof v === "object") {
      const values = Object.values(v as Record<string, unknown>);
      if (!values.some((s) => String(s ?? "").trim())) continue;
    }
    out[k] = v;
  }
  return out;
}

/** The support answer never changes within a session, so there is nothing to subscribe to. */
const neverChanges = () => () => {};

function missingRequired(fields: Field[], row: Row): string[] {
  return fields
    .filter((f) => "required" in f && f.required && !String(row[f.name] ?? "").trim())
    .map((f) => f.label);
}

export default function AdminPage() {
  // Browser support cannot be read during render: the server has no window, so
  // deciding it inline makes the first client render disagree with the server's
  // and React throws a hydration error. useSyncExternalStore is the sanctioned
  // way to have a different server answer — it renders the server snapshot,
  // then swaps to the client's without complaining.
  const canEdit = useSyncExternalStore(neverChanges, supported, () => true);

  const [root, setRoot] = useState<FileSystemDirectoryHandle | null>(null);
  const [collection, setCollection] = useState<Collection>("blog");
  const [locale, setLocale] = useState<AdminLocale>("en");
  const [blog, setBlog] = useState<Row[]>([]);
  const [cases, setCases] = useState<Record<AdminLocale, Row[]>>({ en: [], fr: [], ar: [] });
  const [selected, setSelected] = useState<string | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [status, setStatus] = useState<{ tone: "ok" | "bad" | "busy"; text: string } | null>(null);
  const [dirty, setDirty] = useState(false);

  const load = useCallback(async (handle: FileSystemDirectoryHandle) => {
    setStatus({ tone: "busy", text: "Reading content…" });
    const posts = await readAll(handle, blogPath);
    const byLocale = {} as Record<AdminLocale, Row[]>;
    for (const l of LOCALES) byLocale[l] = (await readAll(handle, casePath(l))).map((e) => e.data);
    setBlog(posts.map((e) => e.data));
    setCases(byLocale);
    setStatus({ tone: "ok", text: `${posts.length} posts, ${byLocale.en.length} case studies` });
  }, []);

  const open = async () => {
    try {
      const handle = await pickRoot();
      if (!(await looksLikeTheRepo(handle))) {
        setStatus({ tone: "bad", text: "That folder has no /content — pick the project root." });
        return;
      }
      if (!(await ensureWritable(handle))) {
        setStatus({ tone: "bad", text: "Permission to edit files was declined." });
        return;
      }
      setRoot(handle);
      await load(handle);
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setStatus({ tone: "bad", text: (err as Error).message });
    }
  };

  const rows = collection === "blog" ? blog : cases[locale];
  const nameOf = (r: Row) => String(r.title ?? r.publicName ?? r.slug ?? "Untitled");

  const select = (slug: string) => {
    if (dirty && !confirm("Discard unsaved changes?")) return;
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
    if (dirty && !confirm("Discard unsaved changes?")) return;
    setSelected(null);
    setDirty(true);
    if (collection === "blog") {
      const today = new Date().toISOString().slice(0, 10);
      setDraft({ blog: { ...emptyFor(BLOG_FIELDS), date: today }, cases: { en: {}, fr: {}, ar: {} } });
    } else {
      const shared = emptyFor(CASE_SHARED_FIELDS);
      const byLocale = {} as Record<AdminLocale, Row>;
      for (const l of LOCALES) byLocale[l] = { ...shared, ...emptyFor(CASE_LOCALE_FIELDS) };
      setDraft({ blog: {}, cases: byLocale });
    }
  };

  const current: Row = useMemo(() => {
    if (!draft) return {};
    return collection === "blog" ? draft.blog : draft.cases[locale];
  }, [draft, collection, locale]);

  const setValue = (name: string, value: unknown) => {
    if (!draft) return;
    setDirty(true);
    if (collection === "blog") {
      setDraft({ ...draft, blog: { ...draft.blog, [name]: value } });
      return;
    }
    // Shared fields are written into all three files, so translations cannot
    // drift apart on slug, order, sector or the real client name.
    const isShared = CASE_SHARED_FIELDS.some((f) => f.name === name);
    const next = { ...draft.cases };
    for (const l of LOCALES) {
      if (isShared || l === locale) next[l] = { ...next[l], [name]: value };
    }
    setDraft({ ...draft, cases: next });
  };

  const save = async () => {
    if (!root || !draft) return;
    if (!(await ensureWritable(root))) {
      setStatus({ tone: "bad", text: "Permission to edit files was declined." });
      return;
    }

    try {
      if (collection === "blog") {
        const row = clean(draft.blog);
        const missing = missingRequired(BLOG_FIELDS, row);
        if (missing.length) {
          setStatus({ tone: "bad", text: `Still needed: ${missing.join(", ")}` });
          return;
        }
        const slug = slugify(String(row.slug));
        row.slug = slug;
        setStatus({ tone: "busy", text: "Saving…" });
        // A renamed slug means a new file; drop the old one so it is not
        // published twice under two names.
        if (selected && selected !== slug) await removeJson(root, blogPath, `${selected}.json`);
        await writeJson(root, blogPath, `${slug}.json`, row);
        setSelected(slug);
      } else {
        const en = clean(draft.cases.en);
        const missing = missingRequired([...CASE_SHARED_FIELDS, ...CASE_LOCALE_FIELDS], en);
        if (missing.length) {
          setStatus({ tone: "bad", text: `English is still missing: ${missing.join(", ")}` });
          return;
        }
        const slug = slugify(String(en.slug));
        setStatus({ tone: "busy", text: "Saving…" });
        for (const l of LOCALES) {
          const row = clean({ ...draft.cases[l], slug });
          // An untranslated language is left alone rather than written blank.
          if (l !== "en" && !String(row.publicName ?? "").trim()) continue;
          if (selected && selected !== slug) {
            await removeJson(root, casePath(l), `${selected}.json`).catch(() => {});
          }
          await writeJson(root, casePath(l), `${slug}.json`, row);
        }
        setSelected(slug);
      }

      await load(root);
      setDirty(false);
      setStatus({ tone: "ok", text: "Saved. Commit and push when you are ready to publish." });
    } catch (err) {
      setStatus({ tone: "bad", text: `Could not save: ${(err as Error).message}` });
    }
  };

  const remove = async () => {
    if (!root || !selected) return;
    if (!confirm(`Delete “${selected}”? This removes the file from your checkout.`)) return;
    try {
      if (collection === "blog") {
        await removeJson(root, blogPath, `${selected}.json`);
      } else {
        for (const l of LOCALES) await removeJson(root, casePath(l), `${selected}.json`).catch(() => {});
      }
      setSelected(null);
      setDraft(null);
      setDirty(false);
      await load(root);
      setStatus({ tone: "ok", text: "Deleted." });
    } catch (err) {
      setStatus({ tone: "bad", text: `Could not delete: ${(err as Error).message}` });
    }
  };

  // --- render ---------------------------------------------------------------

  if (!canEdit) {
    return (
      <main className="mx-auto max-w-lg px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-forest">Use Chrome or Edge</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          This admin edits the content files on your machine, which needs the File System Access API. Firefox and
          Safari have not shipped it.
        </p>
      </main>
    );
  }

  const tab = (active: boolean) =>
    `rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
      active ? "bg-forest text-white" : "text-ink/60 hover:bg-mint"
    }`;

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-mint bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-6 py-3">
          <span className="font-display text-lg font-bold text-forest">TDM content</span>

          {root && (
            <div className="flex gap-1 rounded-full bg-white p-1">
              {(["blog", "case-studies"] as Collection[]).map((c) => (
                <button
                  key={c}
                  className={tab(collection === c)}
                  onClick={() => {
                    if (dirty && !confirm("Discard unsaved changes?")) return;
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
          )}

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
              onClick={open}
              className="rounded-full bg-amber px-4 py-2 text-sm font-bold text-white hover:brightness-110"
            >
              {root ? "Change folder" : "Open project folder"}
            </button>
          </div>
        </div>
      </header>

      {!root ? (
        <div className="mx-auto max-w-lg px-6 py-24 text-center">
          <h1 className="font-display text-2xl font-bold text-forest">Open your project folder</h1>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            Pick the folder containing this site. Edits are written straight to the content files in your checkout —
            nothing is uploaded, and the live site does not change until you commit and push.
          </p>
        </div>
      ) : (
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
                      <span className="block truncate font-semibold">{nameOf(r)}</span>
                      <span className={`block truncate text-xs ${selected === slug ? "text-white/60" : "text-ink/45"}`}>
                        {String(r.order ?? "—")} · {slug}
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
              <p className="py-16 text-center text-sm text-ink/50">
                Pick something on the left, or start a new one.
              </p>
            ) : (
              <>
                {collection === "case-studies" && (
                  <div className="mb-6 flex gap-1 rounded-full bg-white p-1 shadow-sm">
                    {LOCALES.map((l) => {
                      const translated = Boolean(String(draft.cases[l].publicName ?? "").trim());
                      return (
                        <button key={l} className={tab(locale === l)} onClick={() => setLocale(l)}>
                          {LOCALE_LABELS[l]}
                          {!translated && l !== "en" && <span className="ms-1.5 text-amber">•</span>}
                        </button>
                      );
                    })}
                    <span className="ms-auto self-center pe-3 text-xs text-ink/45">
                      Shared fields apply to all three
                    </span>
                  </div>
                )}

                <div className="space-y-5 rounded-3xl border border-mint bg-white p-6">
                  {(collection === "blog"
                    ? BLOG_FIELDS
                    : [...CASE_SHARED_FIELDS, ...CASE_LOCALE_FIELDS]
                  ).map((f) => (
                    <FieldInput key={f.name} field={f} value={current[f.name]} onChange={(v) => setValue(f.name, v)} />
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <button
                    onClick={save}
                    className="rounded-full bg-amber px-6 py-2.5 text-sm font-bold text-white hover:brightness-110"
                  >
                    Save to disk
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
      )}
    </main>
  );
}
