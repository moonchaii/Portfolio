import PixelSprite from './PixelSprite';
import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="site-footer">
      <PixelSprite name="heart" size={2} />
      <span>
        {profile.name} · built with Next.js · press <kbd>START</kbd> to hire me
      </span>
    </footer>
  );
}
