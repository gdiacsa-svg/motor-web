'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 100, prefix: '+', suffix: '',    label: 'Obras ejecutadas',    sub: 'y contando' },
  { end: 32,  prefix: '',  suffix: '',    label: 'Años de experiencia', sub: 'Desde 1994' },
  { end: 9,   prefix: '',  suffix: '',    label: 'Estados de cobertura', sub: 'República Mexicana' },
  { end: 240, prefix: '',  suffix: ' kW', label: 'Mayor instalación',   sub: 'Altamira, Tamaulipas' },
];

const DURATION = 2000;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function Counters() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasRun = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          const progress = easeOutCubic(t);
          setCounts(stats.map(s => Math.round(s.end * progress)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="counts" aria-label="Estadísticas de impacto" ref={sectionRef}>
      <div className="wrap">
        <div className="cnt-grid">
          {stats.map((s, i) => (
            <div key={s.label} className="cnt-item">
              <div className="cnt-num">
                {s.prefix}{counts[i]}
                {s.suffix && <span className="cnt-suf">{s.suffix}</span>}
              </div>
              <p className="cnt-lbl">{s.label}</p>
              <p className="cnt-sub">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
