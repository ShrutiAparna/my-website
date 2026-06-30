import type { Metadata } from 'next'
import { FadeIn } from '@/components/FadeIn'
import { publications } from '@/data/publications'

export const metadata: Metadata = { title: 'Publications' }

export default function PublicationsPage() {
  return (
    <div className="page-container">
      <FadeIn>
        <p className="section-label">Publications</p>
        <h1 className="section-title">Publications</h1>
      </FadeIn>

      <div>
        {publications.map((pub, i) => (
          <FadeIn key={pub.id} delay={Math.min(i * 0.06, 0.3)}>
            <article className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-8 py-10">
              <p className="font-sans text-sm text-stone-400 dark:text-stone-600">
                {pub.month ? `${pub.month} ` : ''}
                {pub.year}
              </p>
              <div>
                <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-2 leading-snug">
                  {pub.title}
                </h2>
                <p className="font-sans text-sm text-stone-500 dark:text-stone-500 italic mb-2">
                  {pub.authors.join(', ')}
                </p>
                {pub.status && (
                  <p className="font-sans text-xs text-stone-400 dark:text-stone-600 mb-4">{pub.status}</p>
                )}
                <div className="flex gap-5">
                  {pub.links?.paper && (
                    <a href={pub.links.paper} target="_blank" rel="noopener noreferrer" className="link-subtle">
                      Paper ↗
                    </a>
                  )}
                  {pub.links?.arxiv && (
                    <a href={pub.links.arxiv} target="_blank" rel="noopener noreferrer" className="link-subtle">
                      arXiv ↗
                    </a>
                  )}
                  {pub.links?.code && (
                    <a href={pub.links.code} target="_blank" rel="noopener noreferrer" className="link-subtle">
                      Code ↗
                    </a>
                  )}
                  {pub.links?.poster && (
                    <a href={pub.links.poster} target="_blank" rel="noopener noreferrer" className="link-subtle">
                      Poster ↗
                    </a>
                  )}
                  {pub.links?.slides && (
                    <a href={pub.links.slides} target="_blank" rel="noopener noreferrer" className="link-subtle">
                      Slides ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
            {i < publications.length - 1 && <div className="hr-divider" />}
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
