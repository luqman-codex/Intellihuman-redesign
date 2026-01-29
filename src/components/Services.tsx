import { Car, Radio, Eye, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'AUTONOMOUS DRIVING',
    description:
      'Experience the future of transportation with our fully autonomous driving system. Our vehicles navigate complex environments with precision and safety, using advanced AI algorithms and real-time decision making.',
  },
  {
    icon: Radio,
    title: 'REAL-TIME INFORMATION',
    description:
      'Stay connected with instant access to traffic updates, route optimization, and vehicle diagnostics. Our integrated system provides comprehensive data to ensure the smoothest journey possible.',
  },
  {
    icon: Eye,
    title: 'PERCEPTION ENABLED',
    description:
      'Advanced sensor fusion technology combines LiDAR, radar, and cameras to create a 360-degree view of the environment. Our perception system detects and classifies objects with unprecedented accuracy.',
  },
]

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0f1629]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-[#00A8E8] font-open-sans text-sm font-semibold tracking-widest mb-4">
            SERVICES
          </p>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            We Deliver Exceptional Products and Services Around the World
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-[#1a1a2e] p-8 h-full flex flex-col transition-all duration-300 hover:bg-[#1f1f3a] hover:translate-y-[-4px] border-b-2 border-transparent hover:border-[#00A8E8]">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#00A8E8]/10 flex items-center justify-center mb-6 group-hover:bg-[#00A8E8]/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[#00A8E8]" />
                </div>

                {/* Content */}
                <h3 className="font-oswald text-xl font-semibold text-white mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="font-open-sans text-white/60 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#00A8E8] font-open-sans font-semibold text-sm tracking-wider group-hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
