import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT, NAV } from '../content';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-900 text-white">
      <div className="container-x py-20 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Contacto</p>
        <a
          href={CONTACT.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 inline-flex items-baseline gap-3 font-display text-4xl font-medium transition-colors hover:text-ball sm:text-6xl"
        >
          @{CONTACT.instagram}
          <ArrowUpRight className="h-8 w-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-12 sm:w-12" />
        </a>
        <p className="mt-4 text-white/60">Escríbenos por Instagram para inscripciones y consultas.</p>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-6 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/apachi_emblem_white.png" alt="" className="h-8 w-8 opacity-80" />
            <span>
              Asociación Pádel Araucanía Chile · {CONTACT.region}
            </span>
          </div>
          <nav className="flex gap-6">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
