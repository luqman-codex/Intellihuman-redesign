import Link from 'next/link'

interface CTABandProps {
  headline: string
  subheadline?: string
  ctaText?: string
  ctaHref?: string
  variant?: 'dark' | 'light'
}

export function CTABand({
  headline,
  subheadline,
  ctaText = 'Request Demo',
  ctaHref = '/demo',
  variant = 'dark',
}: CTABandProps) {
  const isDark = variant === 'dark'

  return (
    <section className={`py-20 lg:py-28 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2
          className={`text-3xl md:text-4xl font-semibold leading-tight mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {headline}
        </h2>

        {/* Subheadline */}
        {subheadline && (
          <p
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {subheadline}
          </p>
        )}

        {/* CTA Button */}
        <Link
          href={ctaHref}
          className={`inline-flex px-8 py-4 font-medium rounded-lg transition-all duration-200 hover:shadow-lg ${
            isDark
              ? 'bg-white text-gray-900 hover:bg-gray-100'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
