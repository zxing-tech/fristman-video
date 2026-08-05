# Unsplash photo credits

The four photographs in this directory back the "Why Firstman Videos" bento on
the homepage. They came from the Unsplash API and are used under the
[Unsplash License](https://unsplash.com/license) (free for commercial use, no
permission needed).

> **Attribution here is not optional the way the Pexels set's is.** The Unsplash
> *License* only says credit is appreciated, but the [API Use
> Guidelines](https://help.unsplash.com/en/articles/2511315-guidelines-and-crediting)
> — which is what these were fetched under — require crediting the photographer
> and Unsplash with UTM-tagged links wherever the photos appear. See
> `ATTRIBUTIONS.md` for where that still needs a visible home.

The required per-photo markup is:

```html
Photo by <a href="https://unsplash.com/@USERNAME?utm_source=firstman-videos&utm_medium=referral">NAME</a>
on <a href="https://unsplash.com/?utm_source=firstman-videos&utm_medium=referral">Unsplash</a>
```

| File | Photographer | Photo page | What it shows |
|---|---|---|---|
| `why-safety-permit.jpg` | [Anthony Maw](https://unsplash.com/@anthonymaw) | [Photo](https://unsplash.com/photos/oil-refinery-by-a-river-at-dusk-EbISsANu3Iw) | A refinery at dusk seen from an elevated distance: distillation columns and stacks silhouetted in the foreground, a lit flare stack at the right, a wide river reflecting the last of the light, and an industrial waterfront with lit sheds and a bulk pile on the far bank. |
| `why-site-awareness.jpg` | [CHUTTERSNAP](https://unsplash.com/@chuttersnap) | [Photo](https://unsplash.com/photos/aerial-view-of-industrial-factory-_EFvjSgbw1c) | Straight-down drone view of a plant roof — banked cooling fans, insulated ducting, rows of process units, and heavily rusted pipe runs crossing the frame. Shot on a DJI FC220. |
| `why-uav-ground.jpg` | [Efraín E. Marmolejos](https://unsplash.com/@theefra) | [Photo](https://unsplash.com/photos/a-drone-is-silhouetted-against-an-orange-sky-21Oe5DWyDDI) | A quadcopter hovering in silhouette against an orange dusk sky, props blurred, navigation lights lit, with out-of-focus construction cranes and a treeline along the bottom edge. |
| `why-regional-deployment.jpg` | [Julia Taubitz](https://unsplash.com/@justmejuliee) | [Photo](https://unsplash.com/photos/large-industrial-storage-tanks-by-the-sea-under-blue-sky-azKLtf40EQg) | Four large cylindrical storage tanks in a row on a coastal terminal behind a rock breakwater, wind turbines and smaller tank farms behind them, open water across the foreground. |

## Notes on selection

- All four are real photographs. That was the point of the exercise: they
  replace four Google Stitch AI renders (`stitch/ba0390236d`, `13ca39f31a`,
  `a37924086a`, `6d4182646b`), which PRODUCT.md `## Evidence on Hand` records as
  512px AI output that must never be read as project documentation.
- Every frame was checked at full resolution for legible company names, logos,
  signage and watermarks; none carry any. Two strong candidates were rejected
  during the search and are not in this repo: a container-port shot with a
  docked cruise ship carrying a large legible `AIDA / www.aida.de` hull logo,
  and a "large industrial port" result that was actually Chicago's Navy Pier.
- No prominent or identifiable faces, so no model releases are in play.
- **These are stock.** None of them depicts a Firstman site, project or client.
  The `alt` text on each card describes only what is visible in the frame and
  makes no project claim, and the surrounding copy is about how the company
  works rather than about the pictured facility.

## Measured against the card, not assumed

`PhotoCard`'s scrim stops were tuned against a different set of photographs, so
white-on-photo contrast was re-measured for these four rather than inherited.
Method: caption text set to `transparent` (layout and hover geometry unchanged),
each card screenshotted at 1440px in both its resting and hovered state, then
the **brightest** pixel sampled inside each text rect and compared against white.

| Card | Rest title | Hover title | Hover body |
|---|---|---|---|
| Safety-First (24px bold / 16px) | 6.87 | 4.70 | 6.08 |
| Site Awareness (20px bold / 14px) | 5.92 | **4.17** | 7.89 |
| UAV + Ground (20px bold / 14px) | 5.82 | 4.41 | 13.27 |
| Rapid Regional (20px bold / 14px) | 8.11 | 7.20 | 15.95 |

All titles are 20px+ at weight 700, which is WCAG large text (floor 3.0); body
copy takes the 4.5 floor. Everything passes, the tightest at 1.39x its floor —
the hovered title on `why-site-awareness.jpg`, which is by far the brightest
image of the four. **If that image is ever swapped for something brighter, or
the titles ever drop below 18.66px bold, re-run this measurement.** The scrim
values in `photo-card.tsx` were left untouched because they held, not because
they were assumed to.

## Sizing

Delivered at source resolution, then right-sized to what the cards actually
paint and re-encoded through mozjpeg at q84, 4:4:4:

| File | Delivered | Shipped | Size |
|---|---|---|---|
| `why-safety-permit.jpg` | 2000x800 | 2000x800 | 276KB |
| `why-site-awareness.jpg` | 1920x1234 | 1200x771 | 274KB |
| `why-uav-ground.jpg` | 1920x1234 | 1200x771 | 49KB |
| `why-regional-deployment.jpg` | 1920x600 | 1920x600 | 160KB |

The two single-column cards render 389 CSS px wide, and `bg-cover` on their
aspect ratio uses at most ~500 CSS px of source, so 1920px was roughly 2.5x
more pixels than any display could show. 1200px still clears 2x DPR with room.
The two `md:col-span-2` cards render 803 CSS px and keep their full width,
which is the right resolution for 2x. Total 761KB, down from 1063KB as
delivered. Contrast was re-measured after the resample — the tightest figure
moved 4.28 -> 4.17, still well clear.

The four Stitch renders these replaced totalled 239KB, so this section is
~522KB heavier than before. That is the cost of real photographs at usable
resolution instead of 512px AI output, and it buys the one thing PRODUCT.md
says the site is short of.
