import React from 'react';
import { CATEGORIES } from '../content';

export default function RankingSection() {
  return (
    <section id="ranking" className="border-t border-ink/10 bg-white py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Ranking</p>
          <h2 className="mt-3 text-4xl font-medium leading-tight sm:text-6xl">
            Muy pronto.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
            Estamos registrando los primeros resultados. Cuando la tabla esté lista la publicaremos
            aquí, separada por categoría.
          </p>
        </div>

        <div className="lg:col-span-7">
          <p className="text-sm uppercase tracking-[0.15em] text-ink/50">Categorías</p>
          <ul className="mt-4 border-t border-ink">
            {CATEGORIES.map((c, i) => (
              <li
                key={c}
                className="flex items-baseline justify-between border-b border-ink/80 py-5"
              >
                <span className="font-display text-2xl text-brand-500 sm:text-3xl">{c}</span>
                <span className="text-sm text-ink/40">{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
