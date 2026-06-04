export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrap">
        <div className="ftr-top">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-mator.png"
              alt="Tecnoservicios Mator"
              className="ftr-logo"
            />
            <p className="ftr-bname">Tecnoservicios Mator S.A. de C.V.</p>
            <p className="ftr-slogan">&ldquo;Impulsamos el agua con la fuerza del sol.&rdquo;</p>
            <p className="ftr-brief">
              Av. Insurgentes Sur 700, Piso 9B, Del Valle Centro, CDMX<br />
              ventas@grupomator.mx &nbsp;·&nbsp; 55 7933 1009
            </p>
          </div>

          <div className="ftr-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#cobertura">Cobertura</a></li>
              <li><a href="#metodologia">Metodología</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="ftr-col">
            <h4>Contacto</h4>
            <p>55 7933 1009</p>
            <p>55 2971 2799</p>
            <p>55 7217 2109</p>
            <p style={{ marginTop: '0.6rem' }}>ventas@grupomator.mx</p>
          </div>
        </div>

        <div className="ftr-bot">
          <p className="ftr-copy">
            © 2026 Tecnoservicios Mator S.A. de C.V. Todos los derechos reservados.
          </p>
          <p className="ftr-rfc">RFC: TMA211808UC4</p>
        </div>
      </div>
    </footer>
  );
}
