import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"

export const metadata: Metadata = {
  title: "Oil & Gas",
  description:
    "Precision visual documentation engineered for the complexities of offshore and onshore energy environments. High-fidelity cinematic capture prioritizing site awareness and operational scale.",
}

const visualApplications = [
  {
    bgIcon: "satellite_alt",
    icon: "map",
    title: "Site Overview",
    body: "Comprehensive macro-level visual documentation establishing spatial context, infrastructure layout, and logistical routing for planning and presentation purposes.",
  },
  {
    bgIcon: "update",
    icon: "history",
    title: "Project Milestone Updates",
    body: "Sequential visual capture detailing construction phases, fabrication progress, or installation milestones to maintain transparency with remote stakeholders.",
  },
  {
    bgIcon: "health_and_safety",
    icon: "security",
    title: "Safety/Training Visual Assets",
    body: "High-fidelity contextual footage utilized to enhance site induction materials, illustrating actual operational environments and reinforcing safety protocols through real-world visuals.",
  },
  {
    bgIcon: "retention",
    icon: "groups",
    title: "Stakeholder Presentations",
    body: "Cinematically crafted visual packages designed for board-level reporting, investor relations, and external communications, elevating corporate narrative quality.",
  },
]

const workflowSteps = [
  {
    icon: "forum",
    number: "01",
    title: "Consultation",
    body: "Alignment on visual objectives, stakeholder requirements, and preliminary site context.",
    active: true,
  },
  {
    icon: "architecture",
    number: "02",
    title: "Planning",
    body: "Logistical routing, safety protocol integration, and site-aware capture strategy development.",
    active: false,
  },
  {
    icon: "videocam",
    number: "03",
    title: "Capture",
    body: "On-site execution minimizing operational footprint while maximizing cinematic fidelity.",
    active: false,
  },
  {
    icon: "send",
    number: "04",
    title: "Delivery",
    body: "Post-production refinement and secure transfer of final visual assets.",
    active: false,
  },
]

export default function OilGasIndustryPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center justify-center pt-24 pb-16 px-6 lg:px-12 overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/stitch/87c2088542.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
          {/* HUD Overlay Elements */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')",
            }}
          />
          {/* Corner HUD accents */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/40" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary/40" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary/40" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-start">
          <div className="inline-flex items-center space-x-2 bg-graphite/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-label uppercase tracking-[0.2em] text-[#a0a4a8]">
              Sector Subpage / Energy Infrastructure
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-[0.9] mb-6 max-w-4xl">
            <span className="block text-white">DRONE-ENABLED</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              INDUSTRIAL CINEMATOGRAPHY
            </span>
            <span className="block text-primary">FOR OIL &amp; GAS.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#a0a4a8] font-body max-w-2xl mb-10 border-l-2 border-primary pl-6 leading-relaxed">
            Precision visual documentation engineered for the complexities of offshore and onshore
            energy environments. High-fidelity cinematic capture prioritizing site awareness and
            operational scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-primary text-white rounded-full font-label uppercase tracking-wider text-sm font-bold overflow-hidden transition-all duration-300 hover:bg-black border border-primary hover:border-primary"
            >
              <span className="relative z-10 flex items-center">
                Initiate Project Brief
                <MaterialIcon
                  name="arrow_forward"
                  className="ml-2 text-xl group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0" />
            </Link>
            <Link
              href="/case-studies"
              className="group px-8 py-4 bg-transparent text-white rounded-full font-label uppercase tracking-wider text-sm font-bold border border-white/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 glass-panel"
            >
              <span className="flex items-center">
                <MaterialIcon name="play_circle" className="mr-2 text-xl" />
                View Sector Reel
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Context & Complexities */}
      <section className="py-24 px-6 lg:px-12 bg-background relative border-t border-surface/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative group">
              <div className="relative p-1">
                {/* Corner brackets */}
                <span className="pointer-events-none absolute -top-px -left-px w-2.5 h-2.5 border-t-2 border-l-2 border-primary transition-all duration-300 group-hover:-top-1 group-hover:-left-1 group-hover:w-3.5 group-hover:h-3.5" />
                <span className="pointer-events-none absolute -bottom-px -right-px w-2.5 h-2.5 border-b-2 border-r-2 border-primary transition-all duration-300 group-hover:-bottom-1 group-hover:-right-1 group-hover:w-3.5 group-hover:h-3.5" />
                <div
                  className="w-full h-[500px] bg-cover bg-center rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: "url('/images/stitch/0104594643.jpg')" }}
                />
                {/* Data HUD Overlays */}
                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm border border-white/10 p-3 rounded-lg font-mono text-xs text-primary flex flex-col gap-1">
                  <span className="flex items-center">
                    <MaterialIcon name="location_on" className="text-[14px] mr-1" /> ONSHORE_SECTOR_7
                  </span>
                  <span className="flex items-center">
                    <MaterialIcon name="visibility" className="text-[14px] mr-1" /> VIS_DOC_ACTIVE
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <div className="mb-4">
                <h2 className="text-xs font-label uppercase tracking-[0.2em] text-primary mb-2">
                  Operational Context
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-surface mb-6">
                  NAVIGATING COMPLEX
                  <br />
                  ENERGY ENVIRONMENTS
                </h3>
              </div>
              <p className="text-industrial-grey font-body text-lg leading-relaxed mb-8">
                Visual capture within the Oil &amp; Gas sector demands more than technical
                proficiency—it requires an innate understanding of site dynamics, stringent safety
                protocols, and operational continuity. Our drone-enabled cinematography is designed
                to operate seamlessly alongside active infrastructure, delivering high-fidelity
                visual documentation without disrupting critical workflows. We translate vast,
                complex environments into compelling visual narratives tailored for diverse
                stakeholder requirements.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-surface/10">
                <div>
                  <div className="text-3xl font-black text-surface mb-1">01</div>
                  <div className="text-sm font-label uppercase tracking-widest text-industrial-grey">
                    Site-Aware Capture
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-surface mb-1">02</div>
                  <div className="text-sm font-label uppercase tracking-widest text-industrial-grey">
                    Non-Disruptive Ops
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Needs Grid */}
      <section className="py-24 px-6 lg:px-12 bg-graphite relative border-t border-surface/5 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-graphite to-graphite pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-xs font-label uppercase tracking-[0.2em] text-primary mb-2">
              Visual Applications
            </h2>
            <h3 className="text-4xl font-bold font-headline tracking-tight text-surface mb-4">
              STRATEGIC VISUAL ASSETS
            </h3>
            <p className="text-industrial-grey font-body text-lg">
              Targeted documentation formats designed to serve specific communication mandates
              across project lifecycles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visualApplications.map((item) => (
              <div
                key={item.title}
                className="group glass-panel rounded-2xl p-8 hover:bg-surface/[0.03] transition-all duration-300 border border-surface/5 hover:border-primary/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MaterialIcon name={item.bgIcon} className="text-8xl text-surface" />
                </div>
                <div className="w-12 h-12 rounded-full border border-industrial-grey/30 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                  <MaterialIcon
                    name={item.icon}
                    className="text-surface group-hover:text-primary transition-colors"
                  />
                </div>
                <h4 className="text-xl font-bold font-headline text-surface mb-3 tracking-wide">
                  {item.title}
                </h4>
                <p className="text-industrial-grey font-body leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suited Services Bento Grid */}
      <section className="py-24 px-6 lg:px-12 bg-dark-ui border-t border-surface/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xs font-label uppercase tracking-[0.2em] text-primary mb-2">
                Core Capabilities
              </h2>
              <h3 className="text-4xl font-bold font-headline tracking-tight text-surface">
                DEPLOYABLE SERVICES
              </h3>
            </div>
            <Link
              href="/services"
              className="text-xs font-label uppercase tracking-widest text-surface border-b border-primary pb-1 hover:text-primary transition-colors flex items-center"
            >
              View Full Capability Statement{" "}
              <MaterialIcon name="arrow_forward" className="text-[16px] ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Service 1: Large Featured */}
            <div className="lg:col-span-2 group glass-panel rounded-2xl overflow-hidden border border-surface/10 hover:border-primary/50 transition-all duration-500 flex flex-col relative">
              <div className="h-64 overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: "url('/images/stitch/10033b0cce.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                  <span className="text-[10px] font-label uppercase tracking-widest text-white">
                    Primary Capability
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between relative z-10 -mt-12">
                <div>
                  <h4 className="text-2xl font-bold font-headline text-white mb-3">
                    Corporate Videos
                  </h4>
                  <p className="text-industrial-grey font-body text-sm leading-relaxed mb-6">
                    Premium, large-sensor aerial and ground capture designed for visual impact. We
                    deliver heavily stylized, cinematic documentation that elevates corporate
                    narratives while accurately representing scale and engineering prowess.
                  </p>
                </div>
                <Link
                  href="/services/corporate-videos"
                  className="flex items-center text-primary text-sm font-label uppercase tracking-wider group-hover:text-surface transition-colors"
                >
                  Explore Methodology{" "}
                  <MaterialIcon
                    name="arrow_forward"
                    className="ml-2 transform group-hover:translate-x-2 transition-transform"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:col-span-1">
              {/* Service 2 */}
              <div className="group glass-panel rounded-2xl p-6 border border-surface/10 hover:border-primary/50 transition-all duration-500 flex-1 flex flex-col relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
                <div className="mb-4">
                  <MaterialIcon
                    name="auto_awesome"
                    className="text-3xl text-industrial-grey group-hover:text-primary transition-colors"
                  />
                </div>
                <h4 className="text-xl font-bold font-headline text-surface mb-3">AI-Generated Video</h4>
                <p className="text-industrial-grey font-body text-sm leading-relaxed flex-grow">
                  AI-generated recreations of scenes too hazardous or impossible to film live — from
                  offshore incident simulations to emergency evacuation sequences — rendered with
                  cinematic realism for training and communications.
                </p>
              </div>
              {/* Service 3 */}
              <div className="group glass-panel rounded-2xl p-6 border border-surface/10 hover:border-primary/50 transition-all duration-500 flex-1 flex flex-col relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
                <div className="mb-4">
                  <MaterialIcon
                    name="collections_bookmark"
                    className="text-3xl text-industrial-grey group-hover:text-primary transition-colors"
                  />
                </div>
                <h4 className="text-xl font-bold font-headline text-surface mb-3">
                  Visual Progress Documentation
                </h4>
                <p className="text-industrial-grey font-body text-sm leading-relaxed flex-grow">
                  Structured, repeatable visual capture over time. Provides stakeholders with
                  high-quality visual context of project advancement without on-site presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gated Case Study Teaser */}
      <section className="py-24 px-6 lg:px-12 bg-background relative border-t border-surface/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-xs font-label uppercase tracking-[0.2em] text-primary mb-2">
              Restricted Access Archive
            </h2>
            <h3 className="text-3xl font-bold font-headline tracking-tight text-surface">
              PROTOTYPE REFERENCE STUDY
            </h3>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-panel bg-black group">
            {/* Background blurred representation */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 blur-md grayscale"
              style={{ backgroundImage: "url('/images/stitch/d533de0552.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/70" />
            {/* HUD Scanline specific to this card */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 min-h-[400px]">
              <div className="max-w-lg mb-8 md:mb-0">
                <div className="inline-flex items-center space-x-2 bg-black/50 border border-primary/30 rounded-full px-3 py-1 mb-6">
                  <MaterialIcon name="lock" className="text-primary text-[14px]" />
                  <span className="text-xs font-label uppercase tracking-widest text-primary">
                    Protected Asset
                  </span>
                </div>
                <h4 className="text-3xl font-black font-headline text-white mb-2 uppercase tracking-tight">
                  Petrofac Kemaman
                  <br />
                  Supply Base
                </h4>
                <p className="text-[#a0a4a8] font-body mb-6 text-sm">
                  Comprehensive visual documentation encompassing supply chain logistics, marine
                  vessel integration, and yard operations. Access restricted due to operational
                  sensitivity.
                </p>
                <div className="flex gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded px-3 py-2 text-center">
                    <div className="text-[10px] text-white/70 font-label uppercase tracking-widest mb-1">
                      Environment
                    </div>
                    <div className="text-sm text-white font-headline">Marine / Yard</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded px-3 py-2 text-center">
                    <div className="text-[10px] text-white/70 font-label uppercase tracking-widest mb-1">
                      Deliverable
                    </div>
                    <div className="text-sm text-white font-headline">Stakeholder Reel</div>
                  </div>
                </div>
                <Link
                  href="/case-studies/petrofac-kemaman"
                  className="inline-flex items-center text-xs font-label uppercase tracking-widest text-white border-b border-primary pb-1 hover:text-primary transition-colors"
                >
                  View Case Study <MaterialIcon name="arrow_forward" className="text-[16px] ml-1" />
                </Link>
              </div>
              {/* Lock UI / Request Access */}
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-xl w-full md:w-auto text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mb-6 relative group-hover:border-primary transition-colors duration-500">
                  <MaterialIcon
                    name="encrypted"
                    className="text-3xl text-white group-hover:text-primary transition-colors"
                  />
                  {/* Spinning ring */}
                  <div
                    className="absolute inset-[-4px] border border-dashed border-primary/20 rounded-full animate-spin"
                    style={{ animationDuration: "10s" }}
                  />
                </div>
                <h5 className="text-white font-headline font-bold text-lg mb-2">
                  Authorization Required
                </h5>
                <p className="text-white/70 text-xs mb-6 max-w-[200px] leading-relaxed">
                  Client verification required to view restricted operational documentation.
                </p>
                <RequestAccessTrigger
                  defaultVideo="Petrofac Kemaman Supply Base"
                  className="w-full bg-primary hover:bg-[#a3171e] text-white px-6 py-3 rounded-full font-label uppercase tracking-wider text-xs font-bold transition-all duration-300 transform active:scale-95 flex items-center justify-center"
                >
                  Request Access <MaterialIcon name="key" className="ml-2 text-[16px]" />
                </RequestAccessTrigger>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow / Process */}
      <section className="py-24 px-6 lg:px-12 bg-graphite border-t border-surface/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-xs font-label uppercase tracking-[0.2em] text-primary mb-2">
              Execution Protocol
            </h2>
            <h3 className="text-3xl font-bold font-headline tracking-tight text-surface">
              OPERATIONAL WORKFLOW
            </h3>
          </div>
          <div className="relative">
            {/* Horizontal connection line (desktop) */}
            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-surface/10 z-0">
              <div className="h-full bg-primary w-1/3 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#d12027]" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex flex-col items-center text-center group ${index > 0 ? "mt-4 md:mt-0" : ""}`}
                >
                  <div
                    className={
                      step.active
                        ? "w-24 h-24 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(209,32,39,0.15)] relative"
                        : "w-24 h-24 rounded-full bg-background border-2 border-surface/10 group-hover:border-primary/50 transition-colors flex items-center justify-center mb-6 relative"
                    }
                  >
                    <MaterialIcon
                      name={step.icon}
                      className={
                        step.active
                          ? "text-3xl text-surface group-hover:text-primary transition-colors"
                          : "text-3xl text-industrial-grey group-hover:text-surface transition-colors"
                      }
                    />
                    <div
                      className={
                        step.active
                          ? "absolute -bottom-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded font-mono"
                          : "absolute -bottom-3 bg-surface/10 text-surface text-[10px] font-bold px-2 py-1 rounded font-mono group-hover:bg-primary/50 transition-colors"
                      }
                    >
                      {step.number}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold font-headline text-surface mb-2 tracking-wide uppercase">
                    {step.title}
                  </h4>
                  <p className="text-industrial-grey text-sm font-body leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality Panel */}
      <section className="py-20 px-6 lg:px-12 bg-background border-t border-b border-surface/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="md:w-1/4 flex justify-center">
            <div className="relative w-32 h-32 rounded-full border border-surface/10 flex items-center justify-center bg-graphite">
              <MaterialIcon name="policy" className="text-5xl text-industrial-grey" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full shadow-[0_0_8px_#d12027]" />
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold font-headline text-surface mb-3 tracking-wide uppercase flex items-center">
              <MaterialIcon name="gpp_maybe" className="text-primary mr-2 text-xl" /> Data Security
              &amp; Handling
            </h3>
            <p className="text-industrial-grey font-body text-sm leading-relaxed mb-4">
              We acknowledge the sensitive nature of Oil &amp; Gas infrastructure. All captured
              visual data is treated with strict confidentiality protocols. Raw footage handling,
              transfer, and storage mechanisms are designed to protect proprietary site layouts,
              operational procedures, and intellectual property.
            </p>
            <div className="text-[10px] font-mono text-industrial-grey uppercase tracking-widest border-l-2 border-primary/50 pl-3">
              NDAs executed standard prior to deployment. Dedicated offline storage available upon
              request.
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-12 bg-background relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/stitch/bd7df09f99.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto glass-panel p-12 rounded-3xl border border-surface/10 shadow-2xl">
          <MaterialIcon name="cell_tower" className="text-4xl text-primary mb-6 block" />
          <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-surface mb-6 uppercase">
            Plan an Oil &amp; Gas
            <br />
            Visual Project.
          </h2>
          <p className="text-industrial-grey font-body text-lg mb-10 max-w-xl mx-auto">
            Engage our team to discuss site parameters, documentation objectives, and deployment
            logistics for your next critical milestone.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-[#a3171e] text-white px-10 py-4 rounded-full font-headline uppercase tracking-wider text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(209,32,39,0.4)]"
          >
            Initiate Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
