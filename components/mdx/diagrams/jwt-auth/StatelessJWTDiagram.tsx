export default function StatelessJWTDiagram() {
    return (
      <div className="not-prose my-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
        <svg viewBox="0 0 680 420" className="w-full h-auto">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
  
          {/* You */}
          <rect x="20" y="175" width="140" height="70" rx="12" className="fill-white dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="0.5" />
          <text x="90" y="200" textAnchor="middle" dominantBaseline="central" className="fill-zinc-900 dark:fill-zinc-100 text-sm font-medium">You (Browser)</text>
          <text x="90" y="220" textAnchor="middle" dominantBaseline="central" className="fill-zinc-500 dark:fill-zinc-400 text-xs">holds a token</text>
  
          {/* Load balancer */}
          <rect x="250" y="175" width="160" height="70" rx="12" className="fill-indigo-50 dark:fill-indigo-900/40 stroke-indigo-500" strokeWidth="0.5" />
          <text x="330" y="200" textAnchor="middle" dominantBaseline="central" className="fill-indigo-700 dark:fill-indigo-300 text-sm font-medium">Load balancer</text>
          <text x="330" y="220" textAnchor="middle" dominantBaseline="central" className="fill-indigo-500 dark:fill-indigo-400 text-xs">picks a server</text>
  
          {/* Server A */}
          <rect x="500" y="50" width="160" height="90" rx="12" className="fill-emerald-50 dark:fill-emerald-900/40 stroke-emerald-500" strokeWidth="0.5" />
          <text x="580" y="75" textAnchor="middle" dominantBaseline="central" className="fill-emerald-700 dark:fill-emerald-300 text-sm font-medium">Server A</text>
          <text x="580" y="95" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400 text-xs">checks signature ✓</text>
          <text x="580" y="113" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400 text-xs">recognizes you</text>
  
          {/* Server B */}
          <rect x="500" y="280" width="160" height="90" rx="12" className="fill-emerald-50 dark:fill-emerald-900/40 stroke-emerald-500" strokeWidth="0.5" />
          <text x="580" y="305" textAnchor="middle" dominantBaseline="central" className="fill-emerald-700 dark:fill-emerald-300 text-sm font-medium">Server B</text>
          <text x="580" y="325" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400 text-xs">checks signature ✓</text>
          <text x="580" y="343" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400 text-xs">recognizes you too</text>
  
          {/* You -> Load balancer */}
          <line x1="162" y1="210" x2="248" y2="210" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="0.5" markerEnd="url(#arrow)" />
  
          {/* Load balancer -> Server A */}
          <path d="M412,195 L460,195 L460,95 L498,95" fill="none" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="0.5" markerEnd="url(#arrow)" />
          <text x="400" y="140" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">request 1 (token attached)</text>
  
          {/* Load balancer -> Server B */}
          <path d="M412,225 L460,225 L460,325 L498,325" fill="none" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="0.5" markerEnd="url(#arrow)" />
          <text x="400" y="280" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">request 2 (same token)</text>
  
          <text x="340" y="400" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">
            {"Same client, different server, same result. No shared record needed."}
          </text>
        </svg>
      </div>
    );
  }