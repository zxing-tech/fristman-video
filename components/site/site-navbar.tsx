"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { MaterialIcon } from "@/components/site/material-icon"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteNavbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-4 inset-x-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-[1280px]">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-3 bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-xl shadow-[0_0_15px_rgba(209,32,39,0.1)]">
        <Link
          href="/"
          className="text-xl font-black tracking-tighter text-white"
          onClick={() => setMenuOpen(false)}
        >
          Firstman Videos
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-label uppercase tracking-widest text-xs font-bold transition-all duration-300",
                isActive(pathname, link.href)
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-white/80 hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:flex bg-primary text-white px-6 py-2 rounded-full font-label uppercase tracking-wider text-xs font-bold hover:bg-black hover:text-primary border border-primary transition-all duration-300 items-center gap-2 group"
          >
            Get an Estimate
            <MaterialIcon
              name="arrow_forward"
              className="text-sm group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MaterialIcon name={menuOpen ? "close" : "menu"} className="text-xl" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden glass-modal rounded-2xl mt-2 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-label uppercase tracking-widest text-sm font-bold transition-colors",
                isActive(pathname, link.href) ? "text-primary" : "text-white/80 hover:text-primary"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-full font-label uppercase tracking-wider text-xs font-bold text-center border border-primary hover:bg-black hover:text-primary transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Get an Estimate
          </Link>
        </div>
      )}
    </nav>
  )
}
