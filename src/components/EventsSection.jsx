import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { fetchEventsCalendar } from '../services/rankingApi';

export default function EventsSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEventsCalendar().then((res) => setEvents(res.data));
  }, []);

  return (
    <section id="programacion" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Banner matching PDF Page 2: "Conocemos tu esfuerzo" */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 border border-slate-200 group">
          <div className="h-80 sm:h-96 w-full relative">
            <img
              src="/images/indoor_court_runner.jpg"
              alt="Conocemos tu esfuerzo - Jugador de Pádel"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end max-w-2xl text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-500 text-xs font-bold uppercase tracking-wider mb-3 w-max">
              Compromiso Formativo
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-display text-white drop-shadow-md">
              Conocemos <br />
              tu esfuerzo
            </h2>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed drop-shadow">
              En la Asociación de Jugadores de Pádel Chile vemos muy importante el apoyo desde el comienzo. Por eso, impulsamos el deporte desde las escuelas y clubes formativos de la región.
            </p>
          </div>
        </div>

        {/* Calendar & Schedule Section: "Programación OCTUBRE" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Schedule Table from PDF */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="text-brand-500 font-bold text-xs uppercase tracking-widest block mb-1">
                Calendario Oficial
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display">
                Programación <span className="text-brand-500">OCTUBRE</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Actividades institucionales, clínicas deportivas y fechas puntuables del circuito.
              </p>
            </div>

            {/* Timeline List matching PDF Page 2 table */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 bg-slate-50/50 shadow-sm">
              {events.map((ev, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 flex items-start gap-4 hover:bg-white transition-colors group"
                >
                  {/* Date badge */}
                  <div className="w-16 h-14 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <span className="text-xs font-extrabold uppercase">{ev.month}</span>
                    <span className="text-base font-black leading-none">{ev.date.split('-')[0]}</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-bold text-navy-900 text-sm sm:text-base group-hover:text-brand-600 transition-colors">
                        {ev.title}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                        {ev.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      {ev.description}
                    </p>
                    <div className="flex items-center gap-4 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-500" />
                        <span>{ev.location}</span>
                      </span>
                      <span>•</span>
                      <span className="font-medium text-brand-600">{ev.pointsMultiplier}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Instagram Banner matching PDF Page 2 */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-brand-500/10 border border-pink-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-600">Para estar al día con resultados y fixtures:</div>
                  <div className="text-sm font-extrabold text-navy-900 font-display">
                    Síguenos en Instagram <a href="https://instagram.com/rankingapachi.cl" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">@rankingapachi.cl</a>
                  </div>
                </div>
              </div>
              <a
                href="https://instagram.com/rankingapachi.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-navy-900 text-white text-xs font-bold hover:bg-brand-600 transition-colors flex items-center gap-1.5 flex-shrink-0"
              >
                <span>Seguir Cuenta</span>
              </a>
            </div>

          </div>

          {/* Right: Atmosphere Photo from PDF Page 2 */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/images/padel_balls.jpg"
                alt="Pelotas de pádel en cancha"
                className="w-full h-80 sm:h-[460px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-neon-lime text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Pelota Oficial Head / Bullpadel</span>
                </div>
                <h4 className="text-lg font-bold font-display text-white">
                  Criterio de Computación de Puntos
                </h4>
                <p className="text-xs text-blue-200/90 mt-1">
                  Los resultados de cada partido se registran dentro de las 24 horas posteriores a cada serie de torneo, actualizando la posición en la tabla general.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
