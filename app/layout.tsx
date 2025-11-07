import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"

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
  description:
    "I'm Dickson Boateng, a web developer passionate about creating clean and performant web experiences.",
  metadataBase: new URL("https://dicksonboateng.com"),
  openGraph: {
    title: "Dickson Boateng | Portfolio & Blog",
    description:
      "Insights on modern web development, React, and JavaScript — by Dickson Boateng.",
    url: "https://dicksonboateng.com",
    siteName: "Dickson Boateng",
    images: [
      {
        url: "/og-image.jpg", // ← You can generate one later
        width: 1200,
        height: 630,
        alt: "Dickson Boateng Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dickson Boateng | Portfolio & Blog",
    description:
      "Insights on web development, JavaScript, and personal projects.",
    images: ["/og-image.jpg"],
  },
    icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" >
      <body
        className={`${sora.variable} ${inter.variable} bg-neutral-50 text-gray-900 dark:bg-neutral-900 dark:text-gray-100 antialiased font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300`}
      >
          <div className="min-h-screen flex flex-col items-center">
            <Header />
            <main className="w-full max-w-3xl px-5 sm:px-6 md:px-8 py-8">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  )
}
