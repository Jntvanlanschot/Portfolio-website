import { Metadata } from 'next'
import { ExternalLink, Star, Users, TrendingUp } from 'lucide-react'
import CasesGrid from '@/components/CasesGrid'

export const metadata: Metadata = {
  title: 'Voorbeelden - Websites & Tools',
  description: 'Bekijk onze portfolio met succesvolle projecten. Van websites en webshops tot AI-tools en productontwerp.',
}

export default function VoorbeeldenPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Onze <span className="text-[#6c63ff]">Voorbeelden</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ontdek hoe wij bedrijven hebben geholpen om online te groeien. Van startups tot gevestigde ondernemingen.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <CasesGrid />

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze Impact
            </h2>
            <p className="text-xl text-gray-600">
              De resultaten spreken voor zich
            </p>
          </div>
          
          <div className="flex justify-center gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#6c63ff] mb-2">5+</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Projecten</div>
              <div className="text-gray-600">Succesvol afgerond</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#6c63ff] mb-2">24/7</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Support</div>
              <div className="text-gray-600">Voor al onze klanten</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
