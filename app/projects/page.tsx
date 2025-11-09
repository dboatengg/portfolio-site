import { ExternalLink, Github } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata:Metadata = {
  title: "Projects | Dickson Boateng",
  description:
    "A selection of projects I've worked on.",
    
}

const projects = [
  {
    title: "Portfolio Website",
    description:
      "The site you’re on right now. It is built with Next.js, React, and Tailwind. It’s fast, accessible, and thoughtfully designed.",
    status: "live",
    links: {
      live: "/",
      github: "https://github.com/dboatengg/portfolio-site",
    },
  },
  {
    title: "FocusNote",
    description:
      "Coming Soon: A web-based notes app built for developers.",
    status: "in progress",
    links: {},
  },
  {
    title: "Next.js Tutorial",
    description:
      "Work in Progress: A practical deep dive into the core concepts of Next.js.",
    status: "in progress",
    links: {},
  },
]


// const projects = [
//   {
//     title: "Portfolio Website",
//     description:
//       "The site you’re on right now — built with Next.js 16, React 19, and Tailwind 4.1. It’s fast, accessible, and thoughtfully designed.",
//     links: {
//       live: "#",
//       github: "#",
//     },
//   },
//   {
//     title: "Async Mastery",
//     description:
//       "An in-depth tutorial series and code examples on mastering asynchronous JavaScript patterns.",
//     links: {
//       live: "#",
//       github: "#",
//     },
//   },
//   {
//     title: "UI Motion Kit",
//     description:
//       "A lightweight component library for building fluid micro-interactions using Framer Motion and Tailwind.",
//     links: {
//       github: "#",
//     },
//   },
// ]

// export default function ProjectsPage() {
//   return (
//     <section className="max-w-3xl mx-auto py-10 space-y-8">
//       <header>
//         <h1 className="text-3xl font-bold mb-3">Projects</h1>
//         <p className="text-gray-600 dark:text-gray-400">
//           A few things I’ve worked on recently.
//         </p>
//       </header>

//       <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
//         {projects.map((project) => (
//           <li key={project.title} className="py-6">
//             <h2 className="text-xl font-semibold">{project.title}</h2>
//             <p className="text-gray-600 dark:text-gray-400 mt-2">
//               {project.description}
//             </p>

//             <div className="flex gap-4 mt-3">
//               {project.links.live && (
//                 <Link
//                   href={project.links.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-400 transition-colors"
//                 >
//                   <ExternalLink size={16} />
//                   <span>Live</span>
//                 </Link>
//               )}

//               {project.links.github && (
//                 <Link
//                   href={project.links.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-300 transition-colors"
//                 >
//                   <Github size={16} />
//                   <span>Code</span>
//                 </Link>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// }

export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-3">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A few things I’ve worked on and a few more in the works.
        </p>
      </header>

      <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {projects.map((project) => (
          <li key={project.title} className="py-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              {project.status === "in progress" && (
                <span className="text-xs bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 px-2 py-0.5 rounded-full font-medium">
                  In Progress
                </span>
              )}
            </div>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {project.description}
            </p>

            <div className="flex gap-4 mt-3">
              {project.links.live ? (
                <Link
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live</span>
                </Link>
              ) : (
                <span className="flex items-center gap-1 text-sm text-gray-400 cursor-not-allowed">
                  <ExternalLink size={16} />
                  <span>Live</span>
                </span>
              )}

              {project.links.github ? (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </Link>
              ) : (
                <span className="flex items-center gap-1 text-sm text-gray-400 cursor-not-allowed">
                  <Github size={16} />
                  <span>Code</span>
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
