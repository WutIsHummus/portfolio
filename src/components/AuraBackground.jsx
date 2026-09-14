import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useReducedMotion from './useReducedMotion.js';

// Adapted from SteatlhCoachWeb commit 9c8b309, components/ui/aurora-background.tsx.
export default function AuraBackground() {
  const root = useRef(null);
  const scrollLayer = useRef(null);
  const pointerLayer = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = root.current;
    if (!node) return;

    if (reduced) {
      gsap.set(node, { opacity: 0.7 });
      return;
    }

    const ctx = gsap.context(() => {
      const parent = node.parentElement;
      const xTo = gsap.quickTo(pointerLayer.current, 'x', { duration: 1.2, ease: 'power2.out' });
      const yTo = gsap.quickTo(pointerLayer.current, 'y', { duration: 1.2, ease: 'power2.out' });
      const scrollTo = gsap.quickTo(scrollLayer.current, 'y', { duration: 0.9, ease: 'power2.out' });
      const fadeTo = gsap.quickTo(node, 'opacity', { duration: 0.55, ease: 'power2.out' });

      const onPointer = (e) => {
        if (e.pointerType === 'touch') return;
        xTo((e.clientX / window.innerWidth - 0.5) * 46);
        yTo((e.clientY / window.innerHeight - 0.5) * 36);
      };

      const onScroll = () => {
        scrollTo(-Math.min(window.scrollY * 0.075, 140));
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        const span = Math.max(window.innerHeight * 0.7, 1);
        const t = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / span));
        fadeTo(t * 0.7);
      };

      const reset = () => {
        xTo(0);
        yTo(0);
      };

      onScroll();
      window.addEventListener('pointermove', onPointer, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      document.documentElement.addEventListener('pointerleave', reset);
      return () => {
        window.removeEventListener('pointermove', onPointer);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        document.documentElement.removeEventListener('pointerleave', reset);
      };
    }, node);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div ref={root} className="page-aura" aria-hidden="true">
      <div ref={scrollLayer} className="aura-scroll">
        <div ref={pointerLayer} className="aura-pointer">
          <div className="aura-bands" />
        </div>
      </div>
    </div>
  );
}
