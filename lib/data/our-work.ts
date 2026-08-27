/**
 * The films on `/our-work`.
 *
 * `PortfolioFilm` is a discriminated union on `access` as of 2026-08-11,
 * because the page mixes three things that used to be three separate
 * hardcoded blocks in `our-work-portfolio.tsx`: a public film that plays in
 * place, a public film promoted to the page's one featured slot, and a
 * private film that shows a locked plate (or, once the owner supplies a
 * clip, a short preview) behind a Request Access CTA. Reading all of it from
 * one array is what lets the grid, the per-service film strips and the
 * `VideoObject` JSON-LD agree, and what makes "swap two films' positions" or
 * "make a film private" a data edit instead of a JSX rewrite.
 *
 * **Every entry here is a real, published film on the company's own YouTube
 * channel (`@firstmanvideos`).** The roster went from 9 entries to 28 on
 * 2026-08-27, sourced from the owner's own `YouTube Source Files.rtf` in the
 * 2026 asset delivery. Every id in that document was verified through the
 * oEmbed endpoint, and each thumbnail is a local copy of the film's own.
 *
 * **`(LOCKED)` in the owner's list means gated, not annotated.** The owner
 * confirmed on 2026-08-27 that a film marked `(LOCKED)` must not play
 * publicly, and three of them were live on this page at the time — Jerun
 * Phase 01, Sapura's ONGC KG-DWN-98/2, and the MMHE/Hess/Petronas EPCIC.
 * All three are now `access: "private"`, matching Sarawak Shell F6VLAP,
 * which the owner had already asked to gate on 2026-08-11. A private entry
 * carries no `youtubeId` at all: going private means this site stops linking
 * to the film, not that the id moves to a quieter field. TypeScript enforces
 * that.
 *
 * Two entries from the source list are deliberately absent and are waiting on
 * the owner, not on code:
 *   - **"4-day Forum Highlights"** (`Jslk1wQMSp8`) — real and public, but the
 *     list names no client, and every card on this page is read client-first.
 *     Inventing one would be the exact failure PRODUCT.md `## Evidence on
 *     Hand` is a fence against.
 *   - **"OFFSHORE WEST DESARU"** (`mHEAFOjrIrg`) — the video itself returns
 *     403 from both oEmbed and the thumbnail CDN, so it is private on
 *     YouTube's side and there is no still to put behind a lock plate.
 *
 * The one entry that was never a real project — `confidential-oag`, recorded
 * as invented placeholder copy in PRODUCT.md — came off on 2026-08-27. It
 * survived earlier passes because removing it would have left the page thin;
 * with 28 real films on it, a fabricated 29th is only a liability.
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
   * Optional so a film the owner has not filed under a service line surfaces
   * under "All" only. Every private entry currently carries one: a visitor
   * filtering to a service line should still see that the work exists, locked
   * rather than playable, because "we have done this and cannot show you" is
   * itself the evidence on these two O&G lines.
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
 * The filter chips, and the tag on every card.
 *
 * These are five of the six titles in `lib/data/services.ts`, character for
 * character, and that is load-bearing rather than tidy: `ServiceFilms` looks
 * a service page's own films up by passing its title through here, so a
 * service renamed in one file and not the other stops matching and the strip
 * silently empties. AI-Generated Videos is the sixth service and is absent on
 * purpose — the owner has no samples for it yet (`03_Amendments.png`), which
 * is also why that page carries no film strip.
 */
export const FILM_CATEGORIES = [
  "Corporate Videos",
  "O&G Topside Loadout",
  "O&G Offshore Installation",
  "Long-Term Timelapse",
  "Safety and Induction Videos",
] as const

export type FilmCategory = (typeof FILM_CATEGORIES)[number]

/**
 * Ordered service line by service line, matching the owner's source list and
 * the navbar. Within a line the public films come first: a grid that opens on
 * three lock plates reads as a closed door, and the same three read as
 * confidentiality once there is something playing beside them.
 *
 * ⚠️ Summaries on the 19 entries added 2026-08-27 restate the scope their
 * title and service line already state, and nothing more. Nobody has watched
 * these films to write copy from, and the owner's list carries no
 * descriptions. They are safe to publish and worth replacing with the owner's
 * own words — the comment on each entry says which is which.
 */
export const films: PortfolioFilm[] = [
  // ─── Corporate Videos ────────────────────────────────────────────────────
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
    category: "Corporate Videos",
    // Promoted into the page's featured slot 2026-08-11 and kept there through
    // the 2026-08-27 expansion: it is the newest corporate film on the roster
    // and the one the owner picked.
    featured: true,
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
    category: "Corporate Videos",
  },
  {
    id: "jps-ht-labs",
    client: "JPS",
    title: "HT Labs",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary: "Facility film covering the HT Labs scope for JPS Malaysia.",
    image: "/images/our-work/jps-ht-labs.jpg",
    access: "public",
    youtubeId: "yS-sEGKHXjU",
    uploadDate: "2026-08-20",
    category: "Corporate Videos",
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
    category: "Corporate Videos",
  },
  {
    id: "mahb-touch",
    client: "MAHB",
    title: "T.O.U.C.H",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary: "Campaign film produced for Malaysia Airports under T.O.U.C.H.",
    image: "/images/our-work/mahb-touch.jpg",
    access: "public",
    youtubeId: "qdEJ8-oe8Fk",
    uploadDate: "2013-04-23",
    category: "Corporate Videos",
  },
  {
    id: "google-live-transcribe",
    client: "Google",
    title: "Live Transcribe",
    // "Launch" is the owner's own YouTube title ("Mobile App Launch"), not an
    // inference. Replace with owner copy.
    summary: "Launch film produced for Google's Live Transcribe app.",
    image: "/images/our-work/google-live-transcribe.jpg",
    access: "public",
    youtubeId: "nkarJefP6og",
    uploadDate: "2019-10-22",
    category: "Corporate Videos",
  },
  {
    id: "google-the-lorry",
    client: "Google",
    title: "The Lorry",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary: "Brand film produced for Google, built around The Lorry.",
    image: "/images/our-work/google-the-lorry.jpg",
    access: "public",
    youtubeId: "7A3yRE7l6kM",
    uploadDate: "2017-08-15",
    category: "Corporate Videos",
  },
  {
    id: "google-doodle-azah-aziz",
    client: "Google",
    title: "Doodle — Azah Aziz",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary: "Film produced for the Google Doodle honouring Azah Aziz.",
    image: "/images/our-work/google-doodle-azah-aziz.jpg",
    access: "public",
    youtubeId: "Er3MjfO771g",
    uploadDate: "2026-08-20",
    category: "Corporate Videos",
  },
  {
    id: "google-doodle-kamn-ismail",
    client: "Google",
    title: "Doodle — Kamn Ismail",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary: "Film produced for the Google Doodle honouring Kamn Ismail.",
    image: "/images/our-work/google-doodle-kamn-ismail.jpg",
    access: "public",
    youtubeId: "G2cEtj8Zo0k",
    uploadDate: "2026-08-20",
    category: "Corporate Videos",
  },
  {
    id: "citc-event-highlights",
    client: "CITC",
    title: "Event Highlights",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary: "Highlights film cut from the CITC event, edited on site.",
    image: "/images/our-work/citc-event-highlights.jpg",
    access: "public",
    youtubeId: "cPNPseWMnqg",
    uploadDate: "2026-02-15",
    category: "Corporate Videos",
  },
  {
    id: "berantai-fpso-naming",
    client: "Berantai",
    title: "FPSO Naming Ceremony",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary:
      "The naming ceremony for the Berantai FPSO, covered as a single-day event.",
    image: "/images/our-work/berantai-fpso-naming.jpg",
    access: "private",
    category: "Corporate Videos",
  },

  // ─── O&G Topside Loadout ─────────────────────────────────────────────────
  {
    id: "swire-projects-port-klang",
    client: "Swire Projects",
    title: "Port Klang Loading Operations",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary:
      "Heavy-lift loading operations covered at Port Klang for Swire Projects.",
    image: "/images/our-work/swire-projects-port-klang.jpg",
    access: "public",
    youtubeId: "JoKe1oOy-y4",
    uploadDate: "2026-08-20",
    category: "O&G Topside Loadout",
  },
  {
    id: "sapura-kg-dwn-98-2",
    client: "Sapura Fabrications",
    title: "ONGC KG-DWN-98/2",
    // No YouTube description. Reads the film. Replace with owner copy.
    summary:
      "Fabrication coverage of the KG-DWN-98/2 scope inside the yard, including safety inspection walkdowns.",
    image: "/images/our-work/sapura-kg-dwn-98-2.jpg",
    access: "private",
    // Public until 2026-08-27, gated on the owner's confirmation that
    // `(LOCKED)` in the source list means confidential. The published id is
    // not carried over — see the header note.
    category: "O&G Topside Loadout",
  },
  {
    id: "mmhe-hess-petronas-epcic",
    client: "MMHE · Hess · Petronas",
    title: "Full EPCIC Project",
    // No usable YouTube description — the field holds the watermark note. Reads
    // the film. Replace with owner copy.
    //
    // ⚠️ This cut carries "evaluation copy for client review" burned into the
    // picture, thumbnail included — and as of 2026-08-27 the thumbnail is the
    // only part of it this site shows, at full brightness, because the owner
    // asked for gated stills to stop being dimmed. The watermark is legible on
    // the card. The owner was shown it on 2026-08-07 and chose to publish
    // anyway; re-pull the thumbnail the day a final master exists.
    summary:
      "Full EPCIC scope documented from the fabrication yard through load-out and sail-away.",
    image: "/images/our-work/mmhe-hess-petronas-epcic.jpg",
    access: "private",
    category: "O&G Topside Loadout",
  },
  {
    id: "ongc-lqup-jacket-loadout",
    client: "ONGC",
    title: "LQUP Jacket Loadout",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary:
      "The LQUP jacket leaving the yard, from skidding through sea-fastening.",
    image: "/images/our-work/ongc-lqup-jacket-loadout.jpg",
    access: "private",
    category: "O&G Topside Loadout",
  },
  {
    id: "ongc-cpp-loadout-sailaway",
    client: "ONGC",
    title: "CPP Loadout & Sailaway",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary:
      "The central processing platform loaded out onto the barge and sailed away.",
    image: "/images/our-work/ongc-cpp-loadout-sailaway.jpg",
    access: "private",
    category: "O&G Topside Loadout",
  },
  {
    id: "ongc-lqup-helideck-loadout",
    client: "ONGC",
    title: "LQUP Helideck & TB Loadout",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary:
      "Helideck and bridge sections loaded out alongside the LQUP scope.",
    image: "/images/our-work/ongc-lqup-helideck-loadout.jpg",
    access: "private",
    category: "O&G Topside Loadout",
  },

  // ─── O&G Offshore Installation ───────────────────────────────────────────
  {
    id: "shell-sarawak-f6vlap",
    client: "Sarawak Shell",
    title: "F6VLAP",
    // Owner's own YouTube description, carried over from when this was public.
    summary:
      "Interview-style project video offshore Bintulu, Sarawak — flown on full drone permits and documentation with a qualified UAV operator.",
    image: "/images/our-work/shell-sarawak-f6vlap.jpg",
    access: "private",
    category: "O&G Offshore Installation",
  },
  {
    id: "jerun-offshore-phase-1",
    client: "Jerun",
    title: "Offshore Campaign — Phase 01",
    // Owner's own YouTube description, unedited apart from sentence flow.
    summary:
      "Offshore operations including jacket launch and installation of the wellhead platform. Our team covered the entire first phase through 24-hour operations.",
    image: "/images/our-work/jerun-offshore-phase-1.jpg",
    access: "private",
    // Public until 2026-08-27; gated with the other `(LOCKED)` films. Filed
    // under Offshore Installation rather than Corporate Videos, where the
    // source list also carries it: a card holds one service line, and the
    // owner's own summary describes a jacket launch and a platform going in.
    category: "O&G Offshore Installation",
  },
  {
    id: "berantai-jmc",
    client: "Petrofac · Kencana · SapuraCrest",
    title: "Berantai Field Development",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary:
      "Joint-venture coverage of the Berantai field development for the three partners.",
    image: "/images/our-work/berantai-jmc.jpg",
    access: "private",
    category: "O&G Offshore Installation",
  },

  // ─── Long-Term Timelapse ─────────────────────────────────────────────────
  {
    id: "dyakin-de-timelapse",
    client: "Dyakin",
    title: "Malaysia Studio Build",
    // Scope restated from the owner's source list and its YouTube title.
    // Replace with owner copy.
    summary:
      "A studio build in Malaysia held on a fixed-interval camera from empty shell to fit-out.",
    image: "/images/our-work/dyakin-de-timelapse.jpg",
    access: "public",
    youtubeId: "JFDh1ZfkgwY",
    uploadDate: "2022-09-18",
    category: "Long-Term Timelapse",
  },
  {
    id: "dyakin-imazium-renovation",
    client: "Dyakin",
    title: "Imazium Office Renovation",
    // "Office floor renovation" is the owner's own YouTube title. Replace with
    // owner copy.
    summary:
      "An office floor renovation at Imazium, recorded end to end on a fixed-interval camera.",
    image: "/images/our-work/dyakin-imazium-renovation.jpg",
    access: "public",
    youtubeId: "gwQUghhvCgM",
    uploadDate: "2022-09-18",
    category: "Long-Term Timelapse",
  },

  // ─── Safety and Induction Videos ─────────────────────────────────────────
  {
    id: "svp-batch-mixer",
    client: "SVP",
    title: "Batch Mixer",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary:
      "Operating and safety walkthrough for the batch mixer, shot as a step-by-step reference.",
    image: "/images/our-work/svp-batch-mixer.jpg",
    access: "public",
    youtubeId: "rVmjQP5UbAA",
    uploadDate: "2022-04-11",
    category: "Safety and Induction Videos",
  },
  {
    id: "svp-nitrogen-converter",
    client: "SVP",
    title: "Nitrogen Converter",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary:
      "Operating and safety walkthrough for the nitrogen converter unit.",
    image: "/images/our-work/svp-nitrogen-converter.jpg",
    access: "public",
    youtubeId: "FuO98Zd8eOM",
    uploadDate: "2022-04-11",
    category: "Safety and Induction Videos",
  },
  {
    id: "svp-ct-power-pack",
    client: "SVP",
    title: "CT Power Pack",
    // Scope restated from the owner's source list. Replace with owner copy.
    summary:
      "Operating and safety walkthrough for the coiled-tubing power pack.",
    image: "/images/our-work/svp-ct-power-pack.jpg",
    access: "public",
    youtubeId: "zH3Kgq6rssU",
    uploadDate: "2022-04-11",
    category: "Safety and Induction Videos",
  },
  {
    id: "petrofac-kemaman",
    client: "Petrofac",
    title: "Safety Induction — Kemaman Supply Base",
    // Owner's own copy, unchanged since it first shipped. What changed on
    // 2026-08-27 is the picture: this entry finally has its real film behind
    // it (`kIaq3sz3_Nk`, `(LOCKED)`), so the Stitch render it used as a lock
    // plate came off for the film's own thumbnail.
    summary:
      "Comprehensive safety induction documentation for Petrofac's operations at the Kemaman Supply Base. Filmed under strict safety protocols focusing on heavy lifting procedures, PPE compliance, and emergency response protocols in high-risk zones.",
    image: "/images/our-work/petrofac-kemaman.jpg",
    access: "private",
    category: "Safety and Induction Videos",
  },
  {
    id: "klcc-office-induction",
    client: "KLCC",
    title: "Office Induction",
    // "Bahasa" is the owner's own YouTube title, not an inference. Replace
    // with owner copy.
    summary:
      "Office induction film for the KLCC premises, delivered in Bahasa Malaysia.",
    image: "/images/our-work/klcc-office-induction.jpg",
    access: "private",
    category: "Safety and Induction Videos",
  },
  {
    id: "cendor-offshore-induction",
    client: "Cendor",
    title: "Offshore Induction",
    // "English" is the owner's own YouTube title, not an inference. Replace
    // with owner copy.
    summary:
      "Offshore safety induction covering the Cendor field, delivered in English.",
    image: "/images/our-work/cendor-offshore-induction.jpg",
    access: "private",
    category: "Safety and Induction Videos",
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
