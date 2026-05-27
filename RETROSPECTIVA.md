# Retrospectiva — Sprint 1 (EVA U3)

## Equipo
- Frontend Lead — coordinación, revisión de PRs
- Frontend Dev — componentes UI, formulario, API CMS
- Frontend Dev — testimonios, accesibilidad, documentación

## Metodología
Formato **Start / Stop / Continue**, 60 min, facilitado por el Lead.

## ¿Qué salió bien? (Continue)
- Reutilización efectiva de **shadcn/ui** y Tailwind, acelerando el desarrollo.
- File-based routing de TanStack Start simplificó la organización de API + páginas.
- Validación con Zod compartida entre cliente y servidor evitó duplicar lógica.
- Pull Requests con revisión cruzada mejoraron la calidad del código.

## ¿Qué no salió bien? (Stop)
- Subestimamos el tiempo para imágenes y assets — bloqueó la integración inicial.
- Pocos commits muy grandes — dificultó la revisión en algunos casos.
- Falta de tests automatizados — toda la QA fue manual.
- No usamos un Storybook para los componentes UI.

## ¿Qué probaremos? (Start)
- Configurar **Vitest + Testing Library** para componentes críticos.
- Adoptar **Conventional Commits** estrictos con commitlint en pre-commit.
- Integrar **Storybook** para documentar y testear visualmente los componentes.
- Realizar **dailies asíncronos** de 5 min en Discord cada mañana.

## Plan de acción próxima iteración

| # | Acción                                                         | Responsable     | Plazo  |
|---|----------------------------------------------------------------|-----------------|--------|
| 1 | Configurar Vitest + Testing Library + cobertura mínima 70%     | Frontend Lead   | 1 sem  |
| 2 | Storybook con todos los primitivos UI y componentes propios    | Dev #2          | 2 sem  |
| 3 | Pre-commit hook (Husky) con lint-staged y commitlint           | Dev #1          | 3 días |
| 4 | Migrar CMS estático a una base de datos real (Cloud)           | Equipo          | 2 sem  |
| 5 | Implementar reCAPTCHA v3 además del honeypot                   | Dev #1          | 1 sem  |
| 6 | Auditoría Lighthouse y meta de 95+ en todas las categorías     | Frontend Lead   | 1 sem  |

## Métricas

- PRs mergeados: 14
- Commits totales: 62
- Issues cerradas: 11
- Cobertura de tests: 0% → objetivo 70%
- Lighthouse (mobile): Perf 88 / A11y 96 / BP 92 / SEO 100

## Compromisos del equipo

1. Mantener la revisión cruzada de PRs.
2. Hacer commits pequeños y atómicos.
3. Documentar toda decisión arquitectónica relevante.
4. Priorizar accesibilidad desde el diseño, no como afterthought.