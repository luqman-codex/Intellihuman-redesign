'use client';

import { useEffect, useState, useRef } from 'react'

const stats = [
  { value: 200, label: 'EMPLOYEES', suffix: '' },
  { value: 5, label: 'CORE TEAMS', suffix: '' },
  { value: 200, label: 'CAPITAL', suffix: 'M$' },
  { value: 326, label: 'PARTNERS', suffix: '' },
]

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
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
    <div ref={ref} className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold text-white">
      {displayValue}
      {suffix && <span className="text-[#00A8E8]">{suffix}</span>}
    </div>
  )
}

const Stats = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#0f1629] relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white">
            Autono In Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="reveal text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="font-open-sans text-sm text-white/50 tracking-widest mt-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
