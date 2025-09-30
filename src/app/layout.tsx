import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Websites & Tools - Digitale groei voor bedrijven',
  description: 'Van websites en webshops tot AI-receptionisten, leadgeneratie en productontwerp. Wij combineren techniek, design en marketing om jouw bedrijf online te laten groeien.',
  keywords: 'websites, webshops, AI-tools, leadgeneratie, productontwerp, digitale marketing, webontwikkeling',
  authors: [{ name: 'Websites & Tools' }],
  openGraph: {
    title: 'Websites & Tools - Digitale groei voor bedrijven',
    description: 'Van websites en webshops tot AI-receptionisten, leadgeneratie en productontwerp.',
    type: 'website',
    locale: 'nl_NL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websites & Tools - Digitale groei voor bedrijven',
    description: 'Van websites en webshops tot AI-receptionisten, leadgeneratie en productontwerp.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
