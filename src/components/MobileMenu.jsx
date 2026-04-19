import { useEffect, useState } from 'react';
import { NAV } from '../data/portfolio.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function MobileMenu({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* Hamburger / close button — fixed so it's always reachable */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="lg:hidden fixed top-5 right-5 z-[80] w-11 h-11 flex items-center justify-center rounded-full border border-ink-400 dark:border-ink-700 bg-cream-100/90 dark:bg-ink-900/90 backdrop-blur-sm shadow-sm transition-colors"
      >
        <span className="relative w-5 h-4 block" aria-hidden="true">
          <span
            className={`absolute left-0 w-full h-[1.5px] bg-ink-900 dark:bg-cream-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] bg-ink-900 dark:bg-cream-50 transition-opacity duration-200 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 w-full h-[1.5px] bg-ink-900 dark:bg-cream-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-full -translate-y-full'
            }`}
          />
        </span>
      </button>

      {/* Fullscreen menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[70] bg-cream-100 dark:bg-ink-900 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div className="grain" aria-hidden="true" />

        <nav
          aria-label="Mobile navigation"
          className="relative h-full flex flex-col justify-center px-8 sm:px-12"
        >
          <span className="mono-caps text-ink-700 dark:text-ink-300 mb-10">
            Index
          </span>

          <ul className="space-y-5">
            {NAV.map((item, i) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-5"
                  >
                    <span className="mono-caps text-ink-600 dark:text-ink-500 tabular-nums shrink-0 w-8">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-display tracking-tightest leading-[0.95] text-[3.25rem] sm:text-[3.75rem] transition-colors ${
                        isActive
                          ? 'italic text-accent dark:text-accent-light'
                          : 'text-ink-900 dark:text-cream-50 group-hover:text-accent dark:group-hover:text-accent-light'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-14 pt-8 border-t border-ink-300 dark:border-ink-700 flex flex-wrap items-center gap-x-8 gap-y-4 mono-caps text-ink-800 dark:text-cream-100">
            <a href="mailto:alperenaydin1@gmail.com" className="link-underline">Email</a>
            <a href="https://www.linkedin.com/in/alperenaydin1/" className="link-underline" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/WutIsHummus" className="link-underline" target="_blank" rel="noreferrer">GitHub</a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} className="ml-auto" />
          </div>
        </nav>
      </div>
    </>
  );
}
