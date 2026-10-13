import React from 'react';
import { Bell } from 'lucide-react';
import { CATEGORIES, CONTACT } from '../content';

export default function RankingSection() {
  return (
    <section id="ranking" className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28">
      <img
        src="/images/court_hero_clean.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-950/40" />

      <div className="container-x relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow text-ball">Ranking APACHI</p>
          <h2 className="headline mt-4 text-7xl sm:text-9xl">
            Muy
            <br />
            <span className="text-ball">pronto</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
            Estamos registrando los primeros resultados. Cuando la tabla esté lista la publicaremos
            aquí, separada por categoría.
          </p>
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ball mt-8"
          >
            <Bell className="h-5 w-5" /> Avísame en Instagram
          </a>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-white/50">
            Categorías
          </p>
          <ul className="mt-4 space-y-2">
            {CATEGORIES.map((c, i) => (
              <li
                key={c}
                className="flex items-center justify-between border border-white/10 bg-white/5 px-5 py-3 backdrop-blur"
              >
                <span className="flex items-center gap-4">
                  <span className="font-display text-lg font-bold italic text-white/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-2xl font-extrabold uppercase italic">{c}</span>
                </span>
                <span className="flex gap-1" aria-hidden="true">
                  {[0, 1, 2].map((k) => (
                    <span key={k} className="h-2 w-6 -skew-x-12 bg-white/15" />
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
