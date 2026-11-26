import { useEffect, useState } from 'react';
import { Castle, GoldenParticles, Sparkles, WaxSeal } from './decor';
import { invitationData } from '../data/invitationData';
import { translations, type Lang } from '../i18n/translations';

type Stage = 'closed' | 'tap' | 'seal-glow' | 'seal-off' | 'flap' | 'letter' | 'zoom';

export default function OpeningEnvelope({ lang, onOpened }: { lang: Lang; onOpened: () => void }) {
  const [stage, setStage] = useState<Stage>('closed');
  const t = translations[lang];

  useEffect(() => {
    if (stage === 'closed') return;
    const seq: Stage[] = ['tap', 'seal-glow', 'seal-off', 'flap', 'letter', 'zoom'];
    const idx = seq.indexOf(stage);
    if (idx === -1) return;
    if (stage === 'zoom') {
      const id = setTimeout(() => {
        document.querySelector('.cinematic-veil')?.classList.add('on');
        setTimeout(onOpened, 900);
      }, 1100);
      return () => clearTimeout(id);
    }
    const delays = [350, 650, 650, 950, 1250, 1100];
    const id = setTimeout(() => setStage(seq[idx + 1]), delays[idx]);
    return () => clearTimeout(id);
  }, [stage, onOpened]);

  const opening = stage !== 'closed';

  return (
    <div className="envelope-stage">
      <GoldenParticles count={20} id="env" />
      <Sparkles count={7} />
      <div className="castle-halo" aria-hidden="true">
        <Castle size={168} />
      </div>
      <div style={{ textAlign: 'center', zIndex: 2, marginTop: '7.5rem' }}>
        <p className="kicker">✦ {lang === 'es' ? 'Una invitación real' : 'A royal invitation'} ✦</p>
        <div
          className="envelope"
          data-stage={stage}
          role="button"
          tabIndex={0}
          aria-label={opening ? t.opening : t.tapToOpen}
          onClick={() => stage === 'closed' && setStage('tap')}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && stage === 'closed' && setStage('tap')}
        >
          <div className="env-back" />
          <div className="env-body" />
          <div className="env-letter" aria-hidden="true">
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '.65rem', letterSpacing: '.3em', color: 'var(--color-gold-deep)' }}>MIS XV AÑOS</div>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: '3rem', color: '#a44e6b', lineHeight: 1 }}>{invitationData.name}</div>
              <div style={{ fontFamily: 'var(--font-serif)', letterSpacing: '.2em' }}>{t.heroDate}</div>
            </div>
          </div>
          <div className="env-front" />
          <div className="env-flap" />
          <div className="wax" aria-hidden="true"><WaxSeal /></div>
        </div>
        <p className="lead" style={{ marginTop: '1.2rem' }} aria-live="polite">{opening ? t.opening : t.tapToOpen}</p>
      </div>
      <div className="cinematic-veil" aria-hidden="true" />
    </div>
  );
}
