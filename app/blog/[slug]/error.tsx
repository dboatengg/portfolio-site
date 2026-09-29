"use client";

import { AlertTriangle, Link } from "lucide-react";

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-24 animate-fadeIn">
      <AlertTriangle className="h-10 w-10 text-[rgb(var(--accent))] mb-4" />

      <h2 className="text-[rgb(var(--text))] font-semibold text-lg">
        Couldn&apos;t load this post
      </h2>

      <p className="text-[rgb(var(--muted-text))] text-sm mt-2 text-center max-w-sm">
        Something went wrong on our end. You can try again, or head back
        to the blog and pick another post.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center rounded-full bg-[rgb(var(--text))] text-[rgb(var(--bg))] px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
        >
          Try again
        </button>

        <Link
          href="/blog"
          className="inline-flex items-center rounded-full border border-[rgb(var(--ctrl-border))] text-[rgb(var(--text))] px-4 py-2 text-sm font-medium transition-opacity hover:opacity-70"
        >
          Back to blog
        </Link>
      </div>

      {error.digest && (
        <p className="mt-6 text-xs text-[rgb(var(--muted-text))]">
          Error reference: {error.digest}
        </p>
      )}
    </div>
  );
}