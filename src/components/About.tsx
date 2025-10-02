'use client'

import { motion } from 'framer-motion'
import { Users, Lightbulb, Target } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Samenwerking',
      description: 'We werken nauw samen met onze klanten om de beste oplossingen te ontwikkelen.'
    },
    {
      icon: Lightbulb,
      title: 'Innovatie',
      description: 'We blijven op de hoogte van de nieuwste technologieën en trends.'
    },
    {
      icon: Target,
      title: 'Resultaat',
      description: 'Ons doel is altijd om meetbare resultaten te behalen voor je bedrijf.'
    }
  ]

  return (
    <section id="over-ons" className="section-padding bg-slate-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Wie wij zijn
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Wij geloven dat techniek, design en marketing samen moeten komen om digitale groei mogelijk te maken. 
              Websites & Tools helpt bedrijven vooruit met slimme oplossingen en duidelijke resultaten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-xl p-8 shadow-sm relative overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-200 rounded-full opacity-30"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Klaar om te groeien?
                </h3>
                <p className="text-gray-600 mb-6">
                  Laten we samen kijken hoe we jouw bedrijf kunnen helpen met digitale groei.
                </p>
                <a href="/contact" className="btn-primary relative group">
                  <span className="relative z-10">Neem contact op</span>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-primary-600 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
