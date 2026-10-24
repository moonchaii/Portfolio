import PixelSprite from './PixelSprite';

// Decorative twinkling pixels in the page background.
const stars = [
  { name: 'star', size: 3, top: '14%', left: '6%', delay: '0s' },
  { name: 'sparkle', size: 3, top: '30%', left: '92%', delay: '0.8s' },
  { name: 'star', size: 2, top: '62%', left: '4%', delay: '1.4s' },
  { name: 'sparkle', size: 4, top: '78%', left: '88%', delay: '0.3s' },
  { name: 'star', size: 2, top: '46%', left: '96%', delay: '1.9s' },
  { name: 'sparkle', size: 2, top: '88%', left: '14%', delay: '1.1s' },
];

export default function Sky() {
  return (
    <div className="sky" aria-hidden="true">
      {stars.map((s, i) => (
        <span key={i} className="sky__star" style={{ top: s.top, left: s.left, animationDelay: s.delay }}>
          <PixelSprite name={s.name} size={s.size} />
        </span>
      ))}
    </div>
  );
}
