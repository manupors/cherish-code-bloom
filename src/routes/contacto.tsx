import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Toaster } from "@/components/ui/sonner";

const searchSchema = z.object({
  servicio: z.string().optional(),
});

export const Route = createFileRoute("/contacto")({
  validateSearch: searchSchema,
  component: ContactoPage,
});

function ContactoPage() {
  const { servicio } = Route.useSearch();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <section className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-[2fr_1fr] md:py-16">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">Contáctanos</h1>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Cuéntanos sobre tu negocio y te responderemos en menos de 48 horas hábiles.
            </p>
            <div className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
              <ContactForm defaultServicio={servicio} />
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-2xl border bg-card p-6">
              <h2 className="text-lg font-semibold">Información</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  Manuel Rodríguez Sur 749, Santiago (Metro Toesca)
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  <a className="hover:underline" href="mailto:centro.santiago@centrossercotec.cl">
                    centro.santiago@centrossercotec.cl
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  Lunes a viernes · 9:00 a 18:00 hrs
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border">
              <iframe
                title="Mapa Centro de Negocios Santiago"
                src="https://www.google.com/maps?q=Manuel+Rodriguez+Sur+749,+Santiago&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                className="block border-0"
              />
            </div>
          </aside>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}