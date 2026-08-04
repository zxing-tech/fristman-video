import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"

import { CookieBanner } from "./cookie-banner"

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Firstman Videos, a Malaysia industrial drone cinematography provider, collects and protects enquiry data and media assets under PDPA across Southeast Asia.",
  path: "/privacy-policy",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ])
)

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
    label:
      "I authorize temporary retention of my credentials for gated portfolio access.",
    defaultChecked: true,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-grow flex-col gap-16 px-6 pt-32 pb-24">
        {/* Hero Section */}
        <header className="flex max-w-4xl flex-col gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-label text-sm tracking-wider text-industrial-grey uppercase"
          >
            <Link className="transition-colors hover:text-surface" href="/">
              Home
            </Link>
            <MaterialIcon name="chevron_right" className="text-xs" />
            <span className="text-surface">Privacy Policy</span>
          </nav>
          <h1 className="font-headline text-4xl leading-tight font-black tracking-tight text-surface uppercase font-stretch-semi-condensed md:text-6xl">
            Privacy Policy &amp; <span className="text-primary">Consent</span>
          </h1>
          <p className="mt-4 max-w-3xl font-body text-lg leading-relaxed text-industrial-grey">
            This document outlines our operational protocols for handling
            enquiry data, gated requests, and media permissions across our
            industrial cinematography services. Designed for rigorous compliance
            and operational integrity within heavy industry sectors.
          </p>
          <div className="mt-2 text-sm text-industrial-grey">
            Last Updated: October 2024
          </div>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {summaryCards.map((card) => (
            <div
              key={card.title}
              className="glass-panel group rounded-xl p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-surface/10 bg-background transition-colors group-hover:bg-primary">
                <MaterialIcon name={card.icon} className="text-surface" />
              </div>
              <h3 className="mb-2 font-headline text-lg font-bold tracking-wide uppercase">
                {card.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-industrial-grey">
                {card.description}
              </p>
            </div>
          ))}
        </section>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
          {/* Legal Text Canvas */}
          <article className="glass-panel max-w-none rounded-2xl p-8 md:p-12">
            <h2 className="mb-6 border-b border-surface/10 pb-4 font-headline text-2xl font-bold tracking-wide text-surface uppercase">
              1. Data Collection &amp; Processing
            </h2>
            <p className="mb-5 font-body leading-relaxed text-industrial-grey">
              We collect operational data required strictly for business
              execution. This includes primary contact details submitted via our
              infrastructure, project specifications for quoting, and necessary
              clearance documentation for on-site execution at controlled
              facilities (O&amp;G, marine, heavy fabrication).
            </p>
            <p className="font-body leading-relaxed text-industrial-grey">
              All data is encrypted in transit and at rest, utilizing
              industry-standard cryptographic protocols to ensure integrity
              against interception or unauthorized access.
            </p>

            <h2 className="mt-12 mb-6 border-b border-surface/10 pb-4 font-headline text-2xl font-bold tracking-wide text-surface uppercase">
              2. Gated Access Protocols
            </h2>
            <p className="font-body leading-relaxed text-industrial-grey">
              Access to sensitive case studies and proprietary operational
              methodologies requires explicit vetting. Data submitted through
              &apos;Request Access&apos; portals is utilized exclusively by our
              internal Business Development unit to verify commercial relevance
              and authorize temporary access tokens.
            </p>
            <div className="my-8 rounded-r-lg border-l-2 border-primary bg-background/50 p-6">
              <h4 className="mb-2 text-sm font-bold text-surface uppercase">
                Regulatory Compliance Note
              </h4>
              <p className="m-0 font-body text-sm leading-relaxed text-industrial-grey">
                Firstman Videos adheres strictly to the Personal Data Protection
                Act 2010 (PDPA) of Malaysia for domestic operations, mapping
                core principles to international standards for offshore
                engagements.
              </p>
            </div>

            <h2 className="mt-12 mb-6 border-b border-surface/10 pb-4 font-headline text-2xl font-bold tracking-wide text-surface uppercase">
              3. Asset Permissions &amp; Retention
            </h2>
            <p className="font-body leading-relaxed text-industrial-grey">
              Cinematic assets captured on-site remain subject to pre-agreed
              client confidentiality clauses. Model releases and facility
              clearances are retained securely offline. Digital assets destined
              for public portfolio usage undergo rigorous scrubbing to remove
              sensitive locational telemetry or operational UI elements unless
              explicitly cleared.
            </p>
          </article>

          {/* Sticky Sidebar */}
          <aside className="h-fit space-y-8 lg:sticky lg:top-28">
            {/* Consent UI Pattern Mockup */}
            <div className="glass-panel rounded-xl p-6">
              <h4 className="mb-6 border-b border-surface/10 pb-2 font-headline text-sm font-bold tracking-widest text-surface uppercase">
                Consent Interface Reference
              </h4>
              <div className="space-y-4">
                {consentOptions.map((option) => (
                  <label
                    key={option.label}
                    className="group flex cursor-pointer items-start gap-3"
                  >
                    <div className="relative mt-0.5 flex items-center justify-center">
                      <input
                        type="checkbox"
                        defaultChecked={option.defaultChecked}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-industrial-grey bg-transparent transition-all checked:border-primary checked:bg-primary"
                      />
                      <MaterialIcon
                        name="check"
                        className="pointer-events-none absolute text-[16px] text-white opacity-0 peer-checked:opacity-100"
                      />
                    </div>
                    <span className="text-xs leading-tight text-industrial-grey transition-colors group-hover:text-surface">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="glass-panel flex flex-col items-center rounded-xl p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-surface/10 bg-background">
                <MaterialIcon name="shield_person" className="text-primary" />
              </div>
              <h4 className="mb-2 font-headline text-sm font-bold tracking-widest text-surface uppercase">
                Data Protection Officer
              </h4>
              <p className="mb-6 text-xs text-industrial-grey">
                For inquiries regarding data retention or deletion requests.
              </p>
              <a
                className="w-full rounded-full border border-surface/20 px-4 py-2 text-center text-xs font-bold tracking-widest text-surface uppercase transition-colors hover:bg-surface hover:text-background"
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
