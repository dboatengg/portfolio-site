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
    setTheme(newTheme);
  }

  async function switchTheme(newTheme: string) {
    setOpen(false);

    const root = document.documentElement;
    const btn = btnRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compactViewport = window.matchMedia('(max-width: 640px)').matches;

    root.classList.add('theme-transitioning');

    const endTransition = () => root.classList.remove('theme-transitioning');

    if (reducedMotion || compactViewport || !document.startViewTransition || !btn) {
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
    setMounted(true);
  }, []);

  if (!mounted) return (
    <button className="p-1 rounded-md border border-[rgb(var(--border))] w-7 h-7" />
  );

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        ref={btnRef}
        onClick={() => setOpen(!open)}
        aria-label="Theme settings"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="theme-menu"
        title="Theme settings"
        className="p-1 rounded-md border border-[rgb(var(--border))] hover:bg-muted transition-colors"
      >
        {resolvedTheme === 'light' && <Sun className="w-5 h-5 text-[rgb(var(--body-text))]" />}
        {resolvedTheme === 'dark' && <Moon className="w-5 h-5 text-[rgb(var(--body-text))]" />}
        {resolvedTheme === 'system' && <Monitor className="w-5 h-5 text-[rgb(var(--body-text))]" />}
      </button>

      {open && (
        <div id="theme-menu" role="menu" className="absolute right-0 mt-2 w-40 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] shadow-lg overflow-hidden z-50 animate-fadeIn">
          <button
            type="button"
            onClick={() => switchTheme('light')}
            role="menuitemradio"
            aria-checked={theme === 'light'}
            className={`flex items-center gap-2 w-full px-4 py-2 text-left text-[rgb(var(--body-text))] hover:bg-muted transition
              ${theme === 'light' ? 'bg-muted font-medium' : ''}`}
          >
            <Sun className="w-4 h-4" /> Light
          </button>

          <button
            type="button"
            onClick={() => switchTheme('dark')}
            role="menuitemradio"
            aria-checked={theme === 'dark'}
            className={`flex items-center gap-2 w-full px-4 py-2 text-left text-[rgb(var(--body-text))] hover:bg-muted transition
              ${theme === 'dark' ? 'bg-muted font-medium' : ''}`}
          >
            <Moon className="w-4 h-4" /> Dark
          </button>

          <button
            type="button"
            onClick={() => switchTheme('system')}
            role="menuitemradio"
            aria-checked={theme === 'system'}
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
