"use client"

import { useState } from "react"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

export function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 z-40 w-full p-4">
      <div className="glass-panel pointer-events-auto mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl border-t border-primary/30 p-6 shadow-2xl md:flex-row">
        <div className="flex-grow">
          <h4 className="mb-1 flex items-center gap-2 text-sm font-bold text-surface uppercase">
            <MaterialIcon name="cookie" className="text-[18px] text-primary" />
            Telemetry &amp; Tracking
          </h4>
          <p className="text-xs leading-relaxed text-industrial-grey">
            This platform utilizes operational cookies to ensure interface
            stability and anonymized telemetry to optimize delivery of
            high-resolution industrial media. Please authorize non-essential
            tracking.
          </p>
        </div>
        <div className="flex min-w-fit flex-col gap-3 sm:flex-row">
          <Link
            href="/privacy-policy"
            className="rounded-full border border-surface/20 px-5 py-2 text-center text-xs font-bold tracking-widest text-industrial-grey uppercase transition-colors hover:text-surface"
          >
            Manage
          </Link>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="rounded-full border border-surface/20 px-5 py-2 text-xs font-bold tracking-widest text-surface uppercase transition-colors hover:bg-surface/10"
          >
            Necessary
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="rounded-full border border-transparent bg-primary px-5 py-2 text-xs font-bold tracking-widest text-white uppercase transition-all hover:border-primary hover:bg-background"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
