import React from 'react';
import { ABOUT } from '../content';

export default function AboutSection() {
  return (
    <>
      {/* Misión / Visión */}
      <section id="nosotros" className="bg-brand-500 py-24 text-white sm:py-32">
        <div className="container-x">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">Nosotros</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-medium leading-tight sm:text-6xl">
            Conocemos tu esfuerzo
          </h2>

          <div className="mt-16 grid gap-12 border-t border-white/30 pt-12 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/60">Misión</h3>
              <p className="mt-4 text-xl leading-relaxed sm:text-2xl">{ABOUT.mission}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/60">Visión</h3>
              <p className="mt-4 text-xl leading-relaxed sm:text-2xl">{ABOUT.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen + escuelas */}
      <section className="relative">
        <img
          src="/images/indoor_court_runner.jpg"
          alt="Jugador de pádel en cancha techada"
          className="h-[60vh] min-h-[380px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
        <div className="container-x absolute inset-0 flex items-end pb-14">
          <p className="max-w-md text-xl leading-relaxed text-white sm:text-2xl">
            Vemos muy importante el apoyo desde el comienzo. Por eso, impulsamos el deporte desde
            las escuelas.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Cómo funciona</p>
            <h2 className="mt-3 text-4xl font-medium leading-[0.95] text-brand-500 sm:text-6xl">
              ranking
              <br />
              <span className="font-bold">APACHI</span>
            </h2>
          </div>

          <ol className="border-t border-ink lg:col-span-7">
            {ABOUT.steps.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[64px_1fr] items-baseline gap-6 border-b border-ink/80 py-7"
              >
                <span className="font-display text-3xl text-brand-500">{s.n}</span>
                <span className="text-lg text-ink/85">{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
