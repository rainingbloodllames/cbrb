export const site = {
  name: "Colegio Bicentenario República del Brasil",
  shortName: "CBRB",
  tagline: "Colegio público, laico y gratuito desde 1843. Parvularia a IV Medio en Concepción.",
  address: "San Martín 1580, Concepción, Región del Biobío",
  phone: "(41) 222 4711",
  phoneHref: "tel:+56412224711",
  email: "brasil@andaliensur.cl",
  domain: "https://cbrb.cl",
  founded: 1843,
  director: "Dino Olivieri Díaz",
  saeUrl: "https://admision.mineduc.cl",
  // Workspace no instalado aún en el colegio — oculto en UI (ver SiteHeader/Footer).
  workspaceUrl: "https://mail.google.com",
  // SIGCE real en producción:
  sigceUrl: process.env.NEXT_PUBLIC_SIGCE_URL ?? "https://sigce.cl",
  facebook: "https://www.facebook.com/ColegioBicentenarioRepublicadelBrasil/",
  instagram: "https://www.instagram.com/colegio_brasil/",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Colegio+Rep%C3%BAblica+del+Brasil+San+Mart%C3%ADn+1580+Concepci%C3%B3n",
} as const;

export const nav = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/admision", label: "Admisión SAE" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/transparencia", label: "Transparencia" },
  { href: "/contacto", label: "Contacto" },
] as const;
