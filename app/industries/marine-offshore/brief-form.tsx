"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { MaterialIcon } from "@/components/site/material-icon"

export function MarineBriefForm() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setTimeout(() => {
      router.push("/thank-you/consultation")
    }, 600)
  }

  return (
    <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={handleSubmit}>
      <div>
        <label className="sr-only" htmlFor="marine-company">
          Company Name
        </label>
        <input
          className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-mono tracking-wider uppercase"
          id="marine-company"
          placeholder="COMPANY / ORGANIZATION"
          type="text"
        />
      </div>
      <div>
        <label className="sr-only" htmlFor="marine-email">
          Work Email
        </label>
        <input
          className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-mono tracking-wider uppercase"
          id="marine-email"
          placeholder="WORK EMAIL ADDRESS"
          type="email"
        />
      </div>
      <button
        className="w-full bg-primary text-white rounded-full hover:bg-[#9a161b] transition-all duration-300 py-4 font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2 mt-4 shadow-[0_0_15px_rgba(209,32,39,0.2)] disabled:opacity-70"
        disabled={submitting}
        type="submit"
      >
        {submitting ? "Submitting..." : "Discuss a Marine/Offshore Visual Brief"}
        <MaterialIcon name="send" className="text-[18px]" />
      </button>
      <p className="text-[10px] text-industrial-grey text-center mt-4 uppercase tracking-widest">
        Confidentiality agreements available upon request.
      </p>
    </form>
  )
}
