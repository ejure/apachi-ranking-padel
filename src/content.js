/**
 * Todo el contenido editable del sitio vive aquí.
 * Para cambiar textos, fechas o lugares, edita este archivo.
 */

export const NAV = [
  { label: 'Calendario', href: '#calendario' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Ranking', href: '#ranking' },
  { label: 'Contacto', href: '#contacto' },
];

export const CALENDAR = {
  month: 'Octubre',
  poster: '/images/calendario_octubre_apachi.jpg',
  days: [
    {
      weekday: 'Lun',
      day: '26',
      items: [
        {
          time: '19 hrs',
          title: 'Exhibición de pádel',
          venue: 'CentroPádel',
          city: 'Temuco',
          people: 'Kim Ahumada · Mica Raffe',
        },
      ],
    },
    {
      weekday: 'Mar',
      day: '27',
      items: [
        {
          time: '11 y 15 hrs',
          title: 'Clínica de pádel',
          venue: 'Mirasur',
          city: 'Temuco',
        },
        {
          time: '21 hrs',
          title: 'Charla de psicología',
          venue: 'ArenaTrañi',
          city: 'Temuco',
          people: 'Kim Ahumada · Mica Raffe',
        },
      ],
    },
    {
      weekday: 'Mié',
      day: '28',
      items: [
        {
          time: '19 hrs',
          title: 'Charla de psicología',
          venue: 'ImperialPádel',
          city: 'Imperial',
          people: 'Mica Raffe',
        },
      ],
    },
    {
      weekday: 'Jue',
      day: '29',
      items: [
        {
          time: '19 hrs',
          title: 'Charla de psicología',
          venue: 'BlackPadel',
          city: 'Molco',
          people: 'Mica Raffe',
        },
      ],
    },
  ],
};

// BORRADOR: redactado a partir del PDF. Reemplazar con el texto oficial de la Asociación.
export const ABOUT = {
  mission:
    'Impulsar el pádel en La Araucanía desde las escuelas hasta la competencia, acompañando a cada jugador en su desarrollo y registrando su esfuerzo partido a partido.',
  vision:
    'Ser el primer ranking regional y nacional de pádel, y el puente entre jugadores, clubes y el gobierno para que cada talento alcance su próximo nivel.',
  steps: [
    { n: '01', text: 'Te registras con tu nombre y correo electrónico.' },
    { n: '02', text: 'Marcamos presencia en torneos y campeonatos para ir sumando tu puntaje.' },
    { n: '03', text: 'Somos intermediarios con el gobierno para potenciar tu próximo nivel.' },
    { n: '04', text: 'Obtienes descuentos en los torneos organizados por la Asociación.' },
  ],
};

export const CATEGORIES = ['Open', 'Tercera', 'Cuarta', 'Quinta', 'Sexta', 'Séptima', 'Principiantes'];

export const CONTACT = {
  instagram: 'rankingapachi.cl',
  instagramUrl: 'https://www.instagram.com/rankingapachi.cl/',
  region: 'Región de La Araucanía, Chile',
};
