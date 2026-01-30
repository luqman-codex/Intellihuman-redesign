import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText, Database, Brain, Shield, CheckCircle } from 'lucide-react'
import { Navbar } from "@/components/autono/Navbar"
import { Footer } from "@/components/autono/Footer"

export const metadata: Metadata = {
  title: 'Product Overview | IntelliHuman - Insurance Decisioning Platform',
  description: 'A decisioning platform built for insurance. From documents to decisions, with full traceability and governance controls.',
  openGraph: {
    title: 'Product Overview | IntelliHuman',
    description: 'A decisioning platform built for insurance with full traceability.',
    type: 'website',
  },
}

// Platform modules data from IntelliHuman Redesign spec
const platformModules = [
  {
    title: 'Extraction Layer',
    ingests: 'PDFs, images, emails, forms, and unstructured documents',
    outputs: 'Structured data fields, key facts, and entity relationships',
    matters: 'Eliminates manual data entry and ensures consistent capture across all document types.',
    icon: FileText,
  },
  {
    title: 'Ontology Layer',
    ingests: 'Extracted data and business terminology',
    outputs: 'Normalized entities mapped to insurance concepts (parties, coverages, perils, exclusions)',
    matters: 'The key differentiator—ensures every decision uses consistent, industry-standard definitions.',
    icon: Database,
    highlighted: true,
  },
  {
    title: 'Decisioning Engine',
    ingests: 'Normalized entities and business rules',
    outputs: 'Recommendations with confidence scores and triggered rule explanations',
    matters: 'Applies your guidelines consistently while providing full reasoning transparency.',
    icon: Brain,
  },
  {
    title: 'Audit + Reporting',
    ingests: 'All decision artifacts and user interactions',
    outputs: 'Exportable audit packages, compliance reports, and analytics dashboards',
    matters: 'Every decision is defensible with complete evidence trails for regulators and disputes.',
    icon: Shield,
  },
]

// Output UI cards from spec
const outputCards = [
  { title: 'Decision Summary', description: 'Clear recommendation with confidence score and reasoning' },
  { title: 'Evidence Panel', description: 'Linked source documents and extracted facts' },
  { title: 'Extracted Entities', description: 'Parties, coverages, amounts, and relationships' },
  { title: 'Workflow Routing', description: 'Queue assignment and next action recommendations' },
  { title: 'Audit Trace Export', description: 'Complete decision history for compliance' },
]

// Standard integration bullets from spec
const integrationBullets = [
  'Read/write claim and policy objects',
  'Ingest attachments, notes, and forms',
  'Route queues and create tasks',
  'Export decisions and audit traces',
]

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="light" />

      {/* Section 1: Hero */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
            alt="Product background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-6 sm:mb-8 uppercase">
            Product Overview
          </p>
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-light text-white leading-[1.3] tracking-[0.05em] mb-6 sm:mb-8 md:mb-10">
            A decisioning platform
            <br />
            built for insurance
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-light text-white/70 leading-[1.8] max-w-2xl mx-auto mb-10">
            Enterprise-grade AI that automates claims and underwriting decisions with evidence-backed reasoning and audit-ready traceability.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-light text-sm tracking-wide hover:bg-white/90 transition-all duration-300"
          >
            Request Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white z-10" />
      </section>

      {/* Section 2: Dark Narrative Band - Platform Overview */}
      <section className="bg-black py-20 lg:py-28">
        <div className="w-full px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side - matching Vision component style */}
            <div className="relative lg:pl-28">
              <div className="absolute left-0 lg:left-28 top-0 bottom-0 w-[2px] bg-white/80" />
              <div className="pl-6">
                <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-10 uppercase">
                  The Platform
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-loose mb-12">
                  <span className="block mb-3">From documents to decisions,</span>
                  <span className="block">with traceability.</span>
                </h2>
                <ul className="space-y-4 mb-10">
                  {['Extraction', 'Ontology normalization', 'Decisioning + confidence', 'Governance controls', 'Audit trace export'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-white font-light text-sm tracking-wide hover:gap-3 transition-all duration-300 group"
                >
                  Learn how it works
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Platform Stack Diagram */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gray-900 border border-white/10 rounded-2xl p-8 w-full max-w-md">
                <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-6 uppercase text-center">
                  Platform Architecture
                </p>
                <div className="space-y-3">
                  {['Documents & Data', 'Extraction Layer', 'Ontology Mapping', 'Decision Engine', 'Audit & Export'].map((layer, i) => (
                    <div key={layer} className="relative">
                      <div className={`py-4 px-6 rounded-lg text-center ${
                        i === 2 ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/80'
                      }`}>
                        <span className="text-sm font-light">{layer}</span>
                      </div>
                      {i < 4 && (
                        <div className="flex justify-center py-1">
                          <div className="w-0.5 h-3 bg-white/30" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Platform Modules - Alternating Feature Blocks */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-16 lg:mb-20">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-black/30" />
            <div className="pl-6">
              <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Platform Modules
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed">
                Four layers working together
              </h2>
            </div>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {platformModules.map((module, index) => {
              const isEven = index % 2 === 0
              const Icon = module.icon

              return (
                <div
                  key={module.title}
                  className={`${module.highlighted ? 'bg-gray-50 -mx-4 lg:-mx-8 px-4 lg:px-8 py-16 lg:py-20' : ''}`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content - alternates position */}
                    <div className={`relative ${isEven ? 'lg:order-1 lg:pl-28' : 'lg:order-2 lg:pl-12'}`}>
                      <div className={`absolute ${isEven ? 'left-0 lg:left-28' : 'left-0 lg:left-12'} top-0 h-32 w-[2px] bg-black/30`} />
                      <div className="pl-6">
                        {module.highlighted && (
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-4">
                            Key Differentiator
                          </span>
                        )}
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-black leading-relaxed mb-6">
                          {module.title}
                        </h3>
                        <div className="space-y-4 text-black/70 font-light leading-relaxed">
                          <p><strong className="text-black">Ingests:</strong> {module.ingests}</p>
                          <p><strong className="text-black">Outputs:</strong> {module.outputs}</p>
                          <p><strong className="text-black">Why it matters:</strong> {module.matters}</p>
                        </div>
                      </div>
                    </div>

                    {/* Visual - alternates position */}
                    <div className={`flex ${isEven ? 'lg:order-2 justify-center lg:justify-end' : 'lg:order-1 justify-center lg:justify-start'}`}>
                      <div className={`w-32 h-32 rounded-2xl flex items-center justify-center ${
                        module.highlighted ? 'bg-blue-600' : 'bg-black'
                      }`}>
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Output UI Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-12 lg:mb-16">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-black/30" />
            <div className="pl-6">
              <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Platform Outputs
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed">
                What you get from every decision
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:pl-28">
            {outputCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-black/10 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-light text-black mb-3">{card.title}</h3>
                <p className="text-sm text-black/60 font-light leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Integrations (Detailed) - Two Columns */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Core Platforms */}
            <div className="relative lg:pl-28">
              <div className="absolute left-0 lg:left-28 top-0 h-32 w-[2px] bg-black/30" />
              <div className="pl-6">
                <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                  Core Platforms
                </p>
                <h3 className="text-xl md:text-2xl font-light text-black leading-relaxed mb-8">
                  Native integrations with leading insurance systems
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {['Duck Creek', 'Guidewire', 'Majesco'].map((platform) => (
                    <div key={platform} className="bg-gray-100 rounded-xl p-4 lg:p-6 text-center">
                      <span className="text-xs lg:text-sm font-medium text-black/70">{platform}</span>
                    </div>
                  ))}
                </div>
                <ul className="space-y-3">
                  {integrationBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-black/70 font-light text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Data + Docs */}
            <div className="relative lg:pl-12">
              <div className="absolute left-0 lg:left-12 top-0 h-32 w-[2px] bg-black/30" />
              <div className="pl-6">
                <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                  Data + Documents
                </p>
                <h3 className="text-xl md:text-2xl font-light text-black leading-relaxed mb-8">
                  Connect your data sources and document repositories
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {['Snowflake', 'Databricks', 'Salesforce'].map((platform) => (
                    <div key={platform} className="bg-gray-100 rounded-xl p-4 lg:p-6 text-center">
                      <span className="text-xs lg:text-sm font-medium text-black/70">{platform}</span>
                    </div>
                  ))}
                </div>
                <p className="text-black/70 font-light leading-relaxed text-sm">
                  API-first architecture supports warehouses, document stores, and custom integrations without replacing your existing infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Band */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-6">
            See the platform in action
          </h2>
          <p className="text-white/60 font-light mb-10 max-w-xl mx-auto">
            Book a personalized demo to see how IntelliHuman can transform your insurance operations.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-light text-sm tracking-wide hover:bg-gray-100 transition-all duration-300"
          >
            Request Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
