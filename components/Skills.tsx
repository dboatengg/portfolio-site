"use client";

import {
  Code2,
  Braces,
  FileCode2,
  Layers,
  Database,
  Github,
  Palette,
  LoaderPinwheel,
  Globe,
  DatabaseBackup,
} from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: Globe },
    { name: "React.js", icon: Layers },
    { name: "TypeScript", icon: FileCode2 },
    { name: "JavaScript", icon: Braces },
    { name: "Tailwind CSS", icon: Palette },
    { name: "PostgreSQL", icon: DatabaseBackup },
    { name: "Prisma", icon: LoaderPinwheel },
    { name: "WordPress", icon: Database },
    { name: "PHP", icon: Code2 },
    { name: "Git/GitHub", icon: Github },
  ];

  return (
    <section id="skills" className="mb-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] mb-6">
        Skills & Tools
      </h2>

      <p className="text-[rgb(var(--body-text))] mb-10 max-w-2xl">
        A selection of the technologies and tools I use to build applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group flex flex-col items-center justify-center gap-3 
            dark:bg-gray-900/70 rounded-xl p-5 border 
            border-[rgb(var(--ctrl-border))] dark:border-gray-700 transition-all duration-300"
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg 
            bg-[rgb(var(--surface-solid))] shadow-sm transition"
            >
              <Icon className="w-6 h-6 text-[rgb(var(--body-text))]" />
            </div>
            <span className="text-[rgb(var(--body-text))] text-sm font-medium">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
