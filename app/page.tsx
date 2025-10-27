import Intro from "@/components/Intro"
import BlogList from "@/components/BlogList"

export const metadata = {
  title: "Dickson Boateng — Web Developer & Designer",
  description:
    "Building delightful, high-performing web experiences using React, Next.js, and Tailwind CSS.",
}

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-200">
      <Intro />
       <BlogList/>
    </main>
  )
}
