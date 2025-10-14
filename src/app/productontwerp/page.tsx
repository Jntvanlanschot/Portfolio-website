import { Metadata } from 'next'
import { Palette, Users, Lightbulb, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Productontwerp - Websites & Tools',
  description: 'User-centered productontwerp dat jouw gebruikers raakt. Van wireframes tot prototypes en usability testing.',
}

export default function ProductontwerpPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-[#6c63ff]">Productontwerp</span> dat raakt
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              User-centered design dat jouw gebruikers centraal stelt. Van concept tot prototype, wij creëren producten die mensen écht willen gebruiken.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">User Research</h3>
              <p className="text-gray-600">Diepgaand onderzoek naar jouw gebruikers en hun behoeften</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Palette className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-gray-600">Intuïtieve interfaces die gebruikers begrijpen en waarderen</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Lightbulb className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Prototyping</h3>
              <p className="text-gray-600">Interactieve prototypes om concepten te testen en valideren</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Target className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Usability Testing</h3>
              <p className="text-gray-600">Testen met echte gebruikers voor optimale gebruikservaring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze Design Aanpak
            </h2>
            <p className="text-xl text-gray-600">
              Een bewezen proces dat leidt tot succesvolle producten
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6c63ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Discover</h3>
              <p className="text-gray-600 text-sm">Onderzoek en analyse van gebruikers en markt</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6c63ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Define</h3>
              <p className="text-gray-600 text-sm">Probleemstelling en doelstellingen bepalen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6c63ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Ideate</h3>
              <p className="text-gray-600 text-sm">Brainstormen en concepten ontwikkelen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6c63ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Prototype</h3>
              <p className="text-gray-600 text-sm">Interactieve prototypes maken en testen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6c63ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Test</h3>
              <p className="text-gray-600 text-sm">Valideren met gebruikers en itereren</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
