"use client"

import { useState } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { Navbar } from "@/components/autono/Navbar"
import { Footer } from "@/components/autono/Footer"

const jobs = [
  {
    title: 'ELECTRICAL ENGINEER',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: "Join our team to design and develop cutting-edge electrical systems for our autonomous vehicles. You'll work with advanced sensor arrays, power management systems, and vehicle electronics.",
  },
  {
    title: 'SOFTWARE ENGINEER',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: "Build the software that powers our autonomous driving systems. Work on perception, planning, and control algorithms using cutting-edge AI and machine learning techniques.",
  },
  {
    title: 'MECHANICAL ENGINEER',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: "Design and optimize mechanical systems for our autonomous vehicles. Work on chassis, suspension, and structural components that meet the highest safety standards.",
  },
  {
    title: 'DATA SCIENTIST',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: "Analyze vast amounts of driving data to improve our autonomous systems. Develop machine learning models and extract insights that drive product improvements.",
  },
  {
    title: 'PRODUCT MANAGER',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: "Lead product strategy and roadmap for our autonomous vehicle platform. Work cross-functionally with engineering, design, and business teams.",
  },
  {
    title: 'UX DESIGNER',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: "Design intuitive user experiences for passengers of autonomous vehicles. Create interfaces that build trust and enhance the riding experience.",
  },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-amber-500 text-xs font-light tracking-[0.3em] mb-6 uppercase">
            Careers
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8">
            Join Our Team
          </h1>
          <p className="text-gray-500 font-light leading-relaxed text-lg max-w-2xl mx-auto">
            We're looking for innovative talent to help us build the future of autonomous transportation.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-4">200+</div>
              <p className="text-gray-400 font-light">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-4">5</div>
              <p className="text-gray-400 font-light">Office Locations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-4">20+</div>
              <p className="text-gray-400 font-light">Open Positions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs font-light tracking-[0.3em] mb-6 uppercase">
              Open Positions
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
              Current Openings
            </h2>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={job.title}
                className="border border-gray-200 p-8 hover:border-gray-400 transition-colors duration-300 cursor-pointer"
                onClick={() => setSelectedJob(selectedJob === index ? null : index)}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-light text-gray-900 tracking-wide mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-light">{job.location}</span>
                      </div>
                      <span className="text-sm font-light">{job.type}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-3 px-6 py-3 border border-gray-900 text-gray-900 font-light text-sm tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 group">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {selectedJob === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-500 font-light leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6">
            Don't see a position that fits?
          </h2>
          <p className="text-gray-500 font-light leading-relaxed mb-10 max-w-xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-light text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 group">
            Submit Your CV
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
