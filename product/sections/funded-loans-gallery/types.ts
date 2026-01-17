/**
 * Funded Loans Gallery Types
 * Defines the data structure for funded deal showcase
 */

/**
 * Location information
 */
export interface DealLocation {
  city: string
  state: string
  address?: string
  latitude?: number
  longitude?: number
}

/**
 * Success metrics and tags for a deal
 */
export interface DealMetrics {
  quick?: boolean
  largeAmount?: boolean
  complexScenario?: boolean
  customTags?: string[]
}

/**
 * Borrower story and quote
 */
export interface BorrowerStory {
  quote: string
  story: string
  name?: string
  title?: string
  isAnonymous?: boolean
  challenges?: string[]
  howCMREHelped?: string
}

/**
 * Single funded deal record
 */
export interface FundedDeal {
  id: string
  propertyImage: string
  propertyImages?: string[]
  location: DealLocation
  propertyType: string
  occupancy: 'Owner Occupied' | 'Investment Property'
  borrowerType: string
  loanAmount: number
  loanAmountFormatted: string
  interestRate?: number
  loanTerm?: number
  ltv?: number
  programUsed: string
  closingDate: string
  daysToClosure: number
  borrowerStory: BorrowerStory
  metrics?: DealMetrics
  featured?: boolean
  viewCount?: number
  squareFootage?: number
  yearBuilt?: number
  bedrooms?: number
  bathrooms?: number
}

/**
 * Filter state for gallery
 */
export interface GalleryFilterState {
  search: string
  programTypes: string[]
  propertyTypes: string[]
  loanAmount: [number, number]
  closingDateRange: 'lastMonth' | 'last3Months' | 'last6Months' | 'lastYear' | 'allTime'
  occupancy: string[]
  borrowerTypes: string[]
  locations: string[]
}

/**
 * Pagination options
 */
export interface PaginationState {
  currentPage: number
  itemsPerPage: 12 | 24 | 48
  totalItems: number
}

/**
 * Sort options
 */
export type SortOption = 'recent' | 'popular' | 'amountDesc' | 'amountAsc' | 'rating'

/**
 * View type
 */
export type ViewType = 'grid' | 'list'

/**
 * Gallery statistics
 */
export interface GalleryStats {
  totalFunded: string
  totalDeals: number
  successRate: number
  avgDaysToClose: number
  marketsServed: number
}

/**
 * Featured deal (highlighted)
 */
export interface FeaturedDeal extends FundedDeal {
  featured: true
  featuredReason?: string
}

/**
 * Deal detail with related deals
 */
export interface DealDetail extends FundedDeal {
  relatedDeals?: FundedDeal[]
  timeline?: {
    prequalificationDate: string
    approvalDate: string
    closingDate: string
  }
}

/**
 * Complete Funded Loans Gallery data
 */
export interface FundedLoansGalleryData {
  deals: FundedDeal[]
  featuredDeals: FeaturedDeal[]
  stats: GalleryStats
  filterOptions: {
    programTypes: string[]
    propertyTypes: string[]
    occupancyTypes: string[]
    borrowerTypes: string[]
    locations: string[]
  }
  dealsPerPage: number
}

/**
 * Gallery view state (client-side)
 */
export interface GalleryViewState {
  filters: GalleryFilterState
  pagination: PaginationState
  sortBy: SortOption
  viewType: ViewType
  filteredDeals: FundedDeal[]
  displayedDeals: FundedDeal[]
  isLoading: boolean
  selectedDeal?: FundedDeal
}
