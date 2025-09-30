# Websites & Tools - Portfolio Website

Een moderne, productieklare portfolio/agency website gebouwd met Next.js, TypeScript en Tailwind CSS. De site is geoptimaliseerd voor Vercel deployment en volgt moderne web development best practices.

## 🚀 Features

- **Modern Design**: Minimalistisch design met veel witruimte en moderne typografie
- **Responsive**: Mobiel-first design dat perfect werkt op alle apparaten
- **Performance**: Geoptimaliseerd voor snelheid en SEO
- **Animations**: Zachte animaties met Framer Motion
- **Contact Form**: Werkend contactformulier met email verzending via Resend
- **Dynamic Pages**: Dynamische pagina's voor diensten en cases
- **TypeScript**: Volledige type safety
- **Tailwind CSS**: Utility-first CSS framework

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Resend API
- **Deployment**: Vercel (recommended)

## 📦 Installatie

1. **Clone de repository**
   ```bash
   git clone <repository-url>
   cd "Portfolio Website"
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Configureer environment variabelen**
   ```bash
   cp env.example .env.local
   ```
   
   Vul de volgende variabelen in:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   FROM_EMAIL=noreply@yourdomain.com
   TO_EMAIL=contact@yourdomain.com
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment naar Vercel

1. **Push naar GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import in Vercel**
   - Ga naar [vercel.com](https://vercel.com)
   - Klik op "New Project"
   - Import je GitHub repository
   - Vercel detecteert automatisch Next.js

3. **Configureer environment variabelen in Vercel**
   - Ga naar Project Settings > Environment Variables
   - Voeg dezelfde variabelen toe als in je `.env.local`

4. **Deploy**
   - Vercel deployt automatisch bij elke push naar main
   - Je krijgt een live URL zoals `https://your-project.vercel.app`

## 📁 Project Structuur

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── contact/           # Contact pagina
│   ├── diensten/          # Diensten detailpagina's
│   │   └── [slug]/
│   ├── cases/             # Cases detailpagina's
│   │   └── [slug]/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React componenten
│   ├── Header.tsx         # Navigatie header
│   ├── Hero.tsx           # Hero sectie
│   ├── ServicesGrid.tsx   # Diensten grid
│   ├── CasesGrid.tsx      # Cases grid
│   ├── About.tsx          # Over ons sectie
│   ├── ContactForm.tsx    # Contact formulier
│   └── Footer.tsx         # Footer
└── data/                  # Data bestanden
    ├── services.ts        # Diensten data
    └── cases.ts           # Cases data
```

## 🎨 Customization

### Kleuren aanpassen
Pas de kleuren aan in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Hoofdkleur
    // ... andere tinten
  }
}
```

### Content aanpassen
- **Diensten**: Bewerk `src/data/services.ts`
- **Cases**: Bewerk `src/data/cases.ts`
- **Teksten**: Bewerk de componenten in `src/components/`

### Styling aanpassen
- **Global styles**: `src/app/globals.css`
- **Component styles**: Gebruik Tailwind classes in componenten
- **Custom components**: Voeg toe aan `src/components/`

## 📧 Email Configuratie

De site gebruikt Resend voor email verzending. Alternatief kun je SMTP gebruiken:

### Resend (Aanbevolen)
1. Maak account op [resend.com](https://resend.com)
2. Genereer API key
3. Voeg toe aan environment variabelen

### SMTP (Alternatief)
Pas `src/app/api/contact/route.ts` aan om SMTP te gebruiken in plaats van Resend.

## 🔧 Development

### Scripts
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

### Code Style
- TypeScript strict mode
- ESLint configuratie
- Prettier formatting (aanbevolen)

## 📱 Responsive Design

De site is volledig responsive met breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO

- Meta tags per pagina
- Open Graph tags
- Twitter Cards
- Structured data (toevoegen indien gewenst)
- Sitemap (automatisch via Next.js)

## 🚀 Performance

- Image optimization (Next.js Image component)
- Code splitting
- Lazy loading
- Optimized fonts (Google Fonts)
- Minimal JavaScript bundle

## 📞 Support

Voor vragen of problemen:
- Check de [Next.js documentatie](https://nextjs.org/docs)
- Check de [Tailwind CSS documentatie](https://tailwindcss.com/docs)
- Check de [Vercel documentatie](https://vercel.com/docs)

## 📄 Licentie

Dit project is gemaakt voor Websites & Tools. Alle rechten voorbehouden.

---

**Gemaakt met ❤️ door Websites & Tools**
