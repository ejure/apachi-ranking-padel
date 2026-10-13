import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GUESTS } from '../content';
import { sortedEvents, dateParts } from '../lib/events';

function guestEvents(name) {
  return sortedEvents().filter((e) => e.guest && e.guest.includes(name));
}

export default function GuestsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-500 py-20 text-white sm:py-28">
      <div className="court-lines absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <p className="eyebrow text-ball">Invitadas</p>
        <h2 className="headline mt-4 text-6xl sm:text-8xl">
          Vienen <span className="text-ball">las mejores</span>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {GUESTS.map((g, i) => (
            <article
              key={g.name}
              className="group relative flex min-h-[560px] flex-col justify-end overflow-hidden bg-brand-950 shadow-2xl shadow-brand-950/40 sm:min-h-[640px]"
            >
              <img
                src={g.photo}
                alt={g.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                style={{ objectPosition: g.photoPosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/30 to-transparent" />

              <span className="absolute left-5 top-5 -skew-x-12 bg-ball px-3 py-1 font-display text-2xl font-extrabold italic text-brand-950">
                <span className="inline-block skew-x-12">0{i + 1}</span>
              </span>

              <div className="relative p-6 sm:p-8">
                <h3 className="headline text-5xl sm:text-7xl">{g.name}</h3>
                <p className="mt-2 font-display text-lg font-bold uppercase tracking-[0.12em] text-ball">
                  {g.role}
                </p>
                <p className="mt-3 max-w-md text-white/85">{g.text}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {guestEvents(g.name).map((e) => {
                    const d = dateParts(e.start);
                    return (
                      <li key={e.id}>
                        <a
                          href={`#${e.id}`}
                          className="inline-flex items-center gap-1.5 border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur transition hover:border-ball hover:text-ball"
                        >
                          {d.weekday} {d.day} · {e.type} · {e.city}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
