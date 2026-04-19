import { PROFILE } from '../data/portfolio.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function MobileHeader({ theme, onToggleTheme }) {
  return (
    <header className="lg:hidden px-6 sm:px-10 pt-12 pb-10 border-b border-ink-300 dark:border-ink-700">
      {/* pr-16 reserves space on the right so the toggle clears the
          fixed hamburger button (top-5 right-5, 44px wide) */}
      <div className="flex items-center justify-between gap-3 mb-10 pr-16">
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

      <p className="mt-4 mono-caps text-ink-700 dark:text-ink-300 inline-flex items-center gap-2">
        <svg
          width="10"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {PROFILE.location}
      </p>
    </header>
  );
}
