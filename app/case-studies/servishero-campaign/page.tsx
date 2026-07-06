import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"

export const metadata: Metadata = {
  title: "ServisHero Campaign",
  description:
    "Case study detail: a high-impact visual campaign for ServisHero — drone-enabled capture, cinematic site-aware planning, and HSE compliant industrial documentation across Southeast Asia.",
}

const iconFillHover = "group-hover:[font-variation-settings:'FILL'_1]"

export default function ServisHeroCampaignPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <header className="relative h-[870px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
          <div
            className="w-full h-full bg-cover bg-center"
            role="img"
            aria-label="High-angle drone shot of a massive industrial fabrication yard at twilight"
            style={{ backgroundImage: "url('/images/stitch/a6afb92c9f.jpg')" }}
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-12 h-[1px] bg-primary" />
            <span className="text-primary tracking-[0.4em] text-xs font-bold uppercase">
              Case Study Detail
            </span>
            <span className="w-12 h-[1px] bg-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-6 leading-none italic">
            ServisHero — <span className="text-primary">Campaign</span> Visual Reference
          </h1>
          <div className="glass-panel px-6 py-4 rounded-full inline-flex items-center gap-4 border-white/5">
            <span className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/60">
              <MaterialIcon name="location_on" className="text-primary text-sm" /> Southeast Asia
              Operations
            </span>
            <div className="w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/60">
              <MaterialIcon name="schedule" className="text-primary text-sm" /> Q3 Delivery
            </span>
          </div>
        </div>
        {/* Scrolldown */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-widest font-bold">Discover Content</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </header>

      <div className="relative z-10 -mt-20">
        {/* Public Summary & Context */}
        <section className="max-w-[1200px] mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="glass-panel p-8 rounded-xl relative overflow-hidden group h-full">
                <div className="scanning-line" style={{ opacity: 0.3 }} />
                <h2 className="text-primary text-sm font-black tracking-widest uppercase mb-4">
                  Public Summary
                </h2>
                <p className="text-industrial-grey text-sm leading-relaxed">
                  A high-impact visual campaign developed to showcase regional service integration
                  through drone-enabled capture and cinematic site-aware planning. This reference
                  material highlights the intersection of industrial logistics and human-centric
                  service delivery.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/50 uppercase">
                    Industrial
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/50 uppercase">
                    Aerial
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="bg-dark-ui border border-white/5 p-12 rounded-xl">
                <h2 className="text-2xl font-bold tracking-tighter uppercase mb-6 flex items-center gap-3">
                  <MaterialIcon name="analytics" className="text-primary" /> Campaign Context
                </h2>
                <div className="space-y-6 text-industrial-grey leading-relaxed">
                  <p>
                    The ServisHero initiative required a visual strategy that balanced high-scale
                    industrial documentation with accessible, brand-aligned storytelling. Our team
                    deployed specialized capture systems to document multi-site operations without
                    disrupting ongoing logistical flows.
                  </p>
                  <p>
                    By utilizing site-aware planning, we identified key visual anchors that
                    represent the brand&apos;s commitment to efficiency and regional presence. All
                    captures were conducted under strict adherence to safety protocols, ensuring
                    the visual assets remained suitable for both stakeholder presentations and
                    public-facing marketing.
                  </p>
                  <div className="flex items-center gap-4 text-white text-xs font-bold tracking-widest uppercase pt-4">
                    <MaterialIcon name="verified_user" className="text-primary" />
                    HSE Compliant Operations • Credentials available upon request
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Storytelling Approach (Bento Layout) */}
        <section className="max-w-[1200px] mx-auto px-8 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-4">
              Visual Storytelling Approach
            </h2>
            <p className="text-industrial-grey max-w-2xl mx-auto">
              Leveraging drone-enabled cinematic strategy for precise industrial visual
              documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative h-80 rounded-xl overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                role="img"
                aria-label="Cinema camera mounted on a heavy-lift industrial drone in a dark hangar"
                style={{ backgroundImage: "url('/images/stitch/4daaed1dfc.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white font-bold uppercase tracking-widest mb-2">
                  Aerial Precision
                </h3>
                <p className="text-white/60 text-xs max-w-md">
                  Utilizing stable, high-bitrate capture platforms for sweeping cinematic sequences
                  in complex industrial environments.
                </p>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-xl flex flex-col justify-center border-primary/20">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 border border-primary/30">
                <MaterialIcon name="movie_filter" fill className="text-primary" />
              </div>
              <h3 className="text-white font-bold uppercase tracking-widest mb-4">
                Site-Aware Capture
              </h3>
              <p className="text-industrial-grey text-sm leading-relaxed">
                Every frame is planned to minimize impact on site operations while maximizing the
                cinematic scale of the facility.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-xl flex flex-col justify-center border-white/5">
              <h3 className="text-white font-bold uppercase tracking-widest mb-4">Color Grading</h3>
              <p className="text-industrial-grey text-sm leading-relaxed mb-6">
                Industrial-grade post-production featuring consistent skin-tone retention and
                structural contrast enhancement.
              </p>
              <div className="flex gap-1">
                <div className="h-1 flex-1 bg-primary" />
                <div className="h-1 flex-1 bg-graphite-light" />
                <div className="h-1 flex-1 bg-white/20" />
                <div className="h-1 flex-1 bg-black" />
              </div>
            </div>
            <div className="md:col-span-2 relative h-80 rounded-xl overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                role="img"
                aria-label="Industrial control room with large screens showing data visualizations"
                style={{ backgroundImage: "url('/images/stitch/af0b168415.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white font-bold uppercase tracking-widest mb-2">
                  Technical Storyboarding
                </h3>
                <p className="text-white/60 text-xs max-w-md">
                  Pre-visualization of complex shots to ensure stakeholder alignment before
                  deployment on active sites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Grid */}
        <section className="bg-[#111111] py-24 border-y border-white/5">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-black tracking-tighter uppercase">
                  Campaign Deliverables
                </h2>
                <p className="text-industrial-grey mt-2">
                  Standard high-fidelity outputs for the ServisHero campaign.
                </p>
              </div>
              <div className="hidden md:block text-[10px] font-bold text-primary tracking-[0.3em] uppercase">
                Phase 04: Completion
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="group">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    role="img"
                    aria-label="Cinematic industrial film thumbnail of a stylized refinery at night"
                    style={{ backgroundImage: "url('/images/stitch/cb7eee941e.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <MaterialIcon name="play_circle" className={`text-white text-5xl ${iconFillHover}`} />
                  </div>
                </div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <MaterialIcon name="movie" className={`text-primary text-sm ${iconFillHover}`} /> Hero
                  Cinematic Film
                </h4>
                <p className="text-industrial-grey text-[11px] mt-1 italic leading-tight">
                  4K Master — 120s Extended Cut
                </p>
              </div>
              {/* Card 2 */}
              <div className="group">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    role="img"
                    aria-label="Collage of 9:16 vertical social media video thumbnails of industrial logistics"
                    style={{ backgroundImage: "url('/images/stitch/80cbaef611.jpg')" }}
                  />
                </div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <MaterialIcon name="phone_iphone" className={`text-primary text-sm ${iconFillHover}`} />{" "}
                  Social Cutdowns
                </h4>
                <p className="text-industrial-grey text-[11px] mt-1 italic leading-tight">
                  Multi-platform 9:16 optimized loops
                </p>
              </div>
              {/* Card 3 */}
              <div className="group">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    role="img"
                    aria-label="High-resolution aerial photograph of a shipyard with cranes and containers"
                    style={{ backgroundImage: "url('/images/stitch/fcd8f7a826.jpg')" }}
                  />
                </div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <MaterialIcon name="photo_camera" className={`text-primary text-sm ${iconFillHover}`} />{" "}
                  High-Res Stills
                </h4>
                <p className="text-industrial-grey text-[11px] mt-1 italic leading-tight">
                  Professional grade facility documentation
                </p>
              </div>
              {/* Card 4 */}
              <div className="group">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    role="img"
                    aria-label="Secure digital video file graphic with confidential watermark and lock icon"
                    style={{ backgroundImage: "url('/images/stitch/d9c90928ee.jpg')" }}
                  />
                  <RequestAccessTrigger
                    defaultVideo="ServisHero Campaign — Stakeholder Cut"
                    className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center"
                  >
                    <MaterialIcon name="lock" className={`text-primary text-4xl mb-2 ${iconFillHover}`} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Gated Content
                    </span>
                  </RequestAccessTrigger>
                </div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <MaterialIcon name="groups" className={`text-primary text-sm ${iconFillHover}`} />{" "}
                  Stakeholder Cut
                </h4>
                <p className="text-industrial-grey text-[11px] mt-1 italic leading-tight">
                  Internal-only strategic brief
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality & HSE */}
        <section className="max-w-[1200px] mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest mb-6">
              <MaterialIcon name="security" className="text-sm" /> Site-Safety protocols
            </div>
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-6 leading-tight">
              Confidentiality & HSE Compliance
            </h2>
            <div className="space-y-4 text-industrial-grey text-sm leading-relaxed">
              <p>
                All industrial visual documentation for the ServisHero campaign followed rigorous
                safety standards. Our crews are trained for high-risk site environments, ensuring
                zero interference with active operations.
              </p>
              <div className="flex items-start gap-4 glass-panel p-4 rounded-lg border-white/5">
                <MaterialIcon name="gpp_maybe" className="text-primary" />
                <p className="text-[11px]">
                  Sensitive material including internal logistics data and specific facility
                  layouts are subject to gated access. Credentials for full-resolution review are
                  available upon vetted request.
                </p>
              </div>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-white font-bold text-xl">100%</div>
                <div className="text-[10px] uppercase text-white/40 font-bold tracking-widest">
                  HSE Compliance
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-xl">0</div>
                <div className="text-[10px] uppercase text-white/40 font-bold tracking-widest">
                  Incident Record
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              <div className="relative glass-panel rounded-2xl overflow-hidden aspect-square border-white/10">
                <div
                  className="w-full h-full bg-cover bg-center grayscale contrast-125"
                  role="img"
                  aria-label="Macro shot of high-visibility reflective stripe on dark industrial safety fabric"
                  style={{ backgroundImage: "url('/images/stitch/50e1514a20.jpg')" }}
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 rounded-full border border-white/20 text-[9px] font-bold tracking-[0.2em] uppercase text-white">
                  Verification Active
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="max-w-[1200px] mx-auto px-8 pb-32">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-12 text-center">
            Continue Exploring Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              className="group glass-panel p-10 rounded-2xl border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden relative"
              href="/services/industrial-cinematography"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <MaterialIcon name="arrow_outward" className="text-6xl text-primary" />
              </div>
              <span className="text-primary text-[10px] font-black tracking-widest uppercase mb-4 block">
                Capability 01
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">
                Industrial Cinematography
              </h3>
              <p className="text-industrial-grey text-sm max-w-xs">
                High-end cinematic storytelling for heavy industry and energy sectors.
              </p>
            </Link>
            <Link
              className="group glass-panel p-10 rounded-2xl border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden relative"
              href="/services/facility-overview-films"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <MaterialIcon name="arrow_outward" className="text-6xl text-primary" />
              </div>
              <span className="text-primary text-[10px] font-black tracking-widest uppercase mb-4 block">
                Capability 02
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">
                Facility Overviews
              </h3>
              <p className="text-industrial-grey text-sm max-w-xs">
                Technical documentation and visual walkthroughs of large-scale sites.
              </p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-32 overflow-hidden bg-black">
          <div className="relative z-10 max-w-[800px] mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 italic">
              Ready to Capture <br />
              <span className="text-primary">Your Infrastructure?</span>
            </h2>
            <p className="text-industrial-grey text-lg mb-12">
              Discuss a similar visual strategy for your next industrial campaign or site
              assessment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <RequestAccessTrigger
                defaultVideo="ServisHero Campaign"
                className="bg-primary text-white text-xs uppercase tracking-[0.2em] font-black px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(209,32,39,0.4)] hover:shadow-white/20 active:scale-95"
              >
                Request Access / Discuss Campaign
              </RequestAccessTrigger>
              <Link
                className="text-white/60 hover:text-white text-xs uppercase tracking-widest font-bold flex items-center gap-2 group"
                href="/case-studies"
              >
                View Portfolio{" "}
                <MaterialIcon
                  name="trending_flat"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <div className="mt-12 text-[10px] text-white/30 font-bold uppercase tracking-[0.3em]">
              Priority site assessment slots available this month
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
