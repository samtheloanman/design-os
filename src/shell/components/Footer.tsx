import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Shield, MapPin, Phone, Mail } from 'lucide-react'

export interface FooterProps {
  onNavigate?: (href: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (href: string) => {
    onNavigate?.(href)
  }

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-50 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Social */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-bebas tracking-wide mb-2">CMRE</h3>
            <p className="text-sm text-slate-300 mb-6">
              Expert lending solutions for every borrower and property type across 50+ markets nationwide.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Loan Programs */}
          <div>
            <h4 className="font-bold font-bebas tracking-wide uppercase text-sm mb-6">Loan Programs</h4>
            <div className="space-y-4">
              {/* Residential */}
              <div>
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-3">Residential</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      onClick={() => handleLinkClick('/programs?type=residential')}
                      className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      FHA Mortgages
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleLinkClick('/programs?type=conventional')}
                      className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      Conventional
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleLinkClick('/programs?type=va')}
                      className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      VA Loans
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleLinkClick('/programs?type=jumbo')}
                      className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      Jumbo Loans
                    </a>
                  </li>
                </ul>
              </div>

              {/* Commercial */}
              <div>
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-3">Commercial</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      onClick={() => handleLinkClick('/programs?type=commercial')}
                      className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      SBA Loans
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleLinkClick('/programs?type=hard-money')}
                      className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      Hard Money
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => handleLinkClick('/programs?type=non-qm')}
                      className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      Non-QM Loans
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold font-bebas tracking-wide uppercase text-sm mb-6">Locations</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="#"
                  onClick={() => handleLinkClick('/locations/new-york')}
                  className="text-sm text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  New York
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleLinkClick('/locations/los-angeles')}
                  className="text-sm text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Los Angeles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleLinkClick('/locations/chicago')}
                  className="text-sm text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Chicago
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleLinkClick('/locations/san-francisco')}
                  className="text-sm text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  San Francisco
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleLinkClick('/locations/boston')}
                  className="text-sm text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Boston
                </a>
              </li>
            </ul>
            <a
              href="#"
              onClick={() => handleLinkClick('/locations')}
              className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View All Locations →
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold font-bebas tracking-wide uppercase text-sm mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={() => handleLinkClick('/about')}
                  className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  About CMRE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleLinkClick('/careers')}
                  className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="tel:+1-800-555-0100"
                  className="text-sm text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  1-800-CMRE-LOAN
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@cmre.com"
                  className="text-sm text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  support@cmre.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleLinkClick('/partner-portal')}
                  className="text-sm text-slate-300 hover:text-cyan-400 transition-colors font-semibold"
                >
                  Partner Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-bold font-bebas tracking-wide uppercase text-sm mb-6">Legal</h4>
            <div className="space-y-4">
              {/* NMLS & Equal Housing */}
              <div className="bg-slate-800 rounded-lg p-4">
                <p className="text-xs text-slate-400 mb-3">Licensed Lender</p>
                <p className="text-sm font-bold text-white mb-3">NMLS #123456</p>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-slate-300">Equal Housing Lender</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We are licensed in all 50 states and committed to fair lending practices.
                </p>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <a
                  href="#"
                  onClick={() => handleLinkClick('/privacy')}
                  className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  onClick={() => handleLinkClick('/terms')}
                  className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  onClick={() => handleLinkClick('/disclosures')}
                  className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Required Disclosures
                </a>
                <a
                  href="#"
                  onClick={() => handleLinkClick('/accessibility')}
                  className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {currentYear} Custom Mortgage and Real Estate, Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
