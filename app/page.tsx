"use client"

import { Navbar } from "@/components/autono/Navbar"
import { Hero } from "@/components/autono/Hero"
import { Vision } from "@/components/autono/Vision"
import { Services } from "@/components/autono/Services"
import { WhyAutono } from "@/components/autono/WhyAutono"
import { Stats } from "@/components/autono/Stats"
import { Partners } from "@/components/autono/Partners"
import { Careers } from "@/components/autono/Careers"
import { Footer } from "@/components/autono/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="light" />
      <Hero />
      <Vision />
      <Services />
      <WhyAutono />
      <Stats />
      <Partners />
      <Careers />
      <Footer />
    </main>
  )
}
