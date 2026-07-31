export default function TokenAnatomyDiagram() {
    return (
      <div className="not-prose my-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
        <svg viewBox="0 0 680 300" className="w-full h-auto">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
  
          {/* Header segment */}
          <rect x="20" y="40" width="180" height="40" rx="8" className="fill-blue-50 dark:fill-blue-900/40 stroke-blue-500" strokeWidth="0.5" />
          <text x="110" y="60" textAnchor="middle" dominantBaseline="central" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono">
          eyJhbGciOiJIUzI1NiIs...
          </text>
  
          {/* Payload segment */}
          <rect x="230" y="40" width="220" height="40" rx="8" className="fill-violet-50 dark:fill-violet-900/40 stroke-violet-500" strokeWidth="0.5" />
          <text x="340" y="60" textAnchor="middle" dominantBaseline="central" className="fill-violet-700 dark:fill-violet-300 text-[11px] font-mono">
          eyJ1c2VySWQiOjEyMywi...
          </text>
  
          {/* Signature segment */}
          <rect x="480" y="40" width="180" height="40" rx="8" className="fill-amber-50 dark:fill-amber-900/40 stroke-amber-500" strokeWidth="0.5" />
          <text x="570" y="60" textAnchor="middle" dominantBaseline="central" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono">
          4f7d8e2a1b9c...
          </text>
  
          {/* Connector arrows */}
          <line x1="110" y1="80" x2="110" y2="118" className="stroke-blue-400" strokeWidth="1" markerEnd="url(#arrow)" />
          <line x1="340" y1="80" x2="340" y2="118" className="stroke-violet-400" strokeWidth="1" markerEnd="url(#arrow)" />
          <line x1="570" y1="80" x2="570" y2="118" className="stroke-amber-400" strokeWidth="1" markerEnd="url(#arrow)" />
  
          {/* Header card */}
          <rect x="20" y="120" width="180" height="60" rx="8" className="fill-blue-50 dark:fill-blue-900/40 stroke-blue-500" strokeWidth="0.5" />
          <text x="110" y="142" textAnchor="middle" dominantBaseline="central" className="fill-blue-700 dark:fill-blue-300 text-sm font-medium">Header</text>
          <text x="110" y="160" textAnchor="middle" dominantBaseline="central" className="fill-blue-600 dark:fill-blue-400 text-xs">Signing method used</text>
  
          {/* Payload card */}
          <rect x="230" y="120" width="220" height="60" rx="8" className="fill-violet-50 dark:fill-violet-900/40 stroke-violet-500" strokeWidth="0.5" />
          <text x="340" y="142" textAnchor="middle" dominantBaseline="central" className="fill-violet-700 dark:fill-violet-300 text-sm font-medium">Payload</text>
          <text x="340" y="160" textAnchor="middle" dominantBaseline="central" className="fill-violet-600 dark:fill-violet-400 text-xs">The actual claims</text>
  
          {/* Signature card */}
          <rect x="480" y="120" width="180" height="60" rx="8" className="fill-amber-50 dark:fill-amber-900/40 stroke-amber-500" strokeWidth="0.5" />
          <text x="570" y="142" textAnchor="middle" dominantBaseline="central" className="fill-amber-700 dark:fill-amber-300 text-sm font-medium">Signature</text>
          <text x="570" y="160" textAnchor="middle" dominantBaseline="central" className="fill-amber-600 dark:fill-amber-400 text-xs">Proves it&apos;s untampered</text>
  
          <text x="340" y="230" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">
            {"The dots just join the three parts together."}
          </text>
        </svg>
      </div>
    );
  }