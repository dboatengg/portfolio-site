import Intro from "@/components/Intro"
import BlogList from "@/components/BlogList"
import { Metadata } from "next"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"

// export const metadata:Metadata = {
//   title: "Dickson Boateng",
//   description:
//     "Hi, I'm Dickson—a frontend developer from Ghana. My tech journey began in 2012, when my father surprised my younger brother and me with our first computer. Computers are not very common in Ghanaian homes, so you can imagine how excited we were. At first, we just used it to play games and do some typing with Mavis Beacon, but that early exposure to a home computer soon sparked a fascination that led me to explore programming.",
//       keywords: [
//     "frontend developer Ghana",
//     "web developer Africa",
//     "software developer Ghana",
//     "Next.js developer",
//     "React developer Ghana",
//     "WordPress developer Ghana",
//   ],  
//   openGraph: {
//     title: "Dickson Boateng | Frontend Developer in Ghana",
//     description: "Personal website of Dickson Boateng",
//     url: "https://dicksonboateng.com",
//     siteName: "Dickson Boateng Personal Website",
//     images: ["/og-image.jpg"],
//     locale: "en_GH",
//     type: "website",
//   },
//   alternates: {
//     canonical: "https://dicksonboateng.com",
//   },
// }

export const metadata: Metadata = {
  title: "Dickson Boateng",
  description:
    "Hi, I'm Dickson—a Software Developer from Ghana. My tech journey began in 2012, when my father surprised my younger brother and me with our first computer. Computers are not very common in Ghanaian homes, so you can imagine how excited we were. At first, we just used it to play games and do some typing with Mavis Beacon, but that early exposure to a home computer soon sparked a fascination that led me to explore programming.",
  keywords: [
    "frontend developer Ghana",
    "frontend engineer Ghana",
    "web developer Ghana",
    "web developer Africa",
    "software developer Ghana",
    "Next.js developer",
    "React developer Ghana",
    "React.js developer",
    "Next.js portfolio",
    "JavaScript developer Ghana",
    "TypeScript developer Ghana",
    "Ghana software engineer",
    "remote frontend developer",
    "modern web development Ghana",
    "Tailwind CSS developer",
    "WordPress developer Ghana",
    "full-stack web developer Ghana",
    "UI developer Ghana",
    "creative developer Ghana",
  ],
  openGraph: {
    title: "Dickson Boateng | Frontend Developer in Ghana",
    description: "Personal website of Dickson Boateng",
    url: "https://dicksonboateng.com",
    siteName: "Dickson Boateng Personal Website",
    images: ["/og-image.jpg"],
    locale: "en_GH",
    type: "website",
  },
  alternates: {
    canonical: "https://dicksonboateng.com",
  },
};


export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-10 text-gray-200">
      <Intro />
      <Skills/>
      {/* <BlogList/> */}
      <Projects/>
      <Contact/>
    </main>
  )
}
