# APACHI - Asociación Pádel Araucanía Chile 🇨🇱
## Web Maqueta y Ranking Oficial Interactivo

Maqueta web moderna y de alto rendimiento basada fielmente en el documento de identidad y circuito de la **Asociación Pádel Araucanía Chile (APACHI)**, homologada para el circuito regional y nacional federado (**FEPACHI**).

Diseñada con una capa de datos desacoplada y un **Simulador / Inspector de API REST** integrado, lista para ser alimentada por un backend (Node.js, Python/FastAPI/Django, PHP/Laravel, Go, Supabase, etc.) sin necesidad de rehacer la interfaz de usuario.

---

## 🚀 Cómo Iniciar la Aplicación

El servidor de desarrollo ya se encuentra corriendo localmente en:
👉 **[http://localhost:5173](http://localhost:5173)**

Para ejecutarlo manualmente en cualquier momento:

```bash
# Instalar dependencias (ya instaladas)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Generar versión de producción (dist/)
npm run build

# Previsualizar el build de producción
npm run preview
```

---

## 🎨 Fidelidad y Componentes Extraídos del PDF

La interfaz reproduce la paleta deportiva oficial (Azul Eléctrico APACHI, Navy Deportivo, Acento Lima/Pádel Neón y Blanco Puro), su tipografía geométrica moderna (*Plus Jakarta Sans* y *Space Grotesk*), y las fotografías originales del documento:

1. **Header & Navegación**:
   - Logotipo oficial APACHI extraído del PDF con emblema circular del jugador rematando.
   - Navegación fluida por secciones.
   - Indicador de estado de API en tiempo real y botón de acceso rápido a la consola de integración.
   - Botón CTA directo "Regístrate".

2. **Hero Oficial ("Ranking oficial: Sé parte del primer ranking regional y nacional")**:
   - Textura de cancha de césped azul y red de pádel extraída del encabezado de la Página 1.
   - Contadores de impacto (180+ jugadores, 7 categorías, 100% FEPACHI).
   - Acceso inmediato a la tabla de clasificación.

3. **Ecosistema & Pilares ("ranking APACHI")**:
   - Los 4 pasos del PDF:
     - `01`: Registro con nombre y correo.
     - `02`: Presencia en torneos y campeonatos para sumar puntaje.
     - `03`: Intermediario con gobierno y federaciones.
     - `04`: Beneficios y descuentos en torneos.
   - Los 3 pilares clave del PDF:
     - *Registro de partidos*
     - *Sumar y perder puntos según los resultados*
     - *Ver tu posición en el ranking en tiempo real*

4. **Tabla de Ranking Interactivo (Feature Principal)**:
   - **Podio Visual Top 3**: Tarjetas destacadas con trofeos Oro (#1), Plata (#2) y Bronce (#3).
   - **Filtro por Categorías**: OPEN, Tercera (3ra), Cuarta (4ta), Quinta (5ta), Sexta (6ta), Séptima (7ma), Principiantes y Todas.
   - **Filtro por Rama/Género**: Masculino, Femenino o Todos.
   - **Buscador en Vivo**: Por nombre de jugador, club o ciudad de origen.
   - **Columnas Interactivas y Ordenables**:
     - Posición (#) con indicador de tendencia (↑ subió, ↓ bajó, = se mantuvo).
     - Jugador con avatar oficial, insignia de verificación, club y posición (Drive/Revés).
     - Categoría y Rama.
     - Puntos oficiales APACHI (formateados con miles).
     - Partidos Jugados (PJ).
     - Partidos Ganados (PG) y Perdidos (PP).
     - % Efectividad (con barra visual dinámica de rendimiento).
     - Racha reciente (últimos 5 resultados W/L).
     - Ficha técnica completa al hacer clic en cualquier jugador.
   - **Ficha / Perfil de Jugador (Modal)**: Muestra pala oficial, posición en cancha, brazo hábil, historial de torneos disputados y puntos acumulados.
   - **Exportación**: Descarga directa de la tabla en formato JSON.

5. **"Conocemos tu esfuerzo" & Programación OCTUBRE**:
   - Fotografía del jugador indoor extraída de la Página 2.
   - Calendario oficial extraído textualmente del PDF:
     - `03-10`: Presentación municipalidad de Temuco.
     - `15-10`: Charla deportiva. Escuela Los Trigales, Temuco.
     - `18-10`: Exhibición N° 1 Pádel Nacional.
     - `25-10`: Stand deportivo en torneo. Conoce nuestro método.
     - `30-10`: Sesión fotográfica jugadores.
   - Enlace directo a la cuenta oficial de Instagram **`@rankingapachi.cl`**.

6. **Formulario de Registro ("Regístrate")**:
   - Fotografía de acción del jugador ejecutando remate (Página 1).
   - Formulario interactivo con validación de campos: Nombre, DOB, Email, Liga/Categoría, Género, Club y Posición de Cancha.
   - Conectado a la API: al enviar, simula la petición POST y agrega automáticamente al nuevo jugador al ranking.
   - Cláusula de confidencialidad textual del PDF: *"El nombre de tu perfil no se compartirá. Nunca envíes contraseñas."*

7. **Reconocimiento FEPACHI ("Representa a tu país")**:
   - Fotografía de premiación y medallas extraída de la Página 3.
   - Aval institucional de la Federación de Pádel de Chile.

8. **Agradecimiento a Patrocinadores**:
   - Cozy Stay Lodge, Folio Publishing, Municipalidad de Temuco, FEPACHI.

9. **Consola de Integración API / Developer Drawer (Botón flotante inferior derecho)**:
   - Permite a los desarrolladores del backend inspeccionar las peticiones en vivo, ver el schema JSON esperado, probar latencia simulada y cambiar la URL base a su servidor real.

---

## 🔌 Cómo Alimentar esta Web con tu Propia API

El proyecto está diseñado bajo el patrón **Repository / Service Layer** en el archivo:
📁 [`src/services/rankingApi.js`](file:///Users/emiliojure/Documents/antigravity/APACHI/src/services/rankingApi.js)

### 1. Cambiar a tu API Real desde la Interfaz
Haz clic en el botón flotante **"Simulador API REST"** (esquina inferior derecha) o en el badge de la barra superior.
1. Ve a la pestaña **"Configurar Conexión"**.
2. Selecciona **"API Remota / Local"**.
3. Ingresa la URL base de tu backend (por ejemplo `http://localhost:8000/api` o `https://api.tuempresa.cl/v1`).
4. Haz clic en **"Guardar"**. ¡La web comenzará a hacer `fetch` a tus endpoints reales!

### 2. Cambiar a tu API Real en Código
Simplemente actualiza en [`src/services/rankingApi.js`](file:///Users/emiliojure/Documents/antigravity/APACHI/src/services/rankingApi.js):

```javascript
let apiConfig = {
  mode: 'custom', // Cambiar de 'mock' a 'custom'
  baseUrl: 'https://tu-api.cl/v1', // URL de tu backend
  latencyMs: 0,
};
```

O define la variable de entorno `VITE_API_URL` en un archivo `.env`.

---

## 📋 Especificación de Endpoints (Contratos API)

Para alimentar la web al 100%, tu backend debe proveer las siguientes rutas RESTful:

### `GET /rankings`
**Parámetros query aceptados:**
- `category` (*string*): `'ALL'`, `'OPEN'`, `'3RA'`, `'4TA'`, `'5TA'`, `'6TA'`, `'7MA'`, `'PRINCIPIANTES'`
- `gender` (*string*): `'ALL'`, `'M'`, `'F'`
- `search` (*string*): Filtro por texto libre
- `sortBy` (*string*): `'points'`, `'matchesPlayed'`, `'wins'`, `'winRate'`, `'rank'`
- `sortOrder` (*string*): `'desc'` o `'asc'`
- `page` (*number*): Número de página (ej. `1`)
- `limit` (*number*): Cantidad por página (ej. `10`)

**Estructura JSON de Respuesta (200 OK):**
```json
{
  "status": "success",
  "code": 200,
  "meta": {
    "total": 42,
    "page": 1,
    "limit": 10,
    "totalPages": 5,
    "category": "OPEN",
    "gender": "M",
    "lastUpdated": "2026-10-02T14:00:00Z"
  },
  "data": [
    {
      "id": "p-open-01",
      "rank": 1,
      "previousRank": 1,
      "trend": "stable",
      "name": "Cristobal Ibarra",
      "category": "OPEN",
      "gender": "M",
      "points": 1980,
      "matchesPlayed": 67,
      "wins": 50,
      "losses": 17,
      "winRate": 74.6,
      "club": "Club Pádel Temuco",
      "city": "Temuco",
      "recentForm": ["W", "W", "W", "L", "W"],
      "image": "/images/player_cap.jpg",
      "hand": "Diestro",
      "position": "Revés",
      "racket": "Bullpadel Hack 03"
    }
  ]
}
```

### `GET /players/:id`
Retorna el perfil completo del jugador con historial de torneos y biografía deportiva.

### `POST /players/register`
Enrola un nuevo jugador en el circuito con los datos del formulario de registro.

### `GET /events`
Retorna el calendario de torneos y clínicas oficiales de la temporada.

---

## 🛠️ Tecnologías Utilizadas

- **React 18** (SPA moderno, rápido y modular)
- **Vite 6** (Build tool ultrarrápido con HMR)
- **Tailwind CSS 3.4** (Diseño responsivo, tokens de marca y microinteracciones)
- **Lucide React** (Iconografía deportiva y de sistema)
- **Swift / PDFKit** (Extracción nativa de alta fidelidad de gráficos y textos del PDF original)
