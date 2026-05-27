import { createFileRoute } from "@tanstack/react-router";
import { faqs } from "@/lib/cms";

export const Route = createFileRoute("/api/cms/faqs")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(
          { data: faqs },
          { headers: { "cache-control": "public, max-age=60" } },
        ),
    },
  },
});