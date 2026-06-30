import { profile } from '@/data/profile'

export function Footer() {
  const links = [
    { label: 'Email', href: `mailto:${profile.email}` },
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'Google Scholar', href: profile.scholar },
    { label: 'X', href: profile.twitter },
  ].filter((l) => l.href)

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-content mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-serif text-stone-500 dark:text-stone-500 text-sm">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <nav aria-label="Social links" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-sm font-sans text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
