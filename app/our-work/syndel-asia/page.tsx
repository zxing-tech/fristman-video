import { CaseSpecs } from "@/components/site/case-specs"
import { CtaButton, ctaClasses } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { Readout } from "@/components/site/readout"
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
  title: "Syndel Asia - Industrial Site Documentation",
  description:
    "Case study: industrial drone cinematography for Syndel Asia fabrication yard and marine terminal in Malaysia, for safety training and stakeholder reporting.",
  path: "/our-work/syndel-asia",
  ogImage: "/images/stitch/ea3a0c1e8b.jpg",
  ogType: "article",
})

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
    { name: "Syndel Asia Documentation", path: "/our-work/syndel-asia" },
  ]),
  creativeWorkSchema({
    name: "Syndel Asia Documentation",
    description:
      "Industrial drone cinematography documenting Syndel Asia's fabrication yard and marine terminal operations for safety training and stakeholder reporting.",
    path: "/our-work/syndel-asia",
    client: "Syndel Asia",
    image: "/images/stitch/ea3a0c1e8b.jpg",
  })
)

const specs = [
  { label: "Client", value: "Syndel Asia" },
  { label: "Facility", value: "Strategic Fabrication Yard & Marine Terminal" },
  { label: "Region", value: "Malaysia" },
  { label: "Service", value: "Facility Overview" },
  { label: "Access", value: "Restricted", accent: true },
]

const documentationNeeds = [
  "High-Altitude Site Awareness Overviews",
  "Fabrication Workflow Documentation",
  "Safety Protocol Compliance Visuals",
  "Marine Terminal Berth Operations",
]

const techniques = [
  "4K LOG ACQUISITION",
  "AERIAL SITE FLIGHTS",
  "TIME-LAPSE DOCUMENTATION",
]

/**
 * These three ran as photographs until 2026-08-05. They are not photographs:
 * all three are screen captures of the Stitch mock, with an application header
 * bar across the top and invented production data burned into the pixels —
 * `REC TC: 01:23:45:10 / SHOT ON: ARRI ALEXA LF / LENS: 24MM T1.5` on one,
 * `PROJECT: PINDAH OFFSHORE PIPING / LOCATION: KUALA LUMPUR YARD / 24 OCT 2023`
 * on the second, and a header reading `CASE STIUDY DETAIL` — typo included —
 * on the third. Two of them carried a play glyph over a site with no video.
 *
 * Same call as the six `/services` heroes (see service-hero.tsx): a render with
 * fabricated telemetry in it states a claim the company cannot support, and no
 * scrim makes that acceptable. The cards keep their copy and lose the picture
 * until real stills arrive — PENDING-CLIENT-ASSETS.md item 3.
 */
const deliverables = [
  {
    icon: "movie",
    title: "Milestone Reels",
    body: "Compressed cinematic highlights of key project phases for executive review.",
  },
  {
    icon: "calendar_month",
    title: "Monthly Update Films",
    body: "Progressive documentation capture on a fixed 30-day site rotation schedule.",
  },
  {
    icon: "photo_library",
    title: "High-Res Still Packs",
    body: "Ultra-high fidelity still imagery for annual reports and technical brochures.",
  },
]

export default function SyndelAsiaPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <ServiceHero
        breadcrumb="Syndel Asia Documentation"
        trail={[{ name: "Case Studies", href: "/our-work" }]}
        chip="Case Study Detail"
        title={
          <>
            Syndel Asia&nbsp;—{" "}
            <span className="text-primary">
              Industrial video documentation reference
            </span>
          </>
        }
        lede="A comprehensive video documentation project for Syndel Asia, focused on capturing the operational scale and safety protocols of their industrial hub. This cinematic reference serves as the primary visual foundation for their stakeholder reporting and site-awareness training modules."
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
        note={
          // Internal production flags, kept verbatim on the owner's call. They
          // sit in the note slot rather than above the h1, where they were the
          // first thing on the page.
          <div className="flex flex-wrap gap-2">
            {["[CONFIRM APPROVED ASSETS]", "[LOGO PERMISSION]"].map((flag) => (
              <Readout
                className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-primary backdrop-blur-sm"
                key={flag}
              >
                {flag}
              </Readout>
            ))}
          </div>
        }
      />

      <CaseSpecs items={specs} />

      <ServiceSection
        align="split"
        eyebrow="Context"
        title="Project context"
        lede="Specialized heavy industry environment requiring rigorous safety clearances and site-aware capture protocols for all aerial and ground crews."
      />

      {/* These four are the client's documentation requirements and they need
          to say so. Folded under "Project context" they sat unlabelled beneath
          a lede about safety clearances, so a visitor met four uppercase lines
          with no statement of what they were. */}
      <ServiceSection
        band="panel"
        eyebrow="Requirements"
        title="Documentation needs"
      >
        <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {documentationNeeds.map((need) => (
            <li
              className="flex items-start gap-3 border-t border-surface/10 py-6"
              key={need}
            >
              <span
                aria-hidden="true"
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"
              />
              <span className="font-label text-xs font-bold tracking-widest text-surface uppercase">
                {need}
              </span>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        align="split"
        eyebrow="Approach"
        title="Visual approach"
        lede="Leveraging drone-enabled cinematography and specialized ground-based capture methods, our team deployed a multi-angle strategy to document critical infrastructure without interrupting operational flow. The focus remained on precision framing and lighting to elevate technical site assets into professional cinematic reference material."
      >
        <div className="flex flex-wrap gap-3">
          {techniques.map((technique) => (
            <Readout
              className="rounded-full border border-surface/10 bg-graphite px-4 py-1.5 text-surface"
              key={technique}
            >
              {technique}
            </Readout>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        band="panel"
        eyebrow="Project Output"
        title="Sample deliverables"
      >
        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
            <div className="border-t border-surface/10 py-8" key={item.title}>
              <MaterialIcon
                name={item.icon}
                className="mb-4 block text-3xl! text-primary"
              />
              <h3 className="font-headline text-xl font-bold text-surface">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[46ch] font-body text-sm leading-relaxed text-industrial-grey">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <Readout as="p" className="mt-6 block text-industrial-grey">
          [CLIENT-APPROVED WORDING PENDING]
        </Readout>
      </ServiceSection>

      <RelatedServices
        band="page"
        eyebrow="Ecosystem"
        title="Related capability reference"
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
        eyebrow="Confidential Asset Portal"
        title="Restricted access only"
        lede="The full high-fidelity video documentation library for Syndel Asia contains sensitive site-aware assets. Access is restricted to authorized personnel and verified project stakeholders."
        actions={
          <>
            <RequestAccessTrigger
              defaultVideo="Syndel Asia — Industrial Video Documentation Reference"
              className={ctaClasses({ className: "w-full sm:w-fit" })}
            >
              <MaterialIcon name="key" className="text-lg!" />
              Request Access Clearance
            </RequestAccessTrigger>
            <CtaButton
              href="/contact"
              variant="outline"
              className="w-full sm:w-fit"
            >
              Discuss Your Production
            </CtaButton>
          </>
        }
      />
    </main>
  )
}
