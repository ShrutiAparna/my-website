import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { profile } from '@/data/profile'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shrutiaparna.github.io/my-website'),
  title: {
    default: `${profile.name} — Research Portfolio`,
    template: `%s — ${profile.name}`,
  },
  description: `${profile.name} — ${profile.tagline}. ${profile.degree}, ${profile.institution}.`,
  keywords: [
    'research portfolio',
    'computational imaging',
    'computer vision',
    'quantum technology',
    'machine learning',
    'IIT Delhi',
    profile.name,
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: `${profile.name} — Research Portfolio`,
    description: profile.tagline,
    siteName: profile.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — Research Portfolio`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-stone-900 focus:text-white focus:px-4 focus:py-2 focus:rounded"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
