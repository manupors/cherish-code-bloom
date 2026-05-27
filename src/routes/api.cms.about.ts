import { createFileRoute } from "@tanstack/react-router";
import { about } from "@/lib/cms";

export const Route = createFileRoute("/api/cms/about")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(
          { data: about },
          { headers: { "cache-control": "public, max-age=60" } },
        ),
    },
  },
});