import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { nombre, empresa, email, mensaje, recaptchaToken } = await request.json();

  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY!,
      response: recaptchaToken,
    }),
  });
  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return Response.json({ error: 'reCAPTCHA inválido' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'noreply@grupomator.mx',
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
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Error al enviar correo' }, { status: 500 });
  }
}
