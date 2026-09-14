import { PROFILE, NAV } from '../data/portfolio.js';
import RobloxSprite from './RobloxSprite.jsx';

export default function TopBar({ active }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-asphalt/45 backdrop-blur-md border-b border-paper/10">
      <div className="flex items-center justify-between gap-4 px-5 sm:px-8 lg:px-10 h-14">
        <a href="#about" className="flex items-center gap-1.5 font-display font-extrabold tracking-tightest text-lg sm:text-xl text-paper">
          <RobloxSprite src="/animations/wave.webp" className="w-9 h-9 object-contain" />
          AYDIN
        </a>

        <nav aria-label="Sections" className="hidden md:flex items-center gap-6">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`mono-caps transition-colors ${
                  isActive ? 'text-signal' : 'text-paper/55 hover:text-paper'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <span className="mono-caps text-paper/80 hidden sm:inline">
          {PROFILE.location} · intern ’26
        </span>
      </div>
    </header>
  );
}
