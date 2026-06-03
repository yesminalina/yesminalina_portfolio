# Portafolio — Yesmin Pizarro

Sitio web de portafolio personal de Yesmin Pizarro, Fullstack Developer.
Single-page application que presenta una introducción, una selección de
proyectos, el stack tecnológico y una sección de contacto. Todo el contenido
de proyectos y tecnologías se gestiona desde archivos JSON estáticos, sin
tocar los componentes.

## Funcionalidades

- Página única con scroll suave entre secciones (react-scroll) y navbar con
  seguimiento de la sección activa.
- Sección Hero / Sobre mí con presentación, enlaces a redes y CTA "View my work".
- Sección Proyectos: tarjetas con efecto glass y animación de entrada
  (IntersectionObserver), generadas desde `projects.json`.
- Sección Stack: tarjetas por categoría (Frontend, Backend + Testing, Tools,
  Data Analysis) con iconos SVG y animación flip 3D, generadas desde `stack.json`.
- Sección Contacto: email (mailto), LinkedIn, GitHub y descarga de CV.
- Página 404 personalizada (ruta catch-all).
- Diseño responsive con menú hamburguesa en móvil.

## Stack

**Framework:** React 18 + Vite 5 (JSX, ESM). Enrutado con React Router v6
(`App.jsx`: ruta `/` con layout y catch-all 404).

**Estilos:** Tailwind CSS 4 con tokens de diseño definidos en `src/index.css`
(`@theme`) — paleta personalizada (`pink`, `mint`, `olive`, `yellow_pale`,
`white_warm`, `text_main`) y fuente Poppins (Google Fonts).

**Navegación y animaciones:** react-scroll para el scroll suave entre secciones
e IntersectionObserver para las animaciones de entrada de las tarjetas.

**Iconos:** FontAwesome (brands/solid/regular) + componentes SVG propios en
`src/components/Icons/`.

**Contenido:** archivos JSON estáticos en `src/assets/json/`
(`projects.json`, `stack.json`).

## Requisitos

- Node.js >= 18 (recomendado 20+; requerido por Vite 5 y ESLint 9)
- npm

## Configuración

```bash
npm install
npm run dev        # servidor local con HMR en http://localhost:5173
```

El proyecto no usa variables de entorno ni servicios externos (el contacto es
solo vía `mailto:`), por lo que no requiere archivo `.env`.

Comandos:

```bash
npm run dev        # desarrollo con HMR
npm run build      # build de producción a dist/
npm run preview    # previsualizar el build local
npm run lint       # ESLint (flat config, ESLint 9)
```

### Editar contenido

El contenido es data-driven; para agregar o quitar proyectos y tecnologías se
editan los JSON, no los componentes:

- `src/assets/json/projects.json` — tarjetas de proyectos. Campos por entrada:
  `title`, `img` (archivo en `public/`), `description`, `features` (opcional),
  `stack`, `deploy` (opcional), `github` (opcional; si falta se muestra
  "(Private repository)"), `imgAlign` (opcional).
- `src/assets/json/stack.json` — tecnologías por categoría (`frontend`,
  `backend`, `tools`, `testing`, `data-analysis`). Cada nombre debe coincidir
  con una clave en el objeto `ICON_COMPONENTS` de `Stack.jsx`.

## Deploy

App SPA con `BrowserRouter`: el host debe configurarse con fallback a
`index.html` para todas las rutas.

## Autores

- Yesmin Pizarro — [LinkedIn](https://www.linkedin.com/in/yesminpizarro/) · [GitHub](https://github.com/yesminalina)

## Licencia

MIT — ver [LICENSE](./LICENSE).
