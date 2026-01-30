import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { ReactNode } from 'react'

interface DarkNarrativeBandProps {
  eyebrow?: string
  headline: string
  body?: string
  bullets?: string[]
  ctaText?: string
  ctaHref?: string
  visual: ReactNode
  visualPosition?: 'left' | 'right'
}

export function DarkNarrativeBand({
  eyebrow,
  headline,
  body,
  bullets,
  ctaText,
  ctaHref,
  visual,
  visualPosition = 'right',
}: DarkNarrativeBandProps) {
  const contentSection = (
    <div className="lg:py-8">
      {/* Eyebrow */}
      {eyebrow && (
        <p className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}

      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
        {headline}
      </h2>

      {/* Body */}
      {body && (
        <p className="text-gray-300 leading-relaxed mb-6 max-w-lg">
          {body}
        </p>
      )}

      {/* Bullets */}
      {bullets && bullets.length > 0 && (
        <ul className="space-y-3 mb-8">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {ctaText && ctaHref && (
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 text-white font-medium transition-all duration-200 hover:gap-3 group"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  )

  const visualSection = (
    <div className="relative flex items-center justify-center">
      {visual}
    </div>
  )

  return (
    <section className="bg-gray-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {visualPosition === 'right' ? (
            <>
              {contentSection}
              {visualSection}
            </>
          ) : (
            <>
              {visualSection}
              {contentSection}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
