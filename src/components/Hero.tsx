'use client'
import { motion } from 'framer-motion'
import { CONTENT } from '@/lib/content'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
}

function AppleLogo() {
  return (
    <svg width="22" height="26" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.9 0 663.9 0 541.8c0-193.9 126.4-296.6 250.9-296.6 66.1 0 121.2 43.4 162.6 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  )
}

function PlayLogo() {
  return (
    <svg width="22" height="24" viewBox="0 0 512 512" fill="currentColor">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l2.7 1.6 247.5-247.5v-5.8L47 0zm425.5 251L371.4 315l-28.6-28.6 28.6-28.6 101.1-64.6c29.2 16.8 29.2 43.5.6 58.8l-.6-.6zm-381.7 192l100.5-100.5 28.6 28.6L120.8 471C96 486.2 73.3 474.4 90.8 443z" />
    </svg>
  )
}


const phonePills = [
  [{ text: '● Live now', color: 'bg-mint text-black' }, { text: '₱100 entry', color: 'bg-card text-white border border-border' }],
  [{ text: "I'm going",  color: 'bg-sky text-black'  }, { text: 'In 7 days',  color: 'bg-card text-white border border-border' }],
  [{ text: 'Hot Chase',  color: 'bg-yellow text-black'}, { text: 'Pre-event',  color: 'bg-violet text-white' }],
]

export default function Hero() {
  const lines = CONTENT.hero.headline.split('\n')

  return (
    <section id="features" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Yellow diagonal blob */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06] pointer-events-none"
        style={{ background: 'var(--yellow)', borderRadius: '40%', transform: 'translateY(-50%) rotate(-25deg) translateX(120px)' }}
      />

      <div className="max-w-7xl mx-auto px-5 py-20 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/20 text-yellow text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
              🇵🇭 Philippines&#39; Collector App
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className="font-anton text-[clamp(52px,10vw,96px)] leading-[0.95] text-white">
            {lines.map((line, i) => (
              <span key={i} className={`block ${i === 1 ? 'text-yellow' : ''}`}>{line}</span>
            ))}
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={fadeUp} className="font-mono-space text-muted text-base md:text-lg">
            {CONTENT.hero.tagline}
          </motion.p>

          {/* Body */}
          <motion.p variants={fadeUp} className="text-muted text-base leading-relaxed max-w-md">
            {CONTENT.hero.sub}
          </motion.p>

          {/* Close Alpha badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/30 text-yellow text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
              🔒 Now in Close Alpha Testing
            </span>
          </motion.div>

          {/* Store badges — Coming Soon */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <div className="relative flex items-center gap-3 bg-black border border-border rounded-2xl px-5 py-3 opacity-50 cursor-not-allowed select-none">
              <AppleLogo />
              <div>
                <div className="text-[10px] text-muted leading-none mb-1">Coming soon to</div>
                <div className="text-white font-bold text-base leading-none">App Store</div>
              </div>
              <span className="absolute -top-2 -right-2 bg-yellow text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">Soon</span>
            </div>
            <div className="relative flex items-center gap-3 bg-black border border-border rounded-2xl px-5 py-3 opacity-50 cursor-not-allowed select-none">
              <PlayLogo />
              <div>
                <div className="text-[10px] text-muted leading-none mb-1">Coming soon to</div>
                <div className="text-white font-bold text-base leading-none">Google Play</div>
              </div>
              <span className="absolute -top-2 -right-2 bg-yellow text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">Soon</span>
            </div>
          </motion.div>

          {/* Alpha CTA */}
          <motion.div variants={fadeUp}>
            <a
              href={CONTENT.hero.alphaUrl}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow text-black font-bold text-base px-8 py-4 rounded-full press hover:yellow-glow transition-all"
            >
              {CONTENT.hero.ctaPrimary} →
            </a>
          </motion.div>
        </motion.div>

        {/* Right — tilted phone mockups */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative flex justify-center items-center h-[440px] md:h-[520px]"
        >
          {[
            { rotate: '-8deg', x: '-72px', z: 1 },
            { rotate: '0deg',  x: '0px',   z: 2 },
            { rotate: '8deg',  x: '72px',  z: 1 },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-[200px] h-[380px] bg-surface border-2 border-border rounded-[2rem] overflow-hidden flex flex-col p-4 gap-3 shadow-2xl"
              style={{ transform: `rotate(${pos.rotate}) translateX(${pos.x})`, zIndex: pos.z }}
            >
              {/* Mock status bar */}
              <div className="flex justify-between items-center">
                <span className="text-muted text-[10px]">9:41</span>
                <div className="flex gap-1">
                  <div className="w-3 h-1.5 bg-muted/40 rounded-sm" />
                  <div className="w-3 h-1.5 bg-muted/40 rounded-sm" />
                </div>
              </div>
              {/* Mock content */}
              <div className="bg-card rounded-xl p-3 flex flex-col gap-2">
                <div className="h-2 w-3/4 bg-muted/20 rounded" />
                <div className="h-2 w-1/2 bg-muted/10 rounded" />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {phonePills[i].map((pill) => (
                  <span key={pill.text} className={`text-[9px] font-bold px-2 py-1 rounded-full ${pill.color}`}>
                    {pill.text}
                  </span>
                ))}
              </div>
              <div className="flex-1 bg-card rounded-xl" />
              {/* Yellow FAB */}
              <div className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center self-end shadow-lg">
                <span className="text-black font-anton text-lg leading-none">+</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
