import React from 'react';
import { Calendar, ChevronDown, Sparkles, Award, ExternalLink, Trophy, MapPin } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Hero({ onExploreCalendar, onExploreRanking }) {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image: Pristine Clean Padel Court with zero text */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/court_hero_clean.jpg"
          alt="Cancha de Pádel Oficial APACHI"
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        {/* Soft elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-900/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-navy-950/50 to-brand-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12">
        {/* Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-blue-200 uppercase tracking-widest mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-neon-lime" />
          <span>Circuito Oficial de Pádel • Región de La Araucanía</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 drop-shadow-md font-display">
          Ranking oficial
        </h1>

        {/* Subtitle from PDF */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-blue-100 max-w-3xl mx-auto mb-4 tracking-tight drop-shadow font-display">
          Sé parte del primer ranking regional y nacional
        </p>

        <p className="text-sm sm:text-base text-blue-200/90 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          ASOCIACIÓN PÁDEL ARAUCANÍA CHILE (APACHI). Promovemos el desarrollo deportivo, clínicas de alto rendimiento, psicología en pádel y la homologación federada con FEPACHI.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#calendario"
            onClick={onExploreCalendar}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neon-lime hover:bg-[#d8ff1a] text-navy-950 font-black text-sm uppercase tracking-wider shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-4 h-4 text-navy-950 group-hover:scale-110 transition-transform" />
            <span>Ver Programación Octubre</span>
          </a>

          <a
            href="https://www.instagram.com/rankingapachi.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm uppercase tracking-wider border border-white/30 hover:border-white transition-all flex items-center justify-center gap-2"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Instagram @rankingapachi.cl</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="bg-navy-900/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">5 Clubes</div>
            <div className="text-xs text-blue-200/80 font-medium uppercase tracking-wider mt-1">Sedes en Araucanía</div>
          </div>
          <div className="bg-navy-900/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-neon-lime font-display">7</div>
            <div className="text-xs text-blue-200/80 font-medium uppercase tracking-wider mt-1">Categorías Oficiales</div>
          </div>
          <div className="bg-navy-900/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">100%</div>
            <div className="text-xs text-blue-200/80 font-medium uppercase tracking-wider mt-1">Reconocido FEPACHI</div>
          </div>
          <div className="bg-navy-900/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-400 font-display">OCT 26-29</div>
            <div className="text-xs text-blue-200/80 font-medium uppercase tracking-wider mt-1">Semana de Actividades</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#calendario"
            className="text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1 text-xs uppercase tracking-widest"
          >
            <span>Explorar Calendario</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
