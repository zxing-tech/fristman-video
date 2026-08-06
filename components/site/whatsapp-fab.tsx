"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

/**
 * ⚠️ PLACEHOLDER NUMBER — this does not reach anyone.
 *
 * Requested as a placeholder on 2026-08-06. Swap it for the crew's real
 * WhatsApp line before this goes live; nothing else in the file has to change.
 *
 * Format is what `wa.me` requires: country code first, digits only, no `+`, no
 * spaces, no leading zero. The mobile already published in `lib/seo.ts`
 * (+6017 356 3598) would be written `"60173563598"`.
 */
const WHATSAPP_NUMBER = "600000000000"

/**
 * Opens the thread with the first line already typed, so what lands on the
 * crew's phone is the start of a brief rather than "hi". One sentence, in the
 * product's own register — this is the same visitor the consultation form
 * addresses, arriving through a faster door.
 */
const WHATSAPP_MESSAGE =
  "Hi Firstman Videos, I'd like to discuss video documentation for a site."

const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

/**
 * Held back for the first screen. Every page here opens with its own call to
 * action — the hero carries two buttons, the service and case-study heroes one
 * — and a floating pill parked over them competes with the thing it duplicates.
 * 320px is past the fold on the shortest viewport the site supports, so the
 * button arrives once the visitor has committed to reading rather than landing
 * on top of the first ask.
 */
const REVEAL_AFTER_PX = 320

/**
 * Floating WhatsApp contact.
 *
 * Three decisions worth keeping:
 *
 *  1. **The disc is the WhatsApp lock-up, untouched** — the official glyph in
 *     white on brand green. That pairing is the reason the button is
 *     recognisable at 56px with no words attached, and reproducing it exactly
 *     is the point of using the colour at all.
 *  2. **The label is a separate panel, not text inside the green.** White text
 *     on `#25d366` measures 1.99:1, nowhere near the 4.5:1 a 12px label needs,
 *     and darkening the green until it passed would mean shipping a green
 *     nobody recognises. So the wordmark disc keeps the brand pairing (a logo,
 *     which contrast rules exempt) and the words sit on the site's own surface
 *     behind it, where `text-surface` clears AA in both themes. Brand mark
 *     plus system chrome, each doing what it is good at.
 *  3. **The label shows by default and only tucks away under `hover-reveal`** —
 *     the same rule PhotoCard follows. A touch visitor has no hover to discover
 *     it with, and someone who asked for reduced motion should not have to
 *     trigger an animation to read what a control does. Under that variant it
 *     also goes `absolute`, so the collapsed button is the 56px disc and
 *     nothing more: left in flow it would leave an invisible 180px of anchor
 *     lying over the content beside it, swallowing clicks meant for the page.
 *
 * The shadow is the ambient panel shadow, not a coloured bloom. DESIGN.md
 * reserves the glow for Signal Red — a green one would quietly hand this
 * button the system's "this is the action here" language while wearing another
 * brand's colour.
 */
export function WhatsAppFab() {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const update = () => setRevealed(window.scrollY > REVEAL_AFTER_PX)
    window.addEventListener("scroll", update, { passive: true })
    // rAF rather than calling `update()` here directly: `react-hooks/set-state-
    // in-effect` is on, and this also catches a load that restores a mid-page
    // scroll position, where no scroll event ever fires.
    const frame = requestAnimationFrame(update)
    return () => {
      window.removeEventListener("scroll", update)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Firstman Videos on WhatsApp"
      className={cn(
        "group fixed right-4 bottom-4 z-30 flex w-fit items-center rounded-full transition-all duration-300 md:right-6 md:bottom-6",
        "focus-visible:ring-2 focus-visible:ring-surface focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        // `invisible` rather than an unmount, matching the navbar dropdown:
        // `visibility: hidden` takes it out of the tab order while it is parked,
        // and keeping it mounted is what lets it fade rather than appear.
        revealed
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-3 opacity-0"
      )}
    >
      {/* The words. `-mr-7` tucks the panel's right end under the disc so the
          two read as one object rather than as a chip beside a button. */}
      <span
        aria-hidden="true"
        className={cn(
          // `whitespace-nowrap` is load-bearing, not tidiness: absolutely
          // positioned at `right-full` the panel has zero available width to
          // shrink-to-fit against, so it wraps to min-content and the label
          // breaks across two lines.
          "-mr-7 rounded-full border border-surface/10 bg-background/95 py-3 pr-10 pl-5 font-label text-xs font-bold tracking-wider whitespace-nowrap text-surface uppercase shadow-[0_6px_24px_rgba(0,0,0,0.35)] backdrop-blur-md",
          "transition-[translate,opacity,visibility] duration-300 ease-out",
          // Out of flow and parked only where there is a pointer to reveal it
          // with. `right-full` puts it left of the disc; the negative margin
          // survives the switch, so the overlap is identical in both states.
          "hover-reveal:invisible hover-reveal:absolute hover-reveal:top-1/2 hover-reveal:right-full hover-reveal:translate-x-3 hover-reveal:-translate-y-1/2 hover-reveal:opacity-0",
          "group-hover:visible group-hover:translate-x-0 group-hover:opacity-100",
          "group-focus-visible:visible group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
        )}
      >
        WhatsApp us
      </span>
      {/* `relative z-10` so the disc paints over the panel it overlaps — an
          absolutely positioned sibling would otherwise sit on top of it.

          `#25d366` is WhatsApp's brand green and `#1da851` its pressed state.
          Owner decision, 2026-08-06: this button wears WhatsApp's colour rather
          than Signal Red. That is a deliberate exception to DESIGN.md's One Red
          Rule, so it is contained — the two values appear as literals here and
          nowhere else. They are not tokens, not CSS variables, not wired into
          `@theme inline`; nothing else on the site can reach for them, and the
          system still has exactly one chromatic voice of its own.

          They are also constant across both themes, the same way the red is. A
          foreign brand's mark that shifted with our theme would stop being the
          mark. */}
      <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_6px_24px_rgba(0,0,0,0.35)] transition-colors duration-300 group-hover:bg-[#1da851] group-focus-visible:bg-[#1da851]">
        {/* Material Symbols has no WhatsApp glyph — brand marks are not part of
            the set — so this is the authored path, at the same 24px the icon
            system renders everything else. */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className="size-6 fill-current"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.885 3.488" />
        </svg>
      </span>
    </a>
  )
}
