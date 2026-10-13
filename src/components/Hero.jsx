import React from 'react';
import { Trophy, ChevronDown, Sparkles, Award, ArrowUpRight, Activity } from 'lucide-react';

export default function Hero({ onExploreRanking }) {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image & Overlay matching PDF Page 1 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/court_hero.jpg"
          alt="Cancha Pádel APACHI"
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        {/* Gradients to blend smoothly */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-brand-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-transparent to-brand-950/70" />
        {/* Subtle tennis court net lines graphic */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12">
        {/* Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-blue-200 uppercase tracking-widest mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-neon-lime" />
          <span>Circuito Oficial de Pádel • Región de La Araucanía</span>
        </div>

        {/* Main Title matching PDF Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4 drop-shadow-md">
          Ranking oficial
        </h1>

        {/* Subtitle from PDF */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-blue-100 max-w-3xl mx-auto mb-4 tracking-tight drop-shadow">
          Sé parte del primer ranking regional y nacional
        </p>

        <p className="text-sm sm:text-base text-blue-200/80 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          ASOCIACIÓN PÁDEL ARAUCANÍA CHILE (APACHI). Medimos tu rendimiento, computamos cada partido oficial y conectamos tu talento con el circuito federado nacional FEPACHI.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#ranking"
            onClick={onExploreRanking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-brand-600 font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:bg-brand-50 hover:shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
          >
            <Trophy className="w-4 h-4 text-brand-600 group-hover:scale-110 transition-transform" />
            <span>Consultar Tabla de Ranking</span>
          </a>

          <a
            href="#registro"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-500/30 hover:bg-brand-500/50 backdrop-blur-md text-white font-bold text-sm uppercase tracking-wider border border-white/30 hover:border-white transition-all flex items-center justify-center gap-2"
          >
            <span>Regístrate al Circuito</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="bg-navy-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">180+</div>
            <div className="text-xs text-blue-200/80 font-medium uppercase tracking-wider mt-1">Jugadores Activos</div>
          </div>
          <div className="bg-navy-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-neon-lime font-display">7</div>
            <div className="text-xs text-blue-200/80 font-medium uppercase tracking-wider mt-1">Categorías Oficiales</div>
          </div>
          <div className="bg-navy-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">100%</div>
            <div className="text-xs text-blue-200/80 font-medium uppercase tracking-wider mt-1">Reconocido FEPACHI</div>
          </div>
          <div className="bg-navy-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-300 font-display">REST API</div>
            <div className="text-xs text-blue-200/80 font-medium uppercase tracking-wider mt-1">Datos Dinámicos</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#ranking"
            className="text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1 text-xs uppercase tracking-widest"
          >
            <span>Ver Clasificación</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
