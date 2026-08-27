"use client"

import { useCallback, useState } from "react"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import { VideoLightbox } from "@/components/site/video-lightbox"
import { HERO_TEXT_SHADOW } from "@/lib/hero-media"
import {
  films,
  type FilmCategory,
  type PortfolioFilm,
} from "@/lib/data/our-work"
import { cn } from "@/lib/utils"

/**
 * The real films for one service line, on that service's own page.
 *
 * This is the answer to the one piece of feedback PRODUCT.md records in the
 * owner's own words — *"clients will want to see the actual work we've done
 * and not just read fancy words"* — applied where it bites hardest. Before
 * 2026-08-27 a service page could describe a topside load-out at length and
 * never show one; the films existed the whole time, on the company's own
 * channel, listed in a document nobody had wired up.
 *
 * It reads `lib/data/our-work.ts` rather than taking a list, so a film added
 * once appears on `/our-work` and on its service page together, tagged and
 * gated identically in both. `category` is the service's own title, character
 * for character — see the note on `FILM_CATEGORIES`.
 *
 * **Deliberately not the `/our-work` card.** That card carries a paragraph of
 * summary under the picture, which is right on a page whose entire job is the
 * roster and wrong on a service page, where this section sits between two
 * blocks of prose and has to read as a reel rather than as a third essay. A
 * tile here is the frame, the client, the title, and what the click does.
 */

type ServiceFilmsProps = {
  category: FilmCategory
  /**
   * Caps the strip. Corporate Videos runs to eleven entries, which is a
   * portfolio page, not a section of a service page. Everything past the cap
   * is one click away behind the "See the full portfolio" link below the grid,
   * and the count line there states the full total so the cap never reads as
   * the whole roster.
   */
  limit?: number
}

/** What's currently loaded into the shared lightbox. */
type NowPlaying = { youtubeId: string; label: string }

/**
 * The only chip a tile carries, and only the gated ones carry it.
 *
 * A "Public" chip sat on the playable tiles until 2026-08-27 and came off at
 * the owner's request: a label worn by the majority is furniture, and the play
 * glyph already says the tile plays. Mark the exception; let the default be
 * silent.
 *
 * Same construction as `ServiceHero`'s over-photo chip — near-black plate,
 * Signal Red hairline, red glyph, white label — because the still behind it now
 * runs at full brightness and DESIGN.md's 10% red-fill panel chip has no dark
 * surface left to hold its red text against.
 */
const chipClass =
  "absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-primary/60 bg-black/70 px-3 py-1 font-label text-xs font-bold tracking-widest text-white uppercase backdrop-blur"

/**
 * One 16:9 frame. The picture is the content, so everything else sits on top
 * of it: a disc that says what the click does, a chip that says whether the
 * film is open or closed, and the attribution over a scrim heavy enough to
 * hold white text on any frame.
 */
function FilmTile({
  film,
  onPlay,
}: {
  film: PortfolioFilm
  onPlay: (() => void) | undefined
}) {
  const playable = film.access === "public" && !!onPlay
  const label = `${film.client} — ${film.title}`

  const frame = (
    // Photo exception (DESIGN.md): this tile stays dark in both themes, so the
    // base is a literal black and the copy over it is literal white.
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
      <div
        aria-hidden="true"
        // One brightness for both states. The gated tiles ran at 60% until
        // 2026-08-27, which dimmed the only evidence this section exists to
        // put on screen — and on the two O&G service lines, where most of the
        // roster is gated, that meant most of the page was a grey plate. The
        // lock is carried by the disc, the chip and the action line instead.
        className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${film.image}')` }}
      />
      {/* Two scrims doing two jobs: a flat wash so the centre disc reads on any
          frame, and a bottom gradient carrying the attribution. */}
      {/* One wash for both states, and it responds to hover on both: unlike
          the `/our-work` card, the whole tile is the click target here whether
          it plays a film or opens the request form. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/45"
      />
      {/* The same disc vocabulary as the /our-work grid, one step smaller for
          a tile: play means it plays, lock means it is closed. Only the
          playable one responds to hover — on a gated tile the disc is a state,
          and the action it announces is the request form.

          `pb-24` is not spacing, it is what keeps the disc off the caption.
          Centred in the whole tile the disc lands at 82–138px of a 221px tile
          and the client line starts at 121 — a 17px collision, measured, on
          every tile at every breakpoint. Padding the centring box by the
          caption's own height re-centres the disc in the picture above it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pb-24"
      >
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm ${
            playable
              ? "transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(209,32,39,0.4)]"
              : ""
          }`}
        >
          <MaterialIcon
            name={playable ? "play_arrow" : "lock"}
            fill
            className={`text-3xl! ${playable ? "text-white" : "text-white/80"}`}
          />
        </span>
      </div>

      {!playable && (
        <span className={chipClass}>
          <MaterialIcon name="lock" className="text-xs! text-primary" />
          Gated
        </span>
      )}

      {/* The caption carries its own scrim rather than sitting on the tile's,
          and the copy is white rather than the client-red the /our-work card
          uses. Both are the Photo Exception Rule (DESIGN.md) applied honestly:
          Signal Red's ceiling is 3.95:1 on pure black, and measured here it was
          landing at 2.0–2.3:1 over the picture — worse than anywhere else the
          site puts a red label. White at 12px clears 6:1 on the same plate.
          Red stays on the tile where it can be read: the Gated chip, the play
          glyph, and the disc filling on hover.

          `pt-16` is the gradient's runway. The fade has to start well above the
          first line or the plate reads as a bar stuck on the picture. */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent p-4 pt-16 md:p-5 md:pt-20",
          HERO_TEXT_SHADOW
        )}
      >
        <p className="font-label text-xs font-bold tracking-widest text-white/75 uppercase">
          {film.client}
        </p>
        <h3 className="mt-1 font-headline text-lg font-bold text-balance text-white">
          {film.title}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 font-label text-xs font-bold tracking-widest text-white/60 uppercase">
          {playable ? "Watch film" : "Request access"}
          <MaterialIcon
            name={playable ? "play_arrow" : "arrow_forward"}
            fill={playable}
            className="text-base! text-primary transition-transform group-hover:translate-x-0.5"
          />
        </p>
      </div>
    </div>
  )

  // The click target is a stretched control over the whole tile rather than a
  // wrapper around it: `<button>` takes phrasing content only, and this tile is
  // built from an `<h3>`. It also has to sit outside the frame's
  // `overflow-hidden`, or its focus ring would be clipped off by the same rule
  // that clips the image zoom.
  const overlayClass =
    "absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"

  return (
    <div className="group relative transition-transform duration-300 hover:-translate-y-1">
      {frame}
      {playable ? (
        <button
          aria-label={`Play the film: ${label}`}
          className={overlayClass}
          onClick={onPlay}
          type="button"
        />
      ) : (
        <RequestAccessTrigger className={overlayClass} defaultVideo={label}>
          <span className="sr-only">{`Request access to the film: ${label}`}</span>
        </RequestAccessTrigger>
      )}
    </div>
  )
}

export function ServiceFilms({ category, limit }: ServiceFilmsProps) {
  const [playing, setPlaying] = useState<NowPlaying | null>(null)
  // Stable, so the lightbox cannot remount and restart the film when this
  // component re-renders behind it.
  const closePlayer = useCallback(() => setPlaying(null), [])

  const matching = films.filter((film) => film.category === category)
  const shown = limit ? matching.slice(0, limit) : matching
  const gated = matching.filter((film) => film.access === "private").length

  if (shown.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((film) => (
          <FilmTile
            film={film}
            key={film.id}
            onPlay={
              film.access === "public"
                ? () =>
                    setPlaying({
                      youtubeId: film.youtubeId,
                      label: `${film.client} — ${film.title}`,
                    })
                : undefined
            }
          />
        ))}
      </div>

      {/* One line closing the section: what the visitor is looking at, and
          where the rest of it is. The gated count is stated rather than left
          to be inferred from the lock plates — on the two O&G lines most of
          the roster is gated, and a grid of locks with no explanation reads
          as a broken page instead of as a confidentiality position. */}
      <div className="mt-8 flex flex-col items-start gap-4 border-t border-surface/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
          {gated > 0
            ? `${matching.length} films on this service line · ${gated} released only under NDA`
            : `${matching.length} films on this service line`}
        </p>
        <Link
          className="group flex items-center gap-2 font-label text-xs font-bold tracking-widest text-primary uppercase transition-colors hover:text-surface"
          href="/our-work"
        >
          See the full portfolio
          <MaterialIcon
            name="arrow_forward"
            className="text-base! transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {playing && (
        <VideoLightbox
          label={playing.label}
          onClose={closePlayer}
          youtubeId={playing.youtubeId}
        />
      )}
    </>
  )
}
