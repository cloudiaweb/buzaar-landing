import { CONTENT } from '@/lib/content'

export default function CategoryMarquee() {
  const items = CONTENT.marquee
  const row1 = [...items, ...items]
  const row2 = [...items, ...items].reverse()

  return (
    <section className="bg-surface border-y border-border py-4 overflow-hidden select-none">
      {/* Row 1 — left */}
      <div className="flex animate-marquee-left whitespace-nowrap mb-2">
        {row1.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-muted text-xs font-bold uppercase tracking-widest px-4">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow inline-block" />
            {item}
          </span>
        ))}
      </div>
      {/* Row 2 — right */}
      <div className="flex animate-marquee-right whitespace-nowrap">
        {row2.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-muted/60 text-xs font-medium uppercase tracking-widest px-4">
            <span className="w-1.5 h-1.5 rounded-full bg-border inline-block" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
