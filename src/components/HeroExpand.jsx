import ScrollExpand from './reactbits/ScrollExpand.jsx';
import RobloxSprite from './RobloxSprite.jsx';
import { PROFILE } from '../data/portfolio.js';

export default function HeroExpand() {
  return (
    <ScrollExpand
      className="hero-expand !h-auto"
      src="/projects/me.png"
      alt={`${PROFILE.name} at the UT Tower`}
      title="AYDIN"
      scrollHint="↓  tower  ↓"
      useWindowScroll
      startWidth={34}
      startHeight={52}
      startRadius={18}
      endRadius={0}
      mediaZoom={1.22}
      scrollDistance={1.45}
      holdDistance={0.5}
      overlayScrim={0.72}
      smoothing={0.11}
    >
      <div className="max-w-3xl [text-shadow:0_2px_28px_rgba(0,0,0,0.75)]">
        <div className="flex items-end gap-3 sm:gap-4 mb-4">
          <RobloxSprite
            src="/animations/wave.webp"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain shrink-0"
          />
          <p className="mono-caps text-gold pb-2">{PROFILE.coords} · {PROFILE.location}</p>
        </div>
        <h1 className="font-display font-extrabold tracking-tightest text-[2.1rem] sm:text-[3.2rem] lg:text-[4.2rem] leading-[0.95] text-paper">
          {PROFILE.tagline}
        </h1>
        <p className="mt-5 font-sans text-paper/90 text-[1.05rem] sm:text-[1.15rem] leading-relaxed">
          {PROFILE.longTagline}
        </p>
      </div>
    </ScrollExpand>
  );
}
