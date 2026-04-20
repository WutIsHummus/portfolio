import { useEffect, useRef, useState } from 'react';

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, summary, label[for], [data-cursor="hover"]';

export default function CursorTracker() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add('cursor-custom');

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onOver = (e) => {
      const t = e.target;
      const interactive = t && t.closest && !!t.closest(INTERACTIVE_SELECTOR);
      setHovering(interactive);
    };

    const onLeave = (e) => {
      if (e && e.relatedTarget) return;
      target.current.x = -100;
      target.current.y = -100;
    };

    const animate = () => {
      // Position the outer wrappers at the target. Inner divs handle their
      // own -50%/-50% centering via CSS transform so they stay concentric
      // even while CSS-driven scale animations are running.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    document.addEventListener('mouseleave', onLeave);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.documentElement.classList.remove('cursor-custom');
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Outer wrapper handles JS-driven position; inner handles visuals + animation */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[100]"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`cursor-ring w-8 h-8 rounded-full border border-accent dark:border-accent-light ${
            hovering ? 'is-hover' : ''
          }`}
        />
      </div>

      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[100]"
        style={{ willChange: 'transform' }}
      >
        <div
          className={`cursor-dot rounded-full bg-accent dark:bg-accent-light ${
            hovering ? 'is-hover' : ''
          }`}
        />
      </div>
    </>
  );
}
