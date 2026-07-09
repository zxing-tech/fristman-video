"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { MaterialIcon } from "@/components/site/material-icon"

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

export function MarineBriefForm() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    setError(null)
    setSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", WEB3FORMS_ACCESS_KEY ?? "")
    formData.append("subject", "New Marine / Offshore visual brief — Firstman Videos")
    formData.append("from_name", "Firstman Videos Website")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        router.push("/thank-you/consultation")
        return
      }
      setError(
        data.message ||
          "We couldn't send your brief. Please try again or email info@firstmanvideos.com."
      )
    } catch {
      setError("Network error — please try again, or email us directly at info@firstmanvideos.com.")
    }
    setSubmitting(false)
  }

  return (
    <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={handleSubmit}>
      {/* Honeypot — spam trap, hidden from real users */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div>
        <label className="sr-only" htmlFor="marine-company">
          Company Name
        </label>
        <input
          className="w-full bg-black/50 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-mono tracking-wider uppercase"
          id="marine-company"
          name="company"
          placeholder="COMPANY / ORGANIZATION"
          required
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
          name="email"
          placeholder="WORK EMAIL ADDRESS"
          required
          type="email"
        />
      </div>
      {error && (
        <p
          role="alert"
          className="flex items-start gap-2 text-xs text-primary font-medium bg-primary/10 border border-primary/30 rounded px-3 py-2"
        >
          <MaterialIcon name="error" className="text-sm shrink-0 mt-0.5" />
          <span className="normal-case tracking-normal">{error}</span>
        </p>
      )}
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
