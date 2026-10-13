import React from 'react';
import { X, Trophy, Award, TrendingUp, ShieldCheck, MapPin, Swords, Activity, Calendar } from 'lucide-react';

export default function PlayerModal({ player, onClose }) {
  if (!player) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner with Court Texture */}
        <div className="relative bg-gradient-to-r from-brand-600 to-navy-900 text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Avatar / Photo */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white/10 border-2 border-white/30 flex-shrink-0 shadow-lg">
              {player.image ? (
                <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-brand-500 text-white font-extrabold text-3xl font-display">
                  {player.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  {player.category} • {player.gender === 'F' ? 'Femenino' : 'Masculino'}
                </span>
                <span className="px-3 py-0.5 rounded-full bg-neon-lime text-navy-900 text-xs font-bold uppercase tracking-wider">
                  Rank #{player.rank}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
                {player.name}
              </h3>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-blue-200 mt-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{player.club}</span>
                <span>•</span>
                <span>{player.city}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Key Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
              <div className="text-xs text-slate-500 font-medium">Puntos Totales</div>
              <div className="text-2xl font-black text-brand-600 font-display mt-0.5">
                {player.points.toLocaleString('es-CL')}
              </div>
              <div className="text-[10px] text-slate-400">APACHI / FEPACHI</div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
              <div className="text-xs text-slate-500 font-medium">Efectividad</div>
              <div className="text-2xl font-black text-emerald-600 font-display mt-0.5">
                {player.winRate}%
              </div>
              <div className="text-[10px] text-slate-400">Victorias</div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
              <div className="text-xs text-slate-500 font-medium">Partidos (PG/PP)</div>
              <div className="text-2xl font-black text-navy-900 font-display mt-0.5">
                {player.matchesPlayed}
              </div>
              <div className="text-[10px] text-slate-400">{player.wins}V - {player.losses}D</div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
              <div className="text-xs text-slate-500 font-medium">Racha Actual</div>
              <div className="flex items-center justify-center gap-1 mt-1.5">
                {player.recentForm.slice(-3).map((r, i) => (
                  <span
                    key={i}
                    className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center text-white ${
                      r === 'W' ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">Últimos juegos</div>
            </div>
          </div>

          {/* Technical Profile Attributes */}
          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-3">
            <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4 text-brand-500" />
              <span>Ficha Técnica de Cancha</span>
            </h4>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <span className="text-slate-500 block">Posición:</span>
                <span className="font-bold text-navy-900">{player.position}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Brazo Hábil:</span>
                <span className="font-bold text-navy-900">{player.hand}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Pala Oficial:</span>
                <span className="font-bold text-navy-900 truncate block">{player.racket}</span>
              </div>
            </div>
            {player.bio && (
              <p className="text-xs text-slate-600 italic pt-1 border-t border-blue-100/70">
                "{player.bio}"
              </p>
            )}
          </div>

          {/* Tournaments History */}
          <div>
            <h4 className="text-sm font-bold text-navy-900 mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-500" />
                <span>Historial de Torneos Puntuables</span>
              </span>
              <span className="text-xs font-normal text-slate-500">Temporada 2026</span>
            </h4>

            {player.tournaments && player.tournaments.length > 0 ? (
              <div className="space-y-2">
                {player.tournaments.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-navy-900">{t.name}</div>
                      <div className="text-[11px] text-slate-500">{t.date} • {t.result}</div>
                    </div>
                    <div className="text-right">
                      <span className="font-extrabold text-brand-600 text-sm">+{t.pointsEarned}</span>
                      <span className="text-[10px] text-slate-400 block">PTS</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 bg-slate-50 p-4 rounded-xl text-center border border-slate-200">
                Jugador en fase de enrolamiento y acumulación de puntos para el próximo corte de torneo.
              </p>
            )}
          </div>

          {/* Footer Info */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Registro Verificado APACHI ID: {player.id}</span>
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-navy-900 text-white font-bold text-xs hover:bg-brand-600 transition-colors"
            >
              Cerrar Ficha
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
