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
      if (!servicesRef.current?.contains(event.target as Node))
        setServicesOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [servicesOpen])

  return (
    <nav className="fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-[1280px]">
      <div className="flex w-full items-center justify-between rounded-full border border-surface/10 bg-background/70 px-6 py-3 shadow-[0_0_15px_rgba(209,32,39,0.1)] shadow-xl backdrop-blur-md md:px-8">
        <Link
          href="/"
          className="text-xl font-black tracking-tighter text-surface"
          onClick={() => setMenuOpen(false)}
        >
          Firstman Videos
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {linksBeforeServices.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                navItemClass,
                isActive(pathname, link.href)
                  ? "border-b-2 border-primary pb-1 text-primary"
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
                  ? "border-b-2 border-primary pb-1 text-primary"
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
                  ? "visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible -translate-y-1 opacity-0"
              )}
            >
              {/* Near-opaque rather than `glass-modal`: this panel floats over body
                  copy, and at 0.72 alpha the text underneath reads straight through it. */}
              <div className="w-[320px] rounded-2xl border border-surface/10 bg-background/97 p-2 shadow-2xl backdrop-blur-xl">
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
                      <MaterialIcon
                        name={service.icon}
                        className="text-[18px] text-primary"
                      />
                    </span>
                    <span className="font-label text-xs leading-snug font-bold tracking-wider uppercase">
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
                  ? "border-b-2 border-primary pb-1 text-primary"
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
            className="group hidden items-center gap-2 rounded-full border border-primary bg-primary px-6 py-2 font-label text-xs font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-background hover:text-primary sm:flex"
          >
            Get an Estimate
            <MaterialIcon
              name="arrow_forward"
              className="text-sm transition-transform group-hover:translate-x-1"
            />
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-surface/10 text-surface transition-colors hover:border-primary hover:text-primary md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MaterialIcon
              name={menuOpen ? "close" : "menu"}
              className="text-xl"
            />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mt-2 flex max-h-[calc(100vh-8rem)] flex-col gap-4 overflow-y-auto rounded-2xl border border-surface/10 bg-background/97 p-6 backdrop-blur-xl md:hidden">
          {linksBeforeServices.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-label text-sm font-bold tracking-widest uppercase transition-colors",
                isActive(pathname, link.href)
                  ? "text-primary"
                  : "text-surface/80 hover:text-primary"
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
                "flex items-center justify-between font-label text-sm font-bold tracking-widest uppercase transition-colors",
                servicesActive
                  ? "text-primary"
                  : "text-surface/80 hover:text-primary"
              )}
            >
              Services
              <MaterialIcon
                name="expand_more"
                className={cn(
                  "text-lg transition-transform duration-300",
                  mobileServicesOpen && "rotate-180"
                )}
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
                      "flex items-center gap-2 font-label text-xs font-bold tracking-wider uppercase transition-colors",
                      pathname === service.href
                        ? "text-primary"
                        : "text-surface/70 hover:text-primary"
                    )}
                  >
                    <MaterialIcon
                      name={service.icon}
                      className="text-[16px] text-primary"
                    />
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
                "font-label text-sm font-bold tracking-widest uppercase transition-colors",
                isActive(pathname, link.href)
                  ? "text-primary"
                  : "text-surface/80 hover:text-primary"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-primary bg-primary px-6 py-3 text-center font-label text-xs font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-background hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Get an Estimate
          </Link>
        </div>
      )}
    </nav>
  )
}
