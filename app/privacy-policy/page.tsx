import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

import { CookieBanner } from "./cookie-banner"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Operational protocols for handling enquiry data, gated requests, and media permissions across our industrial cinematography services.",
}

const summaryCards = [
  {
    icon: "data_info_alert",
    title: "Enquiry Data",
    description:
      "Secure processing of contact details for project scoping and initial consultations.",
  },
  {
    icon: "lock",
    title: "Gated Access",
    description:
      "Vetting procedures for confidential case studies and proprietary methodology access.",
  },
  {
    icon: "video_camera_front",
    title: "Media Rights",
    description:
      "Protocols governing asset permissions, model releases, and site clearance documentation.",
  },
  {
    icon: "analytics",
    title: "Telemetry",
    description:
      "Anonymized analytics for performance optimization of the digital platform.",
  },
]

const consentOptions = [
  {
    label: "I acknowledge the data processing terms for consultation scoping.",
    defaultChecked: false,
  },
  {
    label: "I authorize temporary retention of my credentials for gated portfolio access.",
    defaultChecked: true,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-16 relative z-10">
        {/* Hero Section */}
        <header className="flex flex-col gap-4 max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-industrial-grey font-label uppercase tracking-wider flex items-center gap-2"
          >
            <Link className="hover:text-surface transition-colors" href="/">
              Home
            </Link>
            <MaterialIcon name="chevron_right" className="text-xs" />
            <span className="text-surface">Privacy Policy</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-headline font-bold uppercase tracking-tight text-surface leading-tight">
            Privacy Policy &amp; <span className="text-primary">Consent</span>
          </h1>
          <p className="text-lg text-industrial-grey font-body max-w-3xl leading-relaxed mt-4">
            This document outlines our operational protocols for handling enquiry data, gated
            requests, and media permissions across our industrial cinematography services. Designed
            for rigorous compliance and operational integrity within heavy industry sectors.
          </p>
          <div className="text-sm text-industrial-grey mt-2">Last Updated: October 2024</div>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryCards.map((card) => (
            <div
              key={card.title}
              className="glass-panel rounded-xl p-6 group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-surface/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <MaterialIcon name={card.icon} className="text-surface" />
              </div>
              <h3 className="font-headline font-bold text-lg mb-2 uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="text-sm text-industrial-grey font-body leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </section>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Legal Text Canvas */}
          <article className="glass-panel rounded-2xl p-8 md:p-12 max-w-none">
            <h2 className="text-2xl font-headline font-bold uppercase tracking-wide text-surface border-b border-surface/10 pb-4 mb-6">
              1. Data Collection &amp; Processing
            </h2>
            <p className="text-industrial-grey font-body leading-relaxed mb-5">
              We collect operational data required strictly for business execution. This includes
              primary contact details submitted via our infrastructure, project specifications for
              quoting, and necessary clearance documentation for on-site execution at controlled
              facilities (O&amp;G, marine, heavy fabrication).
            </p>
            <p className="text-industrial-grey font-body leading-relaxed">
              All data is encrypted in transit and at rest, utilizing industry-standard
              cryptographic protocols to ensure integrity against interception or unauthorized
              access.
            </p>

            <h2 className="text-2xl font-headline font-bold uppercase tracking-wide text-surface border-b border-surface/10 pb-4 mt-12 mb-6">
              2. Gated Access Protocols
            </h2>
            <p className="text-industrial-grey font-body leading-relaxed">
              Access to sensitive case studies and proprietary operational methodologies requires
              explicit vetting. Data submitted through &apos;Request Access&apos; portals is utilized
              exclusively by our internal Business Development unit to verify commercial relevance
              and authorize temporary access tokens.
            </p>
            <div className="bg-background/50 border-l-2 border-primary p-6 my-8 rounded-r-lg">
              <h4 className="text-surface font-bold mb-2 uppercase text-sm">
                Regulatory Compliance Note
              </h4>
              <p className="text-sm text-industrial-grey font-body leading-relaxed m-0">
                Firstman Videos adheres strictly to the Personal Data Protection Act 2010 (PDPA)
                of Malaysia for domestic operations, mapping core principles to international
                standards for offshore engagements.
              </p>
            </div>

            <h2 className="text-2xl font-headline font-bold uppercase tracking-wide text-surface border-b border-surface/10 pb-4 mt-12 mb-6">
              3. Asset Permissions &amp; Retention
            </h2>
            <p className="text-industrial-grey font-body leading-relaxed">
              Cinematic assets captured on-site remain subject to pre-agreed client confidentiality
              clauses. Model releases and facility clearances are retained securely offline.
              Digital assets destined for public portfolio usage undergo rigorous scrubbing to
              remove sensitive locational telemetry or operational UI elements unless explicitly
              cleared.
            </p>
          </article>

          {/* Sticky Sidebar */}
          <aside className="space-y-8 h-fit lg:sticky lg:top-28">
            {/* Consent UI Pattern Mockup */}
            <div className="glass-panel rounded-xl p-6">
              <h4 className="font-headline font-bold text-surface uppercase text-sm tracking-widest mb-6 border-b border-surface/10 pb-2">
                Consent Interface Reference
              </h4>
              <div className="space-y-4">
                {consentOptions.map((option) => (
                  <label
                    key={option.label}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input
                        type="checkbox"
                        defaultChecked={option.defaultChecked}
                        className="peer appearance-none w-5 h-5 rounded border border-industrial-grey bg-transparent checked:bg-primary checked:border-primary transition-all cursor-pointer"
                      />
                      <MaterialIcon
                        name="check"
                        className="absolute text-white text-[16px] opacity-0 peer-checked:opacity-100 pointer-events-none"
                      />
                    </div>
                    <span className="text-xs text-industrial-grey group-hover:text-surface transition-colors leading-tight">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="glass-panel rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-background border border-surface/10 flex items-center justify-center mb-4">
                <MaterialIcon name="shield_person" className="text-primary" />
              </div>
              <h4 className="font-headline font-bold text-surface uppercase text-sm tracking-widest mb-2">
                Data Protection Officer
              </h4>
              <p className="text-xs text-industrial-grey mb-6">
                For inquiries regarding data retention or deletion requests.
              </p>
              <a
                className="w-full text-center py-2 px-4 rounded-full border border-surface/20 text-surface text-xs font-bold uppercase tracking-widest hover:bg-surface hover:text-background transition-colors"
                href="mailto:privacy@firstmanvideos.com"
              >
                Contact DPO
              </a>
            </div>
          </aside>
        </div>
      </main>

      {/* Cookie Banner Mockup (Fixed at bottom) */}
      <CookieBanner />
    </>
  )
}
