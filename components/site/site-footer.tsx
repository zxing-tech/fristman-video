import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { primaryNav } from "@/lib/data/nav"

export function SiteFooter() {
  return (
    <footer className="mt-24 w-full border-t border-surface/10 bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-8 md:flex-row">
        <div className="space-y-4">
          <div className="text-lg font-bold tracking-tighter text-surface">
            Firstman Videos
          </div>
          <p className="max-w-xs font-body text-sm text-industrial-grey">
            Industrial Cinematography for Oil &amp; Gas and Heavy Industry.
          </p>
          <p className="font-body text-sm text-industrial-grey">
            © {new Date().getFullYear()} Firstman Videos.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="mb-2 font-label text-xs font-bold tracking-widest text-surface uppercase">
            Explore
          </span>
          {/* The navbar's own list, in the navbar's own order — including the
              Services entry, which is a dropdown trigger up there and a link to
              the homepage section down here. A footer that renames or reorders
              the primary nav makes the site look like two sites. */}
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="w-fit py-1 font-body text-sm text-industrial-grey transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <span className="mb-2 font-label text-xs font-bold tracking-widest text-surface uppercase">
            Legal &amp; Access
          </span>
          {/* Privacy Policy is the only legal page that exists. A "Terms of
              Service" link used to sit here pointing at href="#" — put it back
              only once /terms-of-service is a real route. */}
          <Link
            href="/privacy-policy"
            className="w-fit py-1 font-body text-sm text-industrial-grey transition-colors hover:text-primary"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="mb-2 font-label text-xs font-bold tracking-widest text-surface uppercase">
            Connect
          </span>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/firstmanvideos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface/10 text-industrial-grey transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <MaterialIcon name="share" className="text-sm" />
            </a>
            <a
              href="mailto:info@firstmanvideos.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface/10 text-industrial-grey transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              <MaterialIcon name="mail" className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
