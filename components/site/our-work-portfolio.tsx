"use client"

import { useCallback, useState } from "react"

import { ctaClasses } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import { VideoLightbox } from "@/components/site/video-lightbox"
import { FILM_CATEGORIES, films, type PortfolioFilm } from "@/lib/data/our-work"

const cardHoverLift =
  "transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_25px_-5px_rgba(209,32,39,0.2)]"

/**
 * The gated pair are the only cards left that are not in `films`, and they are
 * still the fabricated Petrofac panel and "Confidential Client" card PRODUCT.md
 * `## Evidence on Hand` names. The owner was shown that on 2026-08-07, next to
 * the seven real films, and chose to leave them standing.
 *
 * They carry no category because neither of the owner's two service lines
 * describes them, so they surface under "All" and nowhere else — a filter that
 * says "Corporate Video" should return corporate video. Empty arrays are the
 * honest encoding of that, not an oversight: `matches([])` is true only when
 * nothing is filtered.
 */
const FEATURED_TAGS: string[] = []
const INLINE_GATED_TAGS: string[] = []

const ALL = "All"
// The owner's own two service lines, and nothing else. The previous six chips
// ("Oil & Gas", "Photography", "Public"...) were tags on placeholder cards and
// went with them. A chip only matches a card carrying the exact string, so this
// list and `PortfolioFilm["category"]` are the same strings by construction —
// see lib/data/our-work.ts.
const categories = [ALL, ...FILM_CATEGORIES]

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
}: Pick<PortfolioFilm, "client" | "title" | "summary" | "image"> & {
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
        <span className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/80 px-3 py-1 font-label text-xs font-bold tracking-widest text-white uppercase backdrop-blur">
          Public
        </span>
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

export function CaseStudiesPortfolio() {
  const [selected, setSelected] = useState(ALL)
  const [playing, setPlaying] = useState<PortfolioFilm | null>(null)
  // Stable, so the lightbox cannot remount and restart the film when this
  // component re-renders behind it.
  const closePlayer = useCallback(() => setPlaying(null), [])

  const matches = (tags: string[]) =>
    selected === ALL || tags.includes(selected)

  const visiblePublic = films.filter((f) => matches([f.category]))
  const showFeatured = matches(FEATURED_TAGS)
  const showInlineGated = matches(INLINE_GATED_TAGS)
  const nothingVisible =
    !showFeatured && !showInlineGated && visiblePublic.length === 0

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
        <div className="sticky top-24 z-40 -mx-6 mb-10 flex flex-col gap-4 border-y border-surface/10 bg-background/90 px-6 py-4 shadow-lg backdrop-blur-md md:-mx-8 md:mb-12 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Filters scroll on a phone and wrap on a laptop. A horizontal
              scroller is the right control at 390px and the wrong one at
              1280px, where all six chips fit and scrolling hides three of
              them behind a gesture nobody has a reason to try. */}
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
          {/* Not a filter, so it does not sit in the filter group. It used to
              be the seventh item in that row, one pill among six, where the
              only thing separating an action from a state toggle was its
              border colour. */}
          <RequestAccessTrigger
            className={ctaClasses({
              size: "sm",
              variant: "outline",
              className: "shrink-0",
            })}
          >
            <MaterialIcon name="lock" className="text-base!" />
            Request Access
          </RequestAccessTrigger>
        </div>

        {showFeatured && (
          <div className="glass-panel group relative mb-10 flex flex-col overflow-hidden rounded-3xl border-primary/30 md:mb-12 lg:flex-row">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            {/* Half, not three fifths. The photograph behind this panel is
                512px wide and sits under a 70% black wash anyway, so the
                narrower half both upscales less and gives the copy beside it a
                column wide enough to hold a two-line heading. */}
            {/* 16rem on a phone, 22rem from `md`. This is a locked plate, not a
                photograph anyone reads: 352px of it above the case study's own
                title pushed the heading and both actions off a 390px screen
                entirely, so the panel opened on a padlock and the visitor had
                to scroll to find out what was locked. */}
            <div className="relative min-h-[16rem] bg-black md:min-h-[22rem] lg:w-1/2">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/stitch/571d2d6c4f.jpg')",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-6 text-center backdrop-blur-sm md:p-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary bg-black/60 shadow-[0_0_20px_rgba(209,32,39,0.4)] md:mb-6 md:h-20 md:w-20">
                  <MaterialIcon
                    name="lock"
                    fill
                    className="text-4xl! text-primary"
                  />
                </div>
                {/* A `<p>`, not a heading. This labels the locked state of the
                    picture beside the case study; the case study's own title is
                    the `<h2>` in the next column. As an `<h3>` it came first in
                    the DOM and put an H3 straight after the page H1, so the
                    outline read H1 → H3 → H2. */}
                {/* Title role (20/700), not the 24/900 subhead beside it. This
                    labels the locked state; the case study's own title is the
                    `<h2>` in the next column, and at the same size the two read
                    as peers when one plainly outranks the other. The lock plate
                    above carries the weight here, not the type. */}
                <p className="font-headline text-xl font-bold text-white">
                  Restricted access
                </p>
                <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-white/70">
                  This project contains sensitive industrial protocols and is
                  gated for approved industry stakeholders only.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8 lg:w-1/2 lg:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-surface/10 bg-graphite px-3 py-1 font-label text-xs font-bold tracking-widest text-surface uppercase">
                  Petrofac
                </span>
                <span className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-label text-xs font-bold tracking-widest text-primary uppercase">
                  <MaterialIcon name="lock" className="text-sm!" />
                  Gated Video
                </span>
              </div>
              <h2 className="mt-6 font-headline text-2xl leading-tight font-black tracking-tight text-balance text-surface">
                Safety induction video — Kemaman Supply Base
              </h2>
              <p className="mt-4 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
                Safety Induction · Oil &amp; Gas
              </p>
              <p className="mt-6 font-body leading-relaxed text-industrial-grey">
                Comprehensive safety induction documentation for Petrofac&apos;s
                operations at the Kemaman Supply Base. Filmed under strict
                safety protocols focusing on heavy lifting procedures, PPE
                compliance, and emergency response protocols in high-risk zones.
              </p>
              {/* One action, not two. The "Read Public Summary" link beside it
                  pointed at `/our-work/petrofac-kemaman`, which no longer
                  exists — and a gated panel offering a way around its own gate
                  was always the weaker of the two reads. */}
              <div className="mt-8">
                <RequestAccessTrigger
                  defaultVideo="Safety Induction Video — Kemaman Supply Base"
                  className={ctaClasses({
                    size: "md",
                    className: "w-full sm:w-fit",
                  })}
                >
                  <MaterialIcon name="key" className="text-lg!" />
                  Request Access
                </RequestAccessTrigger>
              </div>
            </div>
          </div>
        )}

        {nothingVisible ? (
          <p className="py-16 text-center font-body text-industrial-grey">
            No case studies in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePublic.map((card) => (
              <PortfolioCard
                key={card.id}
                {...card}
                onPlay={() => setPlaying(card)}
              />
            ))}

            {showInlineGated && (
              <div
                className={`glass-panel group flex h-full flex-col overflow-hidden rounded-2xl border-primary/20 ${cardHoverLift}`}
              >
                <div className="relative h-56 overflow-hidden bg-black">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: "url('/images/stitch/c5510b9322.jpg')",
                    }}
                  />
                  {/* The same 64px disc the public cards now put a play glyph
                      in, so a row that mixes the two reads as one sentence:
                      these play, this one is closed. It stays neutral and does
                      not respond to hover — the disc is a state here, not the
                      click target, which lives on the action below. */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm">
                      <MaterialIcon
                        name="lock"
                        fill
                        className="text-4xl! text-white/80"
                      />
                    </span>
                  </div>
                  <span className="absolute top-4 right-4 flex items-center gap-1 rounded-full border border-primary/50 bg-primary/20 px-3 py-1 font-label text-xs font-bold tracking-widest text-primary uppercase backdrop-blur">
                    <MaterialIcon name="lock" className="text-xs!" />
                    Gated
                  </span>
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <div className="font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
                    Confidential Client
                  </div>
                  <h3 className="mt-2 font-headline text-xl font-bold text-surface">
                    Future O&amp;G drone documentation
                  </h3>
                  <p className="mt-3 flex-grow font-body text-sm leading-relaxed text-industrial-grey">
                    Advanced aerial surveying and Video asset mapping for a
                    major offshore installation utilizing aerial and heavy-lift
                    drones.
                  </p>
                  <RequestAccessTrigger
                    defaultVideo="Future O&G Drone Documentation"
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
            )}
          </div>
        )}
      </div>

      {playing && (
        <VideoLightbox
          label={`${playing.client} — ${playing.title}`}
          onClose={closePlayer}
          youtubeId={playing.youtubeId}
        />
      )}
    </section>
  )
}
