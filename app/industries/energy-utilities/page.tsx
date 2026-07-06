import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"

export const metadata: Metadata = {
  title: "Energy & Utilities",
  description:
    "Drone-enabled and ground-based visual documentation for infrastructure upgrades, facility communications, internal reporting, stakeholder education, and public-facing explainers.",
}

const btnPrimary =
  "inline-flex items-center justify-center bg-primary text-white rounded-full px-8 py-3 font-bold tracking-wider uppercase text-sm transition-all duration-300 hover:bg-black hover:border-primary border-2 border-transparent"

const btnSecondary =
  "inline-flex items-center justify-center bg-transparent text-white border border-white/20 rounded-full px-8 py-3 font-bold tracking-wider uppercase text-sm transition-all duration-300 hover:bg-primary hover:border-primary"

const pillBadge =
  "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase"

const glassCard =
  "bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.06] hover:border-primary/30 hover:-translate-y-0.5"

const challengePoints = [
  {
    icon: "visibility",
    title: "Contextual Clarity",
    summary: "Translating sprawling site developments into comprehensible visual narratives.",
  },
  {
    icon: "group",
    title: "Stakeholder Alignment",
    summary: "Providing remote executives and investors with high-fidelity, reality-based updates.",
  },
]

const planningSteps = [
  { number: "01", title: "Visual Scope Definition" },
  { number: "03", title: "Capture Execution" },
  { number: "04", title: "Editorial & Review Cycles" },
]

export default function EnergyUtilitiesPage() {
  return (
    <main className="flex-grow relative">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-[-2] bg-black" />
      <div
        className="fixed inset-0 z-[-1] opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-[-1]" />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('/images/stitch/f4e4febd13.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className={`${pillBadge} mb-8`}>
              <MaterialIcon name="bolt" fill className="text-[16px]" />
              INDUSTRY — ENERGY &amp; UTILITIES
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
              Visual Storytelling for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-industrial-grey">
                Energy &amp; Utilities
              </span>{" "}
              Projects.
            </h1>
            <p className="text-xl text-industrial-grey font-light max-w-2xl mb-10 leading-relaxed">
              Drone-enabled and ground-based visual documentation for infrastructure upgrades,
              facility communications, internal reporting, stakeholder education, and
              public-facing explainers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className={`${btnPrimary} group`} href="#consultation">
                Discuss Your Project
                <MaterialIcon
                  name="arrow_forward"
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </a>
              <Link className={`${btnSecondary} group`} href="/case-studies">
                View Energy Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Communication Challenges */}
      <section className="py-24 px-6 bg-dark-ui relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Bridging the Technical Divide.
              </h2>
              <p className="text-industrial-grey mb-8 leading-relaxed">
                Visualizing complex energy infrastructure for non-technical stakeholders
                presents a unique challenge. Blueprints and technical reports fail to convey
                scale, progress, or operational context to investors, community boards, or
                executive leadership.
              </p>
              <ul className="space-y-6">
                {challengePoints.map((point) => (
                  <li key={point.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MaterialIcon name={point.icon} className="text-primary text-sm" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1">
                        {point.title}
                      </h4>
                      <p className="text-industrial-grey text-sm">{point.summary}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-2xl bg-cover bg-center border border-white/10 shadow-2xl relative z-10"
                style={{ backgroundImage: "url('/images/stitch/0e965c8246.jpg')" }}
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 blur-[50px] z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Suitable Services & 4. Sample Deliverables (Bento Grid) */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">
              Capabilities
            </span>
            <h2 className="text-4xl font-black tracking-tight">Visual Documentation Scope</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* B1: Facility Overviews */}
            <div
              className={`${glassCard} rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group md:col-span-2`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500 z-0 mix-blend-luminosity"
                style={{ backgroundImage: "url('/images/stitch/7627d789be.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
              <div className="relative z-20">
                <MaterialIcon name="landscape" className="text-primary mb-4 block text-3xl" />
                <h3 className="text-2xl font-bold mb-2">Facility Overviews</h3>
                <p className="text-industrial-grey text-sm max-w-md">
                  Comprehensive ground and drone-enabled capture establishing the scale,
                  context, and operational footprint of energy assets.
                </p>
              </div>
            </div>
            {/* B2: Executive Summaries */}
            <div className={`${glassCard} rounded-2xl p-8 flex flex-col justify-between relative group`}>
              <div className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <MaterialIcon
                  name="summarize"
                  className="group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Executive Summaries</h3>
                <p className="text-industrial-grey text-sm">
                  Concise, visually driven update films designed for C-suite and board-level
                  presentations.
                </p>
              </div>
            </div>
            {/* B3: Monthly Updates */}
            <div className={`${glassCard} rounded-2xl p-8 flex flex-col justify-between relative group`}>
              <div className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <MaterialIcon
                  name="update"
                  className="group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Progress Documentation</h3>
                <p className="text-industrial-grey text-sm">
                  Methodical, recurring visual capture tracking infrastructure upgrades over
                  time.
                </p>
              </div>
            </div>
            {/* B4: Stakeholder Films */}
            <div
              className={`${glassCard} rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group md:col-span-2`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500 z-0 mix-blend-luminosity"
                style={{ backgroundImage: "url('/images/stitch/cfcd764d9e.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
              <div className="relative z-20">
                <MaterialIcon name="movie" className="text-primary mb-4 block text-3xl" />
                <h3 className="text-2xl font-bold mb-2">Stakeholder Education Films</h3>
                <p className="text-industrial-grey text-sm max-w-md">
                  Narrative-driven visual assets explaining complex facility operations or
                  safety protocols to public and internal audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Confidentiality & Access */}
      <section className="py-24 px-6 bg-dark-ui border-y border-white/5 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className={`${pillBadge} mb-6 self-start bg-black border-white/10 text-white`}>
              <MaterialIcon name="lock" className="text-[16px] text-primary" />
              SECURE HANDLING
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Confidentiality &amp; Access Control.
            </h2>
            <p className="text-industrial-grey mb-8 leading-relaxed">
              We recognize the sensitive nature of critical energy infrastructure. All visual
              documentation undergoes strict data handling protocols.
            </p>
            <div className="glass-panel p-6 rounded-xl border-l-2 border-l-primary">
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Gated Delivery</h4>
              <p className="text-industrial-grey text-sm">
                Final deliverables for sensitive projects are hosted via secure,
                password-protected portals or delivered directly via encrypted cold storage,
                ensuring proprietary operational visuals remain controlled.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            {/* Faux UI Interface */}
            <div className={`${glassCard} rounded-2xl overflow-hidden border border-white/10 shadow-2xl`}>
              <div className="bg-black px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <span className="text-xs font-mono text-industrial-grey">asset_vault_v2.1</span>
              </div>
              <div className="p-8 bg-dark-ui flex flex-col items-center justify-center text-center min-h-[300px]">
                <MaterialIcon
                  name="lock_person"
                  className="text-5xl text-industrial-grey mb-4"
                />
                <h3 className="font-bold text-lg mb-2">Confidential Asset Request</h3>
                <p className="text-xs text-industrial-grey max-w-xs mb-6">
                  This video asset requires authorized clearance. Access requests are logged
                  and monitored.
                </p>
                <div className="w-full max-w-sm space-y-3">
                  <div className="h-10 w-full bg-black border border-white/10 rounded-md flex items-center px-4">
                    <span className="text-xs text-industrial-grey font-mono">
                      corporate_id / clearance_level
                    </span>
                  </div>
                  <RequestAccessTrigger
                    defaultVideo="Energy & Utilities Confidential Asset"
                    className="w-full h-10 bg-[#111111] hover:bg-primary transition-colors text-xs font-bold uppercase tracking-widest rounded-md border border-white/10"
                  >
                    Request Clearance
                  </RequestAccessTrigger>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Project Planning Checklist */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Site-Aware Planning Methodology.
            </h2>
            <p className="text-industrial-grey">
              A methodical approach to visual scope definition within operational utility
              environments.
            </p>
          </div>
          <div className="space-y-4">
            {/* Accordion Items (Visual only) */}
            <div className="glass-panel rounded-xl p-6 hover:border-primary/50 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-mono font-bold">
                    {planningSteps[0].number}
                  </span>
                  <h4 className="font-bold">{planningSteps[0].title}</h4>
                </div>
                <MaterialIcon
                  name="add"
                  className="text-industrial-grey group-hover:text-primary transition-colors"
                />
              </div>
            </div>
            <div className="glass-panel rounded-xl p-6 border-primary/50 bg-dark-ui">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-mono font-bold">02</span>
                  <h4 className="font-bold">Safety &amp; Site Coordination</h4>
                </div>
                <MaterialIcon name="remove" className="text-primary" />
              </div>
              <div className="pl-10 text-sm text-industrial-grey">
                <p>
                  Prior to mobilization, we align with site HSE managers to review operational
                  parameters, required PPE, restricted zones, and permitting for ground and
                  drone-enabled capture.
                </p>
              </div>
            </div>
            {planningSteps.slice(1).map((step) => (
              <div
                key={step.number}
                className="glass-panel rounded-xl p-6 hover:border-primary/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-mono font-bold">{step.number}</span>
                    <h4 className="font-bold">{step.title}</h4>
                  </div>
                  <MaterialIcon
                    name="add"
                    className="text-industrial-grey group-hover:text-primary transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden" id="consultation">
        <div className="absolute inset-0 z-[-1]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/stitch/c0ed110475.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">
            Show energy infrastructure <br />
            <span className="text-primary">with clarity.</span>
          </h2>
          <p className="text-industrial-grey mb-10 max-w-xl mx-auto">
            Limited onboarding capacity available for upcoming site documentation projects.
            Secure your production schedule.
          </p>
          <Link
            className={`${btnPrimary} text-lg px-12 py-4 shadow-[0_0_40px_rgba(209,32,39,0.3)] hover:shadow-[0_0_60px_rgba(209,32,39,0.5)]`}
            href="/contact"
          >
            Initiate Project Discussion
          </Link>
        </div>
      </section>
    </main>
  )
}
