import { CtaButton } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbSchema, graph, pageMeta, serviceSchema } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata = pageMeta({
  title: "Corporate Videos",
  description:
    "Corporate video production for Oil & Gas and industrial sites in Malaysia. Cinematic UAV and ground-based footage that documents scale and operations.",
  path: "/services/corporate-videos",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Corporate Videos", path: "/services/corporate-videos" },
  ]),
  serviceSchema({
    name: "Corporate Videos",
    description:
      "Cinematic UAV and ground-based corporate video production documenting large industrial and Oil & Gas facilities in Malaysia and Southeast Asia.",
    path: "/services/corporate-videos",
  })
)

const audiences = [
  {
    icon: "engineering",
    title: "Project Managers",
    body: "Document critical milestones, verify structural integrity, and provide high-fidelity visual reports for engineering review.",
  },
  {
    icon: "campaign",
    title: "Corporate Comms",
    body: "Elevate brand perception with premium visual assets that communicate scale, safety, and operational excellence to the market.",
  },
  {
    icon: "groups",
    title: "HR & Training",
    body: "Develop realistic site orientation materials and safety protocol demonstrations using actual facility footage.",
  },
  {
    icon: "handshake",
    title: "JV Stakeholders",
    body: "Provide transparent, high-impact visual updates on joint venture progress and capital expenditure utilization.",
  },
]

const deliverables = [
  { icon: "movie", label: "Hero Cinematic Film" },
  { icon: "dynamic_feed", label: "Short Social Cutdowns" },
  { icon: "image", label: "High-Res Still Frames" },
  { icon: "lock", label: "Private Review Link" },
  { icon: "groups", label: "Stakeholder Version" },
]

// No step is flagged "active": nothing on this page is live, and Signal Red
// means active, critical or clickable. The connecting line and the numbers
// carry the sequence on their own.
const workflowSteps = [
  {
    number: "01",
    title: "Brief & Objectives",
    description:
      "Aligning on required assets, target audience, and key visual messaging priorities.",
  },
  {
    number: "02",
    title: "Site Planning",
    description:
      "Reviewing site access, evaluating safety constraints, and scheduling industrial visual documentation.",
  },
  {
    number: "03",
    title: "Capture",
    description:
      "Execution of drone-enabled capture and ground cinematography with minimal operational footprint.",
  },
  {
    number: "04",
    title: "Edit & Delivery",
    description:
      "Post-production formatting, color grading, and secure delivery of finalized assets.",
  },
]

// Fine print that belongs to the workflow, not to the page. It used to float
// right of the whole bento grid, where it read as an orphaned footer.
const workflowNotes = [
  { icon: "info", label: "Confirm site permissions" },
  { icon: "badge", label: "Credentials available upon request" },
]

export default function CorporateVideosPage() {
  return (
    <main>
      <JsonLd data={schema} />

      <ServiceHero
        breadcrumb="Corporate Videos"
        chip="Corporate Production"
        lede="Capture the scale, complexity and operational story of large industrial environments with cinematic UAV and ground-based production."
        readout="UAV + GROUND // CORPORATE"
        title="Corporate Videos"
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
              View Our Work
            </CtaButton>
          </>
        }
      />

      <ServiceSection
        eyebrow="Stakeholders"
        title="Strategic Applications"
        lede="Tailored cinematic assets designed for specific stakeholder requirements and operational objectives."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="glass-panel group flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-surface/20 transition-colors group-hover:border-primary">
                <MaterialIcon
                  name={audience.icon}
                  className="text-2xl text-surface transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                />
              </div>
              <h3 className="mb-3 font-headline text-xl font-bold text-surface">
                {audience.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-industrial-grey">
                {audience.body}
              </p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection band="panel" eyebrow="Scope" title="Output & Execution">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="glass-panel flex flex-col rounded-3xl p-8 md:col-span-1 md:p-10">
            {/* mb-2, not the mb-8 its neighbour uses. The rows below carry
                their own vertical padding, so an mb-8 here stacked on top of
                that and put the heading 69px from the first label against a
                38px rhythm between the rest. The workflow panel next door
                keeps mb-8 because its steps have no such padding — matching
                the number would mismatch the result. */}
            <h3 className="mb-2 flex items-center gap-3 font-label text-xs font-bold tracking-widest text-primary uppercase">
              <span aria-hidden="true" className="block h-px w-8 bg-primary" />
              Deliverables
            </h3>
            {/* Equal-height rows, not `justify-between`.

                This card shares a row with a four-step workflow, so the list
                has to fill the panel. Distributing the slack with
                `justify-between` put it *between* the items — on top of each
                item's own padding — so every rule ended up 51px below the
                label above it and 36px above the label below it, and the last
                pair went 57/30 because the final item dropped its padding.
                The rule read as belonging to the item beneath it.

                Giving each row `flex-1` makes the slack part of the rows
                themselves. Every row is the same height, the label is centred
                in it, and the rule sits on the boundary — so label-to-rule and
                rule-to-label are equal by construction rather than by a value
                anyone has to keep in sync. `py-3` is only a floor, so the rows
                stay legible if the panel is ever short. */}
            <ul className="flex flex-1 flex-col">
              {deliverables.map((item, index) => (
                <li
                  className={cn(
                    "flex flex-1 items-center gap-3 py-3",
                    index > 0 && "border-t border-surface/10"
                  )}
                  key={item.label}
                >
                  <MaterialIcon
                    name={item.icon}
                    className="shrink-0 text-primary"
                  />
                  <span className="font-body text-sm font-medium text-surface">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel group relative overflow-hidden rounded-3xl p-8 md:col-span-2 md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
            />
            <div className="relative">
              <h3 className="mb-8 flex items-center gap-3 font-label text-xs font-bold tracking-widest text-primary uppercase">
                <span
                  aria-hidden="true"
                  className="block h-px w-8 bg-primary"
                />
                Production Workflow
              </h3>
              <div className="relative">
                {/* Connecting line, inset to the centre of the number discs. */}
                <div
                  aria-hidden="true"
                  className="absolute top-4 bottom-4 left-4 hidden w-px bg-surface/15 sm:block"
                />
                <ol className="space-y-8">
                  {workflowSteps.map((step) => (
                    <li
                      className="relative flex flex-col gap-3 sm:flex-row sm:gap-6"
                      key={step.number}
                    >
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-surface/20 bg-graphite font-mono text-[10px] font-medium tracking-[0.15em] text-surface/60">
                        {step.number}
                      </span>
                      <div>
                        <h4 className="mb-1 font-headline text-sm font-bold text-surface">
                          {step.title}
                        </h4>
                        <p className="font-body text-sm leading-relaxed text-industrial-grey">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-10 flex flex-col gap-3 border-t border-surface/10 pt-6 sm:flex-row sm:gap-8">
                {workflowNotes.map((note) => (
                  <span
                    className="flex items-center gap-2 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase"
                    key={note.label}
                  >
                    <MaterialIcon name={note.icon} className="text-base!" />
                    {note.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ServiceSection>

      <ServiceCta title="Tell us about the production." />
    </main>
  )
}
