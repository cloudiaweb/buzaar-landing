'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTENT } from '@/lib/content'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/logo/icon-white.png" alt="Buzaar" width={36} height={36} className="rounded-xl" />
          <span className="font-anton text-yellow text-2xl tracking-tight">buzaar</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {CONTENT.nav.links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-muted text-sm font-medium hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={CONTENT.hero.alphaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-yellow text-black text-sm font-bold px-5 py-2.5 rounded-full press hover:yellow-glow transition-all"
        >
          {CONTENT.nav.cta}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border bg-surface"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {CONTENT.nav.links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-white text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href={CONTENT.hero.alphaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow text-black font-bold text-sm px-5 py-3 rounded-full text-center mt-2"
                onClick={() => setOpen(false)}
              >
                {CONTENT.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
