import React from 'react';
import { GUESTS } from '../content';

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
            <article key={g.name} className="group grid grid-cols-[40%_1fr] overflow-hidden bg-brand-950 shadow-2xl shadow-brand-950/30">
              <div className="relative overflow-hidden">
                <img
                  src={g.photo}
                  alt={g.name}
                  loading="lazy"
                  className="h-full min-h-[260px] w-full scale-[1.6] object-cover transition duration-500 group-hover:scale-[1.7]"
                  style={{ objectPosition: g.photoPosition, transformOrigin: g.photoPosition }}
                />
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <span className="font-display text-7xl font-extrabold italic leading-none text-white/10">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="headline text-4xl sm:text-5xl">{g.name}</h3>
                  <p className="mt-2 font-display text-lg font-bold uppercase tracking-[0.12em] text-ball">
                    {g.role}
                  </p>
                  <p className="mt-3 text-white/75">{g.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
