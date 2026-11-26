/** Mariposas rosadas y doradas que vuelan por toda la página (capa fija, no bloquea toques). */
const COLORS: [string, string][] = [
  ['#f4a6c0', '#c9a24b'], ['#e8c26a', '#e07a9f'], ['#fbd0de', '#c9a24b'], ['#d9779f', '#f0d58a'],
];
const FLIGHTS = Array.from({ length: 14 }, (_, i) => ({
  size: 32 + ((i * 7) % 5) * 9,
  top: 4 + ((i * 37) % 88),
  dur: 17 + ((i * 5) % 11),
  delay: -((i * 3.7) % 20),
  rev: i % 3 === 0,
  sway: 40 + ((i * 13) % 70),
  c: COLORS[i % COLORS.length],
}));

function Wing({ a, b, id }: { a: string; b: string; id: string }) {
  return (
    <svg viewBox="0 0 60 50" width="100%" height="100%">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient>
      </defs>
      <g className="bf-wings">
        <path d="M30 24 C22 4 4 2 3 14 C2 26 16 30 30 26 Z" fill={`url(#${id})`} stroke={b} strokeWidth=".8" />
        <path d="M30 26 C20 30 8 36 14 45 C21 50 29 38 30 27 Z" fill={`url(#${id})`} opacity=".9" stroke={b} strokeWidth=".8" />
        <path d="M30 24 C38 4 56 2 57 14 C58 26 44 30 30 26 Z" fill={`url(#${id})`} stroke={b} strokeWidth=".8" />
        <path d="M30 26 C40 30 52 36 46 45 C39 50 31 38 30 27 Z" fill={`url(#${id})`} opacity=".9" stroke={b} strokeWidth=".8" />
        <circle cx="14" cy="14" r="3" fill="#fff" opacity=".55" /><circle cx="46" cy="14" r="3" fill="#fff" opacity=".55" />
      </g>
      <rect x="29" y="16" width="2" height="22" rx="1" fill="#8a6a2b" />
    </svg>
  );
}

export default function ButterflyOverlay() {
  return (
    <div className="bf-overlay" aria-hidden="true">
      {FLIGHTS.map((f, i) => (
        <div
          key={i}
          className={`bf ${f.rev ? 'rev' : ''}`}
          style={{ top: `${f.top}%`, width: f.size, height: f.size, animationDuration: `${f.dur}s`, animationDelay: `${f.delay}s`, ['--sway' as string]: `${f.sway}px` }}
        >
          <div className="bf-bob" style={{ animationDuration: `${3 + (i % 4)}s` }}>
            <Wing a={f.c[0]} b={f.c[1]} id={`bfg${i}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
