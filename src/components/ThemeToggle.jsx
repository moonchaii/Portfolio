'use client';

// The icon shown is chosen purely by CSS from <html data-theme>, so there is no
// hydration flash. The inline script in layout.js sets data-theme before paint.
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode etc. - the theme just won't persist */
    }
  }

  return (
    <button type="button" className="theme-toggle px-sm" onClick={toggle} aria-label="Switch between light and dark theme">
      <span className="theme-toggle__light" aria-hidden="true">☀ LIGHT</span>
      <span className="theme-toggle__dark" aria-hidden="true">☾ DARK</span>
    </button>
  );
}
