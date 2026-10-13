import React from 'react';
import { CALENDAR } from '../content';

export default function CalendarSection() {
  return (
    <section id="calendario" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Agenda */}
          <div className="lg:col-span-7">
            <p className="eyebrow">Calendario</p>
            <h2 className="mt-3 text-5xl font-medium text-brand-500 sm:text-7xl">
              {CALENDAR.month}
            </h2>

            <div className="mt-12 border-t border-ink">
              {CALENDAR.days.map((d) => (
                <div
                  key={d.weekday + d.day}
                  className="grid grid-cols-[88px_1fr] gap-6 border-b border-ink/80 py-7 sm:grid-cols-[120px_1fr]"
                >
                  <div className="font-condensed uppercase leading-none text-ink">
                    <span className="text-3xl sm:text-4xl">{d.weekday}</span>
                    <span className="ml-1 text-3xl text-brand-500 sm:text-4xl">{d.day}</span>
                  </div>

                  <div className="space-y-6">
                    {d.items.map((it, i) => (
                      <div key={i} className={i > 0 ? 'border-t border-ink/15 pt-6' : ''}>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                          <h3 className="text-xl font-medium sm:text-2xl">{it.title}</h3>
                          <span className="text-sm italic text-ink/60 sm:whitespace-nowrap">
                            {it.time}
                          </span>
                        </div>
                        <p className="mt-1 text-sm uppercase tracking-[0.15em] text-ink/70">
                          {it.venue} — {it.city}
                        </p>
                        {it.people && (
                          <p className="mt-1 text-sm tracking-wide text-brand-500">{it.people}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Afiche */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <img
                src={CALENDAR.poster}
                alt={`Afiche calendario ${CALENDAR.month}`}
                className="w-full rounded-sm shadow-[0_30px_60px_-30px_rgba(10,37,71,0.45)]"
              />
              <a
                href={CALENDAR.poster}
                download
                className="mt-4 inline-block text-sm text-ink/60 underline underline-offset-4 hover:text-brand-500"
              >
                Descargar afiche
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
