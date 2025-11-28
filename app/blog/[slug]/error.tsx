"use client";

import { AlertTriangle } from "lucide-react";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 animate-fadeIn">
      <AlertTriangle className="h-10 w-10 text-accent mb-4" />

      <h2 className="text-text font-semibold text-lg">
        Couldn’t load this post
      </h2>

      <p className="text-muted-text text-sm mt-2">
        Something went wrong. Try again?
      </p>

      <button
        onClick={reset}
        className="mt-6 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium 
                 hover:opacity-90 transition"
      >
        Retry
      </button>
    </div>
  );
}
