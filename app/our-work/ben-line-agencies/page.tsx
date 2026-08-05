import Link from "next/link"

import { CaseSpecs } from "@/components/site/case-specs"
import { CtaButton, ctaClasses } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { RelatedServices } from "@/components/site/related-services"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
import { JsonLd } from "@/components/seo/json-ld"
import {
  pageMeta,
  graph,
  breadcrumbSchema,
  creativeWorkSchema,
} from "@/lib/seo"

export const metadata = pageMeta({
  title: "Ben Line Agencies: Industrial Drone Case Study",
  description:
    "Drone cinematography case study for Ben Line Agencies' port and logistics hubs in Southeast Asia, capturing industrial scale under strict maritime safety rules.",
  path: "/our-work/ben-line-agencies",
  ogImage: "/images/stitch/a73f0ee0ad.jpg",
  ogType: "article",
})

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
    { name: "Ben Line Agencies", path: "/our-work/ben-line-agencies" },
  ]),
  creativeWorkSchema({
    name: "Ben Line Agencies",
    description:
      "Drone-enabled cinematography and visual documentation of Ben Line Agencies' logistics hubs and port operations in Southeast Asia.",
    path: "/our-work/ben-line-agencies",
    client: "Ben Line Agencies",
    image: "/images/stitch/a73f0ee0ad.jpg",
  })
)

const specs = [
  { label: "Client", value: "Ben Line Agencies" },
  { label: "Sector", value: "Logistics / Industrial" },
  { label: "Service", value: "Facility Overview" },
  { label: "Region", value: "Southeast Asia" },
  { label: "Access", value: "Public" },
]

const deliverables = [
  { icon: "domain", label: "Facility Overview" },
  { icon: "auto_stories", label: "Site Storytelling" },
  { icon: "photo_camera", label: "High-Res Stills" },
  { icon: "assignment_ind", label: "Stakeholder Briefings" },
]

export default function BenLineAgenciesPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <ServiceHero
        breadcrumb="Ben Line Agencies"
        trail={[{ name: "Case Studies", href: "/our-work" }]}
        chip="Logistics Reference"
        title={
          <>
            Ben Line Agencies&nbsp;—{" "}
            <span className="text-primary">Logistics visual reference</span>
          </>
        }
        lede="A comprehensive visual documentation project focusing on drone-enabled cinematography for complex logistics hubs and port operations. Capturing scale and operational flow without site interference."
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Discuss Your Production
            </CtaButton>
            <CtaButton
              href="/our-work"
              variant="secondary"
              className="w-full sm:w-fit"
            >
              All Case Studies
            </CtaButton>
          </>
        }
      />

      <CaseSpecs items={specs} />

      <ServiceSection
        align="split"
        eyebrow="Context"
        title="Logistics / industrial context"
        lede="The operational environment for this reference project included high-traffic maritime gateways and container terminals. Visual capture required strict adherence to safety exclusion zones and maritime security protocols. We focused on capturing the rhythmic efficiency of shore-to-ship operations, highlighting the infrastructure that supports global supply chains."
      />

      <ServiceSection
        align="split"
        band="panel"
        eyebrow="Approach"
        title="Visual approach"
        lede="Our cinematography strategy prioritized non-intrusive capture techniques. Using high-altitude drone maneuvers and long-lens ground coverage, we maintained industrial safety buffers while delivering cinematic intimacy."
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <p className="max-w-[62ch] font-body leading-relaxed text-industrial-grey">
            The color grade follows a technical, high-contrast palette—deep
            blacks and metallic silvers—punctuated by the natural industrial
            reds and safety oranges inherent to the site environment.
          </p>
          {/* Half a column, not full bleed. The source is 512x279, so at
              ~596px this is a 1.16x upscale; the `aspect-[21/9]` banner it
              replaced ran the same file across the whole 1216px column. */}
          <div
            aria-label="Industrial drone camera gimbal with red status light at a blurred shipping terminal"
            className="aspect-video w-full rounded-2xl border border-surface/10 bg-black bg-cover bg-center"
            role="img"
            style={{ backgroundImage: "url('/images/stitch/11461413dd.jpg')" }}
          />
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Scope" title="Deliverables">
        {/* Rows on a hairline, not four identical icon cards. The content is a
            legend — four labels of equal weight — and a card around each one
            frames what proximity already groups. */}
        <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <li
              className="flex items-center gap-3 border-t border-surface/10 py-6"
              key={item.label}
            >
              <MaterialIcon
                name={item.icon}
                className="shrink-0 text-primary"
              />
              <span className="font-label text-xs font-bold tracking-widest text-surface uppercase">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        align="split"
        band="panel"
        eyebrow="Access"
        title="Confidentiality note"
        lede="Full project reels and specific site data are gated to ensure compliance with site-safety and proprietary logistics protocols. Access is restricted to authorized stakeholders."
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <RequestAccessTrigger
            defaultVideo="Ben Line Agencies — Logistics Visual Reference"
            className={ctaClasses({ className: "w-full sm:w-fit" })}
          >
            <MaterialIcon name="key" className="text-lg!" />
            Request Secure Access
          </RequestAccessTrigger>
          <div className="flex max-w-md items-start gap-4">
            <MaterialIcon name="security" className="shrink-0 text-primary" />
            <div>
              <h3 className="font-label text-xs font-bold tracking-widest text-primary uppercase">
                Safety Compliant
              </h3>
              <p className="mt-1 font-body text-sm leading-relaxed text-industrial-grey">
                Documentation captured under strict industrial safety management
                systems.
              </p>
            </div>
          </div>
        </div>
      </ServiceSection>

      <RelatedServices
        band="page"
        eyebrow="Capabilities"
        title="Related services"
        items={[
          {
            href: "/services/corporate-videos",
            title: "Corporate Videos",
            body: "Specialized capture for heavy engineering.",
          },
          {
            href: "/services/facility-overview-films",
            title: "Facility Overviews",
            body: "Site-aware visual narratives for stakeholders.",
          },
        ]}
      />

      <ServiceCta
        title="Ready to showcase your industrial assets?"
        lede="Discuss a similar visual production for your logistics hub, offshore facility, or industrial site. We prioritize safety and cinematic precision."
        actions={
          <>
            <RequestAccessTrigger
              defaultVideo="Ben Line Agencies — Logistics Visual Reference"
              className={ctaClasses({ className: "w-full sm:w-fit" })}
            >
              Request Access / Discuss Production
              <MaterialIcon name="send" className="text-lg!" />
            </RequestAccessTrigger>
            <Link
              className="group flex items-center gap-2 font-label text-xs font-bold tracking-widest text-surface uppercase transition-colors hover:text-primary"
              href="/our-work"
            >
              View Portfolio
              <MaterialIcon
                name="chevron_right"
                className="text-lg! transition-transform group-hover:translate-x-1"
              />
            </Link>
          </>
        }
      />
    </main>
  )
}
