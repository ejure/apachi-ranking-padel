import React from 'react';
import { UserCheck, Trophy, Landmark, Percent, ClipboardList, TrendingUp, BarChart3 } from 'lucide-react';

export default function AboutSection() {
  const steps = [
    {
      num: '01',
      title: 'Regístrate con tu nombre y correo electrónico.',
      desc: 'Crea tu perfil deportivo oficial para comenzar a ser monitoreado en cada fecha competitiva.',
      icon: UserCheck,
    },
    {
      num: '02',
      title: 'Nos encargamos de marcar presencia en torneos y campeonatos.',
      desc: 'Nuestro equipo de veedores y jueces oficiales audita cada partido y computa tu puntaje en vivo.',
      icon: Trophy,
    },
    {
      num: '03',
      title: 'Intermediario ante el gobierno y federaciones.',
      desc: 'Canalizamos apoyos deportivos, becas de alto rendimiento y homologación ante FEPACHI y el IND.',
      icon: Landmark,
    },
    {
      num: '04',
      title: 'Obtén beneficios en descuentos exclusivos.',
      desc: 'Accede a tarifas preferenciales en inscripciones de torneos, clínicas, indumentaria y clubes asociados.',
      icon: Percent,
    },
  ];

  const pillarCards = [
    {
      title: 'Registro de partidos',
      desc: 'Cada set, juego y match queda archivado con trazabilidad y rivales directos.',
      icon: ClipboardList,
      badge: 'Auditoría APACHI',
    },
    {
      title: 'Sumar y perder puntos según los resultados',
      desc: 'Algoritmo ponderado por categoría, ronda de torneo e importancia del rival.',
      icon: TrendingUp,
      badge: 'Algoritmo ELO',
    },
    {
      title: 'Ver tu posición en el ranking',
      desc: 'Clasificación regional y nacional actualizada después de cada fin de semana de torneo.',
      icon: BarChart3,
      badge: 'En Tiempo Real',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Section matching PDF Page 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: ranking APACHI */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <span className="text-brand-500 font-bold text-xs uppercase tracking-widest block mb-2">
                Ecosistema Competitivo
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-none mb-6 font-display">
                ranking <br />
                <span className="text-brand-500">APACHI</span>
              </h2>

              <p className="text-lg font-semibold text-slate-800 mb-4 leading-snug">
                Esto no es solo una prueba — es tu oportunidad de demostrar tu nivel en la pista.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                Desde 1996, el circuito de la Araucanía ha sido el hogar de jugadores que entrenan duro, juegan con pasión y nunca dejan de evolucionar. Buscamos nuevos talentos listos para llevar su juego al siguiente nivel: ¿te sumas?
              </p>

              <div className="p-4 rounded-xl bg-brand-50 border border-brand-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">100% Homologado</h4>
                  <p className="text-xs text-slate-600">Puntaje oficial válido para clasificaciones nacionales FEPACHI.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 01, 02, 03, 04 Steps */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-brand-300 hover:shadow-card-subtle transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-brand-500 font-display tracking-tight group-hover:scale-105 transition-transform">
                      {step.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1 group-hover:text-brand-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom 3 Cards matching Page 1 Bottom Boxes */}
        <div className="border-t border-slate-200 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Pilares del Sistema de Puntuación
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Transparencia, meritocracia y rigor técnico en cada actualización del ranking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillarCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="relative p-8 rounded-2xl bg-gradient-to-b from-white to-slate-50 border-2 border-slate-200/70 hover:border-brand-500 hover:shadow-glow transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-100">
                        {card.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-brand-600 transition-colors leading-snug">
                      {card.title}
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-brand-600 group-hover:translate-x-1 transition-transform">
                    <span>Estándar APACHI</span>
                    <span className="ml-1">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
