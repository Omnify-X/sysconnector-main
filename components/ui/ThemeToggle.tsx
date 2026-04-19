'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'sysconnector-theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Read the actual applied theme on mount (the inline script in <head>
  // has already set the class before React hydrates).
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    const root = document.documentElement;
    if (next === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage not available (private mode, etc.) — silently skip.
    }
  };

  // Placeholder during hydration to avoid layout shift
  if (theme === null) {
    return (
      <div
        aria-hidden
        className="h-9 w-9 rounded-full border border-border bg-bg-elevated"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-elevated text-fg-muted transition-colors hover:text-fg hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
