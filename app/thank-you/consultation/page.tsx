import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

export const metadata: Metadata = {
  title: "Thank You — Consultation Request Received",
  description:
    "Your enquiry for industrial visual documentation has been successfully logged into our production pipeline.",
}

const steps = [
  {
    number: "01",
    title: "Brief Review",
    pulse: true,
    body: "Our production team is currently reviewing your project requirements to align with our drone-enabled capture capabilities.",
  },
  {
    number: "02",
    title: "Site Coordination",
    pulse: false,
    body: "We will reach out to clarify specific site access requirements and safety protocol needs relevant to your facility.",
  },
  {
    number: "03",
    title: "Scoping Call",
    pulse: false,
    body: "Expect a formal proposal for a follow-up call within 24 business hours to finalize site-aware planning details.",
  },
]

export default function ThankYouConsultationPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <div
          aria-hidden="true"
          className="w-full h-full bg-cover bg-center opacity-40 grayscale"
          style={{ backgroundImage: "url('/images/stitch/32988292cc.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      <div className="container max-w-5xl px-6 relative z-10 text-center mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1 border border-primary/30 rounded-full text-primary text-[10px] tracking-[0.3em] font-bold mb-6 bg-primary/5 uppercase">
            Request Logged
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-widest uppercase mb-6 leading-tight text-white">
            THANK YOU — <span className="text-primary">CONSULTATION</span> REQUEST RECEIVED
          </h1>
          <p className="text-industrial-grey text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Your enquiry for industrial visual documentation has been successfully logged into our
            production pipeline.
          </p>
        </div>
        {/* Enquiry Summary Card */}
        <div className="glass-panel rounded-2xl p-8 mb-16 text-left max-w-3xl mx-auto relative overflow-hidden group shadow-[0_0_40px_-10px_rgba(209,32,39,0.2)]">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
            <MaterialIcon name="verified" className="text-6xl text-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-industrial-grey mb-1">
                Project Scope
              </p>
              <p className="font-semibold text-surface">Site-Aware Documentation</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-industrial-grey mb-1">
                Region
              </p>
              <p className="font-semibold text-surface">Industrial Corridor</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-industrial-grey mb-1">
                Contact Reference
              </p>
              <p className="font-semibold text-surface">Pending Assignment</p>
            </div>
          </div>
        </div>
        {/* Next Steps Grid */}
        <div className="mb-16">
          <h2 className="text-xs tracking-[0.4em] uppercase text-industrial-grey font-bold mb-10">
            Standard Protocol Following Submission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative p-6 glass-panel rounded-xl hover:bg-surface/5 transition-colors group"
              >
                <div
                  className="text-5xl font-black absolute -top-4 left-4 opacity-50 select-none"
                  style={{ WebkitTextStroke: "1px rgba(209, 32, 39, 0.5)", color: "transparent" }}
                >
                  {step.number}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 mt-4 flex items-center gap-2">
                  {step.title}
                  {step.pulse && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  )}
                </h3>
                <p className="text-sm text-industrial-grey leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Confirmation Note */}
        <div className="max-w-xl mx-auto mb-12">
          <p className="text-xs text-industrial-grey font-light italic flex items-center justify-center gap-2">
            <MaterialIcon name="mail" className="text-sm" />
            A confirmation of this request has been dispatched to your provided email and our
            Business Development team.
          </p>
        </div>
        {/* Actions */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            className="w-full md:w-auto bg-primary hover:bg-[#b01b21] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 group"
            href="/services"
          >
            View Services
            <MaterialIcon
              name="arrow_forward"
              className="text-sm group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            className="w-full md:w-auto border border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2"
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
