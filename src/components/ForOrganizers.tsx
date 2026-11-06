'use client'
import { motion } from 'framer-motion'
import { Check, BarChart2, Users, MessageSquare } from 'lucide-react'
import { CONTENT } from '@/lib/content'

export default function ForOrganizers() {
  return (
    <section id="for-organizers" className="py-20 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-6"
          >
            <div className="text-muted text-xs font-bold uppercase tracking-widest">🎪 For Organizers</div>
            <h2 className="font-anton text-[clamp(36px,5vw,60px)] text-white leading-tight">
              {CONTENT.organizers.headline.split('\n').map((l, i) => (
                <span key={i} className={`block ${i === 0 ? 'text-yellow' : ''}`}>{l}</span>
              ))}
            </h2>
            <p className="text-muted text-base">{CONTENT.organizers.sub}</p>
            <ul className="flex flex-col gap-3">
              {CONTENT.organizers.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-white text-sm">
                  <div className="w-5 h-5 rounded-full bg-yellow flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-black" strokeWidth={3} />
                  </div>
                  {perk}
                </li>
              ))}
            </ul>
            <div>
              <a
                href={CONTENT.organizers.ctaUrl}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow text-black font-bold text-sm px-7 py-3.5 rounded-full press hover:yellow-glow transition-all"
              >
                {CONTENT.organizers.cta} →
              </a>
            </div>
          </motion.div>

          {/* Right — dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-6 flex flex-col gap-5"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mint" />
              <span className="text-white text-sm font-bold">Organizer Dashboard</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <BarChart2 size={16} className="text-yellow" />, num: '1,241', label: 'Attending' },
                { icon: <Users size={16} className="text-sky" />,        num: '38',    label: 'Merchants' },
                { icon: <MessageSquare size={16} className="text-mint" />, num: '12', label: 'Messages' },
              ].map((s) => (
                <div key={s.label} className="bg-bg rounded-2xl p-3 flex flex-col gap-2">
                  {s.icon}
                  <div className="font-anton text-white text-2xl leading-none">{s.num}</div>
                  <div className="text-muted text-[10px]">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-bg rounded-2xl p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-white text-xs font-semibold">Next event</span>
                <span className="text-[10px] bg-yellow text-black font-bold px-2 py-0.5 rounded-full">HOT 🔥</span>
              </div>
              <div className="h-2 w-3/4 bg-muted/20 rounded-full" />
              <div className="h-2 w-1/2 bg-muted/10 rounded-full" />
            </div>

            <div className="flex gap-2">
              <span className="text-[11px] bg-surface border border-border text-muted px-3 py-1.5 rounded-full">Sponsored</span>
              <span className="text-[11px] bg-yellow/10 border border-yellow/30 text-yellow px-3 py-1.5 rounded-full">HOT Placement</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
