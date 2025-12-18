import type React from "react"
import type { Metadata } from "next"
import { Dela_Gothic_One, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const delaGothicOne = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SURIKOV Marketing Agency | CMO на аутсорсе для малого и среднего бизнеса",
  description:
    "Я выстраиваю операционный отдел маркетинга в вашем бизнесе: от хаоса и «у нас есть таргетинг» — к системе, с прогнозируемыми заявками и понятной экономикой.",
  generator: "v0.app",
  keywords: ["маркетинговый директор", "CMO на аутсорсе", "маркетинг для бизнеса", "системный маркетинг", "SURIKOV"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${delaGothicOne.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
