/* =========================================================================
   PANADERÍA SINAÍ — Datos del obrador, contacto y catálogo
   Fuente de verdad para todos los componentes.
   ========================================================================= */

export type Pan = {
  id: string;
  nombre: string;
  descripcion: string;
  ingredientes: string[];
  precio: number | null; // pesos por pieza (null = por encargo)
  categoria: "oficio" | "yema" | "temporada";
  temporada?: string;
};

/* -------- Contacto -------- */
export const TELEFONO = "951 190 0287";
export const TELEFONO_LINK = "tel:+529511900287";
export const WHATSAPP_NUMERO = "529511900287";

/* -------- La obra ancla de la marca -------- */
export const PAINTING_URL =
  "https://a.1stdibscdn.com/archivesE/upload/a_3783/1509386875129/pan_de_muertos_1_master.jpg";

/* Construye un enlace de WhatsApp con el mensaje ya codificado. */
export const WA_LINK = (mensaje: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;

/* Precio formateado en pesos mexicanos. */
export const formatPrecio = (p: Pan) =>
  p.precio == null ? "Por encargo" : `$${p.precio}`;

/* -------- Catálogo -------- */
export const panes: Pan[] = [
  // ============ Panes de oficio ============
  {
    id: "concha",
    nombre: "Concha Tradicional",
    descripcion:
      "Costra craquelada que se abre como una grieta en la tierra; debajo, una miga suave que huele a mantequilla pura.",
    ingredientes: [
      "Harina de trigo",
      "Mantequilla pura",
      "Azúcar",
      "Levadura natural",
      "Vainilla",
    ],
    precio: 3,
    categoria: "oficio",
  },
  {
    id: "pan-manteca",
    nombre: "Pan de Manteca",
    descripcion:
      "Amasado lento con manteca de cerdo artesanal. Miga densa, corteza de nuez y un sabor que se queda en la memoria.",
    ingredientes: [
      "Harina de trigo",
      "Manteca de cerdo artesanal",
      "Azúcar",
      "Canela",
      "Levadura",
    ],
    precio: 3,
    categoria: "oficio",
  },
  {
    id: "pan-amarillo",
    nombre: "Pan Amarillo",
    descripcion:
      "Masa madre rústica horneada a la cazuela, con ese color de brasa que le presta el azafrán del oficio.",
    ingredientes: [
      "Masa madre",
      "Harina de trigo",
      "Azúcar",
      "Manteca",
      "Sal de mar",
    ],
    precio: 4,
    categoria: "oficio",
  },
  {
    id: "bolillo",
    nombre: "Bolillo de Horno",
    descripcion:
      "Corteza crocante y dorada, centro elástico. El compañero de toda mesa oaxaqueña, horneado a leña.",
    ingredientes: ["Harina de trigo", "Agua", "Levadura", "Sal", "Manteca"],
    precio: 4,
    categoria: "oficio",
  },
  {
    id: "resobado",
    nombre: "Resobado Tradicional",
    descripcion:
      "Capas hojaldradas con manteca y azúcar tostada. Se deshoja en la boca como una hoja de otoño.",
    ingredientes: ["Harina de trigo", "Manteca", "Azúcar tostada", "Sal"],
    precio: 4,
    categoria: "oficio",
  },

  // ============ Panes de yema ============
  {
    id: "torta-yema",
    nombre: "Torta de Yema",
    descripcion:
      "El clásico de celebración: huevo de rancho, anís y un dorado de yema que recuerda al sol del valle.",
    ingredientes: [
      "Harina de trigo",
      "Huevo de rancho",
      "Anís",
      "Azúcar",
      "Manteca",
    ],
    precio: 6,
    categoria: "yema",
  },
  {
    id: "lima",
    nombre: "Lima",
    descripcion:
      "Moldeada a mano en forma de lima, glaseada y espolvoreada. Dulce de fiesta de pueblo, suave por dentro.",
    ingredientes: [
      "Harina de trigo",
      "Yema de huevo",
      "Azúcar glas",
      "Vainilla",
      "Manteca",
    ],
    precio: 6,
    categoria: "yema",
  },
  {
    id: "empastado",
    nombre: "Empastado",
    descripcion:
      "Relleno de crema pastelera o ate de membrillo, espolvoreado de azúcar. El más goloso del mostrador.",
    ingredientes: [
      "Harina de trigo",
      "Crema pastelera",
      "Ate de membrillo",
      "Azúcar",
      "Huevo",
    ],
    precio: 6,
    categoria: "yema",
  },
  {
    id: "corazon",
    nombre: "Corazón",
    descripcion:
      "En forma de corazón y de yema tierna. El pan de los encargos y los buenos deseos.",
    ingredientes: [
      "Harina de trigo",
      "Huevo de rancho",
      "Anís",
      "Azúcar",
      "Manteca",
    ],
    precio: 6,
    categoria: "yema",
  },
  {
    id: "picon",
    nombre: "Picón",
    descripcion:
      "Picos de masa dorada espolvoreados de azúcar: crocante por fuera, esponjoso por dentro.",
    ingredientes: [
      "Harina de trigo",
      "Huevo de rancho",
      "Azúcar",
      "Vainilla",
      "Manteca",
    ],
    precio: 6,
    categoria: "yema",
  },

  // ============ Temporada ============
  {
    id: "pan-muerto",
    nombre: "Pan de Muerto",
    descripcion:
      "El pan ritual de noviembre: ajonjolí tostado, azúcar o caritas artesanales que honran la memoria.",
    ingredientes: [
      "Harina de trigo",
      "Ajonjolí tostado",
      "Azúcar",
      "Agua de azahar",
      "Huevo",
    ],
    precio: null,
    categoria: "temporada",
    temporada: "Noviembre",
  },
  {
    id: "rosca",
    nombre: "Rosca de Reyes",
    descripcion:
      "Frutas maceradas y costra crocante de mantequilla. El círculo que cierra la temporada.",
    ingredientes: [
      "Harina de trigo",
      "Frutas maceradas",
      "Mantequilla",
      "Azúcar",
      "Ate de membrillo",
    ],
    precio: null,
    categoria: "temporada",
    temporada: "Enero",
  },
];

export const panesOficio = panes.filter((p) => p.categoria === "oficio");
export const panesYema = panes.filter((p) => p.categoria === "yema");
export const panesTemporada = panes.filter((p) => p.categoria === "temporada");
