import { PROFILE, NAV } from '../data/portfolio.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function MobileHeader({ active, theme, onToggleTheme }) {
  return (
    <header className="lg:hidden px-6 sm:px-10 pt-12 pb-10 border-b border-ink-300 dark:border-ink-700">
      <div className="flex items-center justify-between gap-3 mb-10 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="dot-pulse" aria-hidden="true" />
          <span className="mono-caps text-ink-800 dark:text-cream-100">
            Summer &apos;26
          </span>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>

      <h1 className="font-display leading-[0.9] tracking-tightest text-ink-900 dark:text-cream-50">
        <span className="block text-[3rem] sm:text-[4rem] md:text-[4.5rem]">Alperen</span>
        <span className="block text-[3rem] sm:text-[4rem] md:text-[4.5rem] italic text-accent dark:text-accent-light">
          Aydin.
        </span>
      </h1>

      <p className="mt-6 max-w-md font-serif text-[1.05rem] sm:text-[1.1rem] leading-[1.6] text-ink-900 dark:text-cream-100">
        {PROFILE.tagline}
      </p>

      <p className="mt-4 mono-caps text-ink-700 dark:text-ink-300">◉ {PROFILE.location}</p>

      <nav aria-label="Sections" className="mt-8 -mx-6 sm:-mx-10 px-6 sm:px-10 overflow-x-auto">
        <ul className="flex gap-6 whitespace-nowrap">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`mono-caps ${
                    isActive
                      ? 'text-ink-900 dark:text-cream-50'
                      : 'text-ink-700 dark:text-ink-300'
                  }`}
                >
                  {isActive && (
                    <span className="text-accent dark:text-accent-light mr-1">●</span>
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
