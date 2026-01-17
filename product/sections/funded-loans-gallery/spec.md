# Funded Loans Gallery Specification

## Overview
The Funded Loans Gallery showcases CMRE's success stories across various loan programs, property types, and markets. It serves as social proof, demonstrating diverse borrower scenarios and lending capabilities. Users can explore deals, filter by criteria, and read success stories to gain confidence in CMRE's lending expertise.

## Key Sections

### 1. Hero Section
- Headline: "Success Stories from Our Borrowers"
- Subheadline: "Explore deals we've funded across the nation"
- Background: Gradient or collage of property images
- Quick stat: "X,000+ Loans Funded" with total funding amount
- Search bar: "Search by location, program, or deal..."
- Optional: "View Latest Deals" or "View Most Popular" quick links

### 2. Filter Panel (Desktop Sidebar / Mobile Collapsible)
- Search by location (city/state autocomplete)
- Program Type filter (multi-select):
  - Residential
  - Commercial
  - Hard Money
  - NonQM
  - Construction
  - Reverse Mortgage
  - Investment Properties
- Property Type filter (multi-select):
  - Single Family
  - Condo
  - Townhome
  - Multi-Unit 2-4
  - Multi-Unit 5+
  - Commercial
  - Mixed-Use
  - Land
- Loan Amount range slider:
  - Min: $50,000
  - Max: $5,000,000+
- Closing Date range:
  - Last Month
  - Last 3 Months
  - Last 6 Months
  - Last Year
  - All Time
- Occupancy filter:
  - Owner Occupied
  - Investment Property
- Borrower Type filter:
  - Individual
  - Self-Employed
  - Business Owner
  - LLC/Corporation
- Clear All Filters button

### 3. View Controls
- Grid view (default): 3 columns on desktop, 2 on tablet, 1 on mobile
- List view toggle: Full-width list with more details per item
- Sort dropdown:
  - Most Recent (default)
  - Most Popular / Most Viewed
  - Loan Amount (High to Low)
  - Loan Amount (Low to High)
  - Highest Success Rating
- Results counter: "Showing X of Y deals"

### 4. Deal Cards (Grid View)
Each card displays:
- Property image (prominent, clickable)
- Location badge (city/state)
- Property type
- Loan amount (large, emphasized)
- Brief description (1-2 sentences about the property)
- Program used
- Closing date
- Hover effect:
  - Image zoom slightly
  - Show "View Details" CTA
  - Reveal borrower quote or success snippet

### 5. Deal List Items (List View)
Each item displays in a full-width row:
- Property image (smaller thumbnail)
- Location (prominent)
- Loan amount
- Property type & Occupancy
- Program used
- Closing date
- Borrower name (if public) or "Anonymous"
- Brief quote/story (1 sentence)
- "View Details" CTA
- Status indicators (e.g., "Recently Closed", "Quick Approval", "Investor Friendly")

### 6. Deal Detail Modal/Page
When user clicks a deal, expand or navigate to detailed view:
- Large property image gallery (if multiple photos)
- Property location with map
- Loan details:
  - Loan amount
  - Interest rate (if public)
  - Loan term
  - LTV (if disclosed)
- Borrower story:
  - Quote about the experience
  - Borrower profile (anonymized or with permission)
  - Challenges they faced
  - How CMRE helped
- Program details:
  - Program name
  - Why this program was used
  - Key benefits for this borrower
- Timeline:
  - Pre-qualification date
  - Approval date
  - Closing date
  - Days from application to close
- Property details:
  - Address
  - Property type
  - Year built
  - Square footage
  - Bedrooms/bathrooms (if residential)
- Related success stories: 3-4 similar deals

### 7. Empty State
When no deals match filters:
- Illustration or icon
- Headline: "No deals match your criteria"
- Explanation: "Try adjusting your filters or view all deals"
- "Clear Filters" button
- "View All Deals" button

### 8. Pagination
- Options: 12, 24, or 48 items per page
- Pagination controls: Previous/Next buttons, page numbers
- "Load More" button alternative (infinite scroll on mobile)
- Jump to page input field

### 9. Featured Section (Optional - Hero Below Filter)
- Carousel of 3-5 "Deal of the Month" or "Trending Deals"
- Auto-rotates every 5 seconds
- Manual navigation with arrows and dots
- Each featured deal: large image, loan amount, location, quick story

### 10. Success Metrics (Optional - Below Hero)
- Global metrics displayed prominently:
  - Total Funded: $X Billion+
  - Total Deals: X,000+
  - Success Rate: X%
  - Average Days to Close: X days
  - Markets Served: X+ states

## Layout & Responsive Behavior

**Desktop:**
- Sidebar filter panel (fixed, 20% width)
- Main content area: 80% width
- Grid: 3 columns of deal cards
- Full-featured controls and view toggles
- Detail modal overlay

**Tablet:**
- Collapsible filter panel (slide-out or accordion)
- Grid: 2 columns of deal cards
- Simplified controls
- Detail page instead of modal

**Mobile:**
- Full-screen collapsible filter panel with overlay
- Grid: 1 column
- Simplified filters
- Touch-optimized detail page
- "Load More" button for pagination

## Design Tokens

**Colors:**
- Primary: Cyan-600 (inherited)
- Secondary: Slate-600
- Accents: Cyan-500
- Success badge: Green-500
- Backgrounds: White (light), Slate-900 (dark)
- Property image overlay: Black with 30% opacity

**Typography:**
- H1: Bebas Neue, 3-4xl
- H2: Bebas Neue, 2-3xl
- Card title: Inter bold, 18px
- Body: Inter, 16px

**Spacing:**
- Section: 64px (desktop), 48px (tablet), 32px (mobile)
- Component: 24px
- Card gap: 24px

## Data Dependencies

- **Funded Deals**: Array of deal records with all details
- **Statistics**: Aggregate metrics (total funded, count, rate, avg days)
- **Locations**: Cities/states for location filtering
- **Programs**: Program list for program type filtering
- **Property Types**: Standardized property types

## Interaction Patterns

- **Search**: Real-time fuzzy search on location and property details
- **Filters**: Multi-select checkboxes with real-time result updates
- **Sliders**: Smooth range selection for loan amount and dates
- **Cards**: Hover to reveal details, click to expand
- **View Toggle**: Smooth transition between grid and list
- **Pagination**: Previous/Next with disabled states, clickable page numbers
- **Detail Modal**: Smooth fade-in, click outside to close
- **Share**: Share button on deal details (social sharing icons)

## Performance Considerations

- Lazy load deal images (especially in grid view)
- Debounce search input (300ms)
- Virtualize list for large datasets (render only visible items)
- Preload featured deal carousel images
- Cache filter results
- Use image optimization (WebP, responsive sizes)

## SEO Considerations

- Page title: "Funded Loans Gallery | Success Stories | CMRE"
- Meta description: "Explore X,000+ funded loans from CMRE. See success stories across residential, commercial, and investment properties."
- Schema markup for Deals (structured data)
- Alt text on all property images
- H1 for page headline
- Breadcrumb navigation (if nested under a section)
- URLs for detail pages: `/deals/[deal-id]` or `/gallery/[deal-id]`

## URL Patterns

- Gallery page: `/gallery` or `/success-stories` or `/funded-deals`
- Deal detail: `/gallery/[deal-id]` or `/deals/[deal-id]`
- Filtered view: `/gallery?program=residential&state=ny` etc.

## Data Structure Example

Each funded deal record includes:
```
{
  id: unique-deal-id
  propertyImage: url
  propertyImages?: [urls]
  location: { city, state, address }
  propertyType: string
  occupancy: "Owner Occupied" | "Investment Property"
  borrowerType: string
  loanAmount: number
  loanAmountFormatted: "$X,XXX,XXX"
  interestRate?: number
  loanTerm?: number
  ltv?: number
  programUsed: string
  closingDate: ISO date
  daysToClosure: number
  borrowerQuote: string
  borrowerStory: string
  borrowerName?: string (optional if anonymous)
  succesSMetrics?: { quick: boolean, largeAmount: boolean, complexScenario: boolean }
  tags: [strings] (e.g., "Quick Approval", "Large Loan", "Self-Employed")
  featured?: boolean
  viewCount?: number
}
```

## Interaction Features

- **Share**: Social sharing buttons (LinkedIn, Twitter, Facebook, copy link)
- **Print**: Print-friendly version of deal details
- **Email**: "Email this deal to someone" functionality
- **Save**: "Save favorite deals" (requires user account)
- **Compare**: Compare up to 3 deals side-by-side
- **Contact**: "Interested in similar deal?" CTA to contact specialist

## Accessibility

- Semantic HTML (main, section, article, etc.)
- ARIA labels on interactive elements
- Keyboard navigation for all controls
- Focus visible on all interactive elements
- Color not the only indicator (use icons/text)
- Alt text on all images
- Form labels properly associated
