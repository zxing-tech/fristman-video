import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Case Study Access Request Received",
  description:
    "Your request for restricted industrial cinematography case study footage has been logged for manual review by our Malaysia-based drone production team.",
  path: "/thank-you/case-study-access",
  noindex: true,
})

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
    <main className="relative overflow-hidden pt-32 pb-20">
      {/* Background Asset */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      <div className="relative z-10 container mx-auto max-w-[1280px] px-6">
        {/* Hero Section */}
        <section className="mb-16 flex flex-col items-center text-center">
          <div className="group relative mb-8 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-primary/5 transition-all duration-500 hover:border-primary">
            <MaterialIcon
              name="lock_open"
              fill
              className="text-5xl text-primary"
            />
          </div>
          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-primary">
            /our-work/REQUEST-ACCESS/THANK-YOU
          </p>
          <h1 className="mb-6 text-4xl leading-none font-black tracking-tight uppercase font-stretch-semi-condensed md:text-7xl">
            Access Request <span className="text-primary">Received</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed font-light text-industrial-grey">
            Your request for restricted industrial cinematography documentation
            has been logged. Our security protocols require manual verification
            for site-sensitive footage.
          </p>
        </section>
        {/* Request Summary & Process Grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Request Summary Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel relative overflow-hidden rounded-2xl border-l-4 border-l-primary p-8">
              <div className="mb-10 flex items-start justify-between">
                <div>
                  <h3 className="mb-1 text-xs font-bold tracking-widest text-industrial-grey uppercase">
                    Status Report
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    <span className="font-bold tracking-tight text-surface uppercase">
                      Under Review
                    </span>
                  </div>
                </div>
                <MaterialIcon
                  name="verified_user"
                  className="text-industrial-grey"
                />
              </div>
              <div className="space-y-6">
                <div className="border-b border-surface/5 pb-4">
                  <p className="mb-1 block text-[10px] font-bold tracking-widest text-primary uppercase">
                    Resource Requested
                  </p>
                  <p className="font-semibold text-surface">
                    Offshore Fabrication Yard - Drone Workflow 2024
                  </p>
                </div>
                <div className="border-b border-surface/5 pb-4">
                  <p className="mb-1 block text-[10px] font-bold tracking-widest text-primary uppercase">
                    Organization Identity
                  </p>
                  <p className="font-semibold text-surface">
                    Corporate Partner / Prospect
                  </p>
                </div>
                <div>
                  <p className="mb-1 block text-[10px] font-bold tracking-widest text-primary uppercase">
                    Internal Reference
                  </p>
                  <p className="font-mono text-sm text-surface">
                    FMV-AUTH-00982-X
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Process Timeline */}
          <div className="flex h-full flex-col justify-center lg:col-span-7">
            <h3 className="mb-8 border-l-2 border-primary pl-4 text-sm font-bold tracking-[0.4em] text-surface uppercase">
              Authorization Sequence
            </h3>
            <div className="relative space-y-12">
              <div className="absolute top-2 bottom-2 left-6 w-px bg-surface/10" />
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="group relative flex items-start gap-8"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-surface/10 bg-graphite transition-all group-hover:border-primary">
                    <MaterialIcon
                      name={step.icon}
                      className="text-xl transition-colors group-hover:text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold tracking-wider text-surface uppercase">
                      {step.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-industrial-grey">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <section className="mt-20 flex flex-col items-center justify-center gap-6 md:flex-row">
          <Link
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-primary px-10 py-4 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95"
            href="/our-work"
          >
            <span className="relative z-10 text-sm font-bold tracking-widest text-white uppercase">
              View Public Case Studies
            </span>
            <MaterialIcon
              name="arrow_forward"
              className="relative z-10 text-white transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            className="group flex items-center gap-3 rounded-full border border-surface/20 px-10 py-4 transition-all duration-300 hover:scale-105 hover:bg-surface hover:text-background active:scale-95"
            href="/contact"
          >
            <span className="text-sm font-bold tracking-widest uppercase">
              Request Consultation
            </span>
            <MaterialIcon
              name="videocam"
              className="text-primary group-hover:text-background"
            />
          </Link>
        </section>
        {/* Privacy Note */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-[11px] leading-relaxed tracking-widest text-industrial-grey uppercase opacity-60">
            Confidentiality Notice: Access is subject to manual review due to
            the restricted nature of certain industrial footage involving
            sensitive assets. Firstman Videos maintains strict drone-enabled
            video documentation protocols to protect client intellectual
            property and site security.
          </p>
        </div>
      </div>
    </main>
  )
}
