import { useEffect, useRef, useState } from 'react';

const PADDING = 12;
const MIN_THUMB = 56;

export default function CustomScrollbar() {
  const [metrics, setMetrics] = useState({ top: 0, height: 0, visible: false });
  const [active, setActive] = useState(false);
  const [dragging, setDragging] = useState(false);
  const idleTimer = useRef(null);
  const dragRef = useRef({ y: 0, scrollY: 0, range: 0, totalScroll: 0 });
  const trackRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const html = document.documentElement;
      const total = html.scrollHeight;
      const winH = window.innerHeight;

      if (total <= winH + 1) {
        setMetrics({ top: 0, height: 0, visible: false });
        return;
      }

      const trackH = winH - PADDING * 2;
      const ratio = winH / total;
      const thumbH = Math.max(MIN_THUMB, trackH * ratio);
      const maxScroll = total - winH;
      const scrollRatio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const top = PADDING + scrollRatio * (trackH - thumbH);

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

  const computeDrag = () => {
    const html = document.documentElement;
    const total = html.scrollHeight;
    const winH = window.innerHeight;
    const totalScroll = total - winH;
    const trackH = winH - PADDING * 2;
    const ratio = winH / total;
    const thumbH = Math.max(MIN_THUMB, trackH * ratio);
    const range = Math.max(1, trackH - thumbH);
    return { totalScroll, range, thumbH };
  };

  const onThumbPointerDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    const { totalScroll, range } = computeDrag();
    dragRef.current = {
      y: e.clientY,
      scrollY: window.scrollY,
      range,
      totalScroll,
    };
    setDragging(true);
    setActive(true);
  };

  const onThumbPointerMove = (e) => {
    if (!dragging) return;
    const { y, scrollY, range, totalScroll } = dragRef.current;
    if (totalScroll <= 0 || range <= 0) return;
    const dy = e.clientY - y;
    const next = scrollY + (dy / range) * totalScroll;
    window.scrollTo(0, Math.max(0, Math.min(totalScroll, next)));
  };

  const onThumbPointerUp = (e) => {
    if (!dragging) return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setDragging(false);
  };

  const onTrackPointerDown = (e) => {
    if (e.target === thumbRef.current || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const { totalScroll, range, thumbH } = computeDrag();
    if (totalScroll <= 0) return;
    const desired = Math.max(0, Math.min(range, clickY - PADDING - thumbH / 2));
    window.scrollTo({
      top: (desired / range) * totalScroll,
      behavior: 'smooth',
    });
  };

  if (!metrics.visible) return null;

  return (
    <div
      aria-hidden="true"
      ref={trackRef}
      onPointerDown={onTrackPointerDown}
      className="hidden lg:block fixed top-0 right-0 w-[14px] h-screen z-[58] cursor-pointer"
      style={{ touchAction: 'none' }}
    >
      <div className="absolute right-[6px] top-3 bottom-3 w-px bg-ink-300/40 dark:bg-ink-700/60 pointer-events-none" />
      <div
        ref={thumbRef}
        onPointerDown={onThumbPointerDown}
        onPointerMove={onThumbPointerMove}
        onPointerUp={onThumbPointerUp}
        onPointerCancel={onThumbPointerUp}
        className={`absolute right-[4px] w-[5px] rounded-full bg-accent dark:bg-accent-light transition-[opacity,background-color] duration-300 ${
          dragging ? 'cursor-grabbing opacity-100' : 'cursor-grab opacity-55 hover:opacity-90'
        } ${active && !dragging ? 'opacity-90' : ''}`}
        style={{
          top: `${metrics.top}px`,
          height: `${metrics.height}px`,
          touchAction: 'none',
        }}
      />
    </div>
  );
}
