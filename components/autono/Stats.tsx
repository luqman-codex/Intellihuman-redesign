'use client';

import { useEffect, useState, useRef } from 'react'

const stats = [
  { value: 200, label: 'EMPLOYEES', suffix: '' },
  { value: 5, label: 'CORE TEAMS', suffix: '' },
  { value: 200, label: 'CAPITAL', suffix: 'M$', prefixSuffix: true },
  { value: 326, label: 'PARTNERS', suffix: '' },
]

const AnimatedNumber = ({ value, suffix, prefixSuffix }: { value: number; suffix: string; prefixSuffix?: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)

          const animate = () => {
            start += increment
            if (start < value) {
              setDisplayValue(Math.floor(start))
              requestAnimationFrame(animate)
            } else {
              setDisplayValue(value)
            }
          }
          animate()
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
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-light text-black">
      {prefixSuffix ? (
        <>
          {displayValue}
          <span className="text-black">{suffix}</span>
        </>
      ) : (
        displayValue
      )}
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-32 lg:py-44 bg-white overflow-hidden">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Robot Arm Image - flush to left edge */}
          <div className="relative">
            <img
              src="/Assets/page1/page1-section5.jpg"
              alt="Robot Arm"
              className="w-full h-auto max-w-3xl lg:max-w-4xl -ml-4 lg:-ml-6"
            />
          </div>

          {/* Stats Content */}
          <div className="px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-16">
              Autono In Numbers
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
              {stats.map((stat, index) => (
                <div key={stat.label} className="relative">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    prefixSuffix={stat.prefixSuffix}
                  />
                  {/* Underline */}
                  <div className="w-16 h-px bg-gray-300 my-4" />
                  <p className="text-xs text-black tracking-[0.2em] font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
