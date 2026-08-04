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
    <div className="relative flex min-h-screen flex-col">
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
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Breadcrumb */}
      <div className="mx-auto w-full max-w-[1280px] px-8 pt-28">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-body text-xs tracking-wider text-industrial-grey uppercase"
        >
          <Link className="transition-colors hover:text-surface" href="/">
            Home
          </Link>
          <span className="text-surface/30">/</span>
          <span className="font-bold text-primary">Contact</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="z-10 mx-auto flex w-full max-w-[1280px] flex-grow flex-col items-center justify-center px-4 pt-12 pb-24 sm:px-8">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Hero Copy & Contact Info */}
          <div className="flex flex-col justify-start pt-8 lg:col-span-5">
            {/* Scarcity Badge */}
            <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-bold tracking-wider text-surface uppercase">
                Priority consultation slots available this month
              </span>
            </div>
            <h1 className="mb-6 font-headline text-4xl leading-none font-black tracking-tight text-surface uppercase font-stretch-semi-condensed md:text-6xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-[#b01a20] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="mb-12 max-w-md font-body text-lg leading-relaxed text-industrial-grey">
              Request a consultation, quote or site assessment. Our specialized
              industrial cinematography team typically responds within{" "}
              <strong className="text-surface">24 business hours</strong>.
            </p>
            {/* Contact Info Grid */}
            <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactCards.map((card) => {
                const cardClass =
                  "glass-panel p-5 rounded-xl group cursor-pointer transition-all duration-300 hover:border-primary/50"
                const inner = (
                  <div className="flex items-start gap-4">
                    <MaterialIcon
                      name={card.icon}
                      className="text-2xl text-industrial-grey transition-all duration-300 group-hover:scale-110 group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                    />
                    <div>
                      <h3 className="mb-1 text-xs font-bold tracking-wider text-surface/50 uppercase">
                        {card.title}
                      </h3>
                      {card.lines.map((line, index) => (
                        <p
                          key={line}
                          className={`text-sm font-medium text-surface${
                            index < card.lines.length - 1 ? "mb-0.5" : ""
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
            <div className="glass-panel mb-12 flex items-start gap-4 rounded-xl p-5">
              <MaterialIcon
                name="location_on"
                className="mt-0.5 shrink-0 text-2xl text-industrial-grey"
              />
              <div>
                <h3 className="mb-1 text-xs font-bold tracking-wider text-surface/50 uppercase">
                  Address
                </h3>
                <p className="text-sm font-bold text-surface">
                  Firstman Productions{" "}
                  <span className="font-medium text-industrial-grey">
                    (001335693-M)
                  </span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-industrial-grey">
                  No. 39-G, Block D, No. 1, Jalan SS7/26,
                  <br />
                  Kelana Jaya, 47301 Selangor, Malaysia
                </p>
              </div>
            </div>
            {/* SLA Notice */}
            <div className="mt-auto border-l-2 border-primary/50 py-1 pl-4">
              <div className="mb-1 flex items-center gap-2">
                <MaterialIcon
                  name="timer"
                  fill
                  className="text-sm text-primary"
                />
                <span className="text-xs font-bold tracking-wider text-surface uppercase">
                  Response SLA
                </span>
              </div>
              <p className="max-w-sm text-xs text-industrial-grey">
                Enquiries are securely routed to our Business Development team.
                A confirmation copy will be sent to your provided email address
                immediately.
              </p>
            </div>
          </div>
          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="glass-panel relative overflow-hidden rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] md:p-10">
              {/* Tech accents */}
              <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-primary/10 blur-2xl" />
              <div className="absolute top-4 right-4 h-2 w-2 animate-pulse rounded-full bg-primary" />
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <ConsultationForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
