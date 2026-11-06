import type { Metadata } from 'next'
import { Anton, Space_Mono, Inter } from 'next/font/google'
import './globals.css'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Buzaar — Hunt Smarter, Collect Better',
  description: 'Find collector events in the Philippines, post what you\'re hunting, and get offers from verified sellers. Free on iOS & Android.',
  openGraph: {
    title: 'Buzaar — Hunt Smarter, Collect Better',
    description: 'The collector marketplace for Philippine toy fairs and conventions.',
    images: [{ url: '/logo/icon-white.png' }],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/logo/icon-dark.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
