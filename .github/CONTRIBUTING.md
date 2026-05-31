# Guía de Contribución

## Convención de ramas

| Prefijo | Uso |
|---------|-----|
| `main` | Producción estable |
| `develop` | Integración continua |
| `feature/<nombre>` | Nueva funcionalidad |
| `fix/<nombre>` | Corrección de bug |

## Commits (Conventional Commits)

```
<tipo>(<alcance>): <descripción>

[opcional: cuerpo]

[opcional: footer]
```

**Tipos permitidos:** `feat`, `fix`, `docs`, `refactor`, `style`, `test`, `chore`

## Proceso de Pull Request

1. Crear rama desde `develop`
2. Commits atómicos y descriptivos
3. PR con template completo → mínimo 1 revisor
4. Squash merge a `develop`
5. `develop` estable → merge a `main`

## Requisitos de calidad

- TypeScript estricto (`strict: true`)
- ESLint + Prettier obligatorios
- Lighthouse: Performance ≥ 85, A11y ≥ 95, SEO 100
- Componentes públicos con JSDoc
