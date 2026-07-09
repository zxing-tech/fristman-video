# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing site for **Firstman Videos** (industrial drone cinematography for Oil & Gas / heavy industry). ~26 statically-prerendered App Router pages. No backend — forms redirect to `/thank-you/*` pages. Stack: **Next.js 16.2.6, React 19, Tailwind CSS v4, shadcn (`base-nova`), next-themes**.

## Commands

```bash
npm run dev         # dev server
npm run build       # production build (also runs TS check + prerenders all routes)
npm run start       # serve the production build (default port 3000)
npm run lint        # eslint (eslint-config-next) — flat config, no args
npm run typecheck   # tsc --noEmit
npm run format      # prettier --write on **/*.{ts,tsx}
```

There are **no tests**. After nontrivial changes, verify with `typecheck` + `lint` + `build`, then drive the page in a browser (light AND dark theme) — most bugs here are visual/theme-contrast issues the type system can't catch. Note: `typecheck` reads `.next/types`, so run it *after* `build` when you've added/renamed/moved routes, or it reports stale route errors.

## Next.js 16 — read the bundled docs first

This is **not** the Next.js in your training data. Per `AGENTS.md`, read the relevant guide in `node_modules/next/dist/docs/` before writing Next-specific code. Known differences that bite:
- `params` and `searchParams` are **Promises** — `await` them.
- `next/image` `priority` is removed → use `preload`.
- Pages are Server Components by default; only interactive files (`"use client"`) are client (navbar, theme toggle, modal, forms).

## Theme system (the core architecture)

Light/dark is driven entirely by CSS variables in `app/globals.css` that **flip** between `:root` (light) and `.dark` (dark). `next-themes` (`components/theme-provider.tsx`, `attribute="class" defaultTheme="dark"`) toggles the class; `components/site/theme-toggle.tsx` is the button.

Brand tokens (defined in both `:root` and `.dark`, wired into Tailwind via `@theme inline`):
- `background` / `surface` **invert** — `surface` is the foreground/text color (white in dark, near-black in light). `background` is the page (black in dark, white in light).
- `dark-ui`, `graphite`, `industrial-grey` also flip; `primary` (`#d12027` red) is constant.
- Custom utilities in `globals.css`: `.glass-panel`, `.glass-modal`, `.form-input-dark`, `.scanning-line`, `.scanner-line`, `.text-gradient` (fixed light gradient — only used on dark hero headings), `.marquee` / `.animate-marquee-left|right`.

### Rules when editing markup (critical — this is where regressions happen)
- **Use semantic tokens, not hardcoded neutrals.** `bg-background` not `bg-black`, `text-surface` not `text-white`, `border-surface/10` not `border-white/10`, `text-industrial-grey` for secondary text. These flip with the theme; hardcoded `white`/`black` do not.
- **Exception — dark photo areas.** Heroes/cards backed by a photo stay dark in *both* themes. Their wrapper carries a dark base (`bg-black`) and the image sits behind text. Over these: keep literal `text-white` on headings, use `text-white/70` for body copy (NOT `text-industrial-grey`, which goes dark in light mode and becomes unreadable), and keep `from-black` gradient scrims. `text-white` on `bg-primary` buttons also stays literal.
- **Faint photos wash out in light mode.** Photo images use the pattern `opacity-90 dark:opacity-40` (+ `mix-blend-normal dark:mix-blend-luminosity` where applicable) so the photo is visible in light mode but stays subtle in dark. A pure `bg-black` + low-opacity image + `z-[-1]` will render invisible — image layers belong at `z-0` with content at `z-10`.

## Layout & shared chrome

`app/layout.tsx` mounts `<SiteNavbar>` + children + `<SiteFooter>` inside `<ThemeProvider>`, loads Open Sans (`next/font`) and Material Symbols (a `<link>` in `<head>` — kept as a stylesheet, not `next/font`, so `font-variation-settings` FILL animates). Global metadata uses a title template `%s | Firstman Videos`.

Reusable pieces live in `components/site/`: `SiteNavbar` (**`fixed`**, floats over the hero — so full-bleed hero pages let the image reach the top, and content pages add `pt-28`/`pt-32` so breadcrumbs clear it), `SiteFooter`, `ThemeToggle`, `CtaButton`, `ServiceCard`, `CaseStudyCard`, `RequestAccessModal` + `RequestAccessTrigger` (gated-video lead form), `SectionLabel`, and `MaterialIcon`. `MaterialIcon` wraps a `material-symbols-outlined` span — its font CSS forces `display`, so toggle icon *visibility* on a plain wrapper span, never on the icon itself.

## Data, images, forms

- `lib/data/{services,industries,case-studies}.ts` — typed arrays for listing grids and cross-page links; page bodies are otherwise static JSX.
- `lib/data/image-manifest.json` — maps the original design-export image URLs to the downloaded local paths.
- All imagery is local under `public/images/` (`stitch/` = page photos, `clients/` = clientele/agency logos). Logos are transparent grayscale PNGs shown with `dark:invert` so they read in both themes.
- Forms (`app/contact/consultation-form.tsx`, `app/industries/marine-offshore/brief-form.tsx`) are `"use client"`, validate client-side, and `router.push()` to a thank-you route. No API is wired up.

## Route map & content notes

Routes mirror the folder tree under `app/`: `/`, `/about` + `/about/team`, `/services` + 6 detail pages, `/industries` + 4 detail pages, `/case-studies` + 6 detail pages, `/contact`, `/privacy-policy`, `/thank-you/{consultation,case-study-access}`. The two live services are **Corporate Videos** (`/services/corporate-videos`) and **AI-Generated Video** (`/services/ai-generated-video`) — an earlier "Industrial Cinematography" service was renamed and an "FPV Fly-Throughs" service was dropped, so avoid reintroducing those names as service labels (the brand tagline "Industrial Cinematography" is fine).

Background/spec: `docs/superpowers/specs/2026-07-06-stitch-to-next-conversion-design.md` documents the original conversion and full route map.
