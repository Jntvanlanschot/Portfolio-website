'use client'

import { motion } from 'framer-motion'

interface ServiceIconProps {
  type: 'website' | 'chatbot' | 'leadgen' | 'design'
  className?: string
}

const ServiceIcon = ({ type, className = '' }: ServiceIconProps) => {
  const icons = {
    website: (
      <div className="relative">
        {/* Website mockup */}
        <div className="w-16 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 overflow-hidden">
          {/* Browser header */}
          <div className="h-3 bg-gray-100 flex items-center px-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
          </div>
          {/* Content */}
          <div className="p-2 space-y-1">
            <div className="h-1 bg-primary-500 rounded w-3/4"></div>
            <div className="h-1 bg-gray-300 rounded w-1/2"></div>
            <div className="h-1 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
        {/* Floating elements */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-primary-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary-300 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>
    ),
    chatbot: (
      <div className="relative">
        {/* Chat interface */}
        <div className="w-16 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 p-2">
          {/* Chat bubbles */}
          <div className="space-y-1">
            <div className="bg-gray-100 rounded-lg p-1 w-3/4">
              <div className="h-1 bg-gray-400 rounded w-1/2"></div>
            </div>
            <div className="bg-primary-500 rounded-lg p-1 w-2/3 ml-auto">
              <div className="h-1 bg-white rounded w-3/4"></div>
            </div>
            <div className="bg-gray-100 rounded-lg p-1 w-1/2">
              <div className="h-1 bg-gray-400 rounded w-2/3"></div>
            </div>
          </div>
        </div>
        {/* AI indicator */}
        <motion.div
          className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </motion.div>
        {/* Typing indicator */}
        <motion.div
          className="absolute -bottom-1 left-2 flex space-x-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
          <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
          <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
        </motion.div>
      </div>
    ),
    leadgen: (
      <div className="relative">
        {/* Analytics dashboard */}
        <div className="w-16 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 p-2">
          {/* Chart */}
          <div className="h-6 flex items-end space-x-1">
            <div className="w-2 bg-primary-500 rounded-t" style={{ height: '60%' }}></div>
            <div className="w-2 bg-primary-400 rounded-t" style={{ height: '80%' }}></div>
            <div className="w-2 bg-primary-500 rounded-t" style={{ height: '100%' }}></div>
            <div className="w-2 bg-primary-300 rounded-t" style={{ height: '40%' }}></div>
            <div className="w-2 bg-primary-500 rounded-t" style={{ height: '90%' }}></div>
          </div>
          {/* Stats */}
          <div className="mt-1 flex justify-between text-xs">
            <div className="w-2 h-1 bg-green-400 rounded"></div>
            <div className="w-2 h-1 bg-primary-400 rounded"></div>
          </div>
        </div>
        {/* Growth arrow */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-l-transparent border-r-transparent border-b-white"></div>
        </motion.div>
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-primary-300"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    ),
    design: (
      <div className="relative">
        {/* Design tools */}
        <div className="w-16 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200 p-2">
          {/* Color palette */}
          <div className="flex space-x-1 mb-2">
            <div className="w-3 h-3 bg-primary-500 rounded"></div>
            <div className="w-3 h-3 bg-primary-300 rounded"></div>
            <div className="w-3 h-3 bg-gray-300 rounded"></div>
            <div className="w-3 h-3 bg-gray-500 rounded"></div>
          </div>
          {/* Design elements */}
          <div className="space-y-1">
            <div className="h-1 bg-primary-500 rounded w-3/4"></div>
            <div className="h-1 bg-gray-300 rounded w-1/2"></div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary-400 rounded"></div>
              <div className="w-2 h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        {/* Creative sparkles */}
        <motion.div
          className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-primary-400 rounded-full"
          animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        {/* Brush stroke effect */}
        <motion.div
          className="absolute top-1 right-1 w-3 h-1 bg-primary-200 rounded-full opacity-60"
          animate={{ x: [0, 2, 0], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      {icons[type]}
    </div>
  )
}

export default ServiceIcon
