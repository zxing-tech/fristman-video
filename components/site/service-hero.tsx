import ReactDOM from "react-dom"
import Link from "next/link"

import { HeroVideo } from "@/components/site/hero-video"
import { MaterialIcon } from "@/components/site/material-icon"
import { HERO_POSTER, HERO_TEXT_SHADOW, HERO_VIDEO } from "@/lib/hero-media"
import { cn } from "@/lib/utils"

/**
 * The one hero for every `/services/*` detail page.
 *
 * The six pages were converted from separate Stitch exports and each invented
 * its own entry: heights of 614/716/819/921px, four different content columns,
 * and a breadcrumb on two pages out of six even though all six emit
 * BreadcrumbList JSON-LD. This component is the shared frame — footage, height,
 * column, scrim stack, breadcrumb, chip, display type and action row — so a
 * visitor moving between two services through the navbar dropdown lands in the
 * same place twice.
 *
 * The footage is the homepage clip, from lib/hero-media.ts. It replaced six
 * different Stitch renders, which is a correctness fix as much as a visual one:
 * several of those renders have fake HUD telemetry burned into the pixels
 * ("LOCATION: NORTH SEA 61°N", "ALTITUDE: 45M"), invented data for a company
 * that works Malaysia and Southeast Asia. It was only ever hidden by scrims
 * heavy enough to bury the photograph with it.
 *
 * Photo exception (DESIGN.md): this band stays dark in both themes. The base is
 * a literal black, every scrim is literal black, and the copy is literal white.
 * Nothing here uses a flipping token.
 */

type ServiceHeroProps = {
  /** Current page, shown after Home. Matches the BreadcrumbList JSON-LD. */
  breadcrumb: string
  /** Status chip above the heading. */
  chip: string
  /** Optional chip glyph; without one the chip shows a pulsing status dot. */
  chipIcon?: string
  title: React.ReactNode
  /** Optional standing line between the heading and the lede. */
  tagline?: string
  lede: string
  /** Action row. Primary first — on every page that is the enquiry route. */
  actions: React.ReactNode
  /** Monospace corner readout. Genuine identifying content only. */
  readout?: string
  /** Optional note block below the actions. */
  note?: React.ReactNode
}

export function ServiceHero({
  breadcrumb,
  chip,
  chipIcon,
  title,
  tagline,
  lede,
  actions,
  readout,
  note,
}: ServiceHeroProps) {
  // The poster is this page's LCP element, but it arrives as a CSS background,
  // so the browser cannot discover it until stylesheets have parsed. Rendering
  // a <link rel="preload"> in the tree emits the hint twice; this emits one.
  ReactDOM.preload(HERO_POSTER, { as: "image", fetchPriority: "high" })

  // Tighter top and bottom on phones. pt-28 still clears the floating navbar
  // (16px inset plus a ~56px pill) with room to spare, and the 32px it gives
  // back is what brings the primary CTA above the fold on an 844px screen.
  return (
    <header className="relative flex min-h-[38rem] w-full items-center overflow-hidden bg-black pt-28 pb-16 md:min-h-[44rem] md:pt-32 md:pb-20 lg:min-h-[min(90svh,46rem)]">
      {/* Scrim weights are the homepage's, tuned against this clip's measured
          luminance. Each layer covers only the area it has to — a flat black
          band would guarantee contrast and also be the thing the visitor sees
          instead of the footage. */}
      <div className="absolute inset-0 z-0">
        {/* Poster still. Paints immediately, carries the hero before the video
            is decoded, and is the whole background under reduced motion. */}
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_POSTER}')` }}
        />
        <HeroVideo src={HERO_VIDEO} />

        {/* Even grade — insurance against a blown-out highlight under white
            text if this slot is ever swapped for brighter footage. */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Mobile: the copy runs the full width, so protection is a bottom band. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:hidden" />

        {/* Desktop: an ellipse over the copy block alone, leaving the right of
            the frame — where this clip's subject is — as picture. */}
        <div className="absolute inset-0 hidden bg-[radial-gradient(115%_95%_at_16%_52%,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.4)_32%,rgba(0,0,0,0.26)_56%,rgba(0,0,0,0.08)_76%,transparent_90%)] md:block" />

        {/* Vignette for the floating navbar, run long enough to also reach the
            breadcrumb sitting under it: Signal Red at 12px cannot clear AA on
            any dark backdrop, so the only lever left is making what sits behind
            it as close to black as possible. */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/75 via-black/35 to-transparent" />

        {/* Short join into the band below. */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Fades into the page colour so the hero meets the band below cleanly.
            Dark only: in light mode it would dissolve the bottom of the picture
            into white, and a footage-backed hero stays dark in both themes. */}
        <div className="hero-overlay hidden dark:block" />
      </div>

      {/* No corner brackets here. They were tried and cut: anchored to the
          viewport they read as stray marks in the window corners, and anchored
          to the content column they land on the breadcrumb and under the
          primary button. The homepage keeps its footage unmarked for the same
          reason, and the breadcrumb, chip and readout already say "service
          detail" without drawing on the picture. */}
      <div className="relative z-20 mx-auto w-full max-w-[1280px] px-8">
        {/* Breadcrumb and readout share one row and read as a status bar. */}
        <div className="mb-8 flex items-center justify-between gap-6 md:mb-10">
          <nav aria-label="Breadcrumb">
            <ol
              className={cn(
                "flex items-center gap-2 font-label text-xs font-bold tracking-widest text-white/70 uppercase",
                HERO_TEXT_SHADOW
              )}
            >
              <li>
                <Link className="transition-colors hover:text-white" href="/">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="flex items-center">
                <MaterialIcon name="chevron_right" className="text-base!" />
              </li>
              <li aria-current="page" className="text-primary">
                {breadcrumb}
              </li>
            </ol>
          </nav>
          {readout && (
            <span
              className={cn(
                // Full strength, not /70: this sits over the brightest part of
                // the frame, and Signal Red at 10px has no contrast to spare.
                "hidden shrink-0 font-mono text-[10px] tracking-[0.15em] text-primary uppercase md:block",
                HERO_TEXT_SHADOW
              )}
            >
              {readout}
            </span>
          )}
        </div>

        <div className="max-w-3xl space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-black/50 px-4 py-1.5 backdrop-blur-sm">
            {chipIcon ? (
              <MaterialIcon
                name={chipIcon}
                fill
                className="text-base! text-primary"
              />
            ) : (
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            )}
            <span className="font-label text-xs font-bold tracking-widest text-white uppercase">
              {chip}
            </span>
          </div>

          {/* Display role: the only place in the system that leaves
              font-stretch 100%, capped at the documented 72px. Sentence case,
              like the homepage h1 — capitals below this point belong to the
              12px Label role alone, and leading-[1.1] is the homepage's value,
              which gives descenders the room all-caps did not need. */}
          <h1
            className={cn(
              "font-headline text-4xl leading-[1.1] font-black tracking-tight text-balance text-white font-stretch-semi-condensed md:text-6xl lg:text-7xl",
              HERO_TEXT_SHADOW
            )}
          >
            {title}
          </h1>

          {tagline && (
            <p
              className={cn(
                "font-headline text-xl font-bold tracking-tight text-white md:text-2xl",
                HERO_TEXT_SHADOW
              )}
            >
              {tagline}
            </p>
          )}

          <p
            className={cn(
              "max-w-2xl font-body text-lg leading-relaxed text-white/80",
              HERO_TEXT_SHADOW
            )}
          >
            {lede}
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
            {actions}
          </div>

          {note}
        </div>
      </div>
    </header>
  )
}
