'use client'

import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { name: 'Diensten', href: '/#diensten' },
    { name: 'Cases', href: '/#cases' },
    { name: 'Over ons', href: '/#over-ons' },
    { name: 'Contact', href: '/contact' },
  ]


  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              Websites & Tools
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Digitale groei voor bedrijven. Van websites tot AI-tools, 
              wij helpen je online te groeien.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Navigatie</h3>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p>
                <a
                  href="mailto:contact@websites-tools.nl"
                  className="hover:text-white transition-colors duration-200"
                >
                  contact@websites-tools.nl
                </a>
              </p>
              <p>Nederland</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Websites & Tools. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/algemene-voorwaarden"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
