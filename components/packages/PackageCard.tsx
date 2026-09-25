import Image from "next/image";
import { ArrowUpRight, Clock3, Star } from "lucide-react";
import type { HolidayPackage } from "@/lib/types";

export function PackageCard({ item }: { item: HolidayPackage }) {
  return <article className="group overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
    <div className="relative aspect-[4/3] overflow-hidden">
      <Image src={item.imageUrl} alt={item.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-brand-primary">{item.category}</span>
      <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-ink"><Star size={14} className="fill-brand-accent text-brand-accent" /> {item.rating} <span className="font-normal text-ink-muted">({item.reviews})</span></span>
    </div>
    <div className="p-5 sm:p-6">
      <p className="text-xs font-medium uppercase tracking-wider text-brand-secondary">{item.country}</p>
      <h3 className="mt-1 font-heading text-xl font-semibold text-brand-primary">{item.destination}</h3>
      <p className="mt-2 text-sm text-ink-muted">{item.title}</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-ink-muted"><Clock3 size={16} /> {item.duration}</div>
      <ul aria-label="Trip highlights" className="mt-4 flex flex-wrap gap-2">{item.highlights.map(highlight => <li key={highlight} className="rounded-full bg-brand-light px-2.5 py-1 text-[11px] font-medium text-brand-primary">{highlight}</li>)}</ul>
      <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4">
        <p className="text-xs text-ink-muted">From <span className="text-xl font-semibold text-ink">${item.price.toLocaleString()}</span><span> / person</span></p>
        <a href="#contact" aria-label={`Enquire about ${item.destination}`} className="grid size-10 place-items-center rounded-full bg-brand-light text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"><ArrowUpRight size={18} /></a>
      </div>
    </div>
  </article>;
}
