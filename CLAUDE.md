# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing site for **Firstman Videos** (industrial drone cinematography for Oil & Gas / heavy industry). 20 statically-prerendered App Router pages. No backend — forms POST to Web3Forms and redirect to `/thank-you/*` pages. Stack: **Next.js 16.2.6, React 19, Tailwind CSS v4, shadcn (`base-nova`), next-themes**.

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

Code style is Prettier-enforced (`.prettierrc`): **no semicolons**, double quotes, 2-space indent, 80 columns, ES5 trailing commas. `prettier-plugin-tailwindcss` sorts class strings, including inside `cn()` and `cva()`.

## Next.js 16 — read the bundled docs first

This is **not** the Next.js in your training data. Per `AGENTS.md`, read the relevant guide in `node_modules/next/dist/docs/` before writing Next-specific code. Known differences that bite:
- `params` and `searchParams` are **Promises** — `await` them.
- `next/image` `priority` is removed → use `preload`.
- Pages are Server Components by default; only interactive files (`"use client"`) are client (navbar, theme toggle, modal, forms, case-study filter, cookie banner).

## Theme system (the core architecture)

Light/dark is driven entirely by CSS variables in `app/globals.css` that **flip** between `:root` (light) and `.dark` (dark). `next-themes` (`components/theme-provider.tsx`) toggles the class; `components/site/theme-toggle.tsx` is the button. The layout mounts it as `attribute="class" defaultTheme="dark" enableSystem={false}` — the site never follows the OS preference, so testing means clicking the toggle, not changing OS settings.

Brand tokens (defined in both `:root` and `.dark`, wired into Tailwind via `@theme inline`):
- `background` / `surface` **invert** — `surface` is the foreground/text color (white in dark, near-black in light). `background` is the page (black in dark, white in light).
- `dark-ui`, `graphite`, `graphite-light`, `industrial-grey` also flip; `primary` (`#d12027` red) is constant.
- Custom utilities in `globals.css`: `.glass-panel`, `.glass-modal`, `.form-input-dark`, `.hero-overlay` (bottom scrim that fades a hero photo into `--background`), `.scanning-line`, `.scanner-line`, `.no-scrollbar`, `.text-gradient` (fixed light gradient — only used on dark hero headings), `.marquee` / `.marquee-track` / `.animate-marquee-left|right`.
- Two global rules that surprise people: `html { overflow-x: clip }` is a deliberate safety net against decorative overhangs (`clip`, not `hidden`, so `sticky`/`fixed` keep working), and a `body *` rule transitions `background-color/border-color/color/box-shadow/fill` over 0.3s — every element animates on a color change, not just the theme flip.

### Rules when editing markup (critical — this is where regressions happen)
- **Use semantic tokens, not hardcoded neutrals.** `bg-background` not `bg-black`, `text-surface` not `text-white`, `border-surface/10` not `border-white/10`, `text-industrial-grey` for secondary text. These flip with the theme; hardcoded `white`/`black` do not.
- **Exception — dark photo areas.** Heroes/cards backed by a photo stay dark in *both* themes. Their wrapper carries a dark base (`bg-black`) and the image sits behind text. Over these: keep literal `text-white` on headings, use `text-white/70` for body copy (NOT `text-industrial-grey`, which goes dark in light mode and becomes unreadable), and keep `from-black` gradient scrims. `text-white` on `bg-primary` buttons also stays literal.
- **Faint photos wash out in light mode.** Photo images use the pattern `opacity-90 dark:opacity-40` (+ `mix-blend-normal dark:mix-blend-luminosity` where applicable) so the photo is visible in light mode but stays subtle in dark. A pure `bg-black` + low-opacity image + `z-[-1]` will render invisible — image layers belong at `z-0` with content at `z-10`.

## Layout & shared chrome

`app/layout.tsx` mounts `<SiteNavbar>` + children + `<SiteFooter>` inside `<ThemeProvider>`, loads Open Sans (`next/font`) and Material Symbols (a `<link>` in `<head>` — kept as a stylesheet, not `next/font`, so `font-variation-settings` FILL animates). Global metadata uses a title template `%s | Firstman Videos`.

Reusable pieces live in `components/site/`: `SiteNavbar` (**`fixed`**, floats over the hero — so full-bleed hero pages let the image reach the top, and content pages add `pt-28`/`pt-32` so breadcrumbs clear it), `SiteFooter`,

`SiteNavbar`'s **Services item is a dropdown, not a link** — there is no `/services` hub. It maps over `lib/data/services.ts`, so adding a service to that array is all it takes to appear in the nav. The desktop panel is always rendered and hidden with `invisible`/`opacity-0` rather than conditionally mounted: that keeps the six links in the static HTML for crawlers, and `visibility: hidden` still removes them from the tab order while closed. Mobile uses a separate accordion inside the burger sheet. Note the eslint rule `react-hooks/set-state-in-effect` is on — do not close the menus from a `useEffect` on `pathname`; the link `onClick` handlers already do it. `ThemeToggle`, `CtaButton`, `ServiceCard`, `SectionLabel`, `MaterialIcon`, `CaseStudiesPortfolio`, and the `RequestAccess*` trio. `MaterialIcon` wraps a `material-symbols-outlined` span — its font CSS forces `display`, so toggle icon *visibility* on a plain wrapper span, never on the icon itself.

Two files are currently **unused** — don't read them as the house pattern: `components/site/case-study-card.tsx` and the lone shadcn `components/ui/button.tsx`. Buttons in this codebase are `CtaButton` or hand-written pill classes on `<Link>`/`<button>`.

## Data, images, forms

- `lib/data/{services,our-work,sectors}.ts` — typed arrays. `services` is read by `app/sitemap.ts` **and** by the navbar Services dropdown; `our-work` is read by `sitemap.ts` alone. The listing pages hardcode their own copy of the cards in the page body, so adding or renaming a route means editing *both* the page and the data file, or the sitemap silently drifts from the site. **`sectors.ts` is the odd one out**: its four entries (Oil & Gas, Energy & Utilities, Marine & Offshore, Fabrication & Construction) have **no routes** — they survive the removed `/industries` pages as content only, read by the homepage `#industries` grid and the "Designed For" list on `/services/facility-overview-films`. It is deliberately absent from `sitemap.ts`; don't add `href`s to it without creating pages first.
- `lib/data/image-manifest.json` maps the original design-export image URLs to the downloaded local paths. It is a reference artifact from the conversion — nothing imports it.
- **`/our-work` is the one hub whose body is a client component**: `components/site/our-work-portfolio.tsx` owns the public card array, the tag-filter chips, and the two gated cards (a featured panel and an inline card). A chip only matches cards carrying that exact string, so `categories`, `FEATURED_TAGS`, and `INLINE_GATED_TAGS` must stay in sync with the cards' `tags` — otherwise a filter drops to the "No case studies in this category yet" empty state.
- Imagery is all local under `public/images/` (`stitch/` = page photos, `clients/` = clientele/agency logos, `brand/`, `og/`). Most photos are `<div style={{ backgroundImage: "url(...)" }}>` + `bg-cover`, **not** `next/image` — only four pages import it, and the homepage logo marquee uses raw `<img>` behind an eslint-disable. Match the surrounding pattern instead of converting files ad hoc. Logos are transparent grayscale PNGs shown with `dark:invert` so they read in both themes.
- The one lead form, `app/contact/consultation-form.tsx`, is `"use client"`, validates client-side, POSTs to Web3Forms, then `router.push()`es to a thank-you route. Its optional **Sector** `<select>` is where the industry taxonomy went when `/industries` was removed — keep its options in sync with `lib/data/sectors.ts`, and the Region / Country options in sync with the `regionalCoverage` array in `app/page.tsx`. The access key comes from `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (inlined at build — set it before `npm run build`; see `.env.example`).
- The gated-video modal is **split for bundle size**: `request-access-modal.tsx` is the thin trigger + `open` gate, and `request-access-dialog.tsx` holds the heavy form, pulled in via `next/dynamic(..., { ssr: false })` only after a click. Import `RequestAccessModal`/`RequestAccessTrigger`; add form fields to the *dialog*. It posts to Web3Forms in place (no redirect) and renders its own success state.
- `app/privacy-policy/cookie-banner.tsx` is presentational only — its buttons just hide it via local state. Nothing is persisted and no scripts are gated behind consent.

## SEO & metadata (`lib/seo.ts`)

Every page's metadata goes through the `pageMeta({ title, description, path, ogImage?, ogType?, noindex? })` helper — **do not** hand-write a `Metadata` object per page. Next.js overwrites `openGraph` wholesale in child segments, so `pageMeta()` builds the full canonical + Open Graph + Twitter block consistently. `metadataBase` (the canonical domain `SITE.url`) lives in `app/layout.tsx`, which also emits site-wide **Organization + WebSite** JSON-LD and the default OG image.

- **New page checklist:** `export const metadata = pageMeta({ description /* 140-160 chars */, path: "/its/canonical/path", title? })`; add page-type JSON-LD via `<JsonLd data={graph(breadcrumbSchema([...]), serviceSchema(...) | creativeWorkSchema(...))} />` (import from `@/lib/seo` + `@/components/seo/json-ld`) as the first child of the returned element; ensure exactly **one `<h1>`** (use an `sr-only` h1 if the hero has no textual heading, as `/our-work/petrofac-kemaman` does); add the route to `lib/data/*` (for the sitemap) *and* to the relevant hardcoded listing grid; thank-you/utility pages pass `noindex: true` and skip JSON-LD.
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` and `app/favicon.ico` are file-convention routes. Case-study pages set `ogType: "article"` + a page-specific `ogImage`.
- Site is single-locale (English) by design — no hreflang. Descriptions must stay unique and avoid AI-writing tells (em dashes, "comprehensive/seamless/leverage").

## Route map & content notes

Routes mirror the folder tree under `app/`: `/`, `/about` + `/about/team`, 6 service detail pages under `/services/*`, `/our-work` + 6 detail pages, `/contact`, `/privacy-policy`, `/thank-you/{consultation,case-study-access}`. **Two former hubs no longer exist, and both now 308-redirect to a homepage section** — `/services` → `/#services` and `/industries` (plus `/industries/:slug`) → `/#industries`. Both `id`s live on `<section>`s in `app/page.tsx` with `scroll-mt-28` to clear the fixed navbar. `app/services/` holds only the six detail folders, so service detail pages breadcrumb straight to Home; nothing should link to a bare `/services` or any `/industries` URL again.

The `/industries` hub and its four sector pages (oil-gas, energy-utilities, marine-offshore, fabrication-construction) were removed and their content redistributed rather than deleted: the sector taxonomy went to the homepage `#industries` grid (via `lib/data/sectors.ts`) and to `/services/facility-overview-films`; regional coverage went to the homepage; the pre-mobilisation and confidentiality material (permit-to-work, HSE alignment, weather windows, NDAs, encrypted transfer, gated portals) became two new **About** sections; the fabrication load-out phase became Phase 04 on `/services/progression-timelapse`; and the sector taxonomy also survives as the Sector `<select>` on the contact form. The marine brief form went away with its page — `/contact` is now the only lead form. The two live services are **Corporate Videos** (`/services/corporate-videos`) and **AI-Generated Video** (`/services/ai-generated-video`) — an earlier "Industrial Cinematography" service was renamed and an "FPV Fly-Throughs" service was dropped, so avoid reintroducing those names as service labels (the brand tagline "Industrial Cinematography" is fine).

Service renames land in *four* places plus a redirect, because of the hardcoded-listing split above. The "Visual Documentation" → **Safety and Induction Videos** rename (route `/services/visual-documentation` → `/services/safety-induction-videos`) is the worked example: `lib/data/services.ts` (slug + href — this drives both `sitemap.ts` and the navbar dropdown), the detail page's own folder name / `pageMeta` path / breadcrumb / `serviceSchema`, the `serviceCards` array in `app/page.tsx`, the `<select>` in `app/contact/consultation-form.tsx`, and a `permanent: true` entry in `next.config.ts` `redirects()` so the indexed URL keeps resolving. Note `permanent: true` emits **308**, not 301. Grep the old slug *and* the old display label before declaring a rename done — stale labels hide in case-study "Service" fields and section headings.

`README.md` is still the stock shadcn starter template and describes nothing about this site — ignore it. Background/spec: `docs/superpowers/specs/2026-07-06-stitch-to-next-conversion-design.md` documents the original conversion and full route map.
