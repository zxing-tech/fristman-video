"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { services } from "@/lib/data/services"
import { MaterialIcon } from "@/components/site/material-icon"
import { ThemeToggle } from "@/components/site/theme-toggle"

type NavLink = { href: string; label: string }

// "Services" sits between these two groups as a dropdown — there is no /services
// hub page any more, so the parent item is a menu trigger rather than a link.
const linksBeforeServices: NavLink[] = [{ href: "/", label: "Home" }]

const linksAfterServices: NavLink[] = [
  { href: "/industries", label: "Industries" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const navItemClass =
  "font-label uppercase tracking-widest text-xs font-bold transition-all duration-300"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteNavbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  const servicesActive = pathname.startsWith("/services/")

  useEffect(() => {
    if (!servicesOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [servicesOpen])

  return (
    <nav className="fixed top-4 inset-x-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-[1280px]">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-3 bg-background/70 backdrop-blur-md rounded-full border border-surface/10 shadow-xl shadow-[0_0_15px_rgba(209,32,39,0.1)]">
        <Link
          href="/"
          className="text-xl font-black tracking-tighter text-surface"
          onClick={() => setMenuOpen(false)}
        >
          Firstman Videos
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {linksBeforeServices.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                navItemClass,
                isActive(pathname, link.href)
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-surface/80 hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((open) => !open)}
              className={cn(
                navItemClass,
                "flex items-center gap-1",
                servicesActive
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-surface/80 hover:text-primary"
              )}
            >
              Services
              <MaterialIcon
                name="expand_more"
                className={cn(
                  "text-sm transition-transform duration-300",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>
            {/* Always rendered so the six links stay in the static HTML for crawlers;
                `invisible` also takes them out of the tab order while closed. The
                wrapper's top padding keeps the hover area unbroken between trigger
                and panel. */}
            <div
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
                servicesOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 -translate-y-1 pointer-events-none"
              )}
            >
              {/* Near-opaque rather than `glass-modal`: this panel floats over body
                  copy, and at 0.72 alpha the text underneath reads straight through it. */}
              <div className="bg-background/97 backdrop-blur-xl border border-surface/10 rounded-2xl p-2 w-[320px] shadow-2xl">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setServicesOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors",
                      pathname === service.href
                        ? "bg-primary/10 text-primary"
                        : "text-surface/80 hover:bg-surface/5 hover:text-primary"
                    )}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40">
                      <MaterialIcon name={service.icon} className="text-primary text-[18px]" />
                    </span>
                    <span className="font-label text-xs font-bold uppercase tracking-wider leading-snug">
                      {service.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {linksAfterServices.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                navItemClass,
                isActive(pathname, link.href)
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-surface/80 hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden sm:flex bg-primary text-white px-6 py-2 rounded-full font-label uppercase tracking-wider text-xs font-bold hover:bg-background hover:text-primary border border-primary transition-all duration-300 items-center gap-2 group"
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
            className="md:hidden w-10 h-10 rounded-full border border-surface/10 flex items-center justify-center text-surface hover:border-primary hover:text-primary transition-colors"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MaterialIcon name={menuOpen ? "close" : "menu"} className="text-xl" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-background/97 backdrop-blur-xl border border-surface/10 rounded-2xl mt-2 p-6 flex flex-col gap-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
          {linksBeforeServices.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-label uppercase tracking-widest text-sm font-bold transition-colors",
                isActive(pathname, link.href) ? "text-primary" : "text-surface/80 hover:text-primary"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Services accordion — six extra entries would make the sheet unwieldy */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((open) => !open)}
              className={cn(
                "flex items-center justify-between font-label uppercase tracking-widest text-sm font-bold transition-colors",
                servicesActive ? "text-primary" : "text-surface/80 hover:text-primary"
              )}
            >
              Services
              <MaterialIcon
                name="expand_more"
                className={cn("text-lg transition-transform duration-300", mobileServicesOpen && "rotate-180")}
              />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-3 border-l border-surface/10 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-2 font-label text-xs font-bold uppercase tracking-wider transition-colors",
                      pathname === service.href
                        ? "text-primary"
                        : "text-surface/70 hover:text-primary"
                    )}
                  >
                    <MaterialIcon name={service.icon} className="text-primary text-[16px]" />
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {linksAfterServices.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-label uppercase tracking-widest text-sm font-bold transition-colors",
                isActive(pathname, link.href) ? "text-primary" : "text-surface/80 hover:text-primary"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-full font-label uppercase tracking-wider text-xs font-bold text-center border border-primary hover:bg-background hover:text-primary transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Get an Estimate
          </Link>
        </div>
      )}
    </nav>
  )
}
