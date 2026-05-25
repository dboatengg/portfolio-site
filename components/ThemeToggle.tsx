'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

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

  function switchTheme(newTheme: string) {
    setOpen(false);

    const rippleContainer = document.getElementById('theme-ripple');
    const btn = btnRef.current;
    if (!rippleContainer || !btn) {
      applyTheme(newTheme);
      return;
    }

    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const size = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    ) * 2;

    const isDark = newTheme === 'dark' ||
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const circle = document.createElement('div');
    circle.style.cssText = `
      position: absolute;
      border-radius: 50%;
      width: ${size}px;
      height: ${size}px;
      left: ${x - size / 2}px;
      top: ${y - size / 2}px;
      background: ${isDark ? '#171717' : '#f7f7f7'};
      transform: scale(0);
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    `;

    rippleContainer.appendChild(circle);

    requestAnimationFrame(() => {
      circle.style.transform = 'scale(1)';
    });

    setTimeout(() => {
      applyTheme(newTheme);
    }, 300);

    setTimeout(() => {
      rippleContainer.removeChild(circle);
    }, 650);
  }

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