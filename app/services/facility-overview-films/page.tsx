import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"

export const metadata: Metadata = {
  title: "Facility Overview Films",
  description:
    "Drone-enabled aerial and ground cinematography that helps industrial teams explain scale, layout, access points and project context to stakeholders.",
}

const designedFor = [
  { icon: "factory", label: "Oil & Gas" },
  { icon: "electric_bolt", label: "Energy Sector" },
  { icon: "directions_boat", label: "Marine / Offshore" },
  { icon: "construction", label: "Fabrication Yards" },
]

const focusAreas = [
  {
    icon: "flight_takeoff",
    title: "Aerial Establishing",
    description:
      "Drone-enabled capture providing macro-level context of site scale and surrounding topography.",
  },
  {
    icon: "directions_walk",
    title: "Ground Walk-Throughs",
    description:
      "Stable, cinematic movement through operational areas to demonstrate internal logistics.",
  },
  {
    icon: "hub",
    title: "Process Context",
    description:
      "Visualizing the flow of materials or operations across complex industrial environments.",
  },
  {
    icon: "verified_user",
    title: "Site-Aware Capture",
    description:
      "Safety-conscious production planning emphasizing secure access and non-disruptive execution.",
  },
]

const deliverables = [
  { icon: "movie", label: "Hero Cinematic Film" },
  { icon: "dynamic_feed", label: "Short Social Cutdowns" },
  { icon: "image", label: "High-Res Still Frames" },
  { icon: "lock", label: "Private Review Link" },
  { icon: "groups", label: "Stakeholder Version" },
]

const workflowSteps = [
  {
    number: "01",
    title: "Brief & Objectives",
    description:
      "Aligning on required assets, target audience, and key visual messaging priorities.",
    active: true,
  },
  {
    number: "02",
    title: "Site Planning",
    description:
      "Reviewing site access, evaluating safety constraints, and scheduling industrial visual documentation.",
    active: false,
  },
  {
    number: "03",
    title: "Capture",
    description:
      "Execution of drone-enabled capture and ground cinematography with minimal operational footprint.",
    active: false,
  },
  {
    number: "04",
    title: "Edit & Delivery",
    description:
      "Post-production formatting, color grading, and secure delivery of finalized assets.",
    active: false,
  },
]

export default function FacilityOverviewFilmsPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="relative w-full h-[614px] min-h-[500px] rounded-[24px] overflow-hidden group">
          {/* Background Image */}
          <div
            aria-label="Aerial view of an industrial oil refinery illuminated at dusk"
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            role="img"
            style={{ backgroundImage: "url('/images/stitch/adeec90ad4.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-ui via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
          {/* HUD Elements */}
          <div className="absolute top-8 left-8 w-16 h-px bg-white/30 hidden md:block" />
          <div className="absolute top-8 left-8 w-px h-16 bg-white/30 hidden md:block" />
          <div className="absolute bottom-8 right-8 w-16 h-px bg-primary hidden md:block" />
          <div className="absolute bottom-8 right-8 w-px h-16 bg-primary hidden md:block" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <div className="flex items-center gap-3 mb-4">
              <MaterialIcon name="videocam" fill className="text-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-xs">
                Capability
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 max-w-4xl leading-tight">
              Facility Overview Films <br />
              <span className="text-white/60">for Industrial Sites</span>
            </h1>
            <p className="text-lg md:text-xl text-industrial-grey max-w-2xl mb-8 leading-relaxed font-light">
              Drone-enabled aerial and ground cinematography that helps industrial teams
              explain scale, layout, access points and project context to stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <RequestAccessTrigger
                defaultVideo="Facility Overview Films Portfolio"
                className="flex items-center gap-2 bg-primary hover:bg-[#a0181e] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(209,32,39,0.4)]"
              >
                <MaterialIcon name="lock" fill />
                Request Access to Portfolio
              </RequestAccessTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* Context & Application */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2 border-l-2 border-primary pl-4">
              Application
            </h2>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
              Designed For
            </h3>
            <ul className="space-y-4">
              {designedFor.map((item) => (
                <li
                  key={item.label}
                  className="glass-panel rounded-xl p-4 flex items-center gap-4 border border-white/5 group cursor-default transition-colors hover:border-white/20"
                >
                  <MaterialIcon
                    name={item.icon}
                    className="text-white/50 transition-colors group-hover:text-primary"
                  />
                  <span className="font-bold tracking-tight">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-[24px] p-8 md:p-12 h-full flex flex-col justify-center">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2 border-l-2 border-primary pl-4">
                Focus Areas
              </h2>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-8">
                What Gets Captured
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {focusAreas.map((area) => (
                  <div className="group" key={area.title}>
                    <div className="flex items-center gap-3 mb-3 text-white group-hover:text-primary transition-colors">
                      <MaterialIcon name={area.icon} />
                      <h4 className="font-bold uppercase tracking-wider text-sm">{area.title}</h4>
                    </div>
                    <p className="text-industrial-grey text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Workflow Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-12 text-center">
          Output & Execution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Deliverables Card */}
          <div className="md:col-span-1 glass-panel rounded-[24px] p-8 flex flex-col border-t-2 border-t-primary/50">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
              <MaterialIcon name="folder_open" fill className="text-lg" />
              Deliverables
            </h3>
            <ul className="space-y-4 flex-grow text-sm">
              {deliverables.map((item) => (
                <li className="flex items-start gap-3" key={item.label}>
                  <MaterialIcon name={item.icon} className="text-white/40 text-base mt-0.5" />
                  <span className="text-white/90 font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Workflow Card */}
          <div className="md:col-span-2 glass-panel rounded-[24px] p-8 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-2">
              <MaterialIcon name="route" fill className="text-lg" />
              Production Workflow
            </h3>
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-white/10 hidden sm:block" />
              <div className="space-y-6">
                {workflowSteps.map((step) => (
                  <div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative z-10"
                    key={step.number}
                  >
                    <div
                      className={
                        step.active
                          ? "w-8 h-8 rounded-full bg-graphite border border-primary flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs z-10"
                          : "w-8 h-8 rounded-full bg-graphite border border-white/20 flex items-center justify-center flex-shrink-0 text-white/50 font-bold text-xs z-10 group-hover:border-primary group-hover:text-primary transition-colors"
                      }
                    >
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase text-sm mb-1">{step.title}</h4>
                      <p className="text-industrial-grey text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-6 text-xs text-industrial-grey uppercase tracking-widest font-bold">
          <span className="flex items-center gap-1">
            <MaterialIcon name="info" className="text-[14px]" /> Confirm site permissions
          </span>
          <span className="flex items-center gap-1">
            <MaterialIcon name="badge" className="text-[14px]" /> Credentials available upon
            request
          </span>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center py-16">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-6">
          Need a clearer view of your facility?
        </h2>
        <p className="text-industrial-grey mb-8 max-w-xl mx-auto">
          Discuss your specific project requirements and site constraints with our production
          team.
        </p>
        <Link
          className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-white hover:bg-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all group"
          href="/contact"
        >
          Discuss Your Production
          <MaterialIcon
            name="arrow_forward"
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </section>
    </div>
  )
}
