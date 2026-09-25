"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Compass, Menu, X } from "lucide-react";

const links = [{ label: "Our story", href: "#about" },{ label: "Why WanderLux", href: "#why-us" }, { label: "Journeys", href: "#packages" }, ];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 80);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const solid = scrolled || open;
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? "bg-white/95 text-ink shadow-navbar backdrop-blur-md" : "bg-transparent text-white"}`}>
    <nav aria-label="Main navigation" className="container-site flex h-[76px] items-center justify-between">
      <Link href="#home" className="flex items-center gap-2 font-heading text-xl font-bold" aria-label="WanderLux home"><Compass className="text-brand-accent" size={25} /> <span className={solid ? "text-brand-primary" : "text-white"}>WanderLux</span></Link>
      <div className="hidden items-center gap-8 md:flex">{links.map(link => <a key={link.href} href={link.href} className={`border-b-2 border-transparent py-2 text-sm font-medium transition-colors hover:border-brand-accent ${solid ? "text-ink hover:text-brand-primary" : "text-white"}`}>{link.label}</a>)}<a href="#contact" className="rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-primary transition hover:brightness-105 active:scale-95">Plan your trip</a></div>
      <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className={`grid size-11 place-items-center rounded-full md:hidden ${solid ? "text-brand-primary" : "text-white"}`}><span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>{open ? <X /> : <Menu />}</button>
    </nav>
    <div inert={!open} className={`absolute left-0 right-0 top-full overflow-hidden bg-white text-ink shadow-xl transition-all duration-300 md:hidden ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`} aria-hidden={!open}>
      <div className="container-site flex flex-col gap-1 pb-5">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium hover:bg-brand-light">{link.label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-brand-accent px-5 py-3 text-center font-semibold text-brand-primary">Plan your trip</a></div>
    </div>
  </header>;
}
