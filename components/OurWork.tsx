'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

const VIDEOS = ['/video1.mp4', '/video2.mp4'];
const GALLERY = Array.from({ length: 15 }, (_, i) => `/carrusel${i + 16}.jpeg`);
const GAL_INTERVAL = 3000;
const COLS = 3;

function ArrowPrev({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button className="ow-arrow ow-arrow--prev" onClick={onClick} aria-label={label}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
  );
}

function ArrowNext({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button className="ow-arrow ow-arrow--next" onClick={onClick} aria-label={label}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  );
}

export default function OurWork() {
  const [vidIdx, setVidIdx] = useState(0);
  const [galIdx, setGalIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setGalIdx(i => (i + 1) % GALLERY.length), GAL_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const prevVid  = () => setVidIdx(i => (i - 1 + VIDEOS.length) % VIDEOS.length);
  const nextVid  = () => setVidIdx(i => (i + 1) % VIDEOS.length);
  const prevGal  = () => { setGalIdx(i => (i - 1 + GALLERY.length) % GALLERY.length); resetTimer(); };
  const nextGal  = () => { setGalIdx(i => (i + 1) % GALLERY.length); resetTimer(); };
  const goGal    = (i: number) => { setGalIdx(i); resetTimer(); };

  const visible = Array.from({ length: COLS }, (_, j) => ({
    src: GALLERY[(galIdx + j) % GALLERY.length],
    key: `${galIdx}-${j}`,
  }));

  return (
    <section id="nuestro-trabajo">

      {/* ── Parte 1: Videos ── */}
      <div className="ow-vid-section">
        <div className="wrap">
          <p className="label r">Nuestro trabajo</p>
          <h2 className="title r">
            NUESTRO TRABAJO <span className="hi">EN ACCIÓN</span>
          </h2>
          <p className="ow-sub r d2">
            Conoce de cerca cómo instalamos sistemas fotovoltaicos de alta calidad
          </p>

          <div className="ow-vid-box r d3">
            <ArrowPrev onClick={prevVid} label="Video anterior" />
            <video
              key={VIDEOS[vidIdx]}
              src={VIDEOS[vidIdx]}
              controls
              muted
              poster="/c1.jpeg"
              className="ow-video"
            />
            <ArrowNext onClick={nextVid} label="Video siguiente" />
          </div>

          <div className="ow-dots" role="tablist" aria-label="Seleccionar video">
            {VIDEOS.map((_, i) => (
              <button
                key={i}
                className={`ow-dot${i === vidIdx ? ' active' : ''}`}
                onClick={() => setVidIdx(i)}
                role="tab"
                aria-selected={i === vidIdx}
                aria-label={`Video ${i + 1} de ${VIDEOS.length}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Parte 2: Galería ── */}
      <div className="ow-gal-section">
        <div className="wrap">
          <p className="label r">Galería</p>
          <h2 className="title r">
            GALERÍA DE <span className="hg">PROYECTOS</span>
          </h2>

          <div className="ow-gal-box r d2">
            <ArrowPrev onClick={prevGal} label="Imagen anterior" />
            <div className="ow-gal-track">
              {visible.map(({ src, key }) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img key={key} src={src} alt="" className="ow-gal-img" />
              ))}
            </div>
            <ArrowNext onClick={nextGal} label="Imagen siguiente" />
          </div>

          <div className="ow-dots" role="tablist" aria-label="Seleccionar imagen">
            {GALLERY.map((_, i) => (
              <button
                key={i}
                className={`ow-dot${i === galIdx ? ' active' : ''}`}
                onClick={() => goGal(i)}
                role="tab"
                aria-selected={i === galIdx}
                aria-label={`Imagen ${i + 1} de ${GALLERY.length}`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
