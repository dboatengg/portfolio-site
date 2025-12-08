import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import CopyCode from "@/components/CopyCode";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dickson Boateng",
  description:
    "I’m Dickson Boateng, a software developer from Ghana who enjoys building clean, responsive, and practical web interfaces with modern JavaScript tools.",
  metadataBase: new URL("https://dicksonboateng.com"),
  openGraph: {
    title: "Dickson Boateng ",
    description:
      "I'm Dickson Boateng, a software developer passionate about creating clean and performant web experiences.",
    url: "https://dicksonboateng.com",
    siteName: "Dickson Boateng",
    images: [
      {
        url: "/og-image.jpg",
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
    title: "Dickson Boateng ",
    description:
      "Hi, I'm Dickson—a Software Developer from Ghana. My tech journey began in 2012, when my father surprised my younger brother and me with our first computer. Computers are not very common in Ghanaian homes, so you can imagine how excited we were. At first, we just used it to play games and do some typing with Mavis Beacon, but that early exposure to a home computer soon sparked a fascination that led me to explore programming.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/icon-192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icon-512.png"
          sizes="512x512"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} bg-bg antialiased font-sans selection:bg-blue-600 transition-colors duration-300`}
      >
        <NextTopLoader height={2} color="rgb(37,99,235)" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen flex flex-col items-center">
            <Header />
            <main className="w-full max-w-3xl px-5 sm:px-6 md:px-8 py-8">
              <CopyCode />
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
