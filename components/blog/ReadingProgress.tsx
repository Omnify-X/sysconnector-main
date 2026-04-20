'use client';

import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      role="progressbar"
      aria-hidden
      className="fixed left-0 top-0 z-50 h-[2px] bg-accent transition-[width] duration-100 ease-out"
      style={{ width: `${width}%` }}
    />
  );
}
