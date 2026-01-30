import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Background Image with Next.js optimization */}
      <Image
        src="/Assets/page1/page1-section1.jpg"
        alt="Insurance technology"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={85}
      />

      {/* Dark gradient from bottom to top - strong at road level */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 via-20% to-transparent to-50% z-[1]" />

      {/* Content - positioned in upper portion */}
      <div className="relative z-10 text-center px-6 pt-24 md:pt-28 lg:pt-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 tracking-[0.08em] mb-10">
          <span className="block mb-4">EXPLAINABLE</span>
          <span className="block">INSURANCE DECISIONS</span>
        </h1>

        <p className="text-base md:text-lg text-gray-700 font-normal tracking-wide max-w-2xl mx-auto">
          Automate claims and underwriting decisions with evidence-backed reasoning and audit-ready traceability.
        </p>
      </div>
    </section>
  )
}
