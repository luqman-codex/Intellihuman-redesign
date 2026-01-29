"use client"

import { Navbar } from "@/components/autono/Navbar"
import { Footer } from "@/components/autono/Footer"

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-amber-500 text-xs font-light tracking-[0.3em] mb-6 uppercase">
            Technology
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8">
            Groundbreaking Perception-Enabled
            <br />
            Sensor Technology
          </h1>
          <p className="text-gray-500 font-light leading-relaxed text-lg max-w-2xl mx-auto">
            Our fully driverless vehicle is engineered to the highest degree of precision and safety.
          </p>
        </div>
      </section>

      {/* Technology Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6">
                Autonomy Requires Trust
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-6">
                The key to the successful combination of both technology and trust is dependable electronics. Our innovative top-quality semiconductors and semiconductor solutions combined with broad system knowledge ensure safety and reliability.
              </p>
              <p className="text-gray-500 font-light leading-relaxed">
                Dependable electronics leverage a deeply embedded broad system knowledge that allows our vehicles to navigate complex environments with precision.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80"
                alt="Autonomous Technology"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 border border-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Advanced Sensors</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                LiDAR, radar, and camera fusion for 360-degree environmental perception.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 border border-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Real-Time Processing</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                Millisecond response times powered by custom AI accelerators.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 border border-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                Redundant systems and fail-safe protocols for maximum safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
