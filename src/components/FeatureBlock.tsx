'use client'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Zap, Search, Star, User, Tag } from 'lucide-react'
import type { Feature } from '@/lib/content'

const icons: Record<string, React.ReactNode> = {
  events:   <Calendar size={18} className="text-yellow" />,
  board:    <Search   size={18} className="text-sky"    />,
  offers:   <Zap      size={18} className="text-yellow" />,
  prices:   <Tag      size={18} className="text-mint"   />,
  verified: <Star     size={18} className="text-yellow" />,
}

const pillColors = [
  'bg-yellow text-black',
  'bg-sky text-black',
  'bg-mint text-black',
  'bg-violet text-white',
  'bg-card text-white border border-border',
]

function MockScreen({ feature }: { feature: Feature }) {
  return (
    <div className="bg-card border border-border rounded-3xl p-6 w-full max-w-sm mx-auto shadow-2xl">
      {/* Header row */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-yellow flex items-center justify-center">
          {icons[feature.id] ?? <Zap size={16} className="text-black" />}
        </div>
        <div>
          <div className="text-white text-sm font-bold leading-none">{feature.label.replace(/^[^\s]+\s/, '')}</div>
          <div className="text-muted text-xs">Buzaar</div>
        </div>
      </div>

      {/* Pills */}
      {feature.pills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {feature.pills.map((pill, i) => (
            <span key={pill} className={`text-xs font-bold px-3 py-1.5 rounded-full ${pillColors[i % pillColors.length]}`}>
              {pill}
            </span>
          ))}
        </div>
      )}

      {/* Stat */}
      {feature.stat.num && (
        <div className="bg-bg rounded-2xl p-4 mb-4">
          <div className="font-anton text-yellow text-4xl leading-none">{feature.stat.num}</div>
          <div className="text-muted text-xs mt-1">{feature.stat.label}</div>
        </div>
      )}

      {/* Items list */}
      {feature.items && (
        <div className="flex flex-col gap-2">
          {feature.items.map((item) => (
            <div key={item.name} className="flex items-center justify-between bg-bg rounded-xl px-3 py-2.5">
              <div>
                <div className="text-white text-xs font-semibold">{item.name}</div>
                <span className="text-[10px] text-muted">{item.tag}</span>
              </div>
              <span className="text-yellow font-bold text-sm">{item.price}</span>
            </div>
          ))}
        </div>
      )}

      {/* Decorative placeholder rows */}
      {!feature.items && !feature.stat.num && (
        <div className="flex flex-col gap-2">
          {[80, 60, 70].map((w, i) => (
            <div key={i} className="h-2 bg-muted/10 rounded-full" style={{ width: `${w}%` }} />
          ))}
        </div>
      )}

      {/* Buz it button */}
      <div className="flex justify-end mt-4">
        <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center shadow-lg yellow-glow">
          <span className="font-anton text-black text-2xl leading-none">+</span>
        </div>
      </div>
    </div>
  )
}

export default function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  const isLeft = feature.side === 'left'

  return (
    <section id={feature.id} className="py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-5">
        <div className={`flex flex-col ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>

          {/* Text */}
          <motion.div
            className="flex-1 flex flex-col gap-5"
            initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-yellow rounded-full" />
              <span className="text-muted text-xs font-bold uppercase tracking-widest">{feature.label}</span>
            </div>

            <h2 className="font-anton text-[clamp(36px,6vw,64px)] leading-[0.95] text-white">
              {feature.headline.split('\n').map((line, i) => (
                <span key={i} className={`block ${i === 0 ? 'text-yellow' : 'text-white'}`}>{line}</span>
              ))}
            </h2>

            <p className="text-muted text-base leading-relaxed max-w-md">{feature.body}</p>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          >
            <MockScreen feature={feature} />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
