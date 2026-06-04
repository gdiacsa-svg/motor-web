const stats = [
  { value: '+100',  unit: '',    label: 'Obras ejecutadas',     sub: 'y contando' },
  { value: '32',    unit: '',    label: 'Años de experiencia',  sub: 'Desde 1994' },
  { value: '9',     unit: '',    label: 'Estados de cobertura', sub: 'República Mexicana' },
  { value: '240',   unit: ' kW', label: 'Mayor instalación',    sub: 'Altamira, Tamaulipas' },
];

export default function Counters() {
  return (
    <section id="counts" aria-label="Estadísticas de impacto">
      <div className="wrap">
        <div className="cnt-grid">
          {stats.map((s) => (
            <div key={s.label} className="cnt-item">
              <div className="cnt-num">
                {s.value}
                {s.unit && <span className="cnt-suf">{s.unit}</span>}
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
