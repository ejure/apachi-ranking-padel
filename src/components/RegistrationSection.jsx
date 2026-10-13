import React, { useState } from 'react';
import { UserPlus, ShieldAlert, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { registerPlayer } from '../services/rankingApi';

export default function RegistrationSection({ onPlayerRegistered }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    phone: '',
    category: '4TA',
    gender: 'M',
    club: 'Club Pádel Temuco',
    position: 'Drive',
    hand: 'Diestro',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: '' }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const result = await registerPlayer(formData);
      setStatus({
        type: 'success',
        message: `¡Registro exitoso! ${result.data.name} ha sido agregado al ranking oficial en categoría ${result.data.category}.`,
      });

      // Clear form
      setFormData({
        fullName: '',
        email: '',
        dob: '',
        phone: '',
        category: '4TA',
        gender: 'M',
        club: 'Club Pádel Temuco',
        position: 'Drive',
        hand: 'Diestro',
      });

      if (onPlayerRegistered) {
        onPlayerRegistered(result.data);
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Ocurrió un error al registrar en la API. Por favor intenta de nuevo.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registro" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-lime/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Box matching PDF Page 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-navy-950">
          
          {/* Left Column: Player Action Photo from PDF */}
          <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full">
            <img
              src="/images/player_smash.jpg"
              alt="Jugador de Pádel Rematando - APACHI"
              className="w-full h-full object-cover object-top filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent lg:hidden" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy-950 hidden lg:block" />
            
            {/* Overlay Quote */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/80 backdrop-blur-md border border-white/10">
              <p className="text-xs text-blue-200 italic leading-snug">
                "El ranking oficial me permitió ordenar mi categoría y disputar torneos con puntos federados reconocidos a nivel nacional."
              </p>
              <div className="mt-2 text-[11px] font-bold text-white flex items-center justify-between">
                <span>Cristobal Ibarra • #1 OPEN</span>
                <span className="text-brand-400">1.980 PTS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Blue Registration Form from PDF */}
          <div className="lg:col-span-7 bg-brand-600 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Header with Title and Logo Emblem */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
                    Regístrate
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 mt-1">
                    Sé parte del primer ranking regional y nacional APACHI
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/30 p-2 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/apachi_emblem_white.png"
                    alt="Emblema APACHI"
                    className="w-full h-full object-contain filter drop-shadow"
                  />
                </div>
              </div>

              {/* Status Message */}
              {status && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs sm:text-sm flex items-start gap-3 ${
                    status.type === 'success'
                      ? 'bg-emerald-500/20 text-emerald-100 border border-emerald-400/40'
                      : 'bg-rose-500/20 text-rose-100 border border-rose-400/40'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-neon-lime flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-300 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Interactive Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-1.5">
                    Nombre Completo (Full Name) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Martín González Silva"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-brand-700/60 border border-white/30 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-white focus:bg-brand-700 text-sm transition-all"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-1.5">
                      Correo Electrónico (Email) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tuemail@ejemplo.cl"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-700/60 border border-white/30 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-white focus:bg-brand-700 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-1.5">
                      Fecha de Nacimiento (DOB) *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-700/60 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-brand-700 text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Category & Gender */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-1.5">
                      Categoría / Liga Deseada *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-700/60 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-brand-700 text-sm transition-all"
                    >
                      <option value="OPEN" className="text-navy-900">Categoría OPEN (Profesional / Avanzado)</option>
                      <option value="3RA" className="text-navy-900">Categoría Tercera (Avanzado)</option>
                      <option value="4TA" className="text-navy-900">Categoría Cuarta (Intermedio Alto)</option>
                      <option value="5TA" className="text-navy-900">Categoría Quinta (Intermedio)</option>
                      <option value="6TA" className="text-navy-900">Categoría Sexta (Formativo)</option>
                      <option value="7MA" className="text-navy-900">Categoría Séptima (Iniciación)</option>
                      <option value="PRINCIPIANTES" className="text-navy-900">Principiantes / Junior League</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-1.5">
                      Rama / Género *
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-700/60 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-brand-700 text-sm transition-all"
                    >
                      <option value="M" className="text-navy-900">Masculino</option>
                      <option value="F" className="text-navy-900">Femenino</option>
                    </select>
                  </div>
                </div>

                {/* Club & Court Position */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-1.5">
                      Club o Ciudad de Origen
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Club Pádel Temuco"
                      value={formData.club}
                      onChange={(e) => setFormData({ ...formData, club: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-700/60 border border-white/30 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-white focus:bg-brand-700 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-1.5">
                      Posición en Pista
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-700/60 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-brand-700 text-sm transition-all"
                    >
                      <option value="Drive" className="text-navy-900">Drive (Lado Derecho)</option>
                      <option value="Revés" className="text-navy-900">Revés (Lado Izquierdo)</option>
                      <option value="Ambos" className="text-navy-900">Polivalente (Ambos)</option>
                    </select>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 py-4 rounded-xl bg-white hover:bg-brand-50 text-brand-700 font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all transform active:scale-98 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-brand-600" />
                      <span>Conectando con API APACHI...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5 text-brand-600" />
                      <span>Registrarme Ahora (Register Now)</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Privacy Disclaimer matching exact PDF text */}
            <div className="mt-8 pt-4 border-t border-white/20 text-[11px] text-blue-200/80 text-center leading-relaxed">
              El nombre de tu perfil no se compartirá con fines comerciales. Nunca envíes contraseñas. Certificación bajo protocolo deportivo regional APACHI.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
