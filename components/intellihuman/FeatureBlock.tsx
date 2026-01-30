import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { ReactNode } from 'react'

interface FeatureBlockProps {
  title: string
  description?: string
  bullets?: string[]
  ctaText?: string
  ctaHref?: string
  visual: ReactNode
  visualPosition?: 'left' | 'right'
  background?: 'white' | 'gray'
}

export function FeatureBlock({
  title,
  description,
  bullets,
  ctaText,
  ctaHref,
  visual,
  visualPosition = 'right',
  background = 'white',
}: FeatureBlockProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white'

  const contentSection = (
    <div className="lg:py-8">
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mb-4">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
          {description}
        </p>
      )}

      {/* Bullets */}
      {bullets && bullets.length > 0 && (
        <ul className="space-y-3 mb-8">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {ctaText && ctaHref && (
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 text-gray-900 font-medium transition-all duration-200 hover:gap-3 group"
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
    <section className={`${bgClass} py-16 lg:py-24`}>
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
