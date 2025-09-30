export interface Case {
  id: string
  title: string
  client: string
  description: string
  challenge: string
  solution: string
  result: string
  slug: string
  image: string
  category: string
  technologies: string[]
  featured: boolean
}

export const cases: Case[] = [
  {
    id: 'ecommerce-platform',
    title: 'Moderne E-commerce Platform',
    client: 'Retail Innovatie BV',
    description: 'Een volledig nieuwe webshop met geavanceerde functionaliteiten en AI-aanbevelingen.',
    challenge: 'De klant had een verouderde webshop die traag was, niet mobiel-vriendelijk en geen moderne betalingsopties had. De conversie was laag en klanten verlieten de site snel.',
    solution: 'We hebben een volledig nieuwe webshop gebouwd met Next.js, geïntegreerd met een modern CMS en AI-aanbevelingssysteem. De site is geoptimaliseerd voor snelheid en gebruiksvriendelijkheid.',
    result: '40% hogere conversie, 60% snellere laadtijden en 25% meer herhaalaankopen door de AI-aanbevelingen.',
    slug: 'ecommerce-platform',
    image: '/images/case-ecommerce.jpg',
    category: 'Websites & Webshops',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'AI/ML'],
    featured: true
  },
  {
    id: 'ai-receptionist',
    title: 'AI-Receptionist voor Zorgverlener',
    client: 'Medisch Centrum Amsterdam',
    description: 'Een intelligente chatbot die 24/7 patiëntvragen beantwoordt en afspraken inplant.',
    challenge: 'Het medisch centrum kreeg dagelijks honderden telefoontjes voor het maken van afspraken en het beantwoorden van veelgestelde vragen. Dit kostte veel tijd van het personeel.',
    solution: 'We hebben een AI-receptionist ontwikkeld die patiënten kan helpen met afspraken maken, vragen beantwoorden en doorverwijzen naar de juiste specialist.',
    result: '70% minder telefoontjes, 24/7 beschikbaarheid en 95% tevredenheid onder patiënten.',
    slug: 'ai-receptionist',
    image: '/images/case-ai-receptionist.jpg',
    category: 'AI-Tools & Automatisering',
    technologies: ['OpenAI', 'Node.js', 'Webhook', 'Calendar API'],
    featured: true
  },
  {
    id: 'leadgeneratie-campagne',
    title: 'Leadgeneratie Campagne',
    client: 'B2B Software Bedrijf',
    description: 'Een complete leadgeneratie strategie met geautomatiseerde email campagnes en landing pages.',
    challenge: 'Het bedrijf had moeite om kwalitatieve leads te genereren en de sales pipeline was leeg. Ze hadden geen gestructureerde aanpak voor lead nurturing.',
    solution: 'We hebben een complete leadgeneratie strategie opgezet met geoptimaliseerde landing pages, geautomatiseerde email sequences en een CRM-integratie.',
    result: '300% meer leads, 45% hogere conversie van lead naar klant en een volledig geautomatiseerde sales funnel.',
    slug: 'leadgeneratie-campagne',
    image: '/images/case-leadgeneratie.jpg',
    category: 'Leadgeneratie & Marketing',
    technologies: ['HubSpot', 'Mailchimp', 'Google Ads', 'Analytics'],
    featured: false
  }
]
