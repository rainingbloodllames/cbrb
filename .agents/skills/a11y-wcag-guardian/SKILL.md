---
name: a11y-wcag-guardian
description: >
  Enforces WCAG 2.2 Level AA accessibility, contrast ratios (4.5:1 text, 3:1 UI), keyboard navigation,
  screen reader combobox/dialog semantics, and mobile touch target ergonomics (>= 44x44px) across SIGCE SaaS.
triggers:
  - a11y
  - accessibility
  - wcag
  - contrast
  - aria
  - keyboard
  - focus
  - touch-target
  - screen-reader
  - role
allowed-tools:
  - Read
  - Grep
  - Glob
  - Edit
  - Write
tags: [accessibility, a11y, wcag-aa, contrast, aria-semantics, touch-targets, keyboard-nav]
---

# A11y & WCAG Guardian — SIGCE Accessibility Standard

Esta skill audita y hace cumplir los estándares de **accesibilidad universal (WCAG 2.2 AA)** y **ergonomía táctil** para toda la plataforma SIGCE SaaS.

---

## 🎯 1. Principios Mandatorios

1. **Contraste de Color (WCAG 2.2 AA)**:
   - Texto normal (< 18px o < 14px bold): Relación de contraste mínima de **4.5:1** contra su fondo.
   - Texto grande (>= 18px o >= 14px bold) y componentes de UI: Mínimo **3.0:1**.
   - En *Dark Mode*, los textos secundarios deben usar `text-slate-300` o `text-slate-400` sobre fondos oscuros (nunca `text-slate-600` que tiene bajo contraste).
2. **Touch Targets Móviles (Ergonomía Táctil)**:
   - Todo elemento interactivo (botones, inputs, toggles, close buttons, rows seleccionables) debe tener un área táctil efectiva de al menos **44×44px** en dispositivos móviles (`min-h-[44px]` o padding equivalente).
3. **Semántica ARIA y Lector de Pantalla**:
   - Modales: `role="dialog"`, `aria-modal="true"`, `aria-label` o `aria-labelledby`.
   - Menús y Selects: `role="listbox"` / `role="option"` con `aria-selected` y `aria-expanded`.
   - Combobox / Buscadores Typeahead: `role="combobox"` con `aria-controls` y `aria-activedescendant`.
4. **Navegación por Teclado**:
   - Todo elemento interactivo debe ser accesible mediante `Tab` y activable con `Enter` o `Espacio`.
   - Los modales deben implementar Focus Trap y restaurar el foco al cerrarse.
   - Todo control enfocado debe mostrar `focus-ring` nítido y visible.

---

## 🔍 2. Checklist de Auditoría Rápida

- [ ] ¿El botón de cierre tiene `aria-label="Cerrar"` y un touch target de al menos 44px?
- [ ] ¿Los inputs tienen labels visibles o `aria-label` descriptivos?
- [ ] ¿Los contrastes en modo claro y modo oscuro cumplen 4.5:1?
- [ ] ¿Los estados interactivos (`hover`, `focus-visible`, `disabled`) están claramente diferenciados?
- [ ] ¿Los iconos decorativos tienen `aria-hidden="true"` y los interactivos tienen texto alternativo o etiqueta?
