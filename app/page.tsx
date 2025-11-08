import Intro from "@/components/Intro"
import BlogList from "@/components/BlogList"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "Dickson Boateng",
  description:
    "I'm Dickson Boateng, a frontend developer passionate about creating clean and performant web experiences.",
}

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-10 text-gray-200">
      <Intro />
      <BlogList/>
    </main>
  )
}
