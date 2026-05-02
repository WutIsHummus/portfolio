import { PROFILE } from '../data/portfolio.js';

export default function MobileHeader() {
  return (
    <header className="lg:hidden px-6 sm:px-10 pt-12 pb-10 border-b border-ink-300 dark:border-ink-400">
      <div className="mb-10 pr-16">
        <span className="mono-caps text-ink-800 dark:text-cream-100">
          Open to Work · Summer &apos;26
        </span>
      </div>

      <h1 className="font-display font-bold leading-[0.92] tracking-tightest text-ink-900 dark:text-cream-50">
        <span className="block text-[3rem] sm:text-[4rem] md:text-[4.5rem]">Alperen</span>
        <span className="block text-[3rem] sm:text-[4rem] md:text-[4.5rem] text-accent dark:text-accent-light glow-accent">
          Aydin.
        </span>
      </h1>

      <p className="mt-6 max-w-md font-sans text-[1.05rem] sm:text-[1.1rem] leading-[1.6] text-ink-900 dark:text-cream-100">
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
