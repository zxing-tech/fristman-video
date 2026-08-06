import type { Metadata, Viewport } from "next"
import { Archivo, IBM_Plex_Mono } from "next/font/google"

import "./globals.css"
import { JsonLd } from "@/components/seo/json-ld"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteNavbar } from "@/components/site/site-navbar"
import { WhatsAppFab } from "@/components/site/whatsapp-fab"
import { ThemeProvider } from "@/components/theme-provider"
import { graph, organizationSchema, SITE, websiteSchema } from "@/lib/seo"
import { cn } from "@/lib/utils"

// Archivo carries every UI role. `axes: ["wdth"]` is load-bearing, not optional:
// it is what lets the display heading condense via `font-stretch-*`. Without it
// next/font emits `font-stretch: 100%` and the width utilities silently no-op.
// The `wght` axis reaches a real 900 here — Open Sans stopped at 800, so every
// `font-black` on the site used to clamp back down to `font-extrabold`.
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-sans",
})

// HUD readouts only — reference codes, coordinates, statuses. Previously these
// fell through to the platform monospace stack, so the signature rendered as a
// different face on every operating system.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Firstman Videos — Industrial Cinematography for Oil & Gas",
    template: "%s | Firstman Videos",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: true, email: true, address: true },
  // Sensible defaults; each page overrides these via `pageMeta()`.
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
    title: "Firstman Videos — Industrial Cinematography for Oil & Gas",
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firstman Videos — Industrial Cinematography for Oil & Gas",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        archivo.variable,
        plexMono.variable
      )}
    >
      <head>
        {/* Material Symbols dimuat sebagai stylesheet ikon (bukan next/font) agar font-variation-settings FILL tetap bisa dianimasikan */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      {/* `overflow-x-clip`, not `overflow-x-hidden`. They clip identically, but
          `hidden` on one axis forces the other from `visible` to `auto`, which
          makes the body a scroll container — and a scroll container between the
          viewport and an element silently disables `position: sticky` on every
          descendant. `html` already carries `overflow-x: clip` in globals.css
          for exactly this reason ("clip, not hidden, so sticky/fixed keep
          working"); the body contradicted it, so nothing on the site actually
          stuck. Measured 2026-08-05: the `/our-work` filter bar and the
          `/privacy-policy` contents rail both computed to `position: sticky`
          and both scrolled away with the page. */}
      <body className="overflow-x-clip bg-background font-body text-surface antialiased selection:bg-primary selection:text-white">
        {/* Site-wide business identity + website structured data */}
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SiteNavbar />
          {children}
          <SiteFooter />
          {/* Last in the DOM on purpose: it is a floating convenience, so it
              should be the last thing a keyboard visitor reaches rather than an
              interruption between the nav and the page. Its z-30 sits under the
              cookie banner (z-40), the navbar (z-50) and the gated-access dialog
              (z-100), so nothing it can overlap ends up behind it. */}
          <WhatsAppFab />
        </ThemeProvider>
      </body>
    </html>
  )
}
