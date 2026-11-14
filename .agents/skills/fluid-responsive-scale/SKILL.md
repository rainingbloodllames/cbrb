---
name: fluid-responsive-scale
description: >
  Enforces modern fluid typography and responsive spacing scales using pure CSS clamp() (Utopia methodology)
  for SIGCE SaaS. Prevents layout shifts, eliminates horizontal scroll traps, and ensures seamless scaling
  from 320px mobile screens to 4K ultrawide displays without brittle media-query snapping.
triggers:
  - fluid
  - typography
  - clamp
  - responsive
  - overflow
  - layout
  - spacing
  - mobile
  - viewport
  - scaling
allowed-tools:
  - Read
  - Grep
  - Glob
  - Edit
  - Write
tags: [design-engineering, responsive, fluid-design, css-clamp, utopia, layout, mobile]
---

# Fluid Responsive Scale — SIGCE Design Engineering

Esta skill establece la doctrina de **diseño fluido y responsividad matemática continua** para SIGCE SaaS, basada en los principios de *Utopia Fluid Design* y *Bento Glass Architecture*.

---

## 🎯 1. Principios Fundamentales

1. **No Media-Query Snapping**: En lugar de depender exclusivamente de saltos de breakpoints (`sm:`, `md:`, `lg:`), los contenedores, tipografías y espaciados deben escalar orgánicamente con el ancho del viewport usando `clamp(min, preferred, max)`.
2. **Zero Horizontal Overflow**: Ningún elemento hijo puede tener dimensiones fijas que excedan su contenedor padre. Siempre aplicar `min-w-0` en elementos flex y `overflow-wrap: break-word` en textos.
3. **Escalabilidad de 320px a 1440px+**: El diseño debe verse impecable y equilibrado en un iPhone SE (320px), iPhone 15/16 (393px), tablets (768px/1024px) y monitores de alta resolución.

---

## 📐 2. Escala de Tokens Fluidos (CSS Variables)

Definidos en `src/app/globals.css`:

### A. Tipografía Fluida
```css
/* Base scale: 320px viewport -> 1440px viewport */
--font-size-fluid-xs: clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem);    /* 12px -> 13px */
--font-size-fluid-sm: clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem);   /* 13px -> 14px */
--font-size-fluid-base: clamp(0.875rem, 0.83rem + 0.25vw, 1rem);     /* 14px -> 16px */
--font-size-fluid-lg: clamp(1rem, 0.94rem + 0.35vw, 1.1875rem);      /* 16px -> 19px */
--font-size-fluid-xl: clamp(1.1875rem, 1.1rem + 0.5vw, 1.5rem);      /* 19px -> 24px */
--font-size-fluid-2xl: clamp(1.5rem, 1.35rem + 0.8vw, 2rem);        /* 24px -> 32px */
--font-size-fluid-3xl: clamp(1.875rem, 1.65rem + 1.2vw, 2.75rem);    /* 30px -> 44px */
--font-size-fluid-number: clamp(2rem, 1.7rem + 1.6vw, 3.5rem);       /* 32px -> 56px */
```

### B. Espaciado y Paddings Fluidos
```css
--space-fluid-3xs: clamp(0.25rem, 0.23rem + 0.1vw, 0.375rem);        /* 4px -> 6px */
--space-fluid-2xs: clamp(0.375rem, 0.34rem + 0.18vw, 0.5rem);        /* 6px -> 8px */
--space-fluid-xs: clamp(0.5rem, 0.44rem + 0.3vw, 0.75rem);           /* 8px -> 12px */
--space-fluid-sm: clamp(0.75rem, 0.68rem + 0.4vw, 1rem);             /* 12px -> 16px */
--space-fluid-md: clamp(1rem, 0.88rem + 0.6vw, 1.5rem);              /* 16px -> 24px */
--space-fluid-lg: clamp(1.25rem, 1.1rem + 0.8vw, 2rem);              /* 20px -> 32px */
--space-fluid-xl: clamp(1.5rem, 1.3rem + 1.2vw, 2.5rem);             /* 24px -> 40px */
```

---

## 🛠️ 3. Reglas de Implementación en Componentes

1. **Tarjetas Bento (`BentoCard`, `UnifiedKPICard`)**:
   - Usar paddings fluidos: `p-[var(--space-fluid-md)]` o `p-4 sm:p-6 lg:p-8`.
   - Números de métricas con `font-size: var(--font-size-fluid-number)` o clases `text-2xl sm:text-4xl lg:text-5xl`.
2. **Listas y Tablas de Datos (`DataTable`, `ResponsiveTable`)**:
   - Headers y celdas deben envolver texto largo (`break-words` o `truncate` según contexto).
   - Siempre envolver tablas en contenedores con `w-full overflow-x-auto custom-scrollbar`.
3. **Modales y Sheets**:
   - En pantallas < 640px, los modales ocupan la parte inferior como *Bottom Sheet* (`rounded-t-3xl`), y en pantallas >= 640px se centran como *Floating Dialog* (`rounded-3xl`).
