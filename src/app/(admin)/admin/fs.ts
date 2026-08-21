/**
 * Reading and writing the content files straight from the browser.
 *
 * This uses the File System Access API, so the admin edits the checkout on this
 * machine — no server, no database, nothing deployed. Chromium only (Chrome and
 * Edge); Firefox and Safari have not shipped it.
 *
 * Files are written with the same two-space indent and trailing newline the
 * migration produced, so an edit here shows up as a clean diff rather than as a
 * whole-file rewrite.
 */

declare global {
  interface Window {
    showDirectoryPicker?: (options?: { mode?: "read" | "readwrite" }) => Promise<FileSystemDirectoryHandle>;
  }
}

export const supported = () => typeof window !== "undefined" && typeof window.showDirectoryPicker === "function";

export async function pickRoot(): Promise<FileSystemDirectoryHandle> {
  if (!window.showDirectoryPicker) throw new Error("This browser cannot open local folders. Use Chrome or Edge.");
  return window.showDirectoryPicker({ mode: "readwrite" });
}

type Permissible = FileSystemDirectoryHandle & {
  queryPermission?: (d: { mode: string }) => Promise<PermissionState>;
  requestPermission?: (d: { mode: string }) => Promise<PermissionState>;
};

/** Chrome drops the grant between visits, so re-ask rather than fail on save. */
export async function ensureWritable(root: FileSystemDirectoryHandle): Promise<boolean> {
  const h = root as Permissible;
  if (!h.queryPermission) return true;
  if ((await h.queryPermission({ mode: "readwrite" })) === "granted") return true;
  return (await h.requestPermission?.({ mode: "readwrite" })) === "granted";
}

async function dir(root: FileSystemDirectoryHandle, segments: string[], create = false) {
  let handle = root;
  for (const s of segments) handle = await handle.getDirectoryHandle(s, { create });
  return handle;
}

/** Confirms the chosen folder is actually this project before trusting it. */
export async function looksLikeTheRepo(root: FileSystemDirectoryHandle): Promise<boolean> {
  try {
    await dir(root, ["content", "blog"]);
    await dir(root, ["content", "case-studies", "en"]);
    return true;
  } catch {
    return false;
  }
}

export type Entry = { file: string; data: Record<string, unknown> };

export async function readAll(root: FileSystemDirectoryHandle, segments: string[]): Promise<Entry[]> {
  const handle = await dir(root, segments);
  const out: Entry[] = [];
  // @ts-expect-error - values() is present on the handle but missing from lib.dom
  for await (const child of handle.values()) {
    if (child.kind !== "file" || !child.name.endsWith(".json")) continue;
    const text = await (await child.getFile()).text();
    try {
      out.push({ file: child.name, data: JSON.parse(text) });
    } catch {
      out.push({ file: child.name, data: { __unreadable: true } });
    }
  }
  return out.sort((a, b) => Number(a.data.order ?? 0) - Number(b.data.order ?? 0));
}

export async function writeJson(
  root: FileSystemDirectoryHandle,
  segments: string[],
  file: string,
  data: unknown,
) {
  const handle = await dir(root, segments, true);
  const fileHandle = await handle.getFileHandle(file, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(`${JSON.stringify(data, null, 2)}\n`);
  await writable.close();
}

export async function removeJson(root: FileSystemDirectoryHandle, segments: string[], file: string) {
  const handle = await dir(root, segments);
  await handle.removeEntry(file);
}
