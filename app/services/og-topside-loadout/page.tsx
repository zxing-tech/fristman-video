import { CtaButton } from "@/components/site/cta-button"
import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceFilms } from "@/components/site/service-films"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
import { SERVICE_HERO_MEDIA } from "@/lib/hero-media"
import { breadcrumbSchema, graph, pageMeta, serviceSchema } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata = pageMeta({
  title: "O&G Topside Loadout",
  description:
    "Load-out documentation for Oil & Gas fabrication yards in Malaysia: SPMT walks, barge transfer, sea-fastening and sail-away, filmed as one continuous operation.",
  path: "/services/og-topside-loadout",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "O&G Topside Loadout", path: "/services/og-topside-loadout" },
  ]),
  serviceSchema({
    name: "O&G Topside Loadout",
    description:
      "Aerial and ground documentation of topside and jacket load-out operations, from the final yard state through barge transfer, sea-fastening and sail-away.",
    path: "/services/og-topside-loadout",
  })
)

/**
 * The phases of an actual load-out, in order. Numbered because the sequence is
 * the information — a load-out happens once, in this order, and a client
 * scanning this page is checking whether the crew knows where the camera has
 * to be at each step.
 */
const phases = [
  {
    number: "01",
    title: "Final yard state",
    description:
      "The completed structure on its supports, covered from the ground and the air while the yard is still working around it. This is the last chance to record the module intact and stationary.",
  },
  {
    number: "02",
    title: "Skidding and the SPMT walk",
    description:
      "Transporters coming under the load and the walk to the quay, held continuously rather than in takes, so the move survives the cut as one movement.",
  },
  {
    number: "03",
    title: "Barge transfer",
    description:
      "Load transfer onto the barge as ballast is trimmed and the ramp is matched, filmed from the quayside, from the deck and from above at the same time.",
  },
  {
    number: "04",
    title: "Sea-fastening",
    description:
      "Grillage, stoppers and welded restraint recorded as a condition set before departure, framed so a reviewer can read what was fitted where.",
  },
  {
    number: "05",
    title: "Sail-away",
    description:
      "Departure from the yard with tugs alongside, and the last aerial of the tow leaving the channel.",
  },
]

const deliverables = [
  { icon: "movie", label: "Load-out master film" },
  { icon: "dynamic_feed", label: "Milestone cutdowns" },
  { icon: "photo_library", label: "High-resolution aerial stills" },
  { icon: "fact_check", label: "Condition-record frames" },
  { icon: "rate_review", label: "Low-bandwidth review cut" },
  { icon: "lock", label: "Gated delivery for restricted material" },
]

// Constraints the crew works to, not selling points. PRODUCT.md: site access is
// the product. Certifications are named as a capability and never as a badge or
// a number, because the documents are not collected yet.
const yardNotes = [
  {
    icon: "assignment_turned_in",
    title: "Permit to work, before the camera",
    description:
      "Permit, facility induction and a walk of the exclusion zones with the site HSE manager are done ahead of the shoot, not on the morning of it.",
  },
  {
    icon: "schedule",
    title: "The operation sets the schedule",
    description:
      "A load-out moves on tide, ballast and crane availability. The crew mobilises to the window the marine warranty surveyor confirms, and waits through the slips.",
  },
  {
    icon: "visibility_off",
    title: "Non-disruptive by default",
    description:
      "Positions are agreed in advance so nothing in frame is in anyone's way. No lighting rigs on the skid path, no drone over a live lift without clearance.",
  },
  {
    icon: "shield_lock",
    title: "Confidentiality as delivered",
    description:
      "Yard layout and fabrication method belong to the client. NDAs are executed before mobilisation and sensitive cuts are delivered gated rather than published.",
  },
]

export default function TopsideLoadoutPage() {
  return (
    <main>
      <JsonLd data={schema} />

      <ServiceHero
        breadcrumb="O&G Topside Loadout"
        chip="Yard to Barge"
        chipIcon="precision_manufacturing"
        media={SERVICE_HERO_MEDIA["og-topside-loadout"]}
        lede="A load-out happens once. We cover the whole operation as it runs — skidding, the SPMT walk, transfer onto the barge, sea-fastening and sail-away — from the ground, the quay and the air."
        title={
          <>
            O&amp;G Topside Loadout
            <br />
            <span className="text-white/60">documented as it happens</span>
          </>
        }
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Discuss Your Load-Out
            </CtaButton>
            {/* Points at this page's own film strip rather than at /our-work.
                The evidence is a scroll away, and sending a visitor to the hub
                to look for it is a longer route to the same films. */}
            <CtaButton
              href="#films"
              variant="secondary"
              className="w-full sm:w-fit"
            >
              Watch the load-out films
            </CtaButton>
          </>
        }
      />

      <ServiceSection
        align="lead"
        eyebrow="Coverage"
        title="The operation, end to end"
        lede="One crew, one continuous record. A load-out is a chain of dependent moves, and coverage that starts when the module is already on the barge has missed the part everyone upstream needs to see."
      >
        <div className="lg:col-span-7">
          <div className="relative">
            {/* Connecting line, inset to the centre of the number discs. */}
            <div
              aria-hidden="true"
              className="absolute top-4 bottom-4 left-4 hidden w-px bg-surface/15 sm:block"
            />
            <ol className="space-y-8">
              {phases.map((phase) => (
                <li
                  className="relative flex flex-col gap-3 sm:flex-row sm:gap-6"
                  key={phase.number}
                >
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-surface/20 bg-graphite font-mono text-[10px] font-medium tracking-[0.15em] text-surface/60">
                    {phase.number}
                  </span>
                  <div>
                    <h3 className="mb-1 font-headline text-base font-bold text-surface">
                      {phase.title}
                    </h3>
                    <p className="max-w-[62ch] font-body text-sm leading-relaxed text-industrial-grey">
                      {phase.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        band="panel"
        eyebrow="Evidence"
        id="films"
        lede="Load-outs Firstman has covered. Most of this service line is released under NDA — where a film is gated, the request form goes to the owner rather than to a mailbox."
        title="Load-out films"
      >
        <ServiceFilms category="O&G Topside Loadout" />
      </ServiceSection>

      <ServiceSection band="graphite" eyebrow="Scope" title="Output & access">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="glass-panel flex flex-col rounded-3xl p-6 md:p-8 lg:col-span-1 lg:p-10">
            <h3 className="mb-2 flex items-center gap-3 font-label text-xs font-bold tracking-widest text-primary uppercase">
              <span aria-hidden="true" className="block h-px w-8 bg-primary" />
              Deliverables
            </h3>
            {/* Equal-height rows so the list fills the panel beside a taller
                neighbour, and the rules land on the boundary between rows
                rather than closer to one label than the other. */}
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

          <div className="glass-panel group relative overflow-hidden rounded-3xl p-6 md:p-8 lg:col-span-2 lg:p-10">
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
                Working in a live yard
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {yardNotes.map((note) => (
                  <div key={note.title}>
                    <MaterialIcon
                      name={note.icon}
                      className="mb-3 block text-3xl! text-surface/60"
                    />
                    <h4 className="mb-1 font-headline text-sm font-bold text-surface">
                      {note.title}
                    </h4>
                    <p className="font-body text-sm leading-relaxed text-industrial-grey">
                      {note.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-10 flex items-center gap-2 border-t border-surface/10 pt-6 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
                <MaterialIcon name="badge" className="text-base!" />
                UAV and offshore survival credentials available on request
              </p>
            </div>
          </div>
        </div>
      </ServiceSection>

      <ServiceCta
        title="When is the load-out?"
        lede="Dates move. Tell us the window you are working to and we will hold the crew against it."
        action="Discuss Your Load-Out"
      />
    </main>
  )
}
