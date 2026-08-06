import { CaseSpecs } from "@/components/site/case-specs"
import { CtaButton } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { Readout } from "@/components/site/readout"
import { RelatedServices } from "@/components/site/related-services"
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
  title: "EcoBalance Industrial Video Case Study",
  description:
    "Case study: industrial drone cinematography for EcoBalance in Malaysia, capturing facility scale for corporate storytelling without disrupting site operations.",
  path: "/our-work/ecobalance",
  ogImage: "/images/stitch/14777df4fc.jpg",
  ogType: "article",
})

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
    { name: "EcoBalance Corporate Story", path: "/our-work/ecobalance" },
  ]),
  creativeWorkSchema({
    name: "EcoBalance Corporate Story",
    description:
      "Drone-enabled corporate storytelling for EcoBalance, capturing industrial facility scale in Malaysia without disrupting operations.",
    path: "/our-work/ecobalance",
    client: "EcoBalance",
    image: "/images/stitch/14777df4fc.jpg",
  })
)

const specs = [
  { label: "Reference", value: "2024-EB-CS", mono: true },
  { label: "Client", value: "EcoBalance" },
  { label: "Service", value: "Corporate Videos" },
  { label: "Region", value: "Malaysia" },
  { label: "Access", value: "Public Access Approved" },
]

const approach = [
  {
    icon: "airplanemode_active",
    title: "Cinematic UAV",
    body: "High-altitude perspective for facility layout.",
  },
  {
    icon: "videocam",
    title: "Ground-Based Capture",
    body: "Tactile, macro-level engineering detail.",
  },
  {
    icon: "data_usage",
    title: "Scale Documentation",
    body: "Visualizing industrial complexity for investors.",
  },
]

/**
 * The three "Likely Deliverables" cards used to be photographs. They were not:
 * all three are screen captures of the Stitch mock with invented telemetry
 * burned in — `MONTHLY UPDATE FILM — IN PRODUCTION`, `DATA STREAMING ACTIVE`,
 * a running `07:48:22 / 12:30:00` timecode, and a `CASE STUDY DETAIL —
 * ECOBALANCE CORPORATE STORY` header bar. Dropped for the reason the six
 * `/services` heroes were (see service-hero.tsx); the copy is unchanged.
 */
const deliverables = [
  {
    icon: "movie_filter",
    title: "Monthly Update Films",
    body: "Periodic visual reporting for project management teams.",
  },
  {
    icon: "bolt",
    title: "Milestone Reels",
    body: "High-impact summaries for corporate events and annual reports.",
  },
  {
    icon: "photo_library",
    title: "High-Res Still Packs",
    body: "Print-ready documentation for stakeholder physical collateral.",
  },
]

export default function EcoBalanceCaseStudyPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <ServiceHero
        breadcrumb="EcoBalance Corporate Story"
        trail={[{ name: "Case Studies", href: "/our-work" }]}
        chip="Case Study"
        title={
          <>
            EcoBalance&nbsp;—{" "}
            <span className="text-primary">Corporate storytelling</span>{" "}
            reference
          </>
        }
        lede="This project serves as a definitive reference for drone-enabled cinematography within high-stakes corporate communication environments. Our approach prioritized site-aware planning and precision video documentation to capture the scale of EcoBalance's industrial operations without disrupting established safety protocols or operational workflows."
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
        title="Project context"
        lede="The industrial setting (EcoBalance) required a meticulous approach to visual storytelling. By leveraging stabilized ground units and aerial platforms, we maintained a comprehensive perspective of the facility's complex infrastructure. The focus remained on the technical sophistication of the site, translating industrial scale into cinematic narrative assets suitable for global stakeholders."
      >
        {/* Three across waits for `lg`. At 768px a third of this column minus
            the 40px gaps is 203px, and these rows carry a 30px glyph over a
            20px heading — "Ground-Based Capture" and "Scale Documentation" both
            broke in two there. The rules are drawn per item, so a ragged last
            row reads as the list it is rather than as a gap in a card grid. */}
        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {approach.map((item) => (
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
      </ServiceSection>

      {/* A heading and a paragraph, and nothing under them. The band is the
          pause in the rhythm — every other section on this page carries a grid,
          so the one that states the point on its own is the one that lands. */}
      <ServiceSection
        align="split"
        band="panel"
        eyebrow="Objective"
        title="Communication objective"
        lede="The primary objective centered on brand storytelling through high-fidelity documentation. Stakeholders required a visual bridge between complex on-site activities and corporate transparency. Our task was to provide site-aware documentation that highlights the synergy between engineering precision and corporate commitment to operational excellence."
      />

      <ServiceSection eyebrow="Project Outputs" title="Likely deliverables">
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
          Document Class: Asset Matrix
        </Readout>
      </ServiceSection>

      <ServiceSection
        align="split"
        band="panel"
        eyebrow="Access"
        title="Confidentiality note"
        lede="FIRSTMAN VIDEOS ensures the secure handling of all sensitive industrial data. Our workflows are designed to accommodate site-specific NDA requirements, ensuring that proprietary processes remain strictly confidential while delivering world-class visual assets."
      >
        {/* The animated "Protocol Status / Active" meter that used to sit here
            is gone. A progress bar reports a measurement; this one was pinned
            at 75% and pulsing on a static page, which is the sparkline-as-
            content habit rather than a status. */}
        <p className="flex items-center gap-3 font-label text-xs font-bold tracking-widest text-primary uppercase">
          <MaterialIcon name="lock" fill className="text-base!" />
          Protocol Status: Active
        </p>
      </ServiceSection>

      <RelatedServices
        band="page"
        eyebrow="Capabilities"
        title="Related services"
        items={[
          {
            href: "/services/corporate-videos",
            title: "Corporate Videos",
            body: "Professional-grade visual capture for heavy industry environments, fabrication yards, and energy infrastructure.",
          },
          {
            href: "/services/facility-overview-films",
            title: "Facility Overviews",
            body: "Comprehensive visual mapping and cinematic overviews of large-scale assets and operational territories.",
          },
        ]}
      />

      <ServiceCta
        title={
          <>
            Elevate your <span className="text-primary">operational story</span>
          </>
        }
        lede="We are currently accepting new industrial documentation projects for the upcoming quarter. Priority site assessment slots are allocated on a first-come basis."
        action="Request Consultation"
        footnote="Limited Onboarding Capacity"
      />
    </main>
  )
}
