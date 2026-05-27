/**
 * POST /api/contact
 * Validación servidor con zod + honeypot anti-bot + rate-limit básico
 * en memoria por IP. En producción debería integrarse con un servicio
 * de email transaccional o un CRM.
 */
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(2).max(80),
  email: z.string().email().max(120),
  telefono: z.string().min(8).max(20).regex(/^[0-9+\-\s()]+$/),
  servicio: z.string().min(1).max(60),
  mensaje: z.string().min(10).max(1000),
  website: z.string().max(0).optional().or(z.literal("")),
});

const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  entry.count += 1;
  return entry.count <= MAX;
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const ip =
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anon";
        if (!rateLimit(ip)) {
          return Response.json(
            { error: "Demasiados intentos. Inténtalo más tarde." },
            { status: 429 },
          );
        }

        let json: unknown;
        try {
          json = await request.json();
        } catch {
          return Response.json({ error: "JSON inválido" }, { status: 400 });
        }

        const parsed = schema.safeParse(json);
        if (!parsed.success) {
          return Response.json(
            { error: "Datos inválidos", issues: parsed.error.flatten() },
            { status: 400 },
          );
        }

        // Honeypot: si tiene contenido es un bot
        if (parsed.data.website && parsed.data.website.length > 0) {
          return Response.json({ error: "Bot detectado" }, { status: 400 });
        }

        // Aquí enviaríamos a un CRM / email transaccional.
        // Por ahora simplemente logueamos en consola del servidor.
        console.log("[contact] nuevo mensaje", parsed.data);

        return Response.json({ ok: true });
      },
    },
  },
});