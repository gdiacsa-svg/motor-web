'use client';

import { Check, MapPin, ClipboardList, ShieldCheck, Building2, Landmark, Users, Briefcase } from 'lucide-react';

// ─── Capabilities data ────────────────────────────────────────────────────────

const capabilities = [
  {
    Icon: MapPin,
    title: 'Cobertura Nacional',
    items: [
      'Tamaulipas',
      'Michoacán',
      'Veracruz',
      'Oaxaca',
      'Chiapas',
      'Tabasco',
      'Campeche',
      'Yucatán',
      'Quintana Roo',
    ],
  },
  {
    Icon: ClipboardList,
    title: 'Metodología Estructurada',
    items: [
      'Diagnóstico inicial en sitio',
      'Dimensionamiento técnico del sistema',
      'Instalación por personal certificado',
      'Pruebas de funcionamiento y carga',
      'Entrega técnica con documentación',
    ],
  },
  {
    Icon: ShieldCheck,
    title: 'Seguridad y Cumplimiento',
    items: [
      'Protocolos de seguridad industrial',
      'Marco normativo para obra pública',
      'Marco normativo para obra privada',
      'Supervisión técnica en campo',
      'Certificación de materiales y equipos',
    ],
  },
];

// ─── Sectors data ─────────────────────────────────────────────────────────────

const sectors = [
  { Icon: Landmark,  label: 'Instituciones del Gobierno Federal' },
  { Icon: Building2, label: 'Dependencias del Gobierno Estatal' },
  { Icon: Users,     label: 'Gobiernos Municipales' },
  { Icon: Briefcase, label: 'Empresas de la Iniciativa Privada' },
];

// ─── Capabilities section ─────────────────────────────────────────────────────

export default function Capabilities() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#0A0A0A]">
      {/* Divider */}
      <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400 mb-4">
          Infraestructura y operaciones
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Capacidad{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Operativa
          </span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          Contamos con unidades de transporte equipadas y personal técnico
          especializado para movilizarnos a cualquier punto del país, garantizando
          tiempos de respuesta ágiles y ejecución de alto estándar.
        </p>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map(({ Icon, title, items }) => (
          <div
            key={title}
            className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.05]"
          >
            {/* Top glow on hover */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Icon + title */}
            <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-emerald-500/10 p-3">
              <Icon className="h-6 w-6 text-emerald-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-5">{title}</h3>

            {/* Checklist */}
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 rounded-full bg-emerald-500/15 p-0.5">
                    <Check className="h-3.5 w-3.5 text-emerald-400" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-gray-400 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Sectors section ──────────────────────────────────────────────────────────

export function Sectors() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#0A0A0A]">
      {/* Divider */}
      <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400 mb-3">
          Clientes y aliados
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Sectores Atendidos
        </h2>
      </div>

      {/* Sector cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sectors.map(({ Icon, label }) => (
          <div
            key={label}
            className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.05]"
          >
            <div className="flex-shrink-0 rounded-lg bg-emerald-500/10 p-2">
              <Icon className="h-5 w-5 text-emerald-400" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-gray-300 leading-snug">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
