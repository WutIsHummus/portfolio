import SectionLabel from './SectionLabel.jsx';
import RobloxSprite from './RobloxSprite.jsx';
import { EXPERIENCE } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-32 mb-14">
      <SectionLabel
        index={2}
        accent={
          <span className="relative block w-20 sm:w-28 h-12">
            <RobloxSprite
              src="/animations/fly1.webp"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-40 sm:h-40 max-w-none object-contain"
            />
          </span>
        }
      >
        Shop log
      </SectionLabel>

      <div>
        {EXPERIENCE.map((role) => (
          <article
            key={role.company + role.role}
            className="grid grid-cols-1 sm:grid-cols-[9.5rem_1fr] gap-2 sm:gap-8 py-8 border-t border-rule"
          >
            <p className="mono-caps text-mute sm:pt-1">{role.dates}</p>
            <div>
              <h3 className="font-display font-semibold text-[1.45rem] sm:text-[1.7rem] leading-tight text-paper">
                {role.company}
              </h3>
              <p className="mt-1 font-sans text-signal">{role.role}</p>
              <p className="mt-4 font-sans text-[1.02rem] leading-[1.65] text-paper/85 max-w-2xl">
                {role.blurb}
              </p>
              <ul className="mt-4 space-y-2 max-w-2xl">
                {role.bullets.map((b) => (
                  <li
                    key={b}
                    className="grid grid-cols-[0.7rem_1fr] gap-3 font-sans text-[0.98rem] leading-[1.6] text-paper/80"
                  >
                    <span className="text-gold select-none" aria-hidden="true">
                      ›
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
