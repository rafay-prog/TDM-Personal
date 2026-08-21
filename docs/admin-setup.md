# Setting up the content admin

The admin lives at **/admin** on the live site. It edits the JSON files under
`/content`, commits them to GitHub, and Vercel deploys from that commit — so
publishing a post is a normal deploy, and every edit is an ordinary commit you
can review or revert.

You need to sign in before you can publish, because the admin writes to your
GitHub repo. There are two ways to do that. Start with the first — it takes two
minutes and needs nothing but GitHub.

## Option A — Personal access token (simplest)

1. Go to <https://github.com/settings/personal-access-tokens/new>
   (**Settings → Developer settings → Personal access tokens → Fine-grained**).
2. Set:
   - **Token name**: `TDM site admin`
   - **Expiration**: whatever you are comfortable re-doing — 90 days is a
     sensible default, and the admin will simply ask you to sign in again.
   - **Repository access**: **Only select repositories** → `rafay-prog/TDM-Personal`
   - **Permissions → Repository permissions → Contents**: **Read and write**
     (that one permission is enough; leave everything else alone)
3. Generate it and copy the token.
4. Open `/admin` on the live site, click **Sign In Using Access Token**, paste it.

The token is stored in your browser only. It is not committed, it never reaches
the site's code, and nobody else can see it — including me. Do not paste it into
a chat, an email, or a file in the repo. If it ever leaks, revoke it on that
same GitHub settings page and make a new one.

Because it is scoped to one repository and to Contents only, the worst a leaked
token could do is edit this site's files — it cannot touch your other repos or
your account.

## Option B — GitHub sign-in button (better for more than one editor)

Worth doing if other people will edit, since they each sign in as themselves
rather than sharing a token. It needs a small free service to swap a login code
for a token, because a browser cannot be trusted to hold your client secret.

1. Create a GitHub OAuth app at <https://github.com/settings/developers> →
   **OAuth Apps** → **New OAuth App**. Homepage URL is your site; leave the
   callback URL blank for now.
2. Deploy the ready-made worker from <https://github.com/sveltia/sveltia-cms-auth>
   — its README has a one-click **Deploy to Cloudflare** button. The free plan
   is fine, and you do not have to write any code.
3. In the worker's **Settings → Variables**, set `GITHUB_CLIENT_ID`,
   `GITHUB_CLIENT_SECRET` (mark it encrypted) and `ALLOWED_DOMAINS` — your
   site's domain, which is what stops another site using your login service.
4. Set the OAuth app's callback URL to the worker URL with `/callback` on the end.
5. Put the worker URL into `public/admin/config.yml` as shown below, then
   commit and push.

## The `base_url` line

`public/admin/config.yml` carries a placeholder:

```yaml
backend:
  base_url: https://REPLACE-ME.workers.dev   # ← only needed for Option B
```

Option A ignores it entirely, so you can leave it as it is. For Option B, put
your worker URL there with no trailing slash.

## Using it

- **Blog posts** are English only.
- **Case studies** exist in English, French and Arabic. The editor shows the
  three side by side; you can save with translations empty and fill them later.
- **Order** decides the sequence. Case study `0` is the one featured on the home
  page and at the top of the case-studies index. Blog `order` decides the "keep
  reading" set at the foot of a post.
- **Anonymous** on a case study is a safety switch: while it is on, only the
  public name is rendered and the real client name never reaches the page.
  Leave it on until the client has approved being named.
- Saving creates a **pull request** rather than publishing straight away. Nothing
  reaches the live site until you hit **Publish** in the admin.

## Editing without publishing

The admin's **Work with Local Repository** button opens the content straight
from a folder on your own machine, with no token and no internet. Useful for
drafting, or for trying the editor before setting any of this up. Changes land
as ordinary file edits you can then commit.

## Who can log in

With Option B, anyone with write access to `rafay-prog/TDM-Personal`. Add them
as a collaborator on the repo to grant editing rights, remove them there to
revoke it — there is no separate list of admin users to keep in sync.

## If a build fails after publishing

The content files are typed on the way in — a missing required field will fail
the Vercel build rather than ship a broken page. The deploy log names the file.
Fix it in the admin and save again; the previous version stays live in the
meantime.
