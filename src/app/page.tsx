import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import Roadmap from '@/components/Roadmap'
import CasesGrid from '@/components/CasesGrid'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Roadmap />
      <CasesGrid />
      <About />
      <ContactForm />
    </>
  )
}
