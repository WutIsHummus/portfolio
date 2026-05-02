import { useEffect, useMemo, useRef, useState } from 'react';
import { LOADING } from '../data/portfolio.js';

export default function LoadingScreen({ onDone }) {
  const [hidden, setHidden] = useState(false);
  const [videoOk, setVideoOk] = useState(true);
  const startedAt = useRef(performance.now());
  const videoRef = useRef(null);

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

  // iOS Safari autoplay belt-and-suspenders: set muted as a DOM property
  // (some Safari versions ignore the attribute alone), set legacy
  // webkit-playsinline, and call play() directly. Falls back gracefully.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute('webkit-playsinline', '');
    v.setAttribute('playsinline', '');
    const tryPlay = () => v.play().catch(() => setVideoOk(false));
    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener('loadedmetadata', tryPlay, { once: true });
    }
  }, []);

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
            ref={videoRef}
            src={LOADING.src.replace(/\.webm$/, '.mp4')}
            autoPlay
            loop
            muted
            defaultMuted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            onError={() => setVideoOk(false)}
            className="w-[160px] h-[160px] object-contain pointer-events-none character-video"
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
