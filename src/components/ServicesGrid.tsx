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
    <section id="diensten" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Title with pictogram on large screens */}
            <div className="space-y-4">
              <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
              <div className="flex items-start gap-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight flex-1">
                  Complete website<br />
                  <span className="text-gray-700">oplossingen</span>
                </h2>
                <Image
                  src="/images/website-pictogram.svg"
                  alt="Website pictogram"
                  width={160}
                  height={124}
                  className="hidden lg:block w-40 h-auto"
                  priority
                />
              </div>
            </div>

            {/* Right side - Story explanation */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Van websites en webshops tot AI-receptionisten, leadgeneratie en productontwerp. 
                Wij combineren techniek, design en marketing om jouw bedrijf online te laten groeien 
                met moderne, snel ladende oplossingen die converteren en je concurrentievoordeel geven.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Wil jij een professionele website? Of nog meer van onze diensten? Neem contact op!
              </p>

              <div className="flex justify-center pt-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Project starten
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid
