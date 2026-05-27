/**
 * Formulario de contacto con:
 * - Validación cliente con react-hook-form + zod
 * - Validación servidor en /api/contact (zod)
 * - Honeypot anti-bot
 * - Pre-relleno del campo "servicio" vía query params
 */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/cms";

export const contactSchema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre").max(80),
  email: z.string().email("Email inválido").max(120),
  telefono: z
    .string()
    .min(8, "Teléfono inválido")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Solo dígitos y símbolos +-() permitidos"),
  servicio: z.string().min(1, "Selecciona un servicio"),
  mensaje: z.string().min(10, "Cuéntanos un poco más (mín. 10 caracteres)").max(1000),
  website: z.string().max(0, "Bot detectado").optional().or(z.literal("")), // honeypot
});

export type ContactInput = z.infer<typeof contactSchema>;

export function ContactForm({ defaultServicio }: { defaultServicio?: string }) {
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      servicio: defaultServicio ?? "",
      mensaje: "",
      website: "",
    },
  });

  useEffect(() => {
    if (defaultServicio) form.setValue("servicio", defaultServicio);
  }, [defaultServicio, form]);

  async function onSubmit(values: ContactInput) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Error al enviar");
      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      form.reset({ ...form.getValues(), nombre: "", email: "", telefono: "", mensaje: "" });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No pudimos enviar el formulario");
    }
  }

  const errors = form.formState.errors;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Honeypot oculto */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">No completar este campo</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...form.register("website")}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input id="nombre" autoComplete="name" aria-invalid={!!errors.nombre} {...form.register("nombre")} />
          {errors.nombre && <p className="text-xs text-destructive">{errors.nombre.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...form.register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input id="telefono" type="tel" autoComplete="tel" aria-invalid={!!errors.telefono} {...form.register("telefono")} />
          {errors.telefono && <p className="text-xs text-destructive">{errors.telefono.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="servicio">Servicio de interés *</Label>
          <Select
            value={form.watch("servicio")}
            onValueChange={(v) => form.setValue("servicio", v, { shouldValidate: true })}
          >
            <SelectTrigger id="servicio" aria-invalid={!!errors.servicio}>
              <SelectValue placeholder="Selecciona un servicio" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.title}
                </SelectItem>
              ))}
              <SelectItem value="otro">Otro / consulta general</SelectItem>
            </SelectContent>
          </Select>
          {errors.servicio && <p className="text-xs text-destructive">{errors.servicio.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje *</Label>
        <Textarea id="mensaje" rows={5} aria-invalid={!!errors.mensaje} {...form.register("mensaje")} />
        {errors.mensaje && <p className="text-xs text-destructive">{errors.mensaje.message}</p>}
      </div>

      <Button type="submit" disabled={form.formState.isSubmitting} className="w-full md:w-auto">
        {form.formState.isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}