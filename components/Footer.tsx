// app/components/Footer.tsx
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-20 w-full overflow-hidden bg-neutral-950">
      <div className="w-full border-t border-neutral-800 pt-8 pb-6 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-4 text-sm">
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-gray-200 transition-colors"
          >
            ↗ follow me on twitter
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-gray-200 transition-colors"
          >
            ↗ collaborate on github
          </Link>
          <Link
            href="/contact"
            className="hover:underline hover:text-gray-200 transition-colors"
          >
            ↗ love to talk?
          </Link>
        </div>
      </div>
    </footer>
  )
}
