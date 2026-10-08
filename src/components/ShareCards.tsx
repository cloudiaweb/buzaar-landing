'use client'
import { motion } from 'framer-motion'
import { QrCode, MapPin, User, Zap } from 'lucide-react'
import { CONTENT } from '@/lib/content'

const cardIcons = [MapPin, User, Zap]
const cardColors = ['bg-sky/20', 'bg-violet/20', 'bg-yellow/20']
const cardAccents = ['text-sky', 'text-violet', 'text-yellow']

export default function ShareCards() {
  return (
    <section id="share" className="py-20 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="text-muted text-xs font-bold uppercase tracking-widest mb-3">📤 Share the hunt</div>
          <h2 className="font-anton text-[clamp(36px,6vw,64px)] text-white leading-tight">
            SHARE THE <span className="text-yellow">HUNT.</span>
          </h2>
          <p className="text-muted mt-3 max-w-md">Every event, profile, and chase has a shareable card with a QR code that deep-links straight to the app.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {CONTENT.shareCards.map((card, i) => {
            const Icon = cardIcons[i]
            return (
              <motion.div
                key={card.type}
                initial={{ opacity: 0, y: 40, rotate: (i - 1) * 6 }}
                whileInView={{ opacity: 1, y: 0, rotate: (i - 1) * 5 }}
                whileHover={{ y: -10, rotate: 0, scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-[220px] bg-card border border-border rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              >
                {/* Top section */}
                <div className={`p-5 ${cardColors[i]} flex flex-col gap-3 h-40`}>
                  <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center">
                    <Icon size={16} className={cardAccents[i]} />
                  </div>
                  <div className="text-white font-bold text-sm">{card.label}</div>
                  <div className="flex gap-1.5">
                    <div className="h-1.5 w-16 bg-white/20 rounded-full" />
                    <div className="h-1.5 w-10 bg-white/10 rounded-full" />
                  </div>
                </div>
                {/* Yellow bottom bar */}
                <div className="bg-yellow px-4 py-3 flex items-center justify-between">
                  <span className="font-anton text-black text-lg">buzaar</span>
                  <div className="w-8 h-8 bg-black/10 rounded flex items-center justify-center">
                    <QrCode size={16} className="text-black/60" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
