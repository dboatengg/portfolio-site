import Footer from "@/components/Footer"

import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dickson Boateng | Portfolio & Blog",
  description: "Thoughts on software development, creativity, and code.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} bg-neutral-950 text-gray-100 antialiased font-sans selection:bg-blue-600 selection:text-white`}
      >
        <div className="min-h-screen flex flex-col items-center">
          <main className="w-full max-w-3xl px-6 py-10">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
