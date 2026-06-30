import type { Metadata } from 'next'
import { FadeIn } from '@/components/FadeIn'
import { achievements } from '@/data/achievements'

export const metadata: Metadata = { title: 'Achievements' }

export default function AchievementsPage() {
  return (
    <div className="page-container">
      <FadeIn>
        <p className="section-label">Honors</p>
        <h1 className="section-title">Achievements</h1>
      </FadeIn>

      <ol className="relative border-l border-stone-200 dark:border-stone-800 ml-1">
        {achievements.map((item, i) => (
          <FadeIn key={item.id} delay={Math.min(i * 0.06, 0.3)}>
            <li className="relative pl-10 pb-14 last:pb-0">
              <span className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-stone-400 dark:bg-stone-500 ring-4 ring-stone-50 dark:ring-stone-950" />
              <p className="font-serif text-2xl text-stone-400 dark:text-stone-600 mb-2">{item.year}</p>
              <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100 mb-1">
                {item.title}
              </h2>
              <p className="font-sans text-sm text-stone-500 dark:text-stone-500 mb-3">
                {item.organization}
              </p>
              {item.description && (
                <p className="font-sans text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              )}
            </li>
          </FadeIn>
        ))}
      </ol>
    </div>
  )
}
