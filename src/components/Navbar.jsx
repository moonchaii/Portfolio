import Link from 'next/link';

export default function Navbar() {
  return (
    <header style={{ borderBottom: '1px solid var(--card-border)', background: 'var(--card-bg)' }}>
      <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem' }}>
        <Link href="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>
            T. Europa
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
          <Link href="/projects" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Projects</Link>
          <Link href="/skills" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Skills</Link>
          <Link href="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}