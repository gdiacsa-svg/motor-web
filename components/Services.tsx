
const services = [
  {
    photo: '/panels-detail.png',
    photoAlt: 'Detalle de paneles fotovoltaicos instalados',
    title: 'Sistemas Fotovoltaicos',
    desc: 'Diseño e instalación de plantas solares residenciales, comerciales e industriales. Desde 1 kW hasta megaproyectos con tecnología de última generación.',
    delay: '',
    icon: (
      <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="9" width="20" height="12" rx="2"/><path d="M7 9V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><line x1="12" y1="13" x2="12" y2="17"/><line x1="8" y1="15" x2="16" y2="15"/>
      </svg>
    ),
  },
  {
    photo: '/installation.png',
    photoAlt: 'Instalación de sistema de riego solar en campo',
    title: 'Obras Hidráulicas y Riego',
    desc: 'Sistemas de riego tecnificado, redes de conducción hídrica e infraestructura hidráulica para productores agrícolas y dependencias de gobierno.',
    delay: 'd1',
    icon: (
      <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2c0 6-8 8-8 14a8 8 0 0 0 16 0c0-6-8-8-8-14z"/><line x1="12" y1="12" x2="12" y2="17"/><line x1="10" y1="17" x2="14" y2="17"/>
      </svg>
    ),
  },
  {
    photo: '/inverter.png',
    photoAlt: 'Inversor solar instalado en proyecto de infraestructura',
    title: 'Infraestructura Carretera y Eléctrica',
    desc: 'Proyectos de obra civil para redes eléctricas, alumbrado público solar y mantenimiento de infraestructura carretera bajo contratos gubernamentales.',
    delay: 'd2',
    icon: (
      <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    photo: '/battery-system.png',
    photoAlt: 'Sistema de baterías de litio para energía residencial',
    title: 'Energía Solar Residencial e Industrial',
    desc: 'Sistemas con baterías de litio para independencia energética total. Instalaciones aisladas o conectadas a red para hogares, conjuntos y parques industriales.',
    delay: '',
    icon: (
      <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    photo: '/industrial-roof2.png',
    photoAlt: 'Instalación de paneles en techo industrial para bombeo',
    title: 'Bombeo Solar Agrícola',
    desc: 'Extracción de agua con bombas de hasta 10 HP alimentadas 100 % por energía solar. Eliminación total del costo en diésel y electricidad para el campo.',
    delay: 'd1',
    icon: (
      <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><line x1="7" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="17" y2="12"/>
      </svg>
    ),
  },
  {
    photo: '/gestorysupervicion.png',
    photoAlt: 'Gestión y supervisión de obra de energía solar',
    title: 'Gestión y Supervisión de Obra',
    desc: 'Control de calidad, supervisión técnica y gestión integral de proyectos de obra pública y privada con cumplimiento estricto de normativas y plazos contractuales.',
    delay: 'd2',
    icon: (
      <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios">
      <div className="wrap">
        <p className="label r">Lo que hacemos</p>
        <h2 className="title r d1">
          Nuestros <span className="hi">servicios</span>
        </h2>

        <div className="svc-grid">
          {services.map((svc) => (
            <div key={svc.title} className={`svc r${svc.delay ? ` ${svc.delay}` : ''}`}>
              <div className="svc-photo">
                <img
                  src={svc.photo}
                  alt={svc.photoAlt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {svc.icon}
              <h3>{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
