import { skillsData } from '@/data/skills';

export default function SkillsPage() {
  return (
    <main className="container">
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--lavender)' }}>
        Skills & Technologies
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
        Core programming languages, frameworks, and tools I work with.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Languages */}
        <section className="card">
          <h2 style={{ fontSize: '1.25rem', color: 'var(--sunshine)', marginBottom: '1rem' }}>
            Languages
          </h2>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {skillsData.languages.map((skill) => (
              <span
                key={skill}
                style={{
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-main)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontWeight: '500'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Frameworks & Libraries */}
        <section className="card">
          <h2 style={{ fontSize: '1.25rem', color: 'var(--rose)', marginBottom: '1rem' }}>
            Frameworks & Libraries
          </h2>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {skillsData.frameworks.map((skill) => (
              <span
                key={skill}
                style={{
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-main)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontWeight: '500'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Tools & Environment */}
        <section className="card">
          <h2 style={{ fontSize: '1.25rem', color: 'var(--lavender)', marginBottom: '1rem' }}>
            Tools & Platforms
          </h2>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {skillsData.tools.map((skill) => (
              <span
                key={skill}
                style={{
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-main)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontWeight: '500'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}