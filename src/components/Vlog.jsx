import SectionLabel from './SectionLabel.jsx';
import { VLOGS } from '../data/portfolio.js';
export default function Vlog() {
  return <section id="vlog" className="scroll-mt-32 mb-28"><SectionLabel index={5}>Vlog</SectionLabel>
    {VLOGS.length ? <div className="space-y-10">{VLOGS.map(v => <article className="vlog-card" key={v.title + v.date}>
      {v.src && <video controls preload="metadata" poster={v.poster} className="w-full rounded-sm" aria-label={v.title}><source src={v.src}/>{v.captions && <track kind="captions" src={v.captions} srcLang="en" label="English" default/>}</video>}
      <div className="pt-5"><time className="mono-caps text-mute" dateTime={v.date}>{v.date}</time><h3 className="font-display text-3xl mt-2">{v.title}</h3><p className="text-mute mt-3">{v.description}</p>{v.url && <a className="primary-link mt-5" href={v.url} target="_blank" rel="noreferrer">Watch the vlog &#8599;</a>}</div>
    </article>)}</div> : <div className="vlog-empty"><span className="mono-caps text-signal">Behind the builds / Coming soon</span><h3 className="font-display text-3xl sm:text-4xl mt-5">A little less polished.<br/>A little closer to the process.</h3><p className="text-mute mt-4 max-w-md">Notes from the shop, experiments on screen, and the work between releases.</p></div>}
  </section>;
}
