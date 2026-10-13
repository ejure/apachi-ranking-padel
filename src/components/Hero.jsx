import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { SEASON } from '../content';
import { nextEvent, countdownTo, dateParts } from '../lib/events';

function useNow(intervalMs = 1000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return now;
}

const pad = (n) => String(n).padStart(2, '0');

function NextEventCard() {
  const now = useNow();
  const ev = nextEvent(now);
  if (!ev) return null;

  const live = new Date(ev.start) <= now;
  const c = countdownTo(ev.start, now);
  const d = dateParts(ev.start);

  return (
    <a
      href={`#${ev.id}`}
      className="group relative block overflow-hidden bg-white text-brand-950 shadow-2xl shadow-black/40 transition hover:-translate-y-1"
    >
      <div className="flex items-center justify-between bg-ball px-5 py-2">
        <span className="font-display text-sm font-extrabold uppercase italic tracking-[0.2em]">
          {live ? '● En juego ahora' : 'Próximo evento'}
        </span>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </div>
      <div className="p-5">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-500">
          {d.weekday} {d.day} {d.month} · {ev.time}
        </p>
        <p className="mt-1 font-display text-3xl font-extrabold uppercase italic leading-[0.95]">
          {ev.title}
        </p>
        {ev.guest && (
          <p className="mt-2 text-sm font-semibold">
            {ev.guest}
            {ev.guestRole && <span className="font-normal text-ink/60"> · {ev.guestRole}</span>}
          </p>
        )}
        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/60">
          <MapPin className="h-4 w-4" /> {ev.venue}, {ev.city}
        </p>

        {!live && (
          <div className="mt-4 grid grid-cols-4 gap-1.5 text-center">
            {[
              ['Días', c.days],
              ['Hrs', c.hours],
              ['Min', c.minutes],
              ['Seg', c.seconds],
            ].map(([label, v]) => (
              <div key={label} className="bg-brand-950 py-2 text-white">
                <div className="font-display text-3xl font-extrabold tabular-nums leading-none">
                  {pad(v)}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  {label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-950 pt-[72px] text-white"
    >
      {/* Fondo: cancha */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-900 to-brand-950" />
      <div className="court-lines absolute inset-0" />

      {/* Foto en marco diagonal */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[52%] lg:block"
        style={{ clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 0 100%)' }}
      >
        <img
          src="/images/player_smash.jpg"
          alt="Jugador de pádel saltando para rematar"
          className="h-full w-full object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/70 via-brand-700/20 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-brand-500/20 mix-blend-color" />
      </div>
      {/* Franja lima */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[52%] bg-ball lg:block"
        style={{
          clipPath: 'polygon(calc(22% - 18px) 0, 22% 0, 0 100%, -18px 100%)',
          transform: 'translateX(-14px)',
        }}
      />

      <div className="container-x relative grid min-h-[calc(100svh-72px)] items-center gap-10 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <p className="eyebrow text-ball">Asociación Pádel Araucanía Chile</p>
          <h1 className="headline mt-5 text-[19vw] sm:text-[8.5rem] lg:text-[9.5rem] xl:text-[11rem]">
            Juega.
            <br />
            Compite.
            <br />
            <span className="text-ball">Suma.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80 sm:text-xl">
            Somos la asociación que mueve el pádel en La Araucanía: eventos con los mejores, formación
            desde las escuelas y el primer ranking regional.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#eventos" className="btn btn-ball">
              Próximos eventos <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#asociacion" className="btn btn-ghost">
              ¿Qué es APACHI?
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          {/* En móvil la foto va arriba de la tarjeta */}
          <div className="relative mb-6 aspect-[4/3] overflow-hidden lg:hidden" style={{ clipPath: 'polygon(6% 0, 100% 0, 94% 100%, 0 100%)' }}>
            <img
              src="/images/player_smash.jpg"
              alt=""
              className="h-full w-full object-cover object-[50%_25%]"
            />
          </div>
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.25em] text-white/70">
            {SEASON.label} · {SEASON.range}
          </p>
          <NextEventCard />
        </div>
      </div>
    </section>
  );
}
