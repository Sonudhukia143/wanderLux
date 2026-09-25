import Image from "next/image";
import { ArrowUpRight, Compass, HeartHandshake, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [{ icon: Compass, title: "Made around you", text: "No off-the-shelf itineraries. Every detail starts with what you love." }, { icon: HeartHandshake, title: "People make a place", text: "Our local hosts open doors you'd never find on your own." }, { icon: Sparkles, title: "Room for the unexpected", text: "A thoughtful plan, with enough space for the best detours." }];

export function AboutSection() {
  return <section id="about" className="bg-surface py-20 md:py-28 lg:py-32"><div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
    <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl"><Image src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1100&q=85" alt="Pastel houses across a hillside village in Cinque Terre" fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" /></div>
      <div className="absolute -bottom-5 -right-3 rounded-2xl bg-white p-5 shadow-card sm:-right-7 sm:p-6"><p className="font-heading text-3xl font-semibold text-brand-primary">15<span className="text-brand-accent">+</span></p><p className="mt-1 text-xs text-ink-muted">years of finding<br/>the extraordinary</p></div>
      <div className="absolute -left-4 top-8 -rotate-6 rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-semibold text-brand-primary shadow-card sm:-left-6"><span className="mr-2 text-brand-accent">✦</span>Travel well. Feel more.</div>
    </div>
    <div><SectionHeading eyebrow="A different kind of travel" title="The best trips feel like they were made just for you." description="WanderLux began with a simple belief: travel should feel less like ticking boxes and more like finding your place in the world. We pair deep local knowledge with the little details that make a journey yours." />
      <div className="mt-9 space-y-5">{values.map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-light text-brand-secondary"><Icon size={19} /></span><div><h3 className="font-heading text-lg font-semibold text-brand-primary">{title}</h3><p className="mt-1 text-sm leading-6 text-ink-muted">{text}</p></div></div>)}</div>
      <a href="#why-us" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary underline decoration-brand-accent decoration-2 underline-offset-4">A little more about us <ArrowUpRight size={16}/></a>
    </div>
  </div></section>;
}
