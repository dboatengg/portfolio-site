'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

const THEME_TRANSITION_MS = 500;

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const resolvedTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function applyTheme(newTheme: string) {
    const root = document.documentElement;
    if (newTheme === 'light') {
      try { localStorage.setItem('theme', 'light'); root.classList.add('theme-set'); } catch(e) {}
    } else if (newTheme === 'dark') {
      try { localStorage.setItem('theme', 'dark'); root.classList.add('theme-set'); } catch(e) {}
    } else {
      try { localStorage.removeItem('theme'); root.classList.remove('theme-set'); } catch(e) {}
    }
    setTheme(newTheme);
  }

  async function switchTheme(newTheme: string) {
    setOpen(false);

    const root = document.documentElement;
    const btn = btnRef.current;

    root.classList.add('theme-transitioning');

    const endTransition = () => root.classList.remove('theme-transitioning');

    if (!document.startViewTransition || !btn) {
      applyTheme(newTheme);
      requestAnimationFrame(() => requestAnimationFrame(endTransition));
      return;
    }

    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    try {
      const transition = document.startViewTransition(() => {
        applyTheme(newTheme);
      });

      await transition.ready;

      const animation = root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: THEME_TRANSITION_MS,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );

      await Promise.all([
        transition.finished,
        animation.finished.catch(() => undefined),
      ]);
    } catch {
      applyTheme(newTheme);
    } finally {
      endTransition();
    }
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      setMounted(true);
      const stored = localStorage.getItem('theme');
      if (stored) {
        document.documentElement.classList.add('theme-set');
      }
    }, 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return (
    <button className="p-1 rounded-md border border-[rgb(var(--border))] w-7 h-7" />
  );

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        className="p-1 rounded-md border border-[rgb(var(--border))] hover:bg-muted transition-colors"
      >
        {resolvedTheme === 'light' && <Sun className="w-5 h-5 text-[rgb(var(--body-text))]" />}
        {resolvedTheme === 'dark' && <Moon className="w-5 h-5 text-[rgb(var(--body-text))]" />}
        {resolvedTheme === 'system' && <Monitor className="w-5 h-5 text-[rgb(var(--body-text))]" />}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] shadow-lg overflow-hidden z-50 animate-fadeIn">
          <button
            onClick={() => switchTheme('light')}
            className={`flex items-center gap-2 w-full px-4 py-2 text-left text-[rgb(var(--body-text))] hover:bg-muted transition
              ${theme === 'light' ? 'bg-muted font-medium' : ''}`}
          >
            <Sun className="w-4 h-4" /> Light
          </button>

          <button
            onClick={() => switchTheme('dark')}
            className={`flex items-center gap-2 w-full px-4 py-2 text-left text-[rgb(var(--body-text))] hover:bg-muted transition
              ${theme === 'dark' ? 'bg-muted font-medium' : ''}`}
          >
            <Moon className="w-4 h-4" /> Dark
          </button>

          <button
            onClick={() => switchTheme('system')}
            className={`flex items-center gap-2 w-full px-4 py-2 text-left text-[rgb(var(--body-text))] hover:bg-muted transition
              ${theme === 'system' ? 'bg-muted font-medium' : ''}`}
          >
            <Monitor className="w-4 h-4" /> System
          </button>
        </div>
      )}
    </div>
  );
}
