import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react'
import { cases } from '@/data/cases'

interface CasePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return cases.map((caseItem) => ({
    slug: caseItem.slug,
  }))
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const caseItem = cases.find((c) => c.slug === params.slug)
  
  if (!caseItem) {
    return {
      title: 'Case niet gevonden',
    }
  }

  return {
    title: `${caseItem.title} - Websites & Tools`,
    description: caseItem.description,
  }
}

export default function CasePage({ params }: CasePageProps) {
  const caseItem = cases.find((c) => c.slug === params.slug)

  if (!caseItem) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/#cases"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug naar cases
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-sm font-medium text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                    {caseItem.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {caseItem.client}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {caseItem.title}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {caseItem.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {caseItem.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-primary-600 font-medium">Case Preview</p>
                  <p className="text-primary-500 text-sm mt-2">Mockup afbeelding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Uitdaging
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {caseItem.challenge}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Oplossing
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {caseItem.solution}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Resultaat
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {caseItem.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Project Screenshots
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-8 shadow-sm"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <ExternalLink className="h-6 w-6 text-gray-500" />
                      </div>
                      <p className="text-gray-500 text-sm">Screenshot {i}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Project screenshot placeholder {i}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Wil je ook zoiets?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Laten we samen kijken hoe we jouw bedrijf kunnen helpen met een vergelijkbare oplossing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Neem contact op
              </Link>
              <Link href="/#cases" className="btn-secondary">
                Bekijk andere cases
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
