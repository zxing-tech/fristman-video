export type Service = {
  slug: string
  href: string
  title: string
  icon: string
  summary: string
}

export const services: Service[] = [
  {
    slug: "corporate-videos",
    href: "/services/corporate-videos",
    title: "Corporate Videos",
    icon: "movie",
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
    slug: "ai-generated-video",
    href: "/services/ai-generated-video",
    title: "AI-Generated Video",
    icon: "auto_awesome",
    summary:
      "AI-generated recreations of scenes too hazardous or impossible to film live — from offshore incident simulations to emergency evacuation sequences — rendered with cinematic realism.",
  },
  {
    slug: "industrial-photography",
    href: "/services/industrial-photography",
    title: "Industrial Photography",
    icon: "photo_camera",
    summary:
      "Documenting critical structural phases, heavy lifts, and compliance checks.",
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
    slug: "safety-induction-videos",
    href: "/services/safety-induction-videos",
    title: "Safety and Induction Videos",
    icon: "health_and_safety",
    summary:
      "Onsite protocol tutorials covering PPE rules and hazard zones.",
  },
]
