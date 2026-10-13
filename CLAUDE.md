# APACHI — Web de la Asociación Pádel Araucanía Chile

Landing de una sola página para APACHI. Migrado desde Antigravity. Idioma: español de Chile.

## Stack
- Vite 6 + React 18 + Tailwind CSS 3 (+ PostCSS/autoprefixer), íconos `lucide-react` (sin logos de marca: el de Instagram es `components/InstagramIcon.jsx`).
- Sin backend ni router. Todo estático.
- Repo: `github.com/ejure/apachi-ranking-padel` (rama `main`).
- Hosting: Vercel, proyecto `apachi-padel` (se despliega solo con cada push a `main`). Dominio: https://rankingapachi.cl (DNS en cPanel de PremiumHosting: A @ → 216.198.79.1 y CNAME www → Vercel para la web; MX → mail.rankingapachi.cl y A mail/webmail/cpanel → 162.249.168.170 para el correo. No apuntar MX ni mail a @, porque @ es Vercel).

## Comandos
`npm install` · `npm run dev` (http://localhost:5173) · `npm run build` (→ `dist/`) · `npm run preview`
Si se cambia `tailwind.config.js` y no se reflejan los cambios, reiniciar `npm run dev`.

## Estructura
- `src/content.js` — **todo el contenido editable**: eventos (`EVENTS`, con fecha ISO en hora de Chile), invitadas, textos de la asociación, categorías del ranking, contacto y posts de Instagram.
- `src/lib/events.js` — orden de eventos, próximo evento, cuenta regresiva, formato de fechas (zona America/Santiago). Los eventos pasados se marcan "Finalizado" solos.
- `src/App.jsx` — Navbar → Hero (cuenta regresiva) → Ticker → Eventos (`CalendarSection`) → Invitadas → La Asociación → Ranking → Footer (Instagram + contacto).
- `public/images/eventos/` — afiches de Instagram (1080 px). `public/images/` — fotos y emblemas.
- `assets/`, `pdf_preview/`, `*.zip` — material de origen; ignorados por git.

## Diseño
- Estilo deportivo: titulares en Barlow Condensed itálica mayúscula (`.headline`), botones e insignias en diagonal (`.btn`, `.tag`), líneas de cancha (`.court-lines`).
- Colores: `brand-*` (azul eléctrico 500 = #0b6bdf; navy 900/950), `ball` #d7f24a (lima), `paper` #f4fbf8, `ink` #0e1116.
- Fuentes desde Google Fonts en `index.html`: Barlow Condensed (`font-display`) e Inter (texto).

## Estado
- Prioridad: próximos eventos y explicar la asociación.
- Ranking: "Muy pronto" — solo categorías.
- Contacto: Instagram @rankingapachi.cl · contacto@rankingapachi.cl (reenvía a Gmail, configurado en cPanel)
- Textos de misión/visión son borrador (ver comentario en content.js). README.md está desactualizado.
