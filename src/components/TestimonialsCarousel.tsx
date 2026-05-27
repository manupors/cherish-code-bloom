/**
 * Carrusel de testimonios accesible y responsivo (mobile + desktop).
 * Construido sobre embla-carousel-react vía el componente UI Carousel.
 */
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/lib/cms";

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="mx-auto w-full max-w-6xl"
      aria-roledescription="carrusel"
      aria-label="Testimonios de clientes"
    >
      <CarouselContent>
        {items.map((t) => (
          <CarouselItem
            key={t.id}
            className="md:basis-1/2 lg:basis-1/3"
            aria-roledescription="diapositiva"
            aria-label={`Testimonio de ${t.name}`}
          >
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-4">
                <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
                <p className="text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-auto">
                  <div
                    className="flex gap-0.5"
                    aria-label={`Calificación: ${t.rating} de 5 estrellas`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < t.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-2 font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.business}
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious aria-label="Testimonio anterior" />
      <CarouselNext aria-label="Testimonio siguiente" />
    </Carousel>
  );
}