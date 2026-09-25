import Link from "next/link";
import { Compass, Camera, Users, Send, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return <footer className="bg-brand-primary text-white">
    <div className="container-site grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:py-20">
      <div><Link href="#home" className="flex items-center gap-2 font-heading text-2xl font-bold"><Compass className="text-brand-accent" /> WanderLux</Link><p className="mt-4 max-w-xs text-sm leading-6 text-white/65">The world feels closer when someone who knows it shows you the way.</p><div className="mt-6 flex gap-3">{[[Camera, "Instagram"], [Users, "Facebook"], [Send, "Twitter"]].map(([Icon, label]) => { const SocialIcon = Icon as typeof Camera; return <a key={String(label)} href="#contact" aria-label={String(label)} className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><SocialIcon size={17} /></a>; })}</div></div>
      <div><h2 className="font-heading text-lg font-semibold">Explore</h2><ul className="mt-5 space-y-3 text-sm text-white/65"><li><a className="hover:text-white" href="#about">Our story</a></li><li><a className="hover:text-white" href="#packages">Journeys</a></li><li><a className="hover:text-white" href="#why-us">Why WanderLux</a></li><li><a className="hover:text-white" href="#contact">Get in touch</a></li></ul></div>
      <div><h2 className="font-heading text-lg font-semibold">Find your somewhere</h2><ul className="mt-5 space-y-3 text-sm text-white/65"><li>Amalfi Coast</li><li>Kyoto</li><li>Serengeti</li><li>Santorini</li></ul></div>
      <div><h2 className="font-heading text-lg font-semibold">Say hello</h2><ul className="mt-5 space-y-4 text-sm text-white/65"><li className="flex gap-3"><Mail size={17} /> hello@wanderlux.travel</li><li className="flex gap-3"><Phone size={17} /> +1 (800) 555-0198</li><li className="flex gap-3"><MapPin size={17} /> 24 Mercer Street, New York</li></ul></div>
    </div>
    <div className="container-site border-t border-white/10 py-6 text-center text-xs text-white/45">© {new Date().getFullYear()} WanderLux Travel. Made for the journey.</div>
  </footer>;
}
