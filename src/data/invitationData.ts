export interface InvitationData {
  name: string;
  age: number;
  dateISO: string;
  day: string;
  monthES: string;
  monthEN: string;
  year: string;
  weekdayES: string;
  weekdayEN: string;
  tagline: { es: string; en: string };
  ceremony?: { time: string; place: string; address: string };
  reception: { time: string; place: string; address: string };
  venue: string;
  address: string;
  mapsUrl: string;
  parents: { es: string[]; en: string[] };
  godparents: { es: string[]; en: string[] };
  dressCode: { es: string; en: string };
  whatsappNumber: string;
  whatsappMessage: { es: string; en: string };
  photos: { src: string; alt: string; caption: { es: string; en: string } }[];
  heroImage?: string;
  frameImage?: string;
  music?: string;
  elegant?: boolean;
  dedication?: { es: string; en: string };
  confirmBefore?: { es: string; en: string };
}

const camila: InvitationData = {
  name: 'Camila',
  age: 15,
  dateISO: '2026-08-01T17:00:00',
  day: '01',
  monthES: 'Agosto',
  monthEN: 'August',
  year: '2026',
  weekdayES: 'Sábado',
  weekdayEN: 'Saturday',
  tagline: {
    es: 'Un sueño que comienza, una nueva etapa que llega, y un momento que quiero compartir contigo.',
    en: 'A dream begins, a new chapter unfolds, and a moment I wish to share with you.',
  },
  ceremony: { time: '5:00 PM', place: 'Parroquia del Castillo Real', address: 'Av. de las Rosas 123, Jardín Encantado' },
  reception: { time: '7:00 PM', place: 'Salón Cristal de Hadas', address: 'Blvd. Champagne 456, Valle Dorado' },
  venue: 'Salón Cristal de Hadas',
  address: 'Blvd. Champagne 456, Valle Dorado',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Salon+de+eventos',
  parents: {
    es: ['Mariana Solís', 'Alejandro Mendoza'],
    en: ['Mariana Solis', 'Alejandro Mendoza'],
  },
  godparents: {
    es: ['Lucía Fernández', 'Diego Ramírez'],
    en: ['Lucia Fernandez', 'Diego Ramirez'],
  },
  dressCode: {
    es: 'Formal · Jardín Encantado. Tonos pastel bienvenidos. Evitar blanco y rosa empolvado reservado para la quinceañera.',
    en: 'Formal · Enchanted Garden. Pastel tones welcome. Please avoid white and dusty pink reserved for the quinceañera.',
  },
  whatsappNumber: '5215500000000',
  whatsappMessage: {
    es: 'Hola, confirmo mi asistencia a los XV años de Camila ✨',
    en: 'Hello, I confirm my attendance to Camila’s Quinceañera ✨',
  },
  photos: [
    { src: '/photo1.jpg', alt: 'Camila retrato', caption: { es: '', en: '' } },
    { src: '/photo2.jpg', alt: 'Camila en el jardín', caption: { es: '', en: '' } },
    { src: '/photo3.jpg', alt: 'Camila detalle', caption: { es: '', en: '' } },
    { src: '/photo4.jpg', alt: 'Camila elegante', caption: { es: '', en: '' } },
    { src: '/photo5.jpg', alt: 'Camila sonriendo', caption: { es: '', en: '' } },
    { src: '/photo6.jpg', alt: 'Camila con flores', caption: { es: '', en: '' } },
    { src: '/photo7.jpg', alt: 'Camila en palacio', caption: { es: '', en: '' } },
    { src: '/photo8.jpg', alt: 'Camila detalle dorado', caption: { es: '', en: '' } },
    { src: '/photo9.jpg', alt: 'Camila mágica', caption: { es: '', en: '' } },
    { src: '/photo10.jpg', alt: 'Camila soñando', caption: { es: '', en: '' } },
  ],
};

const ph = (src: string, alt: string) => ({ src, alt, caption: { es: '', en: '' } });

const ariana: InvitationData = {
  ...camila,
  name: 'Ariana',
  dateISO: '2026-12-26T18:00:00',
  day: '26',
  monthES: 'Diciembre',
  monthEN: 'December',
  weekdayES: 'Sábado',
  weekdayEN: 'Saturday',
  tagline: {
    es: 'Ariana Abigail Rivera Dávila te invita a celebrar sus XV años, una noche de princesa que quiere compartir contigo.',
    en: 'Ariana Abigail Rivera Dávila invites you to celebrate her quinceañera, a princess night she wishes to share with you.',
  },
  ceremony: undefined,
  reception: { time: '6:00 p.m.', place: 'Calle Mariscal Ureta N° 2800 – Urb. Monterrico', address: 'Ref.: A cuatro cuadras del Kinder Garden – Jaén' },
  venue: 'Calle Mariscal Ureta N° 2800 – Urb. Monterrico',
  address: 'Ref.: A cuatro cuadras del Kinder Garden – Jaén',
  parents: { es: ['Lita Ivonne Dávila Neyra', 'David Rivera Castillo'], en: ['Lita Ivonne Dávila Neyra', 'David Rivera Castillo'] },
  godparents: { es: ['Robinson Ynoñan Puicón', 'Ledy Jannett Rivera Castillo'], en: ['Robinson Ynoñan Puicón', 'Ledy Jannett Rivera Castillo'] },
  dressCode: {
    es: 'Formal. Conservamos el color rosado y dorado para la quinceañera.',
    en: 'Formal. We keep pink and gold for the quinceañera.',
  },
  whatsappNumber: '51953338980',
  whatsappMessage: {
    es: 'Hola, confirmo mi asistencia a los XV años de Ariana ✨',
    en: 'Hello, I confirm my attendance to Ariana’s Quinceañera ✨',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+Mariscal+Ureta+2800+Urb+Monterrico+Jaen+Peru',
  confirmBefore: { es: '12 de diciembre de 2026', en: 'December 12th, 2026' },
  heroImage: '/ariana/princesa.jpg',
  frameImage: '/ariana/xv-1.jpg',
  music: '/ariana/musica.mp3',
  elegant: true,
  dedication: {
    es: 'Hay sueños que se guardan desde niña, y hoy uno de ellos se hace realidad. Quiero compartir contigo este momento tan especial, porque eres parte de mi historia y de las personas que más quiero. Gracias por acompañarme a comenzar esta nueva etapa.',
    en: 'Some dreams are kept since childhood, and today one of them comes true. I want to share this special moment with you, because you are part of my story and of the people I love most. Thank you for joining me as I begin this new chapter.',
  },
  photos: [
    ph('/ariana/nina-1.jpg', 'Ariana de pequeña con gorrito'),
    ph('/ariana/nina-2.jpg', 'Ariana sonriendo'),
    ph('/ariana/nina-3.jpg', 'Ariana posando'),
    ph('/ariana/nina-4.jpg', 'Ariana jugando'),
    ph('/ariana/xv-2.jpg', 'Ariana con su corona'),
    ph('/ariana/xv-1.jpg', 'Ariana en su vestido rosa'),
  ],
};

const PERFILES: Record<string, InvitationData> = { ariana };
const slug = typeof location !== 'undefined' ? (location.pathname.split('/').filter(Boolean)[0] ?? '').toLowerCase() : '';
export const invitationData: InvitationData = PERFILES[slug] ?? camila;
export const PERFIL_ACTIVO = PERFILES[slug] ? slug : '';

export function whatsappLink(lang: 'es' | 'en'): string {
  const msg = encodeURIComponent(invitationData.whatsappMessage[lang]);
  return `https://wa.me/${invitationData.whatsappNumber}?text=${msg}`;
}

export function whatsappLinkWith(message: string): string {
  return `https://wa.me/${invitationData.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
