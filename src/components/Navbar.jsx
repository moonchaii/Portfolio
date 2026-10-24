'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PixelSprite from './PixelSprite';
import ThemeToggle from './ThemeToggle';
import { profile } from '@/data/profile';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main">
        <Link href="/" className="brand">
          <PixelSprite name="heart" size={3} />
          <span>{profile.name}</span>
        </Link>

        <ul className="nav-links">
          {links.map(({ href, label }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link href={href} className="nav-link" aria-current={active ? 'page' : undefined}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
