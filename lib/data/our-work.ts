/**
 * The films on `/our-work`.
 *
 * `PortfolioFilm` is a discriminated union on `access` as of 2026-08-11,
 * because the page now mixes three things that used to be three separate
 * hardcoded blocks in `our-work-portfolio.tsx`: a public film that plays in
 * place, a public film promoted to the page's one featured slot, and a
 * private film that shows a locked plate (or, once the owner supplies a
 * clip, a short preview) behind a Request Access CTA. Reading all of it from
 * one array is what lets the grid and the `VideoObject` JSON-LD agree, and
 * what makes "swap two films' positions" or "make a film private" a data
 * edit instead of a JSX rewrite.
 *
 * **Public films are real.** Every `access: "public"` entry is a published
 * film on the company's own YouTube channel (`@firstmanvideos`), owner-
 * supplied 2026-08-07 and verified through the oEmbed endpoint.
 *
 * **Private films are not necessarily fictional.** Two are real clients
 * whose footage the owner has chosen not to show publicly right now
 * (`sarawak-shell-f6vlap`, made private 2026-08-11 at the owner's request)
 * or at all yet (`petrofac-kemaman`, gated since the page first shipped).
 * `confidential-oag` is the one entry PRODUCT.md `## Evidence on Hand`
 * records as invented placeholder copy — the owner was shown that fact next
 * to the real films on 2026-08-07 and chose to leave it standing. None of
 * that changes here: this migration only moves *where* that copy lives, not
 * what it says.
 */
export type PortfolioFilmBase = {
  /** Stable list key and image basename. Not a route — nothing here navigates. */
  id: string
  client: string
  title: string
  summary: string
  /** Local copy of the film's own YouTube thumbnail, 1000x563. */
  image: string
}

export type PublicFilm = PortfolioFilmBase & {
  access: "public"
  /** YouTube id. The card plays it in place; there is no detail page. */
  youtubeId: string
  /** Publication date on YouTube, for `VideoObject.uploadDate`. */
  uploadDate: string
  category: FilmCategory
  /**
   * At most one film carries this. It renders in the page's single hero slot
   * — full-width, a large Play button rather than a card — instead of in the
   * grid. See `MAX_ONE_FEATURED` below for why a second one is a build-time
   * error rather than a silent "last one wins".
   */
  featured?: true
}

export type PrivateFilm = PortfolioFilmBase & {
  access: "private"
  /**
   * `category` is optional here on purpose: a private film with no category
   * surfaces only under "All", the same way `confidential-oag` and
   * `petrofac-kemaman` always have — there is no service-line chip for
   * "placeholder" or "not yet cleared". `sarawak-shell-f6vlap` keeps its real
   * category so a visitor filtering to that service line still finds it,
   * now locked rather than playable.
   */
  category?: FilmCategory
  /**
   * A short (5–10s) public teaser clip. Unset on every entry today — the
   * owner agreed 2026-08-11 to replace the lock plate with a preview instead
   * of an icon, but the clips themselves are still to be supplied. The
   * moment one lands here, `GatedFilmCard` switches that card from a locked
   * plate to a playable preview automatically; nothing else in this file or
   * in `our-work-portfolio.tsx` needs to change.
   */
  previewYoutubeId?: string
}

export type PortfolioFilm = PublicFilm | PrivateFilm

/**
 * The owner's own two service lines, in the owner's own words. These strings
 * are the filter chips *and* the card tags: a chip only matches a card carrying
 * the exact string, so a rename here is a rename in both places at once, which
 * is the whole reason the category is a field rather than a free-form array.
 */
export const FILM_CATEGORIES = [
  "Corporate Video",
  "Large Scale Facility Overview",
] as const

export type FilmCategory = (typeof FILM_CATEGORIES)[number]

export const films: PortfolioFilm[] = [
  {
    id: "transwater-corporate",
    client: "Transwater",
    title: "Corporate Video",
    // Owner's YouTube description is a channel blurb ("Corporate Video Profile
    // 2025 / 2026"), so this reads the film instead. Replace with owner copy.
    summary:
      "Corporate profile film built around the people who run the engineering group, on the floor and at the desk.",
    image: "/images/our-work/transwater-corporate.jpg",
    access: "public",
    youtubeId: "JQ7Q_ZDWx1s",
    uploadDate: "2026-02-17",
    category: "Corporate Video",
    // Promoted into the page's featured slot 2026-08-11, swapping places with
    // petrofac-kemaman below — see that entry's comment for the other half of
    // the swap.
    featured: true,
  },
  {
    id: "petrofac-kemaman",
    client: "Petrofac",
    title: "Safety Induction Video — Kemaman Supply Base",
    // Owner's own copy, carried over verbatim from the featured panel this
    // replaced — not rewritten as part of the 2026-08-11 move.
    summary:
      "Comprehensive safety induction documentation for Petrofac's operations at the Kemaman Supply Base. Filmed under strict safety protocols focusing on heavy lifting procedures, PPE compliance, and emergency response protocols in high-risk zones.",
    // No local thumbnail exists for this one — it was never a photographed
    // film, only a locked plate over a Stitch render. Kept as-is rather than
    // sourcing a new image nobody asked for.
    image: "/images/stitch/571d2d6c4f.jpg",
    access: "private",
    // No category: PRODUCT.md's "Safety Induction" framing for this entry
    // doesn't match either of the owner's two service lines, and it didn't
    // surface under a filter chip before this move either.
  },
  {
    id: "jerun-offshore-phase-1",
    client: "Jerun",
    title: "Offshore Campaign — Phase 01",
    // Owner's own YouTube description, unedited apart from sentence flow.
    summary:
      "Offshore operations including jacket launch and installation of the wellhead platform. Our team covered the entire first phase through 24-hour operations.",
    image: "/images/our-work/jerun-offshore-phase-1.jpg",
    access: "public",
    youtubeId: "ywloMG2HcqU",
    uploadDate: "2023-11-16",
    category: "Corporate Video",
  },
  {
    id: "jps-wins-platform",
    client: "JPS",
    title: "Wins Platform",
    // Owner's own YouTube description.
    summary:
      "A project Firstman produced for JPS Malaysia, cut around drone highlights.",
    image: "/images/our-work/jps-wins-platform.jpg",
    access: "public",
    youtubeId: "ddX4LBqa8dY",
    uploadDate: "2023-04-16",
    category: "Corporate Video",
  },
  {
    id: "mahb-service-campaign",
    client: "MAHB",
    title: "Service Campaign",
    // No YouTube description. Reads the film. Replace with owner copy.
    summary:
      "Service campaign filmed across airport operations and carried by the people who run them.",
    image: "/images/our-work/mahb-service-campaign.jpg",
    access: "public",
    youtubeId: "PFC35Hu-cEk",
    uploadDate: "2019-10-22",
    category: "Corporate Video",
  },
  {
    id: "sapura-kg-dwn-98-2",
    client: "Sapura Fabrications",
    title: "ONGC KG-DWN-98/2",
    // No YouTube description. Reads the film. Replace with owner copy.
    summary:
      "Fabrication coverage of the KG-DWN-98/2 scope inside the yard, including safety inspection walkdowns.",
    image: "/images/our-work/sapura-kg-dwn-98-2.jpg",
    access: "public",
    youtubeId: "_SwUSmZwxcQ",
    uploadDate: "2024-09-10",
    category: "Large Scale Facility Overview",
  },
  {
    id: "shell-sarawak-f6vlap",
    client: "Sarawak Shell",
    title: "F6VLAP",
    // Owner's own YouTube description, carried over from when this was public.
    summary:
      "Interview-style project video offshore Bintulu, Sarawak — flown on full drone permits and documentation with a qualified UAV operator.",
    image: "/images/our-work/shell-sarawak-f6vlap.jpg",
    access: "private",
    // Kept its real category on purpose (see PrivateFilm.category): a visitor
    // filtering to "Large Scale Facility Overview" should still find this,
    // now locked rather than playable. Made private 2026-08-11 at the
    // owner's request. The published YouTube id is not carried over here —
    // going private means this site stops linking to the full film, not that
    // the id becomes the preview. A short preview clip is still pending.
    category: "Large Scale Facility Overview",
  },
  {
    id: "mmhe-hess-petronas-epcic",
    client: "MMHE · Hess · Petronas",
    title: "Full EPCIC Project",
    // No usable YouTube description — the field holds the watermark note. Reads
    // the film. Replace with owner copy.
    //
    // ⚠️ This cut carries "evaluation copy for client review" burned into the
    // picture, thumbnail included. The owner was shown this on 2026-08-07 and
    // chose to publish it anyway. Swap the id for a final master when one
    // exists, and re-pull the thumbnail with it.
    summary:
      "Full EPCIC scope documented from the fabrication yard through load-out and sail-away.",
    image: "/images/our-work/mmhe-hess-petronas-epcic.jpg",
    access: "public",
    youtubeId: "Vho5NjMFcYE",
    uploadDate: "2021-01-14",
    category: "Large Scale Facility Overview",
  },
  {
    id: "confidential-oag",
    client: "Confidential Client",
    title: "Future O&G Drone Documentation",
    // Owner's own copy, carried over verbatim from the inline gated card this
    // replaced. PRODUCT.md `## Evidence on Hand` records this one as
    // placeholder, not a real project — the owner was shown that fact next to
    // the real films on 2026-08-07 and chose to leave it standing. Do not add
    // a category, an image swap, or a "real" rewrite without the owner asking.
    summary:
      "Advanced aerial surveying and Video asset mapping for a major offshore installation utilizing aerial and heavy-lift drones.",
    image: "/images/stitch/c5510b9322.jpg",
    access: "private",
  },
]

// The page has exactly one hero slot. A second `featured: true` entry would
// silently vanish into the grid rather than announce the conflict, so this
// throws at import time instead — both the client grid and the server JSON-LD
// import this module, so either would catch it immediately in dev.
if (films.filter((f) => f.access === "public" && f.featured).length > 1) {
  throw new Error(
    "lib/data/our-work.ts: more than one film has `featured: true`"
  )
}
