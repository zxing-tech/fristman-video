import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"

export const metadata: Metadata = {
  title: "Ben Line Agencies",
  description:
    "Case study: drone-enabled cinematography and visual documentation for Ben Line Agencies' logistics hubs and port operations — capturing scale and operational flow without site interference.",
}

export default function BenLineAgenciesPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-[819px] w-full flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          <div
            className="w-full h-full bg-cover bg-center scale-105 transform"
            style={{ backgroundImage: "url('/images/stitch/a73f0ee0ad.jpg')" }}
          />
          <div className="scanning-line" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
              Logistics Reference
            </span>
            <div className="h-px w-24 bg-primary/50" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter max-w-4xl leading-tight">
            Ben Line Agencies — <span className="text-primary">Logistics Visual Reference</span>
          </h1>
          <p className="mt-6 text-industrial-grey text-lg max-w-2xl font-light leading-relaxed">
            A comprehensive visual documentation project focusing on drone-enabled cinematography
            for complex logistics hubs and port operations. Capturing scale and operational flow
            without site interference.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-8 space-y-20">
          {/* Logistics Context */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <MaterialIcon name="precision_manufacturing" className="text-primary" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                Logistics / Industrial Context
              </h2>
            </div>
            <div className="glass-panel p-8 rounded-xl border-l-4 border-l-primary">
              <p className="text-white/80 leading-relaxed">
                The operational environment for this reference project included high-traffic
                maritime gateways and container terminals. Visual capture required strict adherence
                to safety exclusion zones and maritime security protocols. We focused on capturing
                the rhythmic efficiency of shore-to-ship operations, highlighting the infrastructure
                that supports global supply chains.
              </p>
            </div>
          </div>

          {/* Visual Approach */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <MaterialIcon name="videocam" className="text-primary" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                Visual Approach
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-white/80 leading-relaxed">
                  Our cinematography strategy prioritized non-intrusive capture techniques. Using
                  high-altitude drone maneuvers and long-lens ground coverage, we maintained
                  industrial safety buffers while delivering cinematic intimacy.
                </p>
                <p className="text-white/80 leading-relaxed">
                  The color grade follows a technical, high-contrast palette—deep blacks and
                  metallic silvers—punctuated by the natural industrial reds and safety oranges
                  inherent to the site environment.
                </p>
              </div>
              <div className="relative min-h-64 rounded-xl overflow-hidden glass-panel">
                <Image
                  src="/images/stitch/11461413dd.jpg"
                  alt="Industrial drone camera gimbal with red status light at a blurred shipping terminal"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>

          {/* Deliverables Grid */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <MaterialIcon name="grid_view" className="text-primary" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                Deliverables
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center group hover:bg-primary/5 transition-all cursor-default">
                <MaterialIcon
                  name="domain"
                  className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Facility Overview
                </span>
              </div>
              <div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center group hover:bg-primary/5 transition-all cursor-default">
                <MaterialIcon
                  name="auto_stories"
                  className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Site Storytelling
                </span>
              </div>
              <div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center group hover:bg-primary/5 transition-all cursor-default">
                <MaterialIcon
                  name="photo_camera"
                  className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                  High-Res Stills
                </span>
              </div>
              <div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center group hover:bg-primary/5 transition-all cursor-default">
                <MaterialIcon
                  name="assignment_ind"
                  className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Stakeholder Briefings
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          {/* Gated Content Notice */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
              <MaterialIcon name="lock" className="text-primary text-4xl" />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">
              Confidentiality Note
            </h3>
            <p className="text-industrial-grey text-sm mb-6 leading-relaxed">
              Full project reels and specific site data are gated to ensure compliance with
              site-safety and proprietary logistics protocols. Access is restricted to authorized
              stakeholders.
            </p>
            <RequestAccessTrigger
              defaultVideo="Ben Line Agencies — Logistics Visual Reference"
              className="w-full border border-primary text-primary py-3 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-primary hover:text-white transition-all"
            >
              Request Secure Access
            </RequestAccessTrigger>
          </div>

          {/* Related Services */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-industrial-grey border-b border-white/10 pb-2">
              Related Services
            </h3>
            <div className="space-y-4">
              <Link
                className="flex items-center justify-between p-4 glass-panel rounded-xl group hover:border-primary/50 transition-colors"
                href="/services/industrial-cinematography"
              >
                <span className="text-sm font-bold uppercase tracking-tight">
                  Industrial Cinematography
                </span>
                <MaterialIcon
                  name="arrow_forward"
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link
                className="flex items-center justify-between p-4 glass-panel rounded-xl group hover:border-primary/50 transition-colors"
                href="/services/facility-overview-films"
              >
                <span className="text-sm font-bold uppercase tracking-tight">
                  Facility Overviews
                </span>
                <MaterialIcon
                  name="arrow_forward"
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Site Badge */}
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-start gap-4">
            <MaterialIcon name="security" className="text-primary" />
            <div>
              <h4 className="text-[10px] font-black uppercase text-primary mb-1">
                Safety Compliant
              </h4>
              <p className="text-[11px] text-white/60 uppercase tracking-wide">
                Documentation captured under strict industrial safety management systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-dark-ui border-y border-white/5 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">
            Ready to showcase your industrial assets?
          </h2>
          <p className="text-industrial-grey mb-12 max-w-xl mx-auto">
            Discuss a similar visual production for your logistics hub, offshore facility, or
            industrial site. We prioritize safety and cinematic precision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <RequestAccessTrigger
              defaultVideo="Ben Line Agencies — Logistics Visual Reference"
              className="bg-primary text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:shadow-[0_0_20px_rgba(209,32,39,0.4)] transition-all active:scale-95 flex items-center gap-2"
            >
              Request Access / Discuss Production
              <MaterialIcon name="send" />
            </RequestAccessTrigger>
            <Link
              className="text-white hover:text-primary transition-colors font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-2"
              href="/case-studies"
            >
              View Portfolio
              <MaterialIcon name="chevron_right" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
