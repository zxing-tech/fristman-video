"use client"

import { useEffect, useRef } from "react"

import { MaterialIcon } from "@/components/site/material-icon"
import { ModalShell } from "@/components/site/modal-shell"

export type VideoLightboxProps = {
  src: string
  poster?: string
  /**
   * Names the dialog for assistive technology. The panel renders no text at all
   * — the film is the entire content — so this is the only accessible name it
   * has.
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
 * Imported directly rather than through `next/dynamic`, unlike the
 * request-access dialog beside it. That split exists to keep a heavy form out
 * of the initial bundle; this component is a `<video>` and one effect, and a
 * lazy chunk would insert a network round-trip *before* the file could even
 * start downloading — the opposite of what a player needs.
 *
 * The portal, scroll lock, focus trap and Escape handling all live in
 * `ModalShell`; read its header for why each one is shaped the way it is.
 */
export function VideoLightbox({
  src,
  poster,
  label,
  onClose,
}: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  /**
   * Mount only — an effect that re-ran would restart the film mid-play.
   *
   * The `autoPlay` attribute alone is not enough: Chrome refuses an *unmuted*
   * autoplay until a site has earned a media-engagement score, even directly
   * after a click, and the panel would open on a frozen first frame. So ask for
   * sound, fall back to muted if the promise rejects, and leave the native
   * controls to offer the sound back.
   */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    void video.play().catch(() => {
      video.muted = true
      void video.play().catch(() => {})
    })
  }, [])

  return (
    <ModalShell
      className="p-6 md:p-10"
      // The native player is a real tab stop and it is the whole content here,
      // so the trap has to be able to reach it.
      extraFocusable="video[controls]"
      onClose={onClose}
      scrimClassName="lightbox-scrim bg-black/90 backdrop-blur-sm"
    >
      <div
        aria-label={label}
        aria-modal="true"
        className="lightbox-frame relative z-10"
        role="dialog"
      >
        {/* Inside the picture, top-right, clear of the native control bar along
            the bottom edge.

            Sitting in the frame costs this control its background: outside it
            sat on the dialog's 90% black scrim, here it sits on whatever the
            film happens to be doing, so it has to carry its own contrast. The
            60% black fill over a 12px backdrop blur handles a busy frame, the
            hairline keeps the disc's edge from dissolving into a dark one, and
            the offset shadow separates it from a bright one.

            `z-20` is load-bearing: the picture is a later positioned sibling,
            so without it the video paints straight over this button.

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

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
          <video
            className="block aspect-video w-full object-contain"
            controls
            /* The one clip behind this player runs 7.9 seconds. Ending it would
               leave a full-screen dialog sitting on a frozen frame within eight
               seconds of opening, which reads as broken rather than finished.
               When real client films land here, this attribute comes off. */
            loop
            playsInline
            poster={poster}
            preload="auto"
            ref={videoRef}
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    </ModalShell>
  )
}
