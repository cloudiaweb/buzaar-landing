'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LightningIntro() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Dark backdrop — fades to reveal page */}
          <motion.div
            className="absolute inset-0 bg-[#111111]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
          />

          {/* Teal flash bloom */}
          <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,184,176,0.35) 0%, transparent 65%)' }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.4, 1.8] }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          />

          {/* Yellow outer bloom */}
          <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, rgba(255,242,46,0.12) 0%, transparent 60%)' }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.4, 1.6, 2.2] }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          />

          {/* Lightning bolt — center stage */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.3, 1.1, 1.0, 1.3], rotate: [-10, 0, 0, 5] }}
            transition={{ duration: 1.1, delay: 0.1, times: [0, 0.25, 0.65, 1], ease: 'easeOut' }}
          >
            <svg width="120" height="160" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ filter: 'drop-shadow(0 0 24px rgba(0,184,176,0.9)) drop-shadow(0 0 48px rgba(0,184,176,0.5))' }}
            >
              <polygon
                points="36,2 14,44 28,44 24,78 46,36 32,36"
                fill="#00B8B0"
              />
            </svg>
          </motion.div>

          {/* Diagonal light sweep — left to right */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(108deg, transparent 30%, rgba(0,184,176,0.25) 45%, rgba(255,242,46,0.15) 50%, rgba(0,184,176,0.25) 55%, transparent 70%)',
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '150%' }}
            transition={{ duration: 0.55, delay: 0.18, ease: 'easeIn' }}
          />

          {/* Second faster sweep */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(108deg, transparent 38%, rgba(255,255,255,0.08) 50%, transparent 62%)',
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '150%' }}
            transition={{ duration: 0.4, delay: 0.38, ease: 'easeIn' }}
          />

          {/* Screen-edge glow lines — top */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #00B8B0, transparent)' }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          {/* Bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #00B8B0, transparent)' }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 1] }}
            transition={{ duration: 0.5, delay: 0.25 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
