const Vision = () => {
  return (
    <section id="vision" className="py-24 lg:py-32 bg-[#0a0a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="reveal">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a2e] to-[#0f1629] rounded-sm overflow-hidden">
                {/* Placeholder for car image */}
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
                          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                        />
                      </svg>
                    </div>
                    <p className="text-white/30 font-open-sans text-sm">Autonomous Vehicle</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A8E8] to-transparent" />
                <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-[#00A8E8] to-transparent" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="reveal">
            <p className="text-[#00A8E8] font-open-sans text-sm font-semibold tracking-widest mb-4">
              VISION
            </p>
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              We're Changing the Way the World Thinks About Cars
            </h2>
            <p className="font-open-sans text-white/60 leading-relaxed text-lg">
              Our vision is to revolutionize transportation through cutting-edge autonomous technology. 
              We're committed to creating vehicles that are not only self-driving but also safer, 
              more efficient, and environmentally conscious. By combining artificial intelligence 
              with advanced sensor systems, we're paving the way for a future where mobility is 
              accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
