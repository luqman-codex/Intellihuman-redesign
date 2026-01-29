'use client';

import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToVision = () => {
    const element = document.querySelector('#vision')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/Hompeage/hero-car-1.avif')` }}
    >
      {/* Dark gradient from bottom to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-wide mb-6 slide-up">
          THE FUTURE OF
          <br />
          <span className="text-[#00A8E8]">MOBILITY IS HERE</span>
        </h1>
        
        <p className="font-open-sans text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 fade-in" style={{ animationDelay: '0.3s' }}>
          Discover the safest self-driving experience with Autono.
        </p>

        <button
          onClick={scrollToVision}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-[#00A8E8] text-white font-open-sans font-semibold text-sm tracking-wider rounded-none hover:bg-[#00D4FF] transition-all duration-300 fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          LEARN MORE
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
