'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Roadmap = () => {
  const steps = [
    {
      title: "1. Bouw de basis",
      description: "Website of webshop, modern en snel met alles wat jij nodig hebt om te starten",
      bgColor: "bg-blue-500"
    },
    {
      title: "2. Groei je bereik", 
      description: "Wij zorgen voor meer vindbaarheid via SEO en slimme marketing",
      bgColor: "bg-blue-600"
    },
    {
      title: "3. Breid uit met slimme tools",
      description: "We voegen slimme AI tools toe om alles in jouw business te automatiseren. Denk aan AI receptionist, chatbots en afspraken inplannen", 
      bgColor: "bg-blue-700"
    },
    {
      title: "4. Verbeter je marketing en productontwerp ",
      description: "We passen AI Marketing en Productontwerp toe om je business te verbeteren",
      bgColor: "bg-blue-500"
    },
    {
      title: "5. Groei verder met data",
      description: "Inzichten in de data om hogere leadconversies te bereiken",
      bgColor: "bg-blue-600"
    }
  ]

  return (
    <section id="roadmap" className="py-24 md:py-32 relative overflow-hidden bg-slate-900">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-blue-700/5 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Van idee tot<br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              groeiende business
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dit is hoe wij jouw business kunnen helpen groeien. Ook losse diensten zijn mogelijk! 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 max-w-7xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-center">
                <div className={`w-24 h-24 mx-auto mb-8 ${step.bgColor} rounded-full flex items-center justify-center text-white relative group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/25`}>
                  {/* Custom Images for Steps 2, 3, 4 */}
                  {index === 1 && (
                    <Image
                      src="/images/seo-pictogram.png"
                      alt="SEO Pictogram"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  )}
                  {index === 2 && (
                    <Image
                      src="/images/smart-tools-pictogram.png"
                      alt="Smart Tools Pictogram"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  )}
                  {index === 3 && (
                    <Image
                      src="/images/product-design-pictogram.png"
                      alt="Product Design Pictogram"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  )}
                  
                  {/* SVG Icons for Steps 1 and 5 */}
                  {index === 0 && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  )}
                  {index === 4 && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 20V10"></path>
                      <path d="M12 20V4"></path>
                      <path d="M6 20v-6"></path>
                    </svg>
                  )}
                  
                  <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-blue-200/20 rounded-2xl p-8 group-hover:border-blue-500/40 transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <h3 className="text-xl font-bold text-blue-400 mb-4 leading-tight">{step.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-blue-500 opacity-60"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-blue-200/20 rounded-2xl p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Klaar om te starten?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Vertel ons over je project en wij helpen jou nog deze week!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
                >
                  Start je project
                </a>
                <a 
                  href="#cases" 
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Bekijk onze cases
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap