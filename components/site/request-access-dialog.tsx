"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { MaterialIcon } from "@/components/site/material-icon"
import { ModalShell } from "@/components/site/modal-shell"

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

// `text-base` and `tracking-widest` for the same two reasons as the contact
// form: an input under 16px makes iOS Safari zoom the viewport on focus, and
// DESIGN.md's Label role is 0.1em — the 0.05em `tracking-wider` is its
// button-text exception, which a field label is not.
const inputClass =
  "form-input-dark w-full rounded-[6px] px-4 py-3 text-base transition-all focus:bg-surface/5"
const labelClass =
  "block font-label text-xs font-bold uppercase tracking-widest text-surface/70 mb-2"

export type RequestAccessDialogProps = {
  onClose: () => void
  defaultVideo?: string
}

/**
 * Heavy gated-video request form. Kept in its own module so it can be
 * lazy-loaded (next/dynamic) only when the modal is actually opened —
 * it is never part of the initial bundle of the pages that link to it.
 *
 * The portal, scroll lock, focus trap and Escape handling live in `ModalShell`.
 * They used to live here, and both were quietly broken: this dialog is mounted
 * from a trigger inside `/our-work`'s sticky filter bar, whose `backdrop-blur`
 * made it the containing block for the `fixed inset-0` root — measured at
 * 1280x74px in a 1920x968 viewport, so the scrim covered a 74px strip and the
 * page read straight through the middle of the modal. Read ModalShell's header
 * for the full measurement and for why the scroll lock moved off `body`.
 */
export function RequestAccessDialog({
  onClose,
  defaultVideo,
}: RequestAccessDialogProps) {
  const [state, setState] = useState<"form" | "submitting" | "success">("form")
  const [error, setError] = useState<string | null>(null)
  const successRef = useRef<HTMLParagraphElement>(null)

  // The success panel replaces the form in place, so nothing moves focus and a
  // screen reader is never told the request went through. Focus lands on the
  // line that says what happens next, and the panel is a live region for anyone
  // whose focus has wandered.
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
    <ModalShell onClose={onClose}>
      {/* Opaque, not `.glass-modal`. A translucent panel is a specific effect
          over a photograph; over a seven-field form it is decoration that costs
          legibility, and DESIGN.md already records the navbar dropdown having
          to abandon the same 72% fill because "the body copy underneath reads
          straight through it". Depth here comes from the scrim behind and the
          hairline, which is what the rest of the system does anyway.

          `rounded-2xl` puts it on the radius scale — the literal 12px it
          replaces was off the ramp entirely. */}
      <div
        aria-modal="true"
        aria-labelledby="request-access-title"
        role="dialog"
        className="relative z-10 flex max-h-[90svh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-surface/10 bg-background shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
      >
        {/* Left-aligned, with the plate inline beside the title rather than
            stacked and centred above it. Centred header over a left-aligned
            seven-field form made the panel read as two boxes stitched together
            — the eye picked up a new alignment halfway down a single surface.
            Reading down one edge also suits the register DESIGN.md asks for:
            this is a permit-style request, not an announcement. */}
        <div className="flex items-start gap-4 border-b border-surface/10 px-6 pt-7 pb-6 md:gap-5 md:px-8 md:pt-8">
          {/* `text-3xl!`, with the important modifier. Google's icon
              stylesheet is an unlayered <link> that pins `font-size: 24px`,
              and an unlayered declaration beats Tailwind's `@layer
              utilities` whatever the specificity — so the plain `text-3xl`
              this replaces was dead code and the glyph rendered at 24px in a
              64px plate. Measured with getComputedStyle on 2026-08-05, not
              read off the class list. */}
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-surface/10 bg-surface/5">
            <MaterialIcon
              name={state === "success" ? "check_circle" : "lock"}
              fill={state === "success"}
              className={cn(
                "text-3xl!",
                state === "success" ? "text-primary" : "text-surface"
              )}
            />
          </span>
          <div className="min-w-0">
            {/* Sentence case, per The Scarce Capitals Rule — capitals belong to
                the Label role, and a Title Cased heading spends the authority
                the uppercase field labels below it are tracked for. */}
            <h2
              className="text-xl font-bold tracking-tight text-balance text-surface md:text-2xl"
              id="request-access-title"
            >
              {state === "success"
                ? "Request submitted"
                : "Request access to confidential video"}
            </h2>
            {state !== "success" && (
              <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-industrial-grey">
                Some industrial video assets are private due to client
                confidentiality and site-safety requirements. Submit your
                details and our team will review your request.
              </p>
            )}
          </div>
        </div>

        {state === "success" ? (
          // One heading, not two. This block used to open with "Request
          // Received" directly under a header already reading "Request
          // Submitted" — the same sentence twice, in two type sizes, as the
          // first thing a visitor saw after converting. The header carries it
          // now and this panel says only what happens next.
          <div className="px-6 py-10 md:px-8" role="status">
            <p
              className="font-body leading-relaxed text-industrial-grey"
              ref={successRef}
              tabIndex={-1}
            >
              We typically respond within 24 business hours.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* Was `hover:bg-red-700` — a second, unrelated red. The system
                  has exactly one chroma (DESIGN.md, The One Red Rule), and the
                  primary pill's authored hover is an inversion, not a darker
                  shade of a different red. */}
              <Link
                href="/contact"
                className="rounded-full border border-primary bg-primary px-6 py-3 text-center text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-background hover:text-primary"
              >
                Book Consultation
              </Link>
              <Link
                href="/#services"
                className="rounded-full border border-surface/20 px-6 py-3 text-center text-sm font-bold tracking-wider text-surface uppercase transition-colors hover:bg-surface/10"
              >
                View Services
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* The scrolling middle, left as a plain flex item on purpose: a
                flex item whose `overflow` is not `visible` gets `min-height: 0`
                for free, which is exactly the shrink-to-fit behaviour this
                needs. Wrapping it in a `relative flex-1` box to hang the fade
                on cost the panel its intrinsic height twice over — once with
                `h-full` (the scroller grew to the form's height and the footer
                painted over the last two fields), once with `absolute inset-0`
                (the middle contributed no height at all and the panel collapsed
                to 296px). The fade hangs off the footer below instead.

                The native scrollbar is hidden: an OS-drawn bar inside a rounded
                dark panel is the single cheapest-looking thing in this dialog,
                and it was a worse affordance than the fade anyway — it sat
                flush against the panel's inner edge while the copy underneath
                cut off mid-label, which reads as broken rather than
                scrollable. */}
            <div className="no-scrollbar overflow-y-auto px-6 py-8 md:px-8">
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
            <div className="relative mt-auto border-t border-surface/10 px-6 py-6 md:px-8">
              {/* The scroll fade, hung above the footer rather than inside the
                  scroller — the footer is already `relative`, and anchoring it
                  here keeps the scrolling box a plain flex item. It signals
                  "more below" where a hidden scrollbar cannot, and it is
                  `bg-background`, so it follows the panel fill through the
                  theme flip. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-14 h-14 bg-gradient-to-t from-background to-transparent"
              />
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
    </ModalShell>
  )
}
