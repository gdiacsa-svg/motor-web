'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const ptsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = ptsRef.current;
    if (!c) return;
    const colors = ['#0066FF', '#FFD700', '#3385FF', '#FFFFFF', '#0066FF', '#FFD700'];
    for (let i = 0; i < 45; i++) {
      const p = document.createElement('div');
      const sz = [2, 2, 3, 3, 4, 2][i % 6];
      const col = colors[Math.floor(Math.random() * colors.length)];
      p.className = 'pt';
      p.style.cssText = `
        left:${Math.random() * 100}%;
        width:${sz}px; height:${sz}px;
        background:${col};
        box-shadow:0 0 ${sz * 2}px ${col};
        animation-duration:${8 + Math.random() * 10}s;
        animation-delay:${Math.random() * 14}s;
      `;
      c.appendChild(p);
    }
    return () => { c.innerHTML = ''; };
  }, []);

  return (
    <section id="hero">
      <div id="pts" ref={ptsRef} aria-hidden="true" />

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
            <a href="#contacto"  className="btn-s">Contáctanos</a>
          </div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <div className="mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
