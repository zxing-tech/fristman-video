import { CtaButton } from "@/components/site/cta-button"
import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceFilms } from "@/components/site/service-films"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
import { SERVICE_HERO_MEDIA } from "@/lib/hero-media"
import { breadcrumbSchema, graph, pageMeta, serviceSchema } from "@/lib/seo"

export const metadata = pageMeta({
  title: "O&G Offshore Installation",
  description:
    "Offshore installation coverage for Oil & Gas campaigns in Southeast Asia: jacket launch, upending, piling, topside lift and hook-up, filmed from vessel and air.",
  path: "/services/og-offshore-installation",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "O&G Offshore Installation",
      path: "/services/og-offshore-installation",
    },
  ]),
  serviceSchema({
    name: "O&G Offshore Installation",
    description:
      "Vessel-based and aerial documentation of offshore installation campaigns, covering jacket launch and upending, piling, topside lift and mating, and hook-up.",
    path: "/services/og-offshore-installation",
  })
)

// What actually happens on an installation campaign, in the order it happens.
// A one-line label each: this is a scope list, not an essay.
const scope = [
  { icon: "sailing", label: "Tow-out and arrival on location" },
  { icon: "waves", label: "Jacket launch from the barge" },
  { icon: "swap_vert", label: "Upending and setting on the seabed" },
  { icon: "vertical_align_bottom", label: "Piling and levelling" },
  { icon: "precision_manufacturing", label: "Topside lift and mating" },
  { icon: "hub", label: "Bridge and flare tie-ins" },
  { icon: "build", label: "Hook-up and commissioning work fronts" },
  { icon: "engineering", label: "Deck crews and lifting operations" },
  { icon: "flight_takeoff", label: "Aerial context of the completed field" },
]

// The conditions the work runs under. All four are in PRODUCT.md as operating
// context, not as marketing: this is the part of the job a project manager is
// actually buying.
const mobilisation = [
  {
    icon: "verified_user",
    title: "Crew cleared to travel offshore",
    description:
      "Offshore survival and helicopter escape training, and a certified UAV operator on the manifest. Credentials go to the duty holder with the POB request, before anyone books a seat.",
  },
  {
    icon: "cyclone",
    title: "Weather windows, not calendars",
    description:
      "Installation is scheduled against sea state and vessel movement. The crew mobilises inside the marine window and stays for the slips, because a campaign does not repeat a lift for the camera.",
  },
  {
    icon: "schedule",
    title: "Round-the-clock operations",
    description:
      "Lifts run through the night. Coverage is planned to sit across shifts rather than office hours, and the edit accounts for what a night frame can and cannot carry.",
  },
  {
    icon: "shield_lock",
    title: "Everything treated as restricted",
    description:
      "Field layout, procedure and partner identity stay the client's. NDAs are executed before mobilisation, and material is delivered gated by default and released only on written approval.",
  },
]

export default function OffshoreInstallationPage() {
  return (
    <main>
      <JsonLd data={schema} />

      <ServiceHero
        breadcrumb="O&G Offshore Installation"
        chip="Offshore Campaign"
        chipIcon="anchor"
        media={SERVICE_HERO_MEDIA["og-offshore-installation"]}
        lede="Jacket launch, upending, piling and topside mating, filmed on location from the vessel and from the air. Offshore-certified crew, mobilised inside the marine window and on the manifest with everyone else."
        title={
          <>
            O&amp;G Offshore Installation
            <br />
            <span className="text-white/60">filmed on location</span>
          </>
        }
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Discuss Your Campaign
            </CtaButton>
            <CtaButton
              href="#films"
              variant="secondary"
              className="w-full sm:w-fit"
            >
              See the campaign work
            </CtaButton>
          </>
        }
      />

      <ServiceSection
        align="split"
        eyebrow="Coverage"
        title="What gets covered offshore"
        lede="An installation campaign is a sequence of one-time events separated by days of waiting. Coverage is planned around the events and stays on board through the gaps, because a jacket is launched once and a topside is mated once."
      >
        {/* A list, not twelve cards. Each of these is a single line, and giving
            a one-line label the weight of a whole panel is the failure the
            safety page's own scope list already corrected. */}
        <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {scope.map((item) => (
            <li
              className="group flex items-center gap-4 border-b border-surface/10 py-4"
              key={item.label}
            >
              <MaterialIcon
                name={item.icon}
                className="shrink-0 text-surface/50 transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
              />
              <span className="font-body text-sm leading-snug font-medium text-surface">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        band="panel"
        eyebrow="Evidence"
        id="films"
        lede="Installation campaigns Firstman has filmed. Every one of them is released under NDA — this is the service line where the client's confidentiality is the point, so what is shown here is that the work exists and who it was for."
        title="Campaign films"
      >
        <ServiceFilms category="O&G Offshore Installation" />
      </ServiceSection>

      <ServiceSection
        align="split"
        band="graphite"
        eyebrow="Mobilisation"
        title="Getting a camera crew offshore"
        lede="The hard part of this service is not the cinematography. It is arriving on a working installation vessel, cleared, inducted and out of the way, on the day the lift happens."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {mobilisation.map((item) => (
            <div
              className="glass-panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-8"
              key={item.title}
            >
              <div className="mb-4 flex items-center gap-4 md:mb-0 md:block">
                <MaterialIcon
                  name={item.icon}
                  className="block shrink-0 text-3xl! text-surface/60 transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1] md:mb-6"
                />
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

      <ServiceCta
        title="Tell us about the campaign."
        lede="Scope, vessel, duty holder and the window you are working to. We will come back with what the crew needs to be on board."
        action="Discuss Your Campaign"
      />
    </main>
  )
}
