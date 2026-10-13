import React from 'react';
import { Trophy, Zap, GraduationCap, Handshake } from 'lucide-react';
import { ABOUT } from '../content';

const ICONS = { trophy: Trophy, zap: Zap, graduation: GraduationCap, handshake: Handshake };

export default function AboutSection() {
  return (
    <section id="asociacion" className="bg-paper">
      {/* Qué es APACHI */}
      <div className="container-x grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="eyebrow text-brand-500">La Asociación</p>
          <h2 className="headline mt-4 text-6xl text-brand-950 sm:text-8xl">
            ¿Qué es
            <br />
            <span className="text-brand-500">APACHI?</span>
          </h2>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink/80">{ABOUT.intro}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-t-4 border-brand-500 pt-4">
              <h3 className="font-display text-xl font-extrabold uppercase italic tracking-wide text-brand-950">
                Misión
              </h3>
              <p className="mt-2 text-ink/70">{ABOUT.mission}</p>
            </div>
            <div className="border-t-4 border-ball pt-4">
              <h3 className="font-display text-xl font-extrabold uppercase italic tracking-wide text-brand-950">
                Visión
              </h3>
              <p className="mt-2 text-ink/70">{ABOUT.vision}</p>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="grid h-full grid-cols-2 gap-3">
            <img
              src="/images/players_women_team.jpg"
              alt="Equipo de jugadoras en cancha techada"
              loading="lazy"
              className="h-full min-h-[320px] w-full object-cover"
              style={{ clipPath: 'polygon(0 0, 100% 0, 88% 100%, 0 100%)' }}
            />
            <div className="grid gap-3">
              <img
                src="/images/player_woman_serve.jpg"
                alt="Jugadora preparando un golpe"
                loading="lazy"
                className="h-full min-h-[150px] w-full object-cover"
                style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)' }}
              />
              <img
                src="/images/player_glasses.jpg"
                alt="Jugador devolviendo la pelota"
                loading="lazy"
                className="h-full min-h-[150px] w-full object-cover"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 12% 100%)' }}
              />
            </div>
          </div>
          <div className="absolute -bottom-5 left-6 -skew-x-12 bg-ball px-5 py-3 shadow-xl">
            <p className="skew-x-12 font-display text-xl font-extrabold uppercase italic text-brand-950">
              Desde La Araucanía para Chile
            </p>
          </div>
        </div>
      </div>

      {/* Pilares */}
      <div className="bg-brand-950 py-20 text-white sm:py-24">
        <div className="container-x">
          <p className="eyebrow text-ball">Lo que hacemos</p>
          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.pillars.map((p) => {
              const Icon = ICONS[p.icon];
              return (
                <div key={p.title} className="group bg-brand-950 p-7 transition hover:bg-brand-900">
                  <div className="flex h-12 w-12 -skew-x-12 items-center justify-center bg-brand-500 transition group-hover:bg-ball group-hover:text-brand-950">
                    <Icon className="h-6 w-6 skew-x-12" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-extrabold uppercase italic leading-none">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-white/70">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cómo funciona — se muestra solo si ABOUT.showSteps es true (content.js) */}
      {ABOUT.showSteps && (
      <div className="container-x py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow text-brand-500">Cómo funciona</p>
            <h2 className="headline mt-4 text-6xl text-brand-950 sm:text-8xl">
              Súmate en <span className="text-brand-500">4 pasos</span>
            </h2>
          </div>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT.steps.map((s) => (
            <li key={s.n} className="relative overflow-hidden bg-white p-7 shadow-lg shadow-brand-900/5">
              <span className="pointer-events-none absolute -right-2 -top-6 font-display text-[9rem] font-extrabold italic leading-none text-brand-500/10">
                {s.n}
              </span>
              <span className="font-display text-2xl font-extrabold italic text-brand-500">{s.n}</span>
              <h3 className="mt-6 font-display text-3xl font-extrabold uppercase italic leading-none text-brand-950">
                {s.title}
              </h3>
              <p className="mt-3 text-ink/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
      )}
    </section>
  );
}
