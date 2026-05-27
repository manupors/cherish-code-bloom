import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "Preguntas Frecuentes" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav
        aria-label="Navegación principal"
        className="container mx-auto flex h-16 items-center justify-between px-4"
      >
        <Link to="/" className="flex items-center gap-2 font-bold" aria-label="Inicio Centro de Negocios Santiago">
          <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="text-sm leading-tight sm:text-base">
            Centro de Negocios <span className="text-primary">Santiago</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button asChild size="sm">
              <Link to="/contacto">Contáctanos</Link>
            </Button>
          </li>
        </ul>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-nav" className="border-t bg-background px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <Button asChild className="w-full">
              <Link to="/contacto" onClick={() => setOpen(false)}>Contáctanos</Link>
            </Button>
          </li>
        </ul>
      )}
    </header>
  );
}