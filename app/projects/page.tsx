import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Projects | Dickson Boateng",
  description:
    "A selection of projects I've built — from creative experiments to production-ready applications.",
}

const projects = [
  {
    title: "Portfolio Website",
    description:
      "The site you’re on right now — built with Next.js 16, React 19, and Tailwind 4.1. It’s fast, accessible, and thoughtfully designed.",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Async Mastery",
    description:
      "An in-depth tutorial series and code examples on mastering asynchronous JavaScript patterns.",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "UI Motion Kit",
    description:
      "A lightweight component library for building fluid micro-interactions using Framer Motion and Tailwind.",
    links: {
      github: "#",
    },
  },
]

export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-3">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A few things I’ve worked on recently — each one teaching me something
          new about design, performance, or simplicity.
        </p>
      </header>

      <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {projects.map((project) => (
          <li key={project.title} className="py-6">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {project.description}
            </p>

            <div className="flex gap-4 mt-3">
              {project.links.live && (
                <Link
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live</span>
                </Link>
              )}

              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
