# Attributions

Third-party media shipped in this repository.

## Hero background video

| File | Source | Creator |
|---|---|---|
| `public/videos/hero.mp4` | [Factory at night](https://www.pexels.com/video/factory-at-night-856627/) (Pexels video 856627), 1920×1080 rendition | [Pixabay](https://www.pexels.com/@pixabay) on [Pexels](https://www.pexels.com) |
| `public/videos/hero-poster.jpg` | Frame 0 of the same clip, extracted locally and re-encoded at 1280×720 | — |

Licensed under the [Pexels License](https://www.pexels.com/license/): free for
commercial use, no permission needed. **Attribution is not required** — this file
exists as an internal record of where the media came from, not as a licence
obligation. A visible credit in the site footer is optional.

The clip is stock footage of an unrelated facility. It is used as atmosphere only
and must never be captioned, described, or implied to be Firstman's own work, or
to depict a Firstman project or client site. See `PRODUCT.md` → *Evidence on Hand*.

## Pexels photos

`public/images/pexels/` holds 11 real photographs (fabrication yard, offshore
platform, refinery, firefighter training, night refinery, team portrait, and
five construction-progress stages) sourced from the Pexels API. Full
per-file photographer credit, photo-page links, and screening notes are in
[`public/images/pexels/CREDITS.md`](public/images/pexels/CREDITS.md).
Licensed under the [Pexels License](https://www.pexels.com/license/): free
for commercial use, no attribution legally required.

<a href="https://www.pexels.com">Photos provided by Pexels</a> — this credit
link needs a visible home (footer) before the site ships, per Pexels'
attribution guidelines.

## Unsplash photos

`public/images/unsplash/` holds 4 real photographs backing the homepage's "Why
Firstman Videos" bento: a refinery at dusk, a top-down plant roof, a quadcopter
in silhouette, and a coastal tank terminal. Per-file photographer credit,
photo-page links, screening notes and the measured white-on-photo contrast
figures are in
[`public/images/unsplash/CREDITS.md`](public/images/unsplash/CREDITS.md).

They replaced four Google Stitch AI renders. The renders are still on disk under
`stitch/` because `lib/data/image-manifest.json` records them as part of the
conversion history, but nothing renders them any more.

**This set carries a real attribution obligation, unlike the Pexels one.** The
[Unsplash License](https://unsplash.com/license) alone would make credit
optional, but these were fetched through the Unsplash API, and its [API Use
Guidelines](https://help.unsplash.com/en/articles/2511315-guidelines-and-crediting)
require crediting the photographer and Unsplash with UTM-tagged links wherever
the photos are used. The four credit lines are written out in CREDITS.md and
have **no visible home on the site yet.**

So the footer now owes two credits, not one: the optional Pexels line above and
this required Unsplash set. Neither is in the markup today.

## Everything else

All other imagery under `public/images/` is either a Google Stitch AI render from
the original design conversion (`stitch/`) or a client and agency logo used with
written permission (`clients/`). Neither is third-party stock.
