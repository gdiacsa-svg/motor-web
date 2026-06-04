const steps = [
  { n: '1', title: 'Diagnóstico',         desc: 'Visita técnica y levantamiento de datos en sitio',             delay: '' },
  { n: '2', title: 'Análisis Solar',       desc: 'Estudio de irradiación y consumo energético',                  delay: 'd1' },
  { n: '3', title: 'Selección de Equipos', desc: 'Dimensionamiento y propuesta técnico-económica',               delay: 'd2' },
  { n: '4', title: 'Instalación',          desc: 'Ejecución por personal certificado bajo norma vigente',        delay: 'd3' },
  { n: '5', title: 'Pruebas',              desc: 'Verificación de rendimiento y funcionamiento del sistema',     delay: '' },
  { n: '6', title: 'Entrega Técnica',      desc: 'Documentación, garantías y capacitación al cliente',          delay: 'd1' },
];

export default function Methodology() {
  return (
    <section id="metodologia">
      <div className="wrap">
        <p className="label r">Proceso de trabajo</p>
        <h2 className="title r d1">
          Nuestra <span className="hi">metodología</span>
        </h2>

        <div className="timeline">
          {steps.map((s) => (
            <div key={s.n} className={`tstep r${s.delay ? ` ${s.delay}` : ''}`}>
              <div className="tnum">{s.n}</div>
              <div>
                <p className="ttitle">{s.title}</p>
                <p className="tdesc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
