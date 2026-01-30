'use client'

import { useEffect, useState, useRef } from 'react'

interface Metric {
  value: string
  label: string
}

interface MetricsStripProps {
  metrics: Metric[]
  variant?: 'dark' | 'light'
}

function AnimatedMetric({ value, label, isDark }: { value: string; label: string; isDark: boolean }) {
  const [displayValue, setDisplayValue] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          // Check if value contains a number to animate
          const numMatch = value.match(/(\d+)/)
          if (numMatch) {
            const targetNum = parseInt(numMatch[1])
            const prefix = value.slice(0, value.indexOf(numMatch[1]))
            const suffix = value.slice(value.indexOf(numMatch[1]) + numMatch[1].length)

            let start = 0
            const duration = 1500
            const increment = targetNum / (duration / 16)

            const animate = () => {
              start += increment
              if (start < targetNum) {
                setDisplayValue(`${prefix}${Math.floor(start)}${suffix}`)
                requestAnimationFrame(animate)
              } else {
                setDisplayValue(value)
              }
            }
            animate()
          } else {
            setDisplayValue(value)
          }
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-center px-6 py-8">
      <div
        className={`text-4xl md:text-5xl font-semibold mb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {displayValue}
      </div>
      <div
        className={`text-sm font-medium uppercase tracking-wider ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}
      >
        {label}
      </div>
    </div>
  )
}

export function MetricsStrip({ metrics, variant = 'light' }: MetricsStripProps) {
  const isDark = variant === 'dark'

  return (
    <section className={`py-16 lg:py-20 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {metrics.map((metric, index) => (
            <AnimatedMetric
              key={index}
              value={metric.value}
              label={metric.label}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
