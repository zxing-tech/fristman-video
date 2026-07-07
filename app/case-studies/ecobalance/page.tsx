import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

export const metadata: Metadata = {
  title: "EcoBalance Corporate Story",
  description:
    "Case study: drone-enabled corporate storytelling for EcoBalance — site-aware industrial cinematography capturing facility scale without disrupting operations.",
}

export default function EcoBalanceCaseStudyPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-8 mb-16 relative">
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden glass-panel border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          <div className="scanning-line opacity-30" />
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/stitch/14777df4fc.jpg')" }}
          />
          <div className="absolute bottom-12 left-12 z-20 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary text-[10px] font-bold tracking-[0.2em] rounded-full uppercase">
                Case Study
              </span>
              <span className="w-12 h-[1px] bg-white/30" />
              <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">
                Ref: 2024-EB-CS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter uppercase leading-[0.9] mb-6">
              EcoBalance — <span className="text-primary">Corporate Storytelling</span> Reference
            </h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <MaterialIcon name="visibility" className="text-primary text-sm" />
                <span className="text-xs font-bold tracking-widest uppercase">
                  Public Access Approved
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <MaterialIcon name="precision_manufacturing" className="text-primary text-sm" />
                <span className="text-xs font-bold tracking-widest uppercase">
                  Corporate Videos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Briefing Grid */}
      <section className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
        {/* Summary */}
        <div className="md:col-span-8 flex flex-col gap-8">
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <MaterialIcon name="info" className="text-8xl" />
            </div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">
              Public Summary
            </h2>
            <p className="text-xl text-industrial-grey font-light leading-relaxed">
              This project serves as a definitive reference for drone-enabled cinematography
              within high-stakes corporate communication environments. Our approach prioritized
              site-aware planning and precision visual documentation to capture the scale of
              EcoBalance&apos;s industrial operations without disrupting established safety
              protocols or operational workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-3xl border-l-2 border-l-primary">
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/50 mb-4">
                Project Context
              </h3>
              <p className="text-sm text-industrial-grey leading-relaxed">
                The industrial setting (EcoBalance) required a meticulous approach to visual
                storytelling. By leveraging stabilized ground units and aerial platforms, we
                maintained a comprehensive perspective of the facility&apos;s complex
                infrastructure. The focus remained on the technical sophistication of the site,
                translating industrial scale into cinematic narrative assets suitable for global
                stakeholders.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border-l-2 border-l-primary">
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/50 mb-4">
                Communication Objective
              </h3>
              <p className="text-sm text-industrial-grey leading-relaxed">
                The primary objective centered on brand storytelling through high-fidelity
                documentation. Stakeholders required a visual bridge between complex on-site
                activities and corporate transparency. Our task was to provide site-aware
                documentation that highlights the synergy between engineering precision and
                corporate commitment to operational excellence.
              </p>
            </div>
          </div>
        </div>
        {/* Chips & Specs */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">
              Internal Tracking
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-white uppercase">
                  [CONFIRM CLIENT APPROVAL]
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">
                  [REPLACE PLACEHOLDER TEXT]
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">
                  [APPROVED IMAGERY ONLY]
                </span>
              </div>
            </div>
          </div>
          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/50 mb-6">
              Visual Approach
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MaterialIcon name="airplanemode_active" className="text-primary" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-1">
                    Cinematic UAV
                  </h4>
                  <p className="text-xs text-industrial-grey">
                    High-altitude perspective for facility layout.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <MaterialIcon name="videocam" className="text-primary" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-1">
                    Ground-Based Capture
                  </h4>
                  <p className="text-xs text-industrial-grey">
                    Tactile, macro-level engineering detail.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <MaterialIcon name="data_usage" className="text-primary" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-1">
                    Scale Documentation
                  </h4>
                  <p className="text-xs text-industrial-grey">
                    Visualizing industrial complexity for investors.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Asset Showcase */}
      <section className="bg-dark-ui py-24 border-y border-white/5 mb-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
                Project Outputs
              </h2>
              <p className="text-3xl font-bold uppercase tracking-tighter">Likely Deliverables</p>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-[10px] font-bold tracking-[0.2em] text-industrial-grey uppercase">
                Document Class: Asset Matrix
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Deliverable 1 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden glass-panel">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100"
                style={{ backgroundImage: "url('/images/stitch/5677735a6c.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <MaterialIcon name="movie_filter" className="text-primary text-sm" />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    Monthly Update Films
                  </span>
                </div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest leading-relaxed">
                  Periodic visual reporting for project management teams.
                </p>
              </div>
            </div>
            {/* Deliverable 2 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden glass-panel">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100"
                style={{ backgroundImage: "url('/images/stitch/9cfe507b06.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <MaterialIcon name="bolt" className="text-primary text-sm" />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    Milestone Reels
                  </span>
                </div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest leading-relaxed">
                  High-impact summaries for corporate events and annual reports.
                </p>
              </div>
            </div>
            {/* Deliverable 3 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden glass-panel">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100"
                style={{ backgroundImage: "url('/images/stitch/980656c7aa.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <MaterialIcon name="photo_library" className="text-primary text-sm" />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    High-Res Still Packs
                  </span>
                </div>
                <p className="text-[10px] text-white/50 uppercase tracking-widest leading-relaxed">
                  Print-ready documentation for stakeholder physical collateral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality & Related */}
      <section className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        {/* Security Note */}
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <div className="glass-panel p-8 rounded-3xl border border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-3xl rounded-full" />
              <div className="flex items-center gap-3 mb-6">
                <MaterialIcon name="lock" fill className="text-primary" />
                <h3 className="text-sm font-black tracking-widest uppercase">
                  Confidentiality Note
                </h3>
              </div>
              <p className="text-sm text-industrial-grey leading-relaxed mb-6">
                FIRSTMAN VIDEOS ensures the secure handling of all sensitive industrial data. Our
                workflows are designed to accommodate site-specific NDA requirements, ensuring
                that proprietary processes remain strictly confidential while delivering
                world-class visual assets.
              </p>
              <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">
                    Protocol Status
                  </span>
                  <span className="text-[9px] font-bold text-primary uppercase tracking-widest">
                    Active
                  </span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-primary origin-left scale-x-75 animate-pulse [animation-duration:3s]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Related Services */}
        <div className="lg:col-span-8">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-8">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <Link
              className="group block glass-panel p-1 rounded-[2rem] hover:border-primary/50 transition-all duration-500"
              href="/services/corporate-videos"
            >
              <div className="relative overflow-hidden rounded-[1.8rem] aspect-[4/3] mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/stitch/6182d29b77.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="px-6 pb-8">
                <h3 className="text-xl font-bold uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors">
                  Corporate Videos
                </h3>
                <p className="text-xs text-industrial-grey mb-6 leading-relaxed">
                  Professional-grade visual capture for heavy industry environments, fabrication
                  yards, and energy infrastructure.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/40">
                  <span>Learn More</span>
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-xs group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
            {/* Card 2 */}
            <Link
              className="group block glass-panel p-1 rounded-[2rem] hover:border-primary/50 transition-all duration-500"
              href="/services/facility-overview-films"
            >
              <div className="relative overflow-hidden rounded-[1.8rem] aspect-[4/3] mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/stitch/493ecfb868.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="px-6 pb-8">
                <h3 className="text-xl font-bold uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors">
                  Facility Overviews
                </h3>
                <p className="text-xs text-industrial-grey mb-6 leading-relaxed">
                  Comprehensive visual mapping and cinematic overviews of large-scale assets and
                  operational territories.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/40">
                  <span>Learn More</span>
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-xs group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-[1280px] mx-auto px-8 mb-32">
        <div className="relative rounded-[3rem] overflow-hidden bg-dark-ui border border-white/5 py-24 px-8 text-center">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#d12027,transparent_70%)] opacity-20" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Elevate Your <span className="text-primary">Operational Story</span>
          </h2>
          <p className="text-industrial-grey max-w-xl mx-auto mb-10 text-lg font-light">
            We are currently accepting new industrial documentation projects for the upcoming
            quarter. Priority site assessment slots are allocated on a first-come basis.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(209,32,39,0.2)] transform hover:-translate-y-1"
            >
              REQUEST CONSULTATION
            </Link>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-primary" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
                Limited Onboarding Capacity
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
