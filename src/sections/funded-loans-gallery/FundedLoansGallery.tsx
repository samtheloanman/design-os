import React, { useMemo, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Grid3x3, List, Search, X } from 'lucide-react'
import type {
  FundedLoansGalleryData,
  FundedDeal,
  GalleryFilterState,
  SortOption,
  ViewType,
} from '../../product/sections/funded-loans-gallery/types'

interface FundedLoansGalleryProps {
  data: FundedLoansGalleryData
  onDealClick?: (deal: FundedDeal) => void
}

export const FundedLoansGallery: React.FC<FundedLoansGalleryProps> = ({ data, onDealClick }) => {
  const [filters, setFilters] = useState<GalleryFilterState>({
    search: '',
    programTypes: [],
    propertyTypes: [],
    loanAmount: [50000, 5000000],
    closingDateRange: 'allTime',
    occupancy: [],
    borrowerTypes: [],
    locations: [],
  })

  const [sortBy, setSortBy] = useState<SortOption>('recent')
  const [viewType, setViewType] = useState<ViewType>('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null)

  // Filter and sort deals
  const filteredAndSortedDeals = useMemo(() => {
    let results = data.deals.filter((deal) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesSearch =
          deal.location.city.toLowerCase().includes(searchLower) ||
          deal.location.state.toLowerCase().includes(searchLower) ||
          deal.propertyType.toLowerCase().includes(searchLower) ||
          deal.programUsed.toLowerCase().includes(searchLower)
        if (!matchesSearch) return false
      }

      // Program type filter
      if (filters.programTypes.length > 0) {
        if (!filters.programTypes.includes(deal.programUsed)) return false
      }

      // Property type filter
      if (filters.propertyTypes.length > 0) {
        if (!filters.propertyTypes.includes(deal.propertyType)) return false
      }

      // Loan amount filter
      if (deal.loanAmount < filters.loanAmount[0] || deal.loanAmount > filters.loanAmount[1]) {
        return false
      }

      // Occupancy filter
      if (filters.occupancy.length > 0) {
        if (!filters.occupancy.includes(deal.occupancy)) return false
      }

      // Borrower type filter
      if (filters.borrowerTypes.length > 0) {
        if (!filters.borrowerTypes.includes(deal.borrowerType)) return false
      }

      // Location filter
      if (filters.locations.length > 0) {
        const dealLocation = `${deal.location.city}, ${deal.location.state}`
        if (!filters.locations.includes(dealLocation)) return false
      }

      // Closing date filter
      const dealDate = new Date(deal.closingDate)
      const now = new Date()
      const monthsAgo = (months: number) => {
        const d = new Date()
        d.setMonth(d.getMonth() - months)
        return d
      }

      if (filters.closingDateRange === 'lastMonth') {
        if (dealDate < monthsAgo(1)) return false
      } else if (filters.closingDateRange === 'last3Months') {
        if (dealDate < monthsAgo(3)) return false
      } else if (filters.closingDateRange === 'last6Months') {
        if (dealDate < monthsAgo(6)) return false
      } else if (filters.closingDateRange === 'lastYear') {
        if (dealDate < monthsAgo(12)) return false
      }

      return true
    })

    // Sort results
    results.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.closingDate).getTime() - new Date(a.closingDate).getTime()
        case 'popular':
          return (b.viewCount || 0) - (a.viewCount || 0)
        case 'amountDesc':
          return b.loanAmount - a.loanAmount
        case 'amountAsc':
          return a.loanAmount - b.loanAmount
        case 'rating':
        default:
          return 0
      }
    })

    return results
  }, [data.deals, filters, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedDeals.length / itemsPerPage)
  const paginatedDeals = filteredAndSortedDeals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleFilterChange = (
    filterType: keyof GalleryFilterState,
    value: any
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
    setCurrentPage(1)
  }

  const handleAddMultiFilter = (filterType: string, value: string) => {
    const key = filterType as keyof GalleryFilterState
    const current = filters[key] as string[]
    if (current.includes(value)) {
      handleFilterChange(key, current.filter((v) => v !== value))
    } else {
      handleFilterChange(key, [...current, value])
    }
  }

  const handleClearFilters = () => {
    setFilters({
      search: '',
      programTypes: [],
      propertyTypes: [],
      loanAmount: [50000, 5000000],
      closingDateRange: 'allTime',
      occupancy: [],
      borrowerTypes: [],
      locations: [],
    })
    setCurrentPage(1)
  }

  const renderDealCard = (deal: FundedDeal) => (
    <div
      key={deal.id}
      onClick={() => onDealClick?.(deal)}
      className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
    >
      {/* Property Image */}
      <div className="relative h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <img
          src={deal.propertyImage}
          alt={deal.propertyType}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        {deal.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Deal Details */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              {deal.loanAmountFormatted}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {deal.location.city}, {deal.location.state}
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {deal.propertyType}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
            {deal.borrowerStory.quote}
          </p>
        </div>

        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 rounded font-semibold">
            {deal.programUsed}
          </span>
          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded">
            {deal.daysToClosure} days to close
          </span>
        </div>

        <button className="w-full text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300">
          View Details →
        </button>
      </div>
    </div>
  )

  const renderDealListItem = (deal: FundedDeal) => (
    <div
      key={deal.id}
      onClick={() => onDealClick?.(deal)}
      className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 hover:shadow-lg transition-shadow cursor-pointer flex gap-4"
    >
      {/* Thumbnail */}
      <div className="h-32 w-32 flex-shrink-0 bg-slate-200 dark:bg-slate-700 rounded overflow-hidden">
        <img src={deal.propertyImage} alt={deal.propertyType} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              {deal.loanAmountFormatted}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {deal.location.city}, {deal.location.state}
            </p>
          </div>
          {deal.featured && (
            <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full flex-shrink-0">
              Featured
            </span>
          )}
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 line-clamp-2">
          {deal.borrowerStory.quote}
        </p>

        <div className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 mb-3">
          <span>{deal.propertyType}</span>
          <span>•</span>
          <span>{deal.occupancy}</span>
          <span>•</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{deal.programUsed}</span>
        </div>

        <div className="flex gap-2 flex-wrap">
          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded">
            Closed: {new Date(deal.closingDate).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}
          </span>
          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded">
            {deal.daysToClosure} days to close
          </span>
        </div>
      </div>

      <button className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold flex-shrink-0">
        View →
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 to-cyan-700 dark:from-cyan-900 dark:to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold font-bebas tracking-tight mb-4">
            Success Stories from Our Borrowers
          </h1>
          <p className="text-xl text-cyan-100 mb-8">
            Explore deals we've funded across the nation
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold">{data.stats.totalFunded}</div>
              <div className="text-sm text-cyan-100">Total Funded</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{data.stats.totalDeals.toLocaleString()}</div>
              <div className="text-sm text-cyan-100">Loans Funded</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{data.stats.successRate}%</div>
              <div className="text-sm text-cyan-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{data.stats.avgDaysToClose}</div>
              <div className="text-sm text-cyan-100">Avg Days to Close</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-slate-900 dark:text-white">Filters</h2>
                {(filters.search ||
                  filters.programTypes.length > 0 ||
                  filters.propertyTypes.length > 0 ||
                  filters.occupancy.length > 0 ||
                  filters.borrowerTypes.length > 0 ||
                  filters.locations.length > 0) && (
                  <button
                    onClick={handleClearFilters}
                    className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Program Type Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
                  Program Type
                </h3>
                <div className="space-y-2">
                  {data.filterOptions.programTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.programTypes.includes(type)}
                        onChange={(e) => handleAddMultiFilter('programTypes', type)}
                        className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-cyan-600"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Property Type Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
                  Property Type
                </h3>
                <div className="space-y-2">
                  {data.filterOptions.propertyTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.propertyTypes.includes(type)}
                        onChange={(e) => handleAddMultiFilter('propertyTypes', type)}
                        className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-cyan-600"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Occupancy Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
                  Occupancy
                </h3>
                <div className="space-y-2">
                  {data.filterOptions.occupancyTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.occupancy.includes(type)}
                        onChange={(e) => handleAddMultiFilter('occupancy', type)}
                        className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-cyan-600"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Borrower Type Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
                  Borrower Type
                </h3>
                <div className="space-y-2">
                  {data.filterOptions.borrowerTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.borrowerTypes.includes(type)}
                        onChange={(e) => handleAddMultiFilter('borrowerTypes', type)}
                        className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-cyan-600"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Closing Date Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
                  Closing Date
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'lastMonth', label: 'Last Month' },
                    { value: 'last3Months', label: 'Last 3 Months' },
                    { value: 'last6Months', label: 'Last 6 Months' },
                    { value: 'lastYear', label: 'Last Year' },
                    { value: 'allTime', label: 'All Time' },
                  ].map(({ value, label }) => (
                    <label key={value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="closingDate"
                        checked={filters.closingDateRange === (value as any)}
                        onChange={() => handleFilterChange('closingDateRange', value as any)}
                        className="w-4 h-4 border-slate-300 dark:border-slate-600 text-cyan-600"
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Search and Controls */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by city, program, property..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="w-full pl-12 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500"
                  />
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="amountDesc">Amount (High to Low)</option>
                  <option value="amountAsc">Amount (Low to High)</option>
                </select>
              </div>

              {/* View Controls */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Showing <span className="font-semibold">{paginatedDeals.length}</span> of{' '}
                  <span className="font-semibold">{filteredAndSortedDeals.length}</span> deals
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewType('grid')}
                    className={`p-2 rounded-lg border ${
                      viewType === 'grid'
                        ? 'bg-cyan-100 dark:bg-cyan-900 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400'
                        : 'border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    } transition-colors`}
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewType('list')}
                    className={`p-2 rounded-lg border ${
                      viewType === 'list'
                        ? 'bg-cyan-100 dark:bg-cyan-900 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400'
                        : 'border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    } transition-colors`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Deals Display */}
            {paginatedDeals.length > 0 ? (
              <>
                {viewType === 'grid' ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {paginatedDeals.map(renderDealCard)}
                  </div>
                ) : (
                  <div className="space-y-4 mb-8">{paginatedDeals.map(renderDealListItem)}</div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 disabled:opacity-50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex gap-1">
                      {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentPage(idx + 1)}
                          className={`w-8 h-8 rounded-lg font-semibold transition-colors ${
                            currentPage === idx + 1
                              ? 'bg-cyan-600 dark:bg-cyan-500 text-white'
                              : 'border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 disabled:opacity-50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-slate-600 dark:text-slate-400 mb-4">
                  <p className="text-lg font-semibold">No deals match your filters</p>
                  <p className="text-sm">Try adjusting your search or filters</p>
                </div>
                <button
                  onClick={handleClearFilters}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
