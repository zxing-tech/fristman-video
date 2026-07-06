import type { Metadata, Viewport } from "next"
import { Open_Sans } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteNavbar } from "@/components/site/site-navbar"
import { cn } from "@/lib/utils"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "First Man Videos - Industrial Cinematography",
    template: "%s | First Man Videos",
  },
  description:
    "Industrial cinematography for Oil & Gas and heavy industry. Cinematic UAV and ground-based visual documentation across Southeast Asia.",
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("dark antialiased font-sans", openSans.variable)}>
      <head>
        {/* Material Symbols dimuat sebagai stylesheet ikon (bukan next/font) agar font-variation-settings FILL tetap bisa dianimasikan */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-surface font-body antialiased overflow-x-hidden selection:bg-primary selection:text-white">
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
