/**
 * CMS endpoint: GET /api/cms/services
 * Devuelve la colección de servicios para administrar contenido vía Postman.
 */
import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/cms";

export const Route = createFileRoute("/api/cms/services")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(
          { data: services },
          { headers: { "cache-control": "public, max-age=60" } },
        ),
    },
  },
});