import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero.jpg";
import type { AboutBlock, FaqItem, Service, Testimonial } from "@/lib/cms";

export const Route = createFileRoute("/")({
  component: Index,
});

async function fetchJson<T>(url: string): Promise<T> {
  const r = await fetch(url);
  if (!r.ok) throw new Error("Error de red");
  const j = (await r.json()) as { data: T };
  return j.data;
}

function Index() {
  const aboutQ = useQuery({ queryKey: ["about"], queryFn: () => fetchJson<AboutBlock>("/api/cms/about") });
  const svcQ = useQuery({ queryKey: ["services"], queryFn: () => fetchJson<Service[]>("/api/cms/services") });
  const testQ = useQuery({ queryKey: ["testimonials"], queryFn: () => fetchJson<Testimonial[]>("/api/cms/testimonials") });
  const faqQ = useQuery({ queryKey: ["faqs"], queryFn: () => fetchJson<FaqItem[]>("/api/cms/faqs") });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                SERCOTEC · Santiago
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Hacemos crecer tu <span className="text-primary">negocio</span>.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Acompañamos a micro, pequeñas y medianas empresas con asesoría,
                capacitación, marketing digital y networking para garantizar su
                sostenibilidad y crecimiento.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contacto">
                    Agenda tu asesoría <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#servicios">Ver servicios</a>
                </Button>
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {["Asesorías gratuitas", "Equipo experto MIPYME", "Talleres prácticos", "Red de financiamiento"].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="Equipo de emprendedores trabajando en un coworking en Santiago"
                width={1600}
                height={1024}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                {aboutQ.data?.title ?? "Sobre Nosotros"}
              </h2>
              {aboutQ.data?.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
              {(aboutQ.data?.stats ?? []).map((s) => (
                <div key={s.label} className="rounded-xl border bg-card p-6 text-center">
                  <dt className="text-sm text-muted-foreground">{s.label}</dt>
                  <dd className="mt-1 text-3xl font-bold text-primary">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Nuestros Servicios</h2>
              <p className="mt-3 text-muted-foreground">
                Soluciones integrales en gestión, innovación y sostenibilidad para tu empresa.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {svcQ.data?.map((s) => (
                <ServiceCard
                  key={s.id}
                  image={s.image}
                  title={s.title}
                  description={s.description}
                  slug={s.slug}
                  features={s.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Lo que dicen nuestros clientes</h2>
              <p className="mt-3 text-muted-foreground">
                Historias reales de MIPYMES que confiaron en el Centro.
              </p>
            </div>
            <div className="mt-10">
              {testQ.data && <TestimonialsCarousel items={testQ.data} />}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Preguntas Frecuentes</h2>
              <p className="mt-3 text-muted-foreground">
                Resolvemos las dudas más comunes sobre nuestros servicios.
              </p>
            </div>
            <Accordion type="single" collapsible className="mt-8 w-full">
              {faqQ.data?.map((f) => (
                <AccordionItem key={f.id} value={f.id}>
                  <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">¿Listo para impulsar tu negocio?</h2>
            <p className="mx-auto mt-3 max-w-xl opacity-90">
              Conversemos. Nuestro equipo está listo para acompañarte.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-6">
              <Link to="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
