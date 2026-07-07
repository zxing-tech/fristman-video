import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"

export const metadata: Metadata = {
  title: "Syndel Asia Industrial Documentation",
  description:
    "Case study: comprehensive visual documentation for Syndel Asia — capturing operational scale and safety protocols at their strategic fabrication yard and marine terminal.",
}

export default function SyndelAsiaPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-[870px] w-full overflow-hidden flex items-end pb-24 bg-black">
        <div className="absolute inset-0 z-0">
          <div
            aria-label="Cinematic wide-angle view of a sprawling industrial refinery facility at dusk"
            role="img"
            className="w-full h-full bg-cover bg-center opacity-60"
            style={{ backgroundImage: "url('/images/stitch/ea3a0c1e8b.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 glass-panel text-[10px] tracking-[0.2em] font-bold uppercase border-white/20 text-primary">
              [CONFIRM APPROVED ASSETS]
            </span>
            <span className="px-3 py-1 glass-panel text-[10px] tracking-[0.2em] font-bold uppercase border-white/20 text-primary">
              [LOGO PERMISSION]
            </span>
          </div>
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">
            CASE STUDY DETAIL — SYNDEL ASIA
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-none max-w-4xl text-white">
            Syndel Asia —{" "}
            <span className="text-white/60">Industrial Visual Documentation Reference</span>
          </h1>
        </div>
      </section>

      {/* Summary & Context */}
      <section className="py-24 max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Summary */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h3 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" /> Public Summary
              </h3>
              <p className="text-xl md:text-2xl text-surface/90 font-light leading-relaxed">
                A comprehensive visual documentation project for Syndel Asia, focused on capturing
                the operational scale and safety protocols of their industrial hub. This cinematic
                reference serves as the primary visual foundation for their stakeholder reporting
                and site-awareness training modules.
              </p>
            </div>
            <div className="glass-panel p-10 rounded-2xl relative overflow-hidden">
              <div className="scanning-line" />
              <h3 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Project Context
              </h3>
              <div className="flex items-start gap-6">
                <MaterialIcon name="location_on" className="text-4xl text-surface/20" />
                <div>
                  <p className="text-industrial-grey uppercase tracking-widest text-xs mb-2">
                    Facility & Location
                  </p>
                  <p className="text-lg font-semibold">
                    Syndel Asia Strategic Fabrication Yard & Marine Terminal
                  </p>
                  <p className="text-industrial-grey mt-2">
                    Specialized heavy industry environment requiring rigorous safety clearances and
                    site-aware capture protocols for all aerial and ground crews.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Details */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h3 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Documentation Needs
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 group">
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="text-industrial-grey font-bold tracking-wider text-sm uppercase">
                    High-Altitude Site Awareness Overviews
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="text-industrial-grey font-bold tracking-wider text-sm uppercase">
                    Fabrication Workflow Documentation
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="text-industrial-grey font-bold tracking-wider text-sm uppercase">
                    Safety Protocol Compliance Visuals
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="text-industrial-grey font-bold tracking-wider text-sm uppercase">
                    Marine Terminal Berth Operations
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-8 border-t border-surface/10">
              <h3 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Visual Approach
              </h3>
              <p className="text-industrial-grey text-sm leading-relaxed mb-6">
                Leveraging drone-enabled cinematography and specialized ground-based capture
                methods, our team deployed a multi-angle strategy to document critical
                infrastructure without interrupting operational flow. The focus remained on
                precision framing and lighting to elevate technical site assets into professional
                cinematic reference material.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-graphite rounded-full text-[10px] font-bold tracking-tighter">
                  4K LOG ACQUISITION
                </span>
                <span className="px-3 py-1 bg-graphite rounded-full text-[10px] font-bold tracking-tighter">
                  AERIAL SITE FLIGHTS
                </span>
                <span className="px-3 py-1 bg-graphite rounded-full text-[10px] font-bold tracking-tighter">
                  TIME-LAPSE DOCUMENTATION
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Deliverables */}
      <section className="py-24 bg-dark-ui">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Project Output
              </h3>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight">
                Sample Deliverables
              </h2>
            </div>
            <span className="px-4 py-1.5 glass-panel text-[10px] tracking-[0.2em] font-bold uppercase text-industrial-grey">
              [CLIENT-APPROVED WORDING PENDING]
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl glass-panel p-6 hover:bg-graphite transition-all duration-500 cursor-pointer">
              <div className="aspect-video mb-6 rounded-lg overflow-hidden relative">
                <div
                  aria-label="Cinematic freeze-frame of a cargo ship being loaded at a marine terminal"
                  role="img"
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: "url('/images/stitch/497aa14516.jpg')" }}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <MaterialIcon name="play_circle" className="text-4xl" />
                </div>
              </div>
              <h4 className="text-lg font-bold uppercase mb-2">Milestone Reels</h4>
              <p className="text-industrial-grey text-sm">
                Compressed cinematic highlights of key project phases for executive review.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl glass-panel p-6 hover:bg-graphite transition-all duration-500 cursor-pointer">
              <div className="aspect-video mb-6 rounded-lg overflow-hidden relative">
                <div
                  aria-label="Split-screen of an industrial fabrication yard from above and a welder at ground level"
                  role="img"
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: "url('/images/stitch/a0c6192d31.jpg')" }}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <MaterialIcon name="play_circle" className="text-4xl" />
                </div>
              </div>
              <h4 className="text-lg font-bold uppercase mb-2">Monthly Update Films</h4>
              <p className="text-industrial-grey text-sm">
                Progressive documentation capture on a fixed 30-day site rotation schedule.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl glass-panel p-6 hover:bg-graphite transition-all duration-500 cursor-pointer">
              <div className="aspect-video mb-6 rounded-lg overflow-hidden relative">
                <div
                  aria-label="High-resolution still of an offshore platform structure with valves and sensors"
                  role="img"
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: "url('/images/stitch/a3d9969764.jpg')" }}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <MaterialIcon name="photo_library" className="text-4xl" />
                </div>
              </div>
              <h4 className="text-lg font-bold uppercase mb-2">High-Res Still Packs</h4>
              <p className="text-industrial-grey text-sm">
                Ultra-high fidelity still imagery for annual reports and technical brochures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gated Access Section */}
      <section className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div
            aria-hidden="true"
            className="w-full h-full bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/stitch/fa4a82d5bf.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-4 mb-8 bg-primary/10 border border-primary/30 px-6 py-2 rounded-full">
            <MaterialIcon name="lock" fill className="text-primary" />
            <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
              Confidential Asset Portal
            </span>
          </div>
          <h2 className="text-4xl font-extrabold uppercase tracking-tighter mb-6 text-white">
            RESTRICTED ACCESS ONLY
          </h2>
          <p className="text-xl text-industrial-grey mb-10 leading-relaxed">
            The full high-fidelity visual documentation library for Syndel Asia contains sensitive
            site-aware assets. Access is restricted to authorized personnel and verified project
            stakeholders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <RequestAccessTrigger
              defaultVideo="Syndel Asia — Industrial Visual Documentation Reference"
              className="w-full sm:w-auto bg-primary text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:bg-white hover:text-primary transition-all hover:shadow-[0_0_20px_rgba(209,32,39,0.3)]"
            >
              REQUEST ACCESS CLEARANCE
            </RequestAccessTrigger>
            <Link
              href="/contact"
              className="w-full sm:w-auto glass-panel text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:border-primary transition-all text-center"
            >
              DISCUSS YOUR PRODUCTION
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 border-t border-surface/5">
        <div className="max-w-[1280px] mx-auto px-8">
          <h3 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-12">
            Related Capability Reference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/services/corporate-videos"
              className="flex items-center justify-between p-8 rounded-2xl border border-surface/10 hover:border-primary/50 group transition-all"
            >
              <div>
                <h4 className="text-xl font-bold uppercase group-hover:text-primary transition-colors">
                  Corporate Videos
                </h4>
                <p className="text-industrial-grey text-sm mt-2">
                  Specialized capture for heavy engineering.
                </p>
              </div>
              <MaterialIcon
                name="arrow_forward"
                className="text-industrial-grey group-hover:translate-x-2 transition-transform"
              />
            </Link>
            <Link
              href="/services/facility-overview-films"
              className="flex items-center justify-between p-8 rounded-2xl border border-surface/10 hover:border-primary/50 group transition-all"
            >
              <div>
                <h4 className="text-xl font-bold uppercase group-hover:text-primary transition-colors">
                  Facility Overviews
                </h4>
                <p className="text-industrial-grey text-sm mt-2">
                  Site-aware visual narratives for stakeholders.
                </p>
              </div>
              <MaterialIcon
                name="arrow_forward"
                className="text-industrial-grey group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
