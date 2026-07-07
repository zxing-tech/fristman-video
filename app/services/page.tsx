import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Purpose-built media and UAV capture workflows for oil & gas, energy and heavy industry teams that need project visibility, safety communication and stakeholder-ready documentation.",
}

const serviceCards = [
  {
    href: "/services/corporate-videos",
    icon: "movie",
    title: "Corporate Videos & Site Storytelling",
    summary:
      "High-end narrative video production tailored for complex industrial environments, highlighting operational scale and safety culture.",
    cta: "Discuss Your Production",
  },
  {
    href: "/services/facility-overview-films",
    icon: "domain",
    title: "Large-Scale Facility Overviews",
    summary:
      "Comprehensive aerial and ground-level mapping to provide complete situational awareness of sprawling industrial complexes.",
    cta: "Plan Facility Overview",
  },
  {
    href: "/services/progression-timelapse",
    icon: "timelapse",
    title: "Aerial Progression & Timelapses",
    summary:
      "Long-term visual monitoring of construction and maintenance cycles, delivering condensed timeline narratives for stakeholders.",
    cta: "Plan Timelapse Capture",
  },
  {
    href: "/services/ai-generated-video",
    icon: "auto_awesome",
    title: "AI-Generated Video",
    summary:
      "AI-generated recreations of scenes too hazardous or impossible to film live — from offshore incident simulations to emergency evacuation sequences — rendered with cinematic realism.",
    cta: "Discuss AI Recreation",
  },
  {
    href: "/services/industrial-photography",
    icon: "photo_camera",
    title: "Industrial Photography",
    summary:
      "High-resolution stills for corporate reports, marketing collateral, and documentation of industrial operations.",
    cta: "Plan Photography Coverage",
  },
  {
    href: "/services/visual-documentation",
    icon: "inventory_2",
    title: "Visual Documentation",
    summary:
      "Systematic photographic and video recording of critical infrastructure assets for maintenance and archival purposes.",
    cta: "Plan Visual Documentation",
  },
]

export default function ServicesPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/stitch/90739e14ed.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <MaterialIcon name="videocam" className="text-[14px]" />
            Core Offerings
          </div>
          <h1 className="font-headline font-black text-5xl md:text-7xl tracking-tighter leading-tight mb-8">
            INDUSTRIAL <br /> <span className="text-white/50">CINEMATOGRAPHY</span> & <br />{" "}
            VISUAL DOCUMENTATION
          </h1>
          <p className="font-body text-industrial-grey text-lg md:text-xl max-w-2xl leading-relaxed">
            Purpose-built media and UAV capture workflows for oil & gas, energy and heavy
            industry teams that need project visibility, safety communication and
            stakeholder-ready documentation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="glass-panel rounded-xl p-8 flex flex-col group transition-all duration-300 hover:border-primary/50"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                <MaterialIcon
                  name={service.icon}
                  className="text-white transition-colors group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                />
              </div>
              <h3 className="font-headline font-bold text-xl mb-3">{service.title}</h3>
              <p className="font-body text-industrial-grey text-sm mb-8 flex-grow">
                {service.summary}
              </p>
              <span className="text-left font-label text-sm font-bold uppercase tracking-wider flex items-center gap-2 group/btn hover:text-primary transition-colors">
                {service.cta}
                <MaterialIcon
                  name="arrow_right_alt"
                  className="text-[16px] group-hover:text-primary group-hover:translate-x-1 transition-all"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
