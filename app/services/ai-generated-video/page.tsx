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
    <main className="flex w-full flex-grow flex-col">
      <JsonLd data={pageSchema} />
      {/* Hero Section */}
      <section className="relative flex min-h-[716px] w-full items-center overflow-hidden bg-black pt-32 pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            aria-label="Industrial oil refinery complex at dusk with glowing red flares, seen from above"
            className="h-full w-full bg-cover bg-center"
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
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-24">
          <div className="mb-8 flex items-center gap-2 text-xs font-bold tracking-widest text-white/70 uppercase">
            <Link className="transition-colors hover:text-white" href="/">
              Home
            </Link>
            <MaterialIcon name="chevron_right" className="text-[14px]" />
            <span className="text-primary">AI-Generated Video</span>
          </div>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase">
              <MaterialIcon name="auto_awesome" className="text-[16px]" />
              Impossible-to-Film Scenes
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-black tracking-tight text-white uppercase font-stretch-semi-condensed md:text-6xl lg:text-7xl">
              AI-Generated Video <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-white to-industrial-grey bg-clip-text text-transparent">
                For Scenes You Can&apos;t Re-Shoot
              </span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              AI-generated recreations of scenes too hazardous or impossible to
              film live — from an offshore rig explosion to a full crew
              evacuation. We render these moments with cinematic realism, backed
              by copywriting that frames each sequence for training and
              communications.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                className="group flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-8 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-black"
                href="/contact"
              >
                Discuss Your Scene
                <MaterialIcon
                  name="arrow_forward"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                className="glass-panel flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 hover:border-primary"
                href="/our-work"
              >
                <MaterialIcon name="play_circle" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative HUD Elements */}
        <div className="absolute right-8 bottom-8 hidden font-mono text-xs text-primary opacity-50 md:block">
          AI RENDER [::] 4K | CINEMATIC PIPELINE | SEED LOCKED
        </div>
      </section>

      {/* Strategic Applications (Bento Grid) */}
      <section className="relative w-full bg-dark-ui py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
          <div className="mb-16 flex flex-col items-end justify-between border-b border-surface/10 pb-8 md:flex-row">
            <div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight text-surface uppercase md:text-4xl">
                Strategic Applications
              </h2>
              <p className="text-sm font-bold tracking-widest text-industrial-grey uppercase">
                When AI recreation makes sense
              </p>
            </div>
            <div className="mt-4 hidden gap-2 md:mt-0 md:flex">
              <span className="rounded border border-yellow-500/50 bg-yellow-500/20 px-2 py-1 font-mono text-[10px] text-yellow-500 uppercase">
                No Site Access Required
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="glass-panel group relative overflow-hidden rounded-2xl p-8 transition-colors hover:border-primary/50 md:col-span-2">
              <div
                className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at top right, rgba(209,32,39,0.4), transparent, transparent)",
                }}
              />
              <MaterialIcon
                name="emergency"
                className="relative z-10 mb-6 cursor-default text-4xl text-industrial-grey transition-colors hover:text-primary hover:[font-variation-settings:'FILL'_1]"
              />
              <h3 className="relative z-10 mb-3 text-xl font-bold text-surface uppercase">
                Incident & Emergency Recreation
              </h3>
              <p className="relative z-10 leading-relaxed text-industrial-grey">
                Recreate offshore incidents, fires, and evacuation sequences
                that could never be filmed safely on a live site — reconstructed
                frame-accurate from your reports and reference material for
                investigations, drills, and stakeholder briefings.
              </p>
            </div>
            {/* Card 2 & 3 */}
            {applicationCards.map((card) => (
              <div
                className="glass-panel group relative overflow-hidden rounded-2xl p-8 transition-colors hover:border-primary/50"
                key={card.title}
              >
                <MaterialIcon
                  name={card.icon}
                  className="relative z-10 mb-6 cursor-default text-4xl text-industrial-grey transition-colors hover:text-primary hover:[font-variation-settings:'FILL'_1]"
                />
                <h3 className="relative z-10 mb-3 text-xl font-bold text-surface uppercase">
                  {card.title}
                </h3>
                <p className="relative z-10 text-sm leading-relaxed text-industrial-grey">
                  {card.description}
                </p>
              </div>
            ))}
            {/* Card 4 */}
            <div className="glass-panel group relative overflow-hidden rounded-2xl bg-black p-8 transition-colors hover:border-primary/50 md:col-span-2">
              <div
                aria-label="Industrial workers in safety gear operating heavy machinery in a steel fabrication facility"
                className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-normal transition-all duration-500 dark:opacity-30 dark:mix-blend-luminosity dark:group-hover:mix-blend-normal"
                role="img"
                style={{
                  backgroundImage: "url('/images/stitch/f6f0469b18.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <MaterialIcon
                  name="history"
                  className="mb-4 cursor-default text-4xl text-white transition-colors hover:text-primary hover:[font-variation-settings:'FILL'_1]"
                />
                <h3 className="mb-2 text-xl font-bold text-white uppercase">
                  Historical & Inaccessible Events
                </h3>
                <p className="max-w-xl leading-relaxed text-white/70">
                  Reconstruct past milestones or restricted-access operations
                  that were never filmed — rebuilt from archival references into
                  cinematic footage for anniversaries, corporate storytelling,
                  and heritage records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
