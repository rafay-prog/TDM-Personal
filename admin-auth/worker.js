/**
 * Email sign-in for the TDM content admin.
 *
 * The CMS at /admin needs a GitHub token before it can commit. Normally the
 * editor gets one by signing in to GitHub. Here the editor signs in with their
 * email instead, and this worker hands the CMS a short-lived token minted from
 * a GitHub App — so the person editing the site never needs a GitHub account
 * and never gets access to the repository itself.
 *
 * The handshake is the one the CMS already speaks:
 *   1. CMS opens a popup at  <worker>/auth?provider=github&site_id=…&scope=…
 *   2. Popup collects the email, we send a six-digit code to it
 *   3. Editor types the code back into the popup
 *   4. We postMessage `authorization:github:success:{"token":…}` to the opener
 *
 * A magic link cannot work here: it would open in a fresh tab where
 * window.opener is null, and the CMS would never hear back. Hence the code.
 *
 * Nothing is stored. The pending code is carried as a signed challenge in the
 * form itself, so there is no session table, no KV namespace, nothing to expire
 * and nothing to leak at rest.
 *
 * Required secrets (see README.md):
 *   SIGNING_SECRET          long random string; signs the code challenge
 *   ALLOWED_EMAILS          comma-separated list of who may sign in
 *   ALLOWED_ORIGINS         comma-separated site origins, e.g. https://tdm.vercel.app
 *   RESEND_API_KEY          from resend.com, used only to send the code
 *   MAIL_FROM               verified sender, e.g. TDM <admin@thedigitalmarketing.services>
 *   GITHUB_APP_ID           the GitHub App's numeric id
 *   GITHUB_INSTALLATION_ID  its installation id on the repo
 *   GITHUB_PRIVATE_KEY      App private key, PKCS#8, base64 body only
 */

const CODE_TTL_MS = 10 * 60 * 1000;

const enc = new TextEncoder();

const b64url = (buf) =>
  btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

async function hmac(secret, message) {
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return b64url(await crypto.subtle.sign("HMAC", key, enc.encode(message)));
}

/** Constant time, so a wrong code cannot be discovered one character at a time. */
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

const list = (value) =>
  String(value || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ESCAPES[c]);

const STYLE = `
:root{color-scheme:light}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f7f5ef;
 font:16px/1.5 system-ui,-apple-system,Segoe UI,sans-serif;color:#10241c;padding:24px}
.card{width:100%;max-width:380px;background:#fff;border:1px solid #dfede6;border-radius:20px;
 padding:32px;box-shadow:0 18px 40px -28px rgba(16,36,28,.5)}
h1{margin:0 0 6px;font-size:1.2rem}
p{margin:0 0 20px;color:rgba(16,36,28,.7);font-size:.94rem}
label{display:block;font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
 color:#2e7d5b;margin-bottom:6px}
input{width:100%;box-sizing:border-box;padding:11px 13px;border:1px solid #dfede6;border-radius:10px;
 font-size:1rem;background:#fff;color:inherit}
input:focus{outline:2px solid #e8862d;outline-offset:1px;border-color:#e8862d}
button{width:100%;margin-top:16px;padding:12px;border:0;border-radius:999px;background:#e8862d;
 color:#fff;font-size:1rem;font-weight:700;cursor:pointer}
button:hover{filter:brightness(1.06)}
.err{background:#fdecec;border:1px solid #f5c2c2;color:#8a1c1c;padding:10px 12px;border-radius:10px;
 font-size:.88rem;margin-bottom:16px}
.code{letter-spacing:.4em;text-align:center;font-size:1.3rem;font-weight:700}
`;

const html = (body, status = 200) =>
  new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8">` +
      `<meta name="viewport" content="width=device-width,initial-scale=1">` +
      `<title>TDM admin sign-in</title><style>${STYLE}</style></head>` +
      `<body><div class="card">${body}</div></body></html>`,
    { status, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } },
  );

/** The page that hands the token back to the CMS popup opener, then closes. */
const handoff = (token, origin) => {
  const message = `authorization:github:success:${JSON.stringify({ token, provider: "github" })}`;
  return new Response(
    `<!doctype html><meta charset="utf-8"><body><script>` +
      `(function(){var m=${JSON.stringify(message)};` +
      `if(window.opener){window.opener.postMessage(m,${JSON.stringify(origin)});}` +
      `document.body.textContent='Signed in. You can close this window.';` +
      `setTimeout(function(){window.close();},400);})();` +
      `</script></body>`,
    { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } },
  );
};

// --- GitHub App -------------------------------------------------------------

/** RS256 JWT proving we are the App. GitHub caps these at ten minutes. */
async function appJwt(env) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(enc.encode(JSON.stringify({ alg: "RS256", typ: "JWT" })));
  const payload = b64url(
    enc.encode(JSON.stringify({ iat: now - 60, exp: now + 540, iss: env.GITHUB_APP_ID })),
  );
  const der = Uint8Array.from(atob(String(env.GITHUB_PRIVATE_KEY).replace(/\s+/g, "")), (c) =>
    c.charCodeAt(0),
  );
  const key = await crypto.subtle.importKey(
    "pkcs8",
    der,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    enc.encode(`${header}.${payload}`),
  );
  return `${header}.${payload}.${b64url(signature)}`;
}

/**
 * An installation token, scoped to what the App was installed on and good for
 * one hour. The expiry is the point: the browser only ever holds a credential
 * that dies on its own, unlike a personal access token pasted in by hand.
 */
async function installationToken(env) {
  const res = await fetch(
    `https://api.github.com/app/installations/${env.GITHUB_INSTALLATION_ID}/access_tokens`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${await appJwt(env)}`,
        accept: "application/vnd.github+json",
        "user-agent": "tdm-admin-auth",
      },
    },
  );
  if (!res.ok) {
    throw new Error(`GitHub returned ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  return (await res.json()).token;
}

// --- mail -------------------------------------------------------------------

async function sendCode(env, email, code) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [email],
      subject: `${code} is your TDM admin sign-in code`,
      text:
        `Your sign-in code is ${code}. It is good for ten minutes.\n\n` +
        `If you did not try to sign in to the TDM site admin you can ignore this ` +
        `email — nobody can get in without this code.`,
    }),
  });
  if (!res.ok) {
    throw new Error(`Mail send failed: ${res.status} ${(await res.text()).slice(0, 200)}`);
  }
}

// --- pages ------------------------------------------------------------------

const emailForm = (origin, error) =>
  html(
    `<h1>TDM content admin</h1>` +
      `<p>Sign in with your email address to publish changes.</p>` +
      (error ? `<div class="err">${esc(error)}</div>` : "") +
      `<form method="POST" action="/auth/start">` +
      `<input type="hidden" name="origin" value="${esc(origin)}">` +
      `<label for="email">Email</label>` +
      `<input id="email" name="email" type="email" required autocomplete="email" autofocus>` +
      `<button type="submit">Email me a code</button></form>`,
  );

const codeForm = (origin, email, challenge, exp, error) =>
  html(
    `<h1>Check your email</h1>` +
      `<p>We sent a six-digit code to <strong>${esc(email)}</strong>. It expires in ten minutes.</p>` +
      (error ? `<div class="err">${esc(error)}</div>` : "") +
      `<form method="POST" action="/auth/verify">` +
      `<input type="hidden" name="origin" value="${esc(origin)}">` +
      `<input type="hidden" name="email" value="${esc(email)}">` +
      `<input type="hidden" name="challenge" value="${esc(challenge)}">` +
      `<input type="hidden" name="exp" value="${esc(exp)}">` +
      `<label for="code">Six-digit code</label>` +
      `<input id="code" name="code" class="code" inputmode="numeric" pattern="[0-9]{6}" ` +
      `maxlength="6" required autofocus autocomplete="one-time-code">` +
      `<button type="submit">Sign in</button></form>`,
  );

// --- routes -----------------------------------------------------------------

const handler = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origins = list(env.ALLOWED_ORIGINS);

    /** Only ever hand a token to a site we were configured for. */
    const pickOrigin = (candidate) => {
      const value = String(candidate || "").toLowerCase();
      if (origins.includes(value)) return value;
      const host = value.replace(/^https?:\/\//, "").replace(/\/$/, "");
      return origins.find((o) => new URL(o).hostname === host) || null;
    };

    const notConfigured = (detail) =>
      html(`<h1>Not configured</h1><p>${esc(detail)}</p>`, 400);

    if (url.pathname === "/auth" && request.method === "GET") {
      // The CMS passes site_id as a bare hostname.
      const origin = pickOrigin(url.searchParams.get("site_id"));
      if (!origin) return notConfigured("This site is not listed in ALLOWED_ORIGINS.");
      return emailForm(origin);
    }

    if (url.pathname === "/auth/start" && request.method === "POST") {
      const form = await request.formData();
      const origin = pickOrigin(form.get("origin"));
      if (!origin) return notConfigured("Unknown site origin.");

      const email = String(form.get("email") || "").trim().toLowerCase();
      if (!list(env.ALLOWED_EMAILS).includes(email)) {
        // Same shape as success, so this cannot be used to discover which
        // addresses are allowed to publish.
        return codeForm(origin, email, "", "0", "If that address can publish, a code is on its way.");
      }

      const code = String(crypto.getRandomValues(new Uint32Array(1))[0] % 1e6).padStart(6, "0");
      const exp = String(Date.now() + CODE_TTL_MS);
      const challenge = await hmac(env.SIGNING_SECRET, `${email}:${code}:${exp}:${origin}`);

      try {
        await sendCode(env, email, code);
      } catch (err) {
        return emailForm(origin, `Could not send the email. ${err.message}`);
      }
      return codeForm(origin, email, challenge, exp);
    }

    if (url.pathname === "/auth/verify" && request.method === "POST") {
      const form = await request.formData();
      const origin = pickOrigin(form.get("origin"));
      if (!origin) return notConfigured("Unknown site origin.");

      const email = String(form.get("email") || "").trim().toLowerCase();
      const code = String(form.get("code") || "").trim();
      const challenge = String(form.get("challenge") || "");
      const exp = String(form.get("exp") || "0");

      if (!Number(exp) || Number(exp) < Date.now()) {
        return emailForm(origin, "That code expired. Please start again.");
      }

      const expected = await hmac(env.SIGNING_SECRET, `${email}:${code}:${exp}:${origin}`);
      if (!challenge || !safeEqual(expected, challenge)) {
        return codeForm(origin, email, challenge, exp, "That code is not right.");
      }

      try {
        return handoff(await installationToken(env), origin);
      } catch (err) {
        return codeForm(origin, email, challenge, exp, `Code accepted, but GitHub refused: ${err.message}`);
      }
    }

    return new Response("Not found", { status: 404 });
  },
};

export default handler;
