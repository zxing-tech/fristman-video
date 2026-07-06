"use client"

import { useState } from "react"

import { MaterialIcon } from "@/components/site/material-icon"

export function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 p-4 pointer-events-none">
      <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-2xl pointer-events-auto border-t border-primary/30">
        <div className="flex-grow">
          <h4 className="text-white font-bold uppercase text-sm mb-1 flex items-center gap-2">
            <MaterialIcon name="cookie" className="text-primary text-[18px]" />
            Telemetry &amp; Tracking
          </h4>
          <p className="text-xs text-industrial-grey leading-relaxed">
            This platform utilizes operational cookies to ensure interface stability and anonymized
            telemetry to optimize delivery of high-resolution industrial media. Please authorize
            non-essential tracking.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
          <button
            type="button"
            className="px-5 py-2 rounded-full border border-white/20 text-industrial-grey text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
          >
            Manage
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="px-5 py-2 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            Necessary
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="px-5 py-2 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-black border border-transparent hover:border-primary transition-all"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
