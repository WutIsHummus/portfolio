import { useEffect, useRef, useState } from 'react';

const PADDING = 12;
const MIN_THUMB = 56;

export default function CustomScrollbar() {
  const [metrics, setMetrics] = useState({ top: 0, height: 0, visible: false });
  const [active, setActive] = useState(false);
  const idleTimer = useRef(null);
  const dragging = useRef(false);
  const dragStart = useRef({ y: 0, scrollY: 0 });
  const trackRef = useRef(null);

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
      idleTimer.current = setTimeout(() => {
        if (!dragging.current) setActive(false);
      }, 900);
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

  // Drag the thumb
  const onThumbMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragging.current = true;
    dragStart.current = { y: e.clientY, scrollY: window.scrollY };
    setActive(true);
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const html = document.documentElement;
      const total = html.scrollHeight;
      const winH = window.innerHeight;
      const totalScroll = total - winH;
      if (totalScroll <= 0) return;

      const trackH = winH - PADDING * 2;
      const ratio = winH / total;
      const thumbH = Math.max(MIN_THUMB, trackH * ratio);
      const dragRange = trackH - thumbH;
      if (dragRange <= 0) return;

      const dy = e.clientY - dragStart.current.y;
      const scrollPerPx = totalScroll / dragRange;
      const next = dragStart.current.scrollY + dy * scrollPerPx;
      window.scrollTo(0, Math.max(0, Math.min(totalScroll, next)));
    };

    const onUp = () => {
      if (dragging.current) {
        dragging.current = false;
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
        if (idleTimer.current) clearTimeout(idleTimer.current);
        idleTimer.current = setTimeout(() => setActive(false), 900);
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  // Click empty track to jump
  const onTrackMouseDown = (e) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const html = document.documentElement;
    const total = html.scrollHeight;
    const winH = window.innerHeight;
    const totalScroll = total - winH;
    if (totalScroll <= 0) return;

    const trackH = winH - PADDING * 2;
    const ratio = winH / total;
    const thumbH = Math.max(MIN_THUMB, trackH * ratio);
    const dragRange = trackH - thumbH;
    if (dragRange <= 0) return;

    const adjusted = Math.max(0, Math.min(dragRange, clickY - PADDING - thumbH / 2));
    const scrollPerPx = totalScroll / dragRange;
    window.scrollTo({ top: adjusted * scrollPerPx, behavior: 'smooth' });
  };

  if (!metrics.visible) return null;

  return (
    <div
      aria-hidden="true"
      ref={trackRef}
      onMouseDown={onTrackMouseDown}
      className="hidden lg:block fixed top-0 right-0 w-[14px] h-screen z-[58] cursor-pointer"
    >
      <div className="absolute right-[6px] top-3 bottom-3 w-px bg-ink-300/40 dark:bg-ink-700/60 pointer-events-none" />
      <div
        onMouseDown={onThumbMouseDown}
        className={`absolute right-[4px] w-[5px] rounded-full bg-accent dark:bg-accent-light transition-[opacity,background-color] duration-300 cursor-grab active:cursor-grabbing ${
          active ? 'opacity-90' : 'opacity-55 hover:opacity-80'
        }`}
        style={{
          top: `${metrics.top}px`,
          height: `${metrics.height}px`,
        }}
      />
    </div>
  );
}
