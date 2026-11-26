import { invitationData } from './data/invitationData';

/** Audio único de la invitación. Se inicia desde un toque del usuario (el sobre) para cumplir la política de autoplay. */
let audio: HTMLAudioElement | null = null;
let failed = false;
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

function ensure(): HTMLAudioElement | null {
  const src = invitationData.music;
  if (!src || failed) return null;
  if (!audio) {
    audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.7;
    audio.addEventListener('play', notify);
    audio.addEventListener('pause', notify);
    audio.addEventListener('error', () => { failed = true; audio = null; notify(); });
  }
  return audio;
}

export const hasMusicFile = () => Boolean(invitationData.music) && !failed;
export const isMusicPlaying = () => Boolean(audio && !audio.paused);
export const subscribeMusic = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn); }; };
export const startMusic = () => { ensure()?.play().catch(() => undefined); };
export const stopMusic = () => { audio?.pause(); };
