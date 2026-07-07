import type { Metadata } from "next"

import { MaterialIcon } from "@/components/site/material-icon"
import { SectionLabel } from "@/components/site/section-label"
import { CtaButton } from "@/components/site/cta-button"
import { ServiceCard } from "@/components/site/service-card"

export const metadata: Metadata = {
  description:
    "Cinematic UAV and long term time-lapse visual documentation & reporting. Precision data capture, safety-first deployment and high fidelity deliverables for the energy and industrial sectors.",
}

const agencyLogos = [
  { src: "/images/clients/agency-01.png", alt: "Leo Burnett" },
  { src: "/images/clients/agency-02.png", alt: "M&C Saatchi" },
  { src: "/images/clients/agency-03.png", alt: "deFINE International" },
  { src: "/images/clients/agency-04.png", alt: "Pat-Lin Communications" },
  { src: "/images/clients/agency-05.png", alt: "Emerald Communications" },
  { src: "/images/clients/agency-06.png", alt: "PR Communications" },
  { src: "/images/clients/agency-07.png", alt: "Livescape" },
  { src: "/images/clients/agency-08.png", alt: "arc" },
  { src: "/images/clients/agency-09.png", alt: "Time Out Solutions" },
  { src: "/images/clients/agency-10.png", alt: "Ben Line Agencies" },
  { src: "/images/clients/agency-11.png", alt: "Enfiniti Vision Media" },
  { src: "/images/clients/agency-12.png", alt: "Media Prima" },
]

const clienteleLogos = [
  { src: "/images/clients/clientele-01.png", alt: "BWW" },
  { src: "/images/clients/clientele-02.png", alt: "Petrofac" },
  { src: "/images/clients/clientele-03.png", alt: "ALAM" },
  { src: "/images/clients/clientele-04.png", alt: "Malaysia Airports" },
  { src: "/images/clients/clientele-05.png", alt: "GIVI" },
  { src: "/images/clients/clientele-06.png", alt: "NORR Systems" },
  { src: "/images/clients/clientele-07.png", alt: "Toastmasters International" },
  { src: "/images/clients/clientele-08.png", alt: "Bayer" },
  { src: "/images/clients/clientele-09.png", alt: "DKSH" },
  { src: "/images/clients/clientele-10.png", alt: "Mercedes-Benz" },
  { src: "/images/clients/clientele-11.png", alt: "Belum Rainforest Resort" },
  { src: "/images/clients/clientele-12.png", alt: "BTL" },
  { src: "/images/clients/clientele-13.png", alt: "Eco Balance" },
  { src: "/images/clients/clientele-14.png", alt: "YouTube" },
  { src: "/images/clients/clientele-15.png", alt: "Visual Retale" },
  { src: "/images/clients/clientele-16.png", alt: "Chow Tai Fook" },
]

const serviceCards = [
  {
    icon: "movie",
    title: "Corporate Videos",
    summary:
      "High-end cinematic production for corporate communications, marketing, and investor relations within heavy industry.",
    href: "/services/corporate-videos",
  },
  {
    icon: "factory",
    title: "Large-Scale Facility Overviews",
    summary:
      "Comprehensive aerial and ground visual acquisition of extensive industrial complexes, refineries and fabrication yards.",
    href: "/services/facility-overview-films",
  },
  {
    icon: "timelapse",
    title: "Aerial Progression & Timelapses",
    summary:
      "Long-term visual documentation of construction and engineering projects to track progress and milestones.",
    href: "/services/progression-timelapse",
  },
  {
    icon: "perm_media",
    title: "Visual Asset Documentation",
    summary:
      "Systematic photographic and video recording of critical infrastructure assets for maintenance and archival purposes.",
    href: "/services/visual-documentation",
  },
  {
    icon: "auto_awesome",
    title: "AI-Generated Video",
    summary:
      "AI-generated recreations of scenes too hazardous or impossible to film live — from offshore incident simulations to emergency evacuation sequences — rendered with cinematic realism.",
    href: "/services/ai-generated-video",
  },
  {
    icon: "assessment",
    title: "Inspection Reports & Data Delivery",
    summary:
      "Structured delivery of high-resolution visual data integrated into comprehensive inspection reports.",
    href: "/services/industrial-photography",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full min-h-[921px] flex items-center justify-center pt-24 overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full opacity-50 dark:opacity-40"
            style={{ backgroundImage: "url('/images/stitch/163ca894fb.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="scanning-line z-10" />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-8 w-full flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-3/5 space-y-8">
            <SectionLabel withLine>Industrial Visual Data</SectionLabel>
            <h1 className="font-headline font-black text-5xl md:text-7xl leading-[1.1] tracking-tight">
              Industrial Drone Cinematography for <span className="text-primary">Oil & Gas</span> and
              Heavy Industry
            </h1>
            <p className="font-body text-industrial-grey text-lg max-w-2xl leading-relaxed">
              Cinematic UAV and long term time-lapse visual documentation & reporting. Precision data
              capture, safety-first deployment and high fidelity deliverables for the energy and
              industrial sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CtaButton href="/contact" arrow className="w-full sm:w-fit">
                Get a Full Quote
              </CtaButton>
              <CtaButton href="/case-studies" variant="secondary" className="w-full sm:w-fit">
                View Our Work
              </CtaButton>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <div className="glass-panel rounded-2xl p-8 space-y-6 border-l-2 border-l-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <MaterialIcon name="hub" className="text-6xl" />
              </div>
              <h3 className="font-headline font-bold text-xl mb-4 border-b border-surface/10 pb-4">
                What You Can Count On
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                    <MaterialIcon name="location_on" className="text-primary text-sm" />
                  </div>
                  <span className="font-label text-sm uppercase tracking-wider">
                    Malaysia • Sarawak • Singapore • Indonesia • Brunei
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-surface/5 flex items-center justify-center border border-surface/10">
                    <MaterialIcon name="schedule" className="text-surface text-sm" />
                  </div>
                  <span className="font-label text-sm uppercase tracking-wider text-industrial-grey">
                    Quick video project turnaround
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-surface/5 flex items-center justify-center border border-surface/10">
                    <MaterialIcon name="verified_user" className="text-surface text-sm" />
                  </div>
                  <span className="font-label text-sm uppercase tracking-wider text-industrial-grey">
                    Offshore readiness with certified crew
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-surface/5 flex items-center justify-center border border-surface/10">
                    <MaterialIcon name="high_quality" className="text-surface text-sm" />
                  </div>
                  <span className="font-label text-sm uppercase tracking-wider text-industrial-grey">
                    Confidentiality at every step
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Clientele Logo Wall */}
      <section className="w-full bg-dark-ui border-y border-surface/10 py-14 overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-8 mb-10 text-center">
          <SectionLabel className="mb-3 block">Our Clientele</SectionLabel>
          <h2 className="font-headline font-bold text-2xl md:text-3xl">
            We&apos;ve produced corporate video for these companies
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 md:gap-8 pl-4 md:pl-8">
            <span className="shrink-0 bg-primary text-white font-label font-bold uppercase tracking-wider text-[11px] md:text-xs px-5 md:px-8 py-2.5 rounded-md text-center w-[104px] md:w-[150px]">
              Agencies
            </span>
            <div className="marquee flex-1">
              <div className="marquee-track animate-marquee-left hover:[animation-play-state:paused]">
                {[...agencyLogos, ...agencyLogos].map((logo, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={`a-${i}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 md:h-20 w-auto object-contain shrink-0 opacity-70 hover:opacity-100 dark:invert transition-opacity duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-8 pl-4 md:pl-8">
            <span className="shrink-0 bg-primary text-white font-label font-bold uppercase tracking-wider text-[11px] md:text-xs px-5 md:px-8 py-2.5 rounded-md text-center w-[104px] md:w-[150px]">
              Clientele
            </span>
            <div className="marquee flex-1">
              <div className="marquee-track animate-marquee-right hover:[animation-play-state:paused]">
                {[...clienteleLogos, ...clienteleLogos].map((logo, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={`c-${i}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 md:h-20 w-auto object-contain shrink-0 opacity-70 hover:opacity-100 dark:invert transition-opacity duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-24 relative bg-background">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <SectionLabel className="mb-4 block text-base md:text-lg">Core Capabilities</SectionLabel>
            <h2 className="font-headline font-black text-4xl md:text-5xl">Visual Intelligence Solutions</h2>
            <div className="w-24 h-1 bg-primary mt-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <ServiceCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                summary={card.summary}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Firstman Videos (Bento Grid Style) */}
      <section className="w-full py-24 bg-dark-ui border-y border-surface/10 relative">
        {/* Abstract background accent */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-16">
            <SectionLabel className="mb-4 block">The Advantage</SectionLabel>
            <h2 className="font-headline font-black text-4xl md:text-5xl">Why Firstman Videos</h2>
          </div>
          {/* Metrics Bar */}
          <div className="w-full glass-panel rounded-xl mb-12 py-10 px-8 flex flex-col md:flex-row justify-around items-center gap-10 border-b border-surface/10">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-primary font-headline font-black text-4xl">25+ Years</span>
              <span className="text-surface/60 font-label uppercase tracking-[0.2em] text-[10px] font-bold mt-1">
                Corporate Video
              </span>
            </div>
            <div className="hidden md:block w-px h-12 bg-surface/10" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-primary font-headline font-black text-4xl">15+ Years</span>
              <span className="text-surface/60 font-label uppercase tracking-[0.2em] text-[10px] font-bold mt-1">
                Oil & Gas Sector
              </span>
            </div>
            <div className="hidden md:block w-px h-12 bg-surface/10" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-primary font-headline font-black text-4xl">500+ Projects</span>
              <span className="text-surface/60 font-label uppercase tracking-[0.2em] text-[10px] font-bold mt-1">
                Industrial Deployments
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Large Feature */}
            <div className="md:col-span-2 glass-panel bg-black p-10 rounded-xl flex flex-col justify-end relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 dark:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-700"
                style={{ backgroundImage: "url('/images/stitch/ba0390236d.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="relative z-10">
                <MaterialIcon name="shield" className="text-primary text-4xl mb-4 block" />
                <h3 className="font-headline font-bold text-2xl mb-2 text-white">
                  Safety-First Workflow & Compliance
                </h3>
                <p className="font-body text-white/90 max-w-lg">
                  Every drone operation begins with a documented risk assessment, coordinated with your
                  HSE team and cleared through full Permit to Work (PTW) approval. We arrive prepared
                  for the site — so capture stays safe and your operations keep running.
                </p>
              </div>
            </div>
            {/* Small Feature 1 */}
            <div className="glass-panel bg-black p-8 rounded-xl flex flex-col justify-end relative overflow-hidden group min-h-[250px]">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 dark:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-700"
                style={{ backgroundImage: "url('/images/stitch/13ca39f31a.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="relative z-10">
                <MaterialIcon name="factory" className="text-primary text-3xl mb-4 block" />
                <h3 className="font-headline font-bold text-lg mb-2 text-white">Deep Industrial Site Awareness</h3>
                <p className="font-body text-white/90 text-sm">
                  Deep understanding of the logistics, safety gates, and operational realities of heavy
                  industry environments from the moment we mobilise.
                </p>
              </div>
            </div>
            {/* Small Feature 2 */}
            <div className="glass-panel bg-black p-8 rounded-xl flex flex-col justify-end relative overflow-hidden group min-h-[250px]">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 dark:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-700"
                style={{ backgroundImage: "url('/images/stitch/a37924086a.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="relative z-10">
                <MaterialIcon name="photo_camera" className="text-primary text-3xl mb-4 block" />
                <h3 className="font-headline font-bold text-lg mb-2 text-white">Integrated UAV + Ground Production</h3>
                <p className="font-body text-white/90 text-sm">
                  Comprehensive multi-angle coverage combining aerial perspectives with detailed
                  ground-level cinematography.
                </p>
              </div>
            </div>
            {/* Small Feature 3 */}
            <div className="md:col-span-2 glass-panel bg-black p-8 rounded-xl flex flex-col justify-end relative overflow-hidden group border-l-4 border-l-primary min-h-[200px]">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 dark:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-700"
                style={{ backgroundImage: "url('/images/stitch/6d4182646b.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:items-center justify-between w-full">
                <div>
                  <h3 className="font-headline font-bold text-xl mb-2 text-white">Rapid Regional Deployment</h3>
                  <p className="font-body text-white/90 text-sm max-w-md">
                    Wherever your project is — a major fabrication yard or a short-notice site visit —
                    we mobilise across the region to cover it. Large-scale or ad-hoc, if it calls for
                    our expertise, we&apos;re ready to deploy.
                  </p>
                </div>
                <MaterialIcon name="public" className="text-primary text-6xl opacity-50 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
