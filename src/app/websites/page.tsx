import { Metadata } from 'next'
import { Globe, ShoppingCart, Smartphone, Search } from 'lucide-react'
import Ribbon from '@/components/Ribbon'
import Roadmap from '@/components/Roadmap'

export const metadata: Metadata = {
  title: 'Websites - Websites & Tools',
  description: 'Professionele websites en webshops die jouw bedrijf online laten groeien. Van responsive design tot SEO-optimalisatie.',
}

export default function WebsitesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professionele <span className="text-[#6c63ff]">Websites</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Van responsive websites tot geavanceerde webshops. Wij creëren digitale ervaringen die jouw klanten raken en jouw bedrijf laten groeien.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Ribbon ribbonColor="#3b82f6" direction="top-right">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Globe className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Responsive Websites</h3>
                <p className="text-gray-600">Moderne websites die perfect werken op alle apparaten</p>
              </div>
            </Ribbon>
            
            <Ribbon ribbonColor="#10b981" direction="top-right">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <ShoppingCart className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Webshops</h3>
                <p className="text-gray-600">Complete e-commerce oplossingen voor online verkopen</p>
              </div>
            </Ribbon>
            
            <Ribbon ribbonColor="#8b5cf6" direction="top-right">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Smartphone className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Mobile-First</h3>
                <p className="text-gray-600">Geoptimaliseerd voor mobiele gebruikers</p>
              </div>
            </Ribbon>
            
            <Ribbon ribbonColor="#f59e0b" direction="top-right">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Search className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">SEO Geoptimaliseerd</h3>
                <p className="text-gray-600">Gevonden worden in Google met onze SEO-expertise</p>
              </div>
            </Ribbon>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <Roadmap />

     
    </div>
  )
}
