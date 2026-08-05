"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { ctaClasses } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { Readout } from "@/components/site/readout"

/**
 * `tracking-widest` (0.1em), not the `tracking-wider` (0.05em) this carried.
 * DESIGN.md sets the Label role at 0.1em and names exactly one exception —
 * button text, "because buttons hold more words than a nav item and the wider
 * setting pushes a two-word CTA past its pill." A field label is metadata, not
 * a button, so it takes the role's own value. Measured 0.6px at 12px before,
 * 1.2px now, matching the breadcrumb and the rail's channel labels.
 */
const labelClass =
  "block font-label text-xs font-bold uppercase tracking-widest text-surface/70"
/**
 * `focus:ring-0` and `focus:border-primary` were both dropped from this string.
 *
 * The first was a defect, not a preference. `.form-input-dark:focus` in
 * `globals.css` draws the focus ring DESIGN.md specifies — "border becomes
 * Signal Red and a 1px Signal Red ring is drawn via `box-shadow`" — but it sits
 * in `@layer components`, and `focus:ring-0` compiles into `@layer utilities`,
 * which wins. Measured 2026-08-05 with the field focused and the 0.3s global
 * colour transition allowed to settle: `box-shadow` computed to five fully
 * transparent layers, so the ring never rendered on the site's only lead form
 * and focus was carried by a 1px border colour change alone. The sibling
 * `request-access-dialog.tsx` never had the class and its ring works — which is
 * what makes this a one-off rather than the house pattern.
 *
 * The second was simply duplication: the component rule already sets the same
 * red border on focus.
 */
/**
 * `text-base` (16px), not the 14px this ran at. Two reasons, one of them a
 * hard mobile defect:
 *
 * iOS Safari zooms the viewport whenever a focused input's font-size is under
 * 16px. On the site's only lead form that means every tap on a field jerks the
 * page in and leaves it there — on the surface PRODUCT.md names as the single
 * measure of success. 16px is also the ordinary web body floor, and what a
 * visitor types is body copy, not supporting text.
 */
const inputClass =
  "w-full form-input-dark bg-background/40 rounded-lg px-4 py-3 text-base block placeholder:text-industrial-grey"
const optionClass = "bg-graphite text-surface"

/**
 * Ten fields ran as one `space-y-6` column with no groups and no heading, so
 * the form opened cold on "Full Name" and every interval in it was identical.
 * Three fieldsets carry the grouping now — who you are, how to reach you, what
 * the project is — with the tail (source, consent, submit) below a rule.
 *
 * The step markers are the Readout role rather than decoration: a 10-field B2B
 * form reads as open-ended, and "01 / 03" is the cheapest way to say it is
 * three short groups.
 */
const groupHeadingClass = "font-headline text-base font-bold text-surface"

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

function Legend({ step, children }: { step: string; children: string }) {
  return (
    // `display:flex` is set explicitly — a <legend> shrink-wraps and does not
    // lay out as a block by default.
    <legend className="mb-6 flex w-full items-baseline gap-3">
      {/* Grey rather than Signal Red. A step marker is neither active, critical
          nor clickable, so the One Red Rule does not cover it — and red at 10px
          measures 3.65:1 inside this panel against Industrial Grey's 5.29:1. */}
      <Readout className="shrink-0 text-industrial-grey">{step}</Readout>
      <span className={groupHeadingClass}>{children}</span>
    </legend>
  )
}

export function ConsultationForm() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting) return
    setError(null)
    setSubmitting(true)

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", WEB3FORMS_ACCESS_KEY ?? "")
    formData.append("subject", "New consultation request — Firstman Videos")
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
          "We couldn't send your request. Please try again or email info@firstmanvideos.com."
      )
    } catch {
      setError(
        "Network error — please try again, or email us directly at info@firstmanvideos.com."
      )
    }
    setSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit}>
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

      {/* The form had no accessible name and no visible heading — at a squint
          it was a grey field of boxes beside a 72px headline. */}
      <h2 className="font-headline text-xl font-bold text-surface">
        Consultation request
      </h2>
      <p className="mt-2 font-body text-sm leading-relaxed text-industrial-grey">
        Fields marked <span className="font-bold text-primary">*</span> are
        required.
      </p>

      {/* Generous between groups, tight within them — the cadence the single
          repeated `space-y-6` could not produce. */}
      <div className="mt-10 space-y-10">
        <fieldset>
          <Legend step="01 / 03">Who you are</Legend>
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className={labelClass} htmlFor="fullName">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  autoComplete="name"
                  className={inputClass}
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass} htmlFor="jobTitle">
                  Job Title
                </label>
                <input
                  autoComplete="organization-title"
                  className={inputClass}
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="HSE Manager"
                  type="text"
                />
              </div>
            </div>
            {/* Full width on its own row: operator and yard names run long
                enough that a half column truncated them mid-entry. */}
            <div className="space-y-2">
              <label className={labelClass} htmlFor="companyName">
                Company Name <span className="text-primary">*</span>
              </label>
              <input
                autoComplete="organization"
                className={inputClass}
                id="companyName"
                name="companyName"
                placeholder="Acme Heavy Industries"
                required
                type="text"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <Legend step="02 / 03">How to reach you</Legend>
          {/* Email and phone are one pair and now sit on one row. Email used to
              run a full row on its own while "Job Title" was paired with
              "Contact Number" — two fields that have nothing to do with each
              other. */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className={labelClass} htmlFor="email">
                Corporate Email <span className="text-primary">*</span>
              </label>
              <input
                autoComplete="email"
                className={inputClass}
                id="email"
                name="email"
                placeholder="john.doe@company.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className={labelClass} htmlFor="phone">
                Contact Number <span className="text-primary">*</span>
              </label>
              <input
                autoComplete="tel"
                className={inputClass}
                id="phone"
                name="phone"
                placeholder="+60 12-345 6789"
                required
                type="tel"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <Legend step="03 / 03">What you need</Legend>
          <div className="space-y-5">
            {/* Two across, not three. In a 7-column panel the three selects
                rendered ~193px wide each, and their longest options —
                "Fabrication & Construction", "Safety and Induction Videos" —
                have nowhere to go at that width. Region and Sector are short
                enough to pair; Primary Interest takes the full row. */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className={labelClass} htmlFor="country">
                  Region / Country <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <select
                    className={`${inputClass} appearance-none pr-11`}
                    id="country"
                    name="country"
                    required
                    defaultValue=""
                  >
                    <option
                      className="bg-graphite text-surface/50"
                      disabled
                      value=""
                    >
                      Select Region
                    </option>
                    <option className={optionClass} value="Malaysia">
                      Malaysia
                    </option>
                    <option className={optionClass} value="Singapore">
                      Singapore
                    </option>
                    <option className={optionClass} value="Indonesia">
                      Indonesia
                    </option>
                    <option className={optionClass} value="Brunei">
                      Brunei
                    </option>
                    <option className={optionClass} value="Other">
                      Other
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-industrial-grey">
                    <MaterialIcon name="expand_more" className="text-xl!" />
                  </div>
                </div>
              </div>
              {/* Sector — the industry taxonomy that used to live on the
                  /industries pages; kept here so enquiries still arrive tagged
                  by sector. */}
              <div className="space-y-2">
                <label className={labelClass} htmlFor="sector">
                  Sector
                </label>
                <div className="relative">
                  <select
                    className={`${inputClass} appearance-none pr-11`}
                    id="sector"
                    name="sector"
                    defaultValue=""
                  >
                    <option className="bg-graphite text-surface/50" value="">
                      Select Sector
                    </option>
                    <option className={optionClass} value="Oil & Gas">
                      Oil &amp; Gas
                    </option>
                    <option className={optionClass} value="Energy & Utilities">
                      Energy &amp; Utilities
                    </option>
                    <option className={optionClass} value="Marine & Offshore">
                      Marine &amp; Offshore
                    </option>
                    <option
                      className={optionClass}
                      value="Fabrication & Construction"
                    >
                      Fabrication &amp; Construction
                    </option>
                    <option className={optionClass} value="Other">
                      Other
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-industrial-grey">
                    <MaterialIcon name="expand_more" className="text-xl!" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className={labelClass} htmlFor="service">
                Primary Interest <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <select
                  className={`${inputClass} appearance-none pr-11`}
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                >
                  <option
                    className="bg-graphite text-surface/50"
                    disabled
                    value=""
                  >
                    Select Service
                  </option>
                  <option className={optionClass} value="Corporate Videos">
                    Corporate Videos
                  </option>
                  <option className={optionClass} value="Facility Overviews">
                    Facility Overviews
                  </option>
                  <option
                    className={optionClass}
                    value="Progression & Timelapses"
                  >
                    Progression &amp; Timelapses
                  </option>
                  <option
                    className={optionClass}
                    value="Safety and Induction Videos"
                  >
                    Safety and Induction Videos
                  </option>
                  <option className={optionClass} value="AI-Generated Video">
                    AI-Generated Video
                  </option>
                  <option
                    className={optionClass}
                    value="Industrial Photography"
                  >
                    Industrial Photography
                  </option>
                  <option className={optionClass} value="General Enquiry">
                    General Enquiry
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-industrial-grey">
                  <MaterialIcon name="expand_more" className="text-xl!" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className={labelClass} htmlFor="description">
                Project Scope / Requirements
              </label>
              <textarea
                className={`${inputClass} resize-y`}
                id="description"
                name="description"
                placeholder="Briefly describe site location, deliverables required, and timeline..."
                rows={4}
              />
            </div>
          </div>
        </fieldset>

        {/* The tail. A rule rather than a fourth legend: these are the two
            things left before submitting, not a fourth thing to fill in. */}
        <div className="space-y-6 border-t border-surface/10 pt-10">
          <div className="space-y-2">
            <label className={labelClass} htmlFor="source">
              How did you hear about us?
            </label>
            <input
              className={inputClass}
              id="source"
              name="source"
              placeholder="e.g. Search, LinkedIn, Referral"
              type="text"
            />
          </div>

          <div className="flex items-start gap-3">
            {/* 24px, not the 20 it was. WCAG 2.5.8 Target Size (Minimum) puts
                the floor at 24x24 and this is a required control — the one
                checkbox standing between a filled form and a submitted one. */}
            <input
              className="h-6 w-6 shrink-0 rounded border border-surface/20 bg-background/40 accent-primary transition-colors"
              id="consent"
              name="consent"
              required
              type="checkbox"
            />
            <div className="text-xs text-industrial-grey">
              <label
                className="cursor-pointer font-body text-sm font-medium text-surface transition-colors hover:text-primary"
                htmlFor="consent"
              >
                I consent to the collection and processing of my data.{" "}
                <span className="text-primary">*</span>
              </label>
              {/* Capped in characters. At 12px across the panel's full 565px
                  this footnote set 82 characters to the line, past the 75 the
                  eye reliably tracks back from — and it is the smallest type in
                  the form, where a long measure costs most. 65ch is /about's
                  treatment for the same kind of note. */}
              <p className="mt-1 max-w-[65ch] leading-relaxed text-pretty">
                By submitting this form, you acknowledge that you have read and
                agree to our Privacy Policy regarding the secure handling of
                corporate contact information.
              </p>
            </div>
          </div>

          {error && (
            <p
              role="alert"
              className="flex items-start gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-primary"
            >
              <MaterialIcon
                name="error"
                className="mt-0.5 shrink-0 text-base!"
              />
              <span>{error}</span>
            </p>
          )}

          {/* The pill, from the shared `ctaClasses`. It was a hand-rolled
              `rounded-xl` with its own hover and a shimmer that swept the
              button on every pointer pass — against The Pill Rule, and the one
              square action on a site where nothing clickable has a square
              corner. */}
          <button
            aria-busy={submitting}
            className={ctaClasses({
              className:
                "w-full disabled:pointer-events-none disabled:opacity-70",
            })}
            disabled={submitting}
            type="submit"
          >
            {submitting ? "Submitting..." : "Submit Request"}
            <MaterialIcon
              name={submitting ? "progress_activity" : "send"}
              fill
              className={
                submitting
                  ? "animate-spin text-lg!"
                  : "text-lg! transition-transform group-hover:translate-x-1"
              }
            />
          </button>
        </div>
      </div>
    </form>
  )
}
