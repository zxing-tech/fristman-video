import { CtaButton } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
import { JsonLd } from "@/components/seo/json-ld"
import { ABOUT_HERO_MEDIA } from "@/lib/hero-media"
import {
  OFFICE_READOUT,
  REGISTRATION,
  SITE,
  breadcrumbSchema,
  graph,
  pageMeta,
} from "@/lib/seo"

export const metadata = pageMeta({
  title: "About Us — Industrial Video Production",
  description:
    "Firstman Videos is an industrial cinematography team based in Malaysia serving Oil & Gas operators across Southeast Asia with safety-certified drone crews.",
  path: "/about",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ])
)

const coreValues = [
  {
    icon: "verified_user",
    title: "Professionalism",
    description:
      "Rigorous adherence to site safety protocols and corporate compliance on every deployment.",
  },
  {
    icon: "lightbulb",
    title: "Creativity",
    description:
      "Elevating technical documentation into compelling, cinematic Video narratives.",
  },
  {
    icon: "high_quality",
    title: "Quality",
    description:
      "Uncompromising standards in imaging resolution, framing, and final delivery formats.",
  },
  {
    icon: "sync_alt",
    title: "Flexibility",
    description:
      "Agile response capabilities to adapt to volatile site conditions and dynamic project scopes.",
  },
]

// What happens before the cameras come out. Buyers in Oil & Gas, marine and
// fabrication ask about these four things first, which is why this band sits
// directly under the hero rather than fourth down the page — PRODUCT.md
// Principle 4: site access is the product.
const deployment = [
  {
    icon: "badge",
    title: "Access & Clearances",
    description:
      "Coordination for permit-to-work systems, facility inductions and site-specific access protocols ahead of mobilisation.",
  },
  {
    icon: "health_and_safety",
    title: "Safety & Site Coordination",
    description:
      "We align with your HSE managers on operational parameters, required PPE, restricted zones and permitting for both ground and drone-enabled capture.",
  },
  {
    icon: "cloudy",
    title: "Weather Windows",
    description:
      "Offshore and marine work is scheduled against forecasts, so aerial capture lands in conditions that actually produce usable footage.",
  },
  {
    icon: "engineering",
    title: "Non-Disruptive Capture",
    description:
      "Filming is planned to run alongside active infrastructure. Your operations set the schedule, not our shot list.",
  },
]

const dataHandling = [
  { icon: "verified_user", label: "NDA executed before deployment" },
  { icon: "encrypted", label: "Encrypted transfer & storage" },
  { icon: "lock_person", label: "Password-gated client portals" },
  { icon: "hard_drive", label: "Offline cold storage on request" },
]

// Seven labels, no prose. They used to be seven full-width glass cards — 616px
// of page to deliver seven short strings — so they are a two-column spec sheet
// now, sized to sit level with the heading beside it.
const capabilities = [
  { icon: "flight", title: "Certified UAV Pilots" },
  { icon: "videocam", title: "Ground Camera Crews" },
  { icon: "health_and_safety", title: "Site Safety Planning" },
  { icon: "description", title: "Method Statements & Flight Logs" },
  { icon: "smart_display", title: "YouTube-Ready Content" },
  { icon: "lock", title: "Gated Case Study Handling" },
  { icon: "public", title: "Multi-Country Deployment" },
]

/**
 * `/about` runs the same frame as the six detail pages under `/services/*`:
 * `ServiceHero`, banded `ServiceSection`s, `ServiceCta`.
 *
 * It was the last page still carrying its own: a `max-w-7xl px-6` column against
 * the shared `max-w-[1280px] px-8`, so its content edge missed both the navbar
 * pill and every page a visitor arrives from; six sections stacked on one flat
 * page-colour field with `mb-32` between them, which spends 128px per gap and
 * still gives the eye nothing to group by; and every heading in capitals, card
 * titles included, against The Scarce Capitals Rule in DESIGN.md.
 *
 * The old hero was a 500px card holding `stitch/6f8a089e05.jpg` — a 512px AI
 * render (PRODUCT.md `## Evidence on Hand`) upscaled ~2x, alt-texted as a film
 * crew at an offshore rig, and badged "Verified Operator". The badge survives in
 * the hero chip on the owner's call; the render does not.
 */
export default function AboutPage() {
  return (
    <main>
      <JsonLd data={schema} />

      <ServiceHero
        breadcrumb="About Us"
        chip="Verified Operator"
        chipIcon="verified_user"
        media={ABOUT_HERO_MEDIA}
        lede="We are an industrial cinematography and video documentation team built for oil & gas operators, heavy industry projects and large-scale stakeholder communication across Southeast Asia."
        readout={OFFICE_READOUT}
        title="About Firstman Videos"
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Get An Estimate
            </CtaButton>
            <CtaButton
              href="/our-work"
              variant="secondary"
              className="w-full sm:w-fit"
            >
              View our work
            </CtaButton>
          </>
        }
        note={
          // The trading-name / legal-entity line. It was 14px grey copy buried
          // under the old hero's lede; in the note slot it reads as the
          // registration footnote it actually is.
          //
          // Capped in characters, not pixels. `max-w-xl` is 576px, which at
          // 14px set this footnote 78 characters to the line — past the 75 the
          // eye reliably tracks, and wider than the action row above it. The
          // emphasis is 700, not the 600 it was: the ramp runs 400 / 500 / 700 /
          // 900, and `font-semibold` appears nowhere on this site but the two
          // noindex thank-you pages.
          <p className="max-w-[64ch] border-t border-white/15 pt-6 font-body text-sm leading-relaxed text-white/70">
            Firstman Videos is the industrial video production brand of{" "}
            <span className="font-bold text-white">{SITE.legalName}</span>, Co
            Reg: {REGISTRATION}.
          </p>
        }
      />

      <ServiceSection
        align="split"
        eyebrow="Background"
        title="Our story"
        lede="Founded as Firstman Productions, we evolved from video production excellence into specialized industrial cinematography and video documentation designed explicitly for complex, high-risk operational sites. We bridge the gap between creative storytelling and rigorous technical documentation."
      >
        {/* Mission and the four values were two separate full-width sections —
            two `p-16` panels holding four lines each, then four `p-8` cards
            holding one line each. Both are supporting detail under the story,
            so they share its band and sit side by side. */}
        {/* Both panel headings run the Title role — 20px, 700, line-height 1.4,
            sentence case, in the foreground colour. They were the Label role
            (12px, 700, tracked, Signal Red), copied from the sibling service
            pages, and that was wrong twice over.

            DESIGN.md assigns Title to "card and panel headings" and Label to
            eyebrows, nav, buttons and metadata; these are panel headings. And
            the Label role only outranks what it introduces while that content is
            smaller — on the service pages those labels head 14px lists. Here
            "Mission" at 12px sat above its own 16px paragraph, so the heading was
            the smallest type in the panel and the copy read as the louder of the
            two.

            The red hairline stays. It marks the panel the way the accent bar
            marks a section heading, and it keeps the Signal Red on a mark rather
            than spending it on text that is neither active nor clickable. */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="glass-panel rounded-3xl p-6 md:p-8 lg:col-span-5 lg:p-10">
            <h3 className="mb-5 flex items-center gap-3 font-headline text-xl font-bold text-surface">
              <span aria-hidden="true" className="block h-px w-8 bg-primary" />
              Mission
            </h3>
            <p className="font-body leading-relaxed text-industrial-grey">
              Deliver safe, precise and cost-effective high-definition Video
              documentation and cinematic production for industrial teams,
              ensuring flawless execution from initial site assessment to final
              stakeholder presentation.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-6 md:p-8 lg:col-span-7 lg:p-10">
            <h3 className="mb-5 flex items-center gap-3 font-headline text-xl font-bold text-surface">
              <span aria-hidden="true" className="block h-px w-8 bg-primary" />
              Core Values
            </h3>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8">
              {coreValues.map((value) => (
                <li className="flex gap-4" key={value.title}>
                  <MaterialIcon
                    name={value.icon}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <div>
                    <h4 className="mb-1 font-headline text-base font-bold text-surface">
                      {value.title}
                    </h4>
                    <p className="font-body text-sm leading-relaxed text-industrial-grey">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        band="panel"
        eyebrow="Before Mobilisation"
        title="Deployment & site coordination"
        lede="Most of the work on a live industrial site happens before the first flight. This is what we settle with your team first."
      >
        {/* Four across, not the 2x2 it was: the row reads as one sequence of
            pre-mobilisation steps rather than as two unrelated pairs. The cards
            also dropped a `border-l-2` accent — a coloured side tab over 1px is
            the one border the detector refuses, and the icon ring already marks
            the card.

            The fourth column arrives at `xl`, not at `lg` where the sibling card
            grids put it. Measured at 1024px: four cards leave 158px of text
            inside the padding, which broke every title onto two lines and ran
            the descriptions at three or four words a line, hyphenating
            "permit-to-work" mid-word. Holding 2x2 until 1280 gives each card
            436px there and 222px once the row splits — the value the rest of the
            site's four-across grids actually render at. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {deployment.map((item) => (
            <div
              className="glass-panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-8"
              key={item.title}
            >
              {/* Marker beside the title while the card is the full width of
                  the column, above it once the grid splits — the same rule the
                  homepage and the twelve detail pages follow, at the same 44px
                  inline size. */}
              <div className="mb-4 flex items-center gap-4 md:mb-0 md:block">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-surface/20 transition-colors group-hover:border-primary md:mb-6 md:h-12 md:w-12">
                  <MaterialIcon
                    name={item.icon}
                    className="text-2xl text-surface transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                  />
                </div>
                <h3 className="font-headline text-xl font-bold text-surface md:mb-3">
                  {item.title}
                </h3>
              </div>
              <p className="font-body text-sm leading-relaxed text-industrial-grey">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        align="lead"
        eyebrow="Capability"
        title="Operational capabilities"
        lede="Comprehensive Video deployment services engineered for demanding industrial environments."
      >
        {/* Seven items across two columns fill four rows exactly, so the sheet
            lands level with the heading block instead of running 400px past it.
            The old left column was `sticky top-32` against a list twice its
            height — pinning a heading beside dead space it had already cleared. */}
        <div className="lg:col-span-7">
          <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12">
            {capabilities.map((capability) => (
              <li
                className="flex items-center gap-4 border-t border-surface/10 py-4"
                key={capability.title}
              >
                <MaterialIcon
                  name={capability.icon}
                  className="shrink-0 text-primary"
                />
                <span className="font-body text-sm font-medium text-surface">
                  {capability.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ServiceSection>

      {/* `panel`, not `graphite`. The graphite step was tried and measured out:
          `text-industrial-grey` body copy on `#1a1a1a` comes to 4.39:1, under
          the 4.5 floor, and the Signal Red eyebrow drops to 3.27:1 — its worst
          value anywhere on the site. On `#080808` the same copy measures 5.05:1.
          The page alternates page / panel / page / panel either way. */}
      <ServiceSection
        align="split"
        band="panel"
        eyebrow="Confidentiality"
        title="Confidentiality & data handling"
        lede="Site layouts, operational procedures and fabrication techniques are proprietary, and we treat footage of them that way. Raw material is moved and stored through controlled channels, and anything sensitive is delivered gated rather than posted publicly. Access to those deliverables is logged."
      >
        {/* Chips, not four bordered boxes inside a bordered panel. These are
            four short statuses; a card each nested them one level deep and put
            the panel's own heading in a `items-center` column, floating it half
            a panel below the paragraph it belonged to.

            Two columns on the header's own `gap-x-16`, so the chips land under
            the heading and under the lede rather than in a row of their own.
            `flex-wrap` was tried first and orphaned the fourth chip on its own
            line: the four labels run 24–30 characters, and at 12px tracked to
            0.1em the set is wider than the 1216px column.

            The radius follows the same measurement. DESIGN.md gives chips a full
            pill, and they get one wherever the label holds a single line. The
            widest chip renders 331px, so it only wraps under a ~395px viewport —
            below `sm`, on a phone, where a two-line label in a 9999px radius
            reads as a lozenge. Those widths take the radius scale instead. */}
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-x-16">
          {dataHandling.map((item) => (
            <li
              className="flex w-fit items-center gap-2 rounded-2xl border border-surface/10 bg-surface/5 px-4 py-2 sm:rounded-full"
              key={item.label}
            >
              <MaterialIcon
                name={item.icon}
                className="text-base! text-primary"
              />
              <span className="font-label text-xs font-bold tracking-widest text-surface uppercase">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceCta
        title="Ready to document your next critical operation?"
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Get An Estimate
            </CtaButton>
            <CtaButton
              href="/#services"
              variant="outline"
              className="w-full sm:w-fit"
            >
              View Services
            </CtaButton>
          </>
        }
      />
    </main>
  )
}
