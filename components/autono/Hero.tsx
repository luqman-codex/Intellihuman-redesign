"use client"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/Hompeage/hero-car-1.avif')` }}
    >
      {/* Dark gradient from bottom to top - strong at road level */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 via-20% to-transparent to-50%" />

      {/* Content - positioned in upper portion */}
      <div className="relative z-10 text-center px-6 pt-24 md:pt-28 lg:pt-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 tracking-[0.08em] mb-10">
          <span className="block mb-4">THE FUTURE OF</span>
          <span className="block">MOBILITY IS HERE</span>
        </h1>

        <p className="text-base md:text-lg text-gray-700 font-normal tracking-wide max-w-2xl mx-auto">
          Discover the safest self-driving experience with Autono.
        </p>
      </div>
    </section>
  )
}
