"use client";

import type { Field } from "./schema";

/**
 * One form control per field type. Kept apart from the page so the page is
 * about loading and saving, not about markup.
 */

const label = "block text-[0.72rem] font-bold uppercase tracking-[0.09em] text-fern";
const box =
  "w-full rounded-xl border border-mint bg-white px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-amber focus:ring-2 focus:ring-amber/30";
const hintText = "mt-1 text-xs leading-relaxed text-ink/55";

function Hint({ children }: { children?: string }) {
  return children ? <p className={hintText}>{children}</p> : null;
}

function Row({ field, children }: { field: Field; children: React.ReactNode }) {
  return (
    <div>
      <label className={label}>
        {field.label}
        {"required" in field && field.required ? <span className="text-amber"> *</span> : null}
      </label>
      <div className="mt-1.5">{children}</div>
      <Hint>{field.hint}</Hint>
    </div>
  );
}

const asString = (v: unknown) => (v === undefined || v === null ? "" : String(v));
const asArray = (v: unknown) => (Array.isArray(v) ? v : []);

export function FieldInput({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: unknown;
  onChange: (next: unknown) => void;
}) {
  if (field.type === "boolean") {
    return (
      <div>
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
            className="h-4 w-4 accent-amber"
          />
          <span className={label}>{field.label}</span>
        </label>
        <Hint>{field.hint}</Hint>
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <Row field={field}>
        <select className={box} value={asString(value)} onChange={(e) => onChange(e.target.value)}>
          {field.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Row>
    );
  }

  if (field.type === "number") {
    return (
      <Row field={field}>
        <input
          type="number"
          className={box}
          value={asString(value)}
          onChange={(e) => onChange(e.target.value === "" ? undefined : Number(e.target.value))}
        />
      </Row>
    );
  }

  if (field.type === "textarea" || field.type === "markdown") {
    return (
      <Row field={field}>
        <textarea
          className={`${box} font-${field.type === "markdown" ? "mono" : "sans"} leading-relaxed`}
          rows={field.type === "markdown" ? 20 : 3}
          value={asString(value)}
          onChange={(e) => onChange(e.target.value)}
          dir="auto"
        />
      </Row>
    );
  }

  if (field.type === "list") {
    const items = asArray(value) as string[];
    const set = (i: number, v: string) => onChange(items.map((x, n) => (n === i ? v : x)));
    return (
      <Row field={field}>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex gap-2">
              {field.item === "textarea" ? (
                <textarea className={box} rows={3} value={item} onChange={(e) => set(i, e.target.value)} dir="auto" />
              ) : (
                <input className={box} value={item} onChange={(e) => set(i, e.target.value)} dir="auto" />
              )}
              <button
                type="button"
                onClick={() => onChange(items.filter((_, n) => n !== i))}
                className="shrink-0 self-start rounded-lg border border-mint px-2.5 py-2 text-xs font-semibold text-ink/60 hover:border-red-300 hover:text-red-600"
                aria-label={`Remove item ${i + 1}`}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onChange([...items, ""])}
            className="rounded-full border border-fern/40 px-3.5 py-1.5 text-xs font-bold text-fern hover:bg-mint"
          >
            Add {field.label.toLowerCase().replace(/s$/, "")}
          </button>
        </div>
      </Row>
    );
  }

  if (field.type === "objectList") {
    const items = asArray(value) as Record<string, string>[];
    const set = (i: number, key: string, v: string) =>
      onChange(items.map((x, n) => (n === i ? { ...x, [key]: v } : x)));
    return (
      <Row field={field}>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl border border-mint bg-mint/20 p-3">
              <div className="space-y-2">
                {field.fields.map((sub) => (
                  <div key={sub.name}>
                    <span className="text-[0.66rem] font-bold uppercase tracking-wider text-ink/45">{sub.label}</span>
                    {sub.type === "textarea" ? (
                      <textarea
                        className={box}
                        rows={2}
                        value={asString(item?.[sub.name])}
                        onChange={(e) => set(i, sub.name, e.target.value)}
                        dir="auto"
                      />
                    ) : (
                      <input
                        className={box}
                        value={asString(item?.[sub.name])}
                        onChange={(e) => set(i, sub.name, e.target.value)}
                        dir="auto"
                      />
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onChange(items.filter((_, n) => n !== i))}
                className="mt-2 text-xs font-semibold text-ink/55 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onChange([...items, Object.fromEntries(field.fields.map((f) => [f.name, ""]))])}
            className="rounded-full border border-fern/40 px-3.5 py-1.5 text-xs font-bold text-fern hover:bg-mint"
          >
            Add {field.label.toLowerCase().replace(/s$/, "")}
          </button>
        </div>
      </Row>
    );
  }

  if (field.type === "object") {
    const obj = (value ?? {}) as Record<string, string>;
    const filled = field.fields.some((f) => asString(obj[f.name]).trim());
    return (
      <Row field={field}>
        <div className="space-y-2 rounded-xl border border-mint bg-mint/20 p-3">
          {field.fields.map((sub) => (
            <div key={sub.name}>
              <span className="text-[0.66rem] font-bold uppercase tracking-wider text-ink/45">{sub.label}</span>
              {sub.type === "textarea" ? (
                <textarea
                  className={box}
                  rows={3}
                  value={asString(obj[sub.name])}
                  onChange={(e) => onChange({ ...obj, [sub.name]: e.target.value })}
                  dir="auto"
                />
              ) : (
                <input
                  className={box}
                  value={asString(obj[sub.name])}
                  onChange={(e) => onChange({ ...obj, [sub.name]: e.target.value })}
                  dir="auto"
                />
              )}
            </div>
          ))}
          {filled && (
            <button
              type="button"
              onClick={() => onChange(undefined)}
              className="text-xs font-semibold text-ink/55 hover:text-red-600"
            >
              Clear
            </button>
          )}
        </div>
      </Row>
    );
  }

  // text and date
  return (
    <Row field={field}>
      <input
        type={field.type === "date" ? "date" : "text"}
        className={box}
        value={asString(value)}
        onChange={(e) => onChange(e.target.value)}
        dir="auto"
      />
    </Row>
  );
}
