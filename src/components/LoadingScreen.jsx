import { useEffect, useMemo, useRef, useState } from 'react';
import { LOADING } from '../data/portfolio.js';

export default function LoadingScreen({ onDone }) {
  const [hidden, setHidden] = useState(false);
  const [videoOk, setVideoOk] = useState(true);
  const startedAt = useRef(performance.now());

  const message = useMemo(
    () => LOADING.messages[Math.floor(Math.random() * LOADING.messages.length)],
    [],
  );

  useEffect(() => {
    const elapsed = performance.now() - startedAt.current;
    const remaining = Math.max(LOADING.minDurationMs - elapsed, 0);
    const t = setTimeout(() => {
      setHidden(true);
      setTimeout(() => onDone?.(), 600);
    }, remaining);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className={`loading-screen ${hidden ? 'is-hidden' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-2">
        {videoOk && (
          <video
            src={LOADING.src.replace(/\.webm$/, '.mp4')}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => setVideoOk(false)}
            className="w-[160px] h-[160px] object-contain"
            aria-hidden="true"
          />
        )}
        <div
          className={`font-mono text-cream-100 lowercase ${
            videoOk ? 'text-sm' : 'text-base'
          }`}
        >
          {message}
          <span className="loading-dots" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
