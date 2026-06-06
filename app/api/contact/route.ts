import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { nombre, empresa, email, mensaje, recaptchaToken } = body;

  console.log('[contact] payload recibido:', { nombre, empresa, email, recaptchaToken: recaptchaToken?.slice(0, 20) + '…' });

  console.log('[contact] verificando reCAPTCHA…');
  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY!,
      response: recaptchaToken,
    }),
  });
  const verifyData = await verifyRes.json();
  console.log('[recaptcha response]', JSON.stringify(verifyData));
  console.log('[contact] respuesta reCAPTCHA:', verifyData);

  if (!verifyData.success) {
    console.log('[contact] reCAPTCHA inválido — abortando');
    return Response.json({ error: 'reCAPTCHA inválido' }, { status: 400 });
  }

  console.log('[contact] reCAPTCHA OK — enviando correo con Resend…');
  try {
    const result = await resend.emails.send({
      from: 'Página Web grupomator.mx <noreply@grupomator.mx>',
      to: 'ventas@grupomator.mx',
      subject: `Nuevo contacto${empresa ? ` — ${empresa}` : ''}: ${nombre}`,
      replyTo: email,
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa / Dependencia:</strong> ${empresa || '—'}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
      `,
    });
    console.log('[contact] Resend result:', result);
    return Response.json({ ok: true });
  } catch (err) {
    console.error('[contact] error Resend:', err);
    return Response.json({ error: 'Error al enviar correo' }, { status: 500 });
  }
}
