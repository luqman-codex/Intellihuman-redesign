import { ArrowRight } from 'lucide-react'
import { Navbar } from "@/components/autono/Navbar"
import { Footer } from "@/components/autono/Footer"

const jobOpenings = [
  {
    title: 'ELECTRICAL ENGINEER',
    location: 'San Francisco, CA',
    description: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font.",
  },
  {
    title: 'DATA SCIENTIST',
    location: 'San Francisco, CA',
    description: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
  },
  {
    title: 'ARTIFICIAL INTELLIGENCE RESEARCHER',
    location: 'San Francisco, CA',
    description: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font.",
  },
  {
    title: 'DEEP LEARNING ENGINEER',
    location: 'San Francisco, CA',
    description: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
  },
]

export default function CareersPage() {

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="light" />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-white relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-light text-black leading-[1.5] tracking-[0.1em] mb-6 sm:mb-8 md:mb-10">
            WE MAKE
            <br />
            BIG IDEAS HAPPEN
          </h1>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-light text-black leading-[1.8]">
            Join Us for the Ride
          </p>
        </div>
        {/* Bottom border line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
      </section>

      {/* Location Section */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-44 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-24 items-center">
            {/* Content Side */}
            <div className="relative pl-6 lg:pl-28">
              {/* Left border accent */}
              <div className="absolute left-0 lg:left-28 top-0 h-32 sm:h-40 md:h-48 w-[2px] bg-black/30" />

              <div className="pl-4 sm:pl-6">
                <p className="text-black/60 text-xs font-light tracking-[0.3em] mb-6 sm:mb-8 md:mb-10 uppercase">
                  Location
                </p>
                <h2 className="text-[24px] font-light text-black leading-[1.8em] mb-8 sm:mb-10 md:mb-12">
                  We're based in San
                  <br />
                  Francisco's innovation hub
                </h2>
                <p className="text-[16px] text-black font-light leading-[1.8em] max-w-md">
                  I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
                </p>
              </div>
            </div>

            {/* Building Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/Assets/careers/career-2.png"
                alt="San Francisco Office Buildings"
                className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section - Header with Image */}
      <section className="bg-black overflow-hidden">
        <div className="w-full">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Text Content */}
            <div className="relative lg:pl-28 py-20 lg:py-28 px-4 lg:px-8">
              {/* Left border accent */}
              <div className="absolute left-4 lg:left-28 top-20 lg:top-28 bottom-20 lg:bottom-28 w-[2px] bg-white/80" />

              <div className="pl-6">
                <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-10 uppercase">
                  Job Openings
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-loose mb-12 italic">
                  <span className="block mb-3">Changing the future of</span>
                  <span className="block mb-3">transportation means</span>
                  <span className="block">thinking differently.</span>
                </h2>
                <p className="text-white font-light leading-loose text-sm max-w-sm">
                  I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-[400px] lg:h-auto">
              <img
                src="/Assets/careers/career-3.png"
                alt="Road with light trails"
                className="absolute inset-0 w-full h-full lg:h-[760px] object-cover"
                style={{ objectPosition: '50% 50%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Cards Section */}
      <section className="bg-black py-20 lg:py-28">
        <div className="w-full px-4 lg:px-8">
          {/* Job Cards Grid - 2x2 with offset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 lg:pl-28">
            {jobOpenings.map((job, index) => (
              <div
                key={job.title}
                className={`bg-black border-2 border-white/20 rounded-2xl p-8 lg:p-12 flex flex-col min-h-[420px] lg:min-h-[520px] ${
                  index % 2 === 1 ? 'lg:ml-auto' : ''
                }`}
                style={{ maxWidth: '420px' }}
              >
                <h3 className="text-lg lg:text-2xl font-light text-white tracking-wider mb-4 lg:mb-6 uppercase">
                  {job.title}
                </h3>
                <p className="text-white/40 text-sm mb-6 lg:mb-8">
                  {job.location}
                </p>
                <p className="text-white font-light leading-loose text-sm lg:text-base mb-8 lg:mb-12 flex-grow">
                  {job.description}
                </p>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white font-light text-sm tracking-wide hover:border-white hover:bg-white hover:text-black transition-all duration-300 group w-fit rounded-md">
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* CV Submission Card */}
          <div className="mt-10 lg:mt-14 lg:pl-28">
            <div
              className="bg-white border-2 border-black/10 rounded-2xl p-8 lg:p-12 min-h-[210px] lg:min-h-[260px] flex flex-col justify-between"
              style={{ maxWidth: '420px' }}
            >
              <p className="text-black font-light leading-loose text-base lg:text-lg">
                Didn't find the position
                <br />
                you're looking for?
                <br />
                Send us your CV
              </p>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-black/30 text-black font-light text-sm tracking-wide hover:border-black hover:bg-black hover:text-white transition-all duration-300 group w-fit rounded-md mt-6">
                Submit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
