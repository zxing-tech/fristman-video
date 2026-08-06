import { CtaButton } from "@/components/site/cta-button"
import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { PhotoCard } from "@/components/site/photo-card"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
import { breadcrumbSchema, graph, pageMeta, serviceSchema } from "@/lib/seo"

export const metadata = pageMeta({
  title: "AI-Generated Video Production",
  description:
    "AI-generated video recreations of hazardous scenes for Oil & Gas sites in Malaysia and Southeast Asia, built for safety training and stakeholder communications.",
  path: "/services/ai-generated-video",
})

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "AI-Generated Video", path: "/services/ai-generated-video" },
  ]),
  serviceSchema({
    name: "AI-Generated Video",
    description:
      "AI-generated recreations of hazardous or inaccessible industrial scenes for safety training, concept visualization, and corporate communications.",
    path: "/services/ai-generated-video",
  })
)

const supportingCards = [
  {
    icon: "health_and_safety",
    title: "Safety & HSE Training",
    description:
      "Visualise worst-case scenarios (blowouts, gas releases, evacuations) so crews train against realistic footage without any real-world risk.",
  },
  {
    icon: "lightbulb",
    title: "Concept & Pitch Visualization",
    description:
      "Render proposed facilities, future project phases, or planned events before they exist, giving investors and stakeholders a cinematic preview.",
  },
]

export default function AiGeneratedVideoPage() {
  return (
    <main>
      <JsonLd data={pageSchema} />

      <ServiceHero
        breadcrumb="AI-Generated Video"
        chip="Impossible-to-Film Scenes"
        chipIcon="auto_awesome"
        lede="AI-generated recreations of scenes too hazardous or impossible to film live — from an offshore rig explosion to a full crew evacuation. We render these moments with cinematic realism, backed by copywriting that frames each sequence for training and communications."
        readout="CINEMATIC PIPELINE // SEED LOCKED"
        title={
          <>
            AI-Generated Video
            <br />
            <span className="text-white/60">
              for Scenes You Can&apos;t Re-Shoot
            </span>
          </>
        }
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Discuss Your Scene
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
        band="panel"
        eyebrow="When AI Recreation Makes Sense"
        title="Strategic Applications"
      >
        {/* Neutral chip, not a second hue. This ran in yellow, which spent a
            colour the system does not have — Signal Red is the only chroma. */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-surface/15 bg-surface/5 px-4 py-1.5 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
            <MaterialIcon name="location_off" className="text-base!" />
            No Site Access Required
          </span>
        </div>

        {/* Three columns wait for `lg`, the same call the homepage bento makes.
            With two of three tracks spanned by the photo card and the heritage
            panel, the two supporting cards were left 218px at 768px — and one
            of them is a photo card, which stops being one when the picture is a
            strip above the scrim. At two columns the spanning cards run the
            full row and the supporting pair splits it at 340px. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* The photograph belongs to the flagship capability. It used to back
              the heritage card at the bottom of the grid, which made the least
              important panel the heaviest thing on the page. */}
          <PhotoCard
            alt="Firefighters in full turnout gear aiming hose streams at a large controlled training fire"
            body="Recreate offshore incidents, fires, and evacuation sequences that could never be filmed safely on a live site — reconstructed frame-accurate from your reports and reference material for investigations, drills, and stakeholder briefings."
            className="md:col-span-2"
            icon="emergency"
            image="/images/pexels/ai-incident-recreation.jpg"
            size="lg"
            title="Incident & Emergency Recreation"
          />

          {supportingCards.map((card) => (
            <article
              className="glass-panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-8"
              key={card.title}
            >
              <div className="mb-4 flex items-center gap-4 md:mb-0 md:block">
                <MaterialIcon
                  name={card.icon}
                  className="block shrink-0 text-3xl! text-surface/60 transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1] md:mb-6"
                />
                <h3 className="font-headline text-xl font-bold text-surface md:mb-3">
                  {card.title}
                </h3>
              </div>
              <p className="font-body text-sm leading-relaxed text-industrial-grey">
                {card.description}
              </p>
            </article>
          ))}

          <article className="glass-panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:col-span-2 md:p-8 lg:p-10">
            <div className="mb-4 flex items-center gap-4 md:mb-0 md:block">
              <MaterialIcon
                name="history"
                className="block shrink-0 text-3xl! text-surface/60 transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1] md:mb-6"
              />
              <h3 className="font-headline text-xl font-bold text-surface md:mb-3">
                Historical &amp; Inaccessible Events
              </h3>
            </div>
            <p className="max-w-[62ch] font-body text-sm leading-relaxed text-industrial-grey">
              Reconstruct past milestones or restricted-access operations that
              were never filmed — rebuilt from archival references into
              cinematic footage for anniversaries, corporate storytelling, and
              heritage records.
            </p>
          </article>
        </div>
      </ServiceSection>

      <ServiceCta
        title="Describe the scene you can't shoot."
        action="Discuss Your Scene"
      />
    </main>
  )
}
