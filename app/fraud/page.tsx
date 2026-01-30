import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Users, Activity, CheckCircle, Shield, FileText, Zap, Settings } from 'lucide-react'
import { Navbar } from "@/components/autono/Navbar"
import { Footer } from "@/components/autono/Footer"

export const metadata: Metadata = {
  title: 'Fraud & Risk Signals | IntelliHuman - Evidence-Backed Detection',
  description: 'Detect fraud early with evidence-backed signals that investigators can act on. Inconsistency detection, behavioral anomalies, and relationship intelligence.',
  openGraph: {
    title: 'Fraud & Risk Signals | IntelliHuman',
    description: 'Evidence-backed fraud signals investigators can act on.',
    type: 'website',
  },
}

// Signal categories from spec
const signalCategories = [
  {
    title: 'Inconsistency Detection',
    description: 'Identify contradictions between documents, statements, and system records automatically.',
    examples: ['Statement vs. document conflicts', 'Timeline inconsistencies', 'Value discrepancies'],
    icon: AlertTriangle,
  },
  {
    title: 'Behavioral Anomalies',
    description: 'Flag unusual patterns based on historical data and industry benchmarks.',
    examples: ['Claim frequency patterns', 'Timing anomalies', 'Geographic clustering'],
    icon: Activity,
  },
  {
    title: 'Relationship Intelligence',
    description: 'Uncover hidden connections between parties, providers, and past claims.',
    examples: ['Provider networks', 'Claimant associations', 'Cross-claim patterns'],
    icon: Users,
  },
]

// Investigator outputs from spec
const investigatorOutputs = [
  {
    title: 'Risk Summary',
    description: 'Overall fraud risk score with contributing factors ranked by significance',
    icon: Shield,
  },
  {
    title: 'Evidence Highlights',
    description: 'Key documents and data points that triggered each signal with direct links',
    icon: FileText,
  },
  {
    title: 'Next Actions',
    description: 'Recommended investigation steps based on signal type and severity',
    icon: Zap,
  },
  {
    title: 'Audit Trace',
    description: 'Complete history of signal generation, reviews, and outcomes for compliance',
    icon: CheckCircle,
  },
]

// Controls from spec
const controls = [
  {
    title: 'Configurable Thresholds',
    description: 'Set sensitivity levels for each signal type based on your risk tolerance and team capacity.',
  },
  {
    title: 'Feedback Loop',
    description: 'Investigation outcomes improve signal accuracy over time through continuous learning.',
  },
  {
    title: 'Escalation Rules',
    description: 'Automatic routing to SIU based on risk scores, signal combinations, or claim characteristics.',
  },
]

// Integration bullets from spec
const integrationBullets = [
  'Read/write claim and policy objects',
  'Ingest attachments, notes, and forms',
  'Route queues and create tasks',
  'Export decisions and audit traces',
]

export default function FraudPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="light" />

      {/* Section 1: Hero */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80"
            alt="Fraud detection background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-6 sm:mb-8 uppercase">
            Fraud & Risk Signals
          </p>
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-light text-white leading-[1.3] tracking-[0.05em] mb-6 sm:mb-8 md:mb-10">
            Evidence-backed fraud signals
            <br />
            investigators can act on
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-light text-white/70 leading-[1.8] max-w-2xl mx-auto mb-10">
            Detect inconsistencies early with signals that come with full evidence trails, enabling faster and more accurate investigations.
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

      {/* Section 2: Dark Narrative Band with Fraud Signals Dashboard */}
      <section className="bg-black py-20 lg:py-28">
        <div className="w-full px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="relative lg:pl-28">
              <div className="absolute left-0 lg:left-28 top-0 bottom-0 w-[2px] bg-white/80" />
              <div className="pl-6">
                <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-10 uppercase">
                  SIU + Claims Leadership
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-loose mb-12">
                  <span className="block mb-3">Evidence-backed fraud signals</span>
                  <span className="block">investigators can act on.</span>
                </h2>
                <ul className="space-y-4 mb-10">
                  {['Inconsistency detection', 'Behavioral anomalies', 'Relationship intelligence'].map((item) => (
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

            {/* Fraud Signals Dashboard UI Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 w-full max-w-md">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-white/60 text-xs font-light tracking-[0.2em] uppercase">
                    Fraud Signals
                  </p>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">
                    High Risk
                  </span>
                </div>

                {/* Risk Summary */}
                <div className="bg-red-600/10 border border-red-500/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white/50 text-xs">Risk Score</p>
                    <span className="text-red-400 text-lg font-medium">87/100</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '87%' }} />
                  </div>
                </div>

                {/* Top 3 Signals */}
                <div className="space-y-2 mb-4">
                  <p className="text-white/50 text-xs">Top Signals</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span className="text-white/80 text-xs">Statement Contradiction</span>
                      </div>
                      <span className="text-red-400 text-xs">+32</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-orange-400" />
                        <span className="text-white/80 text-xs">Claim Timing Pattern</span>
                      </div>
                      <span className="text-orange-400 text-xs">+28</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-yellow-400" />
                        <span className="text-white/80 text-xs">Provider Network Link</span>
                      </div>
                      <span className="text-yellow-400 text-xs">+18</span>
                    </div>
                  </div>
                </div>

                {/* Evidence Highlights */}
                <div className="bg-white/5 rounded-lg p-3 mb-4">
                  <p className="text-white/50 text-xs mb-2">Evidence Highlights</p>
                  <div className="space-y-1 text-xs">
                    <p className="text-blue-400 hover:underline cursor-pointer">FNOL Statement (line 23)</p>
                    <p className="text-blue-400 hover:underline cursor-pointer">Police Report Conflict</p>
                    <p className="text-blue-400 hover:underline cursor-pointer">Provider History (3 prior claims)</p>
                  </div>
                </div>

                {/* Next Action */}
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3">
                  <p className="text-blue-400 text-xs mb-1">Recommended Action</p>
                  <p className="text-white font-light text-sm">Create SIU Investigation Task</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Signal Categories - 3 Column Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-16 lg:mb-20">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-black/30" />
            <div className="pl-6">
              <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Signal Categories
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed">
                Three dimensions of fraud detection
              </h2>
            </div>
          </div>

          <div className="lg:pl-28">
            <div className="grid md:grid-cols-3 gap-8">
              {signalCategories.map((category) => {
                const Icon = category.icon
                return (
                  <div key={category.title} className="bg-gray-50 rounded-2xl p-8">
                    <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-light text-black mb-4">{category.title}</h3>
                    <p className="text-black/70 font-light text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.examples.map((example) => (
                        <li key={example} className="flex items-center gap-2 text-sm text-black/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Investigator Outputs - UI Card Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-12 lg:mb-16">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-black/30" />
            <div className="pl-6">
              <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Investigator Outputs
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed">
                Everything investigators need to act
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:pl-28">
            {investigatorOutputs.map((output) => {
              const Icon = output.icon
              return (
                <div
                  key={output.title}
                  className="bg-white border border-black/10 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-light text-black mb-3">{output.title}</h3>
                  <p className="text-sm text-black/60 font-light leading-relaxed">{output.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Controls */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-12 lg:mb-16">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-black/30" />
            <div className="pl-6">
              <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Governance Controls
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed">
                Full control over signal sensitivity
              </h2>
            </div>
          </div>

          <div className="lg:pl-28">
            <div className="grid md:grid-cols-3 gap-8">
              {controls.map((control, index) => (
                <div key={control.title} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-black mb-2">{control.title}</h3>
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

      {/* Section 6: Integrations Band */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-12 lg:mb-16">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-black/30" />
            <div className="pl-6">
              <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Platform Integrations
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed mb-6">
                Integrate with your existing systems
              </h2>
              <p className="text-black/70 font-light max-w-xl">
                Connect directly to your claims and policy systems without replacing your infrastructure.
              </p>
            </div>
          </div>

          <div className="lg:pl-28">
            {/* Platform Logos */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-12 max-w-xl">
              {['Duck Creek', 'Guidewire', 'Majesco'].map((platform) => (
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

      {/* Section 7: CTA Band */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-6">
            See fraud detection in action
          </h2>
          <p className="text-white/60 font-light mb-10 max-w-xl mx-auto">
            Book a personalized demo to see how IntelliHuman can help your SIU detect fraud earlier with evidence-backed signals.
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
