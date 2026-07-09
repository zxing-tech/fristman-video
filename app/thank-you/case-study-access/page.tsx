import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

export const metadata: Metadata = {
  title: "Thank You — Access Request Received",
  description:
    "Your request for restricted industrial cinematography documentation has been logged. Our security protocols require manual verification for site-sensitive footage.",
}

const steps = [
  {
    icon: "fact_check",
    title: "Step 1: Request Verification",
    body: "Our team is reviewing the project context and company credentials provided to ensure industry relevance.",
  },
  {
    icon: "policy",
    title: "Step 2: Protocol Check",
    body: "Validation against client-specific NDAs and site-safety protocols to confirm clearance for external viewing.",
  },
  {
    icon: "key",
    title: "Step 3: Access Delivery",
    body: "A secure, encrypted link will be dispatched to your corporate email once clearance is finalized.",
  },
]

export default function ThankYouCaseStudyAccessPage() {
  return (
    <main className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Asset */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      <div className="container mx-auto px-6 relative z-10 max-w-[1280px]">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-16">
          <div className="relative w-24 h-24 mb-8 flex items-center justify-center rounded-full border border-primary/30 bg-primary/5 group transition-all duration-500 hover:border-primary overflow-hidden">
            <MaterialIcon name="lock_open" fill className="text-5xl text-primary" />
          </div>
          <p className="text-primary font-bold tracking-[0.3em] text-sm mb-4">
            /CASE-STUDIES/REQUEST-ACCESS/THANK-YOU
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6 leading-none">
            Access Request <span className="text-primary">Received</span>
          </h1>
          <p className="text-industrial-grey max-w-2xl text-lg font-light leading-relaxed">
            Your request for restricted industrial cinematography documentation has been logged.
            Our security protocols require manual verification for site-sensitive footage.
          </p>
        </section>
        {/* Request Summary & Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Request Summary Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden border-l-4 border-l-primary">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-xs font-bold tracking-widest text-industrial-grey uppercase mb-1">
                    Status Report
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-surface font-bold uppercase tracking-tight">
                      Under Review
                    </span>
                  </div>
                </div>
                <MaterialIcon name="verified_user" className="text-industrial-grey" />
              </div>
              <div className="space-y-6">
                <div className="border-b border-surface/5 pb-4">
                  <p className="block text-[10px] font-bold text-primary tracking-widest uppercase mb-1">
                    Resource Requested
                  </p>
                  <p className="text-surface font-semibold">
                    Offshore Fabrication Yard - Drone Workflow 2024
                  </p>
                </div>
                <div className="border-b border-surface/5 pb-4">
                  <p className="block text-[10px] font-bold text-primary tracking-widest uppercase mb-1">
                    Organization Identity
                  </p>
                  <p className="text-surface font-semibold">Corporate Partner / Prospect</p>
                </div>
                <div>
                  <p className="block text-[10px] font-bold text-primary tracking-widest uppercase mb-1">
                    Internal Reference
                  </p>
                  <p className="text-surface font-mono text-sm">FMV-AUTH-00982-X</p>
                </div>
              </div>
            </div>
          </div>
          {/* Process Timeline */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <h3 className="text-sm font-bold tracking-[0.4em] uppercase text-surface mb-8 border-l-2 border-primary pl-4">
              Authorization Sequence
            </h3>
            <div className="space-y-12 relative">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-surface/10" />
              {steps.map((step) => (
                <div key={step.title} className="relative flex items-start gap-8 group">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-graphite border border-surface/10 flex items-center justify-center transition-all group-hover:border-primary">
                    <MaterialIcon
                      name={step.icon}
                      className="text-xl transition-colors group-hover:text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="text-surface font-bold uppercase tracking-wider text-sm mb-1">
                      {step.title}
                    </h4>
                    <p className="text-industrial-grey text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <section className="mt-20 flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            className="group relative px-10 py-4 bg-primary rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 flex items-center gap-3"
            href="/case-studies"
          >
            <span className="relative z-10 text-white font-bold uppercase tracking-widest text-sm">
              View Public Case Studies
            </span>
            <MaterialIcon
              name="arrow_forward"
              className="relative z-10 text-white transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            className="group px-10 py-4 border border-surface/20 rounded-full hover:bg-surface hover:text-background transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
            href="/contact"
          >
            <span className="font-bold uppercase tracking-widest text-sm">
              Request Consultation
            </span>
            <MaterialIcon name="videocam" className="text-primary group-hover:text-background" />
          </Link>
        </section>
        {/* Privacy Note */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-industrial-grey text-[11px] leading-relaxed uppercase tracking-widest opacity-60">
            Confidentiality Notice: Access is subject to manual review due to the restricted
            nature of certain industrial footage involving sensitive assets. Firstman Videos
            maintains strict drone-enabled visual documentation protocols to protect client
            intellectual property and site security.
          </p>
        </div>
      </div>
    </main>
  )
}
