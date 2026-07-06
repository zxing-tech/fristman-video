export type Service = {
  slug: string
  href: string
  title: string
  icon: string
  summary: string
}

export const services: Service[] = [
  {
    slug: "industrial-cinematography",
    href: "/services/industrial-cinematography",
    title: "Industrial Cinematography",
    icon: "videocam",
    summary:
      "High-end cinematic production for corporate communications, marketing, and investor relations within heavy industry.",
  },
  {
    slug: "facility-overview-films",
    href: "/services/facility-overview-films",
    title: "Facility Overview Films",
    icon: "domain",
    summary:
      "Comprehensive aerial and ground coverage of extensive industrial complexes, refineries, and fabrication yards.",
  },
  {
    slug: "fpv-fly-throughs",
    href: "/services/fpv-fly-throughs",
    title: "Cinematic FPV Fly-Throughs",
    icon: "flight",
    summary:
      "Dynamic, immersive first-person view drone tours of complex industrial environments and offshore platforms.",
  },
  {
    slug: "industrial-photography",
    href: "/services/industrial-photography",
    title: "Industrial Photography",
    icon: "photo_camera",
    summary:
      "High-resolution stills for corporate reports, marketing collateral, and documentation of industrial operations.",
  },
  {
    slug: "progression-timelapse",
    href: "/services/progression-timelapse",
    title: "Progression & Timelapse Documentation",
    icon: "timelapse",
    summary:
      "Long-term visual documentation of construction and engineering projects to track progress and milestones.",
  },
  {
    slug: "visual-documentation",
    href: "/services/visual-documentation",
    title: "Visual Documentation",
    icon: "inventory_2",
    summary:
      "Systematic photographic and video recording of critical infrastructure assets for maintenance and archival purposes.",
  },
]
