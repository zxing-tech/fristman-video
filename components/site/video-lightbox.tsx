"use client"

import { MaterialIcon } from "@/components/site/material-icon"
import { ModalShell } from "@/components/site/modal-shell"

export type VideoLightboxProps = {
  /** YouTube id. Every film on `/our-work` is published on the company channel. */
  youtubeId: string
  /**
   * Names the dialog for assistive technology, and titles the frame. The panel
   * renders no text at all — the film is the entire content — so this is the
   * only accessible name it has.
   */
  label: string
  onClose: () => void
}

/**
 * The film viewer behind every card on `/our-work`. Deliberately holds nothing
 * but the picture: no title plate, no spec strip, no description. The card the
 * visitor just clicked already carried all of that, and repeating it inside the
 * dialog would put reading between them and the one thing they asked to see.
 *
 * It plays YouTube rather than a local file as of 2026-08-07, because that is
 * where the work actually lives: seven published films on the company's own
 * channel, replacing five placeholder cards that all fell back to the same
 * stock hero clip. Three consequences are deliberate:
 *
 *  1. **`youtube-nocookie.com`, not `youtube.com`.** The privacy-enhanced host
 *     sets no tracking cookie until playback begins. `privacy-policy/`'s cookie
 *     banner is presentational and gates nothing (it persists no consent and
 *     blocks no scripts), so the embed has to be the conservative one by
 *     default rather than by consent.
 *  2. **The iframe mounts on click, never before.** This component is rendered
 *     only while a card is playing, so a visitor who opens `/our-work` and
 *     never presses play makes no request to Google at all. That is worth more
 *     than any lazy-loading attribute, and it is why the array of cards holds
 *     ids rather than pre-rendered embeds.
 *  3. **`rel=0` and `modestbranding=1`.** End screens stay inside the channel
 *     rather than offering a competitor's showreel on top of the client's film.
 *
 * Imported directly rather than through `next/dynamic`, unlike the
 * request-access dialog beside it. That split exists to keep a heavy form out
 * of the initial bundle; this component is one iframe, and a lazy chunk would
 * insert a network round-trip *before* the player could even start loading —
 * the opposite of what a player needs.
 *
 * The portal, scroll lock, focus trap and Escape handling all live in
 * `ModalShell`; read its header for why each one is shaped the way it is.
 */
export function VideoLightbox({
  youtubeId,
  label,
  onClose,
}: VideoLightboxProps) {
  const src =
    `https://www.youtube-nocookie.com/embed/${youtubeId}` +
    `?autoplay=1&rel=0&modestbranding=1&playsinline=1&color=white`

  return (
    <ModalShell
      className="p-6 md:p-10"
      // The player is a real tab stop and it is the whole content here, so the
      // trap has to be able to reach it. Was `video[controls]` while this
      // played a local file; YouTube's controls live inside the frame, so the
      // frame itself is the stop.
      extraFocusable="iframe"
      onClose={onClose}
      scrimClassName="lightbox-scrim bg-black/90 backdrop-blur-sm"
    >
      <div
        aria-label={label}
        aria-modal="true"
        className="lightbox-frame relative z-10"
        role="dialog"
      >
        {/* Inside the picture, top-right, clear of the player's control bar
            along the bottom edge.

            Sitting in the frame costs this control its background: outside it
            sat on the dialog's 90% black scrim, here it sits on whatever the
            film happens to be doing, so it has to carry its own contrast. The
            60% black fill over a 12px backdrop blur handles a busy frame, the
            hairline keeps the disc's edge from dissolving into a dark one, and
            the offset shadow separates it from a bright one.

            `z-20` is load-bearing: the picture is a later positioned sibling,
            so without it the player paints straight over this button. It also
            has to clear YouTube's own chrome, which puts a share affordance in
            the same corner once the pointer moves — hence the solid disc rather
            than a bare glyph.

            Hover goes to solid Signal Red rather than the ghost button's 25%.
            Composited over a 60% black base, 25% reads as "slightly warmer
            dark" and the state change disappears — and solid is the fill the
            play disc on the `/our-work` cards already takes, so the two agree.
            The whites stay literal per DESIGN.md's photo exception. */}
        <button
          aria-label="Close video"
          className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-[0_4px_16px_rgba(0,0,0,0.55)] backdrop-blur-md transition-colors duration-300 hover:border-primary hover:bg-primary"
          onClick={onClose}
          type="button"
        >
          <MaterialIcon name="close" className="text-2xl!" />
        </button>

        <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
            src={src}
            title={label}
          />
        </div>
      </div>
    </ModalShell>
  )
}
