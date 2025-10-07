'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Bericht wordt verzonden...' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Dank je! We nemen snel contact op.'
        })
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        })
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Er is iets misgegaan')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Er is iets misgegaan. Probeer het later opnieuw.'
      })
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neem contact op
            </h2>
            <p className="text-lg text-gray-600">
              Laten we samen kijken hoe we jouw bedrijf kunnen helpen groeien
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 relative overflow-hidden"
          >
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-200 rounded-full opacity-30 translate-y-12 -translate-x-12"></div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute top-8 right-8 w-4 h-4 bg-primary-400 rounded-full opacity-40"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-8 left-8 w-3 h-3 bg-green-400 rounded-full opacity-50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-gray-900"
                    placeholder="Je naam"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-gray-900"
                    placeholder="je@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrijf
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-gray-900"
                  placeholder="Je bedrijfsnaam"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none text-gray-900"
                  placeholder="Vertel ons over je project of vraag. Dan helpen wij je nog deze week!"
                />
              </div>

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verzenden...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Verstuur bericht</span>
                  </>
                )}
              </button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center space-x-2 p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : status.type === 'error'
                      ? 'bg-red-50 text-red-700 border border-red-200'
                      : 'bg-[#6c63ff]/10 text-[#6c63ff] border border-[#6c63ff]/30'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : status.type === 'error' ? (
                    <AlertCircle className="h-5 w-5" />
                  ) : null}
                  <span className="text-sm font-medium">{status.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
