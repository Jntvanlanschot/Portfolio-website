import ServicesGrid from '@/components/ServicesGrid'
import FeatureShowcase from '@/components/FeatureShowcase'
import Roadmap from '@/components/Roadmap'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <div className="animate-slide-in">
        <ServicesGrid />
      </div>
      <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
        <FeatureShowcase />
      </div>
      <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
        <Roadmap />
      </div>
      <div className="animate-slide-in" style={{ animationDelay: '0.6s' }}>
        <ContactForm />
      </div>
    </>
  )
}
