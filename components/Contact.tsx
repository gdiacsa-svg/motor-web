'use client';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();
    if (!token) return;

    const form = e.currentTarget;
    const payload = {
      nombre: (form.elements.namedItem('nombre') as HTMLInputElement).value,
      empresa: (form.elements.namedItem('empresa') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value,
      recaptchaToken: token,
    };

    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('sent');
        formRef.current?.reset();
        recaptchaRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto">
      <div className="wrap">
        <p className="label r">Hablemos de tu proyecto</p>

        <div className="con-grid">

          {/* Columna izquierda */}
          <div className="con-left r">
            <h2 className="title">
              ¿Tienes un <span className="hi">proyecto</span>?
            </h2>

            <div className="con-wa">
              <a
                href="https://wa.me/529999501061?text=Hola%2C%20me%20interesa%20recibir%20información%20sobre%20sus%20servicios%20de%20energía%20solar%20e%20hidráulica.%20¿Me%20pueden%20apoyar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="20" height="20" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>

            <div className="con-info">
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
                <div><strong>Correo electrónico</strong>ventas@grupomator.mx</div>
              </div>

              <div className="cdetail">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>
                </svg>
                <div><strong>RFC</strong>TMA211808UC4</div>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <form ref={formRef} className="form r d2" onSubmit={handleSubmit} noValidate>
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

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            />

            {status === 'sent' && (
              <p style={{ color: '#16a34a', fontWeight: 500 }}>
                ¡Mensaje enviado! Nos pondremos en contacto pronto.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#dc2626', fontWeight: 500 }}>
                Ocurrió un error. Intenta de nuevo o escríbenos por WhatsApp.
              </p>
            )}

            <button
              type="submit"
              className="btn-send"
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar solicitud'}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
