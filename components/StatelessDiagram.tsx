export default function StatelessDiagram() {
    return (
      <div className="not-prose my-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
        <svg viewBox="0 0 680 470" className="w-full h-auto">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
  
          <rect x="40" y="40" width="160" height="360" rx="12" className="fill-white dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="0.5" />
          <text x="120" y="80" textAnchor="middle" dominantBaseline="central" className="fill-zinc-900 dark:fill-zinc-100 text-sm font-medium">You</text>
          <text x="120" y="100" textAnchor="middle" dominantBaseline="central" className="fill-zinc-500 dark:fill-zinc-400 text-xs">browser</text>
  
          <rect x="480" y="40" width="160" height="360" rx="12" className="fill-white dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="0.5" />
          <text x="560" y="80" textAnchor="middle" dominantBaseline="central" className="fill-zinc-900 dark:fill-zinc-100 text-sm font-medium">Server</text>
  
          <text x="340" y="127" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">request 1</text>
          <line x1="202" y1="145" x2="478" y2="145" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="0.5" markerEnd="url(#arrow)" />
  
          <text x="340" y="187" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">response 1</text>
          <line x1="478" y1="205" x2="202" y2="205" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="0.5" markerEnd="url(#arrow)" />
  
          <text x="340" y="247" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">request 2</text>
          <line x1="202" y1="265" x2="478" y2="265" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="0.5" markerEnd="url(#arrow)" />
  
          <circle cx="560" cy="320" r="20" className="fill-amber-50 dark:fill-amber-900/40 stroke-amber-500" strokeWidth="0.5" />
          <text x="560" y="320" textAnchor="middle" dominantBaseline="central" className="fill-amber-700 dark:fill-amber-300 text-sm font-medium">?</text>
          <text x="560" y="356" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">no memory of request 1</text>
  
          <text x="340" y="440" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">
            Same browser, same server — but request 2 is treated as a total stranger
          </text>
        </svg>
      </div>
    );
  }