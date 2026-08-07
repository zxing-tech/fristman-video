/**
 * The films on `/our-work`.
 *
 * This file came back on 2026-08-07. The version deleted on 2026-08-06 held the
 * six placeholder case studies and existed only so `sitemap.ts` could list their
 * detail routes; those routes are gone and are not coming back. This one exists
 * for a different reason: the same seven records are read twice, by the client
 * component that renders the grid and by the server component that emits their
 * `VideoObject` JSON-LD, and a portfolio whose markup and structured data
 * disagree is worse than one with no structured data at all.
 *
 * **These are real, and that is new.** Every entry is a published film on the
 * company's own YouTube channel (`@firstmanvideos`), owner-supplied on
 * 2026-08-07 and verified through the oEmbed endpoint. They replace the five
 * public placeholder cards that PRODUCT.md `## Evidence on Hand` records as
 * invented. The two gated cards in `our-work-portfolio.tsx` are **not** covered
 * by this — the owner chose on 2026-08-07 to leave them standing, and they are
 * still the fabricated Petrofac and "Confidential Client" panels that section
 * names.
 *
 * Nothing here may be embellished. `summary` is the owner's own YouTube
 * description wherever one exists; where the description was empty it is a
 * plain reading of what the film shows, marked below, and it should be replaced
 * with the owner's copy rather than grown.
 */
export type PortfolioFilm = {
  /** Stable list key and image basename. Not a route — nothing here navigates. */
  id: string
  client: string
  title: string
  summary: string
  /** Local copy of the film's own YouTube thumbnail, 1000x563. */
  image: string
  /** YouTube id. The card plays it in place; there is no detail page. */
  youtubeId: string
  /** Publication date on YouTube, for `VideoObject.uploadDate`. */
  uploadDate: string
  category: FilmCategory
}

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
    youtubeId: "JQ7Q_ZDWx1s",
    uploadDate: "2026-02-17",
    category: "Corporate Video",
  },
  {
    id: "jerun-offshore-phase-1",
    client: "Jerun",
    title: "Offshore Campaign — Phase 01",
    // Owner's own YouTube description, unedited apart from sentence flow.
    summary:
      "Offshore operations including jacket launch and installation of the wellhead platform. Our team covered the entire first phase through 24-hour operations.",
    image: "/images/our-work/jerun-offshore-phase-1.jpg",
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
    youtubeId: "_SwUSmZwxcQ",
    uploadDate: "2024-09-10",
    category: "Large Scale Facility Overview",
  },
  {
    id: "shell-sarawak-f6vlap",
    client: "Sarawak Shell",
    title: "F6VLAP",
    // Owner's own YouTube description.
    summary:
      "Interview-style project video offshore Bintulu, Sarawak — flown on full drone permits and documentation with a qualified UAV operator.",
    image: "/images/our-work/shell-sarawak-f6vlap.jpg",
    youtubeId: "wb4Ddw2B62I",
    uploadDate: "2025-12-02",
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
    youtubeId: "Vho5NjMFcYE",
    uploadDate: "2021-01-14",
    category: "Large Scale Facility Overview",
  },
]
