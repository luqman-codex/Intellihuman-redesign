const partners = [
  { name: 'GENERAL TRANSPORT', abbrev: 'GT' },
  { name: 'IDI SOFTWARE', abbrev: 'IDI' },
  { name: 'IMOGEN CARS', abbrev: 'IC' },
  { name: 'TRI-NEX', abbrev: 'TN' },
]

const Partners = () => {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-[#0a0a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-[#00A8E8] font-open-sans text-sm font-semibold tracking-widest mb-4">
            INDUSTRY
          </p>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6">
            Our Partners
          </h2>
          <p className="font-open-sans text-white/60 leading-relaxed max-w-2xl mx-auto">
            We collaborate with industry leaders to bring you the most advanced autonomous 
            vehicle technology. Our partnerships span across transportation, software, 
            automotive, and technology sectors.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-[#1a1a2e] p-8 lg:p-10 flex items-center justify-center aspect-[3/2] transition-all duration-300 hover:bg-[#1f1f3a] border border-transparent hover:border-[#00A8E8]/30">
                <div className="text-center">
                  {/* Logo placeholder */}
                  <div className="text-3xl lg:text-4xl font-oswald font-bold text-white/20 group-hover:text-[#00A8E8]/50 transition-colors duration-300 mb-2">
                    {partner.abbrev}
                  </div>
                  <p className="font-open-sans text-xs text-white/40 tracking-wider">
                    {partner.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
