"use client"

import { useEffect, useState } from "react"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface NavbarProps {
  variant?: 'light' | 'dark'
}

export function Navbar({ variant = 'light' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Product', href: '/product' },
    { name: 'Claims', href: '/claims' },
    { name: 'Underwriting', href: '/underwriting' },
    { name: 'Fraud', href: '/fraud' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Security', href: '/security' },
    { name: 'Careers', href: '/careers' },
  ]

  const isLight = variant === 'light'
  const showDarkBg = isScrolled || isMobileMenuOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showDarkBg
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - top left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="IntelliHuman Logo"
              width={180}
              height={50}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - far right */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  showDarkBg
                    ? 'text-gray-800 hover:text-gray-900'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/demo"
              className={`px-6 py-2.5 text-base font-medium tracking-wide border transition-all duration-300 ${
                showDarkBg
                  ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${showDarkBg ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white px-6 py-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-light text-gray-600 hover:text-gray-900 transition-colors duration-300 tracking-wide py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/demo"
            className="block w-full px-6 py-2 text-sm font-light tracking-wide border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-center"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </nav>
  )
}
