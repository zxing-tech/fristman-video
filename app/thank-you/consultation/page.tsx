import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Consultation Request Received",
  description:
    "Thank you for requesting a drone cinematography consultation with Firstman Videos. Our industrial production team in Malaysia will contact you shortly.",
  path: "/thank-you/consultation",
  noindex: true,
})

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
    <main className="relative flex min-h-screen flex-col items-center justify-center pt-32 pb-20">
      {/* Cinematic Background Image — dark in both themes so white copy stays readable */}
      <div className="absolute inset-0 z-0 bg-black">
        <div
          aria-hidden="true"
          className="h-full w-full bg-cover bg-center opacity-40 grayscale"
          style={{ backgroundImage: "url('/images/stitch/163ca894fb.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
      </div>
      <div className="relative z-10 container mx-auto max-w-5xl px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
            Request Logged
          </span>
          <h1 className="mb-6 text-3xl leading-tight font-black tracking-wide text-white uppercase font-stretch-semi-condensed sm:text-4xl md:text-6xl md:tracking-widest">
            THANK YOU — <span className="text-primary">CONSULTATION</span>{" "}
            REQUEST RECEIVED
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-white/70">
            Your enquiry for industrial visual documentation has been
            successfully logged into our production pipeline.
          </p>
        </div>
        {/* Enquiry Summary Card */}
        <div className="glass-panel group relative mx-auto mb-16 max-w-3xl overflow-hidden rounded-2xl p-8 text-left shadow-[0_0_40px_-10px_rgba(209,32,39,0.2)]">
          <div className="absolute top-0 right-0 p-4 opacity-20 transition-opacity group-hover:opacity-40">
            <MaterialIcon name="verified" className="text-6xl text-primary" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <p className="mb-1 text-[10px] tracking-widest text-white/50 uppercase">
                Project Scope
              </p>
              <p className="font-semibold text-white">
                Site-Aware Documentation
              </p>
            </div>
            <div>
              <p className="mb-1 text-[10px] tracking-widest text-white/50 uppercase">
                Region
              </p>
              <p className="font-semibold text-white">Industrial Corridor</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] tracking-widest text-white/50 uppercase">
                Contact Reference
              </p>
              <p className="font-semibold text-white">Pending Assignment</p>
            </div>
          </div>
        </div>
        {/* Next Steps Grid */}
        <div className="mb-16">
          <h2 className="mb-10 text-xs font-bold tracking-[0.4em] text-white/70 uppercase">
            Standard Protocol Following Submission
          </h2>
          <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="glass-panel group relative rounded-xl p-6 transition-colors hover:bg-surface/5"
              >
                <div
                  className="absolute -top-4 left-4 text-5xl font-black opacity-50 select-none"
                  style={{
                    WebkitTextStroke: "1px rgba(209, 32, 39, 0.5)",
                    color: "transparent",
                  }}
                >
                  {step.number}
                </div>
                <h3 className="mt-4 mb-3 flex items-center gap-2 text-sm font-bold tracking-wider text-white uppercase">
                  {step.title}
                  {step.pulse && (
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  )}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Confirmation Note */}
        <div className="mx-auto mb-12 max-w-xl">
          <p className="flex items-center justify-center gap-2 text-xs font-light text-white/70 italic">
            <MaterialIcon name="mail" className="text-sm" />A confirmation of
            this request has been dispatched to your provided email and our
            Business Development team.
          </p>
        </div>
        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Link
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-[#b01b21] md:w-auto"
            href="/#services"
          >
            View Services
            <MaterialIcon
              name="arrow_forward"
              className="text-sm transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-10 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-white/10 md:w-auto"
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
