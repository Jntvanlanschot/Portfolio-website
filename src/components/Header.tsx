'use client'

import { MessageCircle } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-gray-50 border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Title */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Online Op{' '}
              <span className="text-[#d2d0eb]">Maat</span>
            </h1>
          </div>
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/31633024236"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25"
          >
            <span className="text-sm font-medium">Neem contact op</span>
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header