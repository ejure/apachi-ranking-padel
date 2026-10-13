import React, { useState, useEffect } from 'react';
import { Calendar, Trophy, Menu, X, ChevronRight, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Programación Octubre', href: '#calendario', highlight: true },
    { label: 'Comunidad & Instagram', href: '#comunidad' },
    { label: 'Ranking Oficial', href: '#ranking' },
    { label: 'Circuito APACHI', href: '#beneficios' },
    { label: 'Patrocinadores', href: '#patrocinadores' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-navy-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#inicio" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-400/40 p-1.5 flex items-center justify-center transition-transform group-hover:scale-105 shadow-glow">
              <img
                src="/images/apachi_emblem_white.png"
                alt="APACHI Logo"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div>
              <div className="text-white font-extrabold text-base tracking-tight leading-none flex items-center gap-1.5">
                <span>APACHI</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-brand-500 text-white px-1.5 py-0.5 rounded">
                  Oficial
                </span>
              </div>
              <p className="text-[10px] text-blue-200 tracking-wider font-medium uppercase mt-0.5">
                Asociación Pádel Araucanía Chile
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium px-3.5 py-2 rounded-xl transition-all ${
                  link.highlight
                    ? 'text-neon-lime bg-white/5 border border-neon-lime/30 font-bold hover:bg-white/10'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Direct Instagram CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://www.instagram.com/rankingapachi.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@rankingapachi.cl</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="https://www.instagram.com/rankingapachi.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 text-white border border-white/15"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between text-base font-medium py-2.5 px-3 rounded-xl ${
                link.highlight
                  ? 'text-neon-lime bg-white/10 font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}

          <div className="pt-3 border-t border-white/10">
            <a
              href="https://www.instagram.com/rankingapachi.cl/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 text-white font-bold text-sm uppercase tracking-wider"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Seguir en Instagram @rankingapachi.cl</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
