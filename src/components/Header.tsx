'use client'

import { MessageCircle } from 'lucide-react'

const Header = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <a
        href="https://wa.me/31633024236"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="text-sm font-medium">Neem contact op</span>
      </a>
    </div>
  )
}

export default Header