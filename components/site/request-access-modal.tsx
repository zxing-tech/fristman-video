"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { MaterialIcon } from "@/components/site/material-icon"

type RequestAccessModalProps = {
  open: boolean
  onClose: () => void
  defaultVideo?: string
}

const inputClass = "form-input-dark w-full rounded-[6px] px-4 py-3 text-sm transition-all focus:bg-white/5"
const labelClass = "block text-xs font-bold uppercase tracking-wider text-white/70 mb-2"

export function RequestAccessModal({ open, onClose, defaultVideo }: RequestAccessModalProps) {
  if (!open) return null
  return <RequestAccessDialog onClose={onClose} defaultVideo={defaultVideo} />
}

function RequestAccessDialog({ onClose, defaultVideo }: Omit<RequestAccessModalProps, "open">) {
  const [state, setState] = useState<"form" | "submitting" | "success">("form")

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState("submitting")
    window.setTimeout(() => setState("success"), 1200)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        aria-modal="true"
        aria-labelledby="request-access-title"
        role="dialog"
        className="glass-modal rounded-[12px] shadow-2xl relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="px-8 pt-10 pb-6 border-b border-white/5 text-center">
          <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/5 mb-6">
            <MaterialIcon
              name={state === "success" ? "check_circle" : "lock"}
              className={cn("text-3xl", state === "success" ? "text-primary" : "text-white")}
            />
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3"
            id="request-access-title"
          >
            {state === "success" ? "Request Submitted" : "Request Access to Confidential Video"}
          </h2>
          {state !== "success" && (
            <p className="text-industrial-grey text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Some industrial video assets are private due to client confidentiality and
              site-safety requirements. Submit your details and our team will review your request.
            </p>
          )}
        </div>

        {state === "success" ? (
          <div className="flex flex-col items-center justify-center py-12 px-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
            <p className="text-industrial-grey mb-8">We typically respond within 24 business hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
              <Link
                href="/contact"
                className="flex-1 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors text-center"
              >
                Book Consultation
              </Link>
              <Link
                href="/services"
                className="flex-1 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="px-8 py-8 overflow-y-auto">
              <form className="space-y-6" id="access-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="fullName">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      className={inputClass}
                      id="fullName"
                      name="fullName"
                      placeholder="John Doe"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="companyName">
                      Company Name <span className="text-primary">*</span>
                    </label>
                    <input
                      className={inputClass}
                      id="companyName"
                      name="companyName"
                      placeholder="Acme Industrial"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="workEmail">
                      Work Email <span className="text-primary">*</span>
                    </label>
                    <input
                      className={inputClass}
                      id="workEmail"
                      name="workEmail"
                      placeholder="john@company.com"
                      required
                      type="email"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="jobTitle">
                      Job Title / Department
                    </label>
                    <input
                      className={inputClass}
                      id="jobTitle"
                      name="jobTitle"
                      placeholder="HSE Manager"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className={inputClass}
                      id="phone"
                      name="phone"
                      placeholder="+60 12-345 6789"
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="country">
                      Country
                    </label>
                    <select className={cn(inputClass, "appearance-none")} id="country" name="country">
                      <option value="">Select Country</option>
                      <option value="MY">Malaysia</option>
                      <option value="SG">Singapore</option>
                      <option value="ID">Indonesia</option>
                      <option value="BN">Brunei</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="requestedVideo">
                    Which project/video are you requesting? <span className="text-primary">*</span>
                  </label>
                  <textarea
                    className={cn(inputClass, "resize-none")}
                    defaultValue={defaultVideo}
                    id="requestedVideo"
                    name="requestedVideo"
                    placeholder="e.g. Petrofac Offshore Installation"
                    required
                    rows={2}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="reason">
                    Reason for access / project context <span className="text-primary">*</span>
                  </label>
                  <textarea
                    className={cn(inputClass, "resize-none")}
                    id="reason"
                    name="reason"
                    placeholder="Briefly describe why you need access to this confidential material..."
                    required
                    rows={3}
                  />
                </div>
                <div className="flex items-start mt-6">
                  <div className="flex items-center h-5">
                    <input
                      className="w-4 h-4 rounded-[4px] border-white/20 bg-white/5 text-primary focus:ring-primary"
                      id="consent"
                      name="consent"
                      required
                      type="checkbox"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-medium text-white/80" htmlFor="consent">
                      I consent to processing my data for this request.
                    </label>
                    <p className="text-industrial-grey text-xs mt-1">
                      By submitting, you agree to our{" "}
                      <Link className="text-primary hover:underline" href="/privacy-policy">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-auto border-t border-white/5 bg-black/40 px-8 py-6 relative">
              <div className="absolute top-0 left-0 w-full h-px scanner-line" />
              <div className="flex flex-col sm:flex-row-reverse justify-between items-center gap-4">
                <button
                  className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-black border border-transparent hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                  disabled={state === "submitting"}
                  form="access-form"
                  type="submit"
                >
                  {state === "submitting" ? (
                    <>
                      <MaterialIcon name="sync" className="animate-spin text-lg" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Access Request
                      <MaterialIcon
                        name="arrow_forward"
                        className="text-lg transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
                <button
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white border border-transparent hover:border-white/20 transition-all duration-300"
                  onClick={onClose}
                  type="button"
                >
                  Back to Portfolio
                </button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-[11px] text-industrial-grey flex items-center justify-center gap-1">
                  <MaterialIcon name="info" className="text-[14px]" />A copy of the request is sent
                  to you and the First Man Videos Business Development team.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

type RequestAccessTriggerProps = {
  defaultVideo?: string
  className?: string
  children: React.ReactNode
}

export function RequestAccessTrigger({
  defaultVideo,
  className,
  children,
}: RequestAccessTriggerProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className={className} onClick={() => setOpen(true)} type="button">
        {children}
      </button>
      <RequestAccessModal defaultVideo={defaultVideo} onClose={() => setOpen(false)} open={open} />
    </>
  )
}
