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

## Client and agency logos

`public/images/clients/` holds 33 logos — 12 agency, 21 clientele — rendered on
the homepage marquee in greyscale, with `dark:invert` for the dark theme.

**28 of them are covered by written permission**, confirmed by the owner on
2026-08-05 and recorded in PRODUCT.md → *Evidence on Hand*.

**The five added on 2026-08-05 are not yet covered by that record.** They came
from the owner's `public/new-logo-client/` drop:

| File | Brand |
|---|---|
| `clientele-17.png` | MMHE |
| `clientele-18.png` | Sapura |
| `clientele-19.png` | Transwater |
| `clientele-20.png` | Heerema |
| `clientele-21.png` | JPS |

A logo on a client wall is a public claim of a commercial relationship, which is
the exact class of claim PRODUCT.md fences hardest. The owner supplying the files
is a strong signal that these are real clients, but **the permission record needs
extending to cover them explicitly** the way it does the original 28. Until it
does, this is the only place that says so.

Two notes on the artwork itself:

- **Heerema** is displayed as its wordmark only. The supplied lock-up is a
  portrait file whose upper 82% is a solid orange square; greyscaled and
  inverted, that square renders as a filled light block among transparent
  wordmarks. Cropping to the wordmark is an alteration of a third party's mark,
  so flag it if their brand guidelines forbid it.
- **JPS** is a symbol with no lettering, and its waves separate by hue rather
  than by value, so in greyscale it reads as an abstract ribbon rather than as
  an identifiable client. The `alt` text names it, so assistive tech is fine,
  but sighted visitors cannot tell whose it is. **A lock-up version carrying the
  JPS letters would fix this** and is worth asking the owner for.

A sixth file in that drop, `PETROFAC.png`, was **not** added: Petrofac is
already on the wall as `clientele-02.png`.

## Everything else

All other imagery under `public/images/` is a Google Stitch AI render from the
original design conversion (`stitch/`). It is not third-party stock.

`public/new-logo-client/` still holds the six original full-colour files. Note
that everything under `public/` is served verbatim, so those originals are
publicly reachable once deployed even though nothing links to them. They are
redundant now that the processed versions are in `clients/` — worth moving out
of `public/` or deleting.
