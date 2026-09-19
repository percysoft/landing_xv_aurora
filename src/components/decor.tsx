import React, { useMemo } from 'react';

export function GoldenParticles({ count = 18, id = 'g' }: { count?: number; id?: string }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 53 + 7) % 100}%`,
        bottom: `${(i * 29) % 60}%`,
        size: 4 + ((i * 7) % 8),
        dur: `${5 + ((i * 13) % 7)}s`,
        delay: `${(i * 0.7) % 5}s`,
      })),
    [count]
  );
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return null;
  return (
    <div className="p-layer" aria-hidden="true">
      {items.map((p, i) => (
        <span key={`${id}-${i}`} className="p" style={{ left: p.left, bottom: p.bottom, width: p.size, height: p.size, animationDuration: p.dur, animationDelay: p.delay }} />
      ))}
    </div>
  );
}

export function Sparkles({ count = 6 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${10 + ((i * 37) % 80)}%`,
        top: `${8 + ((i * 23) % 80)}%`,
        delay: `${(i * 0.5) % 2.5}s`,
      })),
    [count]
  );
  return (
    <div className="p-layer" aria-hidden="true">
      {items.map((s, i) => (
        <span key={i} className="sparkle" style={{ left: s.left, top: s.top, animationDelay: s.delay }} />
      ))}
    </div>
  );
}

export function Petals({ count = 8 }: { count?: number }) {
  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return null;
  return (
    <div className="p-layer" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="petal" style={{ left: `${(i * 41 + 5) % 100}%`, animationDuration: `${9 + (i % 5)}s`, animationDelay: `${i * 1.1}s` }} />
      ))}
    </div>
  );
}

const paths = [
  'M0,0 C18,-22 44,-22 62,0 C44,22 18,22 0,0 Z',
  'M0,0 C14,-18 36,-18 50,0 C36,18 14,18 0,0 Z',
];

export function Butterfly({ x = '10%', y = '20%', d = '9s', emoji = '🦋', label = 'mariposa' }: { x?: string; y?: string; d?: string; emoji?: string; label?: string }) {
  return (
    <span className="butterfly" role="img" aria-label={label} style={{ left: x, top: y, ['--d' as string]: d }}>
      {emoji}
    </span>
  );
}
export function ButterflyField() {
  return (
    <div className="p-layer" aria-hidden="true">
      <Butterfly x="8%" y="18%" d="9s" emoji="🦋" />
      <Butterfly x="82%" y="28%" d="11s" emoji="🦋" />
      <Butterfly x="70%" y="62%" d="10s" emoji="🦋" />
      <Butterfly x="12%" y="68%" d="12s" emoji="🦋" />
    </div>
  );
}

export function GoldenOrnament({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 200 24" width="180" height="22" aria-hidden="true" style={{ transform: flip ? 'scaleX(-1)' : undefined, margin: '0 auto' }}>
      <g stroke="#c9a24b" fill="none" strokeWidth="1.2" opacity="0.9">
        <path d="M0 12 H70 M130 12 H200" strokeLinecap="round" />
        <circle cx="100" cy="12" r="4" fill="#c9a24b" />
        <path d="M84 12 c4-6 10-6 14 0 c-4 6-10 6-14 0 Z M102 12 c4-6 10-6 14 0 c-4 6-10 6-14 0 Z" />
        <circle cx="70" cy="12" r="2.5" /><circle cx="130" cy="12" r="2.5" />
      </g>
    </svg>
  );
}

export function FlowerCorner({ position = 'tl' }: { position?: 'tl' | 'tr' | 'bl' | 'br' }) {
  const map: Record<string, React.CSSProperties> = {
    tl: { left: 6, top: 6 }, tr: { right: 6, top: 6 }, bl: { left: 6, bottom: 6 }, br: { right: 6, bottom: 6 },
  };
  return (
    <svg viewBox="0 0 120 120" width="96" height="96" aria-hidden="true" style={{ position: 'absolute', ...map[position], opacity: 0.9 }}>
      <g>
        <circle cx="38" cy="42" r="16" fill="#f3c6d3" /><circle cx="58" cy="34" r="13" fill="#f9e3e3" />
        <circle cx="62" cy="54" r="15" fill="#e79fb2" /><circle cx="42" cy="60" r="12" fill="#f6e8d7" />
        <circle cx="50" cy="47" r="7" fill="#c9a24b" />
        <path d="M20 90 Q50 70 90 84" stroke="#8a9a6b" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="66" cy="76" rx="10" ry="5" fill="#a9bd8f" transform="rotate(-20 66 76)" />
      </g>
    </svg>
  );
}

export function Castle({ size = 150 }: { size?: number }) {
  return (
    <svg viewBox="0 0 220 150" width={size} height={size * 0.68} role="img" aria-label="Castillo de cuento de hadas">
      <g>
        <rect x="70" y="60" width="80" height="70" rx="4" fill="#f6dfd8" stroke="#c9a24b" strokeWidth="2" />
        <rect x="30" y="80" width="34" height="50" rx="3" fill="#f9e9dc" stroke="#c9a24b" strokeWidth="2" />
        <rect x="156" y="80" width="34" height="50" rx="3" fill="#f9e9dc" stroke="#c9a24b" strokeWidth="2" />
        <polygon points="30,80 47,50 64,80" fill="#e8a9bc" stroke="#c9a24b" strokeWidth="2" />
        <polygon points="156,80 173,50 190,80" fill="#e8a9bc" stroke="#c9a24b" strokeWidth="2" />
        <rect x="92" y="30" width="36" height="60" rx="3" fill="#fdf3e7" stroke="#c9a24b" strokeWidth="2" />
        <polygon points="88,32 110,6 132,32" fill="#d98aa3" stroke="#c9a24b" strokeWidth="2" />
        <rect x="102" y="96" width="16" height="34" rx="8" fill="#8a6a2b" />
        <circle cx="110" cy="22" r="4" fill="#e6c988"><animate attributeName="opacity" values="1;.3;1" dur="2.5s" repeatCount="indefinite" /></circle>
        <rect x="80" y="78" width="12" height="16" rx="6" fill="#b7cbe0" /><rect x="128" y="78" width="12" height="16" rx="6" fill="#b7cbe0" />
        <text x="110" y="118" textAnchor="middle" fontSize="22">👑</text>
      </g>
    </svg>
  );
}

export function Carriage({ size = 120 }: { size?: number }) {
  return (
    <svg viewBox="0 0 160 100" width={size} height={size * 0.62} role="img" aria-label="Carruaje real">
      <g stroke="#8a6a2b" strokeWidth="2" fill="#fbe9c9">
        <ellipse cx="80" cy="52" rx="34" ry="26" fill="#fdf0d8" />
        <circle cx="40" cy="78" r="14" fill="none" strokeWidth="2.5" /><circle cx="120" cy="78" r="14" fill="none" strokeWidth="2.5" />
        <path d="M60 30 Q80 8 100 30" fill="none" stroke="#c9a24b" />
        <text x="80" y="62" textAnchor="middle" fontSize="26">🎃</text>
      </g>
    </svg>
  );
}

export function PrincessSilhouette() {
  return (
    <svg viewBox="0 0 200 260" width="100%" height="100%" role="img" aria-label="Silueta de princesa dorada" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f7e6bd" /><stop offset=".5" stopColor="#c9a24b" /><stop offset="1" stopColor="#8a6a2b" /></linearGradient>
      </defs>
      <g fill="url(#pg)">
        <circle cx="100" cy="52" r="18" opacity="0.95" />
        <path d="M84 38 L88 24 L94 34 L100 20 L106 34 L112 24 L116 38 Z" />
        <path d="M100 72 C86 78 80 96 84 118 L70 200 Q100 216 130 200 L116 118 C120 96 114 78 100 72 Z" opacity="0.92" />
        <path d="M70 200 Q100 190 130 200 L138 230 Q100 244 62 230 Z" opacity="0.85" />
        <circle cx="70" cy="150" r="4" fill="#fff" opacity=".9" /><circle cx="132" cy="170" r="3" fill="#fff" opacity=".9" />
      </g>
      <g fontSize="16"><text x="52" y="150">🌹</text><text x="136" y="130">🌹</text><text x="100" y="240">✨</text></g>
    </svg>
  );
}

export function FairyCharacter({ tone = 'rosa', emoji = '🧚' }: { tone?: string; emoji?: string }) {
  return (
    <span className="fairy" role="img" aria-label={`hada ${tone}`} title={`hada ${tone}`} style={{ filter: tone === 'verde' ? 'hue-rotate(80deg)' : undefined }}>
      {emoji}
    </span>
  );
}

export function RoyalFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="royal-frame" role="img" aria-label={label}>
      <div className="inner">{children}</div>
    </div>
  );
}

export function WaxSeal() {
  return (
    <svg viewBox="0 0 80 80" width="74" height="74" aria-hidden="true">
      <path d="M40 4 C55 4 68 10 70 24 C76 36 72 56 60 64 C52 76 28 76 20 64 C8 56 4 36 10 24 C12 10 25 4 40 4 Z" fill="#a63a52" stroke="#7c2236" strokeWidth="2" />
      <path d="M40 12 C50 12 60 16 61 25 C65 33 62 46 55 51 C50 59 30 59 25 51 C18 46 15 33 19 25 C20 16 30 12 40 12 Z" fill="#c2546e" opacity=".9" />
      <text x="40" y="48" textAnchor="middle" fontSize="26" fill="#f9e3e3" fontFamily="serif">C</text>
    </svg>
  );
}

export { paths };
