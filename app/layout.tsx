import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { siteUrl } from "@/config/site";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";
// import { Newsreader, Caveat } from "next/font/google";
// import { cookies } from "next/headers";


// const newsreader = Newsreader({
//   subsets: ["latin"],
//   variable: "--font-serif",
//   style: ["normal", "italic"],
// })

// const caveat = Caveat({
//   subsets: ["latin"],
//   variable: "--font-caveat",
// })

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dickson Boateng | Software Developer from Ghana",
    template: "%s | Dickson Boateng",
  },
  description:
    "I’m Dickson Boateng, a software developer from Ghana who builds clean, responsive, and practical web interfaces.",
  applicationName: "Dickson Boateng",
  authors: [{ name: "Dickson Boateng", url: `${siteUrl}/about` }],
  creator: "Dickson Boateng",
  publisher: "Dickson Boateng",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    title: "Dickson Boateng | Software Developer from Ghana",
    description:
      "I'm Dickson Boateng, a software developer passionate about creating clean and performant web applications.",
    url: "/",
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
    title: "Dickson Boateng | Software Developer from Ghana",
    description:
      "Hi, I'm Dickson, a Software Developer from Ghana. My tech journey began in 2012, when my father surprised my younger brother and me with our first computer. Computers are not very common in Ghanaian homes, so you can imagine how excited we were. At first, we just used it to play games and do some typing with Mavis Beacon, but that early exposure to a home computer soon sparked a fascination that led me to explore programming.",
    images: ["/og-image.jpg"],
    creator: "@alege_dev",
  },
  
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {


  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" href="/favicons/b-dark-v2.png"  />
        
        

        <Script
    id="theme-init"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: `(function(){
        try {
          var theme = localStorage.getItem('theme');
          var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          var isDark = theme === 'dark' || (theme !== 'light' && prefersDark);
          var root = document.documentElement;
          if (isDark) {
            root.classList.add('dark');
            root.classList.remove('light');
          } else {
            root.classList.remove('dark');
            root.classList.add('light');
          }
          if (theme) root.classList.add('theme-set');
        } catch(e) {}
      })();`,
    }}
  />

      </head>
      <body className={`${inter.variable} ${sora.variable} antialiased font-sans selection:bg-blue-600`}>
        <NextTopLoader height={2} color="rgb(37,99,235)" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
          storageKey="theme"
        >
          {/* <div id="theme-ripple" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999, overflow: 'hidden',}} /> */}
          <div className="min-h-screen flex flex-col items-center">
            <Header />
            <ScrollToTop />
            <main className="w-full max-w-3xl px-5 sm:px-6 md:px-8 py-8 flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
