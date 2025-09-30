export interface Service {
  id: string
  title: string
  description: string
  shortDescription: string
  icon: string
  slug: string
  deliverables: string[]
  whyImportant: string
  detailedDescription: string
}

export const services: Service[] = [
  {
    id: 'websites-webshops',
    title: 'Websites & Webshops',
    description: 'Modern, snel en gebruiksvriendelijk. Op maat gemaakt of met bewezen frameworks.',
    shortDescription: 'Modern, snel en gebruiksvriendelijk. Op maat gemaakt of met bewezen frameworks.',
    icon: 'Globe',
    slug: 'websites-webshops',
    deliverables: [
      'Responsive website of webshop',
      'SEO-geoptimaliseerd',
      'Snelle laadtijden',
      'Content Management Systeem',
      'Analytics en tracking',
      'SSL-certificaat en hosting'
    ],
    whyImportant: 'Een professionele website is je digitale visitekaartje. Het bepaalt het eerste oordeel van potentiële klanten en kan het verschil maken tussen een bezoeker die weggaat of een klant die koopt.',
    detailedDescription: 'We bouwen websites en webshops die niet alleen mooi zijn, maar ook functioneel en gebruiksvriendelijk. Van eenvoudige bedrijfswebsites tot complexe e-commerce platforms, we zorgen ervoor dat je online aanwezigheid optimaal presteert.'
  },
  {
    id: 'ai-tools-automatisering',
    title: 'AI-Tools & Automatisering',
    description: 'Van AI-receptionisten tot slimme workflows die je tijd besparen.',
    shortDescription: 'Van AI-receptionisten tot slimme workflows die je tijd besparen.',
    icon: 'Bot',
    slug: 'ai-tools-automatisering',
    deliverables: [
      'AI-receptionist voor je website',
      'Geautomatiseerde workflows',
      'Chatbots en klantenservice',
      'Data-analyse en rapportage',
      'Integratie met bestaande systemen',
      'Training en ondersteuning'
    ],
    whyImportant: 'AI en automatisering kunnen je bedrijf drastisch efficiënter maken. Door repetitieve taken te automatiseren, heb je meer tijd voor strategische beslissingen en klantcontact.',
    detailedDescription: 'We implementeren AI-oplossingen die echt waarde toevoegen aan je bedrijf. Van slimme chatbots die 24/7 klantvragen beantwoorden tot geautomatiseerde workflows die je team ondersteunen.'
  },
  {
    id: 'leadgeneratie-marketing',
    title: 'Leadgeneratie & Marketing',
    description: 'Tools en strategieën die jouw klanten vinden en activeren.',
    shortDescription: 'Tools en strategieën die jouw klanten vinden en activeren.',
    icon: 'Target',
    slug: 'leadgeneratie-marketing',
    deliverables: [
      'Leadgeneratie strategie',
      'Landing pages en formulieren',
      'Email marketing automatisering',
      'Social media campagnes',
      'SEO en content marketing',
      'Analytics en conversie optimalisatie'
    ],
    whyImportant: 'Zonder leads geen klanten. Een goed doordachte leadgeneratie strategie zorgt ervoor dat je continu nieuwe potentiële klanten aantrekt en deze effectief kunt converteren.',
    detailedDescription: 'We helpen je om een gestructureerde aanpak te ontwikkelen voor het aantrekken en converteren van leads. Van de eerste interesse tot de uiteindelijke verkoop.'
  },
  {
    id: 'productontwerp-prototyping',
    title: 'Productontwerp & Prototyping',
    description: 'Van idee tot schaalbaar digitaal product met een sterk ontwerp.',
    shortDescription: 'Van idee tot schaalbaar digitaal product met een sterk ontwerp.',
    icon: 'Palette',
    slug: 'productontwerp-prototyping',
    deliverables: [
      'User experience (UX) onderzoek',
      'Interface ontwerp (UI)',
      'Interactieve prototypes',
      'Usability testing',
      'Design system',
      'Implementatie begeleiding'
    ],
    whyImportant: 'Goed ontwerp is cruciaal voor het succes van digitale producten. Het bepaalt hoe gebruikers je product ervaren en of ze het blijven gebruiken.',
    detailedDescription: 'We transformeren je ideeën in gebruiksvriendelijke digitale producten. Van het eerste concept tot een volledig functioneel product dat gebruikers waarderen.'
  }
]
