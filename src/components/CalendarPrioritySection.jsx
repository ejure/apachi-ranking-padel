import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Brain, Award, Sparkles, ExternalLink, ChevronRight, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function CalendarPrioritySection() {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const events = [
    {
      day: 'LUN 26',
      dateNum: '26',
      month: 'OCTUBRE',
      time: '19:00 HRS',
      title: 'EXHIBICIÓN DE PÁDEL',
      location: 'CENTROPÁDEL - TEMUCO',
      expositors: 'KIM AHUMADA & MICA RAFFE',
      category: 'Exhibición Estelar',
      type: 'match',
      icon: Award,
      badgeColor: 'bg-brand-500 text-white',
      description: 'Gran partido de exhibición con jugadores de élite. Apertura oficial de la semana de actividades APACHI en CentroPádel Temuco.',
      clubDetails: 'CentroPádel Temuco • Canchas panorámicas reglamentarias.',
    },
    {
      day: 'MAR 27',
      dateNum: '27',
      month: 'OCTUBRE',
      time: '11:00 HRS. Y 15:00 HRS.',
      title: 'CLÍNICA DE PÁDEL',
      location: 'MIRASUR - TEMUCO',
      expositors: 'EQUIPO TÉCNICO APACHI',
      category: 'Formación Técnica',
      type: 'clinic',
      icon: Sparkles,
      badgeColor: 'bg-neon-lime text-navy-950',
      description: 'Doble jornada técnica de perfeccionamiento en pista: corrección de golpes, transiciones defensa-ataque y posicionamiento táctico en parejas.',
      clubDetails: 'Mirasur Pádel • Temuco.',
    },
    {
      day: 'MAR 27',
      dateNum: '27',
      month: 'OCTUBRE',
      time: '21:00 HRS',
      title: 'CHARLA DE PSICOLOGÍA DEPORTIVA',
      location: 'ARENATRAÑI - TEMUCO',
      expositors: 'KIM AHUMADA & MICA RAFFE',
      category: 'Psicología en Pádel',
      type: 'psychology',
      icon: Brain,
      badgeColor: 'bg-purple-600 text-white',
      description: 'Herramientas mentales para competir: manejo de la presión en puntos de oro, control de la frustración y comunicación asertiva con tu compañero.',
      clubDetails: 'Complejo Deportivo ArenaTrañi • Temuco.',
    },
    {
      day: 'MIÉ 28',
      dateNum: '28',
      month: 'OCTUBRE',
      time: '19:00 HRS',
      title: 'CHARLA DE PSICOLOGÍA DEPORTIVA',
      location: 'IMPERIALPÁDEL - NUEVA IMPERIAL',
      expositors: 'MICA RAFFE',
      category: 'Psicología en Pádel',
      type: 'psychology',
      icon: Brain,
      badgeColor: 'bg-purple-600 text-white',
      description: 'Sesión enfocada en la fortaleza mental del deportista y estrategias psicológicas aplicadas a partidos decisivos y torneos locales.',
      clubDetails: 'ImperialPádel • Nueva Imperial.',
    },
    {
      day: 'JUE 29',
      dateNum: '29',
      month: 'OCTUBRE',
      time: '19:00 HRS',
      title: 'CHARLA DE PSICOLOGÍA DEPORTIVA',
      location: 'BLACKPADEL - MOLCO / VILLARRICA',
      expositors: 'MICA RAFFE',
      category: 'Psicología en Pádel',
      type: 'psychology',
      icon: Brain,
      badgeColor: 'bg-purple-600 text-white',
      description: 'Cierre de la gira regional en la zona lacustre: preparación psicológica pre-competitiva y mentalidad ganadora en pista.',
      clubDetails: 'BlackPádel • Sector Molco, Camino Villarrica - Pucón.',
    },
  ];

  return (
    <section id="calendario" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Background Lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-neon-lime/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neon-lime/15 border border-neon-lime/30 text-neon-lime text-xs font-bold uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Prioridad del Mes • Semana Formativa y Competitiva</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white">
            Programación <span className="text-brand-400">OCTUBRE</span>
          </h2>

          <p className="text-sm sm:text-base text-blue-100/90 mt-4 leading-relaxed">
            Exhibición estelar, clínicas en pista y ciclo de charlas de psicología deportiva en los principales clubes de Temuco, Nueva Imperial y la zona lacustre.
          </p>
        </div>

        {/* 2-Column Split: Poster on Left, Interactive Detail on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: Official Poster Card matching uploaded image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-500/40 bg-navy-950 group relative">
              <img
                src="/images/calendario_octubre_apachi.jpg"
                alt="Calendario Oficial Octubre APACHI"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-xs font-semibold text-blue-200">
                  Publicación oficial vía Instagram @rankingapachi.cl
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-blue-200">
              <CheckCircle2 className="w-4 h-4 text-neon-lime" />
              <span>Cronograma Oficial Confirmado por APACHI</span>
            </div>
          </div>

          {/* Right Column: Detailed Interactive Timeline List */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-blue-200">
                Itinerario de Actividades ({events.length} Fechas)
              </span>
              <span className="text-[11px] text-slate-400">
                Haz clic en cualquier fecha para ver el detalle
              </span>
            </div>

            {events.map((ev, idx) => {
              const isSelected = selectedEventIndex === idx;
              const Icon = ev.icon;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedEventIndex(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-brand-900/60 to-navy-900/90 border-brand-400 shadow-glow'
                      : 'bg-navy-950/70 border-white/10 hover:border-white/20 hover:bg-navy-900/50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    
                    {/* Day & Hour badge */}
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-14 rounded-xl bg-white/10 border border-white/15 flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-[10px] font-bold text-blue-300 tracking-wider uppercase">
                          {ev.day.split(' ')[0]}
                        </span>
                        <span className="text-lg font-black text-white leading-none font-display">
                          {ev.dateNum}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ev.badgeColor}`}>
                            {ev.category}
                          </span>
                          <span className="text-xs font-mono text-blue-200 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-brand-400" />
                            <span>{ev.time}</span>
                          </span>
                        </div>

                        <h3 className="text-base font-extrabold text-white mt-1 font-display tracking-tight">
                          {ev.title}
                        </h3>
                      </div>
                    </div>

                    {/* Arrow / indicator */}
                    <div className="hidden sm:flex items-center text-xs text-brand-400 font-semibold gap-1">
                      <span>Ver detalles</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded details */}
                  <div className={`mt-3 pt-3 border-t border-white/10 text-xs transition-all ${isSelected ? 'block' : 'hidden sm:block text-slate-400'}`}>
                    <div className="flex flex-wrap items-center gap-4 text-blue-100 font-medium mb-1">
                      <span className="flex items-center gap-1.5 text-white">
                        <MapPin className="w-3.5 h-3.5 text-neon-lime" />
                        <span className="font-bold">{ev.location}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5 text-blue-200">
                        <Users className="w-3.5 h-3.5 text-brand-400" />
                        <span>Expositores: <strong className="text-white">{ev.expositors}</strong></span>
                      </span>
                    </div>

                    <p className="text-slate-300 mt-2 leading-relaxed text-[11px] sm:text-xs">
                      {ev.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Direct CTA to Instagram */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-brand-500/15 border border-pink-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-blue-200">¿Quieres inscribirte en una clínica o charla?</div>
                  <div className="text-sm font-bold text-white font-display">
                    Escríbenos por mensaje directo a <span className="text-neon-lime">@rankingapachi.cl</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.instagram.com/rankingapachi.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white text-navy-950 text-xs font-bold hover:bg-brand-50 transition-all flex items-center gap-1.5 whitespace-nowrap shadow-md group"
              >
                <span>Ir al Instagram Oficial</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-600 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
