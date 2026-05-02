import SectionLabel from './SectionLabel.jsx';
import ProjectCard from './ProjectCard.jsx';
import RobloxSprite from './RobloxSprite.jsx';
import { PROJECTS, PUBLICATIONS } from '../data/portfolio.js';

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 mb-32">
      <SectionLabel
        index={3}
        accent={
          <RobloxSprite
            src="/animations/fly2.webp"
            className="w-16 h-16 sm:w-20 sm:h-20"
            flip
          />
        }
      >
        Selected Work
      </SectionLabel>

      <div className="space-y-20">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>

      <div className="reveal mt-24">
        <h3 className="mono-caps text-ink-700 dark:text-ink-300 mb-6">Publications</h3>
        <ul className="space-y-5 border-t border-ink-300 dark:border-ink-400 pt-6">
          {PUBLICATIONS.map((p) => (
            <li
              key={p.title}
              className="font-sans text-ink-900 dark:text-cream-100 leading-[1.65] max-w-2xl"
            >
              <p className="text-[1.1rem] text-ink-900 dark:text-cream-50">{p.title}</p>
              <p className="text-accent dark:text-accent-light font-semibold mt-1">{p.authors}</p>
              <p className="text-ink-800 dark:text-ink-300 mt-1">
                {p.venue}, {p.year}.{' '}
                <a
                  href={p.doi}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  doi
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
