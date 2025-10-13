'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import ServiceIcon from './ServiceIcon'

const iconMap = {
  'websites-webshops': 'website',
  'ai-tools-automatisering': 'chatbot',
  'leadgeneratie-marketing': 'leadgen',
  'productontwerp-prototyping': 'design',
} as const

const ServicesGrid = () => {
  return (
    <section id="diensten" className="py-12 md:py-16 bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left side - Title and content */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Complete website<br />
                <span className="text-gray-300">oplossingen</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Van websites en webshops tot AI-receptionisten, leadgeneratie en productontwerp. 
                Wij combineren techniek, design en marketing om jouw bedrijf online te laten groeien 
                met moderne, snel ladende oplossingen die converteren en je concurrentievoordeel geven.
              </p>
              
              <p className="text-base text-gray-400 leading-relaxed">
                Wil jij een professionele website? Of nog meer van onze diensten? Neem contact op!
              </p>

              <div className="flex justify-center pt-4">
                <Link 
                  href="/contact" 
                  className="glare-button inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Project starten</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                </Link>
              </div>
            </div>

            {/* Right side - Pictogram */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/website-pictogram.svg"
                alt="Website pictogram"
                width={200}
                height={155}
                className="w-auto h-48 md:h-56 lg:h-64"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid
