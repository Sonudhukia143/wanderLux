import { Compass, Heart, Map, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  { icon: Map, number: "01", title: "Local, in every sense", text: "We work with people who call these places home. Their point of view changes everything." },
  { icon: Heart, number: "02", title: "Yours from the start", text: "Tell us what makes you curious. We’ll shape a journey around the things you care about." },
  { icon: ShieldCheck, number: "03", title: "Here when you need us", text: "A real travel specialist is on hand, from your first idea to the journey home." },
  { icon: Compass, number: "04", title: "Travel with a lighter touch", text: "We choose thoughtful stays and experiences that give something back to their communities." },
];

export function FeaturesSection() {
  return <section id="why-us" className="bg-brand-primary py-20 md:py-28 lg:py-32"><div className="container-site">
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="Why WanderLux" title="It’s the little things that make the whole trip." description="Considered from the first conversation to the last sunset." light/><p className="max-w-xs pb-1 text-sm leading-6 text-white/55">A good itinerary gets you there. A great one makes you feel like you belong.</p></div>
    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, number, title, text }) => <article key={number} className="border-t border-white/20 pt-6"><div className="flex items-center justify-between"><Icon className="text-brand-accent" size={24}/><span className="font-heading text-3xl text-white/20">{number}</span></div><h3 className="mt-8 font-heading text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{text}</p></article>)}</div>
  </div></section>;
}
