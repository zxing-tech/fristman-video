import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

export const metadata: Metadata = {
  title: "Fabrication & Construction",
  description:
    "Providing stakeholders with high-fidelity visual intelligence across complex asset lifecycles in heavy industry and fabrication environments.",
}

const useCases = [
  {
    icon: "update",
    watermarkIcon: "trending_up",
    title: "Progress Updates",
    summary:
      "Regularly scheduled visual status captures providing high-fidelity overviews of fabrication development across expansive site layouts.",
    wide: true,
    footer: "log" as const,
  },
  {
    icon: "event_available",
    title: "Milestone Reels",
    summary: "Cinematic documentation of key fabrication events and critical path achievements.",
    wide: false,
  },
  {
    icon: "location_city",
    title: "Facility Overview",
    summary: "Large-scale cinematic maps highlighting logistics, material staging, and yard optimization.",
    wide: false,
  },
  {
    icon: "assignment_turned_in",
    watermarkIcon: "inventory",
    title: "Handover Visuals",
    summary:
      "Comprehensive visual packages documenting the final state of the asset prior to logistics and offshore mobilization.",
    wide: true,
    footer: "tags" as const,
  },
]

const capabilityPoints = [
  "Non-intrusive flight protocols for active site safety.",
  "High-altitude site mapping for yard logistics.",
  "Internal structural visual recording.",
]

const timelinePhases = [
  {
    number: "01",
    label: "Foundation Phase",
    title: "Ground Prep & Layout",
    summary:
      "Visual documentation of site clearance, foundation pouring, and initial structural layout benchmarks.",
    highlighted: false,
  },
  {
    number: "02",
    label: "Structural Assembly",
    title: "Module Assembly",
    summary:
      "Capture of major structural welds, module integration, and heavy lift operations within the yard.",
    highlighted: true,
  },
  {
    number: "03",
    label: "Load-out Ready",
    title: "Transport Prep",
    summary:
      "Final state documentation of completed modules prior to barge loading and site departure.",
    highlighted: false,
  },
]

const deliverables = [
  {
    image: "/images/stitch/45d5da2306.jpg",
    title: "Monthly Update Films",
    summary:
      "Concise 3-minute cinematic summaries of project development, formatted for board-level reporting.",
    icon: "video_file",
    tag: "4K Deliverable Format",
  },
  {
    image: "/images/stitch/e642092e00.jpg",
    title: "Milestone Reels",
    summary:
      "Visual records of specific high-value events such as major lifts, module integrations, or sea trials.",
    icon: "history",
    tag: "Archive Ready",
  },
  {
    image: "/images/stitch/30e1700716.jpg",
    title: "High-Res Still Packs",
    summary:
      "Professional high-resolution photography asset packs for internal site documentation and PR usage.",
    icon: "photo_library",
    tag: "Batch Delivery",
  },
]

export default function FabricationConstructionPage() {
  return (
    <div className="bg-background text-surface">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div
            className="w-full h-full bg-cover bg-center scale-105"
            style={{ backgroundImage: "url('/images/stitch/5a6f7e1cb2.jpg')" }}
          />
          {/* Technical Overlay HUD */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-40">
            <div className="absolute top-1/4 left-10 w-32 h-32 border-l border-t border-primary/50" />
            <div className="absolute bottom-1/4 right-10 w-32 h-32 border-r border-b border-primary/50" />
            <div className="scanning-line" />
          </div>
        </div>
        <div className="relative z-30 text-center max-w-5xl px-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 px-4 py-1 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Industry Sector: Construction
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter mb-6 leading-tight text-white">
            Visual Documentation for <br />
            <span className="text-primary">Fabrication & Construction</span> Progress
          </h1>
          <p className="text-industrial-grey text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Providing stakeholders with high-fidelity visual intelligence across complex asset
            lifecycles in heavy industry and fabrication environments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/case-studies"
              className="bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#b01b21] transition-all duration-300 shadow-lg shadow-primary/20 flex items-center group"
            >
              View Sector Portfolio
              <MaterialIcon
                name="arrow_forward"
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="#capabilities"
              className="glass-panel text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300 border border-white/20"
            >
              Industry Capabilities
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce opacity-50">
          <MaterialIcon name="keyboard_double_arrow_down" className="text-3xl text-white" />
        </div>
      </section>

      {/* Section 1: Challenges */}
      <section className="py-24 bg-dark-ui relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-[12rem] font-black text-surface/[0.02] select-none pointer-events-none uppercase">
              Gap
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              The Communication Gap in <br />
              <span className="text-primary">Large-Scale Fabrication</span>
            </h2>
            <div className="space-y-6 text-industrial-grey text-lg leading-relaxed">
              <p>
                In the complex landscape of industrial construction, project ambiguity often stems
                from a lack of visual synchronization between the fabrication floor and remote
                stakeholders.
              </p>
              <p>
                Massive fabrication yards present unique visibility challenges, where static
                reports fail to convey the true scale and momentum of project timelines. This
                information deficit can lead to stakeholder misalignment and critical delays in
                decision-making.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
            <div className="relative glass-panel bg-black rounded-2xl overflow-hidden aspect-video border border-surface/5">
              <div
                className="w-full h-full bg-cover bg-center opacity-70"
                style={{ backgroundImage: "url('/images/stitch/01a51b489a.jpg')" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <MaterialIcon name="play_arrow" className="text-4xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bento Grid Strategic Use Cases */}
      <section id="capabilities" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">
              Strategic Visual Use Cases
            </h2>
            <p className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
              Intelligent Progress Visuals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className={`${
                  useCase.wide ? "md:col-span-2 " : ""
                }glass-panel rounded-2xl p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-500`}
              >
                {useCase.watermarkIcon ? (
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <MaterialIcon name={useCase.watermarkIcon} className="text-8xl" />
                  </div>
                ) : null}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <MaterialIcon
                        name={useCase.icon}
                        className="text-primary group-hover:text-white"
                      />
                    </div>
                    <h3
                      className={
                        useCase.wide
                          ? "text-2xl font-bold uppercase mb-4"
                          : "text-xl font-bold uppercase mb-2"
                      }
                    >
                      {useCase.title}
                    </h3>
                    <p
                      className={
                        useCase.wide
                          ? "text-industrial-grey max-w-md"
                          : "text-industrial-grey text-sm"
                      }
                    >
                      {useCase.summary}
                    </p>
                  </div>
                  {useCase.footer === "log" ? (
                    <div className="text-xs font-mono text-primary tracking-widest uppercase">
                      SYST_LOG: PROGRESS_CAPTURE_ACTIVE
                    </div>
                  ) : null}
                  {useCase.footer === "tags" ? (
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-surface/5 rounded text-[10px] uppercase font-bold tracking-tighter">
                        Secure Link
                      </span>
                      <span className="px-2 py-1 bg-surface/5 rounded text-[10px] uppercase font-bold tracking-tighter">
                        Client Portal
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Recommended Services */}
      <section className="py-24 bg-graphite border-y border-surface/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <div
                className="w-full aspect-square rounded-3xl bg-cover bg-center border border-surface/10 shadow-2xl relative overflow-hidden group"
                style={{ backgroundImage: "url('/images/stitch/d35bd35b17.jpg')" }}
              >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl">
                  <p className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-1">
                    Visual Tracking Tech
                  </p>
                  <p className="text-sm font-bold uppercase">Multi-Platform Documentation Core</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">
                Featured Capability
              </h2>
              <h3 className="text-4xl font-bold tracking-tighter uppercase mb-6">
                Internal Progress Monitoring
              </h3>
              <p className="text-industrial-grey text-lg mb-8 leading-relaxed">
                Utilizing advanced drone-enabled visual documentation workflows, we provide project
                managers with an &quot;unblinking eye&quot; on the fabrication floor. Our specialists
                navigate complex structural environments to capture visual evidence of assembly
                milestones without disrupting site activities.
              </p>
              <ul className="space-y-4 mb-10">
                {capabilityPoints.map((point) => (
                  <li key={point} className="flex items-start space-x-4">
                    <div className="mt-1 w-5 h-5 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-surface font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-surface text-background px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all duration-300"
              >
                Discuss Site Integration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Visual Lifecycle Tracking (Timeline) */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
              Visual Lifecycle Tracking
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-surface/10 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {timelinePhases.map((phase) => (
                <div key={phase.number} className="relative group">
                  <div className="absolute -top-12 left-0 text-6xl font-black text-surface/5 select-none transition-all group-hover:text-primary/10">
                    {phase.number}
                  </div>
                  <div className="md:pt-16">
                    <div className="w-4 h-4 rounded-full bg-background border-2 border-primary absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                    </div>
                    <div
                      className={`glass-panel p-6 rounded-2xl hover:bg-graphite transition-colors${
                        phase.highlighted ? " border-primary/20" : ""
                      }`}
                    >
                      <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">
                        {phase.label}
                      </h4>
                      <h3 className="text-xl font-bold uppercase mb-4">{phase.title}</h3>
                      <p className="text-industrial-grey text-sm">{phase.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Precision Deliverables */}
      <section className="py-24 bg-dark-ui">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">
                Output Excellence
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">
                Precision Deliverables
              </h3>
            </div>
            <div className="hidden md:block">
              <p className="text-industrial-grey max-w-xs text-right text-sm">
                Custom visual packages tailored for internal engineering review and external
                stakeholder reporting.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliverables.map((deliverable) => (
              <div
                key={deliverable.title}
                className="glass-panel rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-48 relative overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${deliverable.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold uppercase mb-4">{deliverable.title}</h4>
                  <p className="text-industrial-grey text-sm mb-6">{deliverable.summary}</p>
                  <div className="flex items-center text-primary font-bold uppercase tracking-widest text-[10px]">
                    <MaterialIcon name={deliverable.icon} className="mr-2 text-sm" />
                    {deliverable.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Confidentiality */}
      <section className="py-24 bg-background border-t border-surface/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 text-center md:text-left">
                <div className="w-24 h-24 rounded-full bg-graphite border border-primary/30 flex items-center justify-center mx-auto md:mx-0 mb-8">
                  <MaterialIcon name="lock" fill className="text-5xl text-primary" />
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">
                  Confidentiality & Data Security
                </h2>
                <div className="flex justify-center md:justify-start space-x-2 mb-6">
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-[10px] font-mono text-industrial-grey uppercase tracking-widest">
                    Secure Server Online
                  </span>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-industrial-grey text-lg leading-relaxed mb-8">
                  We understand the sensitive nature of industrial assets and proprietary
                  fabrication techniques. Our data handling workflow ensures all visual materials
                  are processed through encrypted channels and hosted on gated, password-protected
                  client portals. Access is strictly audited to maintain project integrity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 bg-surface/5 p-4 rounded-xl border border-surface/5">
                    <MaterialIcon name="verified_user" className="text-primary" />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      NDA Compliance
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 bg-surface/5 p-4 rounded-xl border border-surface/5">
                    <MaterialIcon name="encrypted" className="text-primary" />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      AES-256 Encryption
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-background relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-10">
            Capture the next <br />
            <span className="text-primary">project milestone</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#b01b21] transition-all duration-300 active:scale-95 shadow-xl shadow-primary/30"
            >
              Request Credentials
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-surface/20 text-surface px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-surface hover:text-background transition-all duration-300"
            >
              Direct Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
