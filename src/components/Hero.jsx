import { useEffect, useState } from 'react';
import HeroBackground from './HeroBackground.jsx';
import FuzzyText from './reactbits/FuzzyText/FuzzyText.jsx';
import SplitFlapText from './reactbits/SplitFlapText/SplitFlapText.jsx';
import CurvedLoop from './reactbits/CurvedLoop/CurvedLoop.jsx';
import RobloxSprite from './RobloxSprite.jsx';
import useReducedMotion from './useReducedMotion.js';
import { PROFILE } from '../data/portfolio.js';

const FLAP_WIDTH = 11;
const flapWords = ['SOLAR CAR', '2M+ PLAYERS', 'CAN BUS', 'UT AUSTIN'].map(word => {
  const left = Math.floor((FLAP_WIDTH - word.length) / 2);
  return (' '.repeat(left) + word).padEnd(FLAP_WIDTH, ' ');
});

export default function Hero() {
  const reduced = useReducedMotion();
  const [light, setLight] = useState(() => document.documentElement.dataset.theme === 'light');
  useEffect(() => {
    const observer = new MutationObserver(() => setLight(document.documentElement.dataset.theme === 'light'));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);
  return (
    <section id="top" className="grok-hero relative min-h-screen flex flex-col justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 flex flex-col items-center text-center px-5 pt-28 pb-16 gap-5">
        <RobloxSprite src="/animations/wave.webp" className="w-40 h-40 sm:w-56 sm:h-56 object-contain" />
        <h1 className={reduced ? 'font-display font-extrabold text-[clamp(2rem,8vw,6.5rem)] tracking-tightest' : 'sr-only'}>{PROFILE.name}</h1>
        {!reduced && <div className="hero-fuzzy" aria-hidden="true">
          <FuzzyText fontFamily='"Bricolage Grotesque", sans-serif' fontWeight={800}
            color={light ? '#1E1B17' : '#F2EBE0'} fontSize="clamp(2rem, 8vw, 6.5rem)"
            baseIntensity={0.12} hoverIntensity={0.45}>
            ALPEREN AYDIN
          </FuzzyText>
        </div>}
        {reduced ? <p className="mono-caps text-mute">Solar car / 2M+ players / UT Austin</p> :
          <SplitFlapText words={flapWords} padTo={FLAP_WIDTH} fontSize={28}
            tileColor={light ? '#DED5C7' : '#1A1510'} textColor={light ? '#1E1B17' : '#F2EBE0'}
            tileRadius={6} gap={4} cycleDelay={2200} className="justify-center" />}
        <div className="hero-curve w-full max-w-3xl">
          {reduced ? <p className="text-paper">{PROFILE.tagline} Lockheed Martin.</p> : <CurvedLoop
            marqueeText={"telemetry on a solar car \u00b7 a game engine for 2M+ players \u00b7 Lockheed Martin \u00b7 "}
            speed={0.7} curveAmount={120} interactive className="fill-paper" />}
        </div>
      </div>
    </section>
  );
}
