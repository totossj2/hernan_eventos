export const GALERIA_CATEGORIAS = [
  "Carpas Beduinas",
  "Carpas Estructurales",
  "Escenarios",
  "Tarimas",
  "Casamientos",
  "Municipales",
  "Corporativos",
] as const;

export type GaleriaCategoria = (typeof GALERIA_CATEGORIAS)[number];

export type GaleriaItem = {
  id: string;
  src: string;
  alt: string;
  categorias: GaleriaCategoria[];
  descripcion: string;
};

export const GALERIA_ITEMS: GaleriaItem[] = [
  {
    id: "gal-001",
    src: "/galeria/gal-001.webp",
    alt: "Carpa para evento fin de año — El Trebol, Ezeiza",
    categorias: ["Carpas Beduinas"],
    descripcion: "Carpa 6x8 para evento fin de año — El Trebol, Ezeiza",
  },
  {
    id: "gal-002",
    src: "/galeria/gal-002.webp",
    alt: "Carpa 6x8 con living — Barrio La Providencia, Canning",
    categorias: ["Carpas Beduinas"],
    descripcion: "Carpa 6x8 con living — Barrio La Providencia, Canning",
  },
  {
    id: "gal-003",
    src: "/galeria/gal-003.webp",
    alt: "Carpa 6x8 con piso de madera — Barrio El Talar, Pacheco",
    categorias: ["Carpas Beduinas"],
    descripcion: "Carpa 6x8 con piso de madera — Barrio El Talar, Pacheco",
  },
  {
    id: "gal-004",
    src: "/galeria/gal-004.webp",
    alt: "Carpa 6x8 con piso de madera e iluminación — Barrio St Thomas, Canning",
    categorias: ["Carpas Beduinas"],
    descripcion:
      "Carpa 6x8 con piso de madera e iluminación — Barrio St Thomas, Canning",
  },
  {
    id: "gal-005",
    src: "/galeria/gal-005.webp",
    alt: "Carpa 6x8 para escaneo de entradas @romp3_party — Monte Grande",
    categorias: ["Carpas Beduinas"],
    descripcion:
      "Carpa 6x8 para escaneo de entradas @romp3_party — Monte Grande",
  },
  {
    id: "gal-006",
    src: "/galeria/gal-006.webp",
    alt: "Dos Carpas 8x24 con piso de madera para feria",
    categorias: ["Corporativos", "Carpas Estructurales"],
    descripcion:
      "Dos Carpas 6x24 con piso de madera para feria — Barrio El Talar, Pacheco",
  },
  {
    id: "gal-007",
    src: "/galeria/gal-007.webp",
    alt: "Carpa para evento de marca",
    categorias: ["Corporativos", "Carpas Estructurales"],
    descripcion:
      "Carpa 8x36 para clínica veterinaria para ONG extranjera @fourpaws.international — Zoo Lujan",
  },
  {
    id: "gal-008",
    src: "/galeria/gal-008.webp",
    alt: "Carpa 8x10 para festejo patrio veteranos de Malvinas",
    categorias: ["Carpas Estructurales", "Municipales"],
    descripcion:
      "Carpa 8x10 para festejo patrio veteranos de Malvinas — Plaza de la estación, Monte Grande ",
  },
  {
    id: "gal-009",
    src: "/galeria/gal-009.webp",
    alt: "Carpa parabolica con climatización frio calor",
    categorias: ["Carpas Estructurales", "Corporativos"],
    descripcion:
      "Carpa parabolica 12x20 con piso y climatización frio calor — Avellaneda",
  },
  {
    id: "gal-010",
    src: "/galeria/gal-010.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-011",
    src: "/galeria/gal-011.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-012",
    src: "/galeria/gal-012.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-013",
    src: "/galeria/gal-013.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-014",
    src: "/galeria/gal-014.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-015",
    src: "/galeria/gal-015.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-016",
    src: "/galeria/gal-016.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-017",
    src: "/galeria/gal-017.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-018",
    src: "/galeria/gal-018.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-019",
    src: "/galeria/gal-019.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-020",
    src: "/galeria/gal-020.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-021",
    src: "/galeria/gal-021.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-022",
    src: "/galeria/gal-022.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-023",
    src: "/galeria/gal-023.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-024",
    src: "/galeria/gal-024.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
  {
    id: "gal-025",
    src: "/galeria/gal-025.webp",
    alt: "",
    categorias: [],
    descripcion: "",
  },
];
