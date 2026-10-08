'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { CONTENT } from '@/lib/content'

export default function Pricing() {
  const lines = CONTENT.pricing.headline.split('\n')

  return (
    <section id="pricing" className="py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="text-muted text-xs font-bold uppercase tracking-widest mb-3">💳 Plans & Pricing</div>
          <h2 className="font-anton text-[clamp(36px,6vw,64px)] text-white leading-tight">
            {lines.map((line, i) => (
              <span key={i} className={`block ${i === 0 ? 'text-yellow' : 'text-white'}`}>{line}</span>
            ))}
          </h2>
          <p className="text-muted mt-3 text-sm">{CONTENT.pricing.sub}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {CONTENT.pricing.tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden border flex flex-col ${
                tier.popular
                  ? 'border-yellow shadow-[0_0_32px_rgba(255,242,46,0.15)]'
                  : 'border-border'
              } bg-card`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-4 right-4 bg-yellow text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest z-10">
                  Popular
                </div>
              )}

              {/* Image header */}
              {tier.image ? (
                <div className="h-44 overflow-hidden relative">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ) : (
                <div className="h-44 relative overflow-hidden">
                  <Image src="/logo/app-icon.png" alt="Free" fill className="object-cover object-center" />
                </div>
              )}

              {/* Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <div className="font-anton text-white text-2xl leading-none mb-1">{tier.name}</div>
                  <div className="flex items-baseline gap-1">
                    <span className={`font-anton text-4xl leading-none ${tier.popular ? 'text-yellow' : 'text-white'}`}>
                      {tier.price}
                    </span>
                    <span className="text-muted text-sm">{tier.period}</span>
                  </div>
                  <p className="text-muted text-xs mt-2">{tier.desc}</p>
                </div>

                <div className="h-px bg-border" />

                <ul className="flex flex-col gap-3 flex-1">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-white/80">
                      <div className="w-4 h-4 rounded-full bg-yellow/20 border border-yellow/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={10} className="text-yellow" strokeWidth={3} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={CONTENT.hero.alphaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 w-full text-center font-bold text-sm py-3.5 rounded-2xl transition-all press ${
                    tier.popular
                      ? 'bg-yellow text-black hover:yellow-glow'
                      : 'bg-surface border border-border text-white hover:border-yellow/40'
                  }`}
                >
                  {tier.price === '₱0' ? 'Get started free' : `Get ${tier.name}`}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center text-muted text-xs mt-8">
          Prices in Philippine Peso (₱). Subscriptions billed monthly. Cancel anytime through the App Store or Google Play.
        </p>
      </div>
    </section>
  )
}
