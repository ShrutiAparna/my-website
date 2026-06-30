import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { FadeIn } from '@/components/FadeIn'
import { profile } from '@/data/profile'
import { research } from '@/data/research'
import { publications } from '@/data/publications'

export default function Home() {
  const featured = research.filter((r) => r.featured).slice(0, 3)

  return (
    <>
      <Hero />

      {/* Introduction */}
      <section className="max-w-content mx-auto px-6 lg:px-12 py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <FadeIn>
            <p className="section-label">Introduction</p>
            <div className="space-y-5">
              {profile.bio.map((para, i) => (
                <p key={i} className="font-sans text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-10">
              <div>
                <p className="section-label">Research Areas</p>
                <ul className="space-y-2">
                  {profile.researchAreas.map((area) => (
                    <li
                      key={area}
                      className="font-sans text-stone-700 dark:text-stone-300 flex items-center gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600 flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="section-label">Current Focus</p>
                <p className="font-serif text-xl text-stone-800 dark:text-stone-200">{profile.degree}</p>
                <p className="font-sans text-stone-500 dark:text-stone-500 text-sm mt-1">
                  {profile.institution}
                </p>
                <p className="font-sans text-stone-500 dark:text-stone-500 text-sm">{profile.year}</p>
              </div>

              {profile.quote && (
                <blockquote className="border-l-2 border-stone-300 dark:border-stone-700 pl-5">
                  <p className="font-serif text-lg text-stone-600 dark:text-stone-400 italic leading-relaxed">
                    {profile.quote}
                  </p>
                </blockquote>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="hr-divider max-w-content mx-auto" />

      {/* Featured research */}
      <section className="max-w-content mx-auto px-6 lg:px-12 py-24">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
            <div>
              <p className="section-label">Selected Work</p>
              <h2 className="section-title mb-0">Research</h2>
            </div>
            <Link href="/research" className="link-subtle">
              View all research →
            </Link>
          </div>
        </FadeIn>

        <div>
          {featured.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.1}>
              <article className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10">
                <div>
                  <p className="font-sans text-sm text-stone-400 dark:text-stone-600">{item.period}</p>
                  <p className="font-sans text-xs text-stone-400 dark:text-stone-600 mt-1">
                    {item.institution}
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-3">
                    {item.title}
                  </h3>
                  {item.advisor && (
                    <p className="font-sans text-sm text-stone-500 dark:text-stone-500 mb-3 italic">
                      {item.advisor}
                    </p>
                  )}
                  <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <p className="tech-list">{item.tech.join(' · ')}</p>
                </div>
              </article>
              {i < featured.length - 1 && <div className="hr-divider" />}
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="hr-divider max-w-content mx-auto" />

      {/* Publications preview */}
      <section className="max-w-content mx-auto px-6 lg:px-12 py-24">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
            <div>
              <p className="section-label">Latest</p>
              <h2 className="section-title mb-0">Publications</h2>
            </div>
            <Link href="/publications" className="link-subtle">
              View all publications →
            </Link>
          </div>
        </FadeIn>

        {publications.slice(0, 2).map((pub, i) => (
          <FadeIn key={pub.id} delay={i * 0.1}>
            <article className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-6 py-8">
              <p className="font-sans text-sm text-stone-400 dark:text-stone-600">{pub.year}</p>
              <div>
                <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100 mb-2">{pub.title}</h3>
                <p className="font-sans text-sm text-stone-500 dark:text-stone-500 italic mb-2">
                  {pub.authors.join(', ')}
                </p>
                {pub.status && (
                  <p className="font-sans text-xs text-stone-400 dark:text-stone-600 mb-3">{pub.status}</p>
                )}
                {pub.links?.arxiv && (
                  <a href={pub.links.arxiv} target="_blank" rel="noopener noreferrer" className="link-subtle">
                    arXiv ↗
                  </a>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </section>
    </>
  )
}
