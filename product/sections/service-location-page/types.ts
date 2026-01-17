/**
 * Service Location Page Types
 * Defines the data structure for location-specific lending information
 */

/**
 * Office information for a specific location
 */
export interface OfficeInfo {
  id: string
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  phone: string
  email: string
  hours: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday?: string
    sunday?: string
  }
  image?: string
  yearsServing: number
  managedBadge?: string
}

/**
 * Team member specializing in this location
 */
export interface TeamMember {
  id: string
  name: string
  title: string
  email: string
  phone: string
  photo?: string
  bio: string
  specialties: string[]
  yearsExperience: number
  fundsManaged?: string
  successfulClosings?: number
}

/**
 * Program with local availability indicator
 */
export interface LocalProgram {
  id: string
  name: string
  slug: string
  programType: string
  highlights: string[]
  minCreditScore: number
  interestRateRange: string
  minDownPayment: string
  borrowerTypes: string[]
  occupancy: string[]
  propertyTypes: string[]
  availableInLocation: boolean
  localVolume?: number
}

/**
 * Funded deal from a specific location
 */
export interface LocalFundedDeal {
  id: string
  image: string
  loanAmount: string
  propertyType: string
  neighborhood: string
  city: string
  programUsed: string
  closingDate: string
  successStory?: string
  borrowerQuote?: string
  borrowerName?: string
}

/**
 * Customer testimonial from this market
 */
export interface LocationTestimonial {
  id: string
  rating: number
  quote: string
  customerName: string
  loanProgram: string
  approvalDate: string
  photo?: string
  location: string
}

/**
 * Local market statistics
 */
export interface LocalMarketStats {
  activeProgramsCount: number
  totalFundedAmount: string
  neighborhoodsServed: number
  yearsServing: number
  dealsClosedLocally: number
  teamSize: number
}

/**
 * Local market description and focus
 */
export interface LocalMarketInfo {
  city: string
  state: string
  region: string
  marketDescription: string
  primaryMarketFocus: string[]
  demographicFocus?: string
  economicHighlights?: string[]
}

/**
 * Resource for local borrowers
 */
export interface LocalResource {
  id: string
  title: string
  description: string
  type: 'guide' | 'tool' | 'article' | 'chart' | 'report'
  link: string
  icon?: string
  relevantPrograms?: string[]
}

/**
 * Complete Service Location Page data
 */
export interface ServiceLocationPageData {
  locationId: string
  city: string
  state: string
  slug: string
  heroImage?: string
  officeInfo: OfficeInfo
  teamMembers: TeamMember[]
  marketStats: LocalMarketStats
  marketInfo: LocalMarketInfo
  localPrograms: LocalProgram[]
  recentDeals: LocalFundedDeal[]
  testimonials: LocationTestimonial[]
  resources: LocalResource[]
  faqItems: {
    question: string
    answer: string
  }[]
  whyChooseReasons: {
    title: string
    description: string
    icon?: string
  }[]
}
