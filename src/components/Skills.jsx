import SectionLabel from './SectionLabel.jsx';
import { SKILLS, EDUCATION } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-32 mb-28">
      <SectionLabel index={4}>Kit</SectionLabel>

      <div className="space-y-10">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-2 sm:gap-8">
            <h3 className="mono-caps text-gold sm:pt-1">{category}</h3>
            <p className="font-sans text-[1.05rem] leading-[1.7] text-paper">
              {items.map(item => <span className="tool-chip" key={item}>{item}</span>)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-rule pt-8 grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-2 sm:gap-8">
        <h3 className="mono-caps text-mute sm:pt-1">School</h3>
        <div>
          <p className="font-display font-semibold text-[1.35rem] text-paper">{EDUCATION.school}</p>
          <p className="text-gold mt-1">{EDUCATION.degree}</p>
          <p className="mono-caps text-mute mt-2">{EDUCATION.dates}</p>
        </div>
      </div>
    </section>
  );
}
