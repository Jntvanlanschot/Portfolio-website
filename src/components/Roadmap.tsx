'use client'

import { motion } from 'framer-motion'

const Roadmap = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full opacity-50 blur-3xl"></div>
        </div>
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
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Van Website tot AI-Aangedreven Groei
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white relative group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 group-hover:border-cyan-500/40 transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">1. Build the Foundation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Website of webshop, modern en snel, SEO geoptimaliseerd</p>
              </div>
            </div>
            
            <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-60"></div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white relative group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9,22 9,12 15,12 15,22"></polyline>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 group-hover:border-purple-500/40 transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">2. Grow Your Reach</h3>
                <p className="text-gray-300 text-sm leading-relaxed">SEO, marketing funnels en lead generation</p>
              </div>
            </div>
            
            <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-60"></div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white relative group-hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/25">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19l1-1c0-.5-.6-1-1.5-1-.9 0-2 .5-2 2"></path>
                  <path d="M17.5 2.5a2.5 2.5 0 0 1 2.5 2.5v14a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19V5a2.5 2.5 0 0 1 2.5-2.5z"></path>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 group-hover:border-green-500/40 transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-green-400 mb-3">3. Automate Customer Contact</h3>
                <p className="text-gray-300 text-sm leading-relaxed">AI receptionist, chatbots en scheduling</p>
              </div>
            </div>
            
            <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 opacity-60"></div>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white relative group-hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/25">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13,2 3,14 12,16"></polygon>
                  <rect x="13" y="14" width="12" height="8" rx="1"></rect>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 group-hover:border-orange-500/40 transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">4. Expand with Smart Tools</h3>
                <p className="text-gray-300 text-sm leading-relaxed">AI marketing, content creation en workflow automation</p>
              </div>
            </div>
            
            <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 opacity-60"></div>
          </motion.div>

          {/* Step 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white relative group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/25">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 20V10"></path>
                  <path d="M12 20V4"></path>
                  <path d="M6 20v-6"></path>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 group-hover:border-blue-500/40 transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">5. Scale with Data</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Analytics, insights en continue groei</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap