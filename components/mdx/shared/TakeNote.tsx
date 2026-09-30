import { Lightbulb } from "lucide-react";

export default function TakeNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="not-prose my-8 w-full rounded-lg border-l-4 border-amber-400 bg-amber-50/60 dark:bg-amber-950/20 px-4 py-4 sm:px-5 sm:py-5">
      <div className="flex items-start gap-3">
        <Lightbulb
          className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400"
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
            Note
          </p>
          <div className="text-[0.9375rem] leading-relaxed text-zinc-700 dark:text-zinc-300 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}