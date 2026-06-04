'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);
  const toggle = () => setOpen(prev => !prev);

  return (
    <>
      <header id="hdr" className={solid ? 'solid' : ''}>
        <div className="wrap">
          <div className="hdr-inner">

            {/* LEFT — logo */}
            <a href="#hero" aria-label="Tecnoservicios Mator — Inicio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-mator.png"
                alt="Tecnoservicios Mator S.A. de C.V."
                className="logo-img"
              />
            </a>

            {/* RIGHT — nav links (desktop) + hamburger (mobile) */}
            <nav className="nav" aria-label="Navegación principal">
              <a href="#hero">Inicio</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#servicios">Servicios</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#cobertura">Cobertura</a>
              <a href="#contacto" className="cta">Contacto</a>
            </nav>

            <button
              className={`burger${open ? ' x' : ''}`}
              onClick={toggle}
              aria-label="Abrir menú"
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>

          </div>
        </div>
      </header>

      <nav id="mnav" className={open ? 'open' : ''} aria-label="Menú móvil">
        <a href="#hero"         onClick={close}>Inicio</a>
        <a href="#nosotros"     onClick={close}>Nosotros</a>
        <a href="#servicios"    onClick={close}>Servicios</a>
        <a href="#proyectos"    onClick={close}>Proyectos</a>
        <a href="#cobertura"    onClick={close}>Cobertura</a>
        <a href="#metodologia"  onClick={close}>Metodología</a>
        <a href="#contacto"     onClick={close}>Contacto</a>
      </nav>
    </>
  );
}
