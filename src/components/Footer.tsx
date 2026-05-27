import { Mail, MapPin, Facebook, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold">Centro de Negocios Santiago</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Una iniciativa de SERCOTEC para impulsar el crecimiento de las MIPYMES de Santiago.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Contacto</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Manuel Rodríguez Sur 749, Santiago (Metro Toesca)
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a className="hover:text-foreground" href="mailto:centro.santiago@centrossercotec.cl">
                centro.santiago@centrossercotec.cl
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Enlaces</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-foreground"
                href="https://sitios.sercotec.cl/centros-de-negocios/centro-de-desarrollo-de-negocios-santiago/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-4 w-4" aria-hidden="true" /> Sitio SERCOTEC
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-foreground"
                href="https://www.facebook.com/centrodnsantiago"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Centro de Negocios Santiago — SERCOTEC. Todos los derechos reservados.
      </div>
    </footer>
  );
}