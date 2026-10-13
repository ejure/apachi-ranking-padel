import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[88vh] items-end overflow-hidden">
      <img
        src="/images/court_hero_clean.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/30 to-brand-900/10" />

      <div className="container-x relative w-full pb-16 pt-32 sm:pb-24">
        <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] text-white sm:text-7xl lg:text-[104px]">
          Ranking oficial
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
          Sé parte del primer ranking regional y nacional de pádel, desde La Araucanía.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#calendario"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-brand-600 transition hover:bg-brand-50"
          >
            Ver calendario de octubre
          </a>
          <a
            href="#nosotros"
            className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            Conoce la Asociación <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
