import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About | Dickson Boateng",
  description:
    "Learn more about Dickson Boateng — developer, writer, and creative technologist.",
}

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-3">About</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Hey there, I’m <span className="font-semibold">Dickson Boateng</span>,
          a software developer and writer passionate about creating clean and
          accessible digital experiences. I love building things
          for the web, sharing knowledge, and exploring new ideas in technology.
        </p>
      </header>

      <div>
        <h2 className="text-xl font-semibold mb-4">Background</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          I started my journey in web development several years ago, driven by a
          curiosity for how websites and applications work. Over time, I honed my
            skills in front-end technologies, focusing on creating
            user-friendly and performant web applications.</p>
        <p className="text-gray-600 dark:text-gray-400">
          When I’m not coding, I enjoy writing articles about web development and personal growth. Sharing my experiences and
            insights is something I find incredibly rewarding.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">What I'm doing now</h2>
        <p className="text-gray-600 dark:text-gray-400">List one</p>
        <p className="text-gray-600 dark:text-gray-400">List two</p>
        <p className="text-gray-600 dark:text-gray-400">List three</p>
        
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Fun Facts about me</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">Fact one</p>
        <p className="text-gray-600 dark:text-gray-400 mb-2">Fact two</p>
        <p className="text-gray-600 dark:text-gray-400">Fact three</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Publications</h2>
        <Link href="#">Publication one</Link><br />
        <Link href="#">Publication two</Link><br />
        <Link href="#">Publication three</Link>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Let’s connect</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://twitter.com/dboatengg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Twitter size={18} />
            <span>Twitter</span>
          </Link>

          <Link
            href="https://github.com/dboatengg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://linkedin.com/dboatengg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="mailto:dicksonboateng@proton.me"
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
          >
            <Mail size={18} />
            <span>Email</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
