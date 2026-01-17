// Program Detail Page Types
// Based on Programs ACF Field Group (group_programs_consolidated)

export interface Program {
  id: string
  name: string
  slug: string
  isLocalVariation: boolean

  // Tab 1: Location Information (conditional)
  locationInfo?: {
    keyword: string
    yoastLocationId: string
    localCmreAddress: Address
    cityName: string
    countyName: string
    regionName: string
    regionCode: string
    zipCode: string[]
    cityLatitude: string
    cityLongitude: string
    cityMedianHouseholdIncome: string
    cityPopulation: string
    cityPopulationMale: string
    cityPopulationMalePercent: string
    cityPopulationFemale: string
    cityPopulationFemalePercent: string
    cityPopulationChildren: string
    cityPopulationChildrenPercent: string
    cityPopulationAdults: string
    cityPopulationAdultsPercent: string
    cityPopulationElderly: string
    cityPopulationElderlyPercent: string
  }

  // Tab 2: Program Information
  programType: 'Residential' | 'Commercial' | 'NonQM' | 'Hard Money' | 'Reverse Mortgage' | 'Construction' | 'Land' | 'Jumbo Residential' | 'Super Jumbo Residential' | 'Commercial Super Jumbo' | '2nd Mortgage HELOAN HELOC' | '2nd Mortgage NonQM'
  residential?: string[]
  commercial?: string[]
  hardMoney?: string[]
  nonqm?: string[]
  reverseMortgage?: string[]
  mortgageProgramHighlights: string

  // Tab 3: Financial Terms
  interestRates: string
  minimumLoanAmount: string
  maximumLoanAmount: string
  minCreditScore: number
  maxLTV: string
  maxDebtToIncomeRatio: number
  minDSCR?: number

  // Tab 4: Program Details
  detailsAboutProgram: string
  requirements: string
  whatAre: string
  benefitsOf: string
  howToQualifyFor: string
  whyUs: string
  programFAQ: string

  // Tab 5: Property & Loan Details
  propertyTypesResidential?: string[]
  propertyTypesCommercial?: string[]
  occupancy: string[]
  lienPosition: string[]
  amortizationTerms: string[]
  incomeDocumentationType: string[]
  purposeOfMortgage: string[]
  refinanceMortgage?: string[]

  // Tab 6: Borrower Details
  borrowerType: string[]
  citizenship: string[]
  creditEvent: string[]
  mortgageLates: string[]
  lendersInfo?: string
}

export interface Address {
  address: string
  state: string
  country: string
}

export interface ProgramDetailPageProps {
  program: Program
  relatedPrograms: Program[]
  testimonials: Testimonial[]
  fundedLoans: FundedLoan[]
  onApply: () => void
  onRequestCallback: () => void
}

export interface Testimonial {
  id: string
  borrowerName: string
  testimonialText: string
  rating: number
  loanProgram: string
  propertyLocation: string
}

export interface FundedLoan {
  id: string
  title: string
  loanAmount: string
  location: string
  programUsed: string
  propertyImage: string
}
