import SectionLabel from './SectionLabel.jsx';
import { PROFILE } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 mb-24">
      <SectionLabel index={5}>Contact</SectionLabel>

      <h2 className="reveal font-display tracking-tightest leading-[0.95] text-[2.75rem] sm:text-[3.5rem] lg:text-[5rem] text-ink-900 dark:text-cream-50 max-w-3xl">
        Let&apos;s build{' '}
        <span className="italic text-accent dark:text-accent-light">something good.</span>
      </h2>

      <p className="reveal mt-8 font-serif text-[1.05rem] sm:text-[1.15rem] lg:text-[1.2rem] leading-[1.65] text-ink-900 dark:text-cream-100 max-w-xl">
        I&apos;m looking for a Summer 2026 internship in software engineering,
        embedded systems, or developer tooling. Always happy to chat about{' '}
        <span className="italic text-accent dark:text-accent-light">interesting problems</span>.
      </p>

      <div className="reveal mt-10 break-all sm:break-normal">
        <a
          href={`mailto:${PROFILE.email}`}
          className="font-display text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] text-ink-900 dark:text-cream-50 link-underline-static"
        >
          {PROFILE.email}
        </a>
      </div>

      <ul className="reveal mt-10 flex flex-wrap gap-x-8 gap-y-3 mono-caps text-ink-900 dark:text-cream-100">
        <li>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="link-underline">
            LinkedIn ↗
          </a>
        </li>
        <li>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="link-underline">
            GitHub ↗
          </a>
        </li>
        <li>
          <a href={`tel:${PROFILE.phone}`} className="link-underline">
            {PROFILE.phone}
          </a>
        </li>
      </ul>
    </section>
  );
}
