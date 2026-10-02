export const COMPANY = {
  name: "ALTURA",
  fullName: "ALTURA Construcciones",
  phone: "+52 55 1234 5678",
  phoneDisplay: "+52 55 1234 5678",
  whatsapp: "5215512345678",
  email: "contacto@altura-construcciones.com",
  address: "Av. Paseo de la Reforma 350, CDMX, México",
  hours: "Lun — Vie · 9:00 — 19:00",
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 15, suffix: "+", label: "años de experiencia" },
  { value: 120, suffix: "+", label: "proyectos realizados" },
  { value: 35, suffix: "+", label: "especialistas" },
  { value: 98, suffix: "%", label: "satisfacción del cliente" },
];

export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: "construccion",
    index: "01",
    title: "Construcción",
    description: "Desarrollo y ejecución integral de proyectos, desde cimentación hasta entrega final.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "diseno",
    index: "02",
    title: "Diseño y arquitectura",
    description: "Diseño arquitectónico conceptual y ejecutivo con precisión técnica y visión estética.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "remodelacion",
    index: "03",
    title: "Remodelación",
    description: "Transformación y modernización de espacios existentes sin perder su esencia.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "comercial",
    index: "04",
    title: "Obra comercial",
    description: "Construcción de oficinas, locales y espacios corporativos de alto desempeño.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "residencial",
    index: "05",
    title: "Obra residencial",
    description: "Residencias y proyectos habitacionales de alto nivel, diseñados a la medida.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "supervision",
    index: "06",
    title: "Supervisión y gestión",
    description: "Control técnico, administrativo y operativo durante todo el ciclo del proyecto.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",
  },
];

export type Project = {
  id: string;
  name: string;
  category: string;
  location: string;
  year: string;
  surface: string;
  description: string;
  services: string[];
  image: string;
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "torre-meridiano",
    name: "Torre Meridiano",
    category: "Corporativo",
    location: "Ciudad de México",
    year: "2023",
    surface: "18,400 m²",
    description:
      "Torre corporativa de 22 niveles con fachada de doble piel y certificación de eficiencia energética. Un hito vertical diseñado para redefinir el perfil urbano del corredor financiero.",
    services: ["Diseño y arquitectura", "Construcción", "Supervisión y gestión"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1800&auto=format&fit=crop",
    ],
  },
  {
    id: "residencia-alcala",
    name: "Residencia Alcalá",
    category: "Residencial",
    location: "San Miguel de Allende",
    year: "2022",
    surface: "960 m²",
    description:
      "Residencia unifamiliar que combina materiales regionales con lenguaje contemporáneo. Volúmenes abiertos, patios interiores y luz natural como elemento estructurante.",
    services: ["Diseño y arquitectura", "Construcción"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1800&auto=format&fit=crop",
    ],
  },
  {
    id: "centro-vortex",
    name: "Centro Vórtex",
    category: "Comercial",
    location: "Monterrey",
    year: "2021",
    surface: "12,100 m²",
    description:
      "Complejo comercial de uso mixto con plaza pública integrada. Estructura de concreto expuesto y celosías metálicas que controlan la incidencia solar.",
    services: ["Obra comercial", "Supervisión y gestión"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1800&auto=format&fit=crop",
    ],
  },
  {
    id: "oficinas-nave",
    name: "Oficinas Nave 7",
    category: "Corporativo",
    location: "Guadalajara",
    year: "2023",
    surface: "4,300 m²",
    description:
      "Adaptación de una antigua nave industrial en oficinas corporativas. Estructura original preservada, nueva piel térmica y espacios colaborativos de triple altura.",
    services: ["Remodelación", "Diseño y arquitectura"],
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800&auto=format&fit=crop",
    ],
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const PROCESS: ProcessStep[] = [
  {
    index: "01",
    title: "Consulta",
    description: "Escuchamos sus objetivos, restricciones y visión para definir el alcance del proyecto.",
  },
  {
    index: "02",
    title: "Conceptualización",
    description: "Traducimos la visión en una idea rectora: forma, materialidad y experiencia espacial.",
  },
  {
    index: "03",
    title: "Diseño",
    description: "Desarrollo de planos ejecutivos, ingenierías y especificaciones técnicas detalladas.",
  },
  {
    index: "04",
    title: "Planeación",
    description: "Programación de obra, presupuesto definitivo y selección de proveedores estratégicos.",
  },
  {
    index: "05",
    title: "Construcción",
    description: "Ejecución en obra con supervisión permanente, control de calidad y seguridad.",
  },
  {
    index: "06",
    title: "Entrega",
    description: "Pruebas finales, documentación completa y acompañamiento posterior a la entrega.",
  },
];

export type Differentiator = {
  title: string;
  description: string;
};

export const DIFFERENTIATORS: Differentiator[] = [
  { title: "Calidad certificada", description: "Procesos alineados a normas nacionales e internacionales de construcción." },
  { title: "Personal especializado", description: "Equipo técnico con décadas de experiencia combinada en obra." },
  { title: "Supervisión permanente", description: "Control continuo en cada etapa para garantizar precisión y cumplimiento." },
  { title: "Materiales de alta calidad", description: "Selección rigurosa de insumos con respaldo y trazabilidad." },
  { title: "Cumplimiento de tiempos", description: "Planeación detallada que protege cronogramas y entregas." },
  { title: "Seguridad en obra", description: "Protocolos estrictos que priorizan la integridad de las personas." },
  { title: "Tecnología aplicada", description: "Herramientas BIM y digitales para precisión desde el diseño." },
  { title: "Atención personalizada", description: "Un equipo dedicado disponible en cada fase del proyecto." },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Fernanda Ruiz",
    role: "Directora de Operaciones",
    company: "Grupo Halcón",
    quote:
      "El nivel de precisión técnica y la comunicación constante durante la obra superaron nuestras expectativas. Entregaron antes del plazo y con una calidad impecable.",
  },
  {
    name: "Ricardo Montes",
    role: "CEO",
    company: "Montes Capital",
    quote:
      "Buscábamos un socio constructor que entendiera arquitectura de alto nivel, no solo ejecución. Encontramos exactamente eso: visión, rigor y atención al detalle.",
  },
  {
    name: "Daniela Cordero",
    role: "Directora General",
    company: "Cordero Desarrollos",
    quote:
      "La supervisión permanente y la transparencia en cada etapa nos dieron total confianza. Un equipo verdaderamente profesional de principio a fin.",
  },
  {
    name: "Alejandro Vega",
    role: "Socio Fundador",
    company: "Vega & Asociados",
    quote:
      "Resultado: un edificio que refleja exactamente lo que imaginamos, construido con una calidad que se nota en cada detalle.",
  },
];

export const PROJECT_TYPES = [
  "Residencial",
  "Comercial",
  "Corporativo",
  "Remodelación",
  "Industrial",
  "Otro",
];

export const BUDGET_RANGES = [
  "Menos de $1,000,000 MXN",
  "$1,000,000 — $5,000,000 MXN",
  "$5,000,000 — $20,000,000 MXN",
  "Más de $20,000,000 MXN",
];
