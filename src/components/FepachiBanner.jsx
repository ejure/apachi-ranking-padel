import React from 'react';
import { Award, ShieldCheck, Flag, ArrowRight } from 'lucide-react';

export default function FepachiBanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-navy-950">
      {/* Background with celebration photo from PDF Page 3 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/fepachi_celebration.jpg"
          alt="Representa a tu país - FEPACHI"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-brand-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-neon-lime uppercase tracking-widest mb-6">
            <Flag className="w-3.5 h-3.5" />
            <span>Circuito Federado Nacional</span>
          </div>

          {/* Slogan matching PDF Page 3 */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-4 font-display text-white">
            Representa a tu país.
          </h2>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-blue-200 mb-8 tracking-tight font-display">
            Puntaje reconocido por <span className="font-extrabold text-white underline decoration-brand-500 underline-offset-8">FEPACHI</span>
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Cada punto acumulado en los torneos oficiales de la Asociación Pádel Araucanía Chile (APACHI) cuenta para la tabla nacional federada, abriendo las puertas para selecciones regionales y clasificatorios internacionales de la Federación de Pádel de Chile.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs text-blue-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-neon-lime" />
              <span>Homologación FIP & FEPACHI</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Puntaje Oficial Válido 2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
