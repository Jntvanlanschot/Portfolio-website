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
                  {/* Case image */}
                  <div className="h-64 relative overflow-hidden">
                    {caseItem.id === 'silty-pleasure' ? (
                      // Silty Pleasure specific image
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                        <div className="text-center relative z-10">
                          <div className="w-20 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 overflow-hidden mb-4 mx-auto">
                            {/* Browser header */}
                            <div className="h-3 bg-gray-100 flex items-center px-2">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              </div>
                            </div>
                            {/* Website content preview */}
                            <div className="p-2 space-y-1">
                              <div className="h-1 bg-gray-800 rounded w-3/4"></div>
                              <div className="h-1 bg-gray-400 rounded w-1/2"></div>
                              <div className="h-1 bg-gray-400 rounded w-2/3"></div>
                              <div className="flex space-x-1 mt-1">
                                <div className="w-2 h-2 bg-gray-300 rounded"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded"></div>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 font-medium text-sm">Silty Pleasure</p>
                        </div>
                        {/* Subtle background elements */}
                        <div className="absolute inset-0">
                          <motion.div
                            className="absolute top-4 right-4 w-6 h-6 bg-gray-300 rounded-full opacity-20"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div
                            className="absolute bottom-4 left-4 w-4 h-4 bg-gray-400 rounded-full opacity-30"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      // Default case preview for other cases
                      <div className="h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center relative">
                        <div className="text-center relative z-10">
                          <div className="w-16 h-16 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <ExternalLink className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-primary-600 font-medium">Case Preview</p>
                        </div>
                        {/* Animated background elements */}
                        <div className="absolute inset-0">
                          <motion.div
                            className="absolute top-4 right-4 w-8 h-8 bg-primary-300 rounded-full opacity-30"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div
                            className="absolute bottom-4 left-4 w-6 h-6 bg-primary-400 rounded-full opacity-40"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.4, 0.7, 0.4],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5
                            }}
                          />
                          <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-primary-200 rounded-full opacity-50"
                            animate={{
                              scaleX: [1, 1.5, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1
                            }}
                          />
                        </div>
                      </div>
                    )}
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
