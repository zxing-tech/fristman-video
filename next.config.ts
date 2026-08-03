import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The "Visual Documentation" service was renamed to "Safety and Induction
        // Videos"; keep the indexed URL alive so its link equity moves to the new one.
        source: "/services/visual-documentation",
        destination: "/services/safety-induction-videos",
        permanent: true,
      },
      {
        // The /services hub was removed in favour of the navbar dropdown; the
        // homepage grid at #services is now the equivalent landing spot.
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
