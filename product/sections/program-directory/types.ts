// Program Directory Types

export interface ProgramCard {
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
}

export interface FilterState {
  search: string
  programType: string[]
  borrowerType: string[]
  creditScore: [number, number]
  downPayment: [number, number]
  occupancy: string[]
  purpose: string[]
}

export interface ProgramDirectoryProps {
  programs: ProgramCard[]
  totalCount: number
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  onProgramSelect: (programId: string) => void
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
}

export interface DirectoryStats {
  totalPrograms: number
  programTypes: Array<{ type: string; count: number }>
  avgMinCreditScore: number
  loanAmountRange: { min: string; max: string }
}
