import Link from "next/link"

import { CaseSpecs } from "@/components/site/case-specs"
import { CtaButton, ctaClasses } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { PhotoCard } from "@/components/site/photo-card"
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
  title: "ServisHero Drone Campaign Case Study",
  description:
    "ServisHero case study: industrial drone cinematography for a Southeast Asia service campaign, featuring site-aware aerial capture and HSE-compliant filming.",
  path: "/our-work/servishero-campaign",
  ogImage: "/images/stitch/a6afb92c9f.jpg",
  ogType: "article",
})

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
    { name: "ServisHero Campaign", path: "/our-work/servishero-campaign" },
  ]),
  creativeWorkSchema({
    name: "ServisHero Campaign",
    description:
      "A drone-enabled visual campaign documenting ServisHero's regional service operations across Southeast Asia with site-aware, HSE-compliant aerial capture.",
    path: "/our-work/servishero-campaign",
    client: "ServisHero",
    image: "/images/stitch/a6afb92c9f.jpg",
  })
)

const specs = [
  { label: "Client", value: "ServisHero" },
  { label: "Region", value: "Southeast Asia" },
  { label: "Delivery", value: "Q3" },
  { label: "Tags", value: "Industrial, Aerial" },
  { label: "Access", value: "Public" },
]

/**
 * Four of this page's seven images were screen captures of the Stitch mock
 * rather than photographs, and each carried a fabricated record in its pixels:
 * a headline reading "Achieving 25% faster turnaround times through data-driven
 * logistics", an asset-manager panel listing
 * `SH_OP_CAMPAIGN_FINAL_SECURE.mp4 / AES-256bit / Oct 24, 2023 by Admin`, a
 * grid of ServisHero-branded social videos with view counts, and a control room
 * captioned `SERVISHERO CAMPAIGN — CASE STUDY DETAIL`. A fifth had a play glyph
 * burned into the picture on a site with no video at all.
 *
 * All five are gone; the two genuine photographs stay. Same call as the six
 * `/services` heroes — see service-hero.tsx. PENDING-CLIENT-ASSETS.md item 3
 * is what replaces them.
 */
const deliverables = [
  {
    icon: "movie",
    title: "Hero Cinematic Film",
    note: "4K Master — 120s Extended Cut",
  },
  {
    icon: "phone_iphone",
    title: "Social Cutdowns",
    note: "Multi-platform 9:16 optimized loops",
  },
  {
    icon: "photo_camera",
    title: "High-Res Stills",
    note: "Professional grade facility documentation",
  },
]

export default function ServisHeroCampaignPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <ServiceHero
        breadcrumb="ServisHero Campaign"
        trail={[{ name: "Case Studies", href: "/our-work" }]}
        chip="Case Study Detail"
        readout="SOUTHEAST ASIA // Q3"
        title={
          <>
            ServisHero&nbsp;— <span className="text-primary">Campaign</span>{" "}
            visual reference
          </>
        }
        lede="A high-impact visual campaign developed to showcase regional service integration through drone-enabled capture and cinematic site-aware planning. This reference material highlights the intersection of industrial logistics and human-centric service delivery."
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

      {/* `align="lead"`: this section's lede is its opening statement, not a
          caption for a grid, so it reads under its own heading and the rest of
          the prose sits beside it. Chosen in live mode on 2026-08-05 at a 5/7
          column ratio; persisted as a mode on the shared section rather than as
          a hand-written band, so the page keeps using the one primitive. */}
      <ServiceSection
        align="lead"
        eyebrow="Context"
        title="Campaign context"
        lede="The ServisHero initiative required a visual strategy that balanced high-scale industrial documentation with accessible, brand-aligned storytelling. Our team deployed specialized capture systems to document multi-site operations without disrupting ongoing logistical flows."
      >
        <p className="max-w-[62ch] self-end font-body leading-relaxed text-industrial-grey lg:col-span-7">
          By utilizing site-aware planning, we identified key visual anchors
          that represent the brand&apos;s commitment to efficiency and regional
          presence. All captures were conducted under strict adherence to safety
          protocols, ensuring the visual assets remained suitable for both
          stakeholder presentations and public-facing marketing.
        </p>
        <p className="flex items-start gap-3 border-t border-surface/10 pt-6 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase lg:col-span-12">
          <MaterialIcon
            name="verified_user"
            className="shrink-0 text-base! text-primary"
          />
          HSE Compliant Operations • Credentials available upon request
        </p>
      </ServiceSection>

      <ServiceSection
        band="panel"
        eyebrow="Approach"
        title="Visual storytelling approach"
        lede="Leveraging drone-enabled cinematic strategy for precise industrial visual documentation."
      >
        {/* Two photographs and two statements, alternating. The bento this
            replaced ran two `h-80` photo panels the width of two thirds of the
            column; both were mock captures, and the one that survives is
            narrower here than it was there. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <PhotoCard
            image="/images/stitch/4daaed1dfc.jpg"
            alt="Cinema camera mounted on a heavy-lift industrial drone in a dark hangar"
            title="Aerial Precision"
            body="Utilizing stable, high-bitrate capture platforms for sweeping cinematic sequences in complex industrial environments."
            size="lg"
          />
          <div className="grid grid-cols-1 gap-6">
            <div className="glass-panel flex flex-col justify-center rounded-2xl border-primary/20 p-6 md:p-8">
              <MaterialIcon
                name="movie_filter"
                fill
                className="mb-4 block text-3xl! text-primary"
              />
              <h3 className="font-headline text-xl font-bold text-surface">
                Site-Aware Capture
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-industrial-grey">
                Every frame is planned to minimize impact on site operations
                while maximizing the cinematic scale of the facility.
              </p>
            </div>
            <div className="glass-panel flex flex-col justify-center rounded-2xl p-6 md:p-8">
              <h3 className="font-headline text-xl font-bold text-surface">
                Color Grading
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-industrial-grey">
                Industrial-grade post-production featuring consistent skin-tone
                retention and structural contrast enhancement.
              </p>
              {/* The four-swatch strip that used to close this card is gone: it
                  showed no colour the grade actually uses, and a decorative bar
                  in Signal Red spends the one signal the system has. */}
            </div>
            <div className="glass-panel flex flex-col justify-center rounded-2xl p-6 md:p-8">
              <h3 className="font-headline text-xl font-bold text-surface">
                Technical Storyboarding
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-industrial-grey">
                Pre-visualization of complex shots to ensure stakeholder
                alignment before deployment on active sites.
              </p>
            </div>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        align="split"
        eyebrow="Scope"
        title="Campaign deliverables"
        lede="Standard high-fidelity outputs for the ServisHero campaign."
      >
        <Readout as="p" className="mb-2 block text-primary">
          Phase 04: Completion
        </Readout>
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
              <p className="mt-2 font-body text-sm leading-relaxed text-industrial-grey">
                {item.note}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-surface/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="flex items-center gap-2 font-headline text-xl font-bold text-surface">
              <MaterialIcon name="groups" className="text-primary" />
              Stakeholder Cut
            </h3>
            <p className="mt-1 font-body text-sm leading-relaxed text-industrial-grey">
              Internal-only strategic brief
            </p>
          </div>
          <RequestAccessTrigger
            defaultVideo="ServisHero Campaign — Stakeholder Cut"
            className={ctaClasses({
              size: "md",
              variant: "outline",
              className: "w-full sm:w-fit",
            })}
          >
            <MaterialIcon name="lock" className="text-lg!" />
            Gated Content
          </RequestAccessTrigger>
        </div>
      </ServiceSection>

      <ServiceSection
        band="panel"
        eyebrow="Site-Safety Protocols"
        title="Confidentiality & HSE compliance"
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <p className="max-w-[62ch] font-body leading-relaxed text-industrial-grey">
              All industrial visual documentation for the ServisHero campaign
              followed rigorous safety standards. Our crews are trained for
              high-risk site environments, ensuring zero interference with
              active operations.
            </p>
            <p className="flex max-w-[62ch] items-start gap-3 border-t border-surface/10 pt-6 font-body text-sm leading-relaxed text-industrial-grey">
              <MaterialIcon
                name="gpp_maybe"
                className="shrink-0 text-primary"
              />
              Sensitive material including internal logistics data and specific
              facility layouts are subject to gated access. Credentials for
              full-resolution review are available upon vetted request.
            </p>
            {/* Kept on the owner's call, and flagged: neither figure has a
                document behind it (PRODUCT.md `## Evidence on Hand`). */}
            <div className="flex gap-10 border-t border-surface/10 pt-6">
              {[
                { value: "100%", label: "HSE Compliance" },
                { value: "0", label: "Incident Record" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-headline text-2xl leading-tight font-black tracking-tight text-surface tabular-nums">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* The one image in this half of the page that is genuinely a
              photograph. Half a column, not the full-width blurred-glow frame
              it sat in. */}
          {/* The badge is a SIBLING of the picture, never a child. `role="img"`
              is on ARIA's presentational-children list, so anything nested
              inside it is pruned from the accessibility tree — a screen reader
              would hear the alt text and never the status. */}
          <div className="relative">
            <div
              aria-label="Macro shot of high-visibility reflective stripe on dark industrial safety fabric"
              className="aspect-video w-full rounded-2xl border border-surface/10 bg-black bg-cover bg-center"
              role="img"
              style={{
                backgroundImage: "url('/images/stitch/50e1514a20.jpg')",
              }}
            />
            <span className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/80 px-3 py-1 font-label text-xs font-bold tracking-widest text-white uppercase backdrop-blur">
              Verification Active
            </span>
          </div>
        </div>
      </ServiceSection>

      <RelatedServices
        band="page"
        eyebrow="Capabilities"
        title="Continue exploring services"
        items={[
          {
            href: "/services/corporate-videos",
            title: "Corporate Videos",
            body: "High-end cinematic storytelling for heavy industry and energy sectors.",
          },
          {
            href: "/services/facility-overview-films",
            title: "Facility Overviews",
            body: "Technical documentation and visual walkthroughs of large-scale sites.",
          },
        ]}
      />

      <ServiceCta
        title={
          <>
            Ready to capture{" "}
            <span className="text-primary">your infrastructure?</span>
          </>
        }
        lede="Discuss a similar visual strategy for your next industrial campaign or site assessment."
        footnote="Priority site assessment slots available this month"
        actions={
          <>
            <RequestAccessTrigger
              defaultVideo="ServisHero Campaign"
              className={ctaClasses({ className: "w-full sm:w-fit" })}
            >
              Request Access / Discuss Campaign
            </RequestAccessTrigger>
            <Link
              className="group flex items-center gap-2 font-label text-xs font-bold tracking-widest text-surface uppercase transition-colors hover:text-primary"
              href="/our-work"
            >
              View Portfolio
              <MaterialIcon
                name="trending_flat"
                className="text-lg! transition-transform group-hover:translate-x-1"
              />
            </Link>
          </>
        }
      />
    </main>
  )
}
