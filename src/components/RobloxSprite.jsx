import { useEffect, useState } from 'react';

/**
 * Decorative looping Roblox character clip, rendered as an animated WebP.
 * Using <img> + WebP avoids iOS Safari's video autoplay restrictions and
 * preserves true alpha (no blend-mode tricks needed).
 *
 * Two modes:
 *   - Corner mode: pass `corner` ('top-left' | 'top-right' | 'bottom-left' | 'bottom-right')
 *     to pin the sprite to a viewport corner with `offset` distance from the edges.
 *   - Inline mode: omit `corner` and pass a `className` (with sizing) — the parent
 *     controls placement (flex / absolute positioning / etc).
 *
 * Other props:
 *   src      — path to the .webm or .webp (extension auto-swapped to .webp).
 *   size     — px (corner mode only; default 96)
 *   offset   — CSS distance from edges (corner mode only; default '1.5rem')
 *   section  — optional section id; sprite mounts only while in view
 *   delay    — ms before fade-in (default 0)
 *   flip     — horizontally mirror (default false)
 *   className — extra classes (mainly for inline mode sizing)
 */
export default function RobloxSprite({
  src,
  corner,
  size = 96,
  offset = '1.5rem',
  section,
  delay = 0,
  flip = false,
  className = '',
}) {
  const [active, setActive] = useState(!section);
  const imgSrc = src.replace(/\.(webm|mp4)$/, '.webp');

  useEffect(() => {
    if (!section) return;
    const el = document.getElementById(section);
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [section]);

  if (!active) return null;

  if (corner) {
    const positionStyle = {
      [corner.includes('top') ? 'top' : 'bottom']: offset,
      [corner.includes('right') ? 'right' : 'left']: offset,
      width: size,
      height: size,
      animationDelay: `${delay}ms`,
      transform: flip ? 'scaleX(-1)' : undefined,
    };
    return (
      <img
        src={imgSrc}
        alt=""
        className={`roblox-sprite animate-sprite-pop ${className}`}
        style={positionStyle}
        aria-hidden="true"
      />
    );
  }

  return (
    <img
      src={imgSrc}
      alt=""
      className={`pointer-events-none select-none ${className}`}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    />
  );
}
