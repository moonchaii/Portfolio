export default function ContactPage() {
  return (
    <main className="container">
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--lavender)' }}>
        Get in Touch
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
        Feel free to reach out for opportunities, collaborations, or resume requests.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Contact Methods */}
        <section className="card">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            Contact Info
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>EMAIL</p>
              <a 
                href="mailto:your.email@example.com" 
                style={{ color: 'var(--sunshine)', textDecoration: 'none', fontWeight: '600' }}
              >
                your.email@example.com
              </a>
            </div>

            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>GITHUB</p>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--rose)', textDecoration: 'none', fontWeight: '600' }}
              >
                github.com/yourusername
              </a>
            </div>

            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>LINKEDIN</p>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--lavender)', textDecoration: 'none', fontWeight: '600' }}
              >
                linkedin.com/in/yourusername
              </a>
            </div>
          </div>
        </section>

        {/* Resume Download Section */}
        <section className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
              Resume
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              View or download a formal copy of my resume including work history, education, and credentials.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              View PDF
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              Download File
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}