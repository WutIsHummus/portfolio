import { useEffect, useState, useCallback } from 'react';
import Sidebar from './components/Sidebar.jsx';
import MobileHeader from './components/MobileHeader.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Work from './components/Work.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollIndicator from './components/ScrollIndicator.jsx';
import CustomScrollbar from './components/CustomScrollbar.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import CursorTracker from './components/CursorTracker.jsx';
import { NAV } from './data/portfolio.js';

const THEME_KEY = 'portfolio-theme';

function getInitialTheme() {
  if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
    return 'dark';
  }
  return 'light';
}

function useScrollSpy(ids, offset = 180) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return active;
}

function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (reduced) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1a1512' : '#f8f2e5');
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}

  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}

export default function App() {
  const ids = NAV.map((n) => n.id);
  const active = useScrollSpy(ids);
  const { theme, toggle } = useTheme();
  useReveal();

  return (
    <div className="min-h-screen">
      <div className="grain" aria-hidden="true" />
      <ScrollIndicator active={active} />
      <CustomScrollbar />
      <MobileMenu active={active} />
      <CursorTracker />

      <MobileHeader theme={theme} onToggleTheme={toggle} />

      <div className="lg:flex">
        <Sidebar active={active} theme={theme} onToggleTheme={toggle} />

        <main className="lg:w-[60%] lg:ml-[40%] px-6 sm:px-10 lg:px-16 xl:px-24 pt-8 lg:pt-32 pb-32">
          <About />
          <Experience />
          <Work />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
