import { ArrowRight } from 'lucide-react'

const WhyAutono = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="reveal lg:order-2">
            <p className="text-[#00A8E8] font-open-sans text-sm font-semibold tracking-widest mb-4">
              WHY AUTONO
            </p>
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              A different approach, using a new method of manufacturing.
            </h2>
            <p className="font-open-sans text-white/60 leading-relaxed text-lg mb-8">
              We believe in pushing the boundaries of what's possible. Our innovative manufacturing 
              process combines cutting-edge robotics with sustainable materials to create vehicles 
              that are not only technologically advanced but also environmentally responsible. 
              Every component is designed with precision and purpose.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00A8E8] text-white font-open-sans font-semibold text-sm tracking-wider hover:bg-[#00D4FF] transition-all duration-300 group"
            >
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Image Side */}
          <div className="reveal lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a2e] to-[#0f1629] rounded-sm overflow-hidden">
                {/* Placeholder for manufacturing/tech image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 border-2 border-[#00A8E8]/30 rounded-full flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-[#00A8E8]/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <p className="text-white/30 font-open-sans text-sm">Advanced Manufacturing</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#00A8E8] to-transparent" />
                <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-b from-[#00A8E8] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAutono
