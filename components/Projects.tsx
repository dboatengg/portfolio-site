// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Portfolio Website",
//     description:
//       "I built this portfolio site from the ground up to showcase my work, explore some blog ideas, and experiment with Next.js, React 19, and Tailwind CSS.",
//     image: "/images/featured-project01.webp",
//     href: "/projects/portfolio-website",
//   },
//   {
//     title: "Stride",
//     description:
//       "A fully functional e-commerce store I built to explore the complexity and features of modern online stores without relying on CMS tools like WordPress.",
//     image: "/images/featured-project02.webp",
//     href: "/projects/stride-ecommerce",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="mb-24">
//       <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] mb-8">
//         Featured Projects
//       </h2>

//       <div className="grid gap-10 md:grid-cols-2">
//         {projects.map((project, i) => (
//           <motion.div
//             key={project.title}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.2 }}
//             className="group relative border border-[rgb(var(--ctrl-border))] dark:border-gray-700 rounded-2xl overflow-hidden hover:border-[rgb(var(--border)/0.8)] bg-[rgb(var(--bg))] shadow-lg transition-all duration-300 flex flex-col"
//           >
//             {/* Project Image */}
//             <div className="relative w-full h-56 md:h-64 overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>

//             {/* Project Details */}
//             <div className="p-6 flex flex-col flex-1">
//               <h3 className="text-xl font-semibold text-[rgb(var(--text))] mb-2 transition-colors">
//                 {project.title}
//               </h3>
//               <p className="text-[rgb(var(--text))] text-sm leading-relaxed mb-4 flex-1">
//                 {project.description}
//               </p>

//               {/* Learn More Button */}
//               <Link
//                 href={project.href}
//                 className="inline-block mt-auto px-4 py-2 text-sm font-medium text-[rgb(var(--text))] border border-[rgb(var(--ctrl-border))] rounded-full transition-colors duration-300 self-start "
//                 // onClick={(e) => e.preventDefault()}
//               >
//                 Learn more →
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "I built this portfolio site from the ground up to showcase my work, explore some blog ideas, and experiment with Next.js, React 19, and Tailwind CSS.",
    gradient: "from-blue-500 to-purple-600",
    status: "done",
  },
  {
    title: "Stride (E-commerce)",
    description:
      "A fully functional e-commerce store I built to explore the complexity and features of modern online stores without CMS tools.",
    gradient: "from-emerald-500 to-teal-600",
    status: "progress",
  },
  {
    title: "Task Hub",
    description:
      "A PHP Task Manager I built to practice PHP, MySQL, CRUD, authentication, and file uploads.",
    gradient: "from-orange-500 to-red-600",
    status: "done",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] mb-8">
        Featured Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="
              group relative rounded-3xl overflow-hidden 
              border border-[rgb(var(--border))]
              bg-[rgb(var(--card))]
              shadow-lg transition-all duration-500 hover:shadow-xl
              flex flex-col
            "
          >
            {/* TOP COLOR SECTION */}
            <div
              className={`
                relative h-40 w-full rounded-t-3xl 
                bg-gradient-to-br ${project.gradient}
                flex items-end px-6 pb-4
                overflow-hidden
              `}
            >
              {/* diagonal texture */}
              <div className="absolute inset-0 opacity-[0.07] bg-[url('/images/diagonal-lines.svg')] bg-cover" />

              {/* big number */}
              <span className="relative text-5xl font-extrabold text-white/40 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* private / progress badge */}
              {project.status === "progress" && (
                <div className="absolute top-3 right-3 bg-yellow-500 text-black font-semibold text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow">
                  <Lock size={12} />
                  In progress
                </div>
              )}
            </div>

            {/* BOTTOM SECTION */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-[rgb(var(--text))]">
                {project.title}
              </h3>

              <p className="text-[rgb(var(--muted-text))] text-sm leading-relaxed mt-2 mb-4">
                {project.description}
              </p>

              <Link
                href={
                  project.status === "progress"
                    ? "#"
                    : `/projects/${project.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                }
                onClick={(e) =>
                  project.status === "progress" && e.preventDefault()
                }
                className="
                  mt-auto inline-block px-4 py-2 text-sm font-medium 
                  text-[rgb(var(--text))]
                  rounded-full transition-colors duration-300
                  hover:bg-[rgb(var(--muted))]
                  border border-[rgb(var(--ctrl-border))]
                "
              >
                {project.status === "progress" ? "Locked" : "Learn more →"}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
