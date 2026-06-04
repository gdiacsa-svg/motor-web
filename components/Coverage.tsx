const states = [
  { name: 'Tamaulipas', delay: '' },
  { name: 'Michoacán',  delay: 'd1' },
  { name: 'Veracruz',   delay: 'd2' },
  { name: 'Oaxaca',     delay: '' },
  { name: 'Chiapas',    delay: 'd1' },
  { name: 'Tabasco',    delay: 'd2' },
  { name: 'Campeche',   delay: '' },
  { name: 'Yucatán',    delay: 'd1' },
  { name: 'Quintana Roo', delay: 'd2' },
];

export default function Coverage() {
  return (
    <section id="cobertura">
      <div className="wrap">
        <p className="label r">Presencia nacional</p>
        <h2 className="title r d1">
          Cobertura <span className="hi">nacional</span>
        </h2>
        <p className="cov-intro r d2">
          Operamos en 9 estados de la República con equipos técnicos y unidades de transporte
          listos para movilizarse donde el proyecto lo requiera.
        </p>

        <div className="states">
          {states.map((s) => (
            <div key={s.name} className={`state r${s.delay ? ` ${s.delay}` : ''}`}>
              <span className="sdot" />
              <span className="sname">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
