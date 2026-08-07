# "Why Firstman Videos" bento photographs

The four photographs behind the homepage's advantage bento (`app/page.tsx`,
`components/site/photo-card.tsx`). They replaced the Unsplash set in
`public/images/unsplash/` on 2026-08-07.

**Provenance is not recorded yet.** They arrived as four camera-resolution JPEGs
in the owner's `public/new-images/` drop, named for the four cards. They read as
commercial stock — staged crews, model-released faces — but no library, licence
or receipt came with them. Fill this in before launch; if they are paid stock,
the licence tier decides whether web use on a commercial site is covered, and if
they are someone else's photographs the site cannot ship them at all.

**They are not project documentation.** None of these depicts a Firstman crew, a
Firstman client or a Firstman site. The `alt` text on each card describes only
what is in the frame and makes no project claim, and the copy around them is
about how the company works rather than about the pictured facility — the same
rule the Unsplash set shipped under. See PRODUCT.md → *Evidence on Hand*. A
photograph of people in PPE leans on that rule harder than a photograph of a
refinery did, because a visitor reads a crew as *this* crew.

| File | Card | What it shows |
|---|---|---|
| `safety-permit.jpg` | Safety-First Workflow & Compliance | Three workers in hi-vis and hard hats around a quadcopter one of them holds up, a wind turbine tower behind them |
| `site-awareness.jpg` | Deep Industrial Site Awareness | Aerial of a gas processing plant at dusk, distillation columns and a lit flare stack over a wider industrial estate |
| `uav-ground.jpg` | Integrated UAV + Ground Production | A worker in an orange hi-vis vest flying a small quadcopter by handheld controller in front of a piling rig |
| `regional-deployment.jpg` | Rapid Regional Deployment | A drone pilot in a yellow hi-vis jacket watching a quadcopter over a tank farm under a dusk sky |

Every frame was checked at source resolution for legible company names, logos,
signage and watermarks. Nothing legible survives the downscale: the only text in
any of them is a `Zone B` warehouse marker and two asset tags on tank shells in
`site-awareness.jpg` and `regional-deployment.jpg`, all out of focus and under
4px tall at shipped size.

## Crops

Each file is cut to the aspect ratio its card actually paints at `lg`, so
`bg-cover` has nothing to crop on a desktop viewport. Card sizes measured at
1440px: 803x320, 389x320, 389x250, 803x250.

| File | Source | Crop window | Shipped | Card ratio |
|---|---|---|---|---|
| `safety-permit.jpg` | 6645x4430 | full width, 16% down | 1600x640 | 2.51 |
| `site-awareness.jpg` | 4056x3040 | centred, full height | 1200x986 | 1.22 |
| `uav-ground.jpg` | 6016x4011 | full width, from the top | 1200x771 | 1.56 |
| `regional-deployment.jpg` | 7717x4266 | full width, 19% down | 1600x498 | 3.21 |

The two wide cards ship at exactly 2x their 803px render. The two single-column
cards ship at 1200px, which covers 3x on a 342px phone and 2x on the 389px
desktop card. Re-encoded through mozjpeg at q84, 4:4:4. Total 620KB, against
761KB for the Unsplash set.

The crop windows are not centre crops and the offsets matter. `safety-permit`
starts 16% down so the drone stays inside the top edge and all three faces sit
above the caption plate; `regional-deployment` starts 19% down to hold the drone,
the pilot and the tank tops in a 3.21 letterbox that cannot fit all three from a
centre crop.

## Tone

Two files ship with a highlight rolloff baked in — `out = x·(1 − a·x²)` per
channel, which leaves shadows alone, dips midtones a few percent and pulls the
top end down by `a`:

| File | `a` | Why |
|---|---|---|
| `safety-permit.jpg` | 0.32 | Blue sky and three white hard hats sit exactly where the hovered title lands |
| `uav-ground.jpg` | 0.20 | Blown white sky behind the operator |

This is an accessibility fix, not a look. Without it the crew photograph put its
hovered title at **2.19:1**, under the 3.0 floor large text gets. Re-export
either file from the source without the rolloff and the failure comes back.

## Measured against the card, not assumed

`PhotoCard`'s scrim stops were tuned against a different set of photographs, so
white-on-photo contrast was measured for these rather than inherited. Method:
caption text set to `transparent` (layout and hover geometry unchanged), each
card screenshotted at 1440px in both its resting and hovered state, then the
**brightest** pixel sampled inside each text rect and compared against white.

| Card | Rest title | Hover title | Hover body |
|---|---|---|---|
| Safety-First (24px bold / 16px) | 6.34 | **4.41** | 8.01 |
| Site Awareness (20px bold / 14px) | 6.80 | 5.52 | 10.29 |
| UAV + Ground (20px bold / 14px) | 5.09 | 5.32 | 14.53 |
| Rapid Regional (20px bold / 14px) | 6.36 | 11.34 | 17.10 |

All titles are 20px+ at weight 700, which is WCAG large text (floor 3.0); body
copy takes the 4.5 floor. The tightest figure on the bento is 1.47x its floor —
the hovered title over `safety-permit.jpg`, still the brightest of the four
after its rolloff. Body copy's tightest is 1.78x.

For reference, the same three columns on that card **before** the rolloff: 3.36,
2.19, 4.60. Swap any of these images, change the rolloff, or drop the titles
below 18.66px bold, and re-run the measurement.

The scrim values in `photo-card.tsx` were left untouched because they held, not
because they were assumed to.
