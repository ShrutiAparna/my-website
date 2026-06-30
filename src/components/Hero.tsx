'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ScrollArrow } from './ScrollArrow'
import { profile } from '@/data/profile'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div ref={ref} className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Background — light/dark images crossfade on theme change, with a subtle parallax on scroll */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <div className="absolute inset-0 transition-opacity duration-700 dark:opacity-0">
          <Image
            src={`${base}/images/hero-light.jpg`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 dark:opacity-100">
          <Image
            src={`${base}/images/hero-dark.jpg`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/55 dark:bg-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-content mx-auto px-6 lg:px-12 w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/55 font-sans text-xs sm:text-sm tracking-[0.3em] uppercase mb-6"
          >
            {profile.institution}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif font-light text-white leading-[0.95] tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl mt-8"
          >
            <p className="text-white/75 font-sans text-base sm:text-lg md:text-xl tracking-wide">
              {profile.tagline}
            </p>
            <p className="text-white/55 font-sans text-sm md:text-base mt-3">
              {profile.degree}, {profile.institution.replace('Indian Institute of Technology, ', 'IIT ')}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
              {profile.researchAreas.slice(0, 3).map((area) => (
                <span key={area} className="text-white/45 font-sans text-xs tracking-[0.2em] uppercase">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <ScrollArrow />
    </div>
  )
}
