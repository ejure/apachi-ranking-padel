import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-400/40 p-1.5 flex items-center justify-center">
                <img
                  src="/images/apachi_emblem_white.png"
                  alt="APACHI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-white font-extrabold text-lg tracking-tight font-display block">
                  APACHI
                </span>
                <span className="text-[11px] text-blue-200 uppercase tracking-wider block">
                  Asociación Pádel Araucanía Chile
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              El primer ranking oficial y circuito formativo de pádel de la Región de La Araucanía. Homologado bajo estándares competitivos nacionales en conjunto con FEPACHI.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/rankingapachi.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-500 text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram @rankingapachi.cl"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contacto@rankingapachi.cl"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-500 text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Email de contacto"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#calendario" className="hover:text-white transition-colors">Programación Octubre</a></li>
              <li><a href="#comunidad" className="hover:text-white transition-colors">Comunidad & Instagram</a></li>
              <li><a href="#ranking" className="hover:text-white transition-colors">Ranking Oficial</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">Circuito APACHI</a></li>
              <li><a href="#patrocinadores" className="hover:text-white transition-colors">Patrocinadores</a></li>
            </ul>
          </div>

          {/* Categorías Col */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Categorías Oficiales
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><span className="hover:text-white cursor-pointer">Categoría OPEN</span></li>
              <li><span className="hover:text-white cursor-pointer">Categoría Tercera (3ra)</span></li>
              <li><span className="hover:text-white cursor-pointer">Categoría Cuarta (4ta)</span></li>
              <li><span className="hover:text-white cursor-pointer">Categoría Quinta (5ta)</span></li>
              <li><span className="hover:text-white cursor-pointer">Categoría Sexta (6ta)</span></li>
              <li><span className="hover:text-white cursor-pointer">Categoría Séptima (7ma)</span></li>
              <li><span className="hover:text-white cursor-pointer">Principiantes / Junior League</span></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-display">
              Sede Regional
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>Temuco & Padre Las Casas, Región de La Araucanía, Chile</span>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span className="font-mono text-blue-200">@rankingapachi.cl</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-neon-lime flex-shrink-0" />
                <span>Reconocido por FEPACHI</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} APACHI — Asociación Pádel Araucanía Chile. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacidad de Perfil Protegida</span>
            <span>•</span>
            <span>Diseño basado en Documento Oficial APACHI</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
