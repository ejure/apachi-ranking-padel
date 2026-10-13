import React, { useEffect, useState } from 'react';
import { Clock, MapPin, Maximize2, X, CalendarDays, ArrowUpRight } from 'lucide-react';
import { CONTACT, SEASON } from '../content';
import { sortedEvents, dateParts, isPast } from '../lib/events';
import InstagramIcon from './InstagramIcon';

function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [image, onClose]);

  if (!image) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-950/95 p-4 backdrop-blur"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Cerrar"
      >
        <X className="h-7 w-7" />
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[90vh] max-w-full object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function DateBadge({ iso, className = '' }) {
  const d = dateParts(iso);
  return (
    <div className={`-skew-x-12 bg-ball px-4 py-2 text-brand-950 ${className}`}>
      <div className="skew-x-12 text-center font-display uppercase italic leading-none">
        <div className="text-sm font-bold tracking-[0.15em]">{d.weekday}</div>
        <div className="text-5xl font-extrabold">{d.day}</div>
        <div className="text-sm font-bold tracking-[0.15em]">{d.month}</div>
      </div>
    </div>
  );
}

function Meta({ ev, dark = false }) {
  const muted = dark ? 'text-white/70' : 'text-ink/60';
  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-1.5 text-sm ${muted}`}>
      <span className="flex items-center gap-1.5">
        <Clock className="h-4 w-4" /> {ev.time}
      </span>
      <span className="flex items-center gap-1.5">
        <MapPin className="h-4 w-4" /> {ev.venue} · {ev.city}
      </span>
    </div>
  );
}

function FeaturedCard({ ev, onOpen, past }) {
  return (
    <article
      id={ev.id}
      className={`group flex scroll-mt-24 flex-col bg-white shadow-xl shadow-brand-900/10 transition hover:-translate-y-1 hover:shadow-2xl ${
        past ? 'opacity-50' : ''
      }`}
    >
      <button
        onClick={() => onOpen({ src: ev.poster, alt: ev.title })}
        className="relative block aspect-[4/5] overflow-hidden bg-brand-900"
        aria-label={`Ver afiche: ${ev.title}`}
      >
        <img
          src={ev.poster}
          alt={`Afiche: ${ev.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <DateBadge iso={ev.start} className="absolute left-4 top-4 shadow-lg" />
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-brand-950/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" /> Ver afiche
        </span>
      </button>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="tag bg-brand-500 text-white">
            <span>{ev.type}</span>
          </span>
          {past && (
            <span className="tag bg-ink/10 text-ink/60">
              <span>Finalizado</span>
            </span>
          )}
        </div>
        <h3 className="mt-3 font-display text-3xl font-extrabold uppercase italic leading-[0.95] text-brand-950">
          {ev.title}
        </h3>
        {ev.tagline && (
          <p className="mt-1 font-display text-lg font-bold uppercase tracking-[0.15em] text-brand-500">
            {ev.tagline}
          </p>
        )}
        {ev.summary && <p className="mt-3 text-ink/75">{ev.summary}</p>}
        <div className="mt-auto pt-5">
          {ev.guest && (
            <p className="mb-3 border-l-4 border-ball pl-3 text-sm">
              <span className="font-bold text-brand-950">{ev.guest}</span>
              <br />
              <span className="text-ink/60">{ev.guestRole}</span>
            </p>
          )}
          <Meta ev={ev} />
        </div>
      </div>
    </article>
  );
}

function RowItem({ ev, past }) {
  const d = dateParts(ev.start);
  return (
    <article
      id={ev.id}
      className={`grid scroll-mt-24 grid-cols-[auto_1fr] items-center gap-5 border-b border-white/15 py-6 sm:grid-cols-[auto_1fr_auto] sm:gap-8 ${
        past ? 'opacity-50' : ''
      }`}
    >
      <div className="w-20 text-center font-display uppercase italic leading-none">
        <div className="text-sm font-bold tracking-[0.15em] text-ball">{d.weekday}</div>
        <div className="text-6xl font-extrabold text-white">{d.day}</div>
        <div className="text-sm font-bold tracking-[0.15em] text-white/60">{d.month}</div>
      </div>
      <div>
        <span className="tag bg-white/10 text-ball">
          <span>{past ? 'Finalizado' : ev.type}</span>
        </span>
        <h3 className="mt-2 font-display text-2xl font-extrabold uppercase italic leading-none text-white sm:text-3xl">
          {ev.title}
        </h3>
        <p className="mt-1 text-sm text-white/70">
          {ev.guest} · {ev.guestRole}
        </p>
        <div className="mt-2 sm:hidden">
          <Meta ev={ev} dark />
        </div>
      </div>
      <div className="hidden text-right sm:block">
        <p className="font-display text-2xl font-extrabold italic text-white">{ev.time}</p>
        <p className="mt-1 flex items-center justify-end gap-1.5 text-sm text-white/70">
          <MapPin className="h-4 w-4" /> {ev.venue} · {ev.city}
        </p>
      </div>
    </article>
  );
}

export default function CalendarSection() {
  const [lightbox, setLightbox] = useState(null);
  const now = new Date();
  const events = sortedEvents();
  const featured = events.filter((e) => e.poster);
  const others = events.filter((e) => !e.poster);

  return (
    <section id="eventos" className="relative bg-paper py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow text-brand-500">Calendario · {SEASON.range}</p>
            <h2 className="headline mt-4 text-6xl text-brand-950 sm:text-8xl lg:text-9xl">
              Próximos
              <br />
              <span className="text-brand-500">eventos</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <button
              onClick={() => setLightbox({ src: SEASON.poster, alt: 'Calendario de octubre APACHI' })}
              className="btn btn-brand"
            >
              <CalendarDays className="h-5 w-5" /> Ver calendario
            </button>
            <a
              href={CONTACT.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-brand-950 text-white hover:bg-brand-800"
            >
              <InstagramIcon className="h-5 w-5" /> Inscríbete
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((ev) => (
            <FeaturedCard key={ev.id} ev={ev} onOpen={setLightbox} past={isPast(ev, now)} />
          ))}
        </div>

        {others.length > 0 && (
          <div className="relative mt-10 overflow-hidden bg-brand-950 px-6 py-8 sm:px-10 sm:py-10">
            <img
              src="/images/eventos/mica-raffe-charla.jpg"
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[50%_30%] opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/40" />
            <div className="relative flex flex-wrap items-end justify-between gap-4">
              <h3 className="headline text-4xl text-white sm:text-5xl">
                Más <span className="text-ball">fechas</span>
              </h3>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-ball"
              >
                Novedades en Instagram <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="relative mt-4 border-t border-white/15">
              {others.map((ev) => (
                <RowItem key={ev.id} ev={ev} past={isPast(ev, now)} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
