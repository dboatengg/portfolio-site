'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Server } from 'lucide-react';

type Phase = 'idle' | 'sending' | 'processing' | 'responding' | 'rendered';

const STATUS: Record<Phase, string> = {
  idle: 'Click the button to load the page',
  sending: 'Browser sends a request for the homepage',
  processing: 'Server finds the page and builds a response',
  responding: 'Server sends the response back',
  rendered: 'Browser renders the page',
};

export default function RequestDemo() {
  const [phase, setPhase] = useState<Phase>('idle');
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const run = () => {
    if (phase !== 'idle' && phase !== 'rendered') return;
    timers.current.forEach(clearTimeout);
    timers.current = [
      setTimeout(() => setPhase('processing'), 950),
      setTimeout(() => setPhase('responding'), 1650),
      setTimeout(() => setPhase('rendered'), 2550),
    ];
    setPhase('sending');
  };

  const atServer = phase === 'sending' || phase === 'processing';
  const reqLabel = phase === 'sending' ? 'GET /' : phase === 'responding' ? '200 OK' : '';
  const dotColor =
    atServer ? 'bg-blue-500' : phase === 'responding' ? 'bg-green-600' : 'bg-gray-400';

  return (
    <div className="not-prose my-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
  <div className="text-xs font-medium tracking-wide uppercase text-zinc-400 dark:text-zinc-500 mb-6">
    Live demo
  </div>

  <div className="flex items-start justify-between gap-3">
    <div className="w-[200px] rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden bg-white dark:bg-zinc-950">
      <div className="flex items-center gap-1.5 px-2.5 py-2 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span className="flex-1 ml-1.5 text-[11px] text-zinc-400 bg-white dark:bg-zinc-950 rounded px-1.5 py-0.5 border border-zinc-200 dark:border-zinc-700 truncate">
          yoursite.com
        </span>
      </div>
      <div className="h-24 flex items-center justify-center text-sm text-zinc-400 px-2 text-center">
        {phase === 'idle' && 'Waiting...'}
        {(atServer || phase === 'responding') && 'Loading...'}
        {phase === 'rendered' && (
          <div>
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Welcome</div>
            <div className="text-xs text-zinc-500 mt-1">this is the homepage</div>
          </div>
        )}
      </div>
    </div>

    <div className="flex-1 pt-8 relative">
      <div className="text-center text-xs text-zinc-400 font-mono min-h-[16px] mb-1.5">
        {reqLabel}
      </div>
      <div className="relative h-3">
        <div className="absolute top-[5px] left-0 right-0 h-px bg-zinc-200 dark:bg-zinc-700" />
        <motion.div
          className={`absolute top-0 w-3 h-3 rounded-full ${dotColor}`}
          animate={{ left: atServer ? '100%' : '0%' }}
          transition={{ duration: 0.9, ease: 'linear' }}
          style={{ x: '-50%' }}
        />
      </div>
    </div>

    <div className="w-[110px] text-center pt-2">
      <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center">
        <Server className="w-7 h-7 text-zinc-500" />
      </div>
      <span className="text-sm text-zinc-600 dark:text-zinc-400">Server</span>
    </div>
  </div>

  <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 min-h-[20px] my-4">
    {STATUS[phase]}
  </p>

  <div className="text-center">
    <button
      onClick={run}
      disabled={phase !== 'idle' && phase !== 'rendered'}
      className="px-4 py-2 text-sm rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      Visit yoursite.com →
    </button>
  </div>
</div>
  );
}