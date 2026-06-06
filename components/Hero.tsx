'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

const IMAGES = Array.from({ length: 15 }, (_, i) => `/c${i + 1}.jpeg`);
const INTERVAL = 4000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % IMAGES.length);
    }, INTERVAL);
  }, []);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    startInterval();
  }, [startInterval]);

  const goPrev = useCallback(() => {
    setCurrent(c => (c - 1 + IMAGES.length) % IMAGES.length);
    startInterval();
  }, [startInterval]);

  const goNext = useCallback(() => {
    setCurrent(c => (c + 1) % IMAGES.length);
    startInterval();
  }, [startInterval]);

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startInterval]);

  return (
    <section id="hero">

      {/* Carousel background */}
      <div className="carousel" aria-hidden="true">
        {IMAGES.map((src, i) => (
          <div
            key={src}
            className={`carousel-slide${i === current ? ' active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="carousel-overlay" />
      </div>

      {/* Arrow: Previous */}
      <button
        className="carousel-arrow carousel-arrow--prev"
        onClick={goPrev}
        aria-label="Imagen anterior"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      {/* Arrow: Next */}
      <button
        className="carousel-arrow carousel-arrow--next"
        onClick={goNext}
        aria-label="Imagen siguiente"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      {/* Hero content */}
      <div className="wrap">
        <div className="hero-c">
          <p className="hero-eye">Tecnoservicios Mator S.A. de C.V.</p>
          <h1 className="hero-h1">
            Impulsamos<br />
            el <span className="bl">agua</span><br />
            con la fuerza<br />
            del <span className="go">sol</span>
          </h1>
          <p className="hero-sub">
            Sistemas fotovoltaicos
            <span className="dot">·</span>
            Obras hidráulicas
            <span className="dot">·</span>
            Infraestructura sustentable
          </p>
          <div className="btns">
            <a href="#proyectos" className="btn-p">Ver proyectos</a>
            <a
              href="https://wa.me/525572172109?text=Hola%2C%20me%20interesa%20recibir%20información%20sobre%20sus%20servicios%20de%20energía%20solar%20e%20hidráulica.%20¿Me%20pueden%20apoyar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="20" height="20" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="carousel-dots" role="tablist" aria-label="Seleccionar imagen del carrusel">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Imagen ${i + 1} de ${IMAGES.length}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" aria-hidden="true">
        <div className="mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
