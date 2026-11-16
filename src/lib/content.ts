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
    title: "Admisión SAE 2027: parvularia y 1° básico",
    date: "2026-10-15",
    category: "Admisión",
    excerpt:
      "Periodo complementario SAE. Postula a parvularia y a 1° básico en admision.mineduc.cl.",
    body: "La postulación es solo por SAE. Para 2027 revisa cupos en parvularia y básica en admision.mineduc.cl.",
    image: "/fotos/parvularia-acto.jpg",
    imageAlt: "Estudiantes de parvularia con polera verde del colegio levantando paletas de colores en un acto escolar",
    imageCredit: "Foto SAE",
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
    title: "SIMCE 2025 y PAES 2026: matrícula 1.342, 132 docentes",
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
    title: "Visita del ministro Nicolás Cataldo a las obras (nov 2025)",
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
    title: "182 años: acto oficial y reconocimiento al personal",
    date: "2025-09-18",
    category: "Comunidad",
    excerpt:
      "Fundado en 1843 como Escuela N°2 de Primeras Letras. Hoy, colegio del SLEP Andalién Sur con más de 1.400 estudiantes en 2025.",
    body: "Comenzó en 1843 como Escuela de Primeras Letras, con clases de lectura, aritmética y catecismo. En septiembre de 2025 la comunidad celebró 182 años con acto oficial y reconocimiento a funcionarios con trayectoria.",
    image: "/fotos/estandarte-media.jpg",
    imageAlt: "Estudiantes de enseñanza media con estandarte del colegio en un desfile en Concepción",
    imageCredit: "Foto SAE — Muni Concepción",
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
    title: "$3.631 millones en techumbre, baños y accesibilidad",
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
    title: "Escuela N°2 de 1843: historia y sedes",
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
    caption: "Desfile en Concepción, con cursos de parvularia a IV medio.",
    credit: "Vitrina SAE",
  },
  {
    src: "/fotos/parvularia-acto.jpg",
    alt: "Estudiantes de parvularia con polera verde levantando paletas de colores en un acto",
    title: "Parvularia en acto escolar",
    caption: "Acto con paletas en parvularia.",
    credit: "Ficha 4564",
  },
  {
    src: "/fotos/acto-civico.jpg",
    alt: "Estudiantes de básica en un acto cívico con la mano al pecho junto a sillas del patio",
    title: "Acto cívico",
    caption: "Acto cívico en el patio de básica.",
    credit: "Archivo colegio",
  },
  {
    src: "/fotos/bandera-brasil.jpg",
    alt: "Niña con polera del colegio sosteniendo la bandera de Brasil en el aula",
    title: "Bandera de Brasil",
    caption: "El colegio guarda el Pabellón de Brasil desde el siglo XX.",
    credit: "Patrimonio histórico",
  },
  {
    src: "/fotos/docentes-historicos.jpg",
    alt: "Fotografía histórica en color de un grupo de docentes del colegio",
    title: "Docentes, siglo XX",
    caption: "Docentes de la Escuela N°2.",
    credit: "Archivo histórico",
  },
  {
    src: "/fotos/estudiantes-historicos.jpg",
    alt: "Fotografía histórica en blanco y negro de estudiantes del colegio en el siglo XX",
    title: "Estudiantes, siglo XX",
    caption: "Estudiantes de la Escuela N°2.",
    credit: "Archivo histórico",
  },
  {
    src: "https://nahen.cl/imagenes/Letreros/ConservacionColegioBrasil.jpeg",
    alt: "Letrero oficial de obra Aquí se construye Educación Pública del SLEP Andalién Sur junto al patio del colegio",
    title: "Obra en curso · Aquí se construye",
    caption: "Conservación del colegio: inicio 2 oct 2025, plazo 600 días, contratista Constructora Nahen.",
    credit: "Foto: Constructora Nahen / SLEP Andalién Sur · MINEDUC",
  },
];

/** Carrusel SAE 2027 (8 láminas oficiales, en orden de lectura). */
export const saeCarousel: GalleryItem[] = [
  {
    src: "/fotos/Carrusel%20SAE/901919710_2606042879875014_2410338374525380810_n.jpeg",
    alt: "Portada del carrusel: sede histórica en remodelación y ¿Quieres estudiar en el Colegio Brasil? con fecha SAE 2027",
    title: "Portada",
    caption: "¿Quieres estudiar en el Colegio Brasil? Sede histórica en remodelación.",
    credit: "Carrusel SAE 2027",
  },
  {
    src: "/fotos/Carrusel%20SAE/900924523_1803241770790233_3651402398147546902_n.jpeg",
    alt: "Lámina ¿Qué es el SAE? Plataforma oficial del MINEDUC para postular en línea",
    title: "¿Qué es el SAE?",
    caption: "Plataforma oficial del MINEDUC. La postulación es en línea.",
    credit: "Carrusel SAE 2027",
  },
  {
    src: "/fotos/Carrusel%20SAE/901641010_985486644108020_7331215627700095965_n.jpeg",
    alt: "Paso 1: ingresa al SAE. Visita sistemadeadmisionescolar.cl y crea tu cuenta como apoderado",
    title: "Paso 1: ingresa",
    caption: "Entra a sistemadeadmisionescolar.cl y crea tu cuenta.",
    credit: "Carrusel SAE 2027",
  },
  {
    src: "/fotos/Carrusel%20SAE/902872203_1126603743347338_7830352652922988579_n.jpeg",
    alt: "Paso 2: busca el Colegio Brasil. Elige Biobío, Concepción y busca República del Brasil",
    title: "Paso 2: busca",
    caption: "Biobío → Concepción → República del Brasil.",
    credit: "Carrusel SAE 2027",
  },
  {
    src: "/fotos/Carrusel%20SAE/901046883_1836832504316504_6768247768308512943_n.jpeg",
    alt: "Paso 3: ordena y envía. Ordena preferencias y descarga el comprobante",
    title: "Paso 3: ordena y envía",
    caption: "Ordena tus preferencias y descarga el comprobante.",
    credit: "Carrusel SAE 2027",
  },
  {
    src: "/fotos/Carrusel%20SAE/902000471_1629791382515813_9006492365465713688_n.jpeg",
    alt: "¿Qué pasa después? Revisa resultados el 1 de diciembre. Postulación, asignación, matrícula",
    title: "Después",
    caption: "Resultados el 1 de diciembre. Matrícula presencial.",
    credit: "Carrusel SAE 2027",
  },
  {
    src: "/fotos/Carrusel%20SAE/902143017_1122751457272293_4808248143837862719_n.jpeg",
    alt: "Fechas SAE 2027: 10 al 17 de noviembre de 2026 complementario, 1 de diciembre resultados, 9 al 22 de diciembre matrícula",
    title: "Fechas",
    caption: "10–17 nov complementario · 1 dic resultados · 9–22 dic matrícula.",
    credit: "Carrusel SAE 2027",
  },
  {
    src: "/fotos/Carrusel%20SAE/901547701_1157692010023205_4093921886273021387_n.jpeg",
    alt: "Cierre: Aprender, compartir, crecer. Postular no garantiza una vacante, la asignación es del sistema",
    title: "Cierre",
    caption: "Postular no garantiza una vacante: asigna el sistema.",
    credit: "Carrusel SAE 2027",
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
  { role: "Director", name: "Dino Fauricio Olivieri Díaz", email: "dino.olivieri@andaliensur.cl" },
  { role: "Inspectora General Enseñanza Media", name: "Rebeca Pinto Espinoza", email: "rebeca.pinto@andaliensur.cl" },
  { role: "Inspector General Enseñanza Básica", name: "Alejandro Olave Parra", email: "alejandro.olave@andaliensur.cl" },
  { role: "Encargada de Convivencia Educativa", name: "María Lourdes Alid Lagos", email: "maria.alid@andaliensur.cl" },
  { role: "Jefe de UTP", name: "César Pizarro Hidalgo", email: "cesar.pizarro@andaliensur.cl" },
] as const;
