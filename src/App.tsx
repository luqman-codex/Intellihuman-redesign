'use client';

import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Services from './components/Services'
import WhyAutono from './components/WhyAutono'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Careers from './components/Careers'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal')
    
    const revealOnScroll = () => {
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }
    
    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll() // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      <Hero />
      <Vision />
      <Services />
      <WhyAutono />
      <Stats />
      <Partners />
      <Careers />
      <Footer />
    </div>
  )
}

export default App
