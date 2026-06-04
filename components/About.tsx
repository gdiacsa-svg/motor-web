export default function About() {
  return (
    <section id="nosotros">
      <div className="wrap">
        <p className="label r">Quiénes somos</p>
        <h2 className="title r d1">
          La empresa que <span className="hi">mueve</span> México
        </h2>

        <div className="about-grid">
          <div className="about-body r">
            <p>
              <strong>Tecnoservicios Mator S.A. de C.V.</strong> es una empresa mexicana con
              más de 30 años de trayectoria ininterrumpida en diseño, construcción y supervisión
              de obras de infraestructura, energía solar e hidráulica.
            </p>
            <p>
              Nuestra especialización abarca sistemas fotovoltaicos de gran escala, bombeo solar
              para el campo y la industria, así como proyectos de infraestructura carretera y
              eléctrica para el sector público y privado en toda la República.
            </p>
            <p>
              Contamos con unidades de transporte equipadas y personal técnico certificado, con
              capacidad operativa para movilizarnos a cualquier estado del país garantizando
              ejecución bajo los más altos estándares de calidad, seguridad industrial y
              cumplimiento normativo.
            </p>
            <div className="director">
              <p className="director-role">Director General</p>
              <p className="director-name">Ing. Ezequiel Galván Vázquez</p>
              <p>
                Más de 30 años de experiencia en ingeniería, gestión de obra pública y proyectos
                de energía renovable a escala nacional.
              </p>
            </div>
          </div>

          <div className="mv-stack r d2">
            <div className="mv">
              <p className="mv-tag">Misión</p>
              <h3>Transformar recursos naturales en infraestructura que impulse a México</h3>
              <p>
                Desarrollar soluciones de ingeniería sostenibles, técnicamente sólidas y
                financieramente competitivas para los sectores público y privado, contribuyendo
                al desarrollo nacional con responsabilidad ambiental.
              </p>
            </div>
            <div className="mv">
              <p className="mv-tag">Visión</p>
              <h3>Ser el referente nacional en energía solar e hidráulica</h3>
              <p>
                Posicionarnos como la empresa líder de México en la integración de sistemas
                fotovoltaicos con obras hidráulicas, siendo el aliado estratégico de gobiernos e
                industria en la transición energética del país.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
