// src/app/page.js
import Link from 'next/link';
import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';

export default function Home() {
  const featuredSkills = [...skillsData.languages, ...skillsData.frameworks].slice(0, 8);
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <main className="container">
      {/* Hero Section */}
      <section style={{ padding: '2rem 0 4rem 0' }}>

        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
          Hi, I&apos;m a{' '}
          <span 
            style={{
              background: 'linear-gradient(135deg, #e9d5ff, #c084fc, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Software Developer
          </span>
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '680px', marginBottom: '2.5rem', lineHeight: '1.7' }}>
          I build full-stack web platforms, mobile apps, and low-level software systems with clean design and user-focused engineering.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/projects" className="btn-primary">
            Explore Projects →
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View Resume ↗
          </a>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Tech Stack Highlight</h2>
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          {featuredSkills.map((skill) => (
            <span key={skill} className="badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 className="section-title">Featured Projects</h2>
          <Link href="/projects" style={{ color: 'var(--purple-light)', textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem' }}>
            View All Projects →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
          {featuredProjects.map((project) => (
            <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.55rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--card-border)', paddingTop: '1rem' }}>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none' }}>
                      Live Demo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none' }}>
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}