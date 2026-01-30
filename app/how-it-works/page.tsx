import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Layers, FileText, Brain, CheckCircle, Users, Settings, Database, Globe, MessageSquare, Server, Activity } from 'lucide-react'
import { Navbar } from "@/components/autono/Navbar"
import { Footer } from "@/components/autono/Footer"

export const metadata: Metadata = {
  title: 'How It Works | IntelliHuman - Platform Architecture',
  description: 'Built on an insurance ontology and 8-layer knowledge system for consistent, explainable outcomes with full audit trails.',
  openGraph: {
    title: 'How It Works | IntelliHuman',
    description: 'Platform architecture built on insurance ontology and 8-layer knowledge system.',
    type: 'website',
  },
}

// 8 Knowledge Layers from spec
const knowledgeLayers = [
  { number: 1, title: 'Vertical / Industry Knowledge', description: 'Insurance domain expertise and best practices', icon: Layers },
  { number: 2, title: 'Vertical Dictionary / Ontology', description: 'Standardized insurance concepts and relationships', icon: Database },
  { number: 3, title: 'Vertical SME Knowledge', description: 'Expert underwriting and claims handling patterns', icon: Brain },
  { number: 4, title: 'Enterprise Documents', description: 'Your policies, guidelines, and procedures', icon: FileText },
  { number: 5, title: 'Telemetry & System Logs', description: 'Real-time operational data and patterns', icon: Activity },
  { number: 6, title: 'Feedback & User Interactions', description: 'Learning from decisions and overrides', icon: MessageSquare },
  { number: 7, title: 'Internet / Public Context', description: 'External data sources and benchmarks', icon: Globe },
  { number: 8, title: 'Enterprise SME Knowledge', description: 'Your organization-specific expertise', icon: Users },
]

// Architecture steps from spec
const architectureSteps = [
  {
    title: 'Inputs',
    bullets: ['Documents, forms, and data feeds', 'Claims, submissions, and policy records'],
  },
  {
    title: 'Extraction',
    bullets: ['AI-powered document parsing', 'Entity and relationship extraction'],
  },
  {
    title: 'Ontology',
    bullets: ['Map to insurance concepts', 'Normalize terminology'],
  },
  {
    title: 'Decisioning',
    bullets: ['Apply rules and guidelines', 'Generate recommendations'],
  },
  {
    title: 'Outputs',
    bullets: ['Decision with confidence', 'Full audit trail'],
  },
]

// Human-in-the-loop controls from spec
const humanControls = [
  {
    title: 'Review Queues',
    description: 'Route decisions requiring human review based on confidence thresholds, complexity, or value.',
  },
  {
    title: 'Approval Workflows',
    description: 'Configure multi-level approvals for high-stakes decisions with role-based permissions.',
  },
  {
    title: 'Override Capability',
    description: 'Allow experts to override AI recommendations with documented reasoning.',
  },
  {
    title: 'Governance Dashboard',
    description: 'Monitor decision quality, override patterns, and model performance in real-time.',
  },
]

// Integration bullets from spec
const integrationBullets = [
  'Read/write claim and policy objects',
  'Ingest attachments, notes, and forms',
  'Route queues and create tasks',
  'Export decisions and audit traces',
]

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="light" />

      {/* Section 1: Hero */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Platform architecture background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-6 sm:mb-8 uppercase">
            Platform Architecture
          </p>
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-light text-white leading-[1.3] tracking-[0.05em] mb-6 sm:mb-8 md:mb-10">
            Built for insurance
            <br />
            from the ground up
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-light text-white/70 leading-[1.8] max-w-2xl mx-auto mb-10">
            An 8-layer knowledge system and insurance ontology ensure consistent, explainable decisions with complete audit trails.
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

      {/* Section 2: Knowledge by Layer - 8 Layer Stack */}
      <section className="bg-black py-20 lg:py-28">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-16">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-white/30" />
            <div className="pl-6">
              <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Knowledge Architecture
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed">
                8-layer knowledge system
              </h2>
            </div>
          </div>

          <div className="lg:pl-28">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {knowledgeLayers.map((layer) => {
                const Icon = layer.icon
                return (
                  <div
                    key={layer.number}
                    className={`bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors ${
                      layer.number === 2 ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        layer.number === 2 ? 'bg-blue-600' : 'bg-white/10'
                      }`}>
                        <span className="text-white text-sm font-medium">{layer.number}</span>
                      </div>
                      <Icon className="w-5 h-5 text-white/60 mt-1" />
                    </div>
                    <h3 className="text-white font-light text-sm mb-2">{layer.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{layer.description}</p>
                    {layer.number === 2 && (
                      <span className="inline-block mt-3 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                        Key Differentiator
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Architecture Stack - 5 Step Diagram */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-16 lg:mb-20">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-black/30" />
            <div className="pl-6">
              <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Processing Pipeline
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed">
                From inputs to decisions
              </h2>
            </div>
          </div>

          <div className="lg:pl-28">
            <div className="flex flex-wrap justify-between items-start gap-6">
              {architectureSteps.map((step, index) => (
                <div key={step.title} className="flex items-start">
                  <div className="text-center flex-1 min-w-[140px]">
                    <div className={`w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                      index === 2 ? 'bg-blue-600' : 'bg-black'
                    }`}>
                      <span className="text-white font-light text-sm">{step.title}</span>
                    </div>
                    <ul className="space-y-1">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="text-black/60 text-xs">{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  {index < architectureSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-black/30 mx-2 mt-9 flex-shrink-0 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Decision Trace Example - UI Mockup */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="relative lg:pl-28">
              <div className="absolute left-0 lg:left-28 top-0 h-32 w-[2px] bg-black/30" />
              <div className="pl-6">
                <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                  Core Capability
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed mb-6">
                  Complete decision trace
                </h2>
                <p className="text-black/70 font-light leading-relaxed mb-8">
                  Every decision includes a complete trace showing inputs, extracted entities, triggered rules, and the evidence that led to the recommendation.
                </p>
                <ul className="space-y-3">
                  {['Evidence links to source documents', 'Triggered rule explanations', 'Override history with reasoning', 'Exportable audit package'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-black/70 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Decision Trace Mockup - Expanded */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 w-full max-w-lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-white/60 text-xs font-light tracking-[0.2em] uppercase">
                    Decision Trace
                  </p>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                    Complete
                  </span>
                </div>

                {/* Input Artifacts */}
                <div className="mb-4">
                  <p className="text-white/50 text-xs mb-2">Input Artifacts</p>
                  <div className="flex flex-wrap gap-2">
                    {['Policy HO-3-2024', 'FNOL #48291', 'Photos (8)', 'Adjuster Notes'].map((item) => (
                      <span key={item} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded hover:bg-white/20 cursor-pointer">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Extracted Entities */}
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <p className="text-white/50 text-xs mb-3">Extracted Entities</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-white/50">Insured</p>
                      <p className="text-white">John Smith</p>
                    </div>
                    <div>
                      <p className="text-white/50">Loss Cause</p>
                      <p className="text-white">Water Damage</p>
                    </div>
                    <div>
                      <p className="text-white/50">Peril</p>
                      <p className="text-white">Burst Pipe</p>
                    </div>
                    <div>
                      <p className="text-white/50">Coverage</p>
                      <p className="text-green-400">Dwelling - Covered</p>
                    </div>
                  </div>
                </div>

                {/* Triggered Rules */}
                <div className="mb-4">
                  <p className="text-white/50 text-xs mb-2">Triggered Rules</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-green-600/10 border border-green-500/20 rounded-lg p-3">
                      <span className="text-white/80 text-xs">Coverage A - Dwelling</span>
                      <span className="text-green-400 text-xs">APPLIES</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-white/80 text-xs">Deductible: $1,000</span>
                      <span className="text-white/60 text-xs">APPLY</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-white/80 text-xs">Water Damage Exclusion</span>
                      <span className="text-white/60 text-xs">N/A - Sudden</span>
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-green-400 text-sm font-medium">Recommend: Approve</span>
                    <span className="text-white/60 text-xs">94% confidence</span>
                  </div>
                  <p className="text-white/60 text-xs">Covered peril, no applicable exclusions, within policy limits</p>
                </div>

                {/* Evidence Links */}
                <div className="mb-4">
                  <p className="text-white/50 text-xs mb-2">Evidence Links</p>
                  <div className="space-y-1">
                    {['Policy Section 4.2.1 - Dwelling Coverage', 'Plumber Invoice - Sudden Failure', 'Photo Analysis - Water Damage Extent'].map((item) => (
                      <p key={item} className="text-blue-400 text-xs hover:underline cursor-pointer">{item}</p>
                    ))}
                  </div>
                </div>

                {/* Override History */}
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-white/50 text-xs mb-2">Override History</p>
                  <p className="text-white/40 text-xs italic">No overrides - Original recommendation accepted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Human-in-the-loop Controls */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-16 lg:mb-20">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-black/30" />
            <div className="pl-6">
              <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Governance
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed">
                Human-in-the-loop controls
              </h2>
            </div>
          </div>

          <div className="lg:pl-28">
            <div className="grid md:grid-cols-2 gap-8">
              {humanControls.map((control) => (
                <div key={control.title} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-black mb-3">{control.title}</h3>
                      <p className="text-black/70 font-light text-sm leading-relaxed">
                        {control.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Integration Architecture */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* API-First Architecture */}
            <div className="relative lg:pl-28">
              <div className="absolute left-0 lg:left-28 top-0 h-32 w-[2px] bg-black/30" />
              <div className="pl-6">
                <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                  Integration Architecture
                </p>
                <h3 className="text-xl md:text-2xl font-light text-black leading-relaxed mb-8">
                  Flexible deployment options
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                      <Server className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">API-First</h4>
                      <p className="text-black/60 text-sm">RESTful APIs for seamless integration with any system</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Embedded UI</h4>
                      <p className="text-black/60 text-sm">White-label components for in-app experiences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Batch + Real-time</h4>
                      <p className="text-black/60 text-sm">Process at any scale with flexible timing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Platforms */}
            <div className="relative lg:pl-12">
              <div className="absolute left-0 lg:left-12 top-0 h-32 w-[2px] bg-black/30" />
              <div className="pl-6">
                <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                  Core Platforms
                </p>
                <h3 className="text-xl md:text-2xl font-light text-black leading-relaxed mb-8">
                  Native integrations
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {['Duck Creek', 'Guidewire', 'Majesco'].map((platform) => (
                    <div key={platform} className="bg-white border border-black/10 rounded-xl p-4 lg:p-6 text-center">
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
          </div>
        </div>
      </section>

      {/* Section 7: CTA Band */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-6">
            See the platform in action
          </h2>
          <p className="text-white/60 font-light mb-10 max-w-xl mx-auto">
            Book a personalized demo to see how IntelliHuman's architecture delivers consistent, explainable decisions.
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
