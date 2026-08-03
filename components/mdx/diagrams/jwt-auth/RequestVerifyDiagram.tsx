export default function RequestVerifyDiagram() {
    return (
      <div className="not-prose my-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
        <svg viewBox="0 0 680 400" className="w-full h-auto">
          <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
          </defs>
  
          {/* You */}
          <rect x="20" y="30" width="150" height="290" rx="14" className="fill-white dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="0.5" />
          <text x="95" y="55" textAnchor="middle" dominantBaseline="central" className="fill-zinc-900 dark:fill-zinc-100 text-sm font-medium">You</text>
          <text x="95" y="72" textAnchor="middle" dominantBaseline="central" className="fill-zinc-500 dark:fill-zinc-400 text-xs">holds a token</text>
  
          {/* Server */}
          <rect x="510" y="30" width="150" height="290" rx="14" className="fill-white dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="0.5" />
          <text x="585" y="55" textAnchor="middle" dominantBaseline="central" className="fill-zinc-900 dark:fill-zinc-100 text-sm font-medium">Server</text>
          <text x="585" y="72" textAnchor="middle" dominantBaseline="central" className="fill-zinc-500 dark:fill-zinc-400 text-xs">middleware</text>
  
          {/* Request arrow */}
          <text x="340" y="55" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">Request + token attached</text>
          <line x1="180" y1="70" x2="500" y2="70" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="0.5" markerEnd="url(#arrow)" />
  
          {/* Server internal step */}
          <rect x="520" y="95" width="130" height="40" rx="8" className="fill-amber-50 dark:fill-amber-900/40 stroke-amber-500" strokeWidth="0.5" />
          <text x="585" y="115" textAnchor="middle" dominantBaseline="central" className="fill-amber-700 dark:fill-amber-300 text-xs font-medium">Recompute signature</text>
  
          {/* Branch line down */}
          <line x1="585" y1="135" x2="585" y2="160" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="0.5" />
  
          {/* Match branch */}
          <rect x="520" y="165" width="130" height="40" rx="8" className="fill-emerald-50 dark:fill-emerald-900/40 stroke-emerald-500" strokeWidth="0.5" />
          <text x="585" y="180" textAnchor="middle" dominantBaseline="central" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-medium">Matches ✓</text>
          <text x="585" y="196" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400 text-[10px]">reads payload, continues</text>
  
          {/* No match branch */}
          <rect x="520" y="215" width="130" height="40" rx="8" className="fill-red-50 dark:fill-red-900/40 stroke-red-500" strokeWidth="0.5" />
          <text x="585" y="230" textAnchor="middle" dominantBaseline="central" className="fill-red-700 dark:fill-red-300 text-xs font-medium">No match ✕</text>
          <text x="585" y="246" textAnchor="middle" dominantBaseline="central" className="fill-red-600 dark:fill-red-400 text-[10px]">rejected immediately</text>
  
          {/* Response arrow */}
          <text x="340" y="280" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">Request allowed or rejected</text>
          <line x1="500" y1="295" x2="180" y2="295" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="0.5" markerEnd="url(#arrow)" />
  
          <text x="340" y="360" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">
            {"No database lookup. Just a signature check."}
          </text>
        </svg>
      </div>
    );
  }