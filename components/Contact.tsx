'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 3500);
    }, 1200);
  };

  return (
    <section id="contacto">
      <div className="wrap">
        <p className="label r">Hablemos de tu proyecto</p>
        <h2 className="title r d1">
          ¿Tienes un <span className="hi">proyecto</span>?
        </h2>

        <div className="con-grid">
          <div className="con-info r">
            <h3>Información de contacto</h3>

            <div className="cdetail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <strong>Dirección</strong>
                Av. Insurgentes Sur 700, Piso 9B<br />
                Col. Del Valle Centro, CDMX, C.P. 03100
              </div>
            </div>

            <div className="cdetail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6.29 6.29l.75-.75a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.72 17"/>
              </svg>
              <div>
                <strong>Teléfonos</strong>
                55 7933 1009 &nbsp;·&nbsp; 55 2971 2799 &nbsp;·&nbsp; 55 7217 2109
              </div>
            </div>

            <div className="cdetail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <div><strong>Correo electrónico</strong>grupomator2@gmail.com</div>
            </div>

            <div className="cdetail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>
              </svg>
              <div><strong>RFC</strong>TMA211808UC4</div>
            </div>
          </div>

          <form className="form r d2" onSubmit={handleSubmit} noValidate>
            <div className="fg">
              <label htmlFor="fn">Nombre completo</label>
              <input type="text" id="fn" name="nombre" placeholder="Ej. Juan García López" required autoComplete="name" />
            </div>
            <div className="fg">
              <label htmlFor="fe">Empresa / Dependencia</label>
              <input type="text" id="fe" name="empresa" placeholder="Ej. Gobierno Municipal de..." autoComplete="organization" />
            </div>
            <div className="fg">
              <label htmlFor="fm">Correo electrónico</label>
              <input type="email" id="fm" name="email" placeholder="correo@empresa.com" required autoComplete="email" />
            </div>
            <div className="fg">
              <label htmlFor="fmsg">Describe tu proyecto</label>
              <textarea id="fmsg" name="mensaje" placeholder="Cuéntanos sobre tu proyecto, estado, tipo de obra y presupuesto estimado..." required />
            </div>
            <button
              type="submit"
              className="btn-send"
              disabled={status === 'sending'}
              style={status === 'sent' ? { background: '#16a34a' } : undefined}
            >
              {status === 'idle' && 'Enviar solicitud'}
              {status === 'sending' && 'Enviando…'}
              {status === 'sent' && '✓ Mensaje enviado'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
