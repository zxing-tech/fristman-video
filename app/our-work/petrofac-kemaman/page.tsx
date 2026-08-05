import { CaseSpecs } from "@/components/site/case-specs"
import { CtaButton, ctaClasses } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { RelatedServices } from "@/components/site/related-services"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceHero } from "@/components/site/service-hero"
import { JsonLd } from "@/components/seo/json-ld"
import {
  breadcrumbSchema,
  creativeWorkSchema,
  graph,
  pageMeta,
} from "@/lib/seo"

export const metadata = pageMeta({
  title: "Petrofac Kemaman Supply Base Video Case Study",
  description:
    "Petrofac Kemaman Supply Base case study: safety induction and visual documentation at an Oil & Gas site in Malaysia. Gated video, access requires clearance.",
  path: "/our-work/petrofac-kemaman",
  ogImage: "/images/stitch/920da913d9.jpg",
  ogType: "article",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
    {
      name: "Petrofac Kemaman Supply Base",
      path: "/our-work/petrofac-kemaman",
    },
  ]),
  creativeWorkSchema({
    name: "Petrofac Kemaman Supply Base",
    description:
      "Safety induction and visual asset documentation filmed at Petrofac's Kemaman Supply Base, an Oil & Gas facility in Malaysia.",
    path: "/our-work/petrofac-kemaman",
    client: "Petrofac",
    image: "/images/stitch/920da913d9.jpg",
  })
)

const specs = [
  { label: "Client", value: "Petrofac" },
  { label: "Sector", value: "Oil & Gas" },
  { label: "Service", value: "Safety and Induction Videos" },
  { label: "Region", value: "Kemaman, Malaysia" },
  { label: "Status", value: "Gated Video", accent: true },
]

/**
 * This page was a hero, a metadata bar and `<div className="h-96 w-full" />` —
 * 384px of nothing standing in for a body, then the footer. It is also the only
 * page the hub's Oil & Gas filter resolves to.
 *
 * It is short because the material is short, and it stays short rather than
 * being padded out: PRODUCT.md Principle 1 says an empty page wants an asset,
 * not another paragraph. The restriction copy moved into the hero's note slot
 * instead of taking a section of its own, so four honest blocks close the page
 * where nine thin ones would only have hidden the same gap.
 */
export default function PetrofacKemamanPage() {
  return (
    <main>
      <JsonLd data={schema} />

      <ServiceHero
        breadcrumb="Petrofac Kemaman Supply Base"
        trail={[{ name: "Case Studies", href: "/our-work" }]}
        chip="Gated Video"
        chipIcon="lock"
        title="Petrofac Kemaman Supply Base"
        lede="Safety induction and visual asset documentation filmed at Petrofac's Kemaman Supply Base, an Oil & Gas facility in Malaysia."
        actions={
          <>
            <RequestAccessTrigger
              defaultVideo="Petrofac Kemaman Supply Base"
              className={ctaClasses({ className: "w-full sm:w-fit" })}
            >
              <MaterialIcon name="key" className="text-lg!" />
              Request Access
            </RequestAccessTrigger>
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
          <div className="flex max-w-xl items-start gap-3 border-t border-white/15 pt-6">
            <MaterialIcon
              name="lock"
              fill
              className="mt-0.5 shrink-0 text-primary"
            />
            <p className="font-body text-sm leading-relaxed text-white/70">
              This video asset contains restricted industrial site footage.
              Access requires clearance.
            </p>
          </div>
        }
      />

      <CaseSpecs items={specs} />

      {/* `page`, not the default `panel`. On the longer case studies this block
          follows a `page` band and steps up; here it follows the spec strip,
          which is already `dark-ui`, so the default would put two identical
          bands against each other with only a hairline between them. */}
      <RelatedServices
        band="page"
        eyebrow="Capabilities"
        title="Related services"
        items={[
          {
            href: "/services/safety-induction-videos",
            title: "Safety and Induction Videos",
            body: "Site-specific induction and safety procedure films.",
          },
          {
            href: "/services/facility-overview-films",
            title: "Facility Overviews",
            body: "Site-aware visual narratives for stakeholders.",
          },
        ]}
      />

      <ServiceCta title="Tell us about the production." />
    </main>
  )
}
