import Intro from "@/components/Intro"
import Writing from "@/components/Writing"

export const metadata = {
  title: "Dickson Boateng - Full-Stack Developer",
  description:
    "Building delightful, high-performing web experiences using React, Next.js, and Tailwind CSS.",
}

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-5 text-gray-200">
      <Intro />
      <Writing/>
    </main>
  )
}
