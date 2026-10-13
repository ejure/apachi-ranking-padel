import React, { useState, useEffect } from 'react';
import { Trophy, Calendar, UserPlus, Code2, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { getApiConfig, subscribeToApiActivity } from '../services/rankingApi';

export default function Navbar({ onOpenApiDrawer }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [apiConfig, setConfig] = useState(getApiConfig());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const unsubscribe = subscribeToApiActivity((_, newConfig) => {
      if (newConfig) setConfig(newConfig);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Ranking Oficial', href: '#ranking' },
    { label: 'Cómo Funciona', href: '#beneficios' },
    { label: 'Programación', href: '#programacion' },
    { label: 'Patrocinadores', href: '#patrocinadores' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-navy-950/80 to-transparent py-5'
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
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* API Mode Indicator / Trigger */}
            <button
              onClick={onOpenApiDrawer}
              className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg bg-navy-800/80 border border-blue-400/30 text-xs font-mono text-blue-200 hover:text-white hover:border-brand-400 transition-all shadow-sm group"
              title="Abrir simulador e inspector de API"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Code2 className="w-3.5 h-3.5 text-brand-400 group-hover:rotate-12 transition-transform" />
              <span>API: {apiConfig.mode === 'mock' ? 'Mock Ready' : 'Live Endpoint'}</span>
            </button>

            {/* Registration CTA */}
            <a
              href="#registro"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white text-brand-600 font-bold text-xs uppercase tracking-wider shadow-md hover:bg-brand-50 hover:shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <UserPlus className="w-3.5 h-3.5 text-brand-600" />
              <span>Regístrate</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onOpenApiDrawer}
              className="p-2 rounded-lg bg-navy-800 text-blue-300 border border-white/10"
              title="Inspector API"
            >
              <Code2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-medium text-slate-200 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApiDrawer();
              }}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-navy-800 border border-brand-500/30 text-sm font-mono text-blue-200"
            >
              <Code2 className="w-4 h-4 text-brand-400" />
              <span>Inspector de API & JSON</span>
            </button>
            <a
              href="#registro"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-brand-500 text-white font-bold text-sm uppercase tracking-wider"
            >
              <UserPlus className="w-4 h-4" />
              <span>Regístrate Oficialmente</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
