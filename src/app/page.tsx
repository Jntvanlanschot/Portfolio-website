import ServicesGrid from '@/components/ServicesGrid'
import FeatureShowcase from '@/components/FeatureShowcase'
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
              <span className="text-[#d2d0eb]">Maat</span>
            </h1>
          </div>
        </div>
      </section>
      <ServicesGrid />
      <FeatureShowcase />
      <Roadmap />
      <CasesGrid />
      <About />
      <ContactForm />
    </>
  )
}
