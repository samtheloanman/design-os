'use client'

import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { UserMenu } from './UserMenu'

export interface MainNavProps {
  navigationItems: Array<{
    label: string
    href: string
    isActive?: boolean
  }>
  user?: {
    name: string
    avatarUrl?: string
  }
  onNavigate?: (href: string) => void
  onLogout?: () => void
  onSearch?: (query: string) => void
}

export function MainNav({
  navigationItems,
  user,
  onNavigate,
  onLogout,
  onSearch,
}: MainNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [hasScrolled, setHasScrolled] = useState(false)

  // Track scroll for shadow effect
  typeof window !== 'undefined' &&
    window.addEventListener('scroll', () => {
      setHasScrolled(window.scrollY > 0)
    })

  const handleNavigate = (href: string) => {
    onNavigate?.(href)
    setIsMobileMenuOpen(false)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch?.(searchQuery)
      setSearchQuery('')
      setIsSearchOpen(false)
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 bg-white dark:bg-slate-950 transition-shadow duration-200 ${
        hasScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigate('/')}
              className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              CMRE
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigate(item.href)}
                className={`font-semibold text-sm tracking-wide transition-colors ${
                  item.isActive
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Search & User Menu Container */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search */}
            <div className="relative">
              {!isSearchOpen ? (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              ) : (
                <div className="absolute right-0 top-full mt-2 bg-white dark:bg-slate-900 rounded-lg shadow-lg p-3 w-64">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Search programs, locations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      autoFocus
                      className="flex-1 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                    <button
                      onClick={handleSearch}
                      className="p-2 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 rounded transition-colors"
                    >
                      <Search size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setIsSearchOpen(false)
                        setSearchQuery('')
                      }}
                      className="p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <UserMenu user={user} onLogout={onLogout} />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 py-4 space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigate(item.href)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  item.isActive
                    ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
