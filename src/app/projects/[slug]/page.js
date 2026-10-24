import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData, getProject } from '@/data/projects';

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.description } : {};
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hasDetails =
    project.overview ||
    project.highlights?.length ||
    project.learned?.length ||
    project.todo?.length ||
    project.images?.length;

  return (
    <main>
      <Link href="/projects" className="text-link back-link">
        ← Back to projects
      </Link>

      <header className="page-head">
        <div className="project-card__top">
          <p className="eyebrow">Quest file</p>
          {project.status && <span className="status-tag">{project.status}</span>}
        </div>
        <h1 className="page-title">{project.title}</h1>
        <p className="lede">{project.description}</p>

        {(project.year || project.team || project.role) && (
          <dl className="facts">
            {project.year && (
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
            )}
            {project.team && (
              <div>
                <dt>Team</dt>
                <dd>{project.team}</dd>
              </div>
            )}
            {project.role && (
              <div>
                <dt>My role</dt>
                <dd>{project.role}</dd>
              </div>
            )}
          </dl>
        )}

        <ul className="chips" style={{ marginTop: '1.6rem' }} aria-label="Tech stack">
          {project.techStack.map((tech) => (
            <li key={tech} className="chip px-sm">
              {tech}
            </li>
          ))}
        </ul>

        <div className="btn-row" style={{ marginTop: '2rem' }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px btn">
              GitHub repo ↗
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px btn btn--ghost">
              Live demo ↗
            </a>
          )}
        </div>
      </header>

      <div className="detail-grid">
        {project.overview && (
          <section className="px panel">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>
        )}

        {project.highlights?.length > 0 && (
          <section className="px panel">
            <h2>Highlights</h2>
            <ul>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        )}

        {project.learned?.length > 0 && (
          <section className="px panel">
            <h2>What I learned</h2>
            <ul>
              {project.learned.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </section>
        )}

        {project.todo?.length > 0 && (
          <section className="px panel">
            <h2>{project.todoTitle || 'Known limitations & refactor goals'}</h2>
            <ul>
              {project.todo.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        )}

        {project.images?.length > 0 && (
          <section className="px panel">
            <h2>Screenshots</h2>
            <div className="gallery">
              {project.images.map((img) => {
                const { src, alt } = typeof img === 'string' ? { src: img, alt: `${project.title} screenshot` } : img;
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt={alt} loading="lazy" />
                );
              })}
            </div>
          </section>
        )}

        {!hasDetails && (
          <p className="px empty-note">
            ✦ Full write-up coming soon.{project.githubUrl ? ' In the meantime, the GitHub repo has the code.' : ''}
          </p>
        )}
      </div>
    </main>
  );
}
