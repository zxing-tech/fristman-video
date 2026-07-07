"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { MaterialIcon } from "@/components/site/material-icon"

const labelClass = "block text-xs font-bold uppercase tracking-wider text-white/70"
const inputClass =
  "w-full form-input-dark bg-black/40 rounded-lg px-4 py-3 text-sm focus:ring-0 focus:border-primary block placeholder:text-white/40"
const optionClass = "bg-[#111111] text-white"

export function ConsultationForm() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setTimeout(() => {
      router.push("/thank-you/consultation")
    }, 600)
  }

  return (
    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
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
        {/* Company Name */}
        <div className="space-y-2">
          <label className={labelClass} htmlFor="companyName">
            Company Name <span className="text-primary">*</span>
          </label>
          <input
            className={inputClass}
            id="companyName"
            name="companyName"
            placeholder="Acme Heavy Industries"
            required
            type="text"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Job Title */}
        <div className="space-y-2">
          <label className={labelClass} htmlFor="jobTitle">
            Job Title
          </label>
          <input
            className={inputClass}
            id="jobTitle"
            name="jobTitle"
            placeholder="HSE Manager"
            type="text"
          />
        </div>
        {/* Phone */}
        <div className="space-y-2">
          <label className={labelClass} htmlFor="phone">
            Contact Number <span className="text-primary">*</span>
          </label>
          <input
            className={inputClass}
            id="phone"
            name="phone"
            placeholder="+60 12-345 6789"
            required
            type="tel"
          />
        </div>
      </div>
      {/* Email */}
      <div className="space-y-2">
        <label className={labelClass} htmlFor="email">
          Corporate Email <span className="text-primary">*</span>
        </label>
        <input
          className={inputClass}
          id="email"
          name="email"
          placeholder="john.doe@company.com"
          required
          type="email"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Country */}
        <div className="space-y-2">
          <label className={labelClass} htmlFor="country">
            Region / Country <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <select
              className={`${inputClass} appearance-none`}
              id="country"
              name="country"
              required
              defaultValue=""
            >
              <option className="bg-[#111111] text-white/50" disabled value="">
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
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
              <MaterialIcon name="expand_more" className="text-[20px]" />
            </div>
          </div>
        </div>
        {/* Service Required */}
        <div className="space-y-2">
          <label className={labelClass} htmlFor="service">
            Primary Interest <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <select
              className={`${inputClass} appearance-none`}
              id="service"
              name="service"
              required
              defaultValue=""
            >
              <option className="bg-[#111111] text-white/50" disabled value="">
                Select Service
              </option>
              <option className={optionClass} value="Corporate Videos">
                Corporate Videos
              </option>
              <option className={optionClass} value="Facility Overviews">
                Facility Overviews
              </option>
              <option className={optionClass} value="Progression & Timelapses">
                Progression & Timelapses
              </option>
              <option className={optionClass} value="Visual Asset Documentation">
                Visual Asset Documentation
              </option>
              <option className={optionClass} value="AI-Generated Video">
                AI-Generated Video
              </option>
              <option className={optionClass} value="Inspection Reports">
                Inspection Reports & Data Delivery
              </option>
              <option className={optionClass} value="Industrial Photography">
                Industrial Photography
              </option>
              <option className={optionClass} value="General Enquiry">
                General Enquiry
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
              <MaterialIcon name="expand_more" className="text-[20px]" />
            </div>
          </div>
        </div>
      </div>
      {/* Project Description */}
      <div className="space-y-2">
        <label className={labelClass} htmlFor="description">
          Project Scope / Requirements
        </label>
        <textarea
          className={`${inputClass} resize-none`}
          id="description"
          name="description"
          placeholder="Briefly describe site location, deliverables required, and timeline..."
          rows={4}
        />
      </div>
      {/* Source */}
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
      {/* Consent Checkbox */}
      <div className="flex items-start mt-6">
        <div className="flex h-5 items-center">
          <input
            className="h-4 w-4 rounded border border-white/20 bg-black/40 accent-primary transition-colors"
            id="consent"
            name="consent"
            required
            type="checkbox"
          />
        </div>
        <div className="ml-3 text-xs text-industrial-grey">
          <label
            className="font-medium text-white/80 cursor-pointer hover:text-white transition-colors"
            htmlFor="consent"
          >
            I consent to the collection and processing of my data.
          </label>
          <p className="mt-1">
            By submitting this form, you acknowledge that you have read and agree to our Privacy
            Policy regarding the secure handling of corporate contact information.
          </p>
        </div>
      </div>
      {/* Submit Button */}
      <button
        className="group relative w-full overflow-hidden rounded-xl bg-primary text-white px-8 py-4 flex items-center justify-center gap-3 mt-8 font-headline transition-all duration-300 hover:bg-black hover:text-primary hover:shadow-[inset_0_0_0_1px_#d12027,0_0_20px_rgba(209,32,39,0.3)] disabled:opacity-70 disabled:pointer-events-none"
        type="submit"
        disabled={submitting}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full"
        />
        <span className="relative z-10 text-sm font-bold uppercase tracking-widest">
          {submitting ? "Submitting..." : "Submit Request"}
        </span>
        <MaterialIcon
          name="send"
          fill
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </form>
  )
}
