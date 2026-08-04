import Image from "next/image"

import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import {
  breadcrumbSchema,
  creativeWorkSchema,
  graph,
  pageMeta,
} from "@/lib/seo"

export const metadata = pageMeta({
  title: "Petrofac Kemaman Supply Base Video Case Study",
  description:
    "Petrofac Kemaman Supply Base case study: safety induction and visual documentation at an Oil & Gas site in Malaysia. Gated video, access requires clearance.",
  path: "/our-work/petrofac-kemaman",
  ogImage: "/images/stitch/920da913d9.jpg",
  ogType: "article",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
    {
      name: "Petrofac Kemaman Supply Base",
      path: "/our-work/petrofac-kemaman",
    },
  ]),
  creativeWorkSchema({
    name: "Petrofac Kemaman Supply Base",
    description:
      "Safety induction and visual asset documentation filmed at Petrofac's Kemaman Supply Base, an Oil & Gas facility in Malaysia.",
    path: "/our-work/petrofac-kemaman",
    client: "Petrofac",
    image: "/images/stitch/920da913d9.jpg",
  })
)

export default function PetrofacKemamanPage() {
  return (
    <main className="flex-grow">
      <JsonLd data={schema} />
      {/* Descriptive page heading for SEO/accessibility (the visible hero is a gated panel). */}
      <h1 className="sr-only">
        Petrofac Kemaman Supply Base — Industrial Visual Documentation
      </h1>
      {/* Hero Section */}
      <section className="relative flex h-[819px] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/images/stitch/920da913d9.jpg"
            alt="Industrial night scene of an oil and gas supply base in Kemaman, Malaysia"
            fill
            loading="eager"
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="glass-panel mx-4 flex max-w-md flex-col items-center rounded-2xl p-8">
            <MaterialIcon
              name="lock"
              fill
              className="mb-4 text-5xl text-primary"
            />
            <h2 className="mb-2 text-2xl font-bold tracking-wide uppercase">
              Confidential Asset
            </h2>
            <p className="mb-6 text-center text-sm text-white/70">
              This video asset contains restricted industrial site footage.
              Access requires clearance.
            </p>
            <RequestAccessTrigger
              defaultVideo="Petrofac Kemaman Supply Base"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold tracking-widest text-white uppercase transition-all hover:bg-surface hover:text-background"
            >
              <MaterialIcon name="key" /> Request Access
            </RequestAccessTrigger>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="relative z-20 mx-auto -mt-16 max-w-[1280px] px-8">
        <div className="glass-panel grid grid-cols-2 gap-6 rounded-xl bg-card p-6 md:grid-cols-5">
          <div>
            <div className="mb-1 text-[10px] tracking-widest text-industrial-grey uppercase">
              Client
            </div>
            <div className="font-bold">Petrofac</div>
          </div>
          <div>
            <div className="mb-1 text-[10px] tracking-widest text-industrial-grey uppercase">
              Sector
            </div>
            <div className="font-bold">Oil & Gas</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="mb-1 text-[10px] tracking-widest text-industrial-grey uppercase">
              Service
            </div>
            <div className="text-sm font-bold">Safety and Induction Videos</div>
          </div>
          <div>
            <div className="mb-1 text-[10px] tracking-widest text-industrial-grey uppercase">
              Region
            </div>
            <div className="font-bold">Kemaman, Malaysia</div>
          </div>
          <div>
            <div className="mb-1 text-[10px] tracking-widest text-industrial-grey uppercase">
              Status
            </div>
            <div className="font-bold text-primary">Gated Video</div>
          </div>
        </div>
      </section>

      <div className="h-96 w-full" />
    </main>
  )
}
