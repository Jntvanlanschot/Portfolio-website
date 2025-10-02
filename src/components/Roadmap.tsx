'use client'

import { motion } from 'framer-motion'

const Roadmap = () => {
  const steps = [
    {
      title: "1. Build the Foundation",
      description: "Website of webshop, modern en snel, SEO geoptimaliseerd",
      bgColor: "bg-blue-500"
    },
    {
      title: "2. Grow Your Reach", 
      description: "SEO, marketing funnels en lead generation",
      bgColor: "bg-blue-600"
    },
    {
      title: "3. Automate Customer Contact",
      description: "AI receptionist, chatbots en scheduling", 
      bgColor: "bg-blue-700"
    },
    {
      title: "4. Expand with Smart Tools",
      description: "AI marketing, content creation en workflow automation",
      bgColor: "bg-blue-500"
    },
    {
      title: "5. Scale with Data",
      description: "Analytics, insights en continue groei",
      bgColor: "bg-blue-600"
    }
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-slate-900">
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Onze Roadmap:{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Van Website tot AI-Aangedreven Groei
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
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
                <div className={`w-20 h-20 mx-auto mb-6 ${step.bgColor} rounded-full flex items-center justify-center text-white relative group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {index === 0 && (
                      <>
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9,22 9,12 15,12 15,22"></polyline>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <path d="M12 19l1-1c0-.5-.6-1-1.5-1-.9 0-2 .5-2 2"></path>
                        <path d="M17.5 2.5a2.5 2.5 0 0 1 2.5 2.5v14a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19V5a2.5 2.5 0 0 1 2.5-2.5z"></path>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <polygon points="13,2 3,14 12,16"></polygon>
                        <rect x="13" y="14" width="12" height="8" rx="1"></rect>
                      </>
                    )}
                    {index === 4 && (
                      <>
                        <path d="M18 20V10"></path>
                        <path d="M12 20V4"></path>
                        <path d="M6 20v-6"></path>
                      </>
                    )}
                  </svg>
                  <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-blue-200/20 rounded-xl p-6 group-hover:border-blue-500/40 transition-all duration-300 group-hover:-translate-y-2">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-blue-500 opacity-60"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap