'use client'

import { useState, useMemo } from 'react'
import { Search, ChevronDown, Grid3x3, List, X } from 'lucide-react'
import data from '@/../product/sections/program-directory/data.json'

export default function ProgramDirectory() {
  const [filters, setFilters] = useState(data.filters)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'relevant' | 'name' | 'popular' | 'newest'>('relevant')
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const itemsPerPage = 12

  // Filter and sort programs
  const filteredPrograms = useMemo(() => {
    let result = data.programs

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.highlights.some((h) => h.toLowerCase().includes(searchLower))
      )
    }

    // Program type filter
    if (filters.programType.length > 0) {
      result = result.filter((p) => filters.programType.includes(p.programType))
    }

    // Borrower type filter
    if (filters.borrowerType.length > 0) {
      result = result.filter((p) =>
        filters.borrowerType.some((bt) => p.borrowerTypes.includes(bt))
      )
    }

    // Credit score filter
    result = result.filter((p) => p.minCreditScore >= filters.creditScore[0])

    // Sort
    switch (sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'popular':
        // Mock: keep original order as "popular"
        break
      case 'newest':
        // Mock: reverse order
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [filters, sortBy])

  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage)
  const paginatedPrograms = filteredPrograms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleFilterChange = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value })
    setCurrentPage(1)
  }

  const handleResetFilters = () => {
    setFilters(data.filters)
    setCurrentPage(1)
  }

  const programTypeOptions = ['Residential', 'Commercial', 'Hard Money', 'NonQM Stated No Doc No income', 'Reverse Mortgage', 'Construction', 'Land', 'Jumbo Residential']
  const borrowerTypeOptions = ['Individual', 'Self-Employed', 'Business Owner', 'LLC']
  const occupancyOptions = ['Owner Occupied', 'Investment Property']
  const purposeOptions = ['Purchase', 'Refinance', 'Cash-Out Refinance', 'Construction']

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 dark:from-cyan-800 dark:to-cyan-900 px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Browse Our Loan Programs
          </h1>
          <p className="text-cyan-100 mb-6">179+ programs for every borrower and property type</p>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search programs..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden md:block">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 sticky top-20">
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-lg font-bold text-slate-900 dark:text-slate-50 uppercase tracking-wide"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  Filters
                </h3>
                {(filters.programType.length > 0 ||
                  filters.borrowerType.length > 0 ||
                  filters.creditScore[0] > 500) && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs font-bold text-cyan-600 hover:text-cyan-700 uppercase tracking-wide"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Program Type Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                  Program Type
                </h4>
                <div className="space-y-2">
                  {programTypeOptions.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.programType.includes(type)}
                        onChange={(e) => {
                          const newTypes = e.target.checked
                            ? [...filters.programType, type]
                            : filters.programType.filter((t) => t !== type)
                          handleFilterChange('programType', newTypes)
                        }}
                        className="w-4 h-4 rounded border-slate-300 text-cyan-600"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Borrower Type Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                  Borrower Type
                </h4>
                <div className="space-y-2">
                  {borrowerTypeOptions.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.borrowerType.includes(type)}
                        onChange={(e) => {
                          const newTypes = e.target.checked
                            ? [...filters.borrowerType, type]
                            : filters.borrowerType.filter((t) => t !== type)
                          handleFilterChange('borrowerType', newTypes)
                        }}
                        className="w-4 h-4 rounded border-slate-300 text-cyan-600"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Credit Score Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                  Minimum Credit Score
                </h4>
                <div className="space-y-2">
                  {[500, 580, 620, 680, 700, 740].map((score) => (
                    <label key={score} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="creditScore"
                        checked={filters.creditScore[0] === score}
                        onChange={() => handleFilterChange('creditScore', [score, 800])}
                        className="w-4 h-4 text-cyan-600"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{score}+</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Occupancy Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                  Occupancy
                </h4>
                <div className="space-y-2">
                  {occupancyOptions.map((occ) => (
                    <label key={occ} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.occupancy.includes(occ)}
                        onChange={(e) => {
                          const newOcc = e.target.checked
                            ? [...filters.occupancy, occ]
                            : filters.occupancy.filter((o) => o !== occ)
                          handleFilterChange('occupancy', newOcc)
                        }}
                        className="w-4 h-4 rounded border-slate-300 text-cyan-600"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{occ}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className="w-full px-4 py-3 bg-cyan-600 text-white font-bold uppercase tracking-wide rounded-lg hover:bg-cyan-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-6 flex items-center gap-2">
              <button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold uppercase tracking-wide"
              >
                ☰ Filters
              </button>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-700">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Showing <span className="font-bold">{paginatedPrograms.length}</span> of{' '}
                <span className="font-bold">{filteredPrograms.length}</span> programs
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="appearance-none px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold uppercase tracking-wide cursor-pointer pr-8"
                  >
                    <option value="relevant">Relevant</option>
                    <option value="name">Alphabetical</option>
                    <option value="popular">Popular</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600" />
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
                    title="Grid view"
                  >
                    <Grid3x3 size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
                    title="List view"
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Program Cards */}
            {paginatedPrograms.length > 0 ? (
              <div
                className={`gap-6 mb-8 ${
                  viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'space-y-4'
                }`}
              >
                {paginatedPrograms.map((program) => (
                  <button
                    key={program.id}
                    className={`text-left bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg transition-all overflow-hidden group ${
                      viewMode === 'list' ? 'p-6 flex items-start gap-6' : 'p-6'
                    }`}
                  >
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <span className="inline-block px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                            {program.programType}
                          </span>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">{program.name}</h3>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1 mb-4 text-sm text-slate-600 dark:text-slate-300">
                        {program.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-600 mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Key Facts */}
                      <div className={`grid gap-3 mb-4 ${viewMode === 'list' ? 'grid-cols-4' : 'grid-cols-2'}`}>
                        <div className="bg-slate-50 dark:bg-slate-700 rounded p-2">
                          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Min Credit
                          </div>
                          <div className="font-bold text-slate-900 dark:text-slate-50">
                            {program.minCreditScore}
                          </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700 rounded p-2">
                          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Rate Range
                          </div>
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-50">
                            {program.interestRateRange}
                          </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700 rounded p-2">
                          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Down Payment
                          </div>
                          <div className="font-bold text-slate-900 dark:text-slate-50">
                            {program.minDownPayment}
                          </div>
                        </div>
                        {viewMode === 'list' && (
                          <div className="bg-slate-50 dark:bg-slate-700 rounded p-2">
                            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                              Occupancy
                            </div>
                            <div className="text-xs font-bold text-slate-900 dark:text-slate-50">
                              {program.occupancy[0]}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      <button className="w-full px-4 py-2 bg-cyan-600 text-white font-bold uppercase tracking-wide rounded hover:bg-cyan-700 transition-colors text-sm">
                        View Details
                      </button>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  No programs match your filters
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Try adjusting your search criteria or resetting filters
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-3 bg-cyan-600 text-white font-bold uppercase tracking-wide rounded hover:bg-cyan-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && paginatedPrograms.length > 0 && (
              <div className="flex items-center justify-center gap-2 pt-8 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded border border-slate-200 dark:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  ← Previous
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded font-bold ${
                      currentPage === i + 1
                        ? 'bg-cyan-600 text-white'
                        : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded border border-slate-200 dark:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
