import { Component, useEffect, useRef, useState } from 'react';
import Ferrofluid from './reactbits/Ferrofluid/Ferrofluid.jsx';

const DARK_COLORS = ['#92391F', '#E4572E', '#D9A25C'];
const LIGHT_COLORS = ['#79391F', '#B84A24', '#9B6B32'];
import useReducedMotion from './useReducedMotion.js';

class BackgroundBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function HeroBackground() {
  const container = useRef(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(true);
  const [light, setLight] = useState(() => document.documentElement.dataset.theme === 'light');
  useEffect(() => {
    const update = () => setLight(document.documentElement.dataset.theme === 'light');
    const themeObserver = new MutationObserver(update);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    let visible = true;
    const updateActive = () => setActive(visible && !document.hidden);
    const viewportObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; updateActive(); });
    viewportObserver.observe(container.current);
    document.addEventListener('visibilitychange', updateActive);
    return () => { themeObserver.disconnect(); viewportObserver.disconnect(); document.removeEventListener('visibilitychange', updateActive); };
  }, []);
  return <div ref={container} className="hero-fluid" aria-hidden="true">
    {reduced ? <div className="signal-axis"/> : active && <BackgroundBoundary><Ferrofluid
      colors={light ? LIGHT_COLORS : DARK_COLORS}
      dpr={Math.min(window.devicePixelRatio || 1, 1.5)}
      speed={0.12} scale={2.1} turbulence={0.65} fluidity={0.075}
      rimWidth={0.16} sharpness={2.1} shimmer={0.5} glow={1.5}
      flowDirection="up" opacity={light ? 0.48 : 0.72}
      mouseInteraction={false}
    /></BackgroundBoundary>}
  </div>;
}
