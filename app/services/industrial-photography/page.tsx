import { CtaButton } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { PhotoCard } from "@/components/site/photo-card"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
import { JsonLd } from "@/components/seo/json-ld"
import { SERVICE_HERO_MEDIA } from "@/lib/hero-media"
import { pageMeta, graph, breadcrumbSchema, serviceSchema } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Industrial Photography Malaysia",
  description:
    "Industrial photography in Malaysia documenting critical structural phases, heavy lifts, and compliance checks for Oil & Gas and heavy industry sites.",
  path: "/services/industrial-photography",
})

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Industrial Photography",
      path: "/services/industrial-photography",
    },
  ]),
  serviceSchema({
    name: "Industrial Photography",
    description:
      "Ground-based industrial photography documenting structural phases, heavy lift operations, and compliance checkpoints on Oil & Gas and heavy industry sites.",
    path: "/services/industrial-photography",
  })
)

const iconHover =
  "transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"

// Two of the five coverage cards are photo-backed and stay dark in both themes;
// the other three are ordinary themed cards. Kept as literal markup rather than
// a data array because the spans differ per card.

export default function IndustrialPhotographyPage() {
  return (
    <main>
      <JsonLd data={pageSchema} />

      <ServiceHero
        breadcrumb="Industrial Photography"
        chip="Capability Specification"
        media={SERVICE_HERO_MEDIA["industrial-photography"]}
        lede="Documenting critical structural phases, heavy lifts, and compliance checks with high-fidelity, ground-based photography. Precise Video assets captured in demanding environments."
        tagline="For Sites, Teams & Comms"
        title="Industrial Photography"
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Discuss Your Coverage
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
        note={
          <div className="flex items-center gap-3 border-t border-white/15 pt-6">
            <MaterialIcon name="verified_user" className="text-primary" />
            <span className="font-label text-xs tracking-widest text-white/70 uppercase">
              Site permissions &amp; PPE protocols strictly adhered to
            </span>
          </div>
        }
      />

      <ServiceSection
        band="panel"
        eyebrow="Coverage"
        title="Photographic Coverage Parameters"
        lede="Categorized photographic applications for industrial entities."
      >
        {/* Four columns at lg, two at md, so the 2x2 anchor always lands on a
            whole number of tracks and the grid never ends ragged. Rows grow
            with their content instead of clipping at a fixed 240px.

            The row span is `lg` only. At four columns the anchor is a 2x2 block
            with the other four cards filling the two tracks beside it — the
            shape the layout is built around. At two columns that same span
            claims BOTH tracks for two whole rows, so the anchor became a
            full-width 504px slab and everything else was pushed below it. Full
            width for one row is the tablet form; the span is what makes it an
            anchor, and there is nothing left to anchor against. */}
        {/* The 15rem row floor is a multi-column device: it keeps the tracks
            even so the 2x2 anchor and the cards beside it line up. At one
            column there is nothing to line up with, and it became a 240px
            minimum on cards holding a glyph, a 16px title and two lines — which
            `justify-between` then spread to the corners. Below `md` the rows
            size to their content and the cards close up on their own. */}
        <div className="grid grid-cols-1 gap-6 md:auto-rows-[minmax(15rem,auto)] md:grid-cols-2 lg:grid-cols-4">
          {/* Anchor: structural phase records */}
          <PhotoCard
            alt="Aerial view of an oil refinery lit at night, distillation towers and pipework under a dusk sky"
            body="Video records of critical build and installation phases, captured alongside the compliance checkpoints that sign each one off, for internal archives and external reporting."
            className="md:col-span-2 lg:row-span-2"
            icon="domain"
            image="/images/pexels/photo-structural-phase.jpg"
            size="lg"
            title="Structural Phase Records"
          />

          <article className="glass-panel group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
            <MaterialIcon
              name="co_present"
              className={`block text-3xl! text-surface/60 ${iconHover}`}
            />
            <div className="mt-6">
              <h3 className="mb-2 font-headline text-base font-bold text-surface">
                Executive Presentations
              </h3>
              <p className="font-body text-xs leading-relaxed text-industrial-grey">
                High-impact Videos tailored for boardrooms and investor
                relations.
              </p>
            </div>
          </article>

          <article className="glass-panel group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
            <MaterialIcon
              name="campaign"
              className={`block text-3xl! text-surface/60 ${iconHover}`}
            />
            <div className="mt-6">
              <h3 className="mb-2 font-headline text-base font-bold text-surface">
                Corporate Comms
              </h3>
              <p className="font-body text-xs leading-relaxed text-industrial-grey">
                Engaging human-centric imagery for newsletters, PR, and internal
                portals.
              </p>
            </div>
          </article>

          <article className="glass-panel group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
            <MaterialIcon
              name="precision_manufacturing"
              className={`block text-3xl! text-surface/60 ${iconHover}`}
            />
            <div className="mt-6">
              <h3 className="mb-2 font-headline text-base font-bold text-surface">
                Heavy Lift Coverage
              </h3>
              <p className="font-body text-xs leading-relaxed text-industrial-grey">
                Lift and load-out sequences shot from agreed standoff positions,
                without unsupported technical measurement claims.
              </p>
            </div>
          </article>

          <PhotoCard
            alt="A worker in a hard hat and coveralls reaching into an open electrical control panel in an indoor switchgear room"
            body="Professional environmental portraits captured safely within active operational zones. Highlighting the human element of heavy industry."
            icon="group"
            image="/images/pexels/photo-team-portrait.jpg"
            size="sm"
            title="Team Portraits"
          />
        </div>
      </ServiceSection>

      <ServiceCta
        title="Elevate Your Video Standards"
        lede="Secure high-quality, claim-safe photographic documentation for your next industrial project or corporate report."
        action="Build a Stronger Video Library"
        footnote="Consultations available for upcoming deployments"
      />
    </main>
  )
}
