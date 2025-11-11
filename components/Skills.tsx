'use client';

import {
  Code2,
  Braces,
  FileCode2,
  Layers,
  Database,
  GitBranch,
  Github,
  Palette,
  Terminal,
  Globe,
} from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'Next.js', icon: Globe },
    { name: 'React.js', icon: Layers },
    { name: 'TypeScript', icon: FileCode2 },
    { name: 'JavaScript', icon: Braces },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'PHP', icon: Code2 },
    { name: 'WordPress', icon: Database },
    // { name: 'Git', icon: GitBranch },
    { name: 'Git/GitHub', icon: Github },
    // { name: 'Terminal', icon: Terminal },
  ];

  return (
    <section id="skills" className="mb-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        Skills & Tools
      </h2>

      <p className="text-gray-400 mb-10 max-w-2xl">
        A selection of the technologies and tools I use to build.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group flex flex-col items-center justify-center gap-3 bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-gray-700 hover:bg-gray-900/70 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition">
              <Icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </div>
            <span className="text-gray-200 text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
