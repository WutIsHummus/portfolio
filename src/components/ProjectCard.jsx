import Reveal from './Reveal.jsx';
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard.jsx';

export default function ProjectCard({ project }) {
  const isExternal = project.link && project.link.startsWith('http');
  const TitleTag = project.link && project.link !== '#' ? 'a' : 'div';
  const titleProps =
    project.link && project.link !== '#'
      ? {
          href: project.link,
          target: isExternal ? '_blank' : undefined,
          rel: isExternal ? 'noreferrer' : undefined,
        }
      : {};

  return (
    <Reveal><article>
      <SpotlightCard
        className="p-0 rounded-sm border-rule bg-asphalt"
        spotlightColor="rgba(228, 87, 46, 0.28)"
      >
        <img
          src={project.image}
          alt={project.imageAlt || ''}
          width={project.width}
          height={project.height}
          loading="lazy"
          className={`w-full h-auto block ${project.compact ? 'mx-auto sm:w-3/4' : ''}`}
        />
        <div className="p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <div>
              {project.logo && <img src={project.logo} alt="" width="48" height="48" className="w-12 h-12 object-contain mb-3" loading="lazy" />}
              <TitleTag
                {...titleProps}
                className={`font-display font-semibold text-[1.45rem] sm:text-[1.7rem] leading-tight text-paper ${
                  titleProps.href ? 'link-underline inline-block' : ''
                }`}
              >
                {project.name}
                {isExternal && (
                  <span aria-hidden="true" className="text-signal ml-2">
                    ↗
                  </span>
                )}
              </TitleTag>
              <p className="mt-1 font-sans text-gold">{project.subtitle}</p>
            </div>
            <span className="mono-caps text-mute sm:text-right shrink-0">{project.dates}</span>
          </div>

          <p className="mt-3 font-sans text-[1rem] leading-[1.65] text-paper/80 max-w-2xl">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {project.tags.map((t) => (
              <li key={t} className="mono-caps text-mute">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </SpotlightCard>
    </article></Reveal>
  );
}
