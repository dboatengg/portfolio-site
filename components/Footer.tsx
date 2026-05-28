// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="w-full overflow-hidden">
//       <div className="w-full border-t border-[rgb(var(--border))] pt-8 pb-6 text-sm text-[rgb(var(--text))]">
//         {/* Top Links Row */}
//         <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm mb-6">
//           <Link
//             href="https://www.linkedin.com/in/dboatengx"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:underline hover:text-[rgb(var(--text)/0.5)] transition-colors"
//           >
//             <span>connect on LinkedIn</span>
//             <ArrowUpRight size={14} strokeWidth={1.5} />
//           </Link>

//           <Link
//             href="https://github.com/dboatengg"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:underline hover:text-[rgb(var(--text)/0.5)] transition-colors"
//           >
//             <span>let&apos;s collaborate on GitHub</span>
//             <ArrowUpRight size={14} strokeWidth={1.5} />
//           </Link>

//           <Link
//             href="https://cal.com/dicksonboateng/30min"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:underline hover:text-[rgb(var(--text)/0.5)] transition-colors"
//           >
//             <span>love to talk?</span>
//             <ArrowUpRight size={14} strokeWidth={1.5} />
//           </Link>
//         </div>

//       </div>
//     </footer>
//   );
// }

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[rgb(var(--border))]">
      <div className="w-full mx-auto px-6 py-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <p className="text-sm text-[rgb(var(--muted-text))]">
            © {new Date().getFullYear()} Dickson Boateng
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              href="https://github.com/dboatengg"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-[rgb(var(--body-text))] hover:text-[rgb(var(--text))] transition-colors"
            >
              GitHub
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/dboatengx"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-[rgb(var(--body-text))] hover:text-[rgb(var(--text))] transition-colors"
            >
              LinkedIn
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="mailto:dicksonboateng@proton.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-[rgb(var(--body-text))] hover:text-[rgb(var(--text))] transition-colors"
            >
              Email
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}