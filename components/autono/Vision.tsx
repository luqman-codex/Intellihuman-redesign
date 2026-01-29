"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function Vision() {
  const sectionRef = useRef<HTMLElement>(null)
  const [carOffset, setCarOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate how far into the section we've scrolled
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height)
        // Convert to horizontal movement (-50px to +50px range)
        const offset = (scrollProgress - 0.5) * 100
        setCarOffset(offset)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id="vision" className="py-20 lg:py-28 bg-black overflow-hidden">
      <div className="w-full px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <div className="relative lg:pl-28">
            {/* Left border accent */}
            <div className="absolute left-0 lg:left-28 top-0 bottom-0 w-[2px] bg-white/80" />

            <div className="pl-6">
              <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-10 uppercase">
                Vision
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-loose mb-12">
                <span className="block mb-3">We're Changing the</span>
                <span className="block mb-3">Way the World Thinks</span>
                <span className="block">About Cars</span>
              </h2>
              <p className="text-white font-light leading-loose text-sm max-w-sm">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
              </p>
            </div>
          </div>

          {/* Image Side - with scroll-based movement, much larger */}
          <div className="relative flex justify-center lg:justify-end lg:-mr-20">
            <Image
              src="/Assets/sec-2.png"
              alt="Autonomous Vehicle Vision"
              width={1000}
              height={850}
              className="w-full max-w-3xl lg:max-w-4xl h-auto object-contain scale-125 lg:scale-150 transition-transform duration-100 ease-out"
              style={{ transform: `translateX(${carOffset}px)` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
