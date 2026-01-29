"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'

export function WhyAutono() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url('/Assets/sec-6.png')` }}
    >
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-4 lg:px-8">
          {/* Dark content card */}
          <div className="bg-black/90 p-8 md:p-12 lg:p-16 max-w-md lg:max-w-lg lg:ml-28">
            <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-8 uppercase">
              Why Autono
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8">
              A different approach, using a new method of manufacturing.
            </h2>
            <p className="text-white font-light leading-loose text-sm mb-10">
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
            <button className="inline-flex items-center gap-4 px-5 py-3 border border-white/30 text-white font-light text-sm tracking-wide hover:border-white hover:bg-white/10 transition-all duration-300 group">
              Read More
              <span className="flex items-center gap-1">
                <ChevronLeft className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
