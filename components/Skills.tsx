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
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Cypress", icon: SiCypress, color: "#69D3A7" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Prisma", icon: SiPrisma, color: "#0C344B" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
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
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
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
          bg-[#262626] dark:bg-[rgb(var(--card))] shadow-sm transition"
            >
              <Icon className="w-8 h-8" style={{ color }} />
            </div>
            <span className="text-[rgb(var(--body-text))] text-sm font-medium text-center">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
