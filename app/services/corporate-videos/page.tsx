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
      <div className="max-w-[1280px] mx-auto px-8 pt-28 flex items-center gap-2 text-xs font-label uppercase tracking-widest text-industrial-grey">
        <Link className="hover:text-surface transition-colors" href="/">
          Home
        </Link>
        <MaterialIcon name="chevron_right" className="text-[14px]" />
        <span className="text-surface font-bold">Corporate Videos</span>
      </div>

      {/* Hero Section */}
      <header className="relative w-full min-h-[819px] flex items-center justify-center mt-8 px-4 overflow-hidden bg-black">
        {/* Background Image with FUI Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full absolute inset-0"
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
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 md:px-8 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/50 bg-black/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-white">
              Service Protocol Active
            </span>
          </div>
          <h1 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl leading-none tracking-tighter text-white mb-6 max-w-4xl">
            CORPORATE
            <br />
            <span className="text-gradient">VIDEOS</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed border-l-2 border-primary pl-6 py-2">
            Capture the scale, complexity and operational story of large
            industrial environments with cinematic UAV and ground-based
            production.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="group inline-flex items-center justify-center gap-3 bg-primary text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-black hover:shadow-[0_0_20px_rgba(209,32,39,0.4)] transition-all duration-300"
              href="/contact"
            >
              Discuss Your Production
              <MaterialIcon
                name="arrow_forward"
                className="text-[18px] group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Target Audience Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl tracking-tight text-surface mb-4">
              Strategic Applications
            </h2>
            <p className="font-body text-industrial-grey max-w-xl">
              Tailored cinematic assets designed for specific stakeholder
              requirements and operational objectives.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="glass-panel p-8 rounded-2xl group hover:border-primary transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-surface/10 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                <MaterialIcon
                  name={audience.icon}
                  className="text-surface text-2xl [font-variation-settings:'FILL'_0] group-hover:[font-variation-settings:'FILL'_1] group-hover:text-primary [transition:font-variation-settings_0.3s_ease,color_0.3s_ease]"
                />
              </div>
              <h3 className="font-headline font-bold text-lg text-surface mb-3 tracking-wide">
                {audience.title}
              </h3>
              <p className="font-body text-sm text-industrial-grey leading-relaxed">
                {audience.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables & Workflow Bento Grid */}
      <section className="py-24 px-4 md:px-8 max-w-[1280px] mx-auto">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-surface mb-12 text-center">
          Output & Execution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Deliverables Card */}
          <div className="md:col-span-1 glass-panel rounded-[24px] p-8 flex flex-col border-t-2 border-t-primary/50">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
              <MaterialIcon name="folder_open" fill className="text-lg" />
              Deliverables
            </h3>
            <ul className="space-y-4 flex-grow text-sm">
              {deliverables.map((item) => (
                <li className="flex items-start gap-3" key={item.label}>
                  <MaterialIcon name={item.icon} className="text-surface/40 text-base mt-0.5" />
                  <span className="text-surface/90 font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Workflow Card */}
          <div className="md:col-span-2 glass-panel rounded-[24px] p-8 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-2">
              <MaterialIcon name="route" fill className="text-lg" />
              Production Workflow
            </h3>
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-surface/10 hidden sm:block" />
              <div className="space-y-6">
                {workflowSteps.map((step) => (
                  <div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative z-10"
                    key={step.number}
                  >
                    <div
                      className={
                        step.active
                          ? "w-8 h-8 rounded-full bg-graphite border border-primary flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs z-10"
                          : "w-8 h-8 rounded-full bg-graphite border border-surface/20 flex items-center justify-center flex-shrink-0 text-surface/50 font-bold text-xs z-10 group-hover:border-primary group-hover:text-primary transition-colors"
                      }
                    >
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-bold text-surface uppercase text-sm mb-1">{step.title}</h4>
                      <p className="text-industrial-grey text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-end gap-6 text-xs text-industrial-grey uppercase tracking-widest font-bold">
          <span className="flex items-center gap-1">
            <MaterialIcon name="info" className="text-[14px]" /> Confirm site permissions
          </span>
          <span className="flex items-center gap-1">
            <MaterialIcon name="badge" className="text-[14px]" /> Credentials available upon
            request
          </span>
        </div>
      </section>
    </main>
  )
}
