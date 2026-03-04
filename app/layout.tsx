import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
})

export const metadata: Metadata = {
  title: "BotBhai – AI Customer Support Agent",
  description:
    "BotBhai - Your 24/7 AI assistant that handles customer messages, comments, and orders. Always online, instant replies in Bengali and English.",
  authors: [{ name: "Tanvir Alam" }],
  creator: "Tanvir Alam",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
