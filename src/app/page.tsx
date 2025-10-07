import ServicesGrid from '@/components/ServicesGrid'
import Roadmap from '@/components/Roadmap'
import CasesGrid from '@/components/CasesGrid'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      {/* Top title section replacing the removed Hero */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Online Op{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Maat</span>
            </h1>
          </div>
        </div>
      </section>
      <ServicesGrid />
      <Roadmap />
      <CasesGrid />
      <About />
      <ContactForm />
    </>
  )
}
