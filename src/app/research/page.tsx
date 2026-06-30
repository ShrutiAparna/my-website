import type { Metadata } from 'next'
import { FadeIn } from '@/components/FadeIn'
import { research } from '@/data/research'

export const metadata: Metadata = { title: 'Research' }

export default function ResearchPage() {
  return (
    <div className="page-container">
      <FadeIn>
        <p className="section-label">Research</p>
        <h1 className="section-title">
          Research Experience
        </h1>
        <p className="font-sans text-stone-500 dark:text-stone-400 max-w-2xl text-lg leading-relaxed mb-16">
          My research spans computational imaging, quantum communication, and neuroscience —
          connected by a common interest in models that respect the physics of how data is formed.
        </p>
      </FadeIn>

      <div>
        {research.map((item, i) => (
          <FadeIn key={item.id} delay={Math.min(i * 0.06, 0.3)}>
            <article className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 py-12">
              <div>
                <p className="font-sans text-sm text-stone-400 dark:text-stone-600">{item.period}</p>
                <p className="font-sans text-xs text-stone-400 dark:text-stone-600 mt-2 uppercase tracking-wide">
                  {item.institution}
                </p>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-stone-900 dark:text-stone-100 mb-1">
                  {item.title}
                </h2>
                <p className="font-sans text-sm text-stone-400 dark:text-stone-600 mb-1">
                  {item.subtitle}
                </p>
                {item.advisor && (
                  <p className="font-sans text-sm text-stone-500 dark:text-stone-500 italic mb-4">
                    {item.advisor}
                  </p>
                )}
                <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed mb-5">
                  {item.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {item.contributions.map((c) => (
                    <li
                      key={c}
                      className="font-sans text-sm text-stone-600 dark:text-stone-400 flex gap-3"
                    >
                      <span className="text-stone-300 dark:text-stone-700 flex-shrink-0">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="tech-list">{item.tech.join(' · ')}</p>

                {item.links && (
                  <div className="flex gap-5 mt-4">
                    {item.links.paper && (
                      <a href={item.links.paper} target="_blank" rel="noopener noreferrer" className="link-subtle">
                        Paper ↗
                      </a>
                    )}
                    {item.links.code && (
                      <a href={item.links.code} target="_blank" rel="noopener noreferrer" className="link-subtle">
                        Code ↗
                      </a>
                    )}
                    {item.links.poster && (
                      <a href={item.links.poster} target="_blank" rel="noopener noreferrer" className="link-subtle">
                        Poster ↗
                      </a>
                    )}
                    {item.links.slides && (
                      <a href={item.links.slides} target="_blank" rel="noopener noreferrer" className="link-subtle">
                        Slides ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
            {i < research.length - 1 && <div className="hr-divider" />}
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
