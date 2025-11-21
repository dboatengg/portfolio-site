

// import { useTheme } from 'next-themes';

// export default function ThemeToggle() {
//   const { theme, setTheme, systemTheme } = useTheme();

//   const resolvedTheme = theme === 'system' ? systemTheme : theme;

//   return (
//     <>
//       <button onClick={() => setTheme('light')}>Light</button>
//       <button onClick={() => setTheme('dark')}>Dark</button>
//       <button onClick={() => setTheme('system')}>System</button>
//     </>
//   );
// }

'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const resolvedTheme = theme === 'system' ? systemTheme : theme;

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Toggle button */}
      <button
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
        onClick={() => setTheme('light')}
        className={`flex items-center gap-2 w-full px-4 py-2 text-left text-[rgb(var(--body-text))] hover:bg-muted transition 
            ${theme === 'light' ? 'bg-muted font-medium' : ''}`}
        >
        <Sun className="w-4 h-4" /> Light
        </button>

        {/* <div className="h-px bg-[rgb(var(--border))]" /> */}

        <button
        onClick={() => setTheme('dark')}
        className={`flex items-center gap-2 w-full px-4 py-2 text-left text-[rgb(var(--body-text))] hover:bg-muted transition 
            ${theme === 'dark' ? 'bg-muted font-medium' : ''}`}
        >
        <Moon className="w-4 h-4" /> Dark
        </button>

        {/* <div className="h-px bg-[rgb(var(--border))]" /> */}

        <button
        onClick={() => setTheme('system')}
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
