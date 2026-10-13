import React from 'react';
import { Trophy, Clock, ShieldCheck, Award, Bell, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { CATEGORIES } from '../data/mockRankingData';

export default function RankingSection() {
  const activeCategories = CATEGORIES.filter(c => c.id !== 'ALL');

  return (
    <section id="ranking" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>En Preparación • Fase de Enrolamiento Oficial</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight font-display">
            Ranking Oficial APACHI
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Estamos computando y auditando los resultados de los primeros torneos federados junto a los clubes de la región y <strong>FEPACHI</strong>. La primera tabla oficial de posiciones se publicará muy pronto.
          </p>
        </div>

        {/* Coming Soon Showcase Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-navy-900 via-navy-950 to-brand-950 text-white p-8 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden mb-16">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-brand-500/20 border-2 border-brand-400/40 p-4 flex items-center justify-center flex-shrink-0 shadow-glow">
              <Trophy className="w-14 h-14 text-neon-lime animate-bounce" />
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-200 mb-2">
                Temporada 2026 en Computación
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
                ¿Cuándo se publicará el primer ranking?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-6">
                Una vez finalizadas las primeras fechas puntuables de la Asociación y la acreditación de jugadores en los clubes asociados (CentroPádel, Mirasur, ArenaTrañi, ImperialPádel y BlackPádel), habilitaremos el buscador completo de jugadores y el podio por categorías.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://www.instagram.com/rankingapachi.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neon-lime hover:bg-[#d8ff1a] text-navy-950 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <InstagramIcon className="w-4 h-4 text-navy-950" />
                  <span>Seguir Novedades en Instagram</span>
                </a>

                <div className="text-xs text-blue-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Puntaje 100% Homologado FEPACHI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid (What will be included) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h4 className="text-xl sm:text-2xl font-bold text-navy-900 font-display">
              Categorías Oficiales que serán Rankeadas
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              El ranking clasificará a jugadores y jugadoras en todas las categorías federadas:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeCategories.map((cat) => (
              <div
                key={cat.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-300 hover:bg-brand-50/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-navy-900 text-white font-display">
                      {cat.short}
                    </span>
                    <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-100">
                      Masc & Fem
                    </span>
                  </div>
                  <h5 className="font-extrabold text-base text-navy-900 mb-1 font-display">
                    {cat.name}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Puntos base:</span>
                  <strong className="text-navy-900 font-bold">{cat.minPoints}+ pts</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
