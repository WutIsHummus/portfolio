import SectionLabel from './SectionLabel.jsx';
import { STATS, PROFILE } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="scroll-mt-32 mb-28">
      <SectionLabel index={1}>About</SectionLabel>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center">
        <div className="w-full max-w-[320px] mx-auto lg:mx-0 shrink-0">
          <figure className="portrait-card">
            <img src="/projects/me.png" alt="Alperen Aydin at the UT Austin tower" width="640" height="800" loading="lazy" />
            <figcaption><span className="font-display text-xl font-semibold">{PROFILE.name}</span><span className="mono-caps text-mute">{PROFILE.title} / Austin, TX</span></figcaption>
          </figure>
        </div>

        <div className="flex-1 min-w-0">
          <div className="space-y-6 font-sans text-[1.12rem] sm:text-[1.22rem] leading-[1.65] text-paper">
            <p >
              Most weekdays I am in the Longhorn Racing shop. The car talks CAN.
              I write the C++ that hears it, the Pi that forwards it, and the
              Vulkan map the pit stares at.
            </p>
            <p >
              The rest of the time I run a Roblox engine that cannot trust the
              client. Over two million players have walked through it. The interesting
              bugs are the ones that only show up at 600 CCU.
            </p>
            <p >
              I like the ugly middle: firmware next to a dashboard, a remote
              event that has to stay honest, a CI job that either ships or
              it doesn’t.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-rule pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display font-extrabold tracking-tightest text-5xl sm:text-6xl text-paper leading-none">
                  {s.value}
                </div>
                <div className="mt-3 mono-caps text-mute">{s.label}</div>
                {s.detail && <p className="mt-2 text-sm text-mute">{s.detail}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
