# PLAN — Web Colegio Bicentenario República del Brasil (CBRB)

**Concepción, Chile · San Martín 1580 · Fundado 1843 (Escuela N°2)**
**Director (2024-2029): Dino Olivieri Díaz · SLEP Andalién Sur**
**Ubicación de este plan:** `C:\CBRB\docs\PLAN.md`

> ## Restricciones reales confirmadas (no negociables)
> 1. **Quién edita:** Solo tú (admin) + quizás 1 informático + quizás 1 periodista si se le enseña bien. → Toda edición debe ser en 2 clics, sin código.
> 2. **Admisión:** Solo link al Sistema de Admisión Escolar (SAE). Sin postulación interna.
> 3. **Recursos:** Tienen logo, colores y fotos en buena calidad. Falta subirlos a `public/`.
> 4. **Presupuesto:** Caja chica con aportes voluntarios de funcionarios. Debe ser **casi $0**. Intranet = **Google Workspace for Education (gratis para colegios públicos) + SIGCE**. Nada de intranet propia.

---

## 1. Decisiones tomadas (por qué)

| Decisión | Elección | Por qué |
|---|---|---|
| Framework | **Next.js 16.4 + React 19 + TypeScript** | Mismo stack que SIGCE, un solo stack que aprender, SEO nativo, SSG gratis en Vercel/Cloudflare. Verificado en `node_modules/next/dist/docs/` (cambios 16: `LayoutProps`/`PageProps` globales, `cacheComponents`, `partialPrefetching`). |
| Estilos | **Tailwind CSS 4.3 + `globals.css` + `motion.css`** canónicos SIGCE | Glass utilities, bordes `dark:border-slate-700/50`, sombras `shadow-glass-light/dark`, fuentes `--font-jakarta`/`--font-lexend`. Animación 100% CSS, sin framer-motion. |
| CMS (Fase 2) | **Sanity (Free tier, 3 usuarios)** | El periodista edita desde navegador/celular en español. Plan A de costo $0. Plan B si Sanity falla: editar `src/lib/content.ts` (JSON local). |
| Hosting | **Cloudflare Pages o Vercel (ambos $0 + SSL gratis)** | Ancho de banda y SSL sin costo. Dominio `cbrb.cl` renovado en nic.cl. |
| Intranet | **Google Workspace for Education (@cbrb.cl) + SIGCE** | Classroom/Drive/Gmail gratis para colegios públicos. SIGCE para gestión interna. La web pública NO tiene login. |
| Formularios | **mailto + Formspree free (50 envíos/mes) o Google Form embebido** | Sin backend pago, sin Resend. |

### Costo anual estimado

| Ítem | Costo CLP | Notas |
|---|---|---|
| Dominio `cbrb.cl` (nic.cl) | ~$11.000/año | Único gasto obligatorio |
| Hosting (Cloudflare/Vercel) | $0 | |
| CMS Sanity free | $0 | 3 editores, 10 GB assets |
| Google Workspace Education | $0 | Postular vía MINEDUC |
| SIGCE (existente) | $0 extra | |
| **Total** | **~$11.000/año** | Cabe en caja chica |

---

## 2. Arquitectura del ecosistema

```
cbrb.cl (web pública, indexable, sin login)
  ├── /            Inicio + aviso SAE permanente
  ├── /nosotros    Historia 1843, PEI, equipo, sellos
  ├── /admision    Solo link SAE + requisitos + video (embudo principal)
  ├── /comunidad   Noticias (Sanity Fase 2) + galería + calendario Workspace embed
  ├── /transparencia PEI 2025-2027, Reglamento, Ley Identidad, SIMCE, PIE
  └── /contacto    Formulario + mapa + teléfono (41) 2224711

Botones header (siempre):
  [ Postula SAE ↗ ] [ Acceso Workspace ↗ ] [ SIGCE ↗ ]
      ↓                    ↓                      ↓
 admision.mineduc.cl   mail.google.com       app SIGCE
                     (Classroom/Drive)      (gestión interna)
```

**Separación limpia:** La web NO guarda claves ni notas. Google y SIGCE son los sistemas privados. La web es vitrina + embudo SAE + transparencia.

---

## 3. Mapa del sitio (MVP — 6 rutas)

### `/` Inicio
- Hero con foto real (cuando suban a `public/fotos/fachada.jpg`) + titular Bicentenario + 3 CTAs SAE/Noticias/Contacto
- Aviso SAE destacado (banner amarillo)
- Últimas 3 noticias (desde `content.ts` / Sanity)
- Niveles: Parvularia → Básica → Media (tabs)
- Accesos rápidos: Workspace, SIGCE, Transparencia

### `/nosotros`
Historia (1843 → Bicentenario), misión/visión/sellos, equipo directivo, PEI resumido + PDF.

### `/admision` ⭐ (prioridad 1)
- Pasos SAE 1-2-3-4, fechas, requisitos, link directo `https://admision.mineduc.cl`
- Preguntas frecuentes (acordeón)
- Video YouTube embebido MINEDUC. Sin formulario interno.

### `/comunidad`
- Noticias con buscador por categoría (client-side)
- Galería Instagram/Facebook embebida (sin API paga)
- Calendario Google Calendar embebido (público, sin login)

### `/transparencia`
- Tabla de documentos: PEI 2025-2027, Reglamento Interno, Ley Identidad de Género, Resultados SIMCE, Proyecto PIE, Informes.
- Cada doc: categoría, año, botón Descargar (PDF en `public/docs/` o Drive público).

### `/contacto`
- Formulario (`form-section`, React.memo, sin AnimatePresence)
- Mapa embed Google Maps (San Martín 1580)
- Teléfono (41) 2224711, email `contacto@cbrb.cl`, redes Facebook/Instagram

---

## 4. Diseño (SIGCE canónico, adaptado a colegio)

- **Fuentes:** `--font-jakarta` (cuerpo) + `--font-lexend` (títulos) vía `next/font/google` (self-hosted, sin request a Google en runtime).
- **Glass:** `glass-panel` / `solid-panel` en tarjetas. Nunca `backdrop-blur-*` encima de glass.
- **Bordes:** `dark:border-slate-700/50`. Nunca `dark:border-white/*`.
- **Sombras:** `shadow-glass-light` / `dark:shadow-glass-dark`.
- **Motion:** Solo CSS de `motion.css` (`animate-enter-*`, `MOTION_PRESENCE`). Springs legacy solo en `src/lib/motion.ts`. Sin `transition-all` (propiedades explícitas). Sin framer-motion.
- **Colores propuestos** (reemplazar cuando suban paleta oficial):
  - Azul institucional `#1e40af` (confianza pública)
  - Amarillo suave `#facc15` (homenaje a Brasil, Banner SAE)
  - Verde `#16a34a` (acentos Bicentenario) — usar con moderación
  - Fondo `#f8fafc` / dark `#0f172a`
- **Accesibilidad WCAG 2.2 AA:** Contraste 4.5:1, foco visible, `aria-label`, alt en fotos, navegación por teclado, botones ≥44px, `prefers-reduced-motion`.

---

## 5. Roles y flujo editorial ($0)

| Persona | Rol técnico | Qué hace |
|---|---|---|
| **Tú (admin)** | GitHub + Vercel/Cloudflare + Sanity admin | Deploy (push a main = deploy auto), crea usuarios, revisa 1 vez/mes |
| **Informático** | Vercel/Cloudflare + dominio nic.cl | Setup inicial, DNS, SSL, backup. Después: nada |
| **Periodista** | Solo Sanity Studio (navegador) | Publica noticia en 3 pasos: Título → Foto → Texto → Publicar. Sube PDF a Transparencia. Sin código. |

**Capacitación periodista (30 min):** 1 video Loom 10 min + guía 1 página (`docs/GUIA-PERIODISTA.md`). Si no aprende, tú editas `src/lib/content.ts` y haces commit.

---

## 6. Contenido — qué falta que suban al colegio

Colocar en `public/` (o en Sanity):
- [ ] Logo SVG/PNG fondo transparente + favicon
- [ ] Paleta oficial (hex) — si no, usamos la propuesta §4
- [ ] 3-5 fotos: fachada, patio, biblioteca, sala clases, acto
- [ ] PDF PEI 2025-2027 + Reglamento Interno
- [ ] Equipo directivo (nombres/cargos actualizados)
- [ ] Fechas SAE vigentes (MINEDUC publica cada año)

---

## 7. Fases de implementación

### Fase 0 — Esta entrega (scaffold + MVP estático) ✅
- Next 16 + Tailwind 4 + tokens SIGCE
- 6 rutas con contenido placeholder realista (sin lorem)
- Nav con Workspace/SIGCE/SAE, SEO, sitemap.xml, robots.txt
- Formulario funcional (placeholder Formspree)
- Build verificado (`npm run build` OK)

### Fase 1 — Contenido real (1-2 semanas)
Subir logo/fotos/PDFs, reemplazar `content.ts`, conectar Google Calendar público, Google Maps, Instagram/Facebook embeds.

### Fase 2 — CMS Sanity (2-3 días)
Conectar Sanity free a `/comunidad` y `/transparencia`. Capacitación periodista. Tiempo de edición: <2 min por noticia.

### Fase 3 — Lanzamiento
Recuperar `cbrb.cl`, DNS a Cloudflare/Vercel, Search Console + Analytics (GA4 gratis), perfil Google Business, compartir en Facebook/Instagram @colegio_brasil.

### Fase 4 — Mejoras (solo si hay caja)
Newsletter WhatsApp (canal), modo oscuro toggle, idioma (ES/EN), PWA instalable.

---

## 8. SEO + Analytics (gratis)

- `metadata` por página en español, OpenGraph, `sitemap.ts`, `robots.ts`.
- Google Search Console + GA4 (sin cookies pesadas, banner simple).
- Perfil Google Business: "Colegio Bicentenario República del Brasil, San Martín 1580, Concepción".
- Enlaces internos: SAE ↔ Admisión, Transparencia ↔ PEI.

---

## 9. Seguridad y mantenimiento

- Sin base de datos pública → superficie de ataque mínima.
- Dependabot + `npm audit` mensual (tú, 10 min).
- Backup: GitHub (código) + Drive (fotos/PDFs) + Sanity export.
- `devLog()`/`devError()` de `@/lib/devLogger` (nunca `console.log` en prod).
- Sin secretos en repo. Claves Sanity/Vercel en `.env.local` (gitignore).

---

## 10. Checklist de lanzamiento

- [ ] Dominio `cbrb.cl` activo en nic.cl
- [ ] Deploy en Vercel/Cloudflare con SSL
- [ ] Workspace Education solicitado a MINEDUC (@cbrb.cl)
- [ ] Accesos Workspace + SIGCE probados
- [ ] Search Console + GA4 instalados
- [ ] Periodista capacitado (Sanity o content.ts)
- [ ] Anuncio en Facebook/Instagram del colegio

---

## 11. Lo que NO haremos (para proteger caja chica)

- ❌ Intranet propia, matrícula online, intranet de notas
- ❌ WordPress pago / hosting pago / plugins pagos
- ❌ App móvil nativa
- ❌ Framer-motion, AnimatePresence en formularios, `transition-all`
- ❌ Claves/clasificaciones en la web pública (eso es SIGCE/Workspace)

---

## 12. Estructura de archivos (esta entrega)

```
.
├─ docs/
│  ├─ PLAN.md              ← este archivo
│  └─ GUIA-PERIODISTA.md   (Fase 1)
├─ public/
│  ├─ logo.svg             (placeholder, reemplazar)
│  └─ fotos/               (vacío, subir fotos reales)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx        (root, fuentes Jakarta/Lexend, metadata ES)
│  │  ├─ globals.css       (tokens, glass-panel, form-section)
│  │  ├─ motion.css        (animate-enter-*, MOTION_PRESENCE)
│  │  ├─ page.tsx          (/)
│  │  ├─ sitemap.ts · robots.ts
│  │  ├─ nosotros/page.tsx
│  │  ├─ admision/page.tsx
│  │  ├─ comunidad/page.tsx
│  │  ├─ transparencia/page.tsx
│  │  └─ contacto/page.tsx (form-section + React.memo)
│  ├─ components/
│  │  ├─ SiteHeader.tsx    (React.memo)
│  │  ├─ SiteFooter.tsx
│  │  └─ NewsCard.tsx
│  ├─ lib/
│  │  ├─ site.ts           (config central: SAE, Workspace, SIGCE, contacto)
│  │  ├─ content.ts        (noticias/documentos editables — futuro Sanity)
│  │  ├─ motion.ts         (solo springs legacy overdamped)
│  │  └─ devLogger.ts
│  └─ stores/              (Fase SIGCE: useDashboard performanceMode — no en MVP público)
└─ package.json
```

---

> **Regla de oro para mantener $0:** Si un periodista no puede publicarlo en 2 minutos sin llamarte, esa funcionalidad no entra al MVP.

*Documento generado 2026-11-14 — CBRB · Next 16.4.6 · React 19.3 · Tailwind 4.3*
