import AuraBackground from './components/AuraBackground.jsx';
import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Work from './components/Work.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import ScrollIndicator from './components/ScrollIndicator.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Vlog from './components/Vlog.jsx';
import Reveal from './components/Reveal.jsx';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="click-spark-host min-h-screen relative bg-asphalt text-paper">
      <>
        {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
        <ScrollIndicator />
        <NavBar />
        <Hero ready={loaded} />

        <div className="post-hero-content relative isolate">
        <AuraBackground />

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-24">
          <div className="max-w-5xl mx-auto">
            <Reveal><About /></Reveal>
          </div>
          <div className="max-w-3xl mx-auto">
            <Reveal><Experience /></Reveal>
          </div>
        </div>

        <div className="relative z-10">
          <Work />
        </div>

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 pb-16">
          <div className="max-w-3xl mx-auto">
            <Reveal><Skills /></Reveal>
            <Reveal><Vlog /></Reveal>
            <Reveal><Contact /></Reveal>
          </div>
        </div>
        </div>
      </>
    </div>
  );
}
