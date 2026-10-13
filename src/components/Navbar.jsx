import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV } from '../content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? 'bg-paper/95 backdrop-blur border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={solid ? '/images/apachi_emblem_dark.png' : '/images/apachi_emblem_white.png'}
            alt=""
            className="h-9 w-9"
          />
          <span
            className={`font-display text-[13px] font-bold uppercase leading-tight tracking-wide ${
              solid ? 'text-brand-500' : 'text-white'
            }`}
          >
            Asociación Pádel
            <br />
            Araucanía Chile
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                solid ? 'text-ink/70 hover:text-brand-500' : 'text-white/80 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${solid ? 'text-ink' : 'text-white'}`}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/10 bg-paper">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="container-x block border-b border-ink/10 py-4 font-display text-lg text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
