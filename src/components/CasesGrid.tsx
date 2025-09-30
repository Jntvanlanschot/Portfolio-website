'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { cases } from '@/data/cases'

const CasesGrid = () => {
  const featuredCases = cases.filter(caseItem => caseItem.featured)

  return (
    <section id="cases" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onze Cases
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bekijk hoe we andere bedrijven hebben geholpen met hun digitale groei
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/cases/${caseItem.slug}`}>
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                  {/* Placeholder for image */}
                  <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-primary-600 font-medium">Case Preview</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                        {caseItem.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {caseItem.client}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">
                      {caseItem.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {caseItem.description}
                    </p>
                    
                    <div className="flex items-center text-primary-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>Bekijk case</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/contact" className="btn-secondary">
            Wil je ook zoiets? Neem contact op
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CasesGrid
