import SectionLabel from './SectionLabel.jsx';
import RobloxSprite from './RobloxSprite.jsx';
import { PROFILE } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-32 mb-20">
      <SectionLabel index={6}>Ping</SectionLabel>

      <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">
        <h2 className="font-display font-extrabold tracking-tightest leading-[0.92] text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem] text-paper max-w-xl">
          If it has to stay up under load, email me.
        </h2>
        <RobloxSprite
          src="/animations/sit.webp"
          className="w-36 h-36 sm:w-44 sm:h-44 object-contain shrink-0 -mb-1"
        />
      </div>

      <p className="mt-7 font-sans text-[1.08rem] leading-[1.65] text-paper/80 max-w-xl">
        Software, embedded systems, and developer tooling. I read CAN traces
        and remote-event logs for fun. That is not a metaphor.
      </p>

      <div className="mt-10 max-w-xl">
        <div className="contact-link">
          <a
            href={`mailto:${PROFILE.email}`}
            className="block px-5 py-4 font-display font-semibold text-[1.25rem] sm:text-[1.7rem] text-paper break-all"
          >
            {PROFILE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
