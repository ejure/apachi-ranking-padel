import React, { useState } from 'react';
import { ExternalLink, Heart, MessageCircle, Share2, Bookmark, CheckCircle2, Sparkles, Calendar, Award } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramFeedSection() {
  const [activeStory, setActiveStory] = useState(null);

  const stories = [
    { title: 'Calendario', icon: '📅', subtitle: 'Octubre 2026' },
    { title: 'Exhibición', icon: '🏆', subtitle: 'CentroPádel' },
    { title: 'Clínicas', icon: '🎾', subtitle: 'Mirasur' },
    { title: 'Psicología', icon: '🧠', subtitle: 'Mica Raffe' },
    { title: 'Sedes', icon: '📍', subtitle: 'Araucanía' },
    { title: 'FEPACHI', icon: '🇨🇱', subtitle: 'Homologado' },
  ];

  const posts = [
    {
      id: 1,
      image: '/images/calendario_octubre_apachi.jpg',
      tag: 'Calendario Oficial',
      title: 'Cronograma Oficial Octubre APACHI',
      date: 'Publicado recientemente',
      caption: '¡Presentamos nuestra programación oficial de octubre! Exhibición estelar con Kim Ahumada & Mica Raffe en CentroPádel Temuco, clínica en Mirasur y ciclo de psicología deportiva en Temuco, Nueva Imperial y BlackPádel Molco.',
      likes: 142,
      comments: 18,
      hashtags: '#PadelAraucania #RankingApachi #PadelChile #TemucoPadel #FEPACHI',
    },
    {
      id: 2,
      image: '/images/player_smash.jpg',
      tag: 'Exhibición Estelar',
      title: 'Lunes 26: Exhibición en CentroPádel',
      date: 'CentroPádel Temuco',
      caption: 'Lunes 26 a las 19:00 hrs. Los mejores exponentes regionales frente a frente en la pista central de CentroPádel Temuco. Kim Ahumada y Mica Raffe abren la gran semana formativa.',
      likes: 198,
      comments: 24,
      hashtags: '#ExhibicionPadel #CentroPadel #PadelTemuco #ApachiOficial',
    },
    {
      id: 3,
      image: '/images/indoor_court_runner.jpg',
      tag: 'Psicología Deportiva',
      title: 'Ciclo de Charlas Mentales con Mica Raffe',
      date: 'ArenaTrañi • Imperial • BlackPádel',
      caption: '¿Cómo juegas bajo presión en punto de oro? La fortaleza mental y la comunicación con tu pareja marcan la diferencia. Mica Raffe brindará herramientas aplicadas a competencia real.',
      likes: 165,
      comments: 29,
      hashtags: '#PsicologiaDeportiva #MenteGanadora #PadelTactico #SaludMental',
    },
    {
      id: 4,
      image: '/images/padel_balls.jpg',
      tag: 'Clínica Técnica',
      title: 'Martes 27: Clínica en Mirasur Pádel',
      date: 'Mirasur Temuco (11:00 y 15:00 hrs)',
      caption: 'Doble sesión técnica y formativa en cancha: corrección biomecánica, defensa en reja y vidrio, y transiciones ofensivas para jugadores de todas las categorías.',
      likes: 130,
      comments: 15,
      hashtags: '#ClinicaPadel #MirasurPadel #AprendePadel #PadelFormativo',
    },
    {
      id: 5,
      image: '/images/fepachi_celebration.jpg',
      tag: 'Circuito Federado',
      title: 'Puntaje Oficial Reconocido por FEPACHI',
      date: 'Federación de Pádel de Chile',
      caption: 'Compromiso con el crecimiento regional. La Asociación Pádel Araucanía Chile cuenta con el respaldo institucional para proyectar a nuestros talentos al escalafón nacional.',
      likes: 245,
      comments: 32,
      hashtags: '#FEPACHI #PadelNacional #RepresentaATuPais #RankingOficial',
    },
    {
      id: 6,
      image: '/images/players_women_team.jpg',
      tag: 'Comunidad Femenina',
      title: 'Impulso al Pádel Femenino y Menores',
      date: 'Región de La Araucanía',
      caption: 'Vemos muy importante el apoyo desde el comienzo. Impulsando el deporte desde las escuelas y clubes formativos para potenciar el talento en todas las ramas.',
      likes: 178,
      comments: 21,
      hashtags: '#PadelFemenino #PadelInfantil #EscuelasDeportivas #Araucania',
    },
  ];

  return (
    <section id="comunidad" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Profile Card Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            
            {/* Avatar & Info */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5">
              <div className="relative">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md">
                  <div className="w-full h-full rounded-full bg-white p-1">
                    <img
                      src="/images/apachi_emblem_dark.png"
                      alt="Avatar @rankingapachi.cl"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center border-2 border-white">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-black text-navy-900 font-display">
                    rankingapachi.cl
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-600 border border-brand-200">
                    Cuenta Oficial
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-700">
                  Asociación Pádel Araucanía Chile (APACHI)
                </h4>

                <p className="text-xs text-slate-600 max-w-xl mt-1 leading-relaxed">
                  Circuito formativo y competitivo regional • Puntos avalados por FEPACHI • Clínicas, exhibiciones, psicología deportiva y torneos oficiales en La Araucanía.
                </p>

                {/* Counter Strip from Instagram */}
                <div className="flex items-center justify-center sm:justify-start gap-6 mt-3 text-xs text-slate-600">
                  <span><strong className="text-navy-900 font-bold">7</strong> publicaciones</span>
                  <span><strong className="text-navy-900 font-bold">760+</strong> seguidores</span>
                  <span><strong className="text-navy-900 font-bold">365</strong> seguidos</span>
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <a
              href="https://www.instagram.com/rankingapachi.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 text-white text-xs font-extrabold uppercase tracking-wider hover:opacity-95 shadow-md flex items-center gap-2 flex-shrink-0 transition-transform hover:scale-105 active:scale-95"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Seguir en Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Story Highlights Bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-6 min-w-max justify-start sm:justify-center">
              {stories.map((story, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 cursor-pointer group">
                  <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 group-hover:scale-105 transition-transform shadow-sm">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xl">
                      {story.icon}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {story.title}
                  </span>
                  <span className="text-[9px] text-slate-400">
                    {story.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feed Posts Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-brand-500 font-bold text-xs uppercase tracking-widest block mb-1">
                Contenido Destacado
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-display">
                Publicaciones del Circuito
              </h3>
            </div>
            <a
              href="https://www.instagram.com/rankingapachi.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              <span>Ver todas en Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-card-subtle transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-navy-950/80 text-white backdrop-blur-md border border-white/20">
                        {post.tag}
                      </span>
                    </div>
                  </div>

                  {/* Caption & Info */}
                  <div className="p-5">
                    <div className="text-[11px] text-slate-400 font-medium mb-1">
                      {post.date}
                    </div>
                    <h4 className="font-extrabold text-base text-navy-900 mb-2 font-display group-hover:text-brand-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.caption}
                    </p>
                    <div className="text-[10px] text-brand-600 font-medium mt-2">
                      {post.hashtags}
                    </div>
                  </div>
                </div>

                {/* Social Interaction Footer */}
                <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50/50">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-slate-600 font-semibold">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1 text-slate-600 font-semibold">
                      <MessageCircle className="w-3.5 h-3.5 text-blue-500" />
                      <span>{post.comments}</span>
                    </span>
                  </div>

                  <a
                    href="https://www.instagram.com/rankingapachi.cl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-navy-900 hover:text-brand-600 flex items-center gap-1"
                  >
                    <span>Ver post</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
