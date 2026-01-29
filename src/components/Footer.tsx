'use client';

import { Facebook, Twitter, Linkedin, Instagram, ChevronUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#vision' },
      { name: 'Services', href: '#services' },
      { name: 'Partners', href: '#partners' },
      { name: 'Careers', href: '#careers' },
    ],
    support: [
      { name: 'Contact', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-[#0a0a1a] border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <span className="text-3xl font-oswald font-bold tracking-wider text-white">
                AUTONO
              </span>
            </a>
            <p className="font-open-sans text-white/50 leading-relaxed max-w-md mb-6">
              Leading the way in autonomous vehicle technology. We're committed to creating 
              a safer, more efficient future of transportation.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#00A8E8] hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-oswald text-lg font-semibold text-white mb-6 tracking-wide">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-open-sans text-white/50 hover:text-[#00A8E8] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-oswald text-lg font-semibold text-white mb-6 tracking-wide">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-open-sans text-white/50 hover:text-[#00A8E8] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-open-sans text-sm text-white/40">
              © {new Date().getFullYear()} Autono. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-2 text-white/40 hover:text-[#00A8E8] transition-colors duration-300 font-open-sans text-sm"
            >
              Back to top
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
