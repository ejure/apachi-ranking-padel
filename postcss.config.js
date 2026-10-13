import { fileURLToPath } from 'node:url';

// Ruta absoluta para que Tailwind use siempre esta configuración,
// sin importar desde qué carpeta se inicie el servidor.
export default {
  plugins: {
    tailwindcss: { config: fileURLToPath(new URL('./tailwind.config.js', import.meta.url)) },
    autoprefixer: {},
  },
};
