// "use client";

// import {
//   Code2,
//   Braces,
//   FileCode2,
//   Layers,
//   Database,
//   Github,
//   Palette,
//   LoaderPinwheel,
//   Globe,
//   DatabaseBackup,
// } from "lucide-react";

// export default function Skills() {
//   const skills = [
//     { name: "Next.js", icon: Globe },
//     { name: "React.js", icon: Layers },
//     { name: "TypeScript", icon: FileCode2 },
//     { name: "JavaScript", icon: Braces },
//     { name: "Tailwind CSS", icon: Palette },
//     { name: "PostgreSQL", icon: DatabaseBackup },
//     { name: "Prisma", icon: LoaderPinwheel },
//     { name: "WordPress", icon: Database },
//     { name: "PHP", icon: Code2 },
//     { name: "Git/GitHub", icon: Github },
//   ];

//   return (
//     <section id="skills" className="mb-24">
//       <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] mb-6">
//         Skills & Tools
//       </h2>

//       <p className="text-[rgb(var(--body-text))] mb-10 max-w-2xl">
//         A selection of the technologies and tools I use to build applications.
//       </p>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//         {skills.map(({ name, icon: Icon }) => (
//           <div
//             key={name}
//             className="group flex flex-col items-center justify-center gap-3
//             dark:bg-gray-900/70 rounded-xl p-5 border
//             border-[rgb(var(--ctrl-border))] dark:border-gray-700 transition-all duration-300"
//           >
//             <div
//               className="flex items-center justify-center w-10 h-10 rounded-lg
//             bg-[rgb(var(--surface-solid))] shadow-sm transition"
//             >
//               <Icon className="w-6 h-6 text-[rgb(var(--body-text))]" />
//             </div>
//             <span className="text-[rgb(var(--body-text))] text-sm font-medium">
//               {name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiWordpress,
  SiPhp,
  SiGithub,
  SiCypress,
} from "react-icons/si";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Cypress", icon: SiCypress, color: "#69D3A7" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Prisma", icon: SiPrisma, color: "#0C344B" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Git/GitHub", icon: SiGithub, color: "#FFFFFF" },
  ];

  return (
    <section id="skills" className="mb-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] mb-6">
        Tech Stack
      </h2>

      {/* <p className="text-[rgb(var(--body-text))] mb-10 max-w-2xl">
        A selection of the technologies and tools I use to build applications.
      </p> */}

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {skills.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center justify-center gap-3 rounded-xl p-5 border 
            border-[rgb(var(--ctrl-border))] dark:border-gray-700 transition-all duration-300"
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg 
          bg-[#2A2A2A] dark:bg-[rgb(var(--surface-solid))] shadow-sm transition"
            >
              <Icon className="w-6 h-6" style={{ color }} />
            </div>
            <span className="text-[rgb(var(--body-text))] text-sm font-medium">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
