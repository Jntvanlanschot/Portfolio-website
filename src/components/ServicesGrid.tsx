'use client'

import { motion } from 'framer-motion'
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onze Diensten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bieden complete digitale oplossingen die je bedrijf helpen groeien
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const iconType = iconMap[service.slug as keyof typeof iconMap]
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/diensten/${service.slug}`}>
                  <div className="bg-white rounded-xl p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden border border-gray-100">
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-6">
                        <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-all duration-300 relative">
                          <ServiceIcon 
                            type={iconType} 
                            className="group-hover:scale-110 transition-transform duration-300" 
                          />
                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-xl bg-blue-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                      
                      <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                        <span>Meer informatie</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/contact" className="btn-glow">
            Plan een kennismaking
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid
