"use client"

import { Navbar } from "@/components/autono/Navbar"
import { Footer } from "@/components/autono/Footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-amber-500 text-xs font-light tracking-[0.3em] mb-6 uppercase">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8">
            Autonomous Driving
            <br />
            Reimagined
          </h1>
          <p className="text-gray-500 font-light leading-relaxed text-lg max-w-2xl mx-auto">
            We're building the future of transportation with cutting-edge technology and unwavering commitment to safety.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-500 via-amber-400 to-amber-600" />
              <div className="pl-8">
                <p className="text-amber-500 text-xs font-light tracking-[0.3em] mb-6 uppercase">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6">
                  Founded on Innovation
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-6">
                  I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
                </p>
                <p className="text-gray-500 font-light leading-relaxed">
                  I'm a great place for you to tell a story and let your users know a little more about you.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
                alt="Our Team"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            <div className="bg-gray-50 p-10">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                To revolutionize transportation through cutting-edge autonomous technology, making mobility safer, more efficient, and accessible to everyone.
              </p>
            </div>
            <div className="bg-gray-50 p-10">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                A world where autonomous vehicles seamlessly integrate into daily life, reducing accidents, emissions, and transforming how people move.
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs font-light tracking-[0.3em] mb-6 uppercase">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
              Meet Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'John Smith', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80' },
              { name: 'Sarah Johnson', role: 'CTO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80' },
              { name: 'Michael Chen', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 mx-auto rounded-full object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <h4 className="text-xl font-light text-gray-900 mb-2">{member.name}</h4>
                <p className="text-gray-500 font-light text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
