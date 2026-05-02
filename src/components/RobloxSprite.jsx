import { useEffect, useRef, useState } from 'react';

/**
 * Decorative looping Roblox character clip.
 *
 * Two modes:
 *   - Corner mode: pass `corner` ('top-left' | 'top-right' | 'bottom-left' | 'bottom-right')
 *     to pin the sprite to a viewport corner with `offset` distance from the edges.
 *   - Inline mode: omit `corner` and pass a `className` (with sizing) instead — the parent
 *     controls placement (flex / absolute positioning / etc).
 *
 * Other props:
 *   src      — webm file path (relative to public/)
 *   size     — px (corner mode only; default 96)
 *   offset   — CSS distance from edges (corner mode only; default '1.5rem')
 *   section  — optional section id; sprite mounts only while that section is in view
 *   delay    — ms before fade-in (default 0)
 *   flip     — horizontally mirror (default false)
 *   className — extra Tailwind classes (mainly for inline mode)
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
  const videoRef = useRef(null);

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

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) v.play().catch(() => {});
    else v.pause();
  }, [active]);

  if (!active) return null;

  if (corner) {
    // Fixed-corner mode: pinned to viewport.
    const positionStyle = {
      [corner.includes('top') ? 'top' : 'bottom']: offset,
      [corner.includes('right') ? 'right' : 'left']: offset,
      width: size,
      height: size,
      animationDelay: `${delay}ms`,
      transform: flip ? 'scaleX(-1)' : undefined,
    };
    return (
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`roblox-sprite animate-sprite-pop ${className}`}
        style={positionStyle}
        aria-hidden="true"
      />
    );
  }

  // Inline mode: parent positions/sizes via className.
  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className={`pointer-events-none select-none ${className}`}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    />
  );
}
