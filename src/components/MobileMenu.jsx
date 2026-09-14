import { useEffect, useState } from 'react';
import { NAV, PROFILE } from '../data/portfolio.js';

export default function MobileMenu({ active }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

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
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="md:hidden fixed top-2.5 right-3 z-[80] h-10 px-3 flex items-center justify-center rounded-full border border-paper/25 bg-asphalt/80 backdrop-blur-sm"
      >
        <span className="mono-caps text-paper">{open ? 'Close' : 'Menu'}</span>
      </button>

      <div
        className={`md:hidden fixed inset-0 z-[70] bg-asphalt transition-[opacity,transform] duration-400 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation" className="h-full flex flex-col justify-center px-8">
          <span className="mono-caps text-mute mb-8">Index</span>
          <ul className="space-y-4">
            {NAV.map((item, i) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4"
                  >
                    <span className="mono-caps text-signal tabular-nums w-8">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-display tracking-tightest text-[2.8rem] leading-none ${
                        isActive ? 'text-signal' : 'text-paper'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-12 pt-6 border-t border-rule flex flex-wrap gap-x-8 gap-y-3 mono-caps text-paper/80">
            <a href={`mailto:${PROFILE.email}`} className="link-underline">
              Email
            </a>
            <a href={PROFILE.linkedin} className="link-underline" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={PROFILE.github} className="link-underline" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
