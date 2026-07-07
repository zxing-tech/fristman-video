import type { Metadata } from "next"
import Image from "next/image"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"

export const metadata: Metadata = {
  title: "Petrofac Kemaman Supply Base",
  description:
    "Confidential case study for Petrofac: safety induction and visual asset documentation at the Kemaman Supply Base, Malaysia. Gated video — access requires clearance.",
}

export default function PetrofacKemamanPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[819px] w-full flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="glass-panel p-8 rounded-2xl flex flex-col items-center max-w-md mx-4">
            <MaterialIcon name="lock" fill className="text-5xl text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide">Confidential Asset</h2>
            <p className="text-white/70 text-sm mb-6 text-center">
              This video asset contains restricted industrial site footage. Access requires
              clearance.
            </p>
            <RequestAccessTrigger
              defaultVideo="Petrofac Kemaman Supply Base"
              className="bg-primary text-white font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full hover:bg-surface hover:text-background transition-all flex items-center gap-2"
            >
              <MaterialIcon name="key" /> Request Access
            </RequestAccessTrigger>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-[1280px] mx-auto px-8 -mt-16 relative z-20">
        <div className="glass-panel bg-card grid grid-cols-2 md:grid-cols-5 gap-6 p-6 rounded-xl">
          <div>
            <div className="text-[10px] text-industrial-grey uppercase tracking-widest mb-1">
              Client
            </div>
            <div className="font-bold">Petrofac</div>
          </div>
          <div>
            <div className="text-[10px] text-industrial-grey uppercase tracking-widest mb-1">
              Sector
            </div>
            <div className="font-bold">Oil & Gas</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-[10px] text-industrial-grey uppercase tracking-widest mb-1">
              Service
            </div>
            <div className="font-bold text-sm">Safety Induction / Visual Asset Documentation</div>
          </div>
          <div>
            <div className="text-[10px] text-industrial-grey uppercase tracking-widest mb-1">
              Region
            </div>
            <div className="font-bold">Kemaman, Malaysia</div>
          </div>
          <div>
            <div className="text-[10px] text-industrial-grey uppercase tracking-widest mb-1">
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
