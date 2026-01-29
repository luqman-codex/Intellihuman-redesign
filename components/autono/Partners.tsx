"use client"

import Image from 'next/image'

const partners = [
  {
    name: 'GENERAL TRANSPORT',
    logo: '/Assets/sec-9/logo-1.png',
  },
  {
    name: 'IDI SOFTWARE',
    logo: '/Assets/sec-9/logo-2.png',
  },
  {
    name: 'IMOGEN CARS',
    logo: '/Assets/sec-9/logo-3.png',
  },
  {
    name: 'TRI-NEX',
    logo: '/Assets/sec-9/logo-4.png',
  },
]

export function Partners() {
  return (
    <section id="partners" className="py-32 lg:py-44 bg-black">
      <div className="w-full px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Content Side */}
          <div className="relative lg:pl-28">
            {/* Left border accent */}
            <div className="absolute left-0 lg:left-28 top-0 h-40 w-[2px] bg-white/30" />

            <div className="pl-6">
              <p className="text-white/60 text-xs font-light tracking-[0.3em] mb-10 uppercase">
                Industry
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-loose mb-20">
                Our
                <br />
                Partners
              </h2>
              <p className="text-white font-light leading-loose text-base max-w-md">
                Click here to add your own content and customize the text. This is a great place to tell a story about your company and let your users know a little more about the company's history, the team's background, or any other information you'd like to share. Just click "Edit Text" to get started.
              </p>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:gap-x-12 lg:gap-y-12 lg:-mr-10">
            {partners.map((partner) => (
              <div key={partner.name} className="text-center">
                <div className="mb-6 flex items-center justify-center h-32">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={140}
                    className="w-auto h-24 lg:h-28 object-contain"
                  />
                </div>
                <p className="text-xs text-white/40 tracking-[0.2em] font-light">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
