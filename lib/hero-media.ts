/**
 * The default hero footage: the homepage, `/about`, `/contact`, and every
 * `/services/*` page that has no clip of its own. Kept here rather than
 * duplicated per page so those can never drift onto different files.
 *
 * The Pexels blue-hour plant clip that held this slot was replaced in place on
 * 2026-08-07 with owner-supplied footage: an offshore topside load-out —
 * SPMT transporters walking a yellow structure onto a barge, tugs alongside,
 * 15.68s. ⚠️ **Provenance is not recorded.** It reads as Firstman's own work
 * rather than stock, which would make it the first real footage on the site,
 * but nothing confirms that. Establish it before anyone writes copy, alt text
 * or an attribution around it — the old file's Pexels licence does not carry
 * over to a different clip. See ATTRIBUTIONS.md.
 *
 * Both files here are re-encodes of that delivery, at the same in and out
 * points it arrived with — nothing trimmed. Audio dropped (the hero is muted),
 * 1080p at CRF 29 and a 720p phone rendition at CRF 31, `+faststart`: 38 MB
 * down to 6.6 MB, plus 2.6 MB for phones. The master is in `source-media/`.
 *
 * Two measured properties of this clip are load-bearing for the code around it:
 *   - it is **bright**. Mean luminance under the headline runs 0.341 against
 *     the old clip's 0.115 → 0.012, and at its brightest frame the lede on a
 *     `standard` grade measures 3.28:1 against a 4.5 floor. The `deep` grade in
 *     service-hero.tsx exists for exactly this and is not applied here — the
 *     pages still on this clip render as they did, deliberately. Turning it on
 *     for `DEFAULT_HERO_MEDIA` is the fix when someone wants it;
 *   - it ends in a "grid collapse to black" outro, which blinks once per loop.
 *     Removing it means cutting the clip, which the owner ruled out.
 *
 * If this is ever swapped: the poster must be frame 0 of the video itself, not
 * a still supplied alongside it, or the fade-in visibly jumps.
 */
export const HERO_VIDEO = "/videos/hero.mp4"
export const HERO_VIDEO_SMALL = "/videos/hero-sm.mp4"
export const HERO_POSTER = "/videos/hero-poster.jpg"

/** One hero's footage and the still that stands in for it. */
export type HeroMedia = {
  video: string
  /**
   * Painted immediately behind the video, cross-faded out as the video starts,
   * and the whole background for anyone on reduced motion or data-saver — so it
   * has to be a frame the page can live on, not just a placeholder.
   */
  poster: string
  /**
   * 720p rendition, served under 768px. `object-cover` on a portrait viewport
   * already crops a 16:9 frame to its middle third, so the full file's extra
   * pixels buy nothing there.
   */
  videoSmall?: string
  /**
   * How hard the hero's scrims work over this clip. `deep` is for daylight
   * footage; see `GRADES` in components/site/service-hero.tsx for the measured
   * reason each clip carries the value it does.
   */
  grade?: "standard" | "deep"
}

export const DEFAULT_HERO_MEDIA: HeroMedia = {
  video: HERO_VIDEO,
  videoSmall: HERO_VIDEO_SMALL,
  poster: HERO_POSTER,
}

/**
 * The services whose hero carries its own footage. Three of the six do; the
 * other three take `DEFAULT_HERO_MEDIA` until their clip is shot, and this
 * union is what makes that difference a compile error rather than a typo that
 * silently falls back.
 */
type ServiceWithFootage =
  "corporate-videos" | "facility-overview-films" | "industrial-photography"

/**
 * Client footage, delivered 2026-08-07 and shipped at the same in and out
 * points it arrived with — nothing is trimmed. Each clip is the delivered
 * master re-encoded for the web: audio dropped (the hero is muted), 1080p at
 * CRF 29 plus a 720p phone rendition at CRF 31, `+faststart`. That takes the
 * three from 25–36 MB each to 2.7–5.1 MB.
 *
 * Two properties of the delivered edits are inherited deliberately rather than
 * fixed, because they cannot be fixed without cutting:
 *   - all three end on the same "grid collapse to black" outro, which shows as
 *     a blink once per loop;
 *   - Photography fades up from black, so its poster is taken at 0.35s — the
 *     first fully lit frame of the same shot — instead of frame 0, which is a
 *     black rectangle and would also be the entire background under reduced
 *     motion.
 *
 * The Corporate Videos clip is a sample of Firstman's own work for a named
 * client: it opens on that client's signage and closes on a wall of *their*
 * clients' logos. See ATTRIBUTIONS.md before treating either as cleared.
 */
export const SERVICE_HERO_MEDIA: Record<ServiceWithFootage, HeroMedia> = {
  "corporate-videos": {
    video: "/videos/services/corporate-videos.mp4",
    videoSmall: "/videos/services/corporate-videos-sm.mp4",
    poster: "/videos/services/corporate-videos-poster.jpg",
    grade: "deep",
  },
  "facility-overview-films": {
    video: "/videos/services/facility-overview-films.mp4",
    videoSmall: "/videos/services/facility-overview-films-sm.mp4",
    poster: "/videos/services/facility-overview-films-poster.jpg",
    grade: "deep",
  },
  "industrial-photography": {
    video: "/videos/services/industrial-photography.mp4",
    videoSmall: "/videos/services/industrial-photography-sm.mp4",
    poster: "/videos/services/industrial-photography-poster.jpg",
    grade: "deep",
  },
}

/**
 * Legibility over moving footage, where a still frame's contrast is not a
 * guarantee. This buys contrast at the glyph edges only, so it costs nothing
 * anywhere the text is not — which is the whole point of keeping the scrim
 * light.
 */
export const HERO_TEXT_SHADOW =
  "[text-shadow:0_1px_2px_rgb(0_0_0/0.65),0_8px_32px_rgb(0_0_0/0.45)]"
