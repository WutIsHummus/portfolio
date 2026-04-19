import { useEffect, useRef, useState } from 'react';

export default function CustomScrollbar() {
  const [metrics, setMetrics] = useState({ top: 0, height: 0, visible: false });
  const idleTimer = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const update = () => {
      const html = document.documentElement;
      const total = html.scrollHeight;
      const winH = window.innerHeight;

      if (total <= winH + 1) {
        setMetrics({ top: 0, height: 0, visible: false });
        return;
      }

      const padding = 12;
      const trackH = winH - padding * 2;
      const ratio = winH / total;
      const thumbH = Math.max(56, trackH * ratio);
      const maxScroll = total - winH;
      const scrollRatio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const top = padding + scrollRatio * (trackH - thumbH);

      setMetrics({ top, height: thumbH, visible: true });
    };

    const onScroll = () => {
      update();
      setActive(true);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setActive(false), 900);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    const ro = new ResizeObserver(update);
    ro.observe(document.body);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      ro.disconnect();
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  if (!metrics.visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 right-[4px] w-[5px] h-screen z-[58] pointer-events-none"
    >
      {/* faint track */}
      <div className="absolute right-[1px] top-3 bottom-3 w-px bg-ink-300/40 dark:bg-ink-700/60" />
      {/* thumb */}
      <div
        className={`absolute right-0 w-full rounded-full bg-accent dark:bg-accent-light transition-[opacity,background-color] duration-300 ${
          active ? 'opacity-90' : 'opacity-55'
        }`}
        style={{
          top: `${metrics.top}px`,
          height: `${metrics.height}px`,
        }}
      />
    </div>
  );
}
