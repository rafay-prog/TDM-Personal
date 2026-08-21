# Setting up the content admin

The admin lives at **/admin** on the live site. The owner signs in with their
**email address** — no GitHub account, no repository access — writes a post, and
hits save. The change is committed to GitHub, Vercel builds from that commit,
and it is live about a minute later.

Every edit stays an ordinary commit, so anything can be reviewed or reverted
like any other change.

## How the sign-in works

A browser cannot be trusted to hold a credential that can write to your repo,
so there is a small service in between — `admin-auth/worker.js`, a Cloudflare
Worker:

1. The CMS opens a popup at the worker.
2. The owner types their email. If it is on the allowlist, the worker emails a
   six-digit code.
3. They type the code back into the popup.
4. The worker mints a **one-hour GitHub App token** and hands it to the CMS,
   which uses it to commit.

The token expires by itself, is scoped to this one repository, and the commits
are attributed to the app rather than to a person. Nothing is stored anywhere:
the pending code travels as a signed challenge inside the form, so there is no
session store to leak and nothing to clean up.

A magic link would have been friendlier, but it cannot work — it opens in a new
tab, and the popup that the CMS is listening to would never hear back. Hence the
code.

## What you need to set up

Four accounts, all free, once. Roughly half an hour.

### 1. GitHub App

1. <https://github.com/settings/apps> → **New GitHub App**.
   - **Name**: `TDM site admin`
   - **Homepage URL**: your site
   - **Webhook**: untick **Active** — this app never receives webhooks
   - **Permissions → Repository → Contents**: **Read and write**
     (that alone is enough; leave everything else)
   - **Where can this app be installed**: only this account
2. Create it, then note the **App ID**.
3. **Generate a private key** — a `.pem` downloads. Keep it out of the repo.
4. **Install App** → install it on **`rafay-prog/TDM-Personal` only**.
   After installing, the URL ends in a number, e.g.
   `/settings/installations/12345678` — that is the **Installation ID**.

The private key is PKCS#1, and the Worker runtime needs PKCS#8. Convert it once:

```bash
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in your-key.pem -out key-pkcs8.pem
```

Then take the base64 body — everything between the `BEGIN`/`END` lines, newlines
stripped — as the value for `GITHUB_PRIVATE_KEY`.

### 2. Resend, to send the code

1. Sign up at <https://resend.com> (free tier is ample — one email per sign-in).
2. Verify the sending domain, or use their sandbox sender while testing.
3. Create an API key.

### 3. Deploy the worker

```bash
cd admin-auth
npx wrangler deploy
```

Then set the secrets:

```bash
npx wrangler secret put SIGNING_SECRET          # any long random string
npx wrangler secret put ALLOWED_EMAILS          # owner@company.com,you@example.com
npx wrangler secret put ALLOWED_ORIGINS         # https://your-site.vercel.app
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put MAIL_FROM               # TDM <admin@thedigitalmarketing.services>
npx wrangler secret put GITHUB_APP_ID
npx wrangler secret put GITHUB_INSTALLATION_ID
npx wrangler secret put GITHUB_PRIVATE_KEY      # the PKCS#8 base64 body
```

`ALLOWED_EMAILS` is the whole access list. To let someone else publish, add
their address; to remove them, take it out. Nobody needs a GitHub account and
nobody gets repository access.

`ALLOWED_ORIGINS` is what stops another site pointing its own admin at your
worker and getting a token out of it. Keep it tight.

### 4. Point the admin at the worker

In `public/admin/config.yml`:

```yaml
backend:
  base_url: https://tdm-admin-auth.YOUR-SUBDOMAIN.workers.dev   # no trailing slash
```

Commit and push. Open `/admin`, sign in with email, and you are in.

## Checking it without deploying

```bash
node admin-auth/worker.test.mjs
```

Sixteen checks covering the origin allowlist, the email allowlist, code
generation and expiry, the rejection paths, and — most importantly — the exact
message shape the CMS parses. No mail is sent and GitHub is never called.

## Using the admin

- **Blog posts** are English only.
- **Case studies** exist in English, French and Arabic, shown side by side. You
  can save with translations empty and fill them in later.
- **Order** decides sequence. Case study `0` is featured on the home page and
  heads the case-studies index; blog `order` decides the "keep reading" set at
  the foot of a post.
- **Anonymous** on a case study is a safety switch: while it is on, only the
  public name is rendered and the real client name never reaches the page. Leave
  it on until the client has approved being named.
- Saving creates a **pull request**. Nothing reaches the live site until
  **Publish** is pressed in the admin.

## Editing locally, with no sign-in at all

The admin's **Work with Local Repository** button opens the content straight
from a folder on your machine — no token, no worker, no internet. Good for
drafting, and the only sensible way to try the editor on `localhost`, because
the CMS reports `cms.netlify.com` as its site id there, which the worker will
correctly refuse.

## If a build fails after publishing

Content is typed on the way in, so a missing required field fails the Vercel
build rather than shipping a broken page — and the previous version stays live
in the meantime. The deploy log names the file. Fix it in the admin and save
again.

## If sign-in stops working

- **"Not configured"** — the site's origin is not in `ALLOWED_ORIGINS`.
- **"If that address can publish…" and no email** — the address is not in
  `ALLOWED_EMAILS`. This message is deliberately the same whether or not the
  address is on the list, so nobody can use the form to discover who can publish.
- **"Code accepted, but GitHub refused"** — the code was right, so the problem is
  the App credentials: check the App ID, the Installation ID, and that the
  private key was converted to PKCS#8.
