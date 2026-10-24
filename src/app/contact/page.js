import { profile } from '@/data/profile';

export const metadata = { title: 'Contact' };

const stripProtocol = (url) => url.replace(/^https?:\/\//, '');

export default function ContactPage() {
  return (
    <main>
      <header className="page-head">
        <p className="eyebrow">Multiplayer</p>
        <h1 className="page-title">Get in touch</h1>
        <p className="lede">
          Feel free to reach out for opportunities, collaborations, or resume requests.
        </p>
      </header>

      <div className="contact-grid">
        <section className="px panel">
          <h2>Contact info</h2>
          <dl className="contact-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="text-link">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-link">
                  {stripProtocol(profile.github)}
                </a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
                  {stripProtocol(profile.linkedin)}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="px panel" style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Resume</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.6rem' }}>
            View or download a formal copy of my resume including work history, education, and credentials.
          </p>
          <div className="btn-row" style={{ marginTop: 'auto' }}>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="px btn">
              View PDF
            </a>
            <a href={profile.resumeUrl} download className="px btn btn--ghost">
              Download
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
