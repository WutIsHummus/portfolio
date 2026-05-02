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
 *   src      — webm file path (relative to public/). A sibling .mp4 is auto-derived as a
 *              fallback for browsers without VP9-alpha webm support (notably iOS Safari).
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
  // Always serve MP4 — universal codec support including iOS Safari.
  // The MP4 is composited on the page bg (#0A0D11) so it matches every
  // placement visually without needing alpha-channel video support.
  const videoSrc = src.replace(/\.webm$/, '.mp4');

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
    // iOS Safari autoplay defenses: mute via property + set legacy attrs
    v.muted = true;
    v.setAttribute('webkit-playsinline', '');
    v.setAttribute('playsinline', '');
    if (active) {
      const tryPlay = () => v.play().catch(() => {});
      if (v.readyState >= 2) tryPlay();
      else v.addEventListener('loadedmetadata', tryPlay, { once: true });
    } else {
      v.pause();
    }
  }, [active]);

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
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        defaultMuted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        className={`roblox-sprite animate-sprite-pop pointer-events-none ${className}`}
        style={positionStyle}
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      autoPlay
      loop
      muted
      defaultMuted
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      className={`pointer-events-none select-none ${className}`}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    />
  );
}
