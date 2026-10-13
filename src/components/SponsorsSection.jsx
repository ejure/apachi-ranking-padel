import React from 'react';
import { SPONSORS } from '../data/mockRankingData';
import { HeartHandshake, Building2, Hotel, BookOpen, ShieldCheck } from 'lucide-react';

export default function SponsorsSection() {
  const getIcon = (name) => {
    if (name.includes('Cozy')) return Hotel;
    if (name.includes('Folio')) return BookOpen;
    if (name.includes('Municipio') || name.includes('Temuco')) return Building2;
    return ShieldCheck;
  };

  return (
    <section id="patrocinadores" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title from PDF Page 1 */}
        <span className="text-brand-500 font-bold text-xs uppercase tracking-widest block mb-2">
          Alianzas Estratégicas
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight font-display mb-4">
          Agradecemos a nuestros <br className="hidden sm:inline" />
          <span className="text-brand-500">patrocinadores</span>
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto mb-12">
          Empresas e instituciones que hacen posible el desarrollo, financiamiento y premiación del circuito de pádel regional.
        </p>

        {/* Sponsor Cards Grid matching Page 1 Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SPONSORS.map((s, idx) => {
            const Icon = getIcon(s.name);
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-400 hover:shadow-card-subtle transition-all duration-300 flex flex-col items-center justify-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 group-hover:bg-brand-500 group-hover:text-white text-brand-600 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="font-extrabold text-base text-navy-900 group-hover:text-brand-600 transition-colors font-display">
                  {s.name}
                </h4>
                <span className="text-xs text-slate-500 mt-1">
                  {s.type}
                </span>
              </div>
            );
          })}
        </div>

        {/* Sponsor banner CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 inline-flex flex-col sm:flex-row items-center gap-4 text-left">
          <div className="w-10 h-10 rounded-xl bg-neon-lime/20 text-brand-700 flex items-center justify-center flex-shrink-0">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-navy-900">¿Quieres ser sponsor del circuito APACHI 2026?</h5>
            <p className="text-xs text-slate-500">Ofrecemos visibilidad en canchas, indumentaria, transmisiones en vivo y ranking oficial.</p>
          </div>
          <a
            href="mailto:contacto@rankingapachi.cl"
            className="sm:ml-4 px-4 py-2 rounded-xl bg-navy-900 text-white text-xs font-bold hover:bg-brand-600 transition-colors whitespace-nowrap"
          >
            Contactar Alianzas
          </a>
        </div>

      </div>
    </section>
  );
}
