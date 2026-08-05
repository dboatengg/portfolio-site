export default function TokenTimelineDiagram() {
    return (
      <div className="not-prose my-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
        <svg viewBox="0 0 680 260" className="w-full h-auto">
          <defs>
            <marker id="arrow-token-timeline" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
  
          {/* Timeline base line */}
          <line x1="40" y1="140" x2="640" y2="140" className="stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="1" />
  
          {/* Access token 1 span */}
          <rect x="40" y="120" width="160" height="40" rx="8" className="fill-emerald-50 dark:fill-emerald-900/40 stroke-emerald-500" strokeWidth="0.5" />
          <text x="120" y="135" textAnchor="middle" dominantBaseline="central" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-medium">Access token</text>
          <text x="120" y="150" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400 text-[10px]">active, e.g. 1 hour</text>
  
          {/* Expiry marker */}
          <line x1="200" y1="105" x2="200" y2="175" className="stroke-red-400" strokeWidth="1" strokeDasharray="3,3" />
          <text x="200" y="95" textAnchor="middle" className="fill-red-500 dark:fill-red-400 text-[10px] font-medium">expires</text>
  
          {/* Refresh happens */}
          <rect x="220" y="120" width="160" height="40" rx="8" className="fill-violet-50 dark:fill-violet-900/40 stroke-violet-500" strokeWidth="0.5" />
          <text x="300" y="135" textAnchor="middle" dominantBaseline="central" className="fill-violet-700 dark:fill-violet-300 text-xs font-medium">Refresh token used</text>
          <text x="300" y="150" textAnchor="middle" dominantBaseline="central" className="fill-violet-600 dark:fill-violet-400 text-[10px]">quietly, behind the scenes</text>
  
          {/* Access token 2 span */}
          <rect x="400" y="120" width="160" height="40" rx="8" className="fill-emerald-50 dark:fill-emerald-900/40 stroke-emerald-500" strokeWidth="0.5" />
          <text x="480" y="135" textAnchor="middle" dominantBaseline="central" className="fill-emerald-700 dark:fill-emerald-300 text-xs font-medium">New access token</text>
          <text x="480" y="150" textAnchor="middle" dominantBaseline="central" className="fill-emerald-600 dark:fill-emerald-400 text-[10px]">active again</text>
  
          {/* Arrow from refresh to new token */}
          <line x1="380" y1="140" x2="398" y2="140" className="stroke-zinc-400 dark:stroke-zinc-500" strokeWidth="0.5" markerEnd="url(#arrow-token-timeline)" />
  
          {/* Refresh token long span underneath */}
          <rect x="40" y="195" width="520" height="30" rx="8" className="fill-zinc-100 dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="0.5" />
          <text x="300" y="210" textAnchor="middle" dominantBaseline="central" className="fill-zinc-600 dark:fill-zinc-400 text-[10px]">Refresh token stays valid much longer, days or weeks</text>
  
          <text x="340" y="250" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400 text-xs">
            {/* {"You never notice the swap. Only a real login issues a new refresh token."} */}
          </text>
        </svg>
      </div>
    );
  }