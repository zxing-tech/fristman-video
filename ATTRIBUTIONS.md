# Attributions

Third-party media shipped in this repository.

## Hero background video (retired 2026-08-07)

**`public/videos/hero.mp4` no longer holds this clip.** It was replaced in place
on 2026-08-07 with owner-supplied footage — see *Owner-supplied footage and
photographs* below. The record here covers the file that used to be at that path
and is kept because the licence it describes is the one thing that does **not**
transfer to whatever replaces it.

| File | Source | Creator |
|---|---|---|
| `public/videos/hero.mp4` *(until 2026-08-07)* | [Factory at night](https://www.pexels.com/video/factory-at-night-856627/) (Pexels video 856627), 1920×1080 rendition | [Pixabay](https://www.pexels.com/@pixabay) on [Pexels](https://www.pexels.com) |
| `public/videos/hero-poster.jpg` *(until 2026-08-07)* | Frame 0 of the same clip, extracted locally and re-encoded at 1280×720 | — |

Licensed under the [Pexels License](https://www.pexels.com/license/): free for
commercial use, no permission needed. **Attribution is not required** — this file
exists as an internal record of where the media came from, not as a licence
obligation. A visible credit in the site footer is optional.

That clip was stock footage of an unrelated facility, used as atmosphere only,
and must never be captioned, described, or implied to be Firstman's own work, or
to depict a Firstman project or client site. See `PRODUCT.md` → *Evidence on
Hand*. Whether the same sentence applies to the clip that replaced it is exactly
the open question below.

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

## Owner-supplied footage and photographs (2026-08-07)

Three deliveries arrived from the owner on 2026-08-07 and all three are now
live. **None came with a source, a licence or a receipt**, so every line below is
a description of what shipped, not a clearance. Establish provenance for all of
it before launch.

The delivered masters are in `source-media/`, outside `public/` so they are
neither served nor deployed, and gitignored so 185 MB of camera files do not
enter history. Everything in `public/videos/` and `public/images/why/` is a
re-encode of them at the same in and out points — the owner ruled out trimming,
so no clip is cut.

### Service hero clips

`public/videos/services/` holds three clips, each on the `/services/*` page it
was named for. They are the delivered masters re-encoded for the web — same in
and out points, audio dropped, 1080p plus a 720p phone rendition. Details and the
encode recipe are in `lib/hero-media.ts`.

| Page | Clip | What it shows |
|---|---|---|
| `/services/corporate-videos` | `corporate-videos.mp4` | A corporate video produced **for Transwater**: their signage, their premises, valve product shots, technicians, closing on a wall of their clients' logos |
| `/services/facility-overview-films` | `facility-overview-films.mp4` | Aerial of a coastal petrochemical terminal — jetty, tank farm, LNG spheres — with the client's motion-graphic squares burned in |
| `/services/industrial-photography` | `industrial-photography.mp4` | A montage of industrial portraits and offshore work |

**The Corporate Videos clip needs a decision before launch.** It is the strongest
piece of real evidence on the site — an actual Firstman production — and it is
also the site's biggest unfenced claim. Its closing shot is a lit wall carrying
**Petronas, Shell, ExxonMobil, Tenaga Nasional, Malakoff, Hibiscus Petroleum,
EnQuest, Sapura Energy and BASF Petronas Chemicals**, and it sits directly beside
the words "Corporate Videos". Those are *Transwater's* clients inside
*Transwater's* video; nothing on the page says so, and a visitor will read them
as Firstman's. Transwater itself is `clientele-19.png` on the homepage marquee —
one of the five logos the section below records as **not yet covered** by the
written permission record. Showing a client's premises, signage and client wall
in full motion is a larger ask than a greyscale logo in a marquee.

Two edit properties ship as delivered because fixing them would mean cutting:
all three end in a "grid collapse to black" outro that blinks once per loop, and
Photography fades up from black.

### Homepage hero clip

`public/videos/hero.mp4` was replaced in place on the same day. It is an offshore
topside load-out — SPMT transporters walking a yellow structure onto a barge,
tugs alongside — and it reads as Firstman's own work rather than stock, which
would make it the first real footage on the site. **Nothing confirms that.** The
Pexels 856627 licence recorded further up this file belonged to the clip it
replaced and does not carry over.

### Published films on `/our-work`

Six of the nine entries on `/our-work` play real films from the company's own
YouTube channel (`@firstmanvideos`), owner-supplied on 2026-08-07 and verified
public through the oEmbed endpoint. **No third-party attribution is owed** —
the channel is Firstman's and the films are Firstman's work. Several things
about them are still worth recording:

- **They name real clients, and that is now a public claim in machine-readable
  form.** `videoObjectSchema` in `lib/seo.ts` emits `about: Organization` per
  public film, so a search engine reads "Firstman made this for Transwater /
  MAHB / Sapura / MMHE / Hess / Petronas / JPS / Jerun". The films are already
  published under those names on the channel, so the claim is not new — but the
  site is now repeating it, and client consent to a YouTube upload is not
  automatically consent to a portfolio page.
- **`Vho5NjMFcYE` (MMHE / Hess / Petronas, Full EPCIC) is a watermarked draft.**
  "evaluation copy for client review" is burned into the picture and into the
  thumbnail. The owner was shown this on 2026-08-07 and chose to publish it.
  Replace the id with a final master when one exists.
- **`shell-sarawak-f6vlap` went private 2026-08-11**, at the owner's request.
  Its real client, title and summary stay on the page — the card now shows a
  locked plate and a Request Access CTA instead of playing the film, and its
  `VideoObject` entry was removed rather than left pointing at a video the site
  no longer links to. The published YouTube id is not carried anywhere in the
  codebase as a "preview" — going private means this site stops linking to the
  full film, not that the id becomes semi-public under a different name.
- **Two entries never had a real film to begin with.** `petrofac-kemaman` and
  `confidential-oag` are the placeholder copy PRODUCT.md `## Evidence on Hand`
  already named as invented; they moved from a bespoke featured panel and an
  inline card into the same locked-grid-card component `shell-sarawak-f6vlap`
  now uses, but nothing about what they claim changed. See
  `lib/data/our-work.ts` for the per-entry provenance notes.

Playback uses `youtube-nocookie.com` and the iframe is mounted only after a
click, so a visitor who never presses play makes no request to Google. That is a
technical default, not consent: `app/privacy-policy/cookie-banner.tsx` persists
nothing and gates nothing, so if a real consent gate ever lands, the embed is
what it has to gate. The same will apply to private-film preview clips once the
owner supplies them (`PrivateFilm.previewYoutubeId`, unset on every entry as of
2026-08-11) — a preview plays through the identical lightbox and iframe.

### Homepage bento photographs

`public/images/why/` holds the four photographs behind the homepage's "Why
Firstman Videos" bento. They read as commercial stock — staged crews,
model-released faces — and none depicts a Firstman crew, client or site. Crops,
the baked highlight rolloff, the screening notes and the measured white-on-photo
contrast figures are in
[`public/images/why/README.md`](public/images/why/README.md).

## Unsplash photos (retired 2026-08-07)

`public/images/unsplash/` held 4 real photographs backing the homepage's "Why
Firstman Videos" bento: a refinery at dusk, a top-down plant roof, a quadcopter
in silhouette, and a coastal tank terminal. Per-file photographer credit,
photo-page links, screening notes and the measured white-on-photo contrast
figures are in
[`public/images/unsplash/CREDITS.md`](public/images/unsplash/CREDITS.md).

**Nothing renders them any more** — the owner-supplied set above replaced them on
2026-08-07. The files are still on disk, and while they are, they still ship.

They had replaced four Google Stitch AI renders. The renders are still on disk
under `stitch/` because `lib/data/image-manifest.json` records them as part of
the conversion history, but nothing renders them any more either.

**This set carries a real attribution obligation, unlike the Pexels one.** The
[Unsplash License](https://unsplash.com/license) alone would make credit
optional, but these were fetched through the Unsplash API, and its [API Use
Guidelines](https://help.unsplash.com/en/articles/2511315-guidelines-and-crediting)
require crediting the photographer and Unsplash with UTM-tagged links wherever
the photos are used. The four credit lines are written out in CREDITS.md and have
**no visible home on the site yet.** Deleting the four files is the cheapest way
to close that obligation, now that nothing displays them.

So the footer owes the optional Pexels line above, and owes the Unsplash credits
for as long as those four files remain in the repository. Neither is in the
markup today.

## Client and agency logos

`public/images/clients/` holds 38 logos — 12 agency, 26 clientele — rendered on
the homepage marquee in greyscale, with `dark:invert` for the dark theme.

**28 of them are covered by written permission**, confirmed by the owner on
2026-08-05 and recorded in PRODUCT.md → *Evidence on Hand*.

**Ten are not yet covered by that record**, across three owner drops:

| File | Brand | Added |
|---|---|---|
| `clientele-17.png` | MMHE | 2026-08-05 |
| `clientele-18.png` | Sapura Energy | 2026-08-05, artwork replaced 2026-08-07 |
| `clientele-19.png` | Transwater | 2026-08-05 |
| `clientele-20.png` | Heerema | 2026-08-05 |
| `clientele-21.png` | JPS | 2026-08-05 |
| `clientele-22.png` | ONGC | 2026-08-07 |
| `clientele-23.png` | Swire Projects | 2026-08-07 |
| `clientele-24.png` | Google | 2026-08-07 |
| `clientele-25.png` | PlayStation | 2026-08-07 |
| `clientele-26.png` | Heerema Marine Contractors | 2026-08-07 |

A logo on a client wall is a public claim of a commercial relationship, which is
the exact class of claim PRODUCT.md fences hardest. The owner supplying the files
is a strong signal that these are real clients, but **the permission record needs
extending to cover them explicitly** the way it does the original 28. Until it
does, this is the only place that says so.

**Google and PlayStation are the highest-exposure names on this wall**, and they
are the two worth raising with the owner first. Everything else on the roster is
an industrial, agency or regional brand whose relationship a reader can place;
these two are global consumer marks whose enforcement teams are active, and both
are named in the same row as Petronas and Shell, where a reader looking for Oil &
Gas credentials will read them as the same kind of claim. They are plausible as
agency-era work — Leo Burnett, M&C Saatchi and Media Prima all sit on the agency
row — but plausible is not documented.

**ONGC is the one addition with corroboration on the site itself**: `/our-work`
carries Firstman's own published film of the Sapura Fabrications ONGC
KG-DWN-98/2 scope.

Four notes on the artwork itself. All four are the same problem — a mark that
carries its identity in a coloured field rather than in a shape — and the wall's
greyscale plus `dark:invert` is what exposes it:

- **Heerema** is displayed as its wordmark only. The supplied lock-up is a
  portrait file whose upper 82% is a solid orange square; greyscaled and
  inverted, that square renders as a filled light block among transparent
  wordmarks. Cropping to the wordmark is an alteration of a third party's mark,
  so flag it if their brand guidelines forbid it. **The HMC entry below is the
  better answer to the same problem** — if the parent group and the marine
  contracting company are one relationship rather than two, `clientele-26.png`
  should replace this entry and the crop retires with it.
- **ONGC** arrived as white artwork reversed out of a solid red square and had
  the same defect. Rather than crop it, the red field is knocked out and the
  white artwork taken as the ink, so the derrick, the Devanagari and the
  wordmark all survive on transparency at the wall's weight. That is also an
  alteration, and the same caveat applies. Anything else arriving as a reversed
  lock-up needs this treatment; dropped in raw it renders as a grey block.
- **Heerema Marine Contractors** is the same knockout, with one extra rule. The
  mark is a white disc on a red field with the H reversed out of the disc, over
  a wordmark sitting on transparency below. A single knockout rule would have
  taken the blue wordmark with the red field, so the field's own bounding box
  splits the two: inside it only the disc is ink, which leaves the H as a hole
  where the red used to show through; below it the wordmark's own alpha is
  already the shape. The result is the single-colour rendering the mark is
  designed for, not an invention — but it is still an alteration.
- **JPS** is a symbol with no lettering, and its waves separate by hue rather
  than by value, so in greyscale it reads as an abstract ribbon rather than as
  an identifiable client. The `alt` text names it, so assistive tech is fine,
  but sighted visitors cannot tell whose it is. **A lock-up version carrying the
  JPS letters would fix this** and is worth asking the owner for. The 2026-08-07
  drop included a file named `Jabatan Saliran & Pengairan.png`, but the artwork
  inside it is the same wordmark-less waves at 600px and without transparency —
  worse than the 2000px source already in use, so it was not swapped in.

Files supplied but not added, because the wall already carries the same
artwork: `PETROFAC.png` (2026-08-05) — Petrofac is `clientele-02.png`;
`TW-Logo-High-res copy.png` — byte-for-byte the 782x171 artwork
`clientele-19.png` was already built from; `Jabatan Saliran & Pengairan.png` —
see the JPS note above. All three arrived again in the `new-client` drop and
none of them changes what is on screen.

## Everything else

All other imagery under `public/images/` is a Google Stitch AI render from the
original design conversion (`stitch/`). It is not third-party stock.

Both owner logo drops moved to `source-media/logos/` on 2026-08-07 —
`new-logo-client/` (six files, 2026-08-05) and `new-logo-client-2/` (eight
files, 2026-08-07). Everything under `public/` is served verbatim, so full-colour
brand originals sitting there are publicly reachable once deployed even though
nothing links to them. `public/` now holds only `images/` and `videos/`.
