'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Feature = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  href: string
}

const features: Feature[] = [
  {
    title: 'Moderne websites & webshops',
    description:
      'Snel, gebruiksvriendelijk en vindbaar. Heldere structuur met focus op conversie en groei.',
    imageSrc: '/images/second-pictogram.png',
    imageAlt: 'Second pictogram',
    href: '/diensten/websites-webshops',
  },
  {
    title: 'SEO & leadgeneratie',
    description:
      'Groei je bereik met SEO, funnels en landingspagina\'s. Meetbaar resultaat en schaalbaar.',
    imageSrc: '/images/third-pictogram.png',
    imageAlt: 'Third pictogram',
    href: '/diensten/leadgeneratie-marketing',
  },
  {
    title: 'AI-receptionisten & chatbots',
    description:
      'Automatiseer klantcontact met slimme AI. Intake, afspraken en support zonder wachttijden.',
    imageSrc: '/images/fourth-pictogram.png',
    imageAlt: 'Fourth pictogram',
    href: '/diensten/ai-tools-automatisering',
  },
  {
    title: 'Productontwerp & prototyping',
    description:
      'Van idee tot schaalbaar digitaal product. Snel testen, itereren en naar markt brengen.',
    imageSrc: '/images/fifth-pictogram.png',
    imageAlt: 'Fifth pictogram',
    href: '/diensten/productontwerp-prototyping',
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const FeatureShowcase = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#333] leading-tight">
            Wat bieden wij aan?
          </h2>
        </motion.div>
        <div className="space-y-12 md:space-y-16">
          {features.map((item, index) => {
            const isReversed = index % 2 === 1
            return (
              <motion.div
                key={item.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center rounded-2xl`}
              >
                {/* Text */}
                <div className={`${isReversed ? 'md:order-2' : ''} md:col-span-7`}>
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#333]">{item.title}</h2>
                    <p className="text-base md:text-lg text-[#333] opacity-80 leading-relaxed">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-[#6c63ff] text-[#6c63ff] rounded-lg transition-colors duration-200 hover:bg-[#6c63ff] hover:text-white"
                    >
                      Lees meer
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`${isReversed ? 'md:order-1' : ''} md:col-span-5`}>
                  <div className="w-full bg-white rounded-xl overflow-hidden">
                    <div className="relative w-full h-48 sm:h-56 md:h-64">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        className="object-contain"
                        sizes="(min-width: 768px) 40vw, 100vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase


