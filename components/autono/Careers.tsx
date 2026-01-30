"use client"

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const jobs = [
  {
    title: 'SENIOR ML ENGINEER',
    location: 'Remote (US)',
    description: "Build and optimize ML models for insurance document understanding, entity extraction, and decision reasoning. Work on production systems processing millions of claims.",
  },
  {
    title: 'INSURANCE DOMAIN EXPERT',
    location: 'Remote (US)',
    description: "Shape our insurance ontology and knowledge systems. Translate complex claims and underwriting workflows into structured rules and decision logic.",
  },
  {
    title: 'FULL STACK ENGINEER',
    location: 'Remote (US)',
    description: "Build enterprise-grade applications that help adjusters and underwriters make better decisions. React, TypeScript, and modern cloud infrastructure.",
  },
  {
    title: 'PRODUCT MANAGER',
    location: 'Remote (US)',
    description: "Define and deliver product capabilities that solve real problems for claims and underwriting teams. Work closely with customers and engineering.",
  },
  {
    title: 'SOLUTIONS ARCHITECT',
    location: 'Remote (US)',
    description: "Design and implement integrations with leading insurance platforms. Help customers deploy IntelliHuman to transform their operations.",
  },
]

export function Careers() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate jobs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % jobs.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="careers" className="py-32 lg:py-44 bg-black">
      {/* Top divider line */}
      <div className="w-full h-[2px] bg-white mb-20 lg:mb-28" />

      <div className="w-full px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Content Side */}
          <div className="relative lg:pl-28">
            {/* Left border accent */}
            <div className="absolute left-0 lg:left-28 top-0 h-48 w-[2px] bg-white/30" />

            <div className="pl-6">
              <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-10 uppercase">
                Careers
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed mb-16">
                Join our team and help
                <br />
                transform how insurance
                <br />
                decisions are made.
                <br />
                See all positions.
              </h2>
              <button className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-white font-light text-sm tracking-wide hover:border-white hover:bg-white hover:text-black transition-all duration-300 group">
                Openings
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Job Card Slider */}
          <div className="relative max-w-md lg:max-w-lg ml-auto -mt-8 lg:-mt-12">
            {/* Job Card */}
            <div className="border-2 border-white rounded-2xl p-10 lg:p-14 min-h-[450px] lg:min-h-[500px] flex flex-col transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-light text-white tracking-wider mb-10">
                {jobs[currentIndex].title}
              </h3>
              <p className="text-white/40 text-sm mb-10">
                {jobs[currentIndex].location}
              </p>
              <p className="text-white font-light leading-loose text-base mb-12 flex-grow">
                {jobs[currentIndex].description}
              </p>
              <button className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-white font-light text-sm tracking-wide hover:border-white hover:bg-white hover:text-black transition-all duration-300 group w-fit">
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {jobs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to job ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
