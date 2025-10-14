import { Metadata } from 'next'
import { Bot, Zap, Brain, MessageSquare } from 'lucide-react'
import Ribbon from '@/components/Ribbon'

export const metadata: Metadata = {
  title: 'AI Tools - Websites & Tools',
  description: 'Revolutionaire AI-tools die jouw bedrijf automatiseren en efficiënter maken. Van AI-receptionisten tot slimme chatbots.',
}

export default function AIToolsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-[#6c63ff]">AI Tools</span> voor de toekomst
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Automatiseer jouw bedrijfsprocessen met geavanceerde AI-tools. Van slimme receptionisten tot intelligente chatbots die 24/7 voor jou werken.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Ribbon ribbonColor="#10b981" direction="top-right">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <MessageSquare className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI Receptionist</h3>
                <p className="text-gray-600">Slimme telefonische assistent die 24/7 klanten helpt</p>
              </div>
            </Ribbon>
            
            <Ribbon ribbonColor="#3b82f6" direction="top-right">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Bot className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Chatbots</h3>
                <p className="text-gray-600">Intelligente chatbots voor website en social media</p>
              </div>
            </Ribbon>
            
            <Ribbon ribbonColor="#8b5cf6" direction="top-right">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Brain className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI Analytics</h3>
                <p className="text-gray-600">Slimme data-analyse en voorspellende inzichten</p>
              </div>
            </Ribbon>
            
            <Ribbon ribbonColor="#f59e0b" direction="top-right">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Zap className="h-12 w-12 text-[#6c63ff] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
                <p className="text-gray-600">Automatisering van repetitieve taken en workflows</p>
              </div>
            </Ribbon>
          </div>
        </div>
      </section>

      {/* AI Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom AI Tools?
            </h2>
            <p className="text-xl text-gray-600">
              De voordelen van AI-implementatie in jouw bedrijf
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Beschikbaarheid</h3>
              <p className="text-gray-600">Jouw klanten krijgen altijd hulp, ook buiten kantooruren</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kostenefficiënt</h3>
              <p className="text-gray-600">Lagere operationele kosten door automatisering</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consistente Service</h3>
              <p className="text-gray-600">Altijd dezelfde hoge kwaliteit van klantenservice</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Schaalbaar</h3>
              <p className="text-gray-600">Eenvoudig opschalen zonder extra personeel</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Insights</h3>
              <p className="text-gray-600">Waardevolle inzichten uit klantinteracties</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Snelle Implementatie</h3>
              <p className="text-gray-600">Snel resultaat met minimale verstoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Implementatie Proces
            </h2>
            <p className="text-xl text-gray-300">
              Van analyse tot lancering in 5 stappen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6c63ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Analyse</h3>
              <p className="text-gray-300 text-sm">Jouw processen en behoeften analyseren</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6c63ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Strategie</h3>
              <p className="text-gray-300 text-sm">AI-strategie opstellen en doelen bepalen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6c63ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Ontwikkeling</h3>
              <p className="text-gray-300 text-sm">AI-tools ontwikkelen en configureren</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6c63ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Training</h3>
              <p className="text-gray-300 text-sm">AI trainen met jouw specifieke data</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6c63ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="text-lg font-semibold mb-3 text-white">Lancering</h3>
              <p className="text-gray-300 text-sm">Live gaan en continu optimaliseren</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
