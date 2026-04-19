import SectionLabel from './SectionLabel.jsx';
import { STATS, PROFILE } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 mb-32">
      <SectionLabel index={1}>About</SectionLabel>

      <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 lg:items-start">
        <figure className="reveal shrink-0 lg:sticky lg:top-32 w-[160px] sm:w-[200px] lg:w-[220px] mx-auto lg:mx-0">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-cream-200 dark:bg-ink-800 border border-ink-300 dark:border-ink-700">
            <img
              src="/projects/me.png"
              alt={`Portrait of ${PROFILE.name}`}
              loading="lazy"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-[filter] duration-700"
            />
          </div>
          <figcaption className="mt-3 mono-caps text-ink-700 dark:text-ink-300 text-center lg:text-left">
            {PROFILE.location}
          </figcaption>
        </figure>

        <div className="space-y-6 sm:space-y-7 flex-1 min-w-0 font-serif text-[1.15rem] sm:text-[1.25rem] lg:text-[1.35rem] leading-[1.6] text-ink-900 dark:text-cream-50">
          <p className="reveal">
            I&apos;m a CS student at{' '}
            <span className="italic text-accent dark:text-accent-light">UT Austin</span>{' '}
            building software across the stack: CAN-bus telemetry on a Raspberry
            Pi, React admin tools for a global coding competition, a
            server-authoritative game engine running for over a million players.
          </p>
          <p className="reveal">
            I like work at the seam between systems: where firmware meets a web
            dashboard, where a multiplayer client must trust a server, where a
            CI pipeline has to make a release feel{' '}
            <span className="italic text-accent dark:text-accent-light">inevitable</span>.
            The fun is making the seam disappear.
          </p>
          <p className="reveal">
            When I&apos;m not in class, I&apos;m in the{' '}
            <span className="italic text-accent dark:text-accent-light">Longhorn Racing Solar</span>{' '}
            shop most weekdays and weekends, wiring up CAN buses and debugging
            telemetry on the bench. The rest of the time I&apos;m on Roblox,
            prototyping and stress-testing new game mechanics.
          </p>
        </div>
      </div>

      <div className="reveal mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 border-t border-ink-300 dark:border-ink-700 pt-10">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-display text-5xl sm:text-6xl text-ink-900 dark:text-cream-50 leading-none">
              {s.value}
            </div>
            <div className="mt-3 mono-caps text-ink-800 dark:text-ink-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
