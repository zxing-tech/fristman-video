import Link from "next/link"

import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo"

import { ConsultationForm } from "./consultation-form"

export const metadata = pageMeta({
  title: "Contact Us",
  description:
    "Contact Firstman Videos for industrial drone cinematography in Malaysia and Southeast Asia. Request a consultation or quote - we reply within 24 business hours.",
  path: "/contact",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ])
)

const contactCards: {
  icon: string
  title: string
  lines: string[]
  href?: string
  external?: boolean
}[] = [
  {
    icon: "smartphone",
    title: "Mobile",
    lines: ["+6017 356 3598", "+6012 327 6737"],
  },
  {
    icon: "deskphone",
    title: "Office",
    lines: ["+603 7968 6737"],
    href: "tel:+60379686737",
  },
  {
    icon: "mail",
    title: "Email",
    lines: ["info@firstmanvideos.com"],
    href: "mailto:info@firstmanvideos.com",
  },
  {
    icon: "share",
    title: "Facebook",
    lines: ["firstmanvideos"],
    href: "https://www.facebook.com/firstmanvideos",
    external: true,
  },
]

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <JsonLd data={schema} />
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity blur-[4px]"
          style={{ backgroundImage: "url('/images/stitch/d3edef792e.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Breadcrumb */}
      <div className="w-full max-w-[1280px] mx-auto px-8 pt-28">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center text-xs font-body uppercase tracking-wider text-industrial-grey gap-2"
        >
          <Link className="hover:text-surface transition-colors" href="/">
            Home
          </Link>
          <span className="text-surface/30">/</span>
          <span className="text-primary font-bold">Contact</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center pt-12 pb-24 px-4 sm:px-8 z-10 w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          {/* Left Column: Hero Copy & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-8">
            {/* Scarcity Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-8 w-fit backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-surface">
                Priority consultation slots available this month
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tighter uppercase text-surface mb-6 leading-none">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#b01a20]">
                Touch
              </span>
            </h1>
            <p className="text-industrial-grey text-lg font-body mb-12 max-w-md leading-relaxed">
              Request a consultation, quote or site assessment. Our specialized industrial
              cinematography team typically responds within{" "}
              <strong className="text-surface">24 business hours</strong>.
            </p>
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {contactCards.map((card) => {
                const cardClass =
                  "glass-panel p-5 rounded-xl group cursor-pointer transition-all duration-300 hover:border-primary/50"
                const inner = (
                  <div className="flex items-start gap-4">
                    <MaterialIcon
                      name={card.icon}
                      className="text-industrial-grey text-2xl transition-all duration-300 group-hover:text-primary group-hover:scale-110 group-hover:[font-variation-settings:'FILL'_1]"
                    />
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-surface/50 mb-1">
                        {card.title}
                      </h3>
                      {card.lines.map((line, index) => (
                        <p
                          key={line}
                          className={`text-sm font-medium text-surface${
                            index < card.lines.length - 1 ? " mb-0.5" : ""
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )
                return card.href ? (
                  <a
                    key={card.title}
                    href={card.href}
                    className={cardClass}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={card.title} className={cardClass}>
                    {inner}
                  </div>
                )
              })}
            </div>
            {/* Registered Office */}
            <div className="glass-panel p-5 rounded-xl mb-12 flex items-start gap-4">
              <MaterialIcon
                name="location_on"
                className="text-industrial-grey text-2xl shrink-0 mt-0.5"
              />
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-surface/50 mb-1">
                  Address
                </h3>
                <p className="text-sm font-bold text-surface">
                  Firstman Productions{" "}
                  <span className="font-medium text-industrial-grey">(001335693-M)</span>
                </p>
                <p className="text-sm text-industrial-grey leading-relaxed mt-1">
                  No. 39-G, Block D, No. 1, Jalan SS7/26,
                  <br />
                  Kelana Jaya, 47301 Selangor, Malaysia
                </p>
              </div>
            </div>
            {/* SLA Notice */}
            <div className="mt-auto border-l-2 border-primary/50 pl-4 py-1">
              <div className="flex items-center gap-2 mb-1">
                <MaterialIcon name="timer" fill className="text-primary text-sm" />
                <span className="text-xs font-bold uppercase tracking-wider text-surface">
                  Response SLA
                </span>
              </div>
              <p className="text-xs text-industrial-grey max-w-sm">
                Enquiries are securely routed to our Business Development team. A confirmation copy
                will be sent to your provided email address immediately.
              </p>
            </div>
          </div>
          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Tech accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full blur-2xl" />
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <ConsultationForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
