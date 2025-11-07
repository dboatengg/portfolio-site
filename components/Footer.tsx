// // app/components/Footer.tsx
// import Link from "next/link"

// export default function Footer() {
//   return (
//     <footer className="w-full overflow-hidden">
//       <div className="w-full border-t border-neutral-800 pt-8 pb-6 text-sm text-gray-400">
//         <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm ">
//           <Link
//             href="https://twitter.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline hover:text-gray-200 transition-colors"
//           >
//             ↗ follow me on twitter
//           </Link>
//           <Link
//             href="https://github.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline hover:text-gray-200 transition-colors"
//           >
//             ↗ collaborate on github
//           </Link>
//           <Link
//             href="/contact"
//             className="hover:underline hover:text-gray-200 transition-colors"
//           >
//             ↗ love to talk?
//           </Link>
//         </div>
//       </div>
//     </footer>
//   )
// }

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden">
      <div className="w-full border-t border-neutral-800 pt-8 pb-6 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm">
          
          <Link
            href="mailto:dicksonboateng@proton.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline hover:text-gray-200 transition-colors"
          >
            <span>slide into my inbox</span>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>

          <Link
            href="https://github.com/dboatengg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline hover:text-gray-200 transition-colors"
          >
            <span>collaborate on github</span>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>

          <Link
            href="https://cal.com/dicksonboateng/30min" 
            target="_blank"
            className="flex items-center gap-1 hover:underline hover:text-gray-200 transition-colors"
          >
            <span>love to talk?</span>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>

        </div>
      </div>
    </footer>
  )
}
