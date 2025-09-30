import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Websites & Tools',
  description: 'Neem contact op met Websites & Tools. Laten we samen kijken hoe we jouw bedrijf kunnen helpen groeien.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactForm />
    </div>
  )
}
