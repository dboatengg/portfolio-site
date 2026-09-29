export default function StatelessJWTDiagram() {
  return (
    <div className="not-prose my-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
      <svg viewBox="0 0 680 470" className="w-full h-auto">
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="12"
            markerHeight="12"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="#a1a1aa" />
          </marker>
        </defs>

        {/* You box */}
        <rect
          x="40"
          y="40"
          width="160"
          height="360"
          rx="12"
          fill="#ffffff"
          stroke="#d4d4d8"
          strokeWidth="1"
        />
        <text
          x="120"
          y="80"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#18181b"
          fontSize="14"
          fontWeight="500"
        >
          You
        </text>
        <text
          x="120"
          y="100"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#71717a"
          fontSize="12"
        >
          browser
        </text>

        {/* Server box */}
        <rect
          x="480"
          y="40"
          width="160"
          height="360"
          rx="12"
          fill="#ffffff"
          stroke="#d4d4d8"
          strokeWidth="1"
        />
        <text
          x="560"
          y="80"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#18181b"
          fontSize="14"
          fontWeight="500"
        >
          Server
        </text>

        {/* Request 1 */}
        <text
          x="340"
          y="127"
          textAnchor="middle"
          fill="#71717a"
          fontSize="12"
        >
          request 1
        </text>
        <line
          x1="202"
          y1="145"
          x2="470"
          y2="145"
          stroke="#a1a1aa"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />

        {/* Response 1 */}
        <text
          x="340"
          y="187"
          textAnchor="middle"
          fill="#71717a"
          fontSize="12"
        >
          response 1
        </text>
        <line
          x1="478"
          y1="205"
          x2="210"
          y2="205"
          stroke="#a1a1aa"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />

        {/* Request 2 */}
        <text
          x="340"
          y="247"
          textAnchor="middle"
          fill="#71717a"
          fontSize="12"
        >
          request 2
        </text>
        <line
          x1="202"
          y1="265"
          x2="470"
          y2="265"
          stroke="#a1a1aa"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />

        {/* ? icon */}
        <circle
          cx="560"
          cy="320"
          r="20"
          fill="#fef3c7"
          stroke="#f59e0b"
          strokeWidth="1"
        />
        <text
          x="560"
          y="320"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#b45309"
          fontSize="14"
          fontWeight="500"
        >
          ?
        </text>
        <text
          x="560"
          y="356"
          textAnchor="middle"
          fill="#71717a"
          fontSize="12"
        >
          no memory of request 1
        </text>

        {/* Footer */}
        <text
          x="340"
          y="440"
          textAnchor="middle"
          fill="#71717a"
          fontSize="12"
        >
          Same browser, same server, but request 2 is treated as a total stranger
        </text>
      </svg>
    </div>
  );
}