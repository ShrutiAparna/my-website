import type { Metadata } from 'next'
import { FadeIn } from '@/components/FadeIn'
import { projects } from '@/data/projects'

export const metadata: Metadata = { title: 'Projects' }

export default function ProjectsPage() {
  return (
    <div className="page-container">
      <FadeIn>
        <p className="section-label">Projects</p>
        <h1 className="section-title">Projects & Internships</h1>
      </FadeIn>

      <div>
        {projects.map((item, i) => (
          <FadeIn key={item.id} delay={Math.min(i * 0.06, 0.3)}>
            <article className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-12">
              <div>
                <p className="font-sans text-sm text-stone-400 dark:text-stone-600">{item.period}</p>
                {item.highlight && (
                  <p className="font-sans text-xs text-stone-500 dark:text-stone-500 mt-3 uppercase tracking-wide">
                    {item.highlight}
                  </p>
                )}
              </div>
              <div>
                <h2 className="font-serif text-3xl text-stone-900 dark:text-stone-100 mb-1">
                  {item.title}
                </h2>
                <p className="font-sans text-sm text-stone-400 dark:text-stone-600 mb-4">{item.subtitle}</p>
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
                    {item.links.github && (
                      <a href={item.links.github} target="_blank" rel="noopener noreferrer" className="link-subtle">
                        GitHub ↗
                      </a>
                    )}
                    {item.links.paper && (
                      <a href={item.links.paper} target="_blank" rel="noopener noreferrer" className="link-subtle">
                        Paper ↗
                      </a>
                    )}
                    {item.links.demo && (
                      <a href={item.links.demo} target="_blank" rel="noopener noreferrer" className="link-subtle">
                        Demo ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
            {i < projects.length - 1 && <div className="hr-divider" />}
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
