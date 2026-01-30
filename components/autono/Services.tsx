"use client"

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="w-full px-4 lg:px-8">
        {/* Section Header with left border */}
        <div className="relative lg:pl-28 mb-16 lg:mb-20">
          <div className="absolute left-0 lg:left-28 top-0 bottom-0 w-[2px] bg-gray-300" />
          <div className="pl-6">
            <p className="text-gray-400 text-xs font-light tracking-[0.3em] mb-6 uppercase">
              Services
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-black leading-relaxed max-w-sm">
              <span className="block mb-2">Intelligent Automation</span>
              <span className="block mb-2">for Insurance</span>
              <span className="block">Operations</span>
            </h2>
          </div>
        </div>

        {/* Service 1 - Autonomous Driving */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center">
          {/* Left - Text Content - more indented than header */}
          <div className="lg:pl-36 xl:pl-44">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight mb-8 tracking-wide">
              CLAIMS
              <br />
              DECISIONS
            </h3>
            <p className="text-black font-light leading-loose text-sm mb-10 max-w-sm">
              Automate claim triage and coverage decisions with AI that reads documents, extracts key facts, and applies your rules—while keeping adjusters in control of complex cases.
            </p>
            <button className="inline-flex items-center gap-4 px-5 py-3 border border-gray-300 text-gray-600 font-light text-sm tracking-wide hover:border-gray-900 hover:text-black transition-all duration-300 group">
              Read More
              <span className="flex items-center gap-1">
                <ChevronLeft className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Right - Car Image */}
          <div className="relative flex items-center justify-center lg:justify-end py-10 lg:-mr-10">
            <Image
              src="/Assets/page1/page1-section3.jpg"
              alt="Claims Decisions"
              width={900}
              height={720}
              className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Service 2 - Real-Time Information */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center mt-24 lg:mt-32">
          {/* Left - Dashboard Image */}
          <div className="relative flex items-center justify-center lg:justify-start lg:ml-8">
            <Image
              src="/Assets/page1/page1-section3.jpg"
              alt="Underwriting Automation"
              width={900}
              height={650}
              className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain scale-105 lg:scale-110"
            />
          </div>

          {/* Right - Text Content */}
          <div className="lg:pl-28 xl:pl-40">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight mb-8 tracking-wide">
              UNDERWRITING
              <br />
              AUTOMATION
            </h3>
            <p className="text-black font-light leading-loose text-sm mb-10 max-w-sm">
              Accelerate submission-to-quote with intelligent data extraction, risk scoring, and recommendation generation. Your underwriters focus on judgment calls, not data entry.
            </p>
            <button className="inline-flex items-center gap-4 px-5 py-3 border border-gray-300 text-gray-600 font-light text-sm tracking-wide hover:border-gray-900 hover:text-black transition-all duration-300 group">
              Read More
              <span className="flex items-center gap-1">
                <ChevronLeft className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Service 3 - Perception Enabled */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center mt-24 lg:mt-32">
          {/* Left - Text Content */}
          <div className="lg:pl-36 xl:pl-44">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight mb-8 tracking-wide">
              FRAUD
              <br />
              DETECTION
            </h3>
            <p className="text-black font-light leading-loose text-sm mb-10 max-w-sm">
              Identify suspicious patterns with explainable AI that surfaces risk indicators and supporting evidence—giving your SIU team the insights they need to act quickly.
            </p>
            <button className="inline-flex items-center gap-4 px-5 py-3 border border-gray-300 text-gray-600 font-light text-sm tracking-wide hover:border-gray-900 hover:text-black transition-all duration-300 group">
              Read More
              <span className="flex items-center gap-1">
                <ChevronLeft className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Right - Car Image with Sensors */}
          <div className="relative flex items-center justify-center lg:justify-end lg:-mr-10">
            <Image
              src="/Assets/page1/page1-section3.jpg"
              alt="Fraud Detection"
              width={900}
              height={720}
              className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
