import type { Metadata, Viewport } from "next"
import { Open_Sans } from "next/font/google"

import "./globals.css"
import { JsonLd } from "@/components/seo/json-ld"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteNavbar } from "@/components/site/site-navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { graph, organizationSchema, SITE, websiteSchema } from "@/lib/seo"
import { cn } from "@/lib/utils"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
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
      className={cn("antialiased font-sans", openSans.variable)}
    >
      <head>
        {/* Material Symbols dimuat sebagai stylesheet ikon (bukan next/font) agar font-variation-settings FILL tetap bisa dianimasikan */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-surface font-body antialiased overflow-x-hidden selection:bg-primary selection:text-white">
        {/* Site-wide business identity + website structured data */}
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SiteNavbar />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
