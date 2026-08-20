# Sector hero artwork

| File | Sector | Page | Status |
| --- | --- | --- | --- |
| `development.webp` | Development | `/development/` | ✅ in place |
| `media.webp` | Media | `/media/` | ⬜ needed |
| `marketing.webp` | Marketing | `/marketing/` | ⬜ needed |

Staff Augmentation has no artwork and renders the text-only hero until a file is
added here and registered in `src/lib/sector-media.ts`.

## Adding the remaining two

Drop the raw file in this folder under **any** name or format (JPG, PNG, WebP),
then run:

```bash
node scripts/optimize-images.mjs public/sectors
```

It resizes to 1600px wide, encodes WebP at quality 82, and prints the before /
after size. Then rename the output to `media.webp` / `marketing.webp` and delete
the raw source.

To convert one file straight to the right name:

```bash
node scripts/optimize-images.mjs public/sectors/whatever.jpg media
```

## Why this step is not optional

`next.config.ts` sets `images: { unoptimized: true }` for the static export, so
Next serves whatever is here **byte-for-byte** — it does not resize or re-encode.
The Development source was an 8000x5000 JPEG at 1.9 MB; converted it is 1600x1000
at 34 KB, a 98% saving, and it renders at roughly 600px wide on desktop anyway.

## Watch the file extension on Windows

Explorer hides known extensions by default, so a file saved as
`development.webp.jpg` displays as `development.webp` while actually being a
JPEG. Turn on **View → File name extensions** in Explorer to see the truth.
