'use client';

import { useState } from 'react'
import Link from 'next/link'
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  const navLinks = [
    { name: 'Technology', href: '#services' },
    { name: 'About', href: '#vision' },
    { name: 'Careers', href: '/careers' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-white py-16 lg:py-24">
      {/* Main Footer */}
      <div className="w-full px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <Link href="/" className="inline-block mb-16">
            <img
              src="/logo.png"
              alt="IntelliHuman Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_auto_1fr] gap-x-8 lg:gap-x-16 gap-y-12">
            {/* Column 1 - Navigation */}
            <div>
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base font-light text-black hover:text-black/70 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 - Contact Info */}
            <div className="space-y-6">
              <p className="text-base font-light text-black">
                Tel: 123-456-7890
              </p>
              <p className="text-base font-light text-black">
                Email: info@mysite.com
              </p>
              <div className="pt-2">
                <p className="text-base font-light text-black">
                  500 Terry Francine St
                </p>
                <p className="text-base font-light text-black">
                  San Francisco, CA 94158
                </p>
              </div>
            </div>

            {/* Column 3 - Subscribe */}
            <div className="lg:ml-auto lg:max-w-sm">
              <h4 className="text-base font-medium text-black tracking-[0.2em] mb-6 uppercase">
                Subscribe
              </h4>
              <p className="text-base font-light text-black mb-8">
                Sign up to receive IntelliHuman news and updates.
              </p>
              <form onSubmit={handleSubscribe}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm text-black mb-2">
                    Email *
                  </label>
                  <div className="flex">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-2.5 border border-gray-300 text-base font-light focus:outline-none focus:border-gray-900 transition-colors duration-300 rounded-l-md"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gray-900 text-white text-base font-light hover:bg-gray-800 transition-colors duration-300 rounded-r-md"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 w-4 h-4 border-gray-300 rounded-none focus:ring-0"
                  />
                  <span className="text-sm font-light text-black">
                    Yes, subscribe me to your newsletter. *
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full px-4 lg:px-8 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-sm font-light text-black">
              © 2025 IntelliHuman. All rights reserved.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-black hover:text-black/70 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
