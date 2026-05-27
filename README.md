# Centro de Negocios Santiago — SERCOTEC

Landing page para el Centro de Desarrollo de Negocios Santiago de SERCOTEC, desarrollada como Evaluación Sumativa Unidad 3 — Desarrollo Frontend.

## Stack

- **Framework:** React 19 + TanStack Start (file-based routing, SSR)
- **Estilos:** TailwindCSS v4 + shadcn/ui (Radix primitives)
- **Validación:** Zod (cliente y servidor) + React Hook Form
- **Datos:** TanStack Query consumiendo API interna (`/api/cms/*`)
- **Carrusel:** Embla Carousel
- **Notificaciones:** Sonner

## Estructura del proyecto

```
src/
├── assets/                  # Imágenes optimizadas (importadas como ES modules)
├── components/
│   ├── ui/                  # Primitivos shadcn (Button, Card, Carousel, etc.)
│   ├── ContactForm.tsx      # Formulario con validación cliente+servidor + honeypot
│   ├── Footer.tsx
│   ├── Navbar.tsx           # Navegación responsiva accesible
│   ├── ServiceCard.tsx      # Componente reutilizable de servicio
│   └── TestimonialsCarousel.tsx
├── lib/
│   └── cms.ts               # Modelos + datos seed servidos por la API
├── routes/
│   ├── __root.tsx           # Layout raíz + metadatos SEO
│   ├── index.tsx            # Landing (hero, nosotros, servicios, testimonios, FAQ)
│   ├── contacto.tsx         # Página de contacto con pre-fill de servicio
│   ├── api.cms.about.ts     # GET /api/cms/about
│   ├── api.cms.services.ts  # GET /api/cms/services
│   ├── api.cms.testimonials.ts
│   ├── api.cms.faqs.ts
│   └── api.contact.ts       # POST /api/contact (zod + honeypot + rate-limit)
└── styles.css               # Design tokens (oklch) + Tailwind
```

## Instalación

```bash
bun install         # o: npm install / pnpm install
bun dev             # arranca en http://localhost:5173
bun run build       # compila producción
```

## Endpoints CMS (administrables vía Postman)

| Método | Endpoint                  | Descripción                  |
|--------|---------------------------|------------------------------|
| GET    | `/api/cms/about`          | Bloque "Nosotros" + stats   |
| GET    | `/api/cms/services`       | Lista de servicios          |
| GET    | `/api/cms/testimonials`   | Testimonios para el carrusel|
| GET    | `/api/cms/faqs`           | Preguntas frecuentes         |
| POST   | `/api/contact`            | Envío del formulario        |

### Ejemplo Postman / curl

```bash
curl http://localhost:5173/api/cms/services

curl -X POST http://localhost:5173/api/contact \
  -H "content-type: application/json" \
  -d '{
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "telefono": "+56912345678",
    "servicio": "asesoria-empresarial",
    "mensaje": "Quisiera agendar una asesoría"
  }'
```

## Componentes desarrollados — guía de uso

### `<ServiceCard />`

Tarjeta reutilizable de servicio. El botón "Contáctanos" navega al formulario pre-rellenando el servicio.

```tsx
import { ServiceCard } from "@/components/ServiceCard";

<ServiceCard
  image={imgUrl}
  title="Asesoría Empresarial"
  description="Acompañamiento integral..."
  slug="asesoria-empresarial"
  features={["Diagnóstico", "Plan de mejora"]}
/>;
```

### `<TestimonialsCarousel />`

Carrusel accesible y responsivo. 1 testimonio en mobile, 2 en tablet, 3 en desktop.

```tsx
<TestimonialsCarousel items={testimonios} />
```

### `<ContactForm />`

Formulario con validación cliente (zod) y servidor, honeypot anti-bot y pre-fill del servicio.

```tsx
<ContactForm defaultServicio="marketing-digital" />
```

## Optimización de rendimiento

- Imágenes con `loading="lazy"`, `decoding="async"`, `width`/`height` explícitos.
- Hero con `fetchPriority="high"` (LCP).
- Code-splitting automático por ruta vía TanStack Router.
- Cache HTTP en endpoints CMS (`cache-control: public, max-age=60`).
- Imports ES6 de assets para hashing y tree-shaking de Vite.

## Seguridad

- Validación cliente + servidor con el mismo schema Zod.
- Honeypot oculto `website` para bots.
- Rate-limit por IP (5 req / 60 s) en `/api/contact`.
- Sanitización de tipos y longitud máxima por campo.
- HTTPS, headers `noopener noreferrer` en enlaces externos.

## Accesibilidad

- Estructura semántica (header / main / section / footer / nav).
- Skip-link "Saltar al contenido".
- Atributos `aria-label`, `aria-expanded`, `aria-invalid`, `aria-controls`.
- Foco visible (anillo de color primario) en todos los interactivos.
- Contraste AA en textos y botones.
- Roles `roledescription` en el carrusel.

## Git y trabajo colaborativo

Convención de ramas:

- `main` — producción
- `develop` — integración
- `feature/<nombre>` — nuevas funcionalidades
- `fix/<nombre>` — correcciones

Convención de commits (Conventional Commits):

```
feat: agrega carrusel de testimonios
fix: corrige validación de teléfono en formulario
docs: actualiza README
```

Cada feature se entrega vía **Pull Request** con revisión de al menos un compañero.

## Documentación adicional

- [`BUENAS_PRACTICAS.md`](./BUENAS_PRACTICAS.md) — guía completa de buenas prácticas.
- [`RETROSPECTIVA.md`](./RETROSPECTIVA.md) — retrospectiva del equipo y plan de acción.

## Cliente

Centro de Desarrollo de Negocios Santiago — SERCOTEC
- Sitio: https://sitios.sercotec.cl/centros-de-negocios/centro-de-desarrollo-de-negocios-santiago/
- Email: centro.santiago@centrossercotec.cl
- Dirección: Manuel Rodríguez Sur 749, Santiago (Metro Toesca)