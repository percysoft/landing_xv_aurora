import { useCallback, useState } from 'react';
import './index.css';
import OpeningEnvelope from './components/OpeningEnvelope';
import ButterflyOverlay from './components/ButterflyOverlay';
import MusicPlayer from './components/MusicPlayer';
import { HeroSection, PrincessSection, ParchmentSection, DateCountdown, ParentsGodparents, GallerySection, EventsSection, FinalSection } from './components/sections';
import { translations, type Lang } from './i18n/translations';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [lang, setLang] = useState<Lang>('es');
  const t = translations[lang];

  const handleOpened = useCallback(() => setOpened(true), []);
  const replay = useCallback(() => {
    setOpened(false);
    document.querySelector('.cinematic-veil')?.classList.remove('on');
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="invitation-shell">
      <a href="#hero" className="sr-only">Saltar al contenido</a>
      {opened && <ButterflyOverlay />}
      <div className="top-controls">
        {opened && <MusicPlayer lang={lang} />}
      </div>

      {!opened ? (
        <OpeningEnvelope lang={lang} onOpened={handleOpened} />
      ) : (
        <main>
          <HeroSection lang={lang} />
          <PrincessSection lang={lang} />
          <ParchmentSection lang={lang} />
          <DateCountdown lang={lang} />
          <ParentsGodparents lang={lang} />
          <GallerySection lang={lang} />
          <EventsSection lang={lang} />
          <FinalSection lang={lang} onReplay={replay} />
        </main>
      )}

      {opened && (
        <button className="back-top" aria-label={t.backTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      )}
    </div>
  );
}
