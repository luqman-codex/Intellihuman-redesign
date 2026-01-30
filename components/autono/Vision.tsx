"use client"

import Image from 'next/image'

export function Vision() {
  return (
    <section id="vision" className="py-20 lg:py-28 bg-black overflow-hidden">
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
                <span className="block mb-3">We're Changing How</span>
                <span className="block mb-3">Insurance Companies</span>
                <span className="block">Make Decisions</span>
              </h2>
              <p className="text-white font-light leading-loose text-sm max-w-sm">
                IntelliHuman combines AI precision with human judgment to deliver insurance decisions that are faster, more consistent, and fully defensible. Every recommendation comes with clear evidence and reasoning you can trust.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/Assets/page1/page1-section2.jpg"
              alt="AI Insurance Vision"
              width={1000}
              height={850}
              className="w-full max-w-2xl lg:max-w-3xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
