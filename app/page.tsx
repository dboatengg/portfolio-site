import Intro from "@/components/Intro"
import BlogList from "@/components/BlogList"

export const metadata = {
  title: "Dickson Boateng - Full-Stack Developer",
  description:
    "Building delightful, high-performing web experiences using React, Next.js, and Tailwind CSS.",
}

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-10 text-gray-200">
      <Intro />
      <BlogList/>
    </main>
  )
}
