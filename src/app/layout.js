import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Developer Portfolio',
  description: 'Personal Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}