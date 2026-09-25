import Image from "next/image";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import type { LucideIcon } from "lucide-react";

export function ContactSection() {
  return <section id="contact" className="bg-surface py-20 md:py-28 lg:py-32"><div className="container-site">
    <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16"><div><SectionHeading eyebrow="Start somewhere" title="Tell us what you’re dreaming about." description="A faraway place, a long weekend, a feeling you want to find. We’d love to hear it."/>
      <div className="mt-8 space-y-5">{([[Mail, "Email", "hello@wanderlux.travel"], [Phone, "Call us", "+1 (800) 555-0198"], [MapPin, "Come say hello", "24 Mercer Street, New York, NY"], [Clock3, "Our hours", "Mon–Fri, 9am–6pm EST"]] as [LucideIcon, string, string][]).map(([Icon, title, line]) => <div key={title} className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-full bg-brand-light text-brand-secondary"><Icon size={18}/></span><div><p className="text-xs text-ink-muted">{title}</p><p className="mt-0.5 text-sm font-medium text-ink">{line}</p></div></div>)}</div>
      <div className="relative mt-9 hidden aspect-[16/9] overflow-hidden rounded-2xl md:block"><Image src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900&q=80" alt="Warm evening light over a quiet coastline" fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover"/></div>
    </div><ContactForm/></div>
  </div></section>;
}
