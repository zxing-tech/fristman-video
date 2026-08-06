"use client"

import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

/**
 * The chrome every modal on this site needs, in one place: a portal out to
 * `document.body`, a working scroll lock, a focus trap, Escape to close, and
 * focus returned to whatever opened it.
 *
 * ## Why the portal is not optional
 *
 * `position: fixed` resolves against the viewport ONLY while no ancestor
 * establishes a containing block. `transform`, `filter`, `backdrop-filter`,
 * `perspective`, `will-change: transform` and `contain: paint` all do — and
 * this codebase reaches for `backdrop-filter` constantly (`.glass-panel`,
 * `.glass-modal`, the navbar pill, the sticky filter bar on `/our-work`).
 *
 * Measured on 2026-08-06: the Request Access dialog rendered from a trigger
 * inside `/our-work`'s sticky filter bar, which carries `backdrop-blur-md`. Its
 * `fixed inset-0` root measured **1280x74px in a 1920x968 viewport** — the
 * filter bar's own box. The scrim covered a 74px strip and the rest of the page
 * showed through, fully readable, which is exactly what the owner reported.
 *
 * Rendering into `document.body` puts the modal outside every one of those
 * containing blocks by construction, so no future `backdrop-blur` on an
 * intermediate wrapper can trap it again.
 *
 * ## Why the scroll lock moved off `body`
 *
 * `body { overflow: hidden }` reaches the viewport only when `html`'s overflow
 * computes to `visible`. `app/globals.css` sets `html { overflow-x: clip }` as a
 * deliberate safety net, which disables that propagation — so the body rule was
 * inert. Measured with a real wheel event on 2026-08-06: modal open, page still
 * scrolled 600px. (`window.scrollBy` is programmatic and is never blocked by
 * `overflow: hidden`, so it cannot be used to test this.)
 *
 * The lock therefore goes on `documentElement`. While it is held, the computed
 * `overflow-x` drops from `clip` to `hidden` — the spec pairs them that way —
 * which was measured as harmless: the fixed navbar and the sticky filter bar
 * both keep their positions. It is also restored the moment the modal closes.
 */

const BASE_FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

type ModalShellProps = {
  onClose: () => void
  /**
   * Extra selectors to treat as tab stops, comma-joined onto the base list.
   * The video lightbox passes `video[controls]`, because there the native
   * player is the content and the trap has to be able to hand focus to it.
   */
  extraFocusable?: string
  /** The scrim. Kept per-modal: a form dialog and a film plate want different weights. */
  scrimClassName?: string
  /** Layout of the centring root — padding, mostly. */
  className?: string
  children: React.ReactNode
}

export function ModalShell({
  onClose,
  extraFocusable,
  scrimClassName = "bg-black/85 backdrop-blur-md",
  className = "p-4",
  children,
}: ModalShellProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const selector = extraFocusable
      ? `${BASE_FOCUSABLE}, ${extraFocusable}`
      : BASE_FOCUSABLE

    // `getClientRects().length` rather than `offsetParent`: a honeypot input is
    // `display: none` (no rects, correctly skipped) and every real control here
    // sits inside a `position: fixed` root, where `offsetParent` is not a
    // reliable visibility test.
    const focusables = () =>
      [
        ...(rootRef.current?.querySelectorAll<HTMLElement>(selector) ?? []),
      ].filter((el) => el.getClientRects().length > 0)

    focusables()[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
        return
      }
      if (event.key !== "Tab") return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const doc = document.documentElement
    const previousOverflow = doc.style.overflow
    // Reserve the scrollbar's width for the duration, or hiding it shifts the
    // whole page — and the fixed navbar with it — by the bar's width the moment
    // the modal opens.
    const previousGutter = doc.style.scrollbarGutter
    doc.style.scrollbarGutter = "stable"
    doc.style.overflow = "hidden"
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      doc.style.overflow = previousOverflow
      doc.style.scrollbarGutter = previousGutter
      // Back to the control they opened it from, not to the top of the page.
      opener?.focus?.()
    }
  }, [onClose, extraFocusable])

  // Neither caller renders on the server — the request dialog is behind
  // `next/dynamic(..., { ssr: false })` and the lightbox only mounts on a click
  // — so there is no hydration mismatch to guard against, only the absence of
  // `document` during a server render.
  if (typeof document === "undefined") return null

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center ${className}`}
      ref={rootRef}
      role="presentation"
    >
      {/* Dismiss-on-outside-click lives on the scrim, not on the root, and that
          placement is the whole fix. A `click` event fires on the nearest common
          ancestor of the element pressed and the element released — so a bare
          `onClick={onClose}` on the ROOT fired whenever a drag began inside the
          panel and ended outside it, and drag-selecting a sentence in the
          request form's textarea then releasing over the backdrop threw away a
          half-filled form. Bound here, the handler runs only when press AND
          release both landed on the scrim, which is what the gesture looks like.

          It also means the panel needs no `stopPropagation` to defend itself. */}
      <div className={`absolute inset-0 ${scrimClassName}`} onClick={onClose} />
      {children}
    </div>,
    document.body
  )
}
