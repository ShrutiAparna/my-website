'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { profile } from '@/data/profile'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/achievements', label: 'Achievements' },
  { href: `${base}${profile.cv}`, label: 'CV', external: true },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isHome = pathname === '/'
  const solid = scrolled || !isHome

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid
            ? 'bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200/60 dark:border-stone-800/60'
            : 'bg-transparent border-b border-transparent'
        } ${solid ? 'text-stone-600 dark:text-stone-400' : 'text-white/75'}`}
      >
        <nav className="max-w-content mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <Link
            href="/"
            className={`font-serif text-lg tracking-wide transition-colors duration-300 ${
              solid ? 'text-stone-900 dark:text-stone-100' : 'text-white'
            }`}
          >
            {profile.name}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans tracking-wide hover:text-current transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-sans tracking-wide transition-colors duration-200 ${
                    pathname === link.href
                      ? solid
                        ? 'text-stone-900 dark:text-stone-100'
                        : 'text-white'
                      : 'hover:text-current'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-stone-50/98 dark:bg-stone-950/98 backdrop-blur-md flex flex-col justify-center items-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-7" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-3xl text-stone-800 dark:text-stone-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="font-serif text-3xl text-stone-800 dark:text-stone-200">
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
