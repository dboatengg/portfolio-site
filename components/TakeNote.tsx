import { Lightbulb } from 'lucide-react';

export default function TakeNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 flex gap-3 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/30 p-4">
      <div className="flex-shrink-0">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50">
          <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        </div>
      </div>
      <div className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 pt-1">
        {children}
      </div>
    </div>
  );
}