import Footer from "@/components/Footer"

import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dickson Boateng | Portfolio & Blog",
  description: "Thoughts on software development, personal experience, and code.",
  icons: {
    icon: "/favicon.svg",
  }
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      
      <body
        className={`${sora.variable} ${inter.variable} bg-neutral-900 text-gray-100 antialiased font-sans selection:bg-blue-600 selection:text-white`}
      >
        <div className="min-h-screen flex flex-col items-center">
          <Header />
          <main className="w-full max-w-3xl px-3 py-10">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
