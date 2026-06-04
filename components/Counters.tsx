'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 100, prefix: '+', suffix: '',    label: 'Obras ejecutadas',    sub: 'y contando' },
  { end: 32,  prefix: '',  suffix: '',    label: 'Años de experiencia', sub: 'Desde 1994' },
  { end: 9,   prefix: '',  suffix: '',    label: 'Estados de cobertura', sub: 'República Mexicana' },
  { end: 240, prefix: '',  suffix: ' kW', label: 'Mayor instalación',   sub: 'Altamira, Tamaulipas' },
];

const DURATION = 2000;

export default function Counters() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const hasRun = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        observer.disconnect();

        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / DURATION, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setCounts(stats.map(s => Math.min(Math.floor(eased * s.end), s.end)));

          if (progress < 1) {
            rafRef.current = requestAnimationFrame(animate);
          } else {
            setCounts(stats.map(s => s.end));
          }
        };

        rafRef.current = requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
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
