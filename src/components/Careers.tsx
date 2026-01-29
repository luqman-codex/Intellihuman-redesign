import { ArrowRight, MapPin } from 'lucide-react'

const Careers = () => {
  return (
    <section id="careers" className="py-24 lg:py-32 bg-[#0f1629]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-[#00A8E8] font-open-sans text-sm font-semibold tracking-widest mb-4">
            CAREERS
          </p>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6">
            We're looking for innovative talent to join our team
          </h2>
          <p className="font-open-sans text-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
            See all positions and submit your CV.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#00A8E8] text-[#00A8E8] font-open-sans font-semibold text-sm tracking-wider hover:bg-[#00A8E8] hover:text-white transition-all duration-300"
          >
            Openings
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Job Listing */}
        <div className="max-w-3xl mx-auto reveal">
          <div className="bg-[#1a1a2e] p-8 lg:p-10 transition-all duration-300 hover:bg-[#1f1f3a] border-l-4 border-[#00A8E8]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="font-oswald text-2xl font-semibold text-white mb-2">
                  ELECTRICAL ENGINEER
                </h3>
                <div className="flex items-center gap-2 text-white/50">
                  <MapPin className="w-4 h-4" />
                  <span className="font-open-sans text-sm">San Francisco, CA</span>
                </div>
                <p className="font-open-sans text-white/60 leading-relaxed mt-4">
                  Join our team to design and develop cutting-edge electrical systems for our 
                  autonomous vehicles. You'll work with advanced sensor arrays, power management 
                  systems, and vehicle electronics.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A8E8] text-white font-open-sans font-semibold text-sm tracking-wider hover:bg-[#00D4FF] transition-all duration-300 group"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers
