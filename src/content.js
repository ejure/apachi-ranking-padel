/**
 * Todo el contenido editable del sitio vive aquí.
 * Para agregar un evento, copia un bloque de EVENTS y cambia sus datos.
 * Los eventos pasados se marcan solos como "Finalizado" según la fecha.
 */

export const NAV = [
  { label: 'Eventos', href: '#eventos' },
  { label: 'La Asociación', href: '#asociacion' },
  { label: 'Ranking', href: '#ranking' },
  { label: 'Contacto', href: '#contacto' },
];

export const CONTACT = {
  instagram: 'rankingapachi.cl',
  instagramUrl: 'https://www.instagram.com/rankingapachi.cl/',
  instagramDm: 'https://ig.me/m/rankingapachi.cl',
  email: 'contacto@rankingapachi.cl',
  region: 'Región de La Araucanía, Chile',
};

/** Nombre corto de la temporada de eventos que se destaca en la portada. */
export const SEASON = {
  label: 'Semana APACHI',
  range: '26 — 29 Oct 2026',
  poster: '/images/calendario_octubre_apachi.jpg',
};

/**
 * Eventos. `start` y `end` en hora de Chile (-03:00).
 * `poster` es opcional: si existe, la tarjeta muestra el afiche de Instagram.
 */
export const EVENTS = [
  {
    id: 'exhibicion-kim-ahumada',
    start: '2026-10-26T19:00:00-03:00',
    end: '2026-10-26T21:00:00-03:00',
    time: '19:00 hrs',
    type: 'Exhibición',
    title: 'Partido exhibición de pádel',
    guest: 'Kim Ahumada',
    guestRole: 'N°1 de Chile',
    venue: 'CentroPádel',
    city: 'Temuco',
    poster: '/images/eventos/exhibicion-kim-ahumada.jpg',
    summary: 'Mira en vivo a la número uno de Chile en un partido de exhibición.',
  },
  {
    id: 'clinica-kim-ahumada',
    start: '2026-10-27T11:00:00-03:00',
    end: '2026-10-27T17:00:00-03:00',
    time: '11:00 y 15:00 hrs',
    type: 'Clínica',
    title: 'Clínica de pádel',
    guest: 'Kim Ahumada',
    guestRole: 'N°1 de Chile',
    venue: 'Mirasur',
    city: 'Temuco',
    poster: '/images/eventos/clinica-kim-ahumada.jpg',
    summary: 'Entrena con la N°1 de Chile. Dos turnos durante el día.',
  },
  {
    id: 'americano-charla-mica-raffe',
    start: '2026-10-27T19:00:00-03:00',
    end: '2026-10-27T22:00:00-03:00',
    time: '19:00 hrs',
    type: 'Americano + Charla',
    title: 'Americano Damas + Charla de psicología deportiva',
    tagline: 'Pádel mental',
    guest: 'Kim Ahumada · Mica Raffe',
    guestRole: 'N°1 de Chile · Psicóloga deportiva Chile – Argentina',
    venue: 'Arena Trañi',
    city: 'Temuco',
    poster: '/images/eventos/americano-charla-mica-raffe.jpg',
    summary: 'Un americano para damas y, después, una charla sobre la cabeza en la cancha.',
  },
  {
    id: 'charla-imperial',
    start: '2026-10-28T19:00:00-03:00',
    end: '2026-10-28T21:00:00-03:00',
    time: '19:00 hrs',
    type: 'Charla',
    title: 'Charla de psicología deportiva',
    guest: 'Mica Raffe',
    guestRole: 'Psicóloga deportiva Chile – Argentina',
    venue: 'ImperialPádel',
    city: 'Imperial',
  },
  {
    id: 'charla-molco',
    start: '2026-10-29T19:00:00-03:00',
    end: '2026-10-29T21:00:00-03:00',
    time: '19:00 hrs',
    type: 'Charla',
    title: 'Charla de psicología deportiva',
    guest: 'Mica Raffe',
    guestRole: 'Psicóloga deportiva Chile – Argentina',
    venue: 'BlackPadel',
    city: 'Molco',
  },
];

/** Invitadas destacadas de la temporada. */
export const GUESTS = [
  {
    name: 'Kim Ahumada',
    role: 'N°1 de Chile',
    text: 'La mejor jugadora del país llega a La Araucanía: partido de exhibición, clínica abierta y charla junto a Mica Raffe.',
    photo: '/images/eventos/kim-ahumada.jpg',
    photoPosition: '45% 20%',
  },
  {
    name: 'Mica Raffe',
    role: 'Psicóloga deportiva · Chile – Argentina',
    text: 'Charlas de “Pádel mental” en Temuco, Imperial y Molco para entrenar lo que no se ve: la cabeza.',
    photo: '/images/eventos/mica-raffe.jpg',
    photoPosition: '52% 25%',
  },
];

// BORRADOR: redactado a partir del PDF. Reemplazar con el texto oficial de la Asociación.
export const ABOUT = {
  intro:
    'APACHI es la Asociación de Pádel de La Araucanía. Reunimos a jugadores, clubes y escuelas de la región para que el pádel crezca con orden: con un ranking propio, eventos de calidad y apoyo para quienes quieren llegar más lejos.',
  mission:
    'Impulsar el pádel en La Araucanía desde las escuelas hasta la competencia, acompañando a cada jugador en su desarrollo y registrando su esfuerzo partido a partido.',
  vision:
    'Ser el primer ranking regional y nacional de pádel, y el puente entre jugadores, clubes y el gobierno para que cada talento alcance su próximo nivel.',
  pillars: [
    {
      icon: 'trophy',
      title: 'Ranking regional',
      text: 'El primer ranking de pádel de La Araucanía, por categorías, que suma tus resultados torneo a torneo.',
    },
    {
      icon: 'zap',
      title: 'Eventos',
      text: 'Clínicas, exhibiciones, americanos y charlas con referentes del pádel nacional e internacional.',
    },
    {
      icon: 'graduation',
      title: 'Formación',
      text: 'Creemos en el apoyo desde el comienzo. Por eso impulsamos el deporte desde las escuelas.',
    },
    {
      icon: 'handshake',
      title: 'Puente',
      text: 'Somos intermediarios entre jugadores, clubes e instituciones para potenciar tu próximo nivel.',
    },
  ],
  // Sección "Súmate en 4 pasos": oculta mientras no se acepten registros. Cambiar a true para mostrarla.
  showSteps: false,
  steps: [
    { n: '01', title: 'Regístrate', text: 'Solo necesitas tu nombre y correo electrónico.' },
    { n: '02', title: 'Juega', text: 'Marcamos presencia en torneos y campeonatos para ir sumando tu puntaje.' },
    { n: '03', title: 'Sube de nivel', text: 'Te conectamos con oportunidades e instituciones para dar el siguiente paso.' },
    { n: '04', title: 'Ahorra', text: 'Obtienes descuentos en los torneos organizados por la Asociación.' },
  ],
};

export const CATEGORIES = ['Open', 'Tercera', 'Cuarta', 'Quinta', 'Sexta', 'Séptima', 'Principiantes'];

/** Publicaciones de Instagram que se muestran en la sección Contacto. */
export const POSTS = [
  { image: '/images/eventos/exhibicion-kim-ahumada.jpg', alt: 'Afiche: partido exhibición de pádel con Kim Ahumada' },
  { image: '/images/eventos/clinica-kim-ahumada.jpg', alt: 'Afiche: clínica de pádel con Kim Ahumada' },
  { image: '/images/eventos/americano-charla-mica-raffe.jpg', alt: 'Afiche: Americano Damas y charla de psicología deportiva con Mica Raffe' },
  { image: '/images/calendario_octubre_apachi.jpg', alt: 'Calendario de octubre APACHI' },
];
