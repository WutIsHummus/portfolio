function SunIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeToggle({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark';
  const targetLabel = isDark ? 'Light' : 'Dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={`Switch to ${targetLabel.toLowerCase()} theme`}
      title={`Switch to ${targetLabel.toLowerCase()} theme`}
      className={`mono-caps inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-400 dark:border-ink-700 text-ink-800 dark:text-cream-100 hover:border-accent dark:hover:border-accent-light hover:text-accent dark:hover:text-accent-light transition-colors ${className}`}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span>{targetLabel}</span>
    </button>
  );
}
