import SectionLabel from './SectionLabel.jsx';
import RobloxSprite from './RobloxSprite.jsx';
import { PROFILE } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 mb-24 relative">
      <SectionLabel index={5}>Contact</SectionLabel>

      <div className="reveal flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 max-w-3xl">
        <h2 className="font-display font-bold tracking-tightest leading-[0.95] text-[2.75rem] sm:text-[3.5rem] lg:text-[5rem] text-ink-900 dark:text-cream-50 flex-1">
          Let&apos;s build{' '}
          <span className="text-accent dark:text-accent-light glow-accent">something good.</span>
        </h2>
        {/* Chill avatar sitting next to the headline */}
        <RobloxSprite
          src="/animations/sit.webp"
          className="w-40 h-40 sm:w-48 sm:h-48 object-contain shrink-0 -mb-2"
        />
      </div>

      <p className="reveal mt-8 font-sans text-[1.05rem] sm:text-[1.15rem] lg:text-[1.2rem] leading-[1.65] text-ink-700 dark:text-cream-100 max-w-xl">
        I&apos;m looking for a Summer 2026 internship in software engineering,
        embedded systems, or developer tooling. Always happy to chat about{' '}
        <span className="text-accent dark:text-accent-light font-semibold">interesting problems</span>.
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
