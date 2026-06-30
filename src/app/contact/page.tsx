import type { Metadata } from 'next'
import { FadeIn } from '@/components/FadeIn'
import { profile } from '@/data/profile'

export const metadata: Metadata = { title: 'Contact' }

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'GitHub', value: profile.github, href: profile.github },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedin },
  { label: 'Google Scholar', value: profile.scholar, href: profile.scholar },
  { label: 'X', value: profile.twitter, href: profile.twitter },
].filter((l) => l.href)

export default function ContactPage() {
  return (
    <div className="page-container">
      <FadeIn>
        <p className="section-label">Get in Touch</p>
        <h1 className="section-title">Contact</h1>
        <p className="font-sans text-stone-500 dark:text-stone-400 max-w-xl text-lg leading-relaxed mb-16">
          I'm always happy to talk about research, collaboration, or opportunities in
          computational imaging, AI, and quantum technologies.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="max-w-md divide-y divide-stone-200 dark:divide-stone-800">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="flex items-center justify-between py-5 group"
            >
              <span className="font-sans text-sm tracking-wide uppercase text-stone-400 dark:text-stone-500">
                {link.label}
              </span>
              <span className="font-serif text-lg text-stone-800 dark:text-stone-200 group-hover:text-stone-500 dark:group-hover:text-stone-400 transition-colors duration-200">
                {link.value.replace('mailto:', '')} →
              </span>
            </a>
          ))}
        </div>
      </FadeIn>
    </div>
  )
}
