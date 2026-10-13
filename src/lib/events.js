import { EVENTS } from '../content';

const TZ = 'America/Santiago';

const fmt = (opts) => new Intl.DateTimeFormat('es-CL', { timeZone: TZ, ...opts });
const weekdayFmt = fmt({ weekday: 'short' });
const dayFmt = fmt({ day: 'numeric' });
const monthFmt = fmt({ month: 'short' });
const longFmt = fmt({ weekday: 'long', day: 'numeric', month: 'long' });

const clean = (s) => s.replace('.', '').toUpperCase();

export function dateParts(iso) {
  const d = new Date(iso);
  return {
    weekday: clean(weekdayFmt.format(d)),
    day: dayFmt.format(d),
    month: clean(monthFmt.format(d)),
    long: longFmt.format(d),
  };
}

export function isPast(event, now = new Date()) {
  return new Date(event.end || event.start) < now;
}

export function sortedEvents() {
  return [...EVENTS].sort((a, b) => new Date(a.start) - new Date(b.start));
}

export function nextEvent(now = new Date()) {
  return sortedEvents().find((e) => !isPast(e, now)) || null;
}

/** Agrupa los eventos por día para mostrarlos como calendario. */
export function eventsByDay() {
  const groups = [];
  for (const e of sortedEvents()) {
    const key = e.start.slice(0, 10);
    let g = groups.find((x) => x.key === key);
    if (!g) {
      g = { key, ...dateParts(e.start), events: [] };
      groups.push(g);
    }
    g.events.push(e);
  }
  return groups;
}

export function countdownTo(iso, now = new Date()) {
  let ms = Math.max(0, new Date(iso) - now);
  const days = Math.floor(ms / 86400000);
  ms -= days * 86400000;
  const hours = Math.floor(ms / 3600000);
  ms -= hours * 3600000;
  const minutes = Math.floor(ms / 60000);
  ms -= minutes * 60000;
  const seconds = Math.floor(ms / 1000);
  return { days, hours, minutes, seconds };
}
