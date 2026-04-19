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
    <article className="reveal group">
      <div className="project-art-wrap rounded-sm bg-cream-200 dark:bg-ink-800 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} cover`}
          width={project.width}
          height={project.height}
          loading="lazy"
          className="project-art-inner w-full h-auto block"
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <div>
          <TitleTag
            {...titleProps}
            className={`font-serif font-medium text-[1.4rem] sm:text-[1.7rem] leading-tight text-ink-900 dark:text-cream-50 ${
              titleProps.href ? 'link-underline inline-block' : ''
            }`}
          >
            {project.name}
            {isExternal && (
              <span aria-hidden="true" className="text-accent dark:text-accent-light ml-2">↗</span>
            )}
          </TitleTag>
          <p className="font-display italic text-accent dark:text-accent-light text-[1.05rem] sm:text-[1.25rem] leading-tight mt-1">
            {project.subtitle}
          </p>
        </div>
        <span className="mono-caps text-ink-700 dark:text-ink-300 sm:text-right shrink-0">
          {project.dates}
        </span>
      </div>

      <p className="mt-4 font-serif text-[1rem] sm:text-[1.05rem] leading-[1.65] text-ink-900 dark:text-cream-100 max-w-2xl">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li
            key={t}
            className="mono-caps text-ink-800 dark:text-cream-100 border border-ink-400 dark:border-ink-700 rounded-full px-3 py-1"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
