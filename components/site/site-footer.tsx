import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

const exploreLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 w-full mt-24">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-4">
          <div className="text-lg font-bold text-white tracking-tighter">First Man Videos</div>
          <p className="font-body text-sm text-industrial-grey max-w-xs">
            Industrial Cinematography for Oil &amp; Gas and Heavy Industry.
          </p>
          <p className="font-body text-sm text-industrial-grey">
            © 2024 First Man Videos. Industrial Cinematography.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-label uppercase tracking-widest text-xs font-bold text-white mb-2">
            Explore
          </span>
          {exploreLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-industrial-grey hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-label uppercase tracking-widest text-xs font-bold text-white mb-2">
            Legal &amp; Access
          </span>
          <Link
            href="/privacy-policy"
            className="font-body text-sm text-industrial-grey hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <a
            href="#"
            className="font-body text-sm text-industrial-grey hover:text-primary transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="font-body text-sm text-industrial-grey hover:text-primary transition-colors"
          >
            Safety Standards
          </a>
          <a
            href="#"
            className="font-body text-sm text-industrial-grey hover:text-primary transition-colors"
          >
            Client Login
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label uppercase tracking-widest text-xs font-bold text-white mb-2">
            Connect
          </span>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Share"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white text-industrial-grey transition-all duration-300"
            >
              <MaterialIcon name="share" className="text-sm" />
            </a>
            <a
              href="mailto:hello@firstmanvideos.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white text-industrial-grey transition-all duration-300"
            >
              <MaterialIcon name="mail" className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
