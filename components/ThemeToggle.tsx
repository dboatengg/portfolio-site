'use client';

import { useTheme } from 'next-themes';
import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import { Sun, Moon, Monitor, Check } from 'lucide-react';

const themeOptions = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'system', label: 'System', Icon: Monitor },
] as const;

const subscribeToNothing = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeToNothing, () => true, () => false);
  const id = useId();
  const [open, setOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLFieldSetElement>(null);

  const resolvedTheme = theme === 'system' ? systemTheme : theme;
  const currentThemeLabel = theme === 'system'
    ? `System · ${resolvedTheme === 'dark' ? 'Dark' : 'Light'}`
    : theme === 'dark'
      ? 'Dark'
      : 'Light';

  useEffect(() => {
    function handleClickOutside(e: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) {
      panelRef.current?.querySelector<HTMLInputElement>('input:checked')?.focus();
    }
  }, [open]);

  async function switchTheme(newTheme: string) {
    if (isTransitioning || newTheme === theme) {
      setOpen(false);
      btnRef.current?.focus();
      return;
    }

    setOpen(false);
    btnRef.current?.focus();

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    setIsTransitioning(true);
    try {
      const transition = document.startViewTransition(() => {
        setTheme(newTheme);
      });
      await transition.finished;
    } catch {
      setTheme(newTheme);
    } finally {
      setIsTransitioning(false);
    }
  }

  function handlePanelKeyDown(event: React.KeyboardEvent<HTMLFieldSetElement>) {
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      btnRef.current?.focus();
    }
  }

  function handlePanelBlur(event: React.FocusEvent<HTMLDivElement>) {
    const nextTarget = event.relatedTarget;
    if (nextTarget instanceof Node && !event.currentTarget.contains(nextTarget)) {
      setOpen(false);
    }
  }

  function togglePopover() {
    if (isTransitioning) return;
    setOpen((wasOpen) => !wasOpen);
  }

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        aria-label="Theme settings"
        className="h-10 w-10 rounded-xl border border-[rgb(var(--border))]"
      />
    );
  }

  return (
    <div className="relative" ref={menuRef} onBlur={handlePanelBlur}>
      <button
        type="button"
        ref={btnRef}
        onClick={togglePopover}
        aria-label={`Theme settings, currently ${currentThemeLabel}`}
        aria-expanded={open}
        aria-controls={`theme-options-${id}`}
        aria-busy={isTransitioning}
        title={`Theme: ${currentThemeLabel}`}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] text-[rgb(var(--body-text))] shadow-sm transition-[background-color,border-color,color,box-shadow] hover:border-[rgb(var(--ctrl-border))] hover:bg-[rgb(var(--muted))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent))]"
      >
        {resolvedTheme === 'light' ? (
          <Sun className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Moon className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-[60] mt-2 w-52 origin-top-right rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-2 shadow-xl shadow-black/10 ring-1 ring-black/5 animate-fadeIn dark:shadow-black/30">
          <div className="mb-2 border-b border-[rgb(var(--border))] px-3 pb-2.5 pt-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted-text))]">
              Appearance
            </p>
            <p className="mt-1 text-sm font-medium text-[rgb(var(--text))]">
              {currentThemeLabel}
            </p>
          </div>

          <fieldset
            ref={panelRef}
            id={`theme-options-${id}`}
            onKeyDown={handlePanelKeyDown}
            disabled={isTransitioning}
            className="space-y-1"
          >
            <legend className="sr-only">Choose color theme</legend>
            {themeOptions.map(({ value, label, Icon }) => {
              const checked = theme === value;
              return (
                <label
                  key={value}
                  className={`flex min-h-10 cursor-pointer items-center gap-3 rounded-xl px-3 text-sm transition-colors hover:bg-[rgb(var(--muted))] focus-within:outline-2 focus-within:outline-offset-1 focus-within:outline-[rgb(var(--accent))] ${
                    checked
                      ? 'bg-[rgb(var(--muted))] font-medium text-[rgb(var(--text))]'
                      : 'text-[rgb(var(--body-text))]'
                  } ${isTransitioning ? 'cursor-wait opacity-60' : ''}`}
                >
                  <input
                    type="radio"
                    name={`site-theme-${id}`}
                    value={value}
                    checked={checked}
                    onChange={() => switchTheme(value)}
                    className="peer sr-only"
                  />
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="flex-1">{label}</span>
                  {checked && (
                    <Check
                      className="h-4 w-4 shrink-0 text-[rgb(var(--accent))]"
                      aria-hidden="true"
                    />
                  )}
                </label>
              );
            })}
          </fieldset>
        </div>
      )}
    </div>
  );
}
