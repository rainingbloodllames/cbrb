// Contenido editorial — EDITABLE por periodista sin código.
// Fase 2: migrar a Sanity free (mismo shape). Fase 1: este archivo = CMS.
// Para publicar una noticia: copia un objeto, cambia título/fecha/texto, commit.
// Fuentes reales verificadas nov 2026: Resumen.cl, Diario Concepción, Andalién Sur,
// DEP/MINEDUC, Educación en Datos (MINEDUC/Agencia Calidad/DEMRE).

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  category: "Admisión" | "Comunidad" | "Académica" | "Deportes" | "Artes";
  excerpt: string;
  body: string;
  /** URL directa de la imagen (remota). Opcional. */
  image?: string;
  imageAlt?: string;
  /** Crédito visible al pie de la imagen. Opcional. */
  imageCredit?: string;
  /** Fuente periodística / institucional. Opcional. */
  source?: string;
  sourceUrl?: string;
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
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sala de clases con estudiantes y docente en una escuela pública",
    imageCredit: "Foto ilustrativa: Unsplash",
    source: "MINEDUC · SAE",
    sourceUrl: "https://admision.mineduc.cl",
  },
  {
    slug: "obras-62-avance-entrega-mayo-2027",
    title: "Obras de conservación alcanzan 62,88%: SLEP proyecta entrega en mayo de 2027",
    date: "2026-09-21",
    category: "Comunidad",
    excerpt:
      "Informe técnico al 25 de agosto de 2026 certifica 62,88% de avance físico sin paralizaciones. Inversión de $3.602 millones a cargo de Constructora Nahen.",
    body: "Las obras de conservación del Colegio Bicentenario República del Brasil de Concepción alcanzan un 62,88% de avance según el último informe de inspección técnica (periodo 2 de octubre de 2025 al 25 de agosto de 2026). El término legal se mantiene para mayo de 2027, sin paralizaciones ni modificaciones de plazo. La empresa Constructora Nahen publica un periodo hasta octubre de 2027 en su web, diferencia de cinco meses que mantiene en duda la fecha efectiva de retorno de la comunidad educativa. Mientras tanto, los estudiantes siguen en el Colegio España y el Liceo de Niñas.",
    image: "https://media.resumen.cl/1180x400/80/wp-content/uploads/2026/09/obras-de-colegio-republica-del-brasil-tienen-un-62-de-avance-se-deberia-entregar-en-mayo-de-2027.jpg.webp",
    imageAlt: "Obras de conservación en el edificio del Colegio República del Brasil en Concepción",
    imageCredit: "Foto: Resumen.cl (sep 2026)",
    source: "Resumen.cl · SLEP Andalién Sur vía Ley de Transparencia",
    sourceUrl: "https://resumen.cl/articulos/colegio-republica-del-brasil-alcanza-62-de-avance-slep-proyecta-entrega-en-mayo-de-2027",
  },
  {
    slug: "resultados-simce-paes-2025-2026",
    title: "SIMCE 2025 y PAES 2026: 1.342 estudiantes, 132 docentes y resultados por sobre el promedio comunal",
    date: "2026-03-09",
    category: "Académica",
    excerpt:
      "4° básico por sobre el país en Lectura y Matemática. PAES promedio 606. Matrícula 1.342 y 690 postulaciones SAE en 2025.",
    body: "Datos oficiales MINEDUC, Agencia de Calidad y DEMRE: matrícula 2025 de 1.342 estudiantes, 132 docentes y 89 asistentes. SIMCE 4° básico 2025: Lectura 287 (+15 sobre el país) y Matemática 272 (+17). PAES admisión 2026: promedio 606 en pruebas obligatorias (Competencia Lectora 601, Matemática 1 611). Ingreso a educación superior: 52% de la cohorte. Postulaciones SAE 2025: 690, con 1° medio como el nivel más demandado.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Estudiante escribiendo en su cuaderno en clase",
    imageCredit: "Foto ilustrativa: Unsplash",
    source: "Educación en Datos · MINEDUC / Agencia de Calidad / DEMRE",
    sourceUrl: "https://www.educacionendatos.cl/colegio/4564",
  },
  {
    slug: "ministro-cataldo-visita-obras-noviembre-2025",
    title: "Ministro Nicolás Cataldo inspecciona obras de conservación junto a la comunidad",
    date: "2025-11-12",
    category: "Comunidad",
    excerpt:
      "Visita del 12 de noviembre de 2025: proyecto de $3.630 millones con recambio de cubierta, envolvente térmica y termopaneles. Entonces con 10% de avance.",
    body: "El ministro de Educación, Nicolás Cataldo, la Seremi de Educación, el director ejecutivo del SLEP Andalién Sur Gonzalo Araneda y la comunidad educativa recorrieron el Colegio República del Brasil. El proyecto contempla recambio de cubierta con reforzamiento, envolvente térmica en muros y techumbre, renovación de aguas lluvias, termopaneles, pisos, pinturas, baños, puertas, sistema eléctrico, calefacción y equipamiento para aulas colaborativas, además de mobiliario para educación básica. Matrícula informada entonces: 1.309 estudiantes de prekínder a IV medio.",
    image: "https://dep.gob.cl/wp-content/uploads/2025/11/biobio-portada.jpg",
    imageAlt: "Visita de autoridades del MINEDUC a obras de conservación en colegios de Concepción",
    imageCredit: "Foto: DEP / MINEDUC (nov 2025)",
    source: "SLEP Andalién Sur · Dirección de Educación Pública",
    sourceUrl: "https://dep.gob.cl/construyendo-educacion-publica/slep-andalien-sur-avanza-en-obras-de-conservacion-en-la-escuela-rebeca-matte-bello-y-el-colegio-bicentenario-republica-de-brasil/",
  },
  {
    slug: "aniversario-182-anos",
    title: "Celebramos 182 años: el colegio más grande de Concepción",
    date: "2025-09-18",
    category: "Comunidad",
    excerpt:
      "Más de 1.400 estudiantes. Fundado en 1843 como Escuela N°2 de Primeras Letras, hoy colegio bicentenario del SLEP Andalién Sur.",
    body: "Comenzó sus actividades en 1843 como Escuela de Primeras Letras con clases de lectura, aritmética y catecismo. Con más de 1.400 estudiantes es el establecimiento educacional más grande de Concepción. La comunidad educativa celebró 182 años junto a apoderados, estudiantes y SLEP Andalién Sur, con acto oficial y reconocimiento a funcionarios con trayectoria.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Estudiantes graduates celebrando con birretes en un acto escolar",
    imageCredit: "Foto ilustrativa: Unsplash · Saludo oficial: Municipalidad de Concepción / Instagram del colegio",
    source: "Municipalidad de Concepción · Instagram @colegio_brasil",
    sourceUrl: "https://www.instagram.com/colegio_brasil/",
  },
  {
    slug: "traslado-1400-estudiantes-obras",
    title: "1.400 estudiantes se trasladan a España y Liceo de Niñas por obras de conservación",
    date: "2025-08-09",
    category: "Comunidad",
    excerpt:
      "Prekínder a 6° básico al Colegio España (496 alumnos, jornada tarde) y 7° a IV medio al Liceo de Niñas (846 alumnos), por 18 a 24 meses.",
    body: "Las faenas comienzan en septiembre de 2025 con inversión de $3.600 millones del Estado vía SLEP Andalién Sur. El director Dino Olivieri Díaz informó el plan de contingencia: prekínder a sexto básico al Colegio Bicentenario España al frente, en jornada de tarde 14:00 a 18:30, y de séptimo a cuarto medio al Liceo Fiscal de Niñas. El plan pedagógico asegura continuidad de horas de clase y alimentación sin alterar el plan de estudios.",
    image: "https://assets.diarioconcepcion.cl/2025/08/pag-8-alumnos-colegio-brasil-foto-colegio-brasil-copia-850x500.jpg",
    imageAlt: "Fachada y estudiantes del Colegio Brasil de Concepción",
    imageCredit: "Foto: Diario Concepción / Cedida (ago 2025)",
    source: "Diario Concepción",
    sourceUrl: "https://www.diarioconcepcion.cl/ciudad/2025/08/09/colegio-brasil-1-400-estudiantes-seran-trasladados-para-ejecutar-obras-de-conservacion-del-recinto.html",
  },
  {
    slug: "inversion-3631-millones-conservacion",
    title: "$3.631 millones: conservación de techumbre, baños, accesibilidad y sistema eléctrico",
    date: "2025-07-11",
    category: "Comunidad",
    excerpt:
      "Proyecto más grande del SLEP Andalién Sur en 2025: más de 3.800 m² de techumbre, aislación térmica, iluminación LED y accesibilidad universal.",
    body: "Con inversión superior a $3.631 millones ($3.608 millones en obras civiles más equipamiento), el proyecto interviene más de 3.800 m² de techumbre con nueva cubierta PV4 zinc-alum y policarbonato, aislación en lana de vidrio y poliestireno, protección contra filtraciones, nuevas puertas, cielos, iluminación LED, pintura interior, accesibilidad universal y mejoramiento de escaleras y baños. El director destacó que es el proyecto de conservación más grande en colegios locales del servicio sur.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Planos y construcción de una obra de infraestructura escolar",
    imageCredit: "Foto ilustrativa: Unsplash",
    source: "Diario Concepción · TVU",
    sourceUrl: "https://www.diarioconcepcion.cl/ciudad/2025/07/11/3-mil-600-millones-colegio-brasil-tendra-importante-obra-de-conservacion-en-infraestructura-y-equipamiento.html",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  credit: string;
};

/**
 * Galería decorativa — imágenes ilustrativas (Unsplash, uso libre).
 * Las fotos reales del colegio están en Instagram @colegio_brasil y Facebook oficial.
 * Para reemplazar por fotos propias: cambia src por /fotos/tu-foto.jpg en public/fotos.
 */
export const gallery: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    alt: "Estudiantes con la mano levantada en una sala de clases luminosa",
    title: "Aprender en comunidad",
    caption: "Parvularia a IV Medio, de los 3 a los 18 años sin cambiar de colegio.",
    credit: "Foto ilustrativa · Unsplash",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    alt: "Grupo de estudiantes sonriendo y conversando en grupo",
    title: "Convivencia y amistad",
    caption: "Más de 1.300 estudiantes, 132 docentes y 89 asistentes en San Martín 1580.",
    credit: "Foto ilustrativa · Unsplash",
  },
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    alt: "Laboratorio escolar con tubos de ensayo de colores",
    title: "Ciencia y descubrimiento",
    caption: "Talleres de ciencias, SIMCE 4° básico por sobre el promedio nacional.",
    credit: "Foto ilustrativa · Unsplash",
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    alt: "Mesa de biblioteca con libros abiertos y luz natural",
    title: "Lectura y biblioteca",
    caption: "Comprensión lectora SIMCE 287 y PAES Competencia Lectora 601.",
    credit: "Foto ilustrativa · Unsplash",
  },
  {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    alt: "Cancha de básquetbol escolar con aro y balón",
    title: "Deporte y vida saludable",
    caption: "Deportes, convivencia y hábitos saludables en el patio del colegio.",
    credit: "Foto ilustrativa · Unsplash",
  },
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
    alt: "Pinceles y pinturas de colores sobre una mesa de arte",
    title: "Artes y creatividad",
    caption: "Artes, música y cultura en un colegio público laico y bicentenario.",
    credit: "Foto ilustrativa · Unsplash",
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
