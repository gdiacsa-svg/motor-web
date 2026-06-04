
const projects = [
  {
    src: '/industrial-roof.png',
    alt: 'Nave industrial Villacap — 400 paneles en techumbre, Altamira Tamaulipas',
    badge: '240 kW',
    loc: 'Altamira, Tamaulipas',
    title: 'Nave Industrial Villacap',
    desc: '400 paneles fotovoltaicos en techumbre industrial. El mayor proyecto ejecutado de la empresa.',
    delay: '',
  },
  {
    src: '/residential-aerial.png',
    alt: 'Proyecto residencial Santa Fe CDMX — vista aérea con paneles solares',
    badge: '42 kW',
    loc: 'Santa Fe, CDMX',
    title: 'Desarrollo Residencial',
    desc: '60 paneles con baterías de litio para sistema aislado. Autonomía energética total 24/7.',
    delay: 'd1',
  },
  {
    src: '/installation.png',
    alt: 'Instalación de sistema de riego solar en Yucatán 2022',
    badge: '12 Sistemas',
    loc: 'Yucatán — 2022',
    title: 'Sistemas de Riego Solar',
    desc: '12 sistemas de bombeo fotovoltaico para riego agrícola. Eliminación total del consumo diésel.',
    delay: 'd2',
  },
  {
    src: '/panels-detail.png',
    alt: 'Detalle de paneles en sistemas de riego Campeche 2023',
    badge: '15 Sistemas',
    loc: 'Campeche — 2023',
    title: 'Sistemas de Riego Solar',
    desc: '15 sistemas para productores rurales bajo programa de financiamiento gubernamental.',
    delay: '',
  },
  {
    src: '/industrial-roof2.png',
    alt: 'Sistemas de riego solar Quintana Roo 2024 — Riviera Maya',
    badge: '20 Sistemas',
    loc: 'Quintana Roo — 2024',
    title: 'Sistemas de Riego Solar',
    desc: '20 instalaciones para riego en la Riviera Maya. Mayor contrato de riego ejecutado a la fecha.',
    delay: 'd1',
  },
];

export default function Projects() {
  return (
    <section id="proyectos">
      <div className="wrap">
        <p className="label r">Casos de éxito</p>
        <h2 className="title r d1">
          Proyectos <span className="hi">destacados</span>
        </h2>

        <div className="prj-grid">
          {projects.map((prj) => (
            <div key={prj.loc + prj.title} className={`prj r${prj.delay ? ` ${prj.delay}` : ''}`}>
              <div className="prj-img">
                <img
                  src={prj.src}
                  alt={prj.alt}
                  className="prj-photo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="prj-badge">{prj.badge}</span>
              </div>
              <div className="prj-body">
                <p className="prj-loc">{prj.loc}</p>
                <h3>{prj.title}</h3>
                <p>{prj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
