import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'

interface ProofQuoteCardProps {
  quote: string
  attribution: {
    name: string
    title?: string
    company?: string
  }
  ctaText?: string
  ctaHref?: string
}

export function ProofQuoteCard({
  quote,
  attribution,
  ctaText,
  ctaHref,
}: ProofQuoteCardProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-950 rounded-2xl p-10 lg:p-14 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />

          {/* Quote Icon */}
          <Quote className="w-10 h-10 text-blue-500 mb-6 opacity-50" />

          {/* Quote Text */}
          <blockquote className="relative z-10">
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
              "{quote}"
            </p>

            {/* Attribution */}
            <footer className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <cite className="not-italic">
                  <span className="block text-white font-medium">{attribution.name}</span>
                  {(attribution.title || attribution.company) && (
                    <span className="block text-gray-400 text-sm mt-1">
                      {attribution.title}
                      {attribution.title && attribution.company && ', '}
                      {attribution.company}
                    </span>
                  )}
                </cite>
              </div>

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
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
