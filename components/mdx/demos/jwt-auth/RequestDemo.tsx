'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Server, Check, LoaderCircle } from 'lucide-react';

type Phase =
  | 'idle'
  | 'sending'
  | 'processing'
  | 'responding'
  | 'rendered';

const STATUS: Record<Phase, string> = {
  idle: 'Click the button below to watch what happens when you visit a website.',
  sending: 'Your browser asks the server for the homepage.',
  processing: 'The server finds the page and prepares it.',
  responding: 'The server sends the page back to your browser.',
  rendered: 'Your browser shows the page. That\'s a full request cycle.',
};

const DURATIONS = {
  sending: 3200,
  processing: 3200,
  responding: 3200,
  holdRendered: 2500, // how long to keep "Welcome" on screen after rendered
};

export default function RequestDemo() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [hasPlayed, setHasPlayed] = useState(false);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const run = () => {
    if (phase !== 'idle' && phase !== 'rendered') return;

    timers.current.forEach(clearTimeout);

    const t1 = DURATIONS.sending;
    const t2 = t1 + DURATIONS.processing;
    const t3 = t2 + DURATIONS.responding;
    const t4 = t3 + DURATIONS.holdRendered;

    timers.current = [
      setTimeout(() => setPhase('processing'), t1),
      setTimeout(() => setPhase('responding'), t2),
      setTimeout(() => setPhase('rendered'), t3),
      setTimeout(() => {
        setHasPlayed(true);
        // After a pause, reset the phase so the loop can replay
        setPhase('idle');
      }, t4),
    ];

    setPhase('sending');
  };

  useEffect(() => {
    const start = setTimeout(run, 900);

    return () => {
      clearTimeout(start);
      timers.current.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isIdle = phase === 'idle';
  const isSending = phase === 'sending';
  const isProcessing = phase === 'processing';
  const isResponding = phase === 'responding';
  const isRendered = phase === 'rendered';

  const requestActive = isSending || isProcessing;
  const responseActive = isResponding || isRendered;

  return (
    <div
      className="
        not-prose
        my-10
        -mx-5 sm:-mx-6 md:-mx-12
        rounded-[24px]
        border border-slate-700/70
        bg-[#080f1b]
        p-6 sm:p-8
        overflow-hidden
      "
    >
      {/* Header */}
      <div className="mb-5 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Live demo
        </div>
        <p className="mt-2 text-xs text-slate-500 max-w-md mx-auto">
          Watch a request travel from your browser to a server and back.
        </p>
      </div>

      {/* Main diagram */}
      <div className="relative">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-0">
          {/* Browser */}
          <motion.div
            animate={{
              borderColor: isRendered
                ? 'rgba(34, 211, 238, 0.9)'
                : 'rgba(37, 99, 235, 0.9)',
            }}
            transition={{ duration: 0.4 }}
            className="
              relative z-10
              w-full lg:w-[150px]
              min-h-[130px]
              rounded-[14px]
              border
              bg-[#111c2e]
              px-4 py-4
              flex flex-col items-center justify-center
              text-center
            "
          >
            <div
              className="
                mb-2
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-blue-400/70
                bg-blue-500/10
              "
            >
              <Globe className="h-4 w-4 text-blue-400" />
            </div>

            <div className="text-sm font-semibold text-white">Browser</div>
            <div className="mt-0.5 text-[11px] text-blue-300">
              yoursite.com
            </div>

            <div className="mt-2.5 min-h-[30px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phase}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.35 }}
                >
                  {isRendered ? (
                    <>
                      <div className="text-xs font-medium text-white">
                        Welcome
                      </div>
                      <div className="mt-0.5 text-[10px] text-slate-400">
                        this is the homepage
                      </div>
                    </>
                  ) : (
                    <div className="text-[11px] text-slate-400">
                      {isIdle ? 'Waiting…' : 'Loading…'}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Connection */}
          <div className="relative flex-1 px-3 lg:px-5 flex flex-col justify-center">
            {/* Request row */}
            <div className="relative mb-3 h-[44px]">
              <div
                className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] transition-colors duration-300 ${
                  requestActive ? 'bg-blue-500/70' : 'bg-slate-700'
                }`}
              />

              <AnimatePresence>
                {isSending && (
                  <motion.div
                    initial={{ left: '0%', opacity: 0 }}
                    animate={{ left: '100%', opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, ease: 'easeInOut' }}
                    className="
                      absolute top-1/2 -translate-y-1/2
                      z-20
                      h-3 w-3
                      -ml-1.5
                      rounded-full
                      bg-blue-300
                      shadow-[0_0_20px_rgba(96,165,250,1)]
                    "
                  />
                )}
              </AnimatePresence>

              <motion.div
                animate={{
                  opacity: requestActive ? 1 : 0.35,
                  scale: requestActive ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="
                  absolute right-0 top-1/2
                  -translate-y-1/2
                  h-3 w-3
                  rotate-45
                  border-r-[3px] border-t-[3px]
                  border-blue-400
                  shadow-[0_0_10px_rgba(96,165,250,0.7)]
                "
              />

              <div className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap">
                <span
                  className={`text-[11px] font-semibold tracking-wide transition-colors ${
                    requestActive ? 'text-blue-300' : 'text-slate-500'
                  }`}
                >
                  Request
                </span>
              </div>
            </div>

            {/* Response row */}
            <div className="relative h-[44px]">
              <div
                className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] transition-colors duration-300 ${
                  responseActive ? 'bg-emerald-500/70' : 'bg-slate-700'
                }`}
              />

              <AnimatePresence>
                {isResponding && (
                  <motion.div
                    initial={{ left: '100%', opacity: 0 }}
                    animate={{ left: '0%', opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, ease: 'easeInOut' }}
                    className="
                      absolute top-1/2 -translate-y-1/2
                      z-20
                      h-3 w-3
                      -ml-1.5
                      rounded-full
                      bg-emerald-300
                      shadow-[0_0_20px_rgba(52,211,153,1)]
                    "
                  />
                )}
              </AnimatePresence>

              <motion.div
                animate={{
                  opacity: responseActive ? 1 : 0.35,
                  scale: responseActive ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="
                  absolute left-0 top-1/2
                  -translate-y-1/2
                  h-3 w-3
                  -rotate-45
                  border-b-[3px] border-l-[3px]
                  border-emerald-400
                  shadow-[0_0_10px_rgba(52,211,153,0.7)]
                "
              />

              <div className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap">
                <span
                  className={`text-[11px] font-semibold tracking-wide transition-colors ${
                    responseActive ? 'text-emerald-300' : 'text-slate-500'
                  }`}
                >
                  Response
                </span>
              </div>
            </div>
          </div>

          {/* Server */}
          <motion.div
            animate={{
              borderColor: isProcessing
                ? 'rgba(251, 171, 36, 0.95)'
                : 'rgba(37, 99, 235, 0.9)',
            }}
            transition={{ duration: 0.4 }}
            className="
              relative z-10
              w-full lg:w-[150px]
              min-h-[130px]
              rounded-[14px]
              border
              bg-[#111c2e]
              px-4 py-4
              flex flex-col items-center justify-center
              text-center
            "
          >
            <motion.div
              animate={{
                borderColor: isProcessing
                  ? 'rgba(251, 171, 36, 0.8)'
                  : 'rgba(129, 140, 248, 0.6)',
              }}
              className="
                mb-2
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border
                bg-indigo-500/10
              "
            >
              {isProcessing ? (
                <LoaderCircle className="h-4 w-4 text-amber-400 animate-spin" />
              ) : (
                <Server className="h-4 w-4 text-indigo-400" />
              )}
            </motion.div>

            <div className="text-sm font-semibold text-white">Server</div>
            <div className="mt-0.5 text-[11px] text-indigo-300">
              application server
            </div>

            <div className="mt-2.5 min-h-[30px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phase}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.35 }}
                >
                  {isProcessing ? (
                    <>
                      <div className="text-[11px] font-medium text-amber-300">
                        Preparing page
                      </div>
                      <div className="mt-0.5 text-[10px] text-slate-400">
                        this takes a moment
                      </div>
                    </>
                  ) : isResponding ? (
                    <>
                      <div className="flex items-center justify-center gap-1 text-[11px] font-medium text-emerald-300">
                        <Check className="h-3 w-3" />
                        Page ready
                      </div>
                      <div className="mt-0.5 text-[10px] text-slate-400">
                        sending it back
                      </div>
                    </>
                  ) : (
                    <div className="text-[11px] text-slate-400">
                      {isIdle ? 'Waiting for a request' : 'Ready'}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Status */}
      <div className="relative my-6 min-h-[44px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={phase}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.4 }}
            className="
              absolute inset-0
              flex items-center justify-center
              px-4
              text-center
              text-sm
              text-slate-300
            "
          >
            {STATUS[phase]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <motion.button
          onClick={run}
          disabled={!isIdle}
          animate={
            isIdle && !hasPlayed ? { scale: [1, 1.03, 1] } : { scale: 1 }
          }
          transition={{
            repeat: isIdle && !hasPlayed ? Infinity : 0,
            duration: 1.5,
          }}
          className="
            rounded-lg
            border border-blue-500/60
            bg-blue-500/10
            px-5 py-2.5
            text-sm font-medium
            text-blue-300
            transition
            hover:bg-blue-500/20
            hover:border-blue-400
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {hasPlayed ? 'Replay' : 'Show me what happens →'}
        </motion.button>
      </div>
    </div>
  );
}