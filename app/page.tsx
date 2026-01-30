import dynamic from 'next/dynamic'
import { Navbar } from "@/components/autono/Navbar"
import { Hero } from "@/components/autono/Hero"
import { Footer } from "@/components/autono/Footer"

// Lazy load below-fold components for better performance
const Vision = dynamic(() => import("@/components/autono/Vision").then(mod => ({ default: mod.Vision })), {
  loading: () => <div className="py-20 lg:py-28 bg-black min-h-[600px]" />
})

const Services = dynamic(() => import("@/components/autono/Services").then(mod => ({ default: mod.Services })), {
  loading: () => <div className="py-20 lg:py-28 bg-white min-h-[800px]" />
})

const WhyAutono = dynamic(() => import("@/components/autono/WhyAutono").then(mod => ({ default: mod.WhyAutono })), {
  loading: () => <div className="min-h-screen bg-gray-900" />
})

const Stats = dynamic(() => import("@/components/autono/Stats").then(mod => ({ default: mod.Stats })), {
  loading: () => <div className="py-32 lg:py-44 bg-white min-h-[500px]" />
})

const Partners = dynamic(() => import("@/components/autono/Partners").then(mod => ({ default: mod.Partners })), {
  loading: () => <div className="py-32 lg:py-44 bg-black min-h-[500px]" />
})

const Careers = dynamic(() => import("@/components/autono/Careers").then(mod => ({ default: mod.Careers })), {
  loading: () => <div className="py-32 lg:py-44 bg-black min-h-[600px]" />
})

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
