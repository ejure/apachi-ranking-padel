import React from 'react';
import { sortedEvents, dateParts } from '../lib/events';

export default function Ticker() {
  const items = sortedEvents().map((e) => {
    const d = dateParts(e.start);
    return `${d.weekday} ${d.day} · ${e.type} · ${e.city}`;
  });
  const row = [...items, 'Kim Ahumada N°1 de Chile', 'Mica Raffe · Pádel mental'];

  return (
    <div className="relative z-10 -mt-px overflow-hidden bg-ball py-3 text-brand-950" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span
                key={`${k}-${i}`}
                className="flex items-center whitespace-nowrap px-6 font-display text-xl font-extrabold uppercase italic tracking-wide"
              >
                {t}
                <span className="ml-12 inline-block h-3 w-3 rounded-full bg-brand-950" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
