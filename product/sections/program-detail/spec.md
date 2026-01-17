# Program Detail Page Specification

## Overview
The Program Detail Page displays comprehensive information for a single loan program (national or local variation). The page showcases all program data from the Programs ACF field group organized into logical sections, with clear CTAs for applying or requesting callbacks.

## Purpose
- Educate borrowers about a specific loan program
- Showcase program eligibility, requirements, and benefits
- Drive conversions via Apply and Request Callback CTAs
- Support SEO with detailed, structured content

## Key Sections

### 1. Program Hero
- Program name and type (e.g., "FHA Mortgage" or "Conventional - San Francisco")
- Key highlights (3-5 bullet points from `mortgage_program_highlights`)
- Primary CTA: "Apply Now" or "Get Pre-Qualified"
- Secondary CTA: "Request Callback"
- Hero image or gradient background

### 2. Program Overview
- `what_are` - What is this type of loan?
- `benefits_of` - Key benefits
- Program type badge (Residential, Commercial, Hard Money, etc.)
- Visual divider/separator

### 3. Quick Facts / Key Terms
- Financial snapshot:
  - Minimum credit score
  - Loan amount range (min-max)
  - Interest rates
  - Max LTV
  - Max DTI (if applicable)
  - Min DSCR (if commercial)
- Property eligibility:
  - Property types (residential/commercial)
  - Occupancy types
  - Lien position options
  - Amortization terms

### 4. Eligibility & Requirements
- `requirements` - What's needed to qualify
- `how_to_qualify_for` - Steps to qualify
- Borrower types: Individual, Self-Employed, LLC, etc.
- Citizenship requirements: US Citizen, Permanent Resident, Foreign National
- Credit history acceptance: Bankruptcy, Foreclosure, Short Sale, etc.
- Mortgage payment history: No Lates, 30/60/90 day lates accepted?
- Income documentation types: W2, 1099, Bank Statements, etc.
- Purpose of mortgage: Purchase, Refinance, Cash-Out, etc.

### 5. Program Details
- `details_about_mortgage_loan_program` - Comprehensive details
- `why_us` - Why choose CMRE for this program

### 6. FAQ Accordion
- `Program_FAQ` - Frequently asked questions (parse into expandable items)

### 7. Local Variation Info (if applicable)
*Only shown when `is_local_variation` = true*
- Local office address (`local_cmre_address`)
- City/region served (`city_name`, `county_name`, `region_name`)
- Zip codes served (`zip_code`)
- Local contact CTA: "Call our local team"

### 8. Related Programs
- 2-3 similar programs (same program type)
- Link cards to other programs
- "Browse all programs" link

### 9. Testimonials
- 2-3 customer testimonials for this program (if available)
- Star rating, borrower name, quote
- Link to full testimonials page

### 10. Funded Loans Showcase
- 3-4 recent funded deals using this program
- Deal summary, property image, loan amount, location
- Link to full funded loans gallery

### 11. CTA Section (Sticky or Bottom)
- "Ready to apply?" or "Next steps?"
- Primary: "Start Application"
- Secondary: "Request a Callback"
- Tertiary: "Compare Programs"

## Layout & Responsive Behavior

**Desktop:**
- Hero: Full width
- Content: Max 900px width centered
- Sections stack vertically
- Quick Facts in 2-3 column grid
- Testimonials/Funded Loans in horizontal scrollable cards or grid

**Tablet:**
- Hero: Full width
- Content: Adjust max width to fit
- Quick Facts in single column or 2 columns
- Cards stack more

**Mobile:**
- Hero: Full width, condensed height
- Content: Full width, padding
- Quick Facts: Single column cards
- FAQs: Single column
- CTAs: Full width buttons
- Cards: Single column stack

## Design Tokens

**Colors:**
- Primary CTA: Cyan-600 (`#06b6d4`)
- Secondary CTA: Slate-600 (`#475569`)
- Accents: Cyan-500 for highlights
- Backgrounds: White (light), Slate-900 (dark)
- Text: Slate-900 (light mode), Slate-50 (dark mode)
- Borders: Slate-200 (light), Slate-700 (dark)

**Typography:**
- Headings (H1-H3): Bebas Neue, uppercase, spaced
- Body: Inter, 16px, line-height 1.5
- Code/Legal: IBM Plex Mono

**Spacing:**
- Section padding: 48px (desktop), 32px (tablet), 24px (mobile)
- Card padding: 24px
- Gap between items: 16px

## Data Dependencies

**Required Program Data:**
- `name`, `program_type` (required)
- `mortgage_program_highlights`, `what_are`, `benefits_of` (recommended)
- `details_about_mortgage_loan_program`, `requirements`, `how_to_qualify_for`, `why_us`, `Program_FAQ` (content)
- Financial terms: `interest_rates`, `minimum_loan_amount`, `maximum_loan_amount`, `min_credit_score`, `max_ltv`, `max_debt_to_income_ratio`, `min_dscr`
- Property & loan: `property_types_residential`, `property_types_commercial`, `occupancy`, `lien_position`, `amortization_terms`
- Borrower: `borrower_type`, `citizenship`, `credit_event`, `mortgage_lates`
- Income: `income_documentation_type`, `purpose_of_mortgage`

**Related Data:**
- Similar Program posts (same program_type)
- Related Testimonials (linked to this Program)
- Related Funded Loans (linked to this Program)
- Local office info (if `is_local_variation` = true)

## Interaction Patterns

- **Apply Now**: Opens application form (Floify integration) or link to application
- **Request Callback**: Opens callback form with program pre-selected
- **Program Comparison**: Allows user to compare 2-3 programs side-by-side
- **FAQ Accordion**: Smooth expand/collapse with smooth scroll
- **Related Programs**: Click card to navigate to that program detail page
- **Copy Link**: Share button to share program page

## Edge Cases

- **No testimonials**: Hide testimonials section
- **No funded loans**: Hide funded loans section
- **No related programs**: Hide related programs section
- **Local program with no address**: Hide local office section
- **Long FAQ**: Limit to 10 items visible, "Show More" button
- **Commercial program**: Show DSCR, commercial property types
- **Residential program**: Hide commercial property types, show residential only
