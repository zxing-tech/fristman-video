import Link from "next/link"

import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
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
    { name: "Services", path: "/services" },
    { name: "AI-Generated Video", path: "/services/ai-generated-video" },
  ]),
  serviceSchema({
    name: "AI-Generated Video",
    description:
      "AI-generated recreations of hazardous or inaccessible industrial scenes for safety training, concept visualization, and corporate communications.",
    path: "/services/ai-generated-video",
  })
)

const applicationCards = [
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
    <main className="flex-grow flex flex-col w-full">
      <JsonLd data={pageSchema} />
      {/* Hero Section */}
      <section className="relative w-full min-h-[716px] flex items-center pt-32 pb-16 overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            aria-label="Industrial oil refinery complex at dusk with glowing red flares, seen from above"
            className="w-full h-full bg-cover bg-center"
            role="img"
            style={{ backgroundImage: "url('/images/stitch/e13ed416c1.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(209,32,39,0.05) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest mb-8">
            <Link className="hover:text-white transition-colors" href="/services">
              Services
            </Link>
            <MaterialIcon name="chevron_right" className="text-[14px]" />
            <span className="text-primary">AI-Generated Video</span>
          </div>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <MaterialIcon name="auto_awesome" className="text-[16px]" />
              Impossible-to-Film Scenes
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 uppercase">
              AI-Generated Video <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-industrial-grey">
                For Scenes You Can&apos;t Re-Shoot
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              AI-generated recreations of scenes too hazardous or impossible to film live — from an
              offshore rig explosion to a full crew evacuation. We render these moments with cinematic
              realism, backed by copywriting that frames each sequence for training and communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black border border-primary transition-all duration-300 flex items-center justify-center gap-2 group"
                href="/contact"
              >
                Discuss Your Scene
                <MaterialIcon
                  name="arrow_forward"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                className="glass-panel text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:border-primary transition-all duration-300 flex items-center justify-center gap-2"
                href="/case-studies"
              >
                <MaterialIcon name="play_circle" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative HUD Elements */}
        <div className="absolute bottom-8 right-8 text-primary font-mono text-xs opacity-50 hidden md:block">
          AI RENDER [::] 4K | CINEMATIC PIPELINE | SEED LOCKED
        </div>
      </section>

      {/* Strategic Applications (Bento Grid) */}
      <section className="w-full py-24 bg-dark-ui relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-surface/10 pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-surface uppercase tracking-tight mb-2">
                Strategic Applications
              </h2>
              <p className="text-industrial-grey uppercase tracking-widest text-sm font-bold">
                When AI recreation makes sense
              </p>
            </div>
            <div className="hidden md:flex gap-2 mt-4 md:mt-0">
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-[10px] font-mono uppercase rounded border border-yellow-500/50">
                No Site Access Required
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="glass-panel p-8 rounded-2xl group hover:border-primary/50 transition-colors md:col-span-2 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at top right, rgba(209,32,39,0.4), transparent, transparent)",
                }}
              />
              <MaterialIcon
                name="emergency"
                className="text-4xl text-industrial-grey mb-6 transition-colors cursor-default z-10 relative hover:text-primary hover:[font-variation-settings:'FILL'_1]"
              />
              <h3 className="text-xl font-bold text-surface uppercase mb-3 z-10 relative">
                Incident & Emergency Recreation
              </h3>
              <p className="text-industrial-grey leading-relaxed z-10 relative">
                Recreate offshore incidents, fires, and evacuation sequences that could never be filmed
                safely on a live site — reconstructed frame-accurate from your reports and reference
                material for investigations, drills, and stakeholder briefings.
              </p>
            </div>
            {/* Card 2 & 3 */}
            {applicationCards.map((card) => (
              <div
                className="glass-panel p-8 rounded-2xl group hover:border-primary/50 transition-colors relative overflow-hidden"
                key={card.title}
              >
                <MaterialIcon
                  name={card.icon}
                  className="text-4xl text-industrial-grey mb-6 transition-colors cursor-default z-10 relative hover:text-primary hover:[font-variation-settings:'FILL'_1]"
                />
                <h3 className="text-xl font-bold text-surface uppercase mb-3 z-10 relative">
                  {card.title}
                </h3>
                <p className="text-industrial-grey leading-relaxed text-sm z-10 relative">
                  {card.description}
                </p>
              </div>
            ))}
            {/* Card 4 */}
            <div className="glass-panel bg-black p-8 rounded-2xl group hover:border-primary/50 transition-colors md:col-span-2 relative overflow-hidden">
              <div
                aria-label="Industrial workers in safety gear operating heavy machinery in a steel fabrication facility"
                className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-normal dark:opacity-30 dark:mix-blend-luminosity dark:group-hover:mix-blend-normal transition-all duration-500"
                role="img"
                style={{ backgroundImage: "url('/images/stitch/f6f0469b18.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end">
                <MaterialIcon
                  name="history"
                  className="text-4xl text-white mb-4 transition-colors cursor-default hover:text-primary hover:[font-variation-settings:'FILL'_1]"
                />
                <h3 className="text-xl font-bold text-white uppercase mb-2">
                  Historical & Inaccessible Events
                </h3>
                <p className="text-white/70 leading-relaxed max-w-xl">
                  Reconstruct past milestones or restricted-access operations that were never filmed —
                  rebuilt from archival references into cinematic footage for anniversaries, corporate
                  storytelling, and heritage records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
