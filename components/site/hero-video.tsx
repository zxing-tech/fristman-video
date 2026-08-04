"use client"

import { useState, useSyncExternalStore } from "react"

import { cn } from "@/lib/utils"

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)"

/**
 * True when we should not play a looping background video at all: the visitor
 * asked for reduced motion, or their browser is in data-saver mode. Either way
 * the hero falls back to the poster still, which is already painted behind it.
 */
function shouldHoldStill() {
  if (window.matchMedia(REDUCED_MOTION).matches) return true
  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection
  return connection?.saveData === true
}

function subscribe(onStoreChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION)
  query.addEventListener("change", onStoreChange)
  return () => query.removeEventListener("change", onStoreChange)
}

// Server snapshot holds still on purpose. The markup that ships is the poster
// alone; the video is added on the client once the motion preference is known,
// so nothing autoplays before we have read it.
const holdStillOnServer = () => true

type HeroVideoProps = {
  src: string
  /**
   * Narrower rendition for phones. `object-cover` on a portrait viewport already
   * crops a 16:9 frame down to its middle third, so the extra pixels of the full
   * file buy nothing there and cost real mobile data.
   */
  srcSmall?: string
  className?: string
}

export function HeroVideo({ src, srcSmall, className }: HeroVideoProps) {
  const holdStill = useSyncExternalStore(
    subscribe,
    shouldHoldStill,
    holdStillOnServer
  )
  // Set from the media element's own event, never from an effect — the repo has
  // react-hooks/set-state-in-effect switched on.
  const [canPlay, setCanPlay] = useState(false)

  if (holdStill) return null

  // Safe to read directly: this component never renders on the server, and a
  // background loop should not restart itself just because the window resized.
  const source = srcSmall && window.innerWidth < 768 ? srcSmall : src

  return (
    <video
      // Decorative: the poster underneath carries the same frame, and the hero's
      // meaning lives in the headline, not the footage.
      aria-hidden="true"
      tabIndex={-1}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onCanPlay={() => setCanPlay(true)}
      className={cn(
        "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out",
        canPlay ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <source src={source} type="video/mp4" />
    </video>
  )
}
