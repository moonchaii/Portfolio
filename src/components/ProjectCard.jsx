import Link from 'next/link';

// The whole card is clickable: the title link stretches over the entire card via
// CSS (.card-link::after). GitHub / Live links sit above it so they still work.
export default function ProjectCard({ project, index }) {
  const quest = String(index + 1).padStart(2, '0');

  return (
    <article className="px project-card">
      <div className="project-card__top">
        <p className="eyebrow">QUEST {quest}</p>
        {project.status && <span className="status-tag">{project.status}</span>}
      </div>

      <h3 className="project-card__title">
        <Link href={`/projects/${project.slug}`} className="card-link">
          {project.title}
        </Link>
      </h3>

      <p className="project-card__desc">{project.description}</p>

      <ul className="chips" aria-label="Tech stack">
        {project.techStack.map((tech) => (
          <li key={tech} className="chip px-sm">
            {tech}
          </li>
        ))}
      </ul>

      <div className="project-card__footer">
        <div className="project-card__links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              Live demo ↗
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              GitHub ↗
            </a>
          )}
        </div>
        <span className="open-hint" aria-hidden="true">
          OPEN ▶
        </span>
      </div>
    </article>
  );
}
