export default function LoginFlowDiagram() {
    return (
      <div className="not-prose my-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
        <svg viewBox="0 0 680 380" className="w-full h-auto">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
  
          {/* You */}
          <rect x="20" y="30" width="150" height="270" rx="14" className="fill-white dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="0.5" />
          <text x="95" y="55" textAnchor="middle" dominantBaseline="central" className="fill-zinc-900 dark:fill-zinc-100 text-sm font-medium">You</text>
          <text x="95" y="72" textAnchor="middle" dominantBaseline="central" className="fill-zinc-500 dark:fill-zinc-400 text-xs">browser</text>
  
          {/* Server */}
          <rect x="510" y="30" width="150" height="270" rx="14" className="fill-white dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="0.5" />
          <text x="585" y="55" textAnchor="middle" dominantBaseline="central" className="fill-zinc-900 dark:fill-zinc-100 text-sm font-medium">Server</text>
  
          {/* Request arrow */}
          <text x="340" y="55" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">Sends email + password</text>
          <line x1="180" y1="70" x2="500" y2="70" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="0.5" markerEnd="url(#arrow)" />
  
          {/* Server internal steps */}
          <rect x="520" y="95" width="130" height="40" rx="8" className="fill-blue-50 dark:fill-blue-900/40 stroke-blue-500" strokeWidth="0.5" />
          <text x="585" y="115" textAnchor="middle" dominantBaseline="central" className="fill-blue-700 dark:fill-blue-300 text-xs font-medium">1. Verify credentials</text>
  
          <rect x="520" y="145" width="130" height="40" rx="8" className="fill-violet-50 dark:fill-violet-900/40 stroke-violet-500" strokeWidth="0.5" />
          <text x="585" y="165" textAnchor="middle" dominantBaseline="central" className="fill-violet-700 dark:fill-violet-300 text-xs font-medium">2. Build payload</text>
  
          <rect x="520" y="195" width="130" height="40" rx="8" className="fill-amber-50 dark:fill-amber-900/40 stroke-amber-500" strokeWidth="0.5" />
          <text x="585" y="215" textAnchor="middle" dominantBaseline="central" className="fill-amber-700 dark:fill-amber-300 text-xs font-medium">3. Sign token</text>
  
          {/* Response arrow */}
          <text x="340" y="245" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">Returns signed token</text>
          <line x1="500" y1="260" x2="180" y2="260" className="stroke-emerald-500" strokeWidth="0.5" markerEnd="url(#arrow)" />
  
          {/* <text x="340" y="340" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">
            {"Credentials go in once. A signed token comes back, proof for every request after this."}
          </text> */}
        </svg>
      </div>
    );
  }