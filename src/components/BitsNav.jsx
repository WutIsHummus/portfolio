import Reveal from './Reveal.jsx';
import { useEffect, useRef, useState } from 'react';
import { NAV, PROFILE } from '../data/portfolio.js';
export default function BitsNav() {
  const dialog = useRef(null);
  const [open, setOpen] = useState(false);
  useEffect(() => { if (open) dialog.current.showModal(); else dialog.current.close(); document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  return <>
    <header className="site-header" aria-label="Site controls">
      <button className="nav-control" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>Menu <span aria-hidden="true">+</span></button>
    </header>
    <dialog ref={dialog} className="site-menu" onCancel={() => setOpen(false)} onClick={e => { if(e.target === dialog.current) setOpen(false); }}>
      <Reveal key={open ? 'open' : 'closed'}><div className="menu-inner"><div className="flex justify-between items-center mb-10"><span className="mono-caps text-mute">Explore</span><button autoFocus onClick={() => setOpen(false)} className="menu-button">Close &#215;</button></div>
      <nav aria-label="Main navigation">{[{id:'top',label:'Start'},...NAV].map((n,i) => <a key={n.id} href={'#'+n.id} onClick={() => setOpen(false)}><span className="mono-caps text-signal">{String(i).padStart(2,'0')}</span>{n.label}<span className="menu-arrow">&#8599;</span></a>)}</nav>
      <div className="flex gap-6 mt-10 text-sm"><a href={PROFILE.github}>GitHub &#8599;</a><a href={PROFILE.linkedin}>LinkedIn &#8599;</a><a href={'mailto:'+PROFILE.email}>Email &#8599;</a></div></div>
      </Reveal>
    </dialog>
  </>;
}
