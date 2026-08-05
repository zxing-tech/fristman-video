"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { MaterialIcon } from "@/components/site/material-icon"

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

const inputClass =
  "form-input-dark w-full rounded-[6px] px-4 py-3 text-sm transition-all focus:bg-surface/5"
const labelClass =
  "block text-xs font-bold uppercase tracking-wider text-surface/70 mb-2"

export type RequestAccessDialogProps = {
  onClose: () => void
  defaultVideo?: string
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Heavy gated-video request form. Kept in its own module so it can be
 * lazy-loaded (next/dynamic) only when the modal is actually opened —
 * it is never part of the initial bundle of the pages that link to it.
 */
export function RequestAccessDialog({
  onClose,
  defaultVideo,
}: RequestAccessDialogProps) {
  const [state, setState] = useState<"form" | "submitting" | "success">("form")
  const [error, setError] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLHeadingElement>(null)

  /**
   * Focus management. This dialog is the site's only conversion path for a
   * gated asset, and until 2026-08-05 a keyboard visitor could not use it:
   * measured on `/our-work`, pressing Enter on "Request Access" opened the
   * dialog and left focus on the trigger *behind* it, Tab could walk back out
   * into the page underneath, and closing dropped focus on `<body>` — back to
   * the top of the document, with the trigger they came from nowhere near.
   *
   * `getClientRects().length` rather than `offsetHidden`/`offsetParent`: the
   * honeypot is `display: none` (no rects, correctly skipped) and every real
   * control sits inside a `position: fixed` root, where `offsetParent` is not a
   * reliable visibility test.
   */
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const focusables = () =>
      [
        ...(dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []),
      ].filter((el) => el.getClientRects().length > 0)

    focusables()[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
        return
      }
      if (event.key !== "Tab") return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
      // Back to the control they opened it from, not to the top of the page.
      opener?.focus?.()
    }
  }, [onClose])

  // The success panel replaces the form in place, so nothing moves focus and a
  // screen reader is never told the request went through. Focus lands on the
  // confirmation heading, and the panel is a live region for anyone whose
  // focus has wandered.
  useEffect(() => {
    if (state === "success") successRef.current?.focus()
  }, [state])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (state === "submitting") return
    setError(null)
    setState("submitting")

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", WEB3FORMS_ACCESS_KEY ?? "")
    formData.append(
      "subject",
      "New confidential video access request — Firstman Videos"
    )
    formData.append("from_name", "Firstman Videos Website")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setState("success")
        return
      }
      setError(
        data.message ||
          "We couldn't send your request. Please try again or email info@firstmanvideos.com."
      )
    } catch {
      setError(
        "Network error — please try again, or email us directly at info@firstmanvideos.com."
      )
    }
    setState("form")
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
        ref={dialogRef}
        role="dialog"
        className="glass-modal relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-[12px] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-surface/5 px-8 pt-10 pb-6 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-surface/5">
            {/* `text-3xl!`, with the important modifier. Google's icon
                stylesheet is an unlayered <link> that pins `font-size: 24px`,
                and an unlayered declaration beats Tailwind's `@layer
                utilities` whatever the specificity — so the plain `text-3xl`
                this replaces was dead code and the glyph rendered at 24px in a
                64px plate. Measured with getComputedStyle on 2026-08-05, not
                read off the class list. */}
            <MaterialIcon
              name={state === "success" ? "check_circle" : "lock"}
              className={cn(
                "text-3xl!",
                state === "success" ? "text-primary" : "text-surface"
              )}
            />
          </div>
          <h2
            className="mb-3 text-2xl font-bold tracking-tight text-surface md:text-3xl"
            id="request-access-title"
          >
            {state === "success"
              ? "Request Submitted"
              : "Request Access to Confidential Video"}
          </h2>
          {state !== "success" && (
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-industrial-grey md:text-base">
              Some industrial video assets are private due to client
              confidentiality and site-safety requirements. Submit your details
              and our team will review your request.
            </p>
          )}
        </div>

        {state === "success" ? (
          <div
            className="flex flex-col items-center justify-center px-8 py-12 text-center"
            role="status"
          >
            <h3
              className="mb-2 text-2xl font-bold text-surface"
              ref={successRef}
              tabIndex={-1}
            >
              Request Received
            </h3>
            <p className="mb-8 text-industrial-grey">
              We typically respond within 24 business hours.
            </p>
            <div className="flex w-full max-w-sm flex-col gap-4 sm:flex-row">
              {/* Was `hover:bg-red-700` — a second, unrelated red. The system
                  has exactly one chroma (DESIGN.md, The One Red Rule), and the
                  primary pill's authored hover is an inversion, not a darker
                  shade of a different red. */}
              <Link
                href="/contact"
                className="flex-1 rounded-full border border-primary bg-primary px-6 py-3 text-center text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-background hover:text-primary"
              >
                Book Consultation
              </Link>
              <Link
                href="/#services"
                className="flex-1 rounded-full border border-surface/20 px-6 py-3 text-center text-sm font-bold tracking-wider text-surface uppercase transition-colors hover:bg-surface/10"
              >
                View Services
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="overflow-y-auto px-8 py-8">
              <form
                className="space-y-6"
                id="access-form"
                onSubmit={handleSubmit}
              >
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
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                    <select
                      className={cn(inputClass, "appearance-none")}
                      id="country"
                      name="country"
                    >
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
                    Which project/video are you requesting?{" "}
                    <span className="text-primary">*</span>
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
                    Reason for access / project context{" "}
                    <span className="text-primary">*</span>
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
                <div className="mt-6 flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      className="h-4 w-4 rounded-[4px] border-surface/20 bg-surface/5 text-primary focus:ring-primary"
                      id="consent"
                      name="consent"
                      required
                      type="checkbox"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      className="font-medium text-surface/80"
                      htmlFor="consent"
                    >
                      I consent to processing my data for this request.
                    </label>
                    <p className="mt-1 text-xs text-industrial-grey">
                      By submitting, you agree to our{" "}
                      <Link
                        className="text-primary hover:underline"
                        href="/privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="relative mt-auto border-t border-surface/5 bg-background/40 px-8 py-6">
              <div className="scanner-line absolute top-0 left-0 h-px w-full" />
              {error && (
                <p
                  role="alert"
                  className="mb-4 flex items-start gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-primary"
                >
                  <MaterialIcon
                    name="error"
                    className="mt-0.5 shrink-0 text-base!"
                  />
                  <span>{error}</span>
                </p>
              )}
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row-reverse">
                <button
                  className="group flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-8 py-3.5 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:border-primary hover:bg-background disabled:opacity-70 sm:w-auto"
                  disabled={state === "submitting"}
                  form="access-form"
                  type="submit"
                >
                  {state === "submitting" ? (
                    <>
                      <MaterialIcon
                        name="sync"
                        className="animate-spin text-lg"
                      />
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
                  className="w-full rounded-full border border-transparent px-6 py-3.5 text-sm font-bold tracking-wider text-surface/70 uppercase transition-all duration-300 hover:border-surface/20 hover:text-surface sm:w-auto"
                  onClick={onClose}
                  type="button"
                >
                  Back to Portfolio
                </button>
              </div>
              <div className="mt-6 text-center">
                {/* `text-xs` (12px) is the fine-print step in DESIGN.md; the
                    literal 11px it replaces was off the ramp. The icon carried
                    an arbitrary size with no important modifier, so it rendered
                    at the stylesheet's 24px — twice the line it sits on. */}
                <p className="flex items-center justify-center gap-1.5 text-xs text-industrial-grey">
                  <MaterialIcon name="info" className="shrink-0 text-base!" />A
                  copy of the request is sent to you and the Firstman Videos
                  Business Development team.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
