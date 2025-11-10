import Intro from "@/components/Intro"
import BlogList from "@/components/BlogList"
import { Metadata } from "next"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export const metadata:Metadata = {
  title: "Dickson Boateng",
  description:
    "I'm Dickson Boateng, a frontend developer passionate about creating clean and performant web experiences.",
      keywords: [
    "frontend developer Ghana",
    "web developer Africa",
    "software developer Ghana",
    "Next.js developer",
    "React developer Ghana",
    "WordPress developer Ghana",
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
}

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-10 text-gray-200">
      <Intro />
      {/* <BlogList/> */}
      <Projects/>
      <Contact/>
    </main>
  )
}
