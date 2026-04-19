import { useEffect, useState } from 'react';
import { NAV } from '../data/portfolio.js';

export default function ScrollIndicator({ active }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const idx = Math.max(0, NAV.findIndex((n) => n.id === active));
  const total = NAV.length;
  const activeLabel = NAV[idx]?.label || '';

  return (
    <>
      {/* Top reading-progress bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-accent dark:bg-accent-light pointer-events-none"
        style={{
          transform: `scaleX(${progress})`,
          transition: 'transform 120ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Bottom-right section chip */}
      <div
        aria-hidden="true"
        className="hidden lg:flex fixed bottom-8 right-10 z-[55] items-center gap-3 mono-caps text-ink-700 dark:text-ink-300 pointer-events-none select-none"
      >
        <span className="tabular-nums text-ink-600 dark:text-ink-400">
          {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span className="text-ink-400 dark:text-ink-700">·</span>
        <span
          key={activeLabel}
          className="text-ink-900 dark:text-cream-50 chip-fade"
        >
          {activeLabel}
        </span>
      </div>
    </>
  );
}
