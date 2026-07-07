import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"

export const metadata: Metadata = {
  title: "MAHB Airport Services 2018",
  description:
    "Case study: industrial cinematography and drone-enabled documentation for MAHB Airport Services' 2018 operational cycle — a visual storytelling reference for aviation logistics.",
}

export default function MahbAirportServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-[716px] flex flex-col justify-end pb-24 px-8 pt-40">
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
            style={{ backgroundImage: "url('/images/stitch/e5f0e42271.jpg')" }}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <nav className="flex items-center gap-2 text-industrial-grey text-xs uppercase tracking-[0.2em] mb-6">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <MaterialIcon name="chevron_right" className="text-[10px]" />
            <Link className="hover:text-white transition-colors" href="/case-studies">
              Case Studies
            </Link>
            <MaterialIcon name="chevron_right" className="text-[10px]" />
            <span className="text-white">MAHB 2018</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none max-w-4xl text-white">
            MAHB Airport Services — <span className="text-primary">Visual Storytelling Reference.</span>
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-24 space-y-32">
        {/* Public Summary & Context */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Overview</span>
            </div>
            <h2 className="text-3xl font-bold mb-8">Industrial Cinematography for Aviation Logistics.</h2>
            <p className="text-industrial-grey text-lg leading-relaxed mb-8">
              This visual engagement for MAHB Airport Services focused on creating a comprehensive
              visual storytelling reference for their 2018 operational cycle. Our approach prioritized
              high-fidelity site-aware capture to document the scale and complexity of airport ground
              services without disrupting active logistics flows.
            </p>
            <p className="text-industrial-grey text-lg leading-relaxed">
              By leveraging drone-enabled documentation, we captured perspectives that offer
              stakeholder clarity on asset positioning and operational movement within high-security
              environments. This reference serves as a foundational archive for corporate
              communications and internal facility reviews.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold text-surface/50 mb-6">
                  Project Metadata
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between border-b border-surface/5 pb-4">
                    <span className="text-industrial-grey">Client</span>
                    <span className="text-surface font-bold">MAHB Services</span>
                  </div>
                  <div className="flex justify-between border-b border-surface/5 pb-4">
                    <span className="text-industrial-grey">Year</span>
                    <span className="text-surface font-bold">2018</span>
                  </div>
                  <div className="flex justify-between border-b border-surface/5 pb-4">
                    <span className="text-industrial-grey">Environment</span>
                    <span className="text-surface font-bold">High-Security Terminal</span>
                  </div>
                  <div className="flex justify-between pb-4">
                    <span className="text-industrial-grey">Capture Tech</span>
                    <span className="text-surface font-bold">UAV / Site-Aware Systems</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-surface/5">
                <p className="text-[10px] text-industrial-grey uppercase tracking-widest leading-relaxed">
                  Note: All capture activities were conducted under strict adherence to civil aviation
                  safety regulations and local security protocols.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Approach Section */}
        <section className="space-y-12">
          <div className="relative rounded-3xl overflow-hidden bg-black aspect-[21/9] group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/stitch/cb0f98cfaa.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-2 text-white">Site-Aware Capture</h3>
                <p className="text-industrial-grey text-sm">
                  Strategic drone positioning to document complex ground service maneuvers without
                  interference.
                </p>
              </div>
              <div className="glass-panel px-4 py-2 rounded-full text-[10px] font-bold tracking-tighter uppercase text-white/60">
                Operational Reference 04
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-10 rounded-3xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <MaterialIcon name="precision_manufacturing" className="text-primary" />
                Technical Execution
              </h4>
              <p className="text-industrial-grey leading-relaxed">
                The visual approach utilized drone-enabled documentation to bridge the gap between
                ground-level logistics and bird&apos;s-eye site awareness. Every flight path was
                pre-calculated to ensure 100% compliance with airfield exclusion zones while
                maximizing the visual clarity of the industrial assets being documented.
              </p>
            </div>
            <div className="glass-panel p-10 rounded-3xl border-primary/20">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <MaterialIcon name="security" className="text-primary" />
                Safety Compliance
              </h4>
              <p className="text-industrial-grey leading-relaxed">
                Our team implemented a visual storytelling reference framework that prioritized
                safety above aesthetics. By coordinating with MAHB flight operations, we successfully
                captured high-stakes movements in real-time, providing a verified documentation
                stream for internal safety review boards.
              </p>
            </div>
          </div>
        </section>

        {/* Likely Deliverables Bento Grid */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary mb-4">
              Project Outputs
            </h2>
            <h3 className="text-4xl font-bold">Standard Visual Deliverables</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group glass-panel p-8 rounded-3xl flex flex-col justify-between aspect-square transition-all duration-500 hover:bg-surface/[0.05]">
              <div className="w-16 h-16 rounded-2xl border border-surface/10 flex items-center justify-center group-hover:border-primary transition-colors">
                <MaterialIcon
                  name="movie"
                  className="text-3xl group-hover:scale-110 group-hover:text-primary transition-transform"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Milestone Reels</h4>
                <p className="text-industrial-grey text-sm leading-relaxed">
                  Condensed cinematic summaries of project phases for corporate reporting and
                  high-level stakeholder presentations.
                </p>
              </div>
            </div>
            {/* Card 2 (Large) */}
            <div className="group glass-panel p-8 rounded-3xl flex flex-col justify-between md:row-span-2 md:col-span-1 transition-all duration-500 hover:bg-surface/[0.05] border-primary/10">
              <div className="w-16 h-16 rounded-2xl border border-surface/10 flex items-center justify-center group-hover:border-primary transition-colors bg-primary/5">
                <MaterialIcon
                  name="video_camera_back"
                  fill
                  className="text-3xl text-primary group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="space-y-6">
                <h4 className="text-2xl font-bold">Site Awareness Clips</h4>
                <p className="text-industrial-grey leading-relaxed">
                  Drone-enabled documentation focusing on the spatial relationship between mobile
                  ground assets and fixed terminal infrastructure.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-industrial-grey">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    Logistical flow mapping
                  </li>
                  <li className="flex items-center gap-3 text-sm text-industrial-grey">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    Asset interaction studies
                  </li>
                  <li className="flex items-center gap-3 text-sm text-industrial-grey">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    Congestion point identification
                  </li>
                </ul>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group glass-panel p-8 rounded-3xl flex flex-col justify-between aspect-square transition-all duration-500 hover:bg-surface/[0.05]">
              <div className="w-16 h-16 rounded-2xl border border-surface/10 flex items-center justify-center group-hover:border-primary transition-colors">
                <MaterialIcon
                  name="photo_camera"
                  className="text-3xl group-hover:scale-110 group-hover:text-primary transition-transform"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Asset Photography</h4>
                <p className="text-industrial-grey text-sm leading-relaxed">
                  High-resolution stills of specific service vehicles and terminal hardware for
                  maintenance archives.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group glass-panel p-8 rounded-3xl flex flex-col justify-between aspect-square transition-all duration-500 hover:bg-surface/[0.05]">
              <div className="w-16 h-16 rounded-2xl border border-surface/10 flex items-center justify-center group-hover:border-primary transition-colors">
                <MaterialIcon
                  name="inventory"
                  className="text-3xl group-hover:scale-110 group-hover:text-primary transition-transform"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Visual Archive</h4>
                <p className="text-industrial-grey text-sm leading-relaxed">
                  A structured library of raw and processed footage organized by terminal sector and
                  time of day.
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="group glass-panel p-8 rounded-3xl flex flex-col justify-between aspect-square transition-all duration-500 hover:bg-surface/[0.05]">
              <div className="w-16 h-16 rounded-2xl border border-surface/10 flex items-center justify-center group-hover:border-primary transition-colors">
                <MaterialIcon
                  name="timeline"
                  className="text-3xl group-hover:scale-110 group-hover:text-primary transition-transform"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Progress Logs</h4>
                <p className="text-industrial-grey text-sm leading-relaxed">
                  Incremental visual updates showing site development or operational changes over the
                  2018 period.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality Note */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-dark-ui border border-surface/10 p-12 rounded-3xl text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <MaterialIcon name="lock" className="text-9xl" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                <MaterialIcon name="encrypted" fill className="text-sm" />
                Restricted Industrial Data
              </div>
              <h3 className="text-3xl font-bold mb-6">Confidentiality & Secure Access</h3>
              <p className="text-industrial-grey leading-relaxed mb-8">
                The full visual dataset for MAHB Airport Services contains sensitive operational site
                details. Specific asset visualizations, security protocols, and unrestricted terminal
                overviews are private and strictly protected. Access to the full Gated Video Archive
                is granted only to verified personnel with appropriate credentials.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-xs text-surface/40 uppercase tracking-widest">
                  <MaterialIcon name="verified_user" className="text-sm" /> 256-bit encryption
                </div>
                <div className="flex items-center gap-2 text-xs text-surface/40 uppercase tracking-widest">
                  <MaterialIcon name="vpn_key" className="text-sm" /> Gated Access Required
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary mb-4">
                Ecosystem
              </h2>
              <h3 className="text-4xl font-bold">Related Capabilities</h3>
            </div>
            <Link
              className="text-sm font-bold uppercase tracking-widest border-b border-primary text-surface hover:text-primary transition-colors pb-1"
              href="/services"
            >
              View All Services
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              className="group relative block aspect-[16/7] rounded-3xl overflow-hidden bg-black glass-panel"
              href="/services/corporate-videos"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/stitch/74c6710141.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h4 className="text-2xl font-bold group-hover:text-primary transition-colors text-white">
                  Corporate Videos
                </h4>
                <p className="text-industrial-grey text-sm mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Cinematic documentation for heavy industry.
                </p>
              </div>
            </Link>
            <Link
              className="group relative block aspect-[16/7] rounded-3xl overflow-hidden bg-black glass-panel"
              href="/services/facility-overview-films"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/stitch/7a8734914f.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h4 className="text-2xl font-bold group-hover:text-primary transition-colors text-white">
                  Facility Overviews
                </h4>
                <p className="text-industrial-grey text-sm mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Site-aware visual mapping for vast infrastructures.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Request Access CTA */}
        <section className="py-20">
          <div className="glass-panel p-16 rounded-[3rem] border-primary/30 relative overflow-hidden text-center shadow-[0_0_20px_rgba(209,32,39,0.15)]">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">
                View Private Industrial Archives.
              </h2>
              <p className="text-industrial-grey text-lg mb-10">
                Interested in seeing our full range of airport service documentation? Request
                credentials to access the 2018 MAHB master archive and explore high-fidelity
                operational references.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <RequestAccessTrigger
                  defaultVideo="MAHB Airport Services 2018"
                  className="bg-primary hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <MaterialIcon name="key" />
                  Request Access
                </RequestAccessTrigger>
                <Link
                  href="/contact"
                  className="bg-surface/5 hover:bg-surface/10 text-surface border border-surface/10 px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] transition-all"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
