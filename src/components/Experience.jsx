import SectionLabel from './SectionLabel.jsx';
import { EXPERIENCE } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 mb-32">
      <SectionLabel index={2}>Experience</SectionLabel>

      <div>
        {EXPERIENCE.map((role, i) => (
          <article
            key={role.company + role.role}
            className={`reveal py-10 ${i !== 0 ? 'border-t border-ink-300 dark:border-ink-400' : ''}`}
          >
            <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="font-sans font-medium text-[1.4rem] sm:text-[1.7rem] leading-tight text-ink-900 dark:text-cream-50">
                  {role.role}
                </h3>
                <p className="font-display font-semibold text-accent dark:text-accent-light text-[1.2rem] sm:text-[1.4rem] leading-tight mt-1">
                  {role.company}
                </p>
              </div>
              <span className="mono-caps text-ink-700 dark:text-ink-300 sm:text-right shrink-0">
                {role.dates}
              </span>
            </header>

            <p className="font-sans text-[1rem] sm:text-[1.08rem] leading-[1.65] text-ink-900 dark:text-cream-100 max-w-2xl">
              {role.blurb}
            </p>

            <ul className="mt-5 space-y-2.5 max-w-2xl">
              {role.bullets.map((b, j) => (
                <li
                  key={j}
                  className="flex gap-3 font-sans text-[0.98rem] sm:text-[1.02rem] leading-[1.65] text-ink-900 dark:text-cream-100"
                >
                  <span
                    className="text-accent dark:text-accent-light mt-1 select-none"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
