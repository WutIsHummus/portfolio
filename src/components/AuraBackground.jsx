import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useReducedMotion from './useReducedMotion.js';

// Adapted from SteatlhCoachWeb commit 9c8b309, components/ui/aurora-background.tsx.
// Original layered diagonal aurora, recolored burnt orange with separate parallax layers.
export default function AuraBackground() {
  const scrollLayer = useRef(null);
  const pointerLayer = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo(pointerLayer.current, 'x', { duration: 1.2, ease: 'power2.out' });
      const yTo = gsap.quickTo(pointerLayer.current, 'y', { duration: 1.2, ease: 'power2.out' });
      const scrollTo = gsap.quickTo(scrollLayer.current, 'y', { duration: 0.9, ease: 'power2.out' });
      const onPointer = e => {
        if (e.pointerType === 'touch') return;
        xTo((e.clientX / window.innerWidth - 0.5) * 46);
        yTo((e.clientY / window.innerHeight - 0.5) * 36);
      };
      const onScroll = () => scrollTo(-Math.min(window.scrollY * 0.075, 140));
      const reset = () => { xTo(0); yTo(0); };
      onScroll();
      window.addEventListener('pointermove', onPointer, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      document.documentElement.addEventListener('pointerleave', reset);
      return () => {
        window.removeEventListener('pointermove', onPointer);
        window.removeEventListener('scroll', onScroll);
        document.documentElement.removeEventListener('pointerleave', reset);
      };
    });
    return () => ctx.revert();
  }, [reduced]);
  return <div className="page-aura" aria-hidden="true"><div ref={scrollLayer} className="aura-scroll"><div ref={pointerLayer} className="aura-pointer"><div className="aura-bands"/></div></div></div>;
}
