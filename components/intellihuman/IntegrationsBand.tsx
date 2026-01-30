import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'

interface Integration {
  name: string
  logo?: string
}

interface IntegrationsBandProps {
  eyebrow?: string
  headline: string
  body?: string
  integrations: Integration[]
  bullets?: string[]
  ctaText?: string
  ctaHref?: string
  variant?: 'dark' | 'light'
}

// Default integration bullets as specified in the doc
const defaultBullets = [
  'Read/write claim and policy objects',
  'Ingest attachments, notes, and forms',
  'Route queues and create tasks',
  'Export decisions and audit traces',
]

export function IntegrationsBand({
  eyebrow = 'INTEGRATIONS',
  headline,
  body,
  integrations,
  bullets = defaultBullets,
  ctaText,
  ctaHref,
  variant = 'light',
}: IntegrationsBandProps) {
  const isDark = variant === 'dark'

  return (
    <section className={`py-20 lg:py-28 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            {/* Eyebrow */}
            <p
              className={`text-sm font-medium tracking-widest uppercase mb-4 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              {eyebrow}
            </p>

            {/* Headline */}
            <h2
              className={`text-3xl md:text-4xl font-semibold leading-tight mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {headline}
            </h2>

            {/* Body */}
            {body && (
              <p className={`leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {body}
              </p>
            )}

            {/* Bullets */}
            <ul className="space-y-3 mb-8">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`}
                  />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {ctaText && ctaHref && (
              <Link
                href={ctaHref}
                className={`inline-flex items-center gap-2 font-medium transition-all duration-200 hover:gap-3 group ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {ctaText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-6 rounded-xl ${
                  isDark ? 'bg-gray-900' : 'bg-white shadow-sm'
                }`}
              >
                {integration.logo ? (
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={120}
                    height={48}
                    className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ) : (
                  <span
                    className={`text-sm font-medium ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {integration.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
