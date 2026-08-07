import { MaterialIcon } from "@/components/site/material-icon"
import { cn } from "@/lib/utils"

/**
 * A photograph with a caption plate — every image-backed card on the site: the
 * six under `/services/*` and the four in the homepage's "Why Firstman Videos"
 * bento. At rest the plate carries the title alone; on hover it extends
 * downward-out and the description slides out from behind it as the scrim
 * deepens to carry the extra text.
 *
 * That reveal is the card's one authored moment, so it is defined here once
 * rather than re-typed in five page files — ten cards that all behave the same
 * way should not be ten chances to drift on a duration.
 *
 * Photo exception (DESIGN.md): these cards stay dark in both themes. The base
 * is a literal black, every scrim is literal black, the copy is literal white,
 * and the image opacity carries no `dark:` variant — a card that renders
 * identically in both themes must not be told to dim in one of them.
 *
 * Three accessibility rules are load-bearing here, not decoration:
 *
 *  1. The description is visible BY DEFAULT and only collapses under the
 *     `hover-reveal` variant (see app/globals.css). On a touch screen there is
 *     no hover, so hiding it by default would delete the copy outright for
 *     phone visitors.
 *  2. That variant also requires `prefers-reduced-motion: no-preference`.
 *     Someone who asked for less motion gets the full card, static — the
 *     alternative would be animating anyway or hiding text with no way to
 *     reveal it.
 *  3. The collapse is `grid-template-rows: 0fr` with `overflow-hidden`, never
 *     `display: none` or `visibility: hidden`. The text stays in the accessibility
 *     tree and is still announced, it simply has no height.
 *
 * The remaining gap is a sighted desktop keyboard-only visitor, who cannot
 * hover: these cards are not links, so there is nothing to focus. The copy is
 * supporting detail rather than the card's meaning, and it reaches touch,
 * reduced-motion and screen-reader visitors, so the trade is deliberate.
 */

// Entrance decelerates confidently; the exit is quicker, because leaving a card
// should not feel like waiting for it to finish with you.
const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]"

// `minH` is not styling. Everything inside this card is absolutely positioned —
// the photograph, both scrims and the caption — so the figure has nothing in
// flow to give it height and collapses to its border wherever the surrounding
// grid does not size it. Measured 2026-08-05: the incident card sat in a
// `grid-cols-1 md:grid-cols-3` with no `auto-rows`, and on a 390px screen it
// rendered 2px tall. Each floor below clears that size's own caption at its
// narrowest column, so the copy cannot be clipped either.
const sizes = {
  sm: {
    pad: "p-6",
    title: "text-base",
    body: "text-xs",
    minH: "min-h-[15rem]",
  },
  md: { pad: "p-6", title: "text-xl", body: "text-sm", minH: "min-h-[15rem]" },
  lg: {
    pad: "p-8 md:p-10",
    title: "text-2xl",
    body: "text-base",
    minH: "min-h-[20rem]",
  },
}

type PhotoCardProps = {
  image: string
  /** Describes only what is visible in the frame. Never a project claim. */
  alt: string
  title: string
  body: string
  /** Optional marker glyph above the title. */
  icon?: string
  size?: keyof typeof sizes
  /** Grid spans and aspect ratio come from the page that places the card. */
  className?: string
}

export function PhotoCard({
  image,
  alt,
  title,
  body,
  icon,
  size = "md",
  className,
}: PhotoCardProps) {
  const s = sizes[size]

  return (
    <figure
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black",
        s.minH,
        className
      )}
    >
      <div
        aria-label={alt}
        className={cn(
          // `scale`, not `transform`: Tailwind v4's scale-* utilities set the
          // standalone `scale` property, so a transition naming `transform`
          // watches a property that never changes and the zoom snaps.
          "absolute inset-0 bg-cover bg-center opacity-95 transition-[opacity,scale] duration-700",
          EASE,
          "group-hover:scale-[1.04] group-hover:opacity-100"
        )}
        role="img"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Resting scrim.

          Stops are in `rem`, measured up from the bottom edge — deliberately
          not percentages of the card. The caption is roughly a fixed height
          whatever the card is, so a percentage ramp over-darkens a tall card
          and under-darkens a short one. Measured against the real photographs:
          on percentage stops the wide 234px incident card put its description
          at 17–48% from the bottom, where the ramp had already cleared, and
          white body copy fell to 4.03:1 — under the 4.5 floor — while the
          504px card was still being dimmed across ground that held no type at
          all.

          In `rem` the dense band tracks the text instead: a tall card keeps its
          top ~60% as pure picture, a short one stays covered because its text
          reaches that high. Values are the loosest that cleared WCAG with
          margin on all six cards. Do not tighten them back "to be safe" — they
          were measured, not guessed. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.90)_0,rgba(0,0,0,0.55)_3.5rem,rgba(0,0,0,0.20)_8rem,transparent_13rem)]" />

      {/* The plate extending. This second scrim is what makes room for the
          description rather than letting it land on bare photograph. It
          compounds with the one above, so its own values stay modest. */}
      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75)_0,rgba(0,0,0,0.52)_4rem,rgba(0,0,0,0.22)_9.5rem,transparent_15rem)] opacity-0 transition-opacity duration-500",
          EASE,
          "group-hover:opacity-100"
        )}
      />

      {/* The caption changes positioning model with the variant, and that is
          the point.

          Where the description is permanently open — touch, or reduced motion —
          the caption stays IN FLOW (`mt-auto` pushes it to the bottom of the
          flex column), so the card grows to whatever the copy needs and can
          never clip it. Measured 2026-08-05: this card's body runs 168px at
          311px wide, which overflowed a fixed 320px floor.

          Where hover collapses it, the caption goes ABSOLUTE, because an
          in-flow caption that grows on hover would resize the card and reflow
          the whole grid under the pointer.

          No fixed height can satisfy both, which is why this switches rather
          than picking a taller floor. */}
      <figcaption
        className={cn(
          "relative mt-auto",
          "hover-reveal:absolute hover-reveal:inset-x-0 hover-reveal:bottom-0 hover-reveal:mt-0",
          s.pad
        )}
      >
        {icon && (
          <MaterialIcon
            name={icon}
            className="mb-4 block text-3xl! text-primary"
          />
        )}
        <h3
          className={cn(
            "font-headline font-bold text-white",
            s.title,
            size === "lg" ? "mb-3" : "mb-2"
          )}
        >
          {title}
        </h3>

        {/* 0fr → 1fr animates to the content's real height without touching
            `height` itself, so the copy can be any length. `overflow-hidden`
            on the child is what makes the row actually clip. */}
        <div
          className={cn(
            "grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-200",
            EASE,
            "hover-reveal:grid-rows-[0fr] hover-reveal:opacity-0",
            "group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:duration-[450ms]"
          )}
        >
          <p
            className={cn(
              "overflow-hidden font-body leading-relaxed text-white/80",
              s.body
            )}
          >
            {body}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
