import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV, CONTACT } from '../content';
import InstagramIcon from './InstagramIcon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid ? 'bg-brand-950/95 shadow-lg shadow-black/20 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="APACHI, ir al inicio">
          <img src="/images/apachi-logo-white.png" alt="" className="h-12 w-12" />
          <span className="font-display text-2xl font-extrabold italic uppercase leading-none tracking-wide text-white">
            Apachi
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-base font-bold uppercase tracking-[0.12em] text-white/75 transition-colors hover:text-ball"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ball !px-5 !py-2 !text-base"
          >
            <InstagramIcon className="h-4 w-4" /> Síguenos
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-white md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-brand-950 md:hidden">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="container-x block border-b border-white/10 py-4 font-display text-3xl font-extrabold uppercase italic text-white"
            >
              {l.label}
            </a>
          ))}
          <div className="container-x py-6">
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ball w-full"
            >
              <InstagramIcon className="h-5 w-5" /> @{CONTACT.instagram}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
