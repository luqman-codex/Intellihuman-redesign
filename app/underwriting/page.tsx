import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileInput, ShieldCheck, Layers, CheckCircle, AlertTriangle } from 'lucide-react'
import { Navbar } from "@/components/autono/Navbar"
import { Footer } from "@/components/autono/Footer"

export const metadata: Metadata = {
  title: 'Underwriting Decisioning | IntelliHuman - Standardize Decisions Across Submissions',
  description: 'Accelerate submissions, enforce guidelines, and route referrals with full reasoning trails and audit-ready documentation.',
  openGraph: {
    title: 'Underwriting Decisioning | IntelliHuman',
    description: 'Standardize underwriting decisions across messy submissions.',
    type: 'website',
  },
}

// Workflow steps from spec
const workflowSteps = [
  { label: 'Submission', description: 'Intake and parse' },
  { label: 'Extract', description: 'Risk factor extraction' },
  { label: 'Normalize', description: 'Ontology mapping' },
  { label: 'Evaluate', description: 'Guideline checks' },
  { label: 'Refer/Bind', description: 'Decision routing' },
  { label: 'Audit', description: 'Trail export' },
]

// Feature blocks from spec
const featureBlocks = [
  {
    title: 'Submission Intake',
    description: 'Parse and structure incoming submissions regardless of format or completeness.',
    inputs: 'Applications, SOVs, loss runs, supplemental documents',
    outputs: 'Structured submission data, identified gaps, risk summary',
    controls: 'Validation rules, required field enforcement, auto-triage thresholds',
    icon: FileInput,
  },
  {
    title: 'Guideline Checks + Referrals',
    description: 'Automatically evaluate submissions against underwriting guidelines with clear pass/fail indicators.',
    inputs: 'Normalized submission data, underwriting guidelines, appetite rules',
    outputs: 'Pass/fail results, reason codes, referral recommendations with evidence',
    icon: ShieldCheck,
    highlighted: true,
  },
  {
    title: 'Ontology Normalization',
    description: 'Map submission data to standardized insurance concepts for consistent evaluation.',
    inputs: 'Raw submission entities and values',
    outputs: 'Normalized entities, exposures, limits, and endorsements',
    icon: Layers,
  },
]

// Integration bullets from spec
const integrationBullets = [
  'Read/write claim and policy objects',
  'Ingest attachments, notes, and forms',
  'Route queues and create tasks',
  'Export decisions and audit traces',
]

export default function UnderwritingPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="light" />

      {/* Section 1: Hero */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
            alt="Underwriting background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-6 sm:mb-8 uppercase">
            Underwriting Decisioning
          </p>
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-light text-white leading-[1.3] tracking-[0.05em] mb-6 sm:mb-8 md:mb-10">
            Standardize decisions
            <br />
            across messy submissions
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-light text-white/70 leading-[1.8] max-w-2xl mx-auto mb-10">
            Accelerate submissions, enforce guidelines, and route referrals with full reasoning trails and audit-ready documentation.
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

      {/* Section 2: Dark Narrative Band with UW Guideline Check */}
      <section className="bg-black py-20 lg:py-28">
        <div className="w-full px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="relative lg:pl-28">
              <div className="absolute left-0 lg:left-28 top-0 bottom-0 w-[2px] bg-white/80" />
              <div className="pl-6">
                <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-10 uppercase">
                  Underwriting Operations
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-loose mb-12">
                  <span className="block mb-3">Standardize underwriting decisions</span>
                  <span className="block">across messy submissions.</span>
                </h2>
                <ul className="space-y-4 mb-10">
                  {['Extract risk factors', 'Guideline enforcement', 'Referral routing', 'Audit trace'].map((item) => (
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
                  See how it works
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* UW Guideline Check UI Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 w-full max-w-md">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-white/60 text-xs font-light tracking-[0.2em] uppercase">
                    Guideline Check
                  </p>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                    Refer
                  </span>
                </div>

                {/* Submission Summary */}
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <p className="text-white/50 text-xs mb-2">Submission Summary</p>
                  <p className="text-white font-light text-sm">Commercial Property - Manufacturing</p>
                  <p className="text-white/60 text-xs mt-1">TIV: $12.5M | 3 Locations</p>
                </div>

                {/* Guideline Pass/Fail Checks */}
                <div className="space-y-2 mb-4">
                  <p className="text-white/50 text-xs">Guideline Checks</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-green-600/10 border border-green-500/20 rounded-lg p-3">
                      <span className="text-white/80 text-xs">Sprinkler Requirement</span>
                      <span className="text-green-400 text-xs font-medium">PASS</span>
                    </div>
                    <div className="flex items-center justify-between bg-green-600/10 border border-green-500/20 rounded-lg p-3">
                      <span className="text-white/80 text-xs">Loss History (5yr)</span>
                      <span className="text-green-400 text-xs font-medium">PASS</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-600/10 border border-red-500/20 rounded-lg p-3">
                      <span className="text-white/80 text-xs">TIV Concentration</span>
                      <span className="text-red-400 text-xs font-medium">FAIL</span>
                    </div>
                  </div>
                </div>

                {/* Referral Recommendation */}
                <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
                  <p className="text-yellow-400 text-xs mb-2">Referral Recommendation</p>
                  <p className="text-white font-light text-sm">Senior UW Review - TIV Exception</p>
                  <p className="text-white/50 text-xs mt-1">Reason: Single location exceeds 60% of total TIV</p>
                </div>

                {/* Evidence References */}
                <div className="space-y-1">
                  <p className="text-white/50 text-xs">Evidence</p>
                  {['SOV Analysis', 'Loss Run Report', 'Inspection Report'].map((item) => (
                    <p key={item} className="text-blue-400 text-xs hover:underline cursor-pointer">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Workflow Strip */}
      <section className="py-16 lg:py-20 bg-gray-50 border-y border-black/10">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-10">
            <p className="text-black/60 text-xs font-light tracking-[0.3em] uppercase">
              Underwriting Workflow
            </p>
          </div>
          <div className="lg:pl-28">
            <div className="flex flex-wrap justify-between items-center gap-4">
              {workflowSteps.map((step, index) => (
                <div key={step.label} className="flex items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center mb-2">
                      <span className="text-white font-light text-xs sm:text-sm">{step.label}</span>
                    </div>
                    <p className="text-black/50 text-xs hidden sm:block">{step.description}</p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-black/30 mx-2 sm:mx-4 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sections 4-6: Feature Blocks */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-16 lg:mb-20">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-black/30" />
            <div className="pl-6">
              <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Capabilities
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed">
                Consistent decisions, complete transparency
              </h2>
            </div>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {featureBlocks.map((feature, index) => {
              const isEven = index % 2 === 0
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className={`${feature.highlighted ? 'bg-gray-50 -mx-4 lg:-mx-8 px-4 lg:px-8 py-16 lg:py-20' : ''}`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content - alternates position */}
                    <div className={`relative ${isEven ? 'lg:order-1 lg:pl-28' : 'lg:order-2 lg:pl-12'}`}>
                      <div className={`absolute ${isEven ? 'left-0 lg:left-28' : 'left-0 lg:left-12'} top-0 h-32 w-[2px] bg-black/30`} />
                      <div className="pl-6">
                        {feature.highlighted && (
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-4">
                            Core Differentiator
                          </span>
                        )}
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-black leading-relaxed mb-6">
                          {feature.title}
                        </h3>
                        <p className="text-black/70 font-light leading-relaxed mb-6">
                          {feature.description}
                        </p>
                        <div className="space-y-4 text-black/70 font-light leading-relaxed">
                          <p><strong className="text-black">Inputs:</strong> {feature.inputs}</p>
                          <p><strong className="text-black">Outputs:</strong> {feature.outputs}</p>
                          {feature.controls && (
                            <p><strong className="text-black">Controls:</strong> {feature.controls}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Visual - alternates position */}
                    <div className={`flex ${isEven ? 'lg:order-2 justify-center lg:justify-end' : 'lg:order-1 justify-center lg:justify-start'}`}>
                      {feature.highlighted ? (
                        // Guideline Check Detail Mockup
                        <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 w-full max-w-md">
                          <p className="text-white/60 text-xs font-light tracking-[0.2em] mb-6 uppercase">
                            Guideline Results
                          </p>

                          {/* Check Results */}
                          <div className="space-y-3 mb-6">
                            <div className="bg-green-600/10 border border-green-500/20 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-white text-sm">Construction Type</span>
                              </div>
                              <p className="text-white/60 text-xs">Fire-resistive (ISO Class 6) within appetite</p>
                            </div>
                            <div className="bg-green-600/10 border border-green-500/20 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-white text-sm">Protection Class</span>
                              </div>
                              <p className="text-white/60 text-xs">Class 3 - Meets minimum requirement</p>
                            </div>
                            <div className="bg-red-600/10 border border-red-500/20 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle className="w-4 h-4 text-red-400" />
                                <span className="text-white text-sm">Flood Zone</span>
                              </div>
                              <p className="text-white/60 text-xs">Zone AE - Requires senior review per GL-2024-03</p>
                            </div>
                          </div>

                          {/* Reason Code */}
                          <div className="bg-white/5 rounded-lg p-3">
                            <p className="text-white/50 text-xs mb-1">Referral Reason Code</p>
                            <p className="text-yellow-400 text-sm font-mono">REF-FLOOD-001</p>
                          </div>
                        </div>
                      ) : (
                        <div className={`w-32 h-32 rounded-2xl flex items-center justify-center bg-black`}>
                          <Icon className="w-16 h-16 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Integrations Band (PAS) */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-12 lg:mb-16">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-black/30" />
            <div className="pl-6">
              <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Policy Admin Integrations
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed mb-6">
                Native integration with your policy admin system
              </h2>
              <p className="text-black/70 font-light max-w-xl">
                Connect directly to your existing policy administration system without replacing your infrastructure.
              </p>
            </div>
          </div>

          <div className="lg:pl-28">
            {/* Platform Logos */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-12 max-w-xl">
              {['Duck Creek Policy', 'Guidewire PolicyCenter', 'Majesco'].map((platform) => (
                <div key={platform} className="bg-white border border-black/10 rounded-xl p-4 lg:p-6 text-center">
                  <span className="text-xs lg:text-sm font-medium text-black/70">{platform}</span>
                </div>
              ))}
            </div>

            {/* Integration Capabilities */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              {integrationBullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-black/70 font-light text-sm">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: CTA Band */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-6">
            See underwriting decisioning in action
          </h2>
          <p className="text-white/60 font-light mb-10 max-w-xl mx-auto">
            Book a personalized demo to see how IntelliHuman can standardize your underwriting decisions while improving turnaround time.
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
