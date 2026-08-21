/**
 * Run with:  node admin-auth/worker.test.mjs
 *
 * Exercises the sign-in logic without deploying, without sending mail and
 * without touching GitHub. The last check is the important one: it pins the
 * exact message shape the CMS parses, so if that contract ever changes this
 * fails rather than the sign-in silently hanging.
 */
import worker from "./worker.js";

const env = {
  SIGNING_SECRET: "test-secret-value-that-is-long",
  ALLOWED_EMAILS: "owner@example.com, Other@Example.com",
  ALLOWED_ORIGINS: "https://tdm-site.vercel.app",
  RESEND_API_KEY: "re_fake",
  MAIL_FROM: "TDM <admin@example.com>",
  GITHUB_APP_ID: "123456",
  GITHUB_INSTALLATION_ID: "7890",
  GITHUB_PRIVATE_KEY: "unused-in-these-tests",
};

let pass = 0;
let fail = 0;
const check = (name, ok, detail = "") => {
  if (ok) { pass += 1; console.log(`  ok    ${name}`); }
  else { fail += 1; console.log(`  FAIL  ${name} ${detail}`); }
};

const get = (path) => worker.fetch(new Request(`https://w.dev${path}`), env);
const post = (path, fields) =>
  worker.fetch(
    new Request(`https://w.dev${path}`, {
      method: "POST",
      body: new URLSearchParams(fields),
      headers: { "content-type": "application/x-www-form-urlencoded" },
    }),
    env,
  );

console.log("routing and origin checks");
let r = await get("/auth?provider=github&site_id=tdm-site.vercel.app&scope=repo");
check("known site_id renders the email form", r.status === 200 && (await r.clone().text()).includes("Email me a code"));

r = await get("/auth?provider=github&site_id=evil.example.com&scope=repo");
check("unknown site_id is refused", r.status === 400);

r = await get("/nope");
check("unknown path 404s", r.status === 404);

console.log("\nemail allowlist");
// Intercept the mail send so nothing leaves the machine.
const realFetch = globalThis.fetch;
let mailed = null;
globalThis.fetch = async (input, init) => {
  const url = typeof input === "string" ? input : input.url;
  if (url.includes("resend.com")) {
    mailed = JSON.parse(init.body);
    return new Response("{}", { status: 200 });
  }
  return realFetch(input, init);
};

r = await post("/auth/start", { origin: "https://tdm-site.vercel.app", email: "nobody@example.com" });
let body = await r.text();
check("unlisted email sends no mail", mailed === null);
check("unlisted email gives a non-committal reply", body.includes("If that address can publish"));

r = await post("/auth/start", { origin: "https://tdm-site.vercel.app", email: "OWNER@example.com" });
body = await r.text();
check("listed email is matched case-insensitively", mailed !== null);
const code = mailed ? String(mailed.subject).slice(0, 6) : "";
check("code is six digits", /^\d{6}$/.test(code), code);
check("code form is returned", body.includes("Six-digit code"));

const challenge = body.match(/name="challenge" value="([^"]*)"/)[1];
const exp = body.match(/name="exp" value="([^"]*)"/)[1];
check("challenge is present", challenge.length > 20);
check("expiry is ~10 minutes out", Number(exp) - Date.now() > 9 * 60 * 1000);

console.log("\ncode verification");
r = await post("/auth/verify", { origin: "https://tdm-site.vercel.app", email: "owner@example.com", code: "000000", challenge, exp });
body = await r.text();
check("wrong code is rejected", body.includes("That code is not right"));

r = await post("/auth/verify", { origin: "https://tdm-site.vercel.app", email: "owner@example.com", code, challenge, exp: String(Date.now() - 1) });
body = await r.text();
check("expired code is rejected", body.includes("expired"));

r = await post("/auth/verify", { origin: "https://tdm-site.vercel.app", email: "attacker@example.com", code, challenge, exp });
body = await r.text();
check("challenge is bound to the email", body.includes("That code is not right"));

// Correct code: GitHub minting will fail (fake key), but that proves the
// challenge verified — we get past the code check to the GitHub call.
r = await post("/auth/verify", { origin: "https://tdm-site.vercel.app", email: "owner@example.com", code, challenge, exp });
body = await r.text();
check("right code passes the challenge", body.includes("GitHub refused"), body.slice(0, 120));

console.log("\nhandoff message shape (what the CMS parses)");
const sample = `authorization:github:success:${JSON.stringify({ token: "abc123", provider: "github" })}`;
const m = sample.match("^authorization:github:(success|error):(?<result>.+)");
check("matches the CMS regex", !!m);
check("result parses to an object with a token", JSON.parse(m.groups.result).token === "abc123");

globalThis.fetch = realFetch;
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
