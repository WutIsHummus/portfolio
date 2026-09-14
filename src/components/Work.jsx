import SectionLabel from './SectionLabel.jsx';
import ProjectCard from './ProjectCard.jsx';
import ScrollExpand from './reactbits/ScrollExpand.jsx';
import RobloxSprite from './RobloxSprite.jsx';
import { PROJECTS, PUBLICATIONS } from '../data/portfolio.js';

export default function Work() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-32 mb-28">
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <SectionLabel
            index={3}
            accent={
              <RobloxSprite
                src="/animations/fly2.webp"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                flip
              />
            }
          >
            Builds
          </SectionLabel>
        </div>
      </div>

      {featured && (
        <div className="mb-20">
          <ScrollExpand
            className="!h-auto"
            src={featured.image}
            alt={featured.name}
            title={featured.name}
            scrollHint="↓  2M+ players  ↓"
            useWindowScroll
            startWidth={48}
            startHeight={68}
            startRadius={16}
            endRadius={0}
            mediaZoom={1.18}
            scrollDistance={0.95}
            holdDistance={0.28}
            overlayScrim={0.62}
          >
            <div className="[text-shadow:0_2px_28px_rgba(0,0,0,0.75)]">
            <p className="mono-caps text-gold mb-3">
              {featured.subtitle} · {featured.dates}
            </p>
            <p className="font-display font-semibold text-2xl sm:text-4xl text-[#F2EBE0] max-w-2xl leading-tight">
              {featured.description}
            </p>
            <a
              href={featured.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block mono-caps text-[#F2EBE0] link-underline"
            >
              Open the game ↗
            </a>
            </div>
          </ScrollExpand>
        </div>
      )}

      <div className="px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto space-y-16">
          {rest.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}

          <div className="pt-4">
            <h3 className="mono-caps text-mute mb-5">On paper</h3>
            <ul className="space-y-5 border-t border-rule pt-6">
              {PUBLICATIONS.map((p) => (
                <li key={p.title} className="font-sans text-paper/85 leading-[1.65] max-w-2xl">
                  <p className="text-paper">{p.title}</p>
                  <p className="text-gold mt-1">{p.authors}</p>
                  <p className="text-mute mt-1">
                    {p.venue}, {p.year}.{' '}
                    <a href={p.doi} target="_blank" rel="noreferrer" className="link-underline text-paper">
                      doi
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
