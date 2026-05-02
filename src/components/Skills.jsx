import { Fragment } from 'react';
import SectionLabel from './SectionLabel.jsx';
import { SKILLS, EDUCATION } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 mb-32">
      <SectionLabel index={4}>Toolkit</SectionLabel>

      <div className="space-y-12">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="reveal">
            <h3 className="font-display font-semibold text-accent dark:text-accent-light text-[1.5rem] mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 gap-y-1 font-sans text-[1.05rem] sm:text-[1.15rem] leading-[1.7] text-ink-900 dark:text-cream-50 max-w-2xl">
              {items.map((item, i) => (
                <Fragment key={item}>
                  <span className="whitespace-nowrap">{item}</span>
                  {i < items.length - 1 && (
                    <span
                      className="text-ink-600 dark:text-ink-500 select-none"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-20 border-t border-ink-300 dark:border-ink-400 pt-10">
        <h3 className="mono-caps text-ink-700 dark:text-ink-300 mb-4">Education</h3>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <p className="font-sans font-medium text-[1.5rem] text-ink-900 dark:text-cream-50">
              {EDUCATION.school}
            </p>
            <p className="font-display font-semibold text-accent dark:text-accent-light text-[1.2rem] mt-1">
              {EDUCATION.degree}
            </p>
          </div>
          <span className="mono-caps text-ink-700 dark:text-ink-300 sm:text-right shrink-0">
            {EDUCATION.dates}
          </span>
        </div>
      </div>
    </section>
  );
}
