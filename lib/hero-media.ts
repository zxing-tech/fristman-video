/**
 * The one piece of hero footage on the site, shared by the homepage and by
 * every `/services/*` detail hero. Kept here rather than duplicated per page so
 * the two can never drift onto different clips.
 *
 * Industrial plant at blue hour (Pexels 856627, licensed for commercial use, no
 * attribution required). Stock, and never captioned as Firstman's own work.
 *
 * Known and accepted: this clip is a dusk-to-night time-lapse, not a locked-off
 * shot. Measured mean luminance across its 7.9s runs 0.115 → 0.012, so it is
 * bright for roughly the first two seconds and close to black for the rest,
 * then jumps back at the loop point. Chosen anyway for its look. Two
 * consequences are load-bearing for the code around it:
 *   - the scrims over it are deliberately light, because darkening an already
 *     dark clip would leave nothing visible at all;
 *   - no separate phone rendition. At 1920x1080 for 4.4 MB the full file is
 *     already small, and the wider source keeps the heavy mobile crop sharp.
 *     HeroVideo still accepts `srcSmall` if a heavier clip ever lands here.
 *
 * If this is ever swapped: the poster must be frame 0 of the video itself, not
 * a still supplied alongside it, or the fade-in visibly jumps.
 */
export const HERO_VIDEO = "/videos/hero.mp4"
export const HERO_POSTER = "/videos/hero-poster.jpg"

/**
 * Legibility over moving footage, where a still frame's contrast is not a
 * guarantee. This buys contrast at the glyph edges only, so it costs nothing
 * anywhere the text is not — which is the whole point of keeping the scrim
 * light.
 */
export const HERO_TEXT_SHADOW =
  "[text-shadow:0_1px_2px_rgb(0_0_0/0.65),0_8px_32px_rgb(0_0_0/0.45)]"
