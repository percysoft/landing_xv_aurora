import { useState } from 'react';
import { invitationData, whatsappLink, whatsappLinkWith } from '../data/invitationData';
import { translations, type Lang } from '../i18n/translations';
import { useCountdown, useParallax, useReveal } from '../hooks/hooks';
import { ButterflyField, Carriage, Castle, FairyCharacter, FlowerCorner, GoldenOrnament, GoldenParticles, Petals, PrincessSilhouette, RoyalFrame, Sparkles } from './decor';

const ico = (e: string) => (invitationData.elegant ? '' : e);

const BowTie = () => (
  <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" className="dress-ico">
    <path d="M6 20 L27 32 L6 44 Z" /><path d="M58 20 L37 32 L58 44 Z" /><rect x="26" y="26" width="12" height="12" rx="3" />
  </svg>
);
const DressIco = () => (
  <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" className="dress-ico">
    <path d="M24 6 L29 6 L32 14 L35 6 L40 6 L38 26 L52 58 L12 58 L26 26 Z" />
  </svg>
);

function RsvpForm({ lang }: { lang: Lang }) {
  const es = lang === 'es';
  const [name, setName] = useState('');
  const [attend, setAttend] = useState<'si' | 'no'>('si');
  const [num, setNum] = useState(1);
  const [err, setErr] = useState(false);
  const L = es
    ? { name: 'Tu nombre y apellido', ph: 'Ej. María Pérez', att: '¿Podrás asistir?', yes: '¡Sí, ahí estaré!', no: 'No podré asistir', num: '¿Cuántas personas asistirán? (contándote)', send: 'Enviar confirmación por WhatsApp', req: 'Escribe tu nombre para continuar.' }
    : { name: 'Your full name', ph: 'e.g. Maria Perez', att: 'Will you attend?', yes: 'Yes, I will be there!', no: 'I cannot attend', num: 'How many people will attend? (including you)', send: 'Send confirmation via WhatsApp', req: 'Please enter your name.' };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setErr(true); return; }
    const who = invitationData.name;
    const msg = attend === 'si'
      ? (es ? `Hola, soy ${name.trim()}. ¡Confirmo mi asistencia a los XV años de ${who}! Asistiremos ${num} ${num === 1 ? 'persona' : 'personas'}. ✨`
            : `Hello, I'm ${name.trim()}. I confirm my attendance to ${who}'s Quinceañera! ${num} ${num === 1 ? 'person' : 'people'} will attend. ✨`)
      : (es ? `Hola, soy ${name.trim()}. Lamentablemente no podré asistir a los XV años de ${who}, ¡les deseo una noche hermosa! 💕`
            : `Hello, I'm ${name.trim()}. Unfortunately I cannot attend ${who}'s Quinceañera. I wish you a beautiful night! 💕`);
    window.open(whatsappLinkWith(msg), '_blank', 'noopener,noreferrer');
  };
  return (
    <form className="rsvp-form" onSubmit={submit} noValidate>
      <label>{L.name}
        <input value={name} onChange={(e) => { setName(e.target.value); setErr(false); }} placeholder={L.ph} autoComplete="name" aria-invalid={err} />
      </label>
      {err && <p className="rsvp-err" role="alert">{L.req}</p>}
      <label>{L.att}
        <select value={attend} onChange={(e) => setAttend(e.target.value as 'si' | 'no')}>
          <option value="si">{L.yes}</option><option value="no">{L.no}</option>
        </select>
      </label>
      {attend === 'si' && (
        <label>{L.num}
          <input type="number" min={1} max={10} inputMode="numeric" value={num} onChange={(e) => setNum(Math.min(10, Math.max(1, Number(e.target.value) || 1)))} />
        </label>
      )}
      <button type="submit" className="btn-lux">{L.send}</button>
    </form>
  );
}

function Wrap({ children, id }: { children: React.ReactNode; id: string }) {
  const { ref, visible } = useReveal<HTMLElement>(0.15);
  return (
    <section id={id} ref={ref} className={`block reveal ${visible ? 'is-visible' : ''}`}>
      {children}
    </section>
  );
}

export function HeroSection({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const px = useParallax(0.08);
  return (
    <Wrap id="hero">
      <div ref={px} className="px-layer" style={{ position: 'relative' }}>
        <GoldenParticles count={14} id="hero" />
        <ButterflyField />
        <FlowerCorner position="tl" /><FlowerCorner position="tr" />
        <p className="kicker">{t.heroKicker}</p>
        <h1 className="script name-legible" style={{ fontSize: 'clamp(4.5rem,18vw,7.5rem)', margin: '.2em 0 0' }}>{invitationData.name}</h1>
        <GoldenOrnament />
        <div className="hero-portrait-wrapper">
          <img src={invitationData.heroImage ?? '/aurora.jpg'} alt={invitationData.name} className="hero-portrait" />
        </div>
        <p className="serif-title" style={{ letterSpacing: '.3em', fontSize: '.95rem' }}>{t.heroDate}</p>
        <p className="lead">{invitationData.tagline[lang]}</p>
        <p style={{ fontSize: '.8rem', letterSpacing: '.2em', textTransform: 'uppercase', opacity: .7 }}>↓ {t.heroScroll}</p>
      </div>
    </Wrap>
  );
}

export function PrincessSection({ lang }: { lang: Lang }) {
  const t = translations[lang];
  return (
    <Wrap id="princesa">
      <Sparkles count={8} />
      <p className="kicker">{t.princessKicker}</p>
      <h2 className="serif-title" style={{ fontSize: '2rem', margin: '.3em 0' }}>{t.princessTitle}</h2>
      <div style={{ maxWidth: 300, margin: '0 auto' }}>
        <RoyalFrame label={`Princesa ${invitationData.name} en marco ovalado dorado`}>
          {invitationData.frameImage ? <img src={invitationData.frameImage} alt={invitationData.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <PrincessSilhouette />}
        </RoyalFrame>
      </div>
      <p className="lead" style={{ marginTop: '1.2rem' }}>{t.princessText}</p>
      <div className="divider">✦</div>
    </Wrap>
  );
}

export function ParchmentSection({ lang }: { lang: Lang }) {
  const t = translations[lang];
  return (
    <Wrap id="pergamino">
      <div className="parchment" style={{ maxWidth: 440, margin: '0 auto' }}>
        <FlowerCorner position="tl" /><FlowerCorner position="br" />
        <div className="fairies" aria-hidden="true">
          <FairyCharacter tone="verde" emoji="🧚‍♀️" /><FairyCharacter tone="rosa" emoji="🧚" />
        </div>
        <p className="kicker">{t.parchmentKicker}</p>
        <h2 className="serif-title">{t.parchmentTitle}</h2>
        <GoldenOrnament />
        <p className="lead">{t.parchmentText}</p>
      </div>
    </Wrap>
  );
}

export function DateCountdown({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const c = useCountdown(invitationData.dateISO);
  const pad = (n: number) => String(n).padStart(2, '0');
  const cells: [string, string][] = [[pad(c.days), t.days], [pad(c.hours), t.hours], [pad(c.minutes), t.minutes], [pad(c.seconds), t.seconds]];
  return (
    <Wrap id="fecha">
      <Petals count={6} />
      <p className="kicker">{lang === 'es' ? invitationData.monthES : invitationData.monthEN}</p>
      <h2 className="serif-title" style={{ fontSize: '2.2rem' }}>{lang === 'es' ? invitationData.weekdayES : invitationData.weekdayEN} · {invitationData.day} · {invitationData.year}</h2>
      <div className="divider">❧</div>
      <h3 className="serif-title" style={{ fontStyle: 'italic' }}>{t.countdownTitle}</h3>
      <div className="count-grid" role="timer" aria-label={t.countdownTitle}>
        {cells.map(([v, l]) => (<div key={l} className="count-cell"><b>{v}</b><span>{l}</span></div>))}
      </div>
    </Wrap>
  );
}

export function ParentsGodparents({ lang }: { lang: Lang }) {
  const t = translations[lang];
  return (
    <>
      {invitationData.dedication && (
        <Wrap id="dedicatoria">
          <div className="dedication">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>{invitationData.dedication[lang]}</p>
            <GoldenOrnament />
            <p className="dedication-sign">{invitationData.name}</p>
          </div>
        </Wrap>
      )}
      <Wrap id="padres">
        <p className="kicker">{t.parentsKicker}</p>
        {invitationData.elegant ? (
          <div className="parents-stack">
            {invitationData.parents[lang].map((n, k) => (
              <div key={n}>
                {k > 0 && <div className="amp" aria-hidden="true">&amp;</div>}
                <p className="parent-name">{n}</p>
              </div>
            ))}
          </div>
        ) : (
        <h2 className="script" style={{ fontSize: invitationData.parents[lang].join(' & ').length > 30 ? '2.2rem' : '3rem', margin: '.2em 0' }}>{invitationData.parents[lang].join(' & ')}</h2>
        )}
        <GoldenOrnament />
      </Wrap>
      {invitationData.godparents[lang].length > 0 && (
        <Wrap id="padrinos">
          <p className="kicker">{t.godparentsKicker}</p>
          {invitationData.elegant ? (
            <div className="parents-stack">
              {invitationData.godparents[lang].map((n, k) => (
                <div key={n}>
                  {k > 0 && <div className="amp" aria-hidden="true">&amp;</div>}
                  <p className="parent-name">{n}</p>
                </div>
              ))}
            </div>
          ) : (
            <h2 className="script" style={{ fontSize: '2.6rem', margin: '.2em 0' }}>{invitationData.godparents[lang].join(' & ')}</h2>
          )}
        </Wrap>
      )}
    </>
  );
}

export function GallerySection({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const [open, setOpen] = useState<number | null>(null);
  const photos = invitationData.photos;
  const shapes = ['arch', 'oval', 'polaroid', 'arch', 'polaroid', 'oval'];
  return (
    <Wrap id="galeria">
      <Sparkles count={8} />
      <p className="kicker">{t.galleryKicker}</p>
      <h2 className="serif-title" style={{ fontSize: '2rem' }}>{t.galleryTitle}</h2>
      <GoldenOrnament />
      {photos[0] && (
        <button className="frame frame-hero" onClick={() => setOpen(0)} aria-label={photos[0].alt}>
          <span className="gem tl" /><span className="gem tr" /><span className="gem bl" /><span className="gem br" />
          <img src={photos[0].src} alt={photos[0].alt} loading="lazy" />
        </button>
      )}
      <div className="gallery-grid">
        {photos.slice(1).map((p, i) => (
          <button key={p.src} className={`frame frame-${shapes[i % shapes.length]} tilt-${i % 3}`} onClick={() => setOpen(i + 1)} aria-label={p.alt}>
            <img src={p.src} alt={p.alt} loading="lazy" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button className="lb-close" aria-label="Cerrar">✕</button>
          <button className="lb-nav prev" aria-label="Anterior" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + photos.length) % photos.length); }}>‹</button>
          <div className="frame frame-hero lb-frame" onClick={(e) => e.stopPropagation()}>
            <img src={photos[open].src} alt={photos[open].alt} />
          </div>
          <button className="lb-nav next" aria-label="Siguiente" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % photos.length); }}>›</button>
        </div>
      )}
    </Wrap>
  );
}

export function EventsSection({ lang }: { lang: Lang }) {
  const t = translations[lang];
  return (
    <>
      {invitationData.ceremony && (
        <Wrap id="ceremonia">
          <div className="event-card">
            <h3>{ico('⛪')} {t.ceremonyTitle}</h3>
            <p className="serif-title" style={{ fontSize: '1.3rem' }}>{invitationData.ceremony.place}</p>
            <p>{invitationData.ceremony.time} · {invitationData.ceremony.address}</p>
          </div>
        </Wrap>
      )}
      <Wrap id="recepcion">
        <div className="event-card">
          <h3>{ico('📍')} {t.locationTitle}</h3>
          <p className="serif-title" style={{ fontSize: '1.3rem' }}>{invitationData.venue}</p>
          <p>{invitationData.address}</p>
          {invitationData.elegant && invitationData.reception.time && <p className="serif-title" style={{ marginTop: '.6rem' }}>A las {invitationData.reception.time}</p>}
          {invitationData.mapsUrl && <p><a className="btn-lux" href={invitationData.mapsUrl} target="_blank" rel="noopener noreferrer">{t.locationBtn}</a></p>}
        </div>
        {invitationData.mapsUrl && <div className="map-wrapper" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', border: '1px solid rgba(201,162,75,.5)', marginTop: '1rem' }}>
          <iframe
            title={t.locationTitle}
            src={`https://maps.google.com/maps?q=${new URL(invitationData.mapsUrl).searchParams.get('query') ?? ''}&output=embed`}
            style={{ width: '100%', height: '300px', border: 'none', display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>}
      </Wrap>
      <Wrap id="dresscode">
        <div className="event-card">
          <h3>{ico('👗')} {t.dressTitle}</h3>
          {invitationData.elegant && t.dressMen && (
            <div className="dress-row">
              <div className="dress-item"><BowTie /><span>{t.dressMen}</span></div>
              <div className="dress-item"><DressIco /><span>{t.dressWomen}</span></div>
            </div>
          )}
          <p className="lead">{invitationData.dressCode[lang]}</p>
        </div>
      </Wrap>
      <Wrap id="regalos">
        <div className="event-card">
          <h3>{ico('🎁')} {t.giftTitle}</h3>
          <p className="lead">{t.giftText}</p>
        </div>
      </Wrap>
      <Wrap id="confirmar">
        <div className="event-card">
          <h3>{ico('💌')} {t.confirmTitle}</h3>
          {t.confirmNote && <p className="confirm-note">{t.confirmNote}</p>}
          <p className="lead">{t.confirmText}</p>
          {invitationData.elegant ? <RsvpForm lang={lang} /> : (
            <p style={{ marginTop: '1rem' }}>
              <a className="btn-lux" href={whatsappLink(lang)} target="_blank" rel="noopener noreferrer">{'✆ '}{t.confirmBtn}</a>
            </p>
          )}
        </div>
      </Wrap>
    </>
  );
}

export function FinalSection({ lang, onReplay }: { lang: Lang; onReplay: () => void }) {
  const t = translations[lang];
  return (
    <footer className="final block" id="final">
      <GoldenParticles count={16} id="final" />
      <Castle size={130} />
      <p className="lead" style={{ marginTop: '1rem' }}>{t.finalThanks}</p>
      <div className="script name-legible" style={{ fontSize: '3.4rem' }}>{t.finalName}</div>
      <div className="kicker">{t.finalSub}</div>
      <GoldenOrnament />
      <p><button className="btn-lux" onClick={onReplay}>↻ {lang === 'es' ? 'Reviver la apertura' : 'Replay opening'}</button></p>
    </footer>
  );
}
