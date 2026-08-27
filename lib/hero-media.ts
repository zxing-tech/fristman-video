/**
 * Every hero's footage, in one file so no two pages can drift onto different
 * files for the same slot.
 *
 * **The 2026-08-27 delivery replaced all of it.** The owner supplied eight
 * finished films — one for the homepage, one for each of the six services, one
 * for `/about` — and every hero on the site now runs the owner's own footage
 * for the page it is on. Before this, three services shared their clip with
 * the homepage and three more borrowed a load-out clip that had nothing to do
 * with their subject.
 *
 * Provenance is settled by that delivery: these are Firstman's own films, not
 * stock. The Pexels clip that held the homepage until 2026-08-07 is gone from
 * the site entirely, and so is the ⚠️ note that used to sit here about a
 * hero whose origin nobody had recorded — the file that note was about
 * (`hero-master.mp4`) turns out to be the topside load-out delivery, which is
 * now on the service page it belongs to.
 *
 * Every file here is a re-encode of the delivered master at the same in and
 * out points it arrived with — **nothing is trimmed**, which is the owner's
 * standing rule. Audio is dropped (all heroes are muted), 1080p plus a 720p
 * phone rendition, `+faststart`. CRF is picked per clip against a size budget
 * rather than fixed, because the delivery runs 10s to 50s and one CRF across
 * that range produces either a soft 10-second clip or a 25 MB one. The
 * masters are in `source-media/2026-delivery/`.
 *
 * If a clip is ever swapped: the poster must be a frame of the video itself,
 * or the cross-fade visibly jumps. Frame 0 where the film opens lit; the
 * first lit frame where it fades up from black, since the poster is also the
 * entire background under reduced motion and a black rectangle is not a
 * background.
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
   * footage; see `HERO_GRADES` below for the measured reason each clip carries
   * the value it does.
   */
  grade?: "standard" | "deep"
}

/**
 * The homepage film, and the fallback for any hero without its own clip.
 *
 * `/contact` is the only page taking the fallback now. It carries `deep`
 * because this clip is daylight aerial like the rest of the delivery — see
 * the grade note on `SERVICE_HERO_MEDIA`.
 */
export const DEFAULT_HERO_MEDIA: HeroMedia = {
  video: HERO_VIDEO,
  videoSmall: HERO_VIDEO_SMALL,
  poster: HERO_POSTER,
  grade: "deep",
}

/**
 * All six services, keyed by the slug in `lib/data/services.ts`.
 *
 * The union used to name the three services that had footage, so a page
 * without one was a compile error rather than a silent fallback. Every service
 * has its own film as of 2026-08-27, so the union's job now is the opposite
 * and just as useful: rename a service and forget this file, and the build
 * fails here instead of shipping a service page playing another service's
 * work.
 *
 * All six carry `grade: "deep"`. The whole delivery is daylight — yards,
 * decks, open water and factory floor — and the measurement that put `deep`
 * on the 2026-08-07 clips applies to these for the same reason: on `standard`
 * the hero lede lands in the 3.9–4.4:1 range against a 4.5 floor at the
 * clips' brightest frames.
 */
type ServiceWithFootage =
  | "corporate-videos"
  | "og-topside-loadout"
  | "og-offshore-installation"
  | "ai-generated-video"
  | "long-term-timelapse"
  | "safety-induction-videos"

export const SERVICE_HERO_MEDIA: Record<ServiceWithFootage, HeroMedia> = {
  "corporate-videos": {
    video: "/videos/services/corporate-videos.mp4",
    videoSmall: "/videos/services/corporate-videos-sm.mp4",
    poster: "/videos/services/corporate-videos-poster.jpg",
    grade: "deep",
  },
  "og-topside-loadout": {
    video: "/videos/services/og-topside-loadout.mp4",
    videoSmall: "/videos/services/og-topside-loadout-sm.mp4",
    poster: "/videos/services/og-topside-loadout-poster.jpg",
    grade: "deep",
  },
  "og-offshore-installation": {
    video: "/videos/services/og-offshore-installation.mp4",
    videoSmall: "/videos/services/og-offshore-installation-sm.mp4",
    poster: "/videos/services/og-offshore-installation-poster.jpg",
    grade: "deep",
  },
  "ai-generated-video": {
    video: "/videos/services/ai-generated-video.mp4",
    videoSmall: "/videos/services/ai-generated-video-sm.mp4",
    poster: "/videos/services/ai-generated-video-poster.jpg",
    grade: "deep",
  },
  "long-term-timelapse": {
    video: "/videos/services/long-term-timelapse.mp4",
    videoSmall: "/videos/services/long-term-timelapse-sm.mp4",
    poster: "/videos/services/long-term-timelapse-poster.jpg",
    grade: "deep",
  },
  "safety-induction-videos": {
    video: "/videos/services/safety-induction-videos.mp4",
    videoSmall: "/videos/services/safety-induction-videos-sm.mp4",
    poster: "/videos/services/safety-induction-videos-poster.jpg",
    grade: "deep",
  },
}

/**
 * `/about`, which ran the shared homepage clip until 2026-08-27 and now has a
 * film of its own from the same delivery.
 */
export const ABOUT_HERO_MEDIA: HeroMedia = {
  video: "/videos/about.mp4",
  videoSmall: "/videos/about-sm.mp4",
  poster: "/videos/about-poster.jpg",
  grade: "deep",
}

/**
 * The three scrim layers that carry white copy over moving footage, at the two
 * strengths the site's clips need. Full class strings, not interpolated values:
 * Tailwind reads source text, so a computed `bg-black/${n}` produces no CSS.
 *
 * `standard` is the original set, measured against a clip that ran mostly dark.
 * `deep` exists because the owner-supplied footage is daylight aerial and
 * factory-floor material that sits 2–3 stops brighter. Measured at each clip's
 * brightest frame with the hero copy set to transparent, the lede came in at
 * 3.93–4.43:1 against a 4.5 floor on `standard`; `deep` clears it without
 * flattening the picture into a black band.
 *
 * **This lives here, not in `service-hero.tsx`, as of 2026-08-27.** It was
 * defined inside that component, so the homepage — which builds its own hero
 * instead of using it — carried a hand-copied `standard` set and had no way to
 * follow `DEFAULT_HERO_MEDIA.grade`. That was already a known failure before
 * this delivery: the note on this file recorded the 2026-08-07 clip putting the
 * homepage lede at 3.28:1 against a 4.5 floor on `standard`, and left turning
 * `deep` on as the fix "when someone wants it".
 *
 * Measured whole-frame at 2fps: the 2026-08-07 clip ran mean 153/255, peaking
 * at 199. The 2026-08-27 homepage film runs mean 125, peaking at 169 — better,
 * and still daylight aerial nowhere near the Pexels night-plant footage the
 * `standard` set was written against. So `deep` goes on, and the homepage reads
 * it from here rather than from a copy. A grade is a property of the footage;
 * it belongs in the file that names the footage.
 */
export const HERO_GRADES = {
  standard: {
    even: "bg-black/15",
    phone: "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
    ellipse:
      "bg-[radial-gradient(115%_95%_at_16%_52%,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.4)_32%,rgba(0,0,0,0.26)_56%,rgba(0,0,0,0.08)_76%,transparent_90%)]",
  },
  deep: {
    even: "bg-black/22",
    phone: "bg-gradient-to-t from-black/85 via-black/50 to-transparent",
    ellipse:
      "bg-[radial-gradient(115%_95%_at_16%_52%,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.5)_32%,rgba(0,0,0,0.34)_56%,rgba(0,0,0,0.12)_76%,transparent_90%)]",
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
