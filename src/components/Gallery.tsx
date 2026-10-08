'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const shots = [
  '/screenshots/1.jpg',
  '/screenshots/2.jpg',
  '/screenshots/3.jpg',
  '/screenshots/4.png',
  '/screenshots/5.png',
  '/screenshots/6.png',
  '/screenshots/7.png',
  '/screenshots/8.png',
  '/screenshots/9.png',
]

// Duplicate for seamless loop
const loop = [...shots, ...shots]

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 border-b border-border">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-muted text-xs font-bold uppercase tracking-widest mb-3">📱 App Screenshots</div>
          <h2 className="font-anton text-[clamp(36px,6vw,64px)] text-white leading-tight">
            SEE IT IN <span className="text-yellow">ACTION.</span>
          </h2>
          <p className="text-muted mt-3 max-w-md">Real screens from the Buzaar app. Click any to enlarge.</p>
        </motion.div>
      </div>

      {/* Full-bleed infinite scroll strip */}
      <div className="overflow-hidden w-full select-none">
        <div className="flex gap-5 animate-gallery-scroll w-max">
          {loop.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(shots[i % shots.length])}
              className="flex-shrink-0 w-[160px] md:w-[190px] rounded-[1.75rem] overflow-hidden border border-border shadow-xl cursor-pointer focus:outline-none hover:border-yellow/40 transition-colors"
              style={{ aspectRatio: '9/19.5' }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Buzaar screenshot ${(i % shots.length) + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="190px"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ height: '88vh', aspectRatio: '9/19.5' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected}
                alt="Screenshot"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </motion.div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-white hover:bg-surface transition-colors"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
