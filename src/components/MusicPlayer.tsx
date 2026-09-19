import { useEffect, useRef, useState } from 'react';
import { translations, type Lang } from '../i18n/translations';

/** Music box waltz sintetizado con WebAudio (sin asset externo, respeta autoplay policy). */
const NOTES = [523.25, 587.33, 659.25, 783.99, 880, 783.99, 659.25, 587.33, 523.25, 659.25, 783.99, 1046.5];

export default function MusicPlayer({ lang }: { lang: Lang }) {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const t = translations[lang];

  const stop = () => {
    setPlaying(false);
    if (timerRef.current) window.clearInterval(timerRef.current);
    ctxRef.current?.close().catch(() => undefined);
    ctxRef.current = null;
  };

  const play = () => {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    ctxRef.current = ctx;
    const master = ctx.createGain();
    master.gain.value = 0.16;
    master.connect(ctx.destination);
    let i = 0;
    const tick = () => {
      const f = NOTES[i % NOTES.length];
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = f;
      g.gain.setValueAtTime(0, ctx.currentTime);
      g.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.03);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.1);
      o.connect(g); g.connect(master);
      o.start(); o.stop(ctx.currentTime + 1.2);
      i++;
    };
    tick();
    timerRef.current = window.setInterval(tick, 620);
    setPlaying(true);
  };

  useEffect(() => () => { if (timerRef.current) window.clearInterval(timerRef.current); ctxRef.current?.close().catch(() => undefined); }, []);

  return (
    <div className="chip" role="group" aria-label="music">
      <span className={`music-bars ${playing ? 'playing' : ''}`} aria-hidden="true"><i /><i /><i /></span>
      <button onClick={() => (playing ? stop() : play())} aria-pressed={playing} aria-label={playing ? t.musicPause : t.musicPlay}>
        {playing ? '❚❚' : '▶'} {lang === 'es' ? 'Música' : 'Music'}
      </button>
    </div>
  );
}
