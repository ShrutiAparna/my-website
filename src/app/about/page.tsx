import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn } from '@/components/FadeIn'
import { profile, education, affiliations, skills } from '@/data/profile'

export const metadata: Metadata = { title: 'About' }

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function AboutPage() {
  return (
    <div className="page-container">
      <FadeIn>
        <p className="section-label">About</p>
        <h1 className="section-title">Biography</h1>
      </FadeIn>

      <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
        <FadeIn direction="right">
          {/* Replace public/images/profile.jpg with your own photo — see README. */}
          <div className="relative w-full aspect-[4/5] bg-stone-200 dark:bg-stone-900 overflow-hidden">
            <Image
              src={`${base}${profile.photo}`}
              alt={profile.name}
              fill
              className="object-cover"
              sizes="280px"
              unoptimized
            />
          </div>
        </FadeIn>

        <div className="space-y-16">
          <FadeIn>
            <div className="space-y-5">
              {profile.bio.map((para, i) => (
                <p key={i} className="font-sans text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="section-label">Education</p>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-6">
                  <p className="font-sans text-sm text-stone-400 dark:text-stone-600">{edu.period}</p>
                  <div>
                    <p className="font-serif text-xl text-stone-900 dark:text-stone-100">
                      {edu.institution}
                    </p>
                    <p className="font-sans text-stone-600 dark:text-stone-400 mt-1">{edu.degree}</p>
                    <p className="font-sans text-sm text-stone-500 dark:text-stone-500 mt-1">{edu.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="section-label">Current Affiliations</p>
            <div className="space-y-4">
              {affiliations.map((aff) => (
                <div key={aff.name} className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-6">
                  <p className="font-sans text-sm text-stone-400 dark:text-stone-600">{aff.period}</p>
                  <div>
                    <p className="font-serif text-lg text-stone-900 dark:text-stone-100">{aff.name}</p>
                    <p className="font-sans text-sm text-stone-500 dark:text-stone-500">{aff.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="section-label">Technical Skills</p>
            <div className="space-y-3">
              <p className="font-sans text-stone-600 dark:text-stone-400">
                <span className="text-stone-400 dark:text-stone-600">Languages — </span>
                {skills.languages.join(' · ')}
              </p>
              <p className="font-sans text-stone-600 dark:text-stone-400">
                <span className="text-stone-400 dark:text-stone-600">AI / ML — </span>
                {skills.ml.join(' · ')}
              </p>
              <p className="font-sans text-stone-600 dark:text-stone-400">
                <span className="text-stone-400 dark:text-stone-600">Tools — </span>
                {skills.tools.join(' · ')}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
