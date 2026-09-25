import { projectsData } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="container">
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--lavender)' }}>
        Projects
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
        A collection of web, mobile, and software development work.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projectsData.map((project) => (
          <div key={project.id} className="card">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              {project.title}
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: '1.6' }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--sunshine)',
                    backgroundColor: 'rgba(251, 191, 36, 0.1)',
                    border: '1px solid rgba(251, 191, 36, 0.2)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '6px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                >
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}