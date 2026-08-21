# The content admin

The admin is a page of this site, at **/admin**. It edits the JSON files under
`/content` — blog posts and case studies — directly in your checkout.

Nothing is uploaded and nothing is deployed. A save is a file change on your
machine, exactly as if you had edited the JSON by hand, so it shows up in
`git status` and goes live the same way everything else does: commit and push.

## Using it

1. Open `/admin` — locally at <http://localhost:3000/admin>, or on the deployed
   site once it is pushed.
2. Click **Open project folder** and choose the repository root.
3. Grant edit permission when the browser asks.

You get two collections in the header:

- **Blog posts** — English only.
- **Case studies** — English, French and Arabic, on tabs. A language with no
  translation yet shows an amber dot, and is left untouched on save rather than
  written blank, so you can add the translations whenever.

Then **Save to disk**. Afterwards, `git diff` shows exactly what changed.

### Things worth knowing

- **Order** decides sequence. Case study `0` is featured on the home page and
  heads the case-studies index; blog `order` decides the "keep reading" set at
  the foot of a post. The blog index itself sorts by date.
- **Shared fields on a case study** — order, slug, sector, anonymous, and the
  real client name — are written into all three language files at once, so the
  translations cannot drift apart on the things that must match.
- **Anonymous** is a safety switch. While it is on, only the public name is
  rendered and the real client name never reaches the page. Leave it on until
  the client has approved being named.
- **Renaming a slug** moves the file. The old one is deleted, so a post is never
  published twice under two names — but any existing links to the old URL break,
  so avoid it once something is live.
- Required fields are checked on save, and only **English** is required for a
  case study.

### Browser support

The admin writes to local files through the File System Access API, which only
Chromium browsers have: **Chrome and Edge**. Firefox and Safari show a notice
instead. This is the main reason it is a developer tool for now.

## Publishing

```bash
git add content
git commit -m "Add <post>"
git push
```

Vercel builds from the push, and the change is live about a minute later.

Content is typed on the way in, so a malformed file fails the build rather than
shipping a broken page — and the previous version stays live in the meantime.
The deploy log names the file.

## Later: letting the owner publish without a checkout

As it stands, editing needs the repository on the machine, which means you.
When the owner should publish for themselves, the piece that makes that possible
is already written and tested: `admin-auth/worker.js`.

It is a Cloudflare Worker that signs someone in **by email** — they type their
address, get a six-digit code, and the worker mints a one-hour GitHub App token
so the browser can commit. The owner never needs a GitHub account and never gets
access to the repository. Its guardrails are an origin allowlist, an email
allowlist that cannot be used to discover who is on it, and a constant-time code
comparison.

`node admin-auth/worker.test.mjs` runs sixteen checks over it without sending
mail or calling GitHub.

Turning it on means deploying the worker, creating a GitHub App installed on
this repository alone, converting its private key to PKCS#8, and adding a Resend
account to send the code — then teaching the admin page to commit through the
worker instead of writing to disk. The worker half is done; the admin half is
not.
