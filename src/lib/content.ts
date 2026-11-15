// Contenido editorial — EDITABLE por periodista sin código.
// Fase 2: migrar a Sanity free (mismo shape). Fase 1: este archivo = CMS.
// Para publicar una noticia: copia un objeto, cambia título/fecha/texto, commit.
// Fuentes reales verificadas nov 2026: Resumen.cl, Diario Concepción, Andalién Sur,
// DEP/MINEDUC, SAE (cdnsae.mineduc.cl, RBD 4564), Educación en Datos, Constructora Nahen.
// Fotos oficiales en public/fotos/ provienen de la vitrina SAE del colegio (MINEDUC).
// Google Imágenes: lo que aparece son (a) SAE, (b) prensa con crédito, (c) redes
// oficiales. Aparecer en Google Imágenes NO da permiso de reutilizar: toda foto
// de prensa/social se publica con crédito visible + enlace a la fuente original.
// Cobertura de protestas/denuncias (Resumen 2019-2024) se excluye a propósito
// de la web institucional decorativa.

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
    image: "/fotos/parvularia-acto.jpg",
    imageAlt: "Estudiantes de parvularia con polera verde del colegio levantando paletas de colores en un acto escolar",
    imageCredit: "Foto oficial: vitrina SAE · MINEDUC (RBD 4564)",
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
    image: "/fotos/estandarte-media.jpg",
    imageAlt: "Estudiantes de enseñanza media con estandarte del colegio en un desfile en Concepción",
    imageCredit: "Foto oficial: vitrina SAE · MINEDUC (RBD 4564) · Saludo: Municipalidad de Concepción",
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
  {
    slug: "educacion-publica-excelencia-historia",
    title: "Educación pública de excelencia: la historia desde la Escuela N°2 de 1843",
    date: "2022-10-30",
    category: "Académica",
    excerpt:
      "De Escuela de Primeras Letras a Colegio Bicentenario con enseñanza parvularia, básica y media. 1.470 estudiantes en 2022 y guardadores del Pabellón de Brasil.",
    body: "La historia académica comienza en 1843 como Escuela N°2, en madera, con preceptores y clases de lectura, aritmética y catecismo. Pasó por Angol con Chacabuco, Cochrane con Serrano y Rengo 65, y desde 2013 ocupa Galvarino esquina San Martín y Roosevelt. En 2022 contaba 48 cursos y 1.470 estudiantes de prekínder a IV medio humanista-científico, con Programa de Integración Escolar, estudiantes sordos y decenas de estudiantes migrantes. Desde sus orígenes es guardador del Pabellón Patrio de la República del Brasil.",
    image: "https://assets.diarioconcepcion.cl/2022/10/pag-14-4-Colegio-Bicentenario-Republica-de-Brasil-foto-isidoro.jpg",
    imageAlt: "Sala de clases del Colegio República del Brasil con estudiantes de básica con polera verde y su profesora",
    imageCredit: "Foto: Isidoro Valenzuela · Diario Concepción (oct 2022)",
    source: "Diario Concepción · Silvanio Mariani",
    sourceUrl: "https://www.diarioconcepcion.cl/ciudad/2022/10/30/colegio-bicentenario-republica-de-brasil-educacion-publica-de-excelencia-en-biobio.html",
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
 * Galería — fotos oficiales del colegio desde la vitrina SAE (MINEDUC, RBD 4564)
 * + letrero oficial de la obra SLEP/MINEDUC en Google Imágenes.
 * Archivos SAE locales en public/fotos/ (copias de cdnsae.mineduc.cl/imagenes/4564/).
 * Lo que aparece en Google Imágenes para este RBD son estas fotos SAE + prensa
 * (Resumen.cl, Diario Concepción, DEP, Nahen) + redes oficiales. Aparecer en
 * Google Imágenes no autoriza reutilizar sin crédito: toda foto de prensa se
 * cita con crédito visible + enlace a la fuente.
 */
export const gallery: GalleryItem[] = [
  {
    src: "/fotos/estandarte-media.jpg",
    alt: "Estudiantes de enseñanza media con estandarte del colegio en un desfile en Concepción",
    title: "Desfile de enseñanza media",
    caption: "Estandarte y desfila en Concepción. Comunidad de parvularia a IV medio.",
    credit: "Foto oficial: SAE · MINEDUC",
  },
  {
    src: "/fotos/parvularia-acto.jpg",
    alt: "Estudiantes de parvularia con polera verde levantando paletas de colores en un acto",
    title: "Parvularia en acto escolar",
    caption: "Párvulos con paletas de colores. Juego, lenguaje y socialización.",
    credit: "Foto oficial: SAE · MINEDUC",
  },
  {
    src: "/fotos/acto-civico.jpg",
    alt: "Estudiantes de básica en un acto cívico con la mano al pecho junto a sillas del patio",
    title: "Acto cívico",
    caption: "Himno y respeto en el patio. Formación ciudadana del colegio.",
    credit: "Foto oficial: SAE · MINEDUC",
  },
  {
    src: "/fotos/bandera-brasil.jpg",
    alt: "Niña con polera del colegio sosteniendo la bandera de Brasil en el aula",
    title: "Bandera de Brasil",
    caption: "El colegio es guardador del Pabellón de la República del Brasil desde el siglo XX.",
    credit: "Foto oficial: SAE · MINEDUC",
  },
  {
    src: "/fotos/docentes-historicos.jpg",
    alt: "Fotografía histórica en color de un grupo de docentes del colegio",
    title: "Docentes de ayer",
    caption: "Generaciones de profesoras y profesores desde la Escuela N°2 de 1843.",
    credit: "Foto histórica: SAE · MINEDUC",
  },
  {
    src: "/fotos/estudiantes-historicos.jpg",
    alt: "Fotografía histórica en blanco y negro de estudiantes del colegio en el siglo XX",
    title: "Estudiantes de ayer",
    caption: "Patrimonio fotográfico del colegio bicentenario. Escuela N°2 de 1843.",
    credit: "Foto histórica: SAE · MINEDUC",
  },
  {
    src: "https://nahen.cl/imagenes/Letreros/ConservacionColegioBrasil.jpeg",
    alt: "Letrero oficial de obra Aquí se construye Educación Pública del SLEP Andalién Sur junto al patio del colegio",
    title: "Obra en curso · Aquí se construye",
    caption: "Conservación del colegio: inicio 2 oct 2025, plazo 600 días, contratista Constructora Nahen.",
    credit: "Foto: Constructora Nahen / SLEP Andalién Sur · MINEDUC",
  },
];

export const documents: DocItem[] = [
  { title: "Proyecto Educativo Institucional (PEI)", year: 2026, category: "PEI", href: "/docs/proyecto-educativo-institucional-2026.pdf" },
  { title: "Reglamento Interno Escolar (RIE) 2026", year: 2026, category: "Reglamento", href: "/docs/reglamento-interno-2026.pdf" },
  { title: "Circular de Reglamentos Internos N°781", year: 2026, category: "Reglamento", href: "/docs/circular-reglamentos-internos-781.pdf" },
  { title: "Reglamento de Evaluación", year: 2026, category: "Reglamento", href: "/docs/reglamento-de-evaluacion.pdf" },
  { title: "Plan de Gestión de Convivencia Escolar 2026", year: 2026, category: "Planes", href: "/docs/plan-convivencia-escolar-2026.pdf" },
  { title: "Plan de Formación Ciudadana 2026", year: 2026, category: "Planes", href: "/docs/plan-formacion-ciudadana-2026.pdf" },
  { title: "Plan de Sexualidad 2026", year: 2026, category: "Planes", href: "/docs/plan-sexualidad-2026.pdf" },
  { title: "Plan de Orientación Vocacional 2026", year: 2026, category: "Planes", href: "/docs/plan-orientacion-vocacional-2026.pdf" },
  { title: "Guía Práctica de Medidas de Seguridad", year: 2026, category: "Seguridad", href: "/docs/guia-medidas-de-seguridad.pdf" },
  { title: "Informe Ejecutivo 2026", year: 2026, category: "Informes", href: "/docs/informe-ejecutivo-2026.pdf" },
];

export const team = [
  { role: "Director", name: "Dino Fauricio Olivieri Díaz" },
  { role: "Inspectora General Enseñanza Media", name: "Rebeca Pinto Espinoza" },
  { role: "Inspector General Enseñanza Básica", name: "Alejandro Olave Parra" },
  { role: "Encargada de Convivencia Educativa", name: "María Lourdes Alid Lagos" },
  { role: "Jefe de UTP", name: "César Pizarro Hidalgo" },
] as const;
