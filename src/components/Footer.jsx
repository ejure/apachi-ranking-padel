import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { CONTACT, NAV, POSTS } from '../content';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-paper">
      {/* Instagram */}
      <div className="container-x py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow text-brand-500">Síguenos</p>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="headline group mt-4 inline-flex flex-wrap items-baseline gap-x-3 break-all text-5xl text-brand-950 transition-colors hover:text-brand-500 sm:text-7xl lg:text-8xl"
            >
              @{CONTACT.instagram}
              <ArrowUpRight className="h-10 w-10 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-14 sm:w-14" />
            </a>
          </div>
          <p className="max-w-xs text-ink/70">
            Afiches, resultados e inscripciones: todo se publica primero en Instagram.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {POSTS.map((p) => (
            <a
              key={p.image}
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/5] overflow-hidden bg-brand-900"
            >
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-brand-950/0 text-white opacity-0 transition group-hover:bg-brand-950/50 group-hover:opacity-100">
                <InstagramIcon className="h-10 w-10" />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Contacto */}
      <div className="relative overflow-hidden bg-brand-950 text-white">
        <div className="net-pattern absolute inset-0" />
        <div className="container-x relative grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-ball">Contacto</p>
            <h2 className="headline mt-4 text-5xl sm:text-7xl">
              ¿Juegas pádel?
              <br />
              <span className="text-ball">Hablemos.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center justify-between gap-4 border border-white/15 bg-white/5 p-5 transition hover:border-ball hover:bg-white/10"
            >
              <span className="flex items-center gap-4">
                <Mail className="h-6 w-6 shrink-0 text-ball" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    Correo
                  </span>
                  <span className="break-all font-display text-xl font-bold sm:text-2xl">{CONTACT.email}</span>
                </span>
              </span>
              <ArrowUpRight className="h-6 w-6 shrink-0 transition group-hover:text-ball" />
            </a>
            <a
              href={CONTACT.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border border-white/15 bg-white/5 p-5 transition hover:border-ball hover:bg-white/10"
            >
              <span className="flex items-center gap-4">
                <InstagramIcon className="h-6 w-6 shrink-0 text-ball" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    Mensaje directo
                  </span>
                  <span className="font-display text-xl font-bold sm:text-2xl">@{CONTACT.instagram}</span>
                </span>
              </span>
              <ArrowUpRight className="h-6 w-6 shrink-0 transition group-hover:text-ball" />
            </a>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="container-x flex flex-col gap-6 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <img src="/images/apachi_emblem_white.png" alt="" className="h-9 w-9 opacity-80" />
              <span>
                Asociación Pádel Araucanía Chile · {CONTACT.region}
              </span>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
