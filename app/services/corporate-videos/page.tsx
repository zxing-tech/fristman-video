import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbSchema, graph, pageMeta, serviceSchema } from "@/lib/seo"

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

const workflowSteps = [
  {
    number: "01",
    title: "Brief & Objectives",
    description:
      "Aligning on required assets, target audience, and key visual messaging priorities.",
    active: true,
  },
  {
    number: "02",
    title: "Site Planning",
    description:
      "Reviewing site access, evaluating safety constraints, and scheduling industrial visual documentation.",
    active: false,
  },
  {
    number: "03",
    title: "Capture",
    description:
      "Execution of drone-enabled capture and ground cinematography with minimal operational footprint.",
    active: false,
  },
  {
    number: "04",
    title: "Edit & Delivery",
    description:
      "Post-production formatting, color grading, and secure delivery of finalized assets.",
    active: false,
  },
]

export default function CorporateVideosPage() {
  return (
    <main>
      <JsonLd data={schema} />
      {/* Breadcrumbs */}
      <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-8 pt-28 font-label text-xs tracking-widest text-industrial-grey uppercase">
        <Link className="transition-colors hover:text-surface" href="/">
          Home
        </Link>
        <MaterialIcon name="chevron_right" className="text-[14px]" />
        <span className="font-bold text-surface">Corporate Videos</span>
      </div>

      {/* Hero Section */}
      <header className="relative mt-8 flex min-h-[819px] w-full items-center justify-center overflow-hidden bg-black px-4">
        {/* Background Image with FUI Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/stitch/57734f86d7.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(209,32,39,0.05) 1px, transparent 1px), linear-gradient(rgba(209,32,39,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-start px-4 md:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-black/50 px-3 py-1 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-[10px] font-bold tracking-widest text-white uppercase">
              Service Protocol Active
            </span>
          </div>
          <h1 className="mb-6 max-w-4xl font-headline text-4xl leading-none font-black tracking-tight text-white font-stretch-semi-condensed md:text-7xl lg:text-8xl">
            CORPORATE
            <br />
            <span className="text-gradient">VIDEOS</span>
          </h1>
          <p className="mb-10 max-w-2xl border-l-2 border-primary py-2 pl-6 font-body text-lg leading-relaxed text-white/70 md:text-xl">
            Capture the scale, complexity and operational story of large
            industrial environments with cinematic UAV and ground-based
            production.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-black hover:shadow-[0_0_20px_rgba(209,32,39,0.4)]"
              href="/contact"
            >
              Discuss Your Production
              <MaterialIcon
                name="arrow_forward"
                className="text-[18px] transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Target Audience Section */}
      <section className="mx-auto max-w-[1280px] px-4 py-24 md:px-8">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-surface md:text-4xl">
              Strategic Applications
            </h2>
            <p className="max-w-xl font-body text-industrial-grey">
              Tailored cinematic assets designed for specific stakeholder
              requirements and operational objectives.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="glass-panel group rounded-2xl p-8 transition-all duration-300 hover:border-primary"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-surface/10 bg-background transition-colors group-hover:border-primary">
                <MaterialIcon
                  name={audience.icon}
                  className="text-2xl text-surface [font-variation-settings:'FILL'_0] [transition:font-variation-settings_0.3s_ease,color_0.3s_ease] group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                />
              </div>
              <h3 className="mb-3 font-headline text-lg font-bold tracking-wide text-surface">
                {audience.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-industrial-grey">
                {audience.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables & Workflow Bento Grid */}
      <section className="mx-auto max-w-[1280px] px-4 py-24 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-black tracking-tighter text-surface uppercase">
          Output & Execution
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Deliverables Card */}
          <div className="glass-panel flex flex-col rounded-[24px] border-t-2 border-t-primary/50 p-8 md:col-span-1">
            <h3 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-widest text-primary uppercase">
              <MaterialIcon name="folder_open" fill className="text-lg" />
              Deliverables
            </h3>
            <ul className="flex-grow space-y-4 text-sm">
              {deliverables.map((item) => (
                <li className="flex items-start gap-3" key={item.label}>
                  <MaterialIcon
                    name={item.icon}
                    className="mt-0.5 text-base text-surface/40"
                  />
                  <span className="font-medium text-surface/90">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Workflow Card */}
          <div className="glass-panel group relative overflow-hidden rounded-[24px] p-8 md:col-span-2">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            <h3 className="mb-8 flex items-center gap-2 text-sm font-bold tracking-widest text-primary uppercase">
              <MaterialIcon name="route" fill className="text-lg" />
              Production Workflow
            </h3>
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-4 bottom-4 left-4 hidden w-0.5 bg-surface/10 sm:block" />
              <div className="space-y-6">
                {workflowSteps.map((step) => (
                  <div
                    className="relative z-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
                    key={step.number}
                  >
                    <div
                      className={
                        step.active
                          ? "z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary bg-graphite text-xs font-bold text-primary"
                          : "z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-surface/20 bg-graphite text-xs font-bold text-surface/50 transition-colors group-hover:border-primary group-hover:text-primary"
                      }
                    >
                      {step.number}
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-surface uppercase">
                        {step.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-industrial-grey">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-end gap-6 text-xs font-bold tracking-widest text-industrial-grey uppercase">
          <span className="flex items-center gap-1">
            <MaterialIcon name="info" className="text-[14px]" /> Confirm site
            permissions
          </span>
          <span className="flex items-center gap-1">
            <MaterialIcon name="badge" className="text-[14px]" /> Credentials
            available upon request
          </span>
        </div>
      </section>
    </main>
  )
}
