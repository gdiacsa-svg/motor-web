'use client';

import { Factory, BatteryCharging, Droplets } from 'lucide-react';

const cards = [
  {
    Icon: Factory,
    title: 'Proyectos Industriales',
    subtitle: 'Gran escala, alto rendimiento',
    description:
      'Diseño e instalación de plantas solares para la industria. Entre nuestros proyectos insignia: sistema de 400 paneles (240 kW) para una planta manufacturera en Altamira, Tamaulipas, reduciendo drásticamente el costo energético y la huella de carbono.',
    stat: '240 kW',
    statLabel: 'capacidad instalada',
  },
  {
    Icon: BatteryCharging,
    title: 'Energía y Autonomía',
    subtitle: 'Independencia energética total',
    description:
      'Sistemas residenciales y corporativos con baterías de litio de última generación para operar fuera de la red eléctrica. Proyecto destacado: instalación de sistema aislado en Santa Fe, CDMX, garantizando suministro continuo 24/7.',
    stat: '24/7',
    statLabel: 'suministro continuo',
  },
  {
    Icon: Droplets,
    title: 'Infraestructura Agrícola',
    subtitle: 'Impulsamos la energía solar',
    description:
      'Especialistas en bombeo solar para riego tecnificado. Instalamos sistemas con bombas de hasta 10 HP alimentadas 100 % por energía solar, eliminando el consumo diésel y optimizando la productividad del campo.',
    stat: '10 HP',
    statLabel: 'bombas de riego',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0A0A0A]">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400 mb-4">
          Más de 30 años de trayectoria
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Nuestra{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Experiencia
          </span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Soluciones de energía solar para la industria, el hogar y el campo.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map(({ Icon, title, subtitle, description, stat, statLabel }) => (
          <div
            key={title}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.05]"
          >
            {/* Top glow on hover */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div>
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-emerald-500/10 p-3">
                <Icon className="h-6 w-6 text-emerald-400" strokeWidth={1.5} />
              </div>

              {/* Titles */}
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-emerald-400/70">
                {subtitle}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{description}</p>
            </div>

            {/* Stat */}
            <div className="mt-8 flex items-end gap-2 border-t border-white/[0.06] pt-6">
              <span className="text-3xl font-bold text-white">{stat}</span>
              <span className="mb-1 text-xs text-gray-500">{statLabel}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
