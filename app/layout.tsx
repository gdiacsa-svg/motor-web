import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-b',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-h',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tecnoservicios Mator S.A. de C.V. | Energía Solar e Infraestructura',
  description:
    'Más de 30 años impulsando el agua con la fuerza del sol. Sistemas fotovoltaicos, obras hidráulicas e infraestructura sustentable en México.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body style={{ fontFamily: 'var(--font-b)' }}>{children}</body>
    </html>
  );
}
