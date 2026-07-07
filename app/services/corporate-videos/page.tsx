import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { SectionLabel } from "@/components/site/section-label"

export const metadata: Metadata = {
  title: "Corporate Videos",
  description:
    "Capture the scale, complexity and operational story of large industrial environments with cinematic UAV and ground-based corporate video production.",
}

const audiences = [
  {
    icon: "engineering",
    title: "Project Managers",
    body: "Document critical milestones, verify structural integrity, and provide high-fidelity visual reports for engineering review.",
  },
  {
    icon: "campaign",
    title: "Corporate Comms",
    body: "Elevate brand perception with premium visual assets that communicate scale, safety, and operational excellence to the market.",
  },
  {
    icon: "groups",
    title: "HR & Training",
    body: "Develop realistic site orientation materials and safety protocol demonstrations using actual facility footage.",
  },
  {
    icon: "handshake",
    title: "JV Stakeholders",
    body: "Provide transparent, high-impact visual updates on joint venture progress and capital expenditure utilization.",
  },
]

const useCases = [
  {
    image: "/images/stitch/9ef2719993.jpg",
    title: "Fabrication Yard Overview",
    body: "Comprehensive documentation of yard capabilities and layout.",
  },
  {
    image: "/images/stitch/df312360c8.jpg",
    title: "Offshore Module Lifecycle",
    body: "From construction phase to final load-out and installation.",
  },
  {
    image: "/images/stitch/2c0f0ecbd8.jpg",
    title: "Refinery Overview",
    body: "Detailed mapping of operational zones and critical infrastructure.",
  },
]

export default function CorporateVideosPage() {
  return (
    <main>
      {/* Breadcrumbs */}
      <div className="max-w-[1280px] mx-auto px-8 pt-28 flex items-center gap-2 text-xs font-label uppercase tracking-widest text-industrial-grey">
        <Link className="hover:text-surface transition-colors" href="/">
          Home
        </Link>
        <MaterialIcon name="chevron_right" className="text-[14px]" />
        <Link className="hover:text-surface transition-colors" href="/services">
          Services
        </Link>
        <MaterialIcon name="chevron_right" className="text-[14px]" />
        <span className="text-surface font-bold">Corporate Videos</span>
      </div>

      {/* Hero Section */}
      <header className="relative w-full min-h-[819px] flex items-center justify-center mt-8 px-4 overflow-hidden bg-black">
        {/* Background Image with FUI Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full absolute inset-0"
            style={{ backgroundImage: "url('/images/stitch/57734f86d7.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(209,32,39,0.05) 1px, transparent 1px), linear-gradient(rgba(209,32,39,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="scanning-line top-0 left-0 pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 md:px-8 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/50 bg-black/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-white">
              Service Protocol Active
            </span>
          </div>
          <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter text-white mb-6 max-w-4xl">
            CORPORATE
            <br />
            <span className="text-gradient">VIDEOS</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed border-l-2 border-primary pl-6 py-2">
            Capture the scale, complexity and operational story of large
            industrial environments with cinematic UAV and ground-based
            production.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="group inline-flex items-center justify-center gap-3 bg-primary text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-black hover:shadow-[0_0_20px_rgba(209,32,39,0.4)] transition-all duration-300"
              href="/contact"
            >
              Discuss Your Production
              <MaterialIcon
                name="arrow_forward"
                className="text-[18px] group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              className="group inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
              href="#"
            >
              View Workflow
              <MaterialIcon name="account_tree" className="text-[18px]" />
            </a>
          </div>
        </div>
      </header>

      {/* Target Audience Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl tracking-tight text-surface mb-4">
              Strategic Applications
            </h2>
            <p className="font-body text-industrial-grey max-w-xl">
              Tailored cinematic assets designed for specific stakeholder
              requirements and operational objectives.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="glass-panel p-8 rounded-2xl group hover:border-primary transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-surface/10 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                <MaterialIcon
                  name={audience.icon}
                  className="text-surface text-2xl [font-variation-settings:'FILL'_0] group-hover:[font-variation-settings:'FILL'_1] group-hover:text-primary [transition:font-variation-settings_0.3s_ease,color_0.3s_ease]"
                />
              </div>
              <h3 className="font-headline font-bold text-lg text-surface mb-3 tracking-wide">
                {audience.title}
              </h3>
              <p className="font-body text-sm text-industrial-grey leading-relaxed">
                {audience.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-graphite relative border-y border-surface/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <SectionLabel className="mb-2 block">
              Deployment Scenarios
            </SectionLabel>
            <h2 className="font-headline font-bold text-3xl md:text-5xl tracking-tight text-surface">
              Facility Overviews
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-black border border-white/10"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                  style={{ backgroundImage: `url('${useCase.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <MaterialIcon name="add" className="text-white text-sm" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="font-body text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {useCase.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
