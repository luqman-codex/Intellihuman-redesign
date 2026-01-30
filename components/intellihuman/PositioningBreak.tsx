import { ReactNode } from 'react'

interface PositioningBreakProps {
  eyebrow?: string
  headline: string
  body?: string
  diagram?: ReactNode
}

export function PositioningBreak({
  eyebrow,
  headline,
  body,
  diagram,
}: PositioningBreakProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-lg">
            {/* Eyebrow */}
            {eyebrow && (
              <p className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4">
                {eyebrow}
              </p>
            )}

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              {headline}
            </h2>

            {/* Body */}
            {body && (
              <p className="text-gray-600 leading-relaxed">
                {body}
              </p>
            )}
          </div>

          {/* Optional Diagram */}
          {diagram && (
            <div className="flex items-center justify-center">
              {diagram}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
