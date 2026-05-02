import { PROFILE, NAV } from '../data/portfolio.js';
import RobloxSprite from './RobloxSprite.jsx';

export default function Sidebar({ active }) {
  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[40%] flex-col justify-between px-16 xl:px-24 py-16 border-r border-ink-300 dark:border-ink-400">
      <div>
        <div className="mb-12">
          <span className="mono-caps text-ink-800 dark:text-cream-100">
            Open to Work · Summer &apos;26
          </span>
        </div>

        <h1 className="font-display font-bold text-ink-900 dark:text-cream-50 leading-[0.92] tracking-tightest">
          <span className="block text-[5rem] xl:text-[6rem]">Alperen</span>
          <span className="block text-[5rem] xl:text-[6rem] text-accent dark:text-accent-light glow-accent">
            Aydin.
          </span>
        </h1>

        {/* Waving avatar tucked right under the name */}
        <div className="mt-4 flex items-center gap-2 -ml-3">
          <RobloxSprite
            src="/animations/wave.webm"
            className="w-32 h-32 object-contain shrink-0"
          />
          <span className="mono-caps text-ink-700 dark:text-ink-300">
            hi there
          </span>
        </div>

        <p className="mt-2 max-w-md font-sans text-[1rem] leading-[1.65] text-ink-700 dark:text-cream-100">
          {PROFILE.tagline}
        </p>

        <p className="mt-6 mono-caps text-ink-700 dark:text-ink-300 inline-flex items-center gap-2">
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
      </div>

      <nav aria-label="Sections" className="my-10">
        <ul className="space-y-1">
          {NAV.map((item, i) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`group relative flex items-center gap-5 py-2.5 font-mono uppercase font-semibold transition-[padding,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive ? 'pl-3' : 'pl-0 hover:pl-2'
                  } ${
                    isActive
                      ? 'text-ink-900 dark:text-cream-50'
                      : 'text-ink-700 hover:text-ink-900 dark:text-ink-300 dark:hover:text-cream-50'
                  }`}
                >
                  {/* Animated bullet: empty ring fills on active */}
                  <span aria-hidden="true" className="relative inline-flex items-center justify-center w-3 h-3 shrink-0">
                    <span
                      className={`absolute inset-0 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? 'border-accent dark:border-accent-light scale-110'
                          : 'border-ink-600 dark:border-ink-500 scale-90 group-hover:border-ink-900 dark:group-hover:border-cream-100 group-hover:scale-100'
                      }`}
                    />
                    <span
                      className={`absolute inset-[3px] rounded-full bg-accent dark:bg-accent-light transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                    />
                  </span>

                  <span
                    className={`text-[0.72rem] tabular-nums transition-colors duration-300 ${
                      isActive
                        ? 'text-accent dark:text-accent-light'
                        : 'text-ink-600 dark:text-ink-500'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span
                    className={`text-[0.88rem] transition-[letter-spacing,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? 'tracking-[0.22em]' : 'tracking-[0.16em]'
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex flex-wrap gap-x-8 gap-y-3 mono-caps text-ink-900 dark:text-cream-100">
        <a href={`mailto:${PROFILE.email}`} className="link-underline">Email</a>
        <a href={PROFILE.linkedin} className="link-underline" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={PROFILE.github} className="link-underline" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </aside>
  );
}
