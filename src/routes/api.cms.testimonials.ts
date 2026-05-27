import { createFileRoute } from "@tanstack/react-router";
import { testimonials } from "@/lib/cms";

export const Route = createFileRoute("/api/cms/testimonials")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(
          { data: testimonials },
          { headers: { "cache-control": "public, max-age=60" } },
        ),
    },
  },
});