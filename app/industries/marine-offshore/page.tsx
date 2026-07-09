import type { Metadata } from "next"

import { MaterialIcon } from "@/components/site/material-icon"

import { MarineBriefForm } from "./brief-form"

export const metadata: Metadata = {
  title: "Marine & Offshore",
  description:
    "High-fidelity drone capture and industrial cinematography for offshore assets, vessels, and fabrication yards. Providing stakeholders with premium visual records of operational milestones.",
}

const environments = [
  {
    icon: "directions_boat",
    title: "Vessels & Marine Assets",
    description:
      "Dynamic visual capture of underway operations, specialized maritime transport, and port maneuvers.",
  },
  {
    icon: "oil_barrel",
    title: "Offshore Installations",
    description:
      "Aerial and ground-based documentation of rigs, platforms, and FPSOs in challenging environmental conditions.",
  },
  {
    icon: "precision_manufacturing",
    title: "Fabrication Yards",
    description:
      "Progress monitoring films for large-scale maritime construction and pre-commissioning phases.",
  },
]

const capabilities = [
  {
    icon: "landscape",
    title: "Facility Overviews",
    description:
      "Comprehensive drone cinematography capturing the full scale and layout of maritime installations and operational footprints.",
  },
  {
    icon: "slow_motion_video",
    title: "Aerial Walkthroughs",
    description:
      "Dynamic, single-take indoor/outdoor cinematic flights providing spatial context of vessel interiors and complex topside structures.",
  },
  {
    icon: "movie",
    title: "Stakeholder Films",
    description:
      "Premium narrative video production combining operational footage, interviews, and motion graphics for corporate reporting.",
  },
  {
    icon: "photo_camera",
    title: "Industrial Photography",
    description:
      "High-resolution stills capturing personnel, machinery, and grand-scale operations for press kits and technical documentation.",
  },
]

const glassCardClass =
  "bg-surface/5 backdrop-blur-xl border border-surface/10 transition-all duration-300 hover:bg-surface/[0.08] hover:border-primary/40"

export default function MarineOffshorePage() {
  return (
    <main className="flex-grow w-full">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center justify-center overflow-hidden w-full pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-dark-ui">
          <div className="absolute inset-0 bg-black z-[-10]" />
          <div
            aria-label="Imposing offshore oil rig rising from dark waters against a stormy sky"
            className="w-full h-full bg-cover bg-center opacity-90 dark:opacity-40"
            role="img"
            style={{ backgroundImage: "url('/images/stitch/4d64dd70b0.jpg')" }}
          />
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>
        {/* HUD Elements */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-30"
          style={{
            background:
              "linear-gradient(rgba(209, 32, 39, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(209, 32, 39, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Crosshairs */}
        <div className="absolute top-1/4 left-[10%] w-8 h-8 border-l border-t border-primary/50 pointer-events-none hidden md:block" />
        <div className="absolute bottom-1/4 right-[10%] w-8 h-8 border-r border-b border-primary/50 pointer-events-none hidden md:block" />
        <div className="relative z-20 max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center text-center mt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Operational Area: Marine & Offshore
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-white leading-[1.1] mb-6 max-w-4xl drop-shadow-2xl">
            Cinematic Visual Documentation
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-industrial-grey">
              For Heavy Operations
            </span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl font-light mb-10">
            High-fidelity drone capture and industrial cinematography for offshore
            assets, vessels, and fabrication yards. Providing stakeholders with premium
            visual records of operational milestones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              className="bg-primary text-white rounded-full hover:bg-[#9a161b] transition-all duration-300 px-8 py-4 font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(209,32,39,0.3)]"
              href="#discuss"
            >
              Discuss a Visual Brief
              <MaterialIcon
                name="arrow_forward"
                className="text-[20px] group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              className="bg-transparent text-white border border-white/30 rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300 px-8 py-4 font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2 backdrop-blur-sm"
              href="#services"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll to view</span>
          <span className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Context Section */}
      <section className="py-24 relative bg-background w-full border-t border-surface/5">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                Environments Captured
              </h2>
              <div className="w-16 h-1 bg-primary mb-8" />
              <p className="text-industrial-grey mb-8 leading-relaxed">
                We deploy specialized visual documentation teams to complex maritime
                environments. Our focus is delivering cinematic-quality footage that
                accurately captures the scale and reality of your operations, without
                interfering with ongoing work.
              </p>
              <ul className="space-y-6">
                {environments.map((item) => (
                  <li className="flex items-start gap-4" key={item.title}>
                    <div className="mt-1 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 shrink-0">
                      <MaterialIcon name={item.icon} className="text-primary text-sm" />
                    </div>
                    <div>
                      <h3 className="font-bold uppercase tracking-wider text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-industrial-grey text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden border border-surface/10 group">
              <div
                aria-label="Offshore fabrication yard at dusk with massive steel platform components under dramatic industrial lighting"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                role="img"
                style={{ backgroundImage: "url('/images/stitch/2c4e1b2f45.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              {/* Decorative UI overlay */}
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-surface/10 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-industrial-grey font-mono flex items-center gap-2">
                <MaterialIcon name="videocam" className="text-[14px]" />
                REC
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid Section */}
      <section
        className="py-24 relative bg-graphite w-full border-t border-surface/5"
        id="services"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
              Core Documentation Capabilities
            </h2>
            <p className="text-industrial-grey max-w-2xl mx-auto">
              High-fidelity visual records supporting stakeholder communication,
              investor relations, and project milestone documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((card) => (
              <div
                className={`${glassCardClass} p-8 rounded-xl flex flex-col h-full group cursor-pointer relative overflow-hidden`}
                key={card.title}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 mb-6 border border-surface/20 rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
                  <MaterialIcon
                    name={card.icon}
                    className="text-surface/70 text-2xl transition-colors group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                  />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide mb-3">
                  {card.title}
                </h3>
                <p className="text-industrial-grey text-sm flex-grow">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Planning Section (Bento Grid) */}
      <section className="py-24 relative bg-background w-full border-t border-surface/5">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            {/* Planning Card (Spans 2 columns on lg) */}
            <div
              className={`lg:col-span-2 ${glassCardClass} rounded-2xl p-8 md:p-12 relative overflow-hidden group`}
            >
              <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <MaterialIcon name="map" className="text-primary text-3xl" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight">
                    Deployment & Planning
                  </h3>
                </div>
                <p className="text-industrial-grey mb-8 max-w-xl">
                  Offshore visual capture requires rigorous logistical preparation. We
                  coordinate directly with maritime project managers to align our
                  documentation efforts with operational schedules.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border-l border-surface/10 pl-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-surface mb-2">
                      Access & Clearances
                    </h4>
                    <p className="text-xs text-industrial-grey">
                      Coordination for permit-to-work systems, facility inductions, and
                      site-specific access protocols.
                    </p>
                  </div>
                  <div className="border-l border-surface/10 pl-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-surface mb-2">
                      Weather Windows
                    </h4>
                    <p className="text-xs text-industrial-grey">
                      Strategic scheduling leveraging marine forecasts to ensure optimal
                      conditions for cinematic aerial capture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Security Card */}
            <div
              className={`lg:col-span-1 ${glassCardClass} rounded-2xl p-8 relative overflow-hidden flex flex-col justify-center items-center text-center group border-primary/20`}
            >
              {/* Red scanning line effect just for this card */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/50 shadow-[0_0_8px_rgba(209,32,39,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-[scan-vertical_3s_ease-in-out_infinite]" />
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <MaterialIcon name="lock" fill className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">
                Asset Confidentiality
              </h3>
              <p className="text-industrial-grey text-sm mb-6">
                Strict protocols for handling sensitive visual data from secure offshore
                installations.
              </p>
              <div className="w-full bg-background/50 border border-surface/10 rounded px-4 py-2 text-xs text-left">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-surface/70 uppercase tracking-wider font-mono">
                    Status:
                  </span>
                  <span className="text-primary font-mono uppercase tracking-widest">
                    Gated
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-surface/70 uppercase tracking-wider font-mono">
                    Protocol:
                  </span>
                  <span className="text-surface font-mono">Encrypted Transfer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-32 relative bg-dark-ui w-full border-t border-surface/5 overflow-hidden"
        id="discuss"
      >
        {/* Background element */}
        <div className="absolute inset-0 z-0">
          <div
            aria-label="Dark abstract bokeh lights from industrial machinery in deep red and grey tones"
            className="w-full h-full bg-cover bg-center opacity-20"
            role="img"
            style={{ backgroundImage: "url('/images/stitch/d1a6bc1c05.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto px-6 w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            Ready to Document
            <br />
            Your Next Milestone?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Initiate a conversation regarding location logistics, visual requirements,
            and deployment availability for your marine or offshore asset.
          </p>
          <MarineBriefForm />
        </div>
      </section>
    </main>
  )
}
