// Contenido editorial — EDITABLE por periodista sin código.
// Fase 2: migrar a Sanity free (mismo shape). Fase 1: este archivo = CMS.
// Para publicar una noticia: copia un objeto, cambia título/fecha/texto, commit.

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  category: "Admisión" | "Comunidad" | "Académica" | "Deportes" | "Artes";
  excerpt: string;
  body: string;
};

export type DocItem = {
  title: string;
  year: number;
  category: "PEI" | "Reglamento" | "Ley" | "SIMCE" | "PIE" | "Informes" | "Planes" | "Seguridad";
  href: string; // /docs/xxx.pdf o Drive público
};

export const news: NewsItem[] = [
  {
    slug: "admision-sae-2027",
    title: "Admisión SAE 2027: te invitamos a ser parte del CBRB",
    date: "2026-10-15",
    category: "Admisión",
    excerpt:
      "Periodo complementario del Sistema de Admisión Escolar. Postula a Educación Parvularia y 1° Básico en admision.mineduc.cl.",
    body: "El Colegio Bicentenario República del Brasil invita a las familias de Concepción a postular vía SAE. Somos un colegio público, laico y bicentenario con historia desde 1843, ubicado en San Martín 1580.",
  },
  {
    slug: "182-anos",
    title: "Celebramos 182 años de historia y excelencia pública",
    date: "2026-09-18",
    category: "Comunidad",
    excerpt:
      "La comunidad educativa celebró 182 años desde la fundación de la Escuela N°2 en 1843, junto a apoderados, estudiantes y SLEP Andalién Sur.",
    body: "Acto oficial con estudiantes de Parvularia a 4° Medio, presentación de la banda y reconocimiento a funcionarios con trayectoria.",
  },
  {
    slug: "avance-obras",
    title: "Avance de obras del colegio alcanza 63%",
    date: "2026-08-20",
    category: "Comunidad",
    excerpt:
      "Las obras de mejoramiento integral del edificio alcanzan un avance sostenido según informe técnico, beneficiando a toda la comunidad.",
    body: "Se continúa trabajando para entregar espacios seguros, accesibles y modernos para nuestros estudiantes.",
  },
];

export const documents: DocItem[] = [
  { title: "Proyecto Educativo Institucional (PEI) 4564", year: 2026, category: "PEI", href: "/docs/PEI-2025-2027.pdf" },
  { title: "Reglamento Interno Escolar (RIE) 2026", year: 2026, category: "Reglamento", href: "/docs/RIE-2026.pdf" },
  { title: "REX N°781 — Circular Reglamentos Internos", year: 2026, category: "Reglamento", href: "/docs/REX-781-Reglamentos-Internos.pdf" },
  { title: "Reglamento de Evaluación 4564", year: 2026, category: "Reglamento", href: "/docs/Reglamento-Evaluacion-4564.pdf" },
  { title: "Plan de Gestión Convivencia Escolar 2026", year: 2026, category: "Planes", href: "/docs/Plan-Gestion-Convivencia-2026.pdf" },
  { title: "Plan de Formación Ciudadana 2026", year: 2026, category: "Planes", href: "/docs/Plan-Formacion-Ciudadana-2026.pdf" },
  { title: "Plan de Sexualidad 2026", year: 2026, category: "Planes", href: "/docs/Plan-Sexualidad-2026.pdf" },
  { title: "Plan de Orientación Vocacional 2026", year: 2026, category: "Planes", href: "/docs/Plan-Orientacion-Vocacional-2026.pdf" },
  { title: "Guía Práctica de Medidas de Seguridad", year: 2026, category: "Seguridad", href: "/docs/Guia-Medidas-Seguridad.pdf" },
  { title: "Informe Ejecutivo Colegio Bicentenario República del Brasil", year: 2026, category: "Informes", href: "/docs/Informe-Ejecutivo.pdf" },
];

export const team = [
  { role: "Director", name: "Dino Olivieri Díaz" },
  { role: "Inspector General", name: "Por definir — subir en /nosotros" },
  { role: "Orientación", name: "Por definir — subir en /nosotros" },
  { role: "Encargada Convivencia Escolar", name: "Por definir — subir en /nosotros" },
] as const;
