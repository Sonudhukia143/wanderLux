"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  interest: z.enum(["Beach", "Adventure", "Cultural", "Safari", "City"], { message: "Please choose an interest" }),
  message: z.string().min(20, "Tell us a little more (at least 20 characters)").max(500, "Please keep your message under 500 characters"),
});
type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", phone: "", interest: undefined, message: "" } });
  const submit = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSent(true); reset();
  };
  const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/15";
  if (sent) return <div role="status" className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-card"><CheckCircle2 className="text-green-600" size={54}/><h3 className="mt-5 font-heading text-2xl font-semibold text-brand-primary">Your next chapter starts here.</h3><p className="mt-3 max-w-sm text-sm leading-6 text-ink-muted">Thanks for getting in touch. A travel specialist will be in touch shortly to start planning.</p><button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-brand-secondary underline underline-offset-4">Send another message</button></div>;
  return <form onSubmit={handleSubmit(submit)} noValidate className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2">
      <div><label htmlFor="name" className="text-sm font-medium text-ink">Full name</label><input id="name" autoComplete="name" placeholder="Your name" {...register("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={fieldClass}/>{errors.name && <p id="name-error" role="alert" className="mt-1.5 flex items-center gap-1 text-sm text-red-600"><AlertCircle size={14}/>{errors.name.message}</p>}</div>
      <div><label htmlFor="email" className="text-sm font-medium text-ink">Email address</label><input id="email" type="email" autoComplete="email" placeholder="you@example.com" {...register("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={fieldClass}/>{errors.email && <p id="email-error" role="alert" className="mt-1.5 flex items-center gap-1 text-sm text-red-600"><AlertCircle size={14}/>{errors.email.message}</p>}</div>
      <div><label htmlFor="phone" className="text-sm font-medium text-ink">Phone <span className="text-ink-muted">(optional)</span></label><input id="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" {...register("phone")} className={fieldClass}/></div>
      <div><label htmlFor="interest" className="text-sm font-medium text-ink">I’m dreaming of</label><select id="interest" {...register("interest")} aria-invalid={!!errors.interest} aria-describedby={errors.interest ? "interest-error" : undefined} className={`${fieldClass} text-ink-muted`}><option value="">Choose your travel style</option>{["Beach", "Adventure", "Cultural", "Safari", "City"].map(option => <option key={option} value={option}>{option}</option>)}</select>{errors.interest && <p id="interest-error" role="alert" className="mt-1.5 flex items-center gap-1 text-sm text-red-600"><AlertCircle size={14}/>{errors.interest.message}</p>}</div>
      <div className="sm:col-span-2"><label htmlFor="message" className="text-sm font-medium text-ink">A little about your trip</label><textarea id="message" rows={4} placeholder="Places on your mind, dates, the way you love to travel..." {...register("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} className={`${fieldClass} resize-y py-3`}/>{errors.message && <p id="message-error" role="alert" className="mt-1.5 flex items-center gap-1 text-sm text-red-600"><AlertCircle size={14}/>{errors.message.message}</p>}</div>
    </div>
    <button disabled={isSubmitting} type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-3 font-semibold text-brand-primary transition hover:brightness-105 active:scale-[.99] disabled:cursor-wait disabled:opacity-70 sm:w-auto">{isSubmitting ? <><LoaderCircle size={18} className="animate-spin"/> Sending your note…</> : <>Send us a note <Send size={16}/></>}</button>
    <p className="mt-4 text-xs text-ink-muted">No pressure, no mailing lists. Just a real person ready to help.</p>
  </form>;
}
