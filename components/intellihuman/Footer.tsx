import Link from 'next/link'
import { Linkedin } from 'lucide-react'

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { href: '/product', label: 'Product Overview' },
      { href: '/claims', label: 'Claims Decisioning' },
      { href: '/underwriting', label: 'Underwriting Decisioning' },
      { href: '/fraud', label: 'Fraud & Risk Signals' },
    ],
  },
  platform: {
    title: 'Platform',
    links: [
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/how-it-works#knowledge-layers', label: 'Knowledge Layers' },
      { href: '/how-it-works#decision-trace', label: 'Decision Trace' },
    ],
  },
  trust: {
    title: 'Trust',
    links: [
      { href: '/security', label: 'Security & Compliance' },
      { href: '/security#auditability', label: 'Auditability' },
      { href: '/security#data-handling', label: 'Data Handling' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { href: '/careers', label: 'Careers' },
      { href: '/demo', label: 'Request Demo' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {footerLinks.product.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {footerLinks.platform.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.platform.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {footerLinks.trust.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.trust.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright & Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <span>&copy; {new Date().getFullYear()} IntelliHuman. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
