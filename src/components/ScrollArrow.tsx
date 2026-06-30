'use client'

import { motion } from 'framer-motion'

export function ScrollArrow() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 1 }}
      aria-hidden="true"
    >
      <span className="text-white/50 text-[0.65rem] font-sans tracking-[0.3em] uppercase">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"
      />
    </motion.div>
  )
}
