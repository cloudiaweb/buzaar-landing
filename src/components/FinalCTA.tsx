'use client'
import { motion } from 'framer-motion'
import { CONTENT } from '@/lib/content'

function AppleLogo() {
  return (
    <svg width="20" height="24" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.9 0 663.9 0 541.8c0-193.9 126.4-296.6 250.9-296.6 66.1 0 121.2 43.4 162.6 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  )
}
function PlayLogo() {
  return (
    <svg width="20" height="22" viewBox="0 0 512 512" fill="currentColor">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l2.7 1.6 247.5-247.5v-5.8L47 0zm425.5 251L371.4 315l-28.6-28.6 28.6-28.6 101.1-64.6c29.2 16.8 29.2 43.5.6 58.8l-.6-.6zm-381.7 192l100.5-100.5 28.6 28.6L120.8 471C96 486.2 73.3 474.4 90.8 443z" />
    </svg>
  )
}

/* Bullseye SVG decoration */
function Bullseye() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
      {[90,70,50,30,14].map((r, i) => (
        <circle key={i} cx="200" cy="200" r={r} stroke="black" strokeWidth="2" />
      ))}
    </svg>
  )
}

export default function FinalCTA() {
  const lines = CONTENT.finalCta.headline.split('\n')
  return (
    <section className="bg-yellow relative overflow-hidden py-24">
      <Bullseye />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-5 text-center relative z-10"
      >
        <h2 className="font-anton text-[clamp(44px,9vw,96px)] text-black leading-[0.95] mb-6">
          {lines.map((line, i) => <span key={i} className="block">{line}</span>)}
        </h2>
        <p className="text-black/60 text-lg mb-10 font-mono-space">{CONTENT.finalCta.sub}</p>

        <div className="inline-flex items-center gap-2 bg-black/10 border border-black/20 text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-8">
          🔒 Currently in Close Alpha Testing
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="relative flex items-center gap-3 bg-black text-white rounded-2xl px-6 py-3.5 opacity-50 cursor-not-allowed select-none">
            <AppleLogo />
            <div>
              <div className="text-[10px] text-white/60 leading-none mb-1">Coming soon to</div>
              <div className="font-bold text-base leading-none">App Store</div>
            </div>
            <span className="absolute -top-2 -right-2 bg-yellow text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">Soon</span>
          </div>
          <div className="relative flex items-center gap-3 bg-black text-white rounded-2xl px-6 py-3.5 opacity-50 cursor-not-allowed select-none">
            <PlayLogo />
            <div>
              <div className="text-[10px] text-white/60 leading-none mb-1">Coming soon to</div>
              <div className="font-bold text-base leading-none">Google Play</div>
            </div>
            <span className="absolute -top-2 -right-2 bg-yellow text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">Soon</span>
          </div>
        </div>

        <a
          href={CONTENT.finalCta.alphaUrl}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-black text-black font-bold text-sm px-7 py-3 rounded-full press hover:bg-black hover:text-yellow transition-all"
        >
          {CONTENT.finalCta.alphaCta} →
        </a>
      </motion.div>
    </section>
  )
}
