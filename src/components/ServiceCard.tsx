/**
 * ServiceCard - Componente reutilizable de tarjeta de servicio.
 *
 * Recibe imagen, título, descripción y un slug del servicio. El botón
 * "Contáctanos" navega a /contacto pre-rellenando el campo "servicio".
 */
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  slug: string;
  features?: string[];
};

export function ServiceCard({ image, title, description, slug, features }: ServiceCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden pt-0 transition-shadow hover:shadow-lg">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={`Imagen ilustrativa del servicio ${title}`}
          width={960}
          height={640}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="flex-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        {features && features.length > 0 && (
          <ul className="mt-4 space-y-1 text-sm">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" aria-label={`Contáctanos por el servicio ${title}`}>
          <Link to="/contacto" search={{ servicio: slug }}>
            Contáctanos <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}