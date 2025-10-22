"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const serviceOptions = [
  "construction",
  "procurement",
  "transportation",
  "import-export",
] as const;

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(7, "Enter a valid phone")
    .regex(/^[0-9+\-()\s]*$/, "Only numbers and + - ( ) allowed"),
  service: z.enum(serviceOptions),
  message: z.string().min(10, "Please provide more details (min 10 chars)").max(2000),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-1">
        <label className="text-sm font-medium">Name</label>
        <input
          type="text"
          {...register("name")}
          aria-invalid={!!errors.name}
          className="rounded-md border border-[var(--color-muted)] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
          placeholder="Your full name"
        />
        {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div className="grid gap-1 sm:grid-cols-2 sm:gap-3">
        <div className="grid gap-1">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            aria-invalid={!!errors.email}
            className="rounded-md border border-[var(--color-muted)] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            placeholder="name@example.com"
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium">Phone</label>
          <input
            type="tel"
            {...register("phone")}
            aria-invalid={!!errors.phone}
            className="rounded-md border border-[var(--color-muted)] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            placeholder="0544746949"
          />
          {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-medium">Service Interest</label>
        <select
          {...register("service")}
          aria-invalid={!!errors.service}
          className="rounded-md border border-[var(--color-muted)] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="construction">Construction</option>
          <option value="procurement">Procurement</option>
          <option value="transportation">Transportation</option>
          <option value="import-export">Import/Export</option>
        </select>
        {errors.service && <p className="text-xs text-red-600">{errors.service.message}</p>}
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-medium">Message</label>
        <textarea
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
          className="rounded-md border border-[var(--color-muted)] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
          placeholder="Tell us about your project"
        />
        {errors.message && <p className="text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--color-secondary)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Submit"}
      </button>

      {status === "success" && (
        <div role="status" className="text-sm text-green-700">
          Thanks! Your message has been sent.
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="text-sm text-red-700">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
