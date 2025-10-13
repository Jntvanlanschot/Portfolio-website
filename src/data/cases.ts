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
    id: 'silty-pleasure',
    title: 'Website voor een catering bedrijf',
    client: 'Silty Pleasure',
    description: 'Een moderne website voor een oester catering bedrijf gemaakt met meerdere functionaliteiten. Van idee tot uitvoering binnen een week.',
    challenge: 'De klant wilde een website die hun premium brand image weerspiegelt en tegelijkertijd gebruiksvriendelijk is voor hun doelgroep. De site moest zowel informatief als visueel aantrekkelijk zijn.',
    solution: 'We hebben een volledig responsive website ontwikkeld met moderne design principes, geoptimaliseerde laadtijden en een intuïtieve navigatie. De site combineert elegante typografie met subtiele animaties.',
    result: 'Verbeterde gebruikerservaring, snellere laadtijden en een professionele online aanwezigheid die het premium brand image versterkt.',
    slug: 'silty-pleasure',
    image: '/images/screenshot-silty-pleasure.png',
    category: 'Websites & Webshops',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: true
  },
  {
    id: 'reisbureau',
    title: 'Website voor een reisbureau',
    client: 'House of Momma',
    description: 'Een inspirerende website voor een exclusief reisbureau gespecialiseerd in fitness retreats en wellness reizen naar tropische bestemmingen.',
    challenge: 'Het reisbureau wilde een website die hun premium lifestyle retreats duidelijk communiceert en potentiële klanten inspireert tot booking. De site moest zowel de exclusiviteit als de avontuurlijke kant van hun reizen tonen.',
    solution: 'We hebben een responsive website ontwikkeld met prachtige afbeeldingen van bestemmingen, duidelijke navigatie voor verschillende reistypes en een intuïtieve booking flow om de conversie te optimaliseren.',
    result: 'Verhoogde conversie op reisboekingen, verbeterde online vindbaarheid en sterke merkerkenning in de lifestyle travel sector.',
    slug: 'reisbureau',
    image: '/images/house-of-momma.png',
    category: 'Websites & Webshops',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: true
  },
  {
    id: 'quikr-talent',
    title: 'Recruitment Website',
    client: 'Quikr Talent',
    description: 'Een moderne recruitment website voor een talentbureau gespecialiseerd in office professionals.',
    challenge: 'Quikr Talent wilde een website die hun unieke aanpak van talent matching communiceert en zowel werkgevers als kandidaten aanspreekt.',
    solution: 'We hebben een responsive website ontwikkeld met duidelijke secties voor werkgevers en kandidaten, moderne animaties en een gebruiksvriendelijke interface.',
    result: 'Verbeterde gebruikerservaring en duidelijke communicatie van hun talentgedreven aanpak.',
    slug: 'quikr-talent',
    image: '/images/Quikr.png',
    category: 'Websites & Webshops',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: true
  },
  {
    id: 'ultherakliniek',
    title: 'Medische Kliniek Website',
    client: 'Ulthera Kliniek',
    description: 'Een professionele website voor een medische kliniek gespecialiseerd in Ultherapy behandelingen.',
    challenge: 'De kliniek wilde een betrouwbare website die hun medische expertise en behandelingen duidelijk communiceert aan potentiële patiënten.',
    solution: 'We hebben een medisch professionele website ontwikkeld met duidelijke informatie over behandelingen, locaties en resultaten.',
    result: 'Verhoogde vertrouwen bij patiënten en verbeterde online aanwezigheid in de medische sector.',
    slug: 'ultherakliniek',
    image: '/images/Ultherakliniek.png',
    category: 'Websites & Webshops',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
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
