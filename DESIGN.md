---
name: Firstman Videos
description: A field operations console rendered over cinematic industrial photography, in one signal red.
colors:
  primary: "#d12027"
  dark-background: "#000000"
  dark-surface: "#ffffff"
  dark-panel: "#080808"
  dark-graphite: "#1a1a1a"
  dark-graphite-raised: "#2a2a2a"
  dark-industrial-grey: "#6f7378"
  light-background: "#ffffff"
  light-surface: "#0a0a0a"
  light-panel: "#f4f4f5"
  light-graphite: "#e5e5e5"
  light-graphite-raised: "#d4d4d8"
  light-industrial-grey: "#4b4f57"
typography:
  display:
    fontFamily: "Open Sans, Open Sans Fallback, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Open Sans, Open Sans Fallback, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "normal"
  title:
    fontFamily: "Open Sans, Open Sans Fallback, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Open Sans, Open Sans Fallback, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Open Sans, Open Sans Fallback, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  sm: "0.6rem"
  md: "0.8rem"
  lg: "1rem"
  xl: "1.4rem"
  2xl: "1.8rem"
  3xl: "2.2rem"
  full: "9999px"
spacing:
  gutter: "24px"
  card: "32px"
  grid-gap: "24px"
  section: "96px"
  section-lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.dark-background}"
    textColor: "{colors.primary}"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.dark-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-compact:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "8px 24px"
  card-glass:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.dark-surface}"
    rounded: "{rounded.2xl}"
    padding: "32px"
  input-field:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    textColor: "{colors.dark-surface}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  chip-status:
    backgroundColor: "rgba(209, 32, 39, 0.1)"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "6px 16px"
---

# Design System: Firstman Videos

## Overview

**Creative North Star: "The Field Operations Console"**

The site behaves like the heads-up display a crew reads on a live industrial
site. Status dots pulse next to labels. Corner brackets frame photographs the
way a viewfinder frames a shot. Readouts sit in uppercase, wide-tracked
capitals. One red marks anything that is active, restricted, or clickable, and
nothing else in the system carries chroma at all. The register is procedural
rather than promotional: it earns trust by looking like equipment, not like
advertising.

The whole world is built on a single inversion. `background` and `surface` swap
values between themes — the page is black with white text in dark, white with
near-black text in light — so every surface, border, and secondary grey flips
with them. Both themes are first-class: a decision that only reads well in one
of them is not finished. Photography is the one exception, and it is a
deliberate one. Image-backed heroes and cards stay dark in both themes, carry
their own black base, and keep literal white text over the picture.

Depth comes from layering, not from shadows. Panels are a faint translucent
tint over whatever is behind them, closed with a hairline border and a soft
ambient shadow that you are not meant to notice. Interaction is where the
system gets tactile: cards lift, icon rings fill red, arrows slide forward,
and every colour change eases over 0.3s because a global rule transitions
`background-color`, `border-color`, `color`, `box-shadow`, and `fill` on every
element in the body.

**Key Characteristics:**

- One chromatic colour (Signal Red `#d12027`), constant across both themes
- A fully inverting neutral canvas — never a hardcoded black or white
- A single typeface (Open Sans) doing all five roles through weight and tracking
- Fully-rounded pills for every action; generous 22–29px radii for panels
- Translucent panels with hairline borders; shadows are ambient, never structural
- HUD vocabulary: pulsing status dots, corner brackets, scan lines, monospace readouts
- Photography stays dark in both themes and owns its own contrast rules

## Colors

A near-monochrome system with exactly one chromatic voice. Every neutral flips
between themes; the red does not.

### Primary

- **Signal Red** (`#d12027`): The only chroma in the system, identical in both
  themes. It marks what is live, critical, or clickable: primary buttons,
  section eyebrow labels, active nav items, focus rings, status dots, icon
  rings on hover, and the scan-line effects. Also the `selection` highlight.

### Neutral

Each pair below is one CSS variable that swaps value at the `.dark` boundary.

- **Page** (`#000000` dark / `#ffffff` light): The canvas. Set on `html` so the
  area behind the fixed navbar is filled too.
- **Ink** (`#ffffff` dark / `#0a0a0a` light): All primary text and any icon or
  border tinted from the foreground. Confusingly named `surface` in the code —
  it is the *foreground*, not a background.
- **Panel** (`#080808` dark / `#f4f4f5` light): The alternating band colour that
  separates one full-width section from the next.
- **Graphite** (`#1a1a1a` dark / `#e5e5e5` light) and **Graphite Raised**
  (`#2a2a2a` dark / `#d4d4d8` light): Section bands one step further from the
  page, and raised chips inside them.
- **Industrial Grey** (`#6f7378` dark / `#4b4f57` light): All secondary and
  supporting body copy. The light value is darkened deliberately so it still
  passes contrast on white.

### Named Rules

**The One Red Rule.** `#d12027` is the system's only chroma. It appears on well
under a tenth of any screen, and it always means something: active, critical,
or actionable. A red used decoratively spends the one signal the system has.

**The Inversion Rule.** Never write a literal `bg-black`, `text-white`, or
`border-white/10` in ordinary UI. Use `bg-background`, `text-surface`,
`border-surface/10`, `text-industrial-grey`. Hardcoded neutrals survive the
theme flip and break in the other one.

**The Photo Exception Rule.** Over a photograph, the inversion is suspended.
Image-backed regions carry a `bg-black` base in both themes and keep literal
`text-white` for headings, `text-white/70` for body copy, and `from-black`
gradient scrims. `text-industrial-grey` over a photo is a bug: it goes dark in
light mode and disappears.

## Typography

**Display Font:** Open Sans (with `Open Sans Fallback`, `sans-serif`)
**Body Font:** Open Sans — the same family
**Label/Mono Font:** Open Sans for labels; the platform monospace stack
(`ui-monospace, SFMono-Regular, Menlo, …`) for HUD readouts

**Character:** One neutral, highly legible workhorse doing every job. The
personality comes from how far apart the roles are pushed — 900-weight display
at 72px against 700-weight labels at 12px tracked to 0.1em — not from a
contrasting second face. The result reads as instrumentation rather than
editorial, which is the point. The code aliases `--font-headline`,
`--font-display`, `--font-body`, and `--font-label` to the same
`--font-sans`; the roles are semantic, not typographic.

### Hierarchy

- **Display** (900, `clamp(2.25rem, 5vw, 4.5rem)` — 36px to 72px, line-height
  1.1, tracking `-0.025em`): Page `h1` only. Tightened tracking at large sizes
  is what keeps it from feeling like a web default.
- **Headline** (900, 36px to 48px, line-height 1): Section titles. Often
  uppercase on interior pages, sentence case on the homepage.
- **Title** (700, 20px, line-height 1.4): Card and panel headings.
- **Body** (400, 16px, line-height 1.5): Paragraph copy, in Industrial Grey.
  Supporting text drops to 14px, fine print to 12px.
- **Label** (700, 12px, uppercase, tracking `0.1em`): Eyebrows, nav items,
  button text, metadata, status chips. The most characteristic type in the
  system.

### Named Rules

**The One Family Rule.** Every role is Open Sans. Hierarchy is built from
weight, size, case, and tracking. Introducing a second typeface changes the
system, it does not extend it.

**The Wide Label Rule.** Small text earns authority by going uppercase, 700,
and tracked to `0.1em` — never by getting bigger. A 12px tracked label outranks
a 14px sentence-case one.

## Layout

A single centred column, `max-width: 1280px`, with 24px gutters that open to
32px from the `md` breakpoint. Full-bleed section backgrounds run edge to edge
while their content stays in that column, which is what produces the banded
rhythm of the site.

Vertical rhythm is coarse and consistent: 96px (`py-24`) for a standard
section, 128px (`py-32`) for a closing call to action. Cards are padded 32px;
grids gap 24px. Card grids run one column on mobile, two at `md`, and three or
four at `lg` depending on content weight.

The navbar is `fixed`, floating 16px from the top as a pill inset 16px from
each edge. Two consequences are load-bearing: full-bleed hero pages let their
image run to the very top behind it, and every content page adds `pt-28` or
`pt-32` so breadcrumbs clear it. Anchor targets add `scroll-mt-28` for the
same reason.

Breakpoints are the framework defaults: `sm` 640px, `md` 768px, `lg` 1024px,
`xl` 1280px. `html` carries `overflow-x: clip` as a deliberate safety net so
decorative overhangs — blurred blobs, rotated accents, off-canvas glows —
can never produce a horizontal scrollbar. `clip` rather than `hidden`, so
`position: sticky` and `fixed` keep working.

### Named Rules

**The 1280 Rule.** Content lives in a 1280px column no matter how wide the
backdrop behind it runs. Backgrounds go full-bleed; text never does.

## Elevation & Depth

The system is layered, not lifted. Depth reads through translucency and tonal
banding: a `.glass-panel` is a faint tint of the foreground colour (5% white in
dark, 2% black in light) over a 12px backdrop blur of whatever sits behind it,
closed with a 1px hairline border at 10% and a wide, soft ambient shadow. The
shadow exists to soften the panel's edge against a photograph, not to announce
that the panel is floating. `.glass-modal` is the same treatment at a heavier
16px blur and a much more opaque fill (72% page colour in dark, 85% in light),
because a dialog has to win against whatever it covers. Sections separate by
stepping through the neutral ramp — page, panel, graphite — rather than by
casting shadows on each other.

Red glow is the one exception, and it is reserved: primary calls to action and
the navbar carry a diffuse `rgba(209, 32, 39, 0.1–0.4)` bloom that says
"this is the action here."

> **Build hazard — do not reorder these declarations.** In `app/globals.css`,
> both glass utilities author `-webkit-backdrop-filter` *before* the standard
> `backdrop-filter`. That order is load-bearing, not stylistic: Lightning CSS
> (Turbopack's minifier) silently drops the standard property when it comes
> first, which shipped every glass surface with no blur at all in Chrome and
> Firefox until it was fixed on 2026-08-04. `.marquee` and `.text-gradient`
> follow the same prefix-first convention for the same reason. After any change
> to these rules, confirm with
> `grep -o '\.glass-panel{[^}]*}' .next/static/chunks/*.css` that **both**
> declarations survived the build.

### Shadow Vocabulary

- **Ambient panel** (`box-shadow: 0 6px 24px rgba(0,0,0,0.35)` dark /
  `0 6px 24px rgba(10,10,10,0.06)` light): The only shadow on ordinary
  surfaces. Wide, soft, low-opacity.
- **Signal bloom** (`box-shadow: 0 0 30px rgba(209,32,39,0.3)`): Primary CTAs
  and the floating navbar. Never on a neutral element.

### Named Rules

**The Ambient-Only Rule.** Shadows never carry structure or state. If an
element needs to read as raised, raise it with tone and translucency; if it
needs to read as active, use Signal Red.

## Shapes

Corners are generous and the scale is unusually large: the base radius is
`1rem`, and the steps multiply from it (`sm` 0.6rem, `md` 0.8rem, `lg` 1rem,
`xl` 1.4rem, `2xl` 1.8rem, `3xl` 2.2rem). A standard card at `2xl` is a 28.8px
corner — noticeably softer than framework defaults, and a large part of why
panels read as physical objects rather than boxes.

Every interactive control is a full pill. Buttons, nav CTAs, status chips,
breadcrumb capsules, and icon buttons are all `border-radius: 9999px`; nothing
actionable has a square corner. Panels use the radius scale; controls do not.

Borders are always hairlines — 1px at 10% of the foreground colour — and read as
edges, not as frames. The recurring geometric motifs are all drawn rather than
bordered: corner brackets (two 2px edges meeting at a 90° angle, in Signal Red
at 40–50% opacity), horizontal rules 1px at 10%, and the 24px accent bar under
a section title (`w-24 h-1 bg-primary`).

### Named Rules

**The Pill Rule.** If it can be clicked, it is fully rounded. If it holds
content, it uses the radius scale.

## Components

### Buttons

Confident, tactile, and always uppercase. Every button announces itself as
equipment: wide-tracked capitals, bold weight, a full pill, and a state change
you can feel.

- **Shape:** Full pill (`9999px`), all variants, all sizes.
- **Primary:** Signal Red background, white text, 1px Signal Red border,
  16px × 32px padding, Label typography. On hover it *inverts* — the fill drops
  to the page background and the text and border become Signal Red. Some
  primary CTAs add the Signal Bloom shadow.
- **Secondary / Ghost:** `.glass-panel` treatment with foreground-coloured text.
  On hover the fill becomes 20% Signal Red and the border goes solid red.
- **Sizes:** compact `8px × 24px` at 12px (navbar), standard `16px × 32px` at
  14px (page CTAs), and a `12px × 24px` middle step.
- **Arrow affordance:** Buttons that lead somewhere carry a trailing
  `arrow_forward` icon that translates 4px right on group hover. This is the
  system's most repeated micro-interaction.
- **Transitions:** 300ms on every state property.

### Chips

- **Style:** Full pill, 10% Signal Red fill, 30% Signal Red border, Signal Red
  Label text, roughly `6px × 16px`.
- **State:** Frequently prefixed with a 8px pulsing Signal Red dot to mark a
  live or sector-scoped context. Neutral variants swap to a 5% foreground fill
  with a 10% border.

### Cards / Containers

- **Corner Style:** `xl` (22.4px) for service cards, `2xl` (28.8px) for content
  panels, `3xl` (35.2px) for large feature blocks.
- **Background:** `.glass-panel` — 5% foreground tint in dark, 2% in light.
- **Shadow Strategy:** Ambient panel only. See Elevation & Depth.
- **Border:** 1px hairline at 10% foreground; on hover it commonly shifts to
  50% Signal Red.
- **Internal Padding:** 32px standard; 24px for dense cards, 48px+ for feature
  panels.
- **Hover:** Lift 8px (`-translate-y-2`) over 300ms, or a diagonal Signal Red
  wash fading in from 0 to 10% opacity. Icon rings fill Signal Red and their
  glyph flips to white.

### Inputs / Fields

- **Style:** `.form-input-dark` — 3% foreground tint in dark, 2% in light, a 1px
  border at 10–12%, `md` (12.8px) corners, foreground-coloured text, and a
  placeholder at 40% opacity.
- **Focus:** Border becomes Signal Red and a 1px Signal Red ring is drawn via
  `box-shadow`. No glow, no scale.
- **Labels:** Label typography at 70% foreground opacity, sitting above the
  field. Required fields mark with a Signal Red asterisk.
- **Selects:** Native `<select>` with `appearance: none` and an absolutely
  positioned `expand_more` icon at the right inset.
- **Error:** Signal Red text on a 10% Signal Red fill with a 30% border,
  prefixed by an `error` icon, in a `role="alert"` container.

### Navigation

- **Style:** A floating pill 16px from the top, inset 16px from each edge, max
  1280px wide. 70% page-colour fill, `backdrop-blur-md`, 1px hairline border,
  and a faint Signal Red bloom.
- **Typography:** Label — 12px, 700, uppercase, 0.1em tracking.
- **States:** Rest at 80% foreground; hover goes Signal Red; the active route
  goes Signal Red with a 2px Signal Red underline.
- **Dropdown:** The Services menu panel is always present in the DOM and hidden
  with `invisible` + `opacity-0` rather than unmounted, so its links stay in the
  static HTML for crawlers while `visibility: hidden` keeps them out of the tab
  order. Its fill is near-opaque (97%), not `.glass-modal` — at 72% the body
  copy underneath reads straight through it.
- **Mobile:** A burger toggles a full-width sheet below the pill, with Services
  as a nested accordion.

### Icon System

Material Symbols Outlined, loaded as a stylesheet rather than through the font
pipeline so `font-variation-settings` stays animatable. Icons routinely fill on
hover (`FILL 0` → `FILL 1`) as a state change. The icon font forces its own
`display` value, so visibility must be toggled on a wrapper element, never on
the icon span itself.

### HUD Accents (signature)

The vocabulary that makes the console read as a console. Use sparingly and only
where the meaning is real:

- **Pulsing status dot:** an 8px Signal Red circle with a ping animation,
  paired with a Label.
- **Corner brackets:** 2px Signal Red edges at 40–50% opacity framing a
  photograph or panel corner; several expand on hover.
- **Scan lines:** `.scanning-line` (a 2px red bar with a red glow travelling
  vertically over 4s) and `.scanner-line` (a horizontal red gradient pulsing
  over 2.5s).
- **Monospace readouts:** 10–12px platform monospace, uppercase, wide tracking,
  for coordinates, statuses, and reference codes.
- **Logo marquee:** two rows scrolling in opposite directions over 45s and 55s,
  edge-masked to transparent at both ends, paused on hover, and disabled
  entirely under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:

- **Do** use the semantic tokens — `bg-background`, `text-surface`,
  `border-surface/10`, `text-industrial-grey` — so markup survives the theme
  flip.
- **Do** check every change in both themes before calling it done. Both are
  first-class; the type system cannot catch a contrast failure.
- **Do** keep literal `text-white` headings and `text-white/70` body copy over
  photographs, on a wrapper that carries its own `bg-black`.
- **Do** render photographs with `opacity-90 dark:opacity-40` (plus
  `mix-blend-normal dark:mix-blend-luminosity` where it applies), so the image
  is visible in light mode and stays subdued in dark.
- **Do** place image layers at `z-0` with content at `z-10`.
- **Do** give buttons and status chips a full pill radius, and panels a value
  from the radius scale.
- **Do** pair a trailing `arrow_forward` with any button that navigates, and
  slide it 4px on group hover.
- **Do** reserve Signal Red for what is active, critical, or clickable.

### Don't:

- **Don't** hardcode `bg-black`, `text-white`, or `border-white/10` outside a
  photo-backed region. They do not flip.
- **Don't** put `text-industrial-grey` over a photograph — it goes dark in light
  mode and vanishes.
- **Don't** put an image layer at `z-[-1]` over a `bg-black` parent; it renders
  invisible.
- **Don't** use `.text-gradient` anywhere but a heading over a dark photo. Its
  gradient is fixed light and does not respond to the theme.
- **Don't** toggle visibility on a `MaterialIcon` span. Its font CSS forces
  `display`; wrap it and toggle the wrapper.
- **Don't** introduce a second typeface or a second chromatic hue. Both would
  replace the system rather than extend it.
- **Don't** use shadow to communicate structure or state. Tone and translucency
  carry depth; Signal Red carries state.
- **Don't** attach a play affordance to anything that does not actually start
  playback.
