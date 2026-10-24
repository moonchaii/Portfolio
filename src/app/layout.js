import './globals.css';
import '@fontsource-variable/pixelify-sans';
import '@fontsource-variable/nunito';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sky from '@/components/Sky';
import { profile } from '@/data/profile';

export const metadata = {
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: `${profile.name}'s developer portfolio`,
};

// Runs before first paint so there is no flash of the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Sky />
        <Navbar />
        <div className="page">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
