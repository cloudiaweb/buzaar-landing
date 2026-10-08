'use client'
import { motion } from 'framer-motion'
import { CONTENT } from '@/lib/content'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface border-y border-border py-20">
      <div className="max-w-7xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="text-muted text-xs font-bold uppercase tracking-widest mb-3">📖 How it works</div>
          <h2 className="font-anton text-[clamp(36px,6vw,64px)] text-white leading-tight">
            THREE STEPS.<br /><span className="text-yellow">THAT&#39;S IT.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">

          {/* Connecting arrows desktop */}
          <div className="hidden md:block absolute top-12 left-1/3 w-1/3 border-t-2 border-dashed border-border z-0" />
          <div className="hidden md:block absolute top-12 left-2/3 w-1/3 border-t-2 border-dashed border-border z-0" />

          {CONTENT.howItWorks.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative z-10 flex flex-col gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-yellow flex items-center justify-center shadow-lg yellow-glow">
                <span className="font-anton text-black text-2xl">{step.step}</span>
              </div>
              <h3 className="font-anton text-white text-2xl leading-tight">{step.title.toUpperCase()}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
