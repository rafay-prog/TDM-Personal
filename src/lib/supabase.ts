import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

/**
 * Two clients, for two jobs.
 *
 * `publicDb` reads published content on the server. It carries no session, so
 * it sees exactly what an anonymous visitor sees — which is the point: if a
 * page renders for a signed-out reader, it renders here.
 *
 * `browserDb` is for the admin. It keeps the signed-in session in the browser
 * so the editor stays logged in, and its writes are what the "authenticated"
 * row-level-security policies allow.
 *
 * Both use the anon key, which is designed to be public — it grants only what
 * the RLS policies in supabase/schema.sql allow. The service role key, which
 * bypasses those policies, is used by the seed script alone and must never be
 * imported here.
 */

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** A clear failure at build time beats an empty page at request time. */
function credentials() {
  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and " +
        "NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local (and in the Vercel project settings).",
    );
  }
  return { url, anonKey };
}

export const isConfigured = () => Boolean(url && anonKey);

export function publicDb() {
  const { url: u, anonKey: k } = credentials();
  return createClient(u, k, { auth: { persistSession: false } });
}

export function browserDb() {
  const { url: u, anonKey: k } = credentials();
  return createBrowserClient(u, k);
}
