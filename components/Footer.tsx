import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden">
      <div className="w-full border-t border-[rgb(var(--border))] pt-8 pb-6 text-sm text-[rgb(var(--text))]">
        {/* Top Links Row */}
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm mb-6">
          <Link
            href="https://www.linkedin.com/in/dboatengx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline hover:text-[rgb(var(--text)/0.5)] transition-colors"
          >
            <span>connect on LinkedIn</span>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>

          <Link
            href="https://github.com/dboatengg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline hover:text-[rgb(var(--text)/0.5)] transition-colors"
          >
            <span>let&apos;s collaborate on github</span>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>

          <Link
            href="https://cal.com/dicksonboateng/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline hover:text-[rgb(var(--text)/0.5)] transition-colors"
          >
            <span>love to talk?</span>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

      </div>
    </footer>
  );
}
