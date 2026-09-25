type Props = { eyebrow: string; title: string; description?: string; light?: boolean };

export function SectionHeading({ eyebrow, title, description, light = false }: Props) {
  return <div className={`max-w-2xl ${light ? "text-white" : "text-ink"}`}>
    <p className={`mb-3 text-xs font-semibold uppercase tracking-[.2em] ${light ? "text-brand-accent" : "text-brand-secondary"}`}>{eyebrow}</p>
    <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
    {description && <p className={`mt-5 text-base leading-7 sm:text-lg ${light ? "text-white/70" : "text-ink-muted"}`}>{description}</p>}
  </div>;
}
