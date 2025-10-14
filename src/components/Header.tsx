'use client'

import { MessageCircle, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Ribbon from './Ribbon'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`${isHomePage && !isScrolled ? 'bg-transparent' : 'bg-gray-800'} border-b border-gray-700 sticky top-0 z-50 transition-all duration-300`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Title with Animation */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl md:text-3xl font-bold text-white leading-tight hover:text-[#6c63ff] transition-all duration-300 hover:scale-105">
              Online Op{' '}
              <span className="text-[#6c63ff] animate-pulse hover:animate-none">Maat</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/websites" className="text-gray-300 hover:text-[#6c63ff] transition-all duration-300 font-medium hover:scale-105">
              Websites
            </Link>
            <Link href="/productontwerp" className="text-gray-300 hover:text-[#6c63ff] transition-all duration-300 font-medium hover:scale-105">
              Productontwerp
            </Link>
            <Link href="/ai-tools" className="text-gray-300 hover:text-[#6c63ff] transition-all duration-300 font-medium hover:scale-105">
              AI Tools
            </Link>
            <Link href="/voorbeelden" className="text-gray-300 hover:text-[#6c63ff] transition-all duration-300 font-medium hover:scale-105">
              Voorbeelden
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#6c63ff] transition-all duration-300 font-medium hover:scale-105">
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#6c63ff] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* WhatsApp Button - Desktop */}
          <div className="hidden md:flex">
            <Ribbon 
              ribbonColor="#10b981" 
              direction="top-right"
              size="medium"
              animation="slide"
              delay={0.05}
              duration={0.3}
            >
              <a
                href="https://wa.me/31633024236"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                <span className="text-sm font-medium">Stuur een app</span>
                <MessageCircle className="h-4 w-4" />
              </a>
            </Ribbon>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/websites" 
                className="text-gray-300 hover:text-[#6c63ff] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Websites
              </Link>
              <Link 
                href="/productontwerp" 
                className="text-gray-300 hover:text-[#6c63ff] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Productontwerp
              </Link>
              <Link 
                href="/ai-tools" 
                className="text-gray-300 hover:text-[#6c63ff] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Tools
              </Link>
              <Link 
                href="/voorbeelden" 
                className="text-gray-300 hover:text-[#6c63ff] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Voorbeelden
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-[#6c63ff] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://wa.me/31633024236"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm font-medium">Neem contact op</span>
                <MessageCircle className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header