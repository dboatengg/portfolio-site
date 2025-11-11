import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden">
      <div className="w-full border-t border-neutral-800 pt-8 pb-6 text-sm text-gray-400">
        {/* Top Links Row */}
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm mb-6">
          <Link
          href="#"
          target="_blank"
          className="flex items-center gap-1 hover:underline hover:text-gray-200 transition-colors"
        >
          <span>support my work</span>
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
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline hover:text-gray-200 transition-colors"
          >
            <span>love to talk?</span>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Bottom Signature */}
        <div className="flex items-center justify-center gap-1 text-gray-500 text-sm">
          <span>Made with</span>
          <Heart
            size={14}
            strokeWidth={2}
            className="text-red-500 fill-red-500 animate-pulse"
          />
          <span>by Dickson</span>
        </div>
      </div>
    </footer>
  );
}
