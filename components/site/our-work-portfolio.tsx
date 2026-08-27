"use client"

import { useCallback, useState } from "react"

import { ctaClasses } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import { VideoLightbox } from "@/components/site/video-lightbox"
import {
  FILM_CATEGORIES,
  films,
  type PortfolioFilm,
  type PrivateFilm,
  type PublicFilm,
} from "@/lib/data/our-work"

const cardHoverLift =
  "transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_25px_-5px_rgba(209,32,39,0.2)]"

/**
 * The watermark over a private film's preview clip, requested 2026-08-11 and
 * filled 2026-08-27 when the owner delivered the wordmark.
 *
 * It is the light-ink variant unconditionally, not a theme pair: this sits on
 * a still inside a card that stays dark in both themes (DESIGN.md's photo
 * exception), so a mark that flipped with the theme would go black-on-black
 * in light mode. Nothing renders it today — every private film is still
 * waiting on its preview clip — but the moment one lands, the watermark
 * appears with it.
 */
const FIRSTMAN_LOGO_SRC: string | null = "/images/brand/logo-dark.png"

/**
 * The only chip a card carries, and it only appears on the exception: a film
 * that is gated, or a gated film showing a preview instead of the full cut.
 *
 * There used to be a "Public" chip on the other sixteen cards. It came off on
 * 2026-08-27 at the owner's request, and it was the right call twice over —
 * a label repeated on the majority is furniture, not information, and the play
 * glyph in the middle of the frame already says the card plays. Mark the
 * exception; let the default be silent.
 *
 * Construction is `ServiceHero`'s over-photo chip, not DESIGN.md's panel chip:
 * a near-black plate with a Signal Red hairline, red glyph, white label. The
 * panel chip's 10% red fill needs a dark surface underneath to hold its red
 * text, and as of the same change there is a full-brightness photograph there
 * instead. Red survives as the border and the glyph, which are shapes rather
 * than 12px type.
 */
const photoChipClass =
  "absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-primary/60 bg-black/70 px-3 py-1 font-label text-xs font-bold tracking-widest text-white uppercase backdrop-blur"

const ALL = "All"
// The owner's own two service lines, and nothing else. A chip only matches a
// film carrying the exact string, so this list and `PortfolioFilm["category"]`
// are the same strings by construction — see lib/data/our-work.ts.
const categories = [ALL, ...FILM_CATEGORIES]

/** What's currently loaded into the shared lightbox, public film or preview. */
type NowPlaying = { youtubeId: string; label: string }

/**
 * A card that opens the film rather than a page.
 *
 * The click target is a stretched `<button>` over the whole card, not a button
 * wrapping it: `<button>` takes phrasing content only, so the `<h3>` and `<p>`
 * this card is built from cannot legally live inside one. The `<a>` it replaces
 * could hold them because anchors are transparent.
 *
 * That overlay is also why the card itself no longer clips: its focus ring is
 * drawn on a child at `inset-0`, and an `overflow-hidden` on the card would
 * clip the outline right off. The photo block keeps its own clip and rounds its
 * own top corners instead.
 */
function PortfolioCard({
  client,
  title,
  summary,
  image,
  onPlay,
}: Pick<PublicFilm, "client" | "title" | "summary" | "image"> & {
  onPlay: () => void
}) {
  return (
    <div
      className={`glass-panel group relative flex h-full flex-col rounded-2xl ${cardHoverLift}`}
    >
      <div className="relative h-56 overflow-hidden rounded-t-2xl bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {/* A flat wash, not a gradient: the play plate sits dead centre, where a
            top-or-bottom scrim does nothing. It also gives the hover somewhere
            to land — the picture steps back as the plate steps forward. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/45"
        />
        {/* Deliberately the peer of the lock plate on the gated cards below:
            same 64px disc, same weight. One says this plays, the other says
            this is closed, and the visitor reads which is which at a glance.
            It is also the only play affordance DESIGN.md permits on this site,
            because it is the only one that actually starts playback. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(209,32,39,0.4)]">
            <MaterialIcon
              name="play_arrow"
              fill
              className="text-4xl! text-white"
            />
          </span>
        </div>
      </div>
      <div className="flex flex-grow flex-col p-6">
        <div className="font-label text-xs font-bold tracking-widest text-primary uppercase">
          {client}
        </div>
        {/* Title role per DESIGN.md: 700 at 20px, sentence-cased. It ran
            uppercase here, which put the card heading in the same case as the
            client label above it and the action below it — three capitals
            stacked, and the label lost the authority it is tracked for. */}
        <h3 className="mt-2 font-headline text-xl font-bold text-surface transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-3 flex-grow font-body text-sm leading-relaxed text-industrial-grey">
          {summary}
        </p>
        {/* Names what the click does now. "View Project" pointed at a page, and
            its `arrow_forward` slid right on hover to say so; nothing here goes
            forward any more. The motion moved to the plate above, which is the
            one hover this card authors. */}
        <span className="mt-6 flex items-center gap-2 font-label text-xs font-bold tracking-widest text-surface uppercase">
          Watch film
          <MaterialIcon
            name="play_arrow"
            fill
            className="text-base! text-primary"
          />
        </span>
      </div>
      <button
        aria-label={`Play the ${client} film — ${title}`}
        className="absolute inset-0 z-10 rounded-2xl"
        onClick={onPlay}
        type="button"
      />
    </div>
  )
}

/**
 * The page's one hero slot. Exactly one film may carry `featured: true` (see
 * the runtime check in lib/data/our-work.ts) and it renders here instead of
 * in the grid — full-width, a large Play button rather than a card, because
 * this is the strongest single piece of evidence on the page and it earns the
 * room a grid cell can't give it.
 *
 * This is the same two-column footprint the page's one locked panel used to
 * hold before 2026-08-11 (`petrofac-kemaman`, now a `GatedFilmCard` in the
 * grid below): a photograph on one side, client + title + summary + one
 * action on the other. What changed is the mode, not the layout — Play
 * instead of Lock, "Watch Film" instead of "Request Access", because this
 * film is public and playable rather than gated.
 */
function FeaturedFilm({
  film,
  onPlay,
}: {
  film: PublicFilm
  onPlay: () => void
}) {
  return (
    <div className="glass-panel group relative mb-10 flex flex-col overflow-hidden rounded-3xl border-primary/30 md:mb-12 lg:flex-row">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative min-h-[16rem] bg-black md:min-h-[22rem] lg:w-1/2">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${film.image}')` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(209,32,39,0.4)] md:h-20 md:w-20">
            <MaterialIcon
              name="play_arrow"
              fill
              className="text-4xl! text-white"
            />
          </span>
        </div>
        <button
          aria-label={`Play the ${film.client} film — ${film.title}`}
          className="absolute inset-0"
          onClick={onPlay}
          type="button"
        />
      </div>
      <div className="flex flex-col justify-center p-6 md:p-8 lg:w-1/2 lg:p-10">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-surface/10 bg-graphite px-3 py-1 font-label text-xs font-bold tracking-widest text-surface uppercase">
            {film.client}
          </span>
          <span className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-label text-xs font-bold tracking-widest text-primary uppercase">
            <MaterialIcon name="play_circle" className="text-sm!" />
            Featured Film
          </span>
        </div>
        <h2 className="mt-6 font-headline text-2xl leading-tight font-black tracking-tight text-balance text-surface">
          {film.title}
        </h2>
        <p className="mt-4 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
          {film.category}
        </p>
        <p className="mt-6 font-body leading-relaxed text-industrial-grey">
          {film.summary}
        </p>
        <div className="mt-8">
          <button
            className={ctaClasses({ size: "md", className: "w-full sm:w-fit" })}
            onClick={onPlay}
            type="button"
          >
            <MaterialIcon name="play_arrow" fill className="text-lg!" />
            Watch Film
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * A private film's grid card. Renders one of two states depending on whether
 * `film.previewYoutubeId` is set:
 *
 *  - **No preview (every entry today):** the still at full brightness, a
 *    neutral lock disc that does not respond to hover (the disc is a state
 *    here, not the click target), a "Gated" chip, and a Request Access link.
 *    Nothing in the image area is clickable.
 *  - **Preview set (once the owner supplies a clip):** the same still, now
 *    playable — a Play button scoped to just the image area (its own stretched
 *    button, not the whole card, because the card also has to hold a separate
 *    Request Access control below it), a "Preview" chip, and the Firstman
 *    watermark in the corner if `FIRSTMAN_LOGO_SRC` is set. The Request Access
 *    link stays either way — watching a 5–10s preview is not the same as
 *    having the film.
 *
 * Both states show the picture at the same brightness as a public card, which
 * is the 2026-08-27 change: the gated still used to sit at 60% under a 50%
 * black wash and a 2px blur, and the difference between the two card kinds is
 * now carried entirely by the affordance — lock or play, chip or no chip,
 * "Request Access" or "Watch film". Dimming the work is not a state worth
 * spending the work to show.
 */
function GatedFilmCard({
  film,
  onPreview,
}: {
  film: PrivateFilm
  onPreview: (() => void) | undefined
}) {
  const hasPreview = !!film.previewYoutubeId && !!onPreview

  return (
    <div
      className={`glass-panel group flex h-full flex-col overflow-hidden rounded-2xl border-primary/20 ${cardHoverLift}`}
    >
      <div className="relative h-56 overflow-hidden bg-black">
        <div
          aria-hidden="true"
          // Full brightness in both states. The locked plate used to dim this
          // to 60% and lay a 50% black wash with a 2px blur over it, which hid
          // the one thing the card exists to show: on a page whose whole
          // argument is "here is the actual work", a gated film was the only
          // kind a visitor could not see. The lock is now carried entirely by
          // the disc, the chip and the action line — three signals, none of
          // which cost the photograph.
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${film.image}')` }}
        />
        {hasPreview ? (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/45"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(209,32,39,0.4)]">
                <MaterialIcon
                  name="play_arrow"
                  fill
                  className="text-4xl! text-white"
                />
              </span>
            </div>
            {FIRSTMAN_LOGO_SRC && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt=""
                aria-hidden="true"
                className="absolute right-3 bottom-3 h-6 w-auto opacity-90"
                src={FIRSTMAN_LOGO_SRC}
              />
            )}
            <span className={photoChipClass}>
              <MaterialIcon
                name="play_circle"
                className="text-xs! text-primary"
              />
              Preview
            </span>
            <button
              aria-label={`Play the ${film.client} preview — ${film.title}`}
              className="absolute inset-0"
              onClick={onPreview}
              type="button"
            />
          </>
        ) : (
          <>
            {/* The same 64px disc the public cards put a play glyph in, over
                the same 25% wash, so a row that mixes the two reads as one
                sentence: those play, this one is closed. Only the glyph
                changes. It stays neutral and does not respond to hover — the
                disc is a state here, not the click target, which lives on the
                action below. */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/25">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm">
                <MaterialIcon
                  name="lock"
                  fill
                  className="text-4xl! text-white/80"
                />
              </span>
            </div>
            <span className={photoChipClass}>
              <MaterialIcon name="lock" className="text-xs! text-primary" />
              Gated
            </span>
          </>
        )}
      </div>
      <div className="flex flex-grow flex-col p-6">
        <div className="font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
          {film.client}
        </div>
        <h3 className="mt-2 font-headline text-xl font-bold text-surface">
          {film.title}
        </h3>
        <p className="mt-3 flex-grow font-body text-sm leading-relaxed text-industrial-grey">
          {film.summary}
        </p>
        {/* group-hover, not a named group scoped to this button: the card's
            root carries the same bare `group` PortfolioCard's stretched
            button relies on, so this arrow slides on a hover anywhere on the
            card, matching how the card's own lift and the preview button's
            glow already respond — one hover unit, not three independently
            scoped ones. */}
        <RequestAccessTrigger
          defaultVideo={`${film.client} — ${film.title}`}
          className="mt-6 flex items-center gap-2 font-label text-xs font-bold tracking-widest text-primary uppercase"
        >
          Request Access
          <MaterialIcon
            name="arrow_forward"
            className="text-base! transition-transform group-hover:translate-x-1"
          />
        </RequestAccessTrigger>
      </div>
    </div>
  )
}

export function CaseStudiesPortfolio() {
  const [selected, setSelected] = useState(ALL)
  const [playing, setPlaying] = useState<NowPlaying | null>(null)
  // Stable, so the lightbox cannot remount and restart the film when this
  // component re-renders behind it.
  const closePlayer = useCallback(() => setPlaying(null), [])

  const inCategory = (film: PortfolioFilm) =>
    selected === ALL || film.category === selected

  const visible = films.filter(inCategory)
  const featured = visible.find(
    (film): film is PublicFilm => film.access === "public" && !!film.featured
  )
  const grid = visible.filter((film) => film !== featured)
  const nothingVisible = !featured && grid.length === 0

  return (
    <section className="w-full bg-background pb-16 md:pb-24">
      {/* This hub does not go through ServiceSection, so it was the one page
          under /our-work still pinned to a 32px gutter on a phone while its six
          detail pages had already moved to 24px. */}
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        {/* The bar's negative margin has to equal the column's gutter or its
            background stops short of the content edge. It was `-mx-4` against a
            `px-4 sm:px-6 lg:px-8` wrapper, so it only lined up on phones and
            inset itself by 8px at `sm` and 16px at `lg`. One gutter now, one
            offset — and now that the gutter is responsive, the offset has to
            step with it or the same bug returns at a different width. */}
        <div className="sticky top-24 z-40 -mx-6 mb-10 border-y border-surface/10 bg-background/90 px-6 py-4 shadow-lg backdrop-blur-md md:-mx-8 md:mb-12 md:px-8">
          {/* Filters scroll on a phone and wrap on a laptop. A horizontal
              scroller is the right control at 390px and the wrong one at
              1280px, where all six chips fit and scrolling hides three of
              them behind a gesture nobody has a reason to try.

              This used to share the bar with a general "Request Access"
              trigger, removed 2026-08-11 at the owner's request — every
              private film already carries its own Request Access CTA on its
              card, and the bar-level one duplicated that without pointing at
              anything specific. Nothing here depended on that second child;
              the bar's own flex/justify-between rules went with it rather
              than being left arranging one item. */}
          <div
            className="-mx-6 no-scrollbar flex gap-3 overflow-x-auto px-6 whitespace-nowrap md:-mx-8 md:px-8 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0"
            role="group"
            aria-label="Filter case studies by category"
          >
            {categories.map((cat) => {
              const active = selected === cat
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(cat)}
                  className={`rounded-full border px-5 py-2 font-label text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${
                    active
                      ? "border-primary bg-primary text-white"
                      : "border-surface/10 bg-graphite text-surface hover:border-primary/50 hover:bg-primary/10"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {featured && (
          <FeaturedFilm
            film={featured}
            onPlay={() =>
              setPlaying({
                youtubeId: featured.youtubeId,
                label: `${featured.client} — ${featured.title}`,
              })
            }
          />
        )}

        {nothingVisible ? (
          <p className="py-16 text-center font-body text-industrial-grey">
            No case studies in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {grid.map((film) =>
              film.access === "public" ? (
                <PortfolioCard
                  key={film.id}
                  client={film.client}
                  title={film.title}
                  summary={film.summary}
                  image={film.image}
                  onPlay={() =>
                    setPlaying({
                      youtubeId: film.youtubeId,
                      label: `${film.client} — ${film.title}`,
                    })
                  }
                />
              ) : (
                <GatedFilmCard
                  key={film.id}
                  film={film}
                  onPreview={
                    film.previewYoutubeId
                      ? () =>
                          setPlaying({
                            youtubeId: film.previewYoutubeId as string,
                            label: `${film.client} — ${film.title} (Preview)`,
                          })
                      : undefined
                  }
                />
              )
            )}
          </div>
        )}
      </div>

      {playing && (
        <VideoLightbox
          label={playing.label}
          onClose={closePlayer}
          youtubeId={playing.youtubeId}
        />
      )}
    </section>
  )
}
