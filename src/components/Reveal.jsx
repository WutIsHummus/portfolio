import AnimatedContent from './reactbits/AnimatedContent/AnimatedContent.jsx';
import useReducedMotion from './useReducedMotion.js';

export default function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return <AnimatedContent distance={18} duration={0.65} ease="power3.out" threshold={0.06} delay={delay} className={className}>{children}</AnimatedContent>;
}
