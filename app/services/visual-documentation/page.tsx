import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

export const metadata: Metadata = {
  title: "Visual Documentation",
  description:
    "Structured, safety-conscious photo and video documentation designed for briefing management, updating partners, and supporting training teams within heavy industry environments.",
}

const supportCards = [
  {
    icon: "assignment_turned_in",
    title: "Handover Records",
    description:
      "Visual baseline documentation to support formal handover phases and archival requirements.",
  },
  {
    icon: "model_training",
    title: "Training Visuals",
    description:
      "Contextual site imagery and procedural video to enhance internal training modules and safety inductions.",
  },
  {
    icon: "campaign",
    title: "PR & Corporate Comms",
    description:
      "Polished, high-impact visuals suitable for external reports, stakeholder presentations, and corporate communications.",
  },
]

export default function VisualDocumentationPage() {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative min-h-[921px] flex items-center pt-24 pb-16 overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            aria-label="Monochrome industrial oil and gas facility at dusk with red interface overlays"
            className="w-full h-full bg-cover bg-center opacity-90 dark:opacity-40"
            role="img"
            style={{ backgroundImage: "url('/images/stitch/e8622506e9.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          <div className="scanning-line z-10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <MaterialIcon name="videocam" fill className="text-primary text-sm" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">
              Visual Documentation Services
            </span>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[1.1] mb-6 text-white">
              Industrial Visual Documentation <br />
              <span className="text-gradient">For Stakeholder Communication</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed mb-10">
              Structured, safety-conscious photo and video documentation designed
              specifically for briefing management, updating partners, and supporting
              training teams within heavy industry environments. We capture site-aware
              realities to facilitate clear internal communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="bg-primary text-white hover:bg-background hover:shadow-[0_0_15px_rgba(209,32,39,0.5)] transition-all duration-300 rounded-full px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 group"
                href="/contact"
              >
                Discuss Project Scope
                <MaterialIcon
                  name="arrow_forward"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                className="bg-transparent border border-white/20 text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 rounded-full px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                href="/case-studies"
              >
                View Sample Deliverables
              </Link>
            </div>
          </div>
          {/* Credentials Note */}
          <div className="mt-8 flex items-start gap-3 p-4 border-l-2 border-primary bg-dark-ui/50 max-w-xl">
            <MaterialIcon name="verified_user" className="text-primary" />
            <div>
              <p className="text-sm font-bold uppercase tracking-wider mb-1 text-white">
                Safety-Conscious Planning
              </p>
              <p className="text-xs text-white/70">
                Operations executed with strict adherence to site protocols. Full HSSE
                credentials and operational documentation available upon request prior to
                deployment.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Stakeholder Support Section (Bento Grid) */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-4 text-surface">
              Stakeholder Support Applications
            </h2>
            <p className="text-industrial-grey max-w-2xl">
              Purpose-built visual assets designed to bridge the gap between site
              operations and corporate oversight.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Card 1 (Large) */}
            <div className="glass-panel rounded-[24px] col-span-1 md:col-span-2 row-span-2 p-8 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div
                  aria-label="High-contrast black and white close-up of an industrial pipeline junction"
                  className="w-full h-full bg-cover bg-center grayscale mix-blend-overlay"
                  role="img"
                  style={{ backgroundImage: "url('/images/stitch/a9a84579bb.jpg')" }}
                />
              </div>
              <div className="relative z-10">
                <MaterialIcon
                  name="update"
                  className="text-4xl mb-6 text-surface transition-colors duration-300 group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                />
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-3 text-surface">
                  Project Updates & Progress
                </h3>
                <p className="text-industrial-grey">
                  Consistent, high-fidelity visual timelines for remote management and
                  investors. Documenting milestones with site-aware precision to keep
                  stakeholders informed without requiring physical site visits.
                </p>
              </div>
              <div className="relative z-10 mt-auto flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                Explore Capability <MaterialIcon name="chevron_right" className="text-sm" />
              </div>
            </div>
            {/* Cards 2-4 */}
            {supportCards.map((card) => (
              <div
                className="glass-panel rounded-[24px] p-6 flex flex-col group"
                key={card.title}
              >
                <MaterialIcon
                  name={card.icon}
                  className="text-3xl mb-4 text-surface transition-colors duration-300 group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                />
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2 text-surface">
                  {card.title}
                </h3>
                <p className="text-sm text-industrial-grey flex-grow">{card.description}</p>
              </div>
            ))}
            {/* Card 5 (Wide) */}
            <div className="glass-panel rounded-[24px] col-span-1 md:col-span-2 p-6 flex flex-row items-center gap-6 group">
              <MaterialIcon
                name="bar_chart"
                className="text-4xl text-surface transition-colors duration-300 group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
              />
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-1 text-surface">
                  Internal Reporting Integration
                </h3>
                <p className="text-sm text-industrial-grey">
                  Structured image datasets organized for easy integration into existing
                  internal reporting formats and dashboards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
