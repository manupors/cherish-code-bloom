# Guía de buenas prácticas — Desarrollo Frontend (TanStack Start + React)

## 1. Convenciones de nomenclatura

| Tipo                     | Convención        | Ejemplo                       |
|--------------------------|-------------------|-------------------------------|
| Componentes React        | PascalCase        | `ServiceCard.tsx`             |
| Hooks                    | camelCase + `use` | `useDebounce.ts`              |
| Utilidades / libs        | camelCase         | `formatCurrency.ts`           |
| Constantes globales      | UPPER_SNAKE_CASE  | `MAX_UPLOAD_SIZE`             |
| Tipos / Interfaces       | PascalCase        | `type Service`                |
| Archivos de rutas API    | `api.<recurso>.ts`| `api.cms.services.ts`         |
| Rutas de página          | kebab-case        | `preguntas-frecuentes.tsx`    |
| Variables CSS (tokens)   | `--kebab-case`    | `--color-primary`             |

## 2. Estructura de archivos

- **Una responsabilidad por archivo.** Un componente = un archivo.
- **Co-localizar** estilos, tests y sub-componentes pequeños.
- **Carpeta `ui/`** sólo para primitivos reutilizables (shadcn).
- **Carpeta `lib/`** para utilidades puras sin JSX.
- **Carpeta `routes/`** sigue convención file-based de TanStack.
- Archivos no deben superar **300 líneas**; refactorizar antes.

## 3. Uso de variables y estado

- Preferir `const` sobre `let`. Nunca `var`.
- Tipar todo: `noImplicitAny` activado.
- Estado local con `useState`; estado remoto con **TanStack Query**.
- Evitar prop-drilling de más de 2 niveles → usar context o composition.
- Schemas con **Zod** como única fuente de verdad (validación + tipos).

## 4. Componentes

- **Props explícitas** y tipadas con `type Props = {...}`.
- Preferir **composición** sobre props booleanas múltiples.
- Separar **componentes de presentación** (UI puro) de **contenedores** (data fetching).
- Botones siempre con `aria-label` si solo tienen ícono.

## 5. Accesibilidad (WCAG 2.1 AA)

- HTML **semántico**: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Un único `<h1>` por página; jerarquía sin saltos.
- Texto alternativo en todas las imágenes (`alt` descriptivo).
- Skip link "Saltar al contenido" en cada layout.
- Estados de foco visibles (`focus-visible:ring-2`).
- Contraste mínimo **4.5:1** en textos.
- Atributos ARIA solo cuando aporten valor; no abusar.
- Carruseles con `aria-roledescription="carrusel"` y botones etiquetados.
- Formularios con `<Label htmlFor>`, `aria-invalid` y mensajes de error.

## 6. Usabilidad

- Mobile-first: probar en 360 px antes de desktop.
- Touch targets ≥ 44 × 44 px.
- Mensajes de error claros, en lenguaje del usuario.
- Feedback inmediato (loading, success, error) con `sonner`.
- Confirmaciones para acciones destructivas.
- Tiempo de respuesta percibido < 1 s para interacciones.

## 7. Rendimiento

- Imágenes:
  - Importadas como ES modules → hashing + tree-shaking de Vite.
  - `loading="lazy"` excepto LCP; `decoding="async"`.
  - `width` y `height` explícitos → evita CLS.
  - Usar `fetchPriority="high"` en el hero.
- Code-splitting por ruta automático.
- Memoización (`useMemo`, `useCallback`) **sólo** cuando se mide ganancia.
- Evitar re-renders innecesarios; usar `key` estable en listas.
- HTTP cache (`cache-control`) en endpoints públicos.

## 8. Seguridad

- Validar **siempre** en servidor, incluso si validas en cliente.
- Honeypot + rate-limit en formularios públicos.
- Nunca exponer secretos en el bundle cliente.
- `rel="noopener noreferrer"` en enlaces externos con `target="_blank"`.
- Escapar/normalizar input antes de almacenar.
- HTTPS obligatorio en producción.

## 9. Git y revisión de código

- Trabajar en ramas: `feature/*`, `fix/*`.
- Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`.
- Pull Request descriptivo con checklist (qué, por qué, cómo probar).
- Al menos **1 revisor** antes de mergear.
- Sin merge directo a `main`.
- Squash merge para mantener historial limpio.

## 10. Testing y calidad

- ESLint + Prettier configurados; CI verifica formato.
- TypeScript en modo estricto.
- Revisión manual de accesibilidad con Lighthouse (objetivo ≥ 95).
- Revisión cruzada de PR obligatoria.

## 11. Documentación

- Cada componente público tiene **JSDoc** explicando propósito y props.
- `README.md` con instalación, scripts y arquitectura.
- Decisiones de diseño en `ADR/` (Architecture Decision Records) si aplica.