import { useEffect, useState } from 'react';
import { NAV, PROFILE } from '../data/portfolio.js';

const LINKS = [{ id: 'top', label: 'Start' }, ...NAV];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: '-18% 0px -58% 0px', threshold: [0.12, 0.3, 0.55] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className="site-nav">
        <button
          type="button"
          className="site-nav-toggle"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="site-nav-panel"
          onClick={() => setOpen(true)}
        >
          Menu <span aria-hidden="true">+</span>
        </button>
      </header>

      {open && (
        <button
          type="button"
          className="site-nav-backdrop"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        id="site-nav-panel"
        className={`site-nav-panel${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Menu"
      >
        <div className="site-nav-panel-bar">
          <span className="mono-caps text-mute">Index</span>
          <button type="button" className="site-nav-toggle" onClick={() => setOpen(false)}>
            Close <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <nav aria-label="Site navigation">
          {LINKS.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={active === item.id ? 'is-active' : undefined}
            >
              <span className="mono-caps text-signal">{String(i).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-nav-socials">
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            GitHub &#8599;
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn &#8599;
          </a>
          <a href={`mailto:${PROFILE.email}`}>Email &#8599;</a>
        </div>
      </div>
    </>
  );
}
