# Loan Program Directory Specification

## Overview
The Loan Program Directory is a searchable, filterable listing of all 179+ CMRE loan programs. Users can browse, search, and filter programs by type, borrower eligibility, credit requirements, and other criteria to find programs that match their needs.

## Purpose
- Help borrowers discover loan programs matching their situation
- Provide clear program comparison information
- Drive traffic to individual program detail pages
- Support SEO with rich program listings

## Key Sections

### 1. Hero Section
- "Browse Our Loan Programs" heading
- Brief description: "179+ programs for every borrower and property type"
- Search bar (search across program names, descriptions)
- Primary CTA: "Apply Now"

### 2. Filter Sidebar (Desktop) / Filter Panel (Mobile)
- **Program Type Filter** (multi-select)
  - Residential, Commercial, Hard Money, NonQM, Reverse Mortgage, Construction, Land, Jumbo, etc.

- **Borrower Type Filter** (multi-select)
  - Individual, Self-Employed, Business Owner, Foreign National, LLC, Corporation

- **Credit Score Filter** (range slider)
  - 500-800+ (shows programs matching selected minimum)

- **Down Payment Filter** (range slider)
  - 0-20%+ (shows programs available at selected down payment)

- **Occupancy Filter** (multi-select)
  - Owner Occupied, Investment Property, Investor

- **Purpose Filter** (multi-select)
  - Purchase, Refinance, Cash-Out, Construction, etc.

- **Reset Filters** button

### 3. Program Listing
- Display mode toggle: Grid / List view
- Sort options dropdown:
  - Relevant (default)
  - Alphabetical A-Z
  - Most Popular
  - Newest

- Results counter: "Showing X of 179 programs"
- Program cards display:
  - Program name and type badge
  - Program highlights (2-3 bullet points)
  - Key facts (min credit score, interest rate range, min down payment)
  - "View Details" CTA button
  - Responsive: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)

### 4. Empty State
- When no programs match filters
- "No programs match your filters"
- Suggest resetting filters
- Show "Start Application" CTA anyway

### 5. Pagination / Load More
- Show 12 programs per page
- Pagination controls or "Load More" button
- Jump to page number input on desktop

## Layout & Responsive Behavior

**Desktop:**
- Sidebar on left (250px), content on right
- Hero full width
- Grid layout with 3 columns
- All filters visible

**Tablet:**
- Collapsible filter panel (hamburger menu)
- Grid layout with 2 columns
- Horizontal scroll for filter pills

**Mobile:**
- Full width filter panel when opened
- 1 column card layout
- Filter toggle button
- Touch-friendly buttons and controls

## Design Tokens

**Colors:**
- Primary: Cyan-600
- Badges: Cyan-100 text, Cyan-700 (light), Cyan-900/30 (dark)
- Borders: Slate-200 (light), Slate-700 (dark)
- Hover: Cyan-50 (light), Cyan-900/20 (dark)

**Typography:**
- Headings: Bebas Neue, uppercase
- Body: Inter
- Filter labels: Small, bold, uppercase

**Spacing:**
- Section padding: 48px
- Card gap: 24px
- Filter gap: 16px

## Data Dependencies

**Program Data Needed:**
- All programs where `is_local_variation` = false (national programs)
- For each program:
  - name, program_type, mortgageProgramHighlights
  - minCreditScore, minimumLoanAmount, maximumLoanAmount, interestRates
  - propertyTypesResidential, propertyTypesCommercial
  - borrowerType, occupancy, purpose_of_mortgage

**Filtering Logic:**
- Match programs against selected filters
- Show only programs meeting all criteria (AND logic)
- Update results in real-time as filters change

## Interaction Patterns

- **Search**: Real-time text search across program names and highlights
- **Filter**: Multi-select checkboxes for categories
- **Slider**: Range selection for credit score, down payment
- **Sort**: Dropdown to reorder results
- **View Toggle**: Switch between grid and list views
- **Program Card**: Click to navigate to detail page
- **Filter Pill** (Mobile): Removable tag for applied filters

## Edge Cases

- No programs match any filters → Empty state
- Very long program names → Truncate with ellipsis
- Mobile with many filters applied → Show applied filter pills, collapsed sidebar
- Search with no results → "No programs match your search"
- Pagination on last page → Disable next button

## Performance Considerations

- Load first 12 programs initially
- Lazy load additional pages
- Debounce search input (300ms)
- Cache filter results
- Preload detail pages on hover
