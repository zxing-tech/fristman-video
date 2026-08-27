import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The "Video Documentation" service was renamed to "Safety and Induction
        // Videos"; keep the indexed URL alive so its link equity moves to the new one.
        source: "/services/Video-documentation",
        destination: "/services/safety-induction-videos",
        permanent: true,
      },
      {
        // The service line-up was re-cut on 2026-08-27 from the owner's own
        // marked-up navbar (`02_Amendments.png`). Facility Overview Films and
        // Industrial Photography came off, and the two things the company is
        // actually hired for in Oil & Gas replaced them.
        //
        // Facility Overviews were aerial and ground coverage of a whole
        // industrial site; a topside load-out is the closest live service and
        // the one that took its slot in the owner's list.
        source: "/services/facility-overview-films",
        destination: "/services/og-topside-loadout",
        permanent: true,
      },
      {
        // Industrial Photography had no successor service. The homepage grid
        // is the honest landing spot: it shows what the six services are now,
        // rather than dropping the visitor on a page about something else.
        source: "/services/industrial-photography",
        destination: "/#services",
        permanent: true,
      },
      {
        // "Construction Progress & Timelapse Capture" was renamed to
        // "Long-Term Timelapse". Same service, same page, shorter name.
        source: "/services/progression-timelapse",
        destination: "/services/long-term-timelapse",
        permanent: true,
      },
      {
        // The /services hub was removed in favour of the navbar dropdown; the
        // homepage grid at #services is now the equivalent landing spot.
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
      {
        // The /industries hub and its four sector pages were removed; their
        // content was folded into the homepage sectors grid, the About page
        // (deployment + data handling) and the service pages.
        source: "/industries",
        destination: "/#industries",
        permanent: true,
      },
      {
        // oil-gas, energy-utilities, marine-offshore, fabrication-construction.
        source: "/industries/:slug",
        destination: "/#industries",
        permanent: true,
      },
      {
        // The case-study hub moved to /our-work; keep the indexed URL alive.
        source: "/case-studies",
        destination: "/our-work",
        permanent: true,
      },
      {
        // The six case-study detail pages were removed on 2026-08-06: a card on
        // the hub now opens the film in a lightbox instead of navigating to a
        // page about it. Straight to the hub rather than through
        // /our-work/:slug, so an old /case-studies/* URL resolves in one hop
        // instead of chaining into a second redirect.
        source: "/case-studies/:slug",
        destination: "/our-work",
        permanent: true,
      },
      {
        // The same six URLs under their newer prefix. Both generations were
        // indexed, so both have to keep resolving.
        source: "/our-work/:slug",
        destination: "/our-work",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
