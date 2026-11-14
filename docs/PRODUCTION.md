# Checklist Producción — CBRB

## Estado actual ✅
- [x] Next 16.4 + Tailwind 4 + build OK (11 rutas estáticas)
- [x] Logos transparentes integrados: `public/logos/cbrb.png` + `slep-andalien-sur.png`
- [x] 10 PDF públicos en `public/docs/` (PEI, RIE 2026, Planes 2026, etc.)
- [x] `sitemap.ts`, `robots.ts`, favicon + OG desde escudo CBRB
- [x] Dev en puerto libre **3001** (tu 3000 no se toca): http://localhost:3001
- [ ] Nada de datos sensibles en `public/` (verificado: sin nóminas, denuncias, PSI, SIGCE)

## Bloqueantes antes de publicar (hacer hoy)
1. **Formulario contacto:** Reemplazar placeholder `xpzvkxxx` en `src/app/contacto/page.tsx` por ID real Formspree (gratis) o Google Form. Sin esto el form no llega.
2. **SIGCE URL real:** En `.env.local`: `NEXT_PUBLIC_SIGCE_URL=https://...` (hoy placeholder `sigce.cbrb.cl`).
3. **Equipo directivo:** `src/lib/content.ts` tiene "Por definir" en Inspector/Orientación/Convivencia. Completar con nombres oficiales o quitar campo.
4. **Fotos hero:** Subir 3 fotos reales (fachada, patio, sala) a `public/fotos/` y enlazar en `src/app/page.tsx`. Sin esto el hero es solo texto.
5. **GitHub:** `git remote add origin ...` + primer commit + push (sin remote hoy).

## Deploy a producción ($0)
### Opción A — Vercel (más simple)
```powershell
npm i -g vercel
vercel --prod
# Env: NEXT_PUBLIC_SIGCE_URL
```
### Opción B — Cloudflare Pages
Build command: `npm run build` · Output: `.next` (o usar `npx @opennextjs/cloudflare build`)
> Recomendado Vercel para Next 16 (Turbopack). Ambos al plan gratis.

### Dominio `cbrb.cl`
1. Renovar en **nic.cl** (~$11.000/año).
2. En Vercel: Settings → Domains → `cbrb.cl` + `www.cbrb.cl`.
3. DNS nic.cl: CNAME `www` → `cname.vercel-dns.com` · A `@` → `76.76.21.21` (Vercel lo da).
4. Esperar SSL (automático 5 min – 2 h).

## Post-lanzamiento (gratis, 1 h)
- [ ] Google Search Console: verificar `https://cbrb.cl`, enviar sitemap
- [ ] Google Analytics 4: crear propiedad, pegar ID en `layout.tsx` (o Vercel Analytics)
- [ ] Google Business Profile: San Martín 1580, (41) 2224711, fotos, horario
- [ ] Facebook/Instagram bio → `https://cbrb.cl/admision`
- [ ] Probar en celular: SAE link, PDF descarga, Workspace/SIGCE links, mapa
- [ ] Lighthouse ≥90 (Performance/SEO/A11y) — ya estático, debería dar alto

## Mantenimiento $0
- **Edición:** Periodista edita `src/lib/content.ts` o Sanity (Fase 2). Sin deploy manual (push = deploy auto en Vercel).
- **Backup:** GitHub + tu H: Drive. PDFs en `public/docs/` versionados.
- **Actualización:** `npm audit fix` mensual (10 min, tú).

## Costo total producción
| Ítem | CLP/año |
|---|---|
| Dominio nic.cl | ~11.000 |
| Hosting Vercel/Cloudflare | 0 |
| Formspree free | 0 |
| Workspace Education | 0 |
| **Total** | **~11.000** |

*Generado 2026-11-14 — CBRB · Dev http://localhost:3001 · Prod pendiente dominio*
