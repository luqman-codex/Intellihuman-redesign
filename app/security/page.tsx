import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Lock, Shield, Users, FileText, Clock, Eye, Settings, CheckCircle, Database, Server } from 'lucide-react'
import { Navbar } from "@/components/autono/Navbar"
import { Footer } from "@/components/autono/Footer"

export const metadata: Metadata = {
  title: 'Security & Compliance | IntelliHuman - Enterprise-Grade Protection',
  description: 'Enterprise-grade security with encryption, RBAC, tenant isolation, complete audit trails, and governance controls built in.',
  openGraph: {
    title: 'Security & Compliance | IntelliHuman',
    description: 'Enterprise-grade security you can trust.',
    type: 'website',
  },
}

// Security foundations from spec
const securityFoundations = [
  {
    title: 'Encryption',
    description: 'AES-256 encryption at rest and TLS 1.3 in transit for all data',
    icon: Lock,
  },
  {
    title: 'Role-Based Access Control',
    description: 'Granular permissions with role hierarchies and least-privilege principles',
    icon: Users,
  },
  {
    title: 'Tenant Isolation',
    description: 'Complete data isolation between customers with dedicated encryption keys',
    icon: Shield,
  },
  {
    title: 'Comprehensive Logging',
    description: 'All actions logged with timestamps, user IDs, and full context',
    icon: FileText,
  },
  {
    title: 'Configurable Retention',
    description: 'Flexible data retention policies to meet your compliance requirements',
    icon: Clock,
  },
]

// Auditability features from spec
const auditabilityFeatures = [
  'Evidence-linked decision trace for every recommendation',
  'Complete override history with documented reasoning',
  'Exportable audit packages for regulators and disputes',
  'Immutable audit logs with tamper detection',
]

// Governance controls from spec
const governanceControls = [
  {
    title: 'Configurable Thresholds',
    description: 'Set confidence thresholds that trigger human review',
    icon: Settings,
  },
  {
    title: 'Approval Workflows',
    description: 'Multi-level approvals for high-value or complex decisions',
    icon: CheckCircle,
  },
  {
    title: 'Real-time Monitoring',
    description: 'Dashboard visibility into decision quality and model performance',
    icon: Eye,
  },
  {
    title: 'Change Management',
    description: 'Versioned rules and guidelines with full deployment history',
    icon: FileText,
  },
]

// Data handling bullets from spec
const dataHandlingBullets = [
  'Minimal retention - only what you need, for as long as you need it',
  'Configurable storage locations to meet data residency requirements',
  'Export audit logs to your SIEM or compliance systems',
  'No training on customer data - your data stays yours',
]

// Integration bullets from spec
const integrationBullets = [
  'Read/write claim and policy objects',
  'Ingest attachments, notes, and forms',
  'Route queues and create tasks',
  'Export decisions and audit traces',
]

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="light" />

      {/* Section 1: Hero */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-16 sm:pb-20 md:pb-24 lg:pb-32 min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80"
            alt="Security background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-6 sm:mb-8 uppercase">
            Security & Compliance
          </p>
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-light text-white leading-[1.3] tracking-[0.05em] mb-6 sm:mb-8 md:mb-10">
            Enterprise-grade security
            <br />
            you can trust
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-light text-white/70 leading-[1.8] max-w-2xl mx-auto mb-10">
            Built with security, auditability, and governance at the core. Every decision is defensible, every action is logged.
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

      {/* Section 2: Security Foundations - Grid */}
      <section className="bg-black py-20 lg:py-28">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-16">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-white/30" />
            <div className="pl-6">
              <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Security Foundations
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed">
                Built secure from the ground up
              </h2>
            </div>
          </div>

          <div className="lg:pl-28">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFoundations.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-light text-lg mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Auditability - Text + UI */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="relative lg:pl-28">
              <div className="absolute left-0 lg:left-28 top-0 h-32 w-[2px] bg-black/30" />
              <div className="pl-6">
                <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                  Complete Auditability
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed mb-6">
                  Every decision is defensible
                </h2>
                <p className="text-black/70 font-light leading-relaxed mb-8">
                  Complete audit trails ensure you can explain and defend every decision made by the platform, from initial input to final recommendation.
                </p>
                <ul className="space-y-4">
                  {auditabilityFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-black/70 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Audit Trail Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 w-full max-w-md">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-white/60 text-xs font-light tracking-[0.2em] uppercase">
                    Audit Trail
                  </p>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                    Exportable
                  </span>
                </div>

                {/* Decision ID */}
                <div className="bg-white/5 rounded-lg p-3 mb-4">
                  <p className="text-white/50 text-xs mb-1">Decision ID</p>
                  <p className="text-white font-mono text-sm">DEC-2024-48291-A</p>
                </div>

                {/* Timeline */}
                <div className="space-y-3 mb-4">
                  <p className="text-white/50 text-xs">Activity Timeline</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-white/80 text-xs">Decision generated</p>
                        <p className="text-white/40 text-xs">Jan 15, 2024 09:23:41 UTC</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-white/80 text-xs">Reviewed by Jane Smith</p>
                        <p className="text-white/40 text-xs">Jan 15, 2024 10:15:22 UTC</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-white/80 text-xs">Approved - No override</p>
                        <p className="text-white/40 text-xs">Jan 15, 2024 10:16:03 UTC</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Evidence Count */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-white text-lg font-light">4</p>
                    <p className="text-white/50 text-xs">Documents</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-white text-lg font-light">12</p>
                    <p className="text-white/50 text-xs">Rules</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-white text-lg font-light">0</p>
                    <p className="text-white/50 text-xs">Overrides</p>
                  </div>
                </div>

                {/* Export Button */}
                <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-light transition-colors">
                  Export Audit Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Governance Controls - Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-4 lg:px-8">
          <div className="relative lg:pl-28 mb-16 lg:mb-20">
            <div className="absolute left-0 lg:left-28 top-0 h-24 w-[2px] bg-black/30" />
            <div className="pl-6">
              <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                Governance Controls
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-relaxed">
                Full control over AI decisions
              </h2>
            </div>
          </div>

          <div className="lg:pl-28">
            <div className="grid md:grid-cols-2 gap-6">
              {governanceControls.map((control) => {
                const Icon = control.icon
                return (
                  <div
                    key={control.title}
                    className="bg-white border border-black/10 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-light text-black mb-2">{control.title}</h3>
                        <p className="text-black/70 font-light text-sm leading-relaxed">
                          {control.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Data Handling + Integrations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Data Handling */}
            <div className="relative lg:pl-28">
              <div className="absolute left-0 lg:left-28 top-0 h-32 w-[2px] bg-black/30" />
              <div className="pl-6">
                <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                  Data Handling
                </p>
                <h3 className="text-xl md:text-2xl font-light text-black leading-relaxed mb-8">
                  Your data, your control
                </h3>
                <ul className="space-y-4">
                  {dataHandlingBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-black/60 mt-0.5 flex-shrink-0" />
                      <span className="text-black/70 font-light text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Integrations */}
            <div className="relative lg:pl-12">
              <div className="absolute left-0 lg:left-12 top-0 h-32 w-[2px] bg-black/30" />
              <div className="pl-6">
                <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                  Platform Integrations
                </p>
                <h3 className="text-xl md:text-2xl font-light text-black leading-relaxed mb-8">
                  Secure integrations with your systems
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {['Duck Creek', 'Guidewire', 'Majesco'].map((platform) => (
                    <div key={platform} className="bg-gray-50 border border-black/10 rounded-xl p-4 lg:p-6 text-center">
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

      {/* Section 6: CTA Band */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-6">
            See our security in action
          </h2>
          <p className="text-white/60 font-light mb-10 max-w-xl mx-auto">
            Book a demo to see how IntelliHuman's security and governance features meet enterprise requirements.
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
