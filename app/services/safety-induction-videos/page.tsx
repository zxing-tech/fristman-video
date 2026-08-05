import { CtaButton } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbSchema, graph, pageMeta, serviceSchema } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Safety and Induction Videos",
  description:
    "Safety and induction video production in Malaysia covering site rules, PPE, hazards and emergency procedures for employees, contractors and visitors.",
  path: "/services/safety-induction-videos",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Safety and Induction Videos",
      path: "/services/safety-induction-videos",
    },
  ]),
  serviceSchema({
    name: "Safety and Induction Videos",
    description:
      "Customised safety and induction video production communicating site rules, hazards, emergency procedures and operational expectations to employees, contractors and visitors.",
    path: "/services/safety-induction-videos",
  })
)

const designedFor = [
  { icon: "construction", label: "Construction and Infrastructure Projects" },
  { icon: "factory", label: "Manufacturing & Industrial Facilities" },
  { icon: "oil_barrel", label: "Oil & Gas Operations" },
  { icon: "warehouse", label: "Warehouses & Logistics Centres" },
  { icon: "dns", label: "Data Centres" },
  { icon: "corporate_fare", label: "Corporate Offices" },
  { icon: "bolt", label: "Utilities & Power Plants" },
  { icon: "anchor", label: "Marine & Offshore Facilities" },
  { icon: "terrain", label: "Mining Operations" },
  { icon: "school", label: "Schools, Universities & Institutions" },
  { icon: "local_hospital", label: "Healthcare Facilities" },
  { icon: "apartment", label: "Hospitality & Commercial Buildings" },
]

const typicalContent = [
  { icon: "campaign", label: "Company introduction and safety culture" },
  { icon: "badge", label: "Site access procedures" },
  { icon: "engineering", label: "PPE requirements" },
  { icon: "warning", label: "Workplace hazards and risk awareness" },
  { icon: "emergency", label: "Emergency response procedures" },
  { icon: "directions_run", label: "Assembly points and evacuation routes" },
  { icon: "verified_user", label: "Safe work practices" },
  { icon: "block", label: "Restricted and high-risk areas" },
  {
    icon: "precision_manufacturing",
    label: "Equipment and machinery guidelines",
  },
  { icon: "recycling", label: "Environmental and housekeeping practices" },
  { icon: "lock", label: "Security procedures" },
  { icon: "groups", label: "Visitor and contractor requirements" },
  {
    icon: "subtitles",
    label:
      "On-screen graphics, animations and multilingual subtitles (optional)",
  },
]

export default function SafetyInductionVideosPage() {
  return (
    <main>
      <JsonLd data={schema} />

      <ServiceHero
        breadcrumb="Safety and Induction Videos"
        chip="Safety & Induction Media"
        chipIcon="health_and_safety"
        lede="A well-produced safety and induction video does more than fulfil compliance requirements—it sets the standard for your workplace culture. Firstman Productions creates engaging, professional safety and induction videos that clearly communicate site rules, hazards, emergency procedures and operational expectations."
        readout="INDUCTION // MULTILINGUAL"
        tagline="Safety Starts Before the First Step"
        title="Safety & Induction Videos"
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Discuss Project Scope
            </CtaButton>
            <CtaButton
              href="/our-work"
              variant="secondary"
              className="w-full sm:w-fit"
            >
              View Sample Deliverables
            </CtaButton>
          </>
        }
      />

      {/* Both sections on this page run a long lede — the two heaviest blocks
          of prose anywhere under /services — so the heading anchors left and
          the paragraph moves across to the right instead of being centred. */}
      <ServiceSection
        align="split"
        eyebrow="Applications"
        title="Who It's Designed For"
        lede="Our safety and induction videos are tailored for organisations where clear communication and safe work practices are critical. Whether onboarding new employees or preparing contractors before they enter site, our videos deliver consistent messaging that reduces training time and improves understanding."
      >
        {/* Twelve one-line labels, so this is a list — it used to be twelve
            equal glass cards, which gave a single word per card the same weight
            as a whole proposition elsewhere on the site. */}
        <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {designedFor.map((item) => (
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
        align="split"
        band="panel"
        eyebrow="Scope"
        title="What Gets Captured"
        lede="Every organisation operates differently, so each video is customised to reflect your procedures, facilities and safety requirements. We work closely with your HSE team to ensure all critical information is presented clearly and professionally."
      >
        <p className="mb-8 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
          Typical content includes
        </p>
        <ul className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
          {typicalContent.map((item) => (
            <li className="group flex items-start gap-3" key={item.label}>
              <MaterialIcon
                name={item.icon}
                className="mt-0.5 shrink-0 text-lg! text-primary transition-all group-hover:[font-variation-settings:'FILL'_1]"
              />
              <span className="font-body text-sm leading-relaxed text-surface">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Trust signal, moved off the hero. It sat under the hero CTAs as a
            fourth block of fine print in a band that was already 921px tall. */}
        <div className="glass-panel mt-16 flex items-start gap-4 rounded-2xl p-6 md:p-8">
          <MaterialIcon
            name="verified_user"
            className="shrink-0 text-primary"
          />
          <div>
            <h3 className="mb-2 font-headline text-base font-bold text-surface">
              Safety-Conscious Planning
            </h3>
            <p className="max-w-[62ch] font-body text-sm leading-relaxed text-industrial-grey">
              Operations executed with strict adherence to site protocols. Full
              HSSE credentials and operational documentation available upon
              request prior to deployment.
            </p>
          </div>
        </div>
      </ServiceSection>

      <ServiceCta
        title="Brief us on your site induction."
        action="Discuss Project Scope"
      />
    </main>
  )
}
