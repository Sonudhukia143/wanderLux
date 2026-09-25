import { ArrowRight } from "lucide-react";
import { packages } from "@/lib/data/packages";
import { PackageCard } from "@/components/packages/PackageCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PackagesSection() {
  return <section id="packages" className="bg-brand-light/50 py-20 md:py-28 lg:py-32"><div className="container-site">
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionHeading eyebrow="Journeys worth taking" title="A few places to begin." description="A collection of considered journeys. Each one can be made entirely your own."/><a href="#contact" className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-brand-primary">See all journeys <ArrowRight size={17}/></a></div>
    <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{packages.map(item => <PackageCard key={item.id} item={item}/>)}</div>
    <div className="mt-12 rounded-2xl bg-white p-7 text-center shadow-card sm:flex sm:items-center sm:justify-between sm:px-10 sm:text-left"><div><p className="font-heading text-xl font-semibold text-brand-primary">Have somewhere else in mind?</p><p className="mt-1 text-sm text-ink-muted">Tell us the dream. We’ll help with the details.</p></div><a href="#contact" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border-2 border-brand-primary px-6 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white sm:mt-0">Let’s plan it <ArrowRight size={15} className="ml-2"/></a></div>
  </div></section>;
}
