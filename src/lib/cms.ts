/**
 * CMS / API layer.
 *
 * Datos servidos a la landing page. Pueden ser administrados por el equipo
 * de contenido vía Postman u otro cliente HTTP consumiendo las rutas
 * `/api/cms/*` (ver `src/routes/api.cms.*.ts`).
 */

export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  business: string;
  quote: string;
  rating: number;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type AboutBlock = {
  title: string;
  paragraphs: string[];
  stats: { label: string; value: string }[];
};

import asesoria from "@/assets/asesoria.jpg";
import capacitacion from "@/assets/capacitacion.jpg";
import marketing from "@/assets/marketing.jpg";
import networking from "@/assets/networking.jpg";

export const services: Service[] = [
  {
    id: "1",
    slug: "asesoria-empresarial",
    title: "Asesoría Empresarial",
    description:
      "Acompañamiento preventivo y correctivo para prolongar la vida útil de tu negocio y aumentar su productividad.",
    image: asesoria,
    features: ["Diagnóstico inicial", "Plan de mejora", "Seguimiento continuo"],
  },
  {
    id: "2",
    slug: "capacitacion-y-talleres",
    title: "Capacitación y Talleres",
    description:
      "Talleres especializados en administración, finanzas e innovación para fortalecer tus capacidades.",
    image: capacitacion,
    features: ["Talleres grupales", "Contenidos prácticos", "Certificación SERCOTEC"],
  },
  {
    id: "3",
    slug: "marketing-digital",
    title: "Marketing Digital",
    description:
      "Estrategias y herramientas digitales para impulsar el crecimiento y visibilidad online de tu empresa.",
    image: marketing,
    features: ["Estrategia digital", "Redes sociales", "Analítica web"],
  },
  {
    id: "4",
    slug: "vinculacion-y-networking",
    title: "Vinculación y Networking",
    description:
      "Espacios de networking y articulación con instituciones públicas, privadas y programas de financiamiento.",
    image: networking,
    features: ["Ruedas de negocio", "Acceso a financiamiento", "Comunidad MIPYME"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "María Fernández",
    role: "Fundadora",
    business: "Panadería La Esquina",
    quote:
      "Gracias al acompañamiento del Centro pude formalizar mi negocio y aumentar mis ventas en un 40% durante el primer año.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Cristián Soto",
    role: "Gerente",
    business: "TecnoServicios SpA",
    quote:
      "Las asesorías en marketing digital transformaron nuestra forma de llegar a clientes. Hoy tenemos presencia online sólida.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Patricia Rojas",
    role: "Dueña",
    business: "Estudio Creativo Patty",
    quote:
      "El networking con otras MIPYMES me abrió puertas que jamás imaginé. Una experiencia totalmente recomendable.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Jorge Méndez",
    role: "Cofundador",
    business: "EcoLimpieza Ltda.",
    quote:
      "Postulamos a financiamiento con apoyo del Centro y lo conseguimos. Profesionales de excelencia.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Ana Belén Pizarro",
    role: "Fundadora",
    business: "Café Bahía",
    quote:
      "Los talleres son prácticos, claros y aplicables desde el primer día. Mi equipo aprendió mucho.",
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    id: "f1",
    question: "¿Quiénes pueden acceder a los servicios del Centro?",
    answer:
      "Micro, pequeñas y medianas empresas formalizadas o en proceso de formalización en la Región Metropolitana, con foco en la comuna de Santiago.",
  },
  {
    id: "f2",
    question: "¿Los servicios tienen costo?",
    answer:
      "La mayoría de nuestros servicios de orientación, talleres y asesorías son gratuitos gracias al apoyo de SERCOTEC.",
  },
  {
    id: "f3",
    question: "¿Cómo agendo una asesoría?",
    answer:
      "Completando el formulario de contacto de este sitio o escribiéndonos directamente a centro.santiago@centrossercotec.cl.",
  },
  {
    id: "f4",
    question: "¿Dónde están ubicados?",
    answer:
      "Manuel Rodríguez Sur 749, Santiago (Metro Toesca). Atendemos de lunes a viernes.",
  },
  {
    id: "f5",
    question: "¿Realizan capacitaciones online?",
    answer:
      "Sí, contamos con modalidades presencial, online y mixta según el programa y la disponibilidad.",
  },
];

export const about: AboutBlock = {
  title: "Sobre Nosotros",
  paragraphs: [
    "El Centro de Negocios Santiago de SERCOTEC es una institución dedicada a ofrecer servicios integrales de apoyo y acompañamiento a las micro, pequeñas y medianas empresas, con un enfoque especializado en gestión, innovación y fortalecimiento de capacidades.",
    "Nuestro objetivo es garantizar el correcto funcionamiento, sostenibilidad y eficiencia de los negocios de nuestros clientes, ofreciendo acompañamiento preventivo y correctivo, capacitaciones, asesorías técnicas y vinculación con redes de apoyo.",
  ],
  stats: [
    { label: "MIPYMES atendidas", value: "+1.500" },
    { label: "Talleres al año", value: "+120" },
    { label: "Asesorías mensuales", value: "+300" },
    { label: "Años de experiencia", value: "10+" },
  ],
};