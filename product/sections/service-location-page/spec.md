# Service Location Page Specification

## Overview
The Service Location Page is a location-specific landing page that showcases CMRE's services, local team, and programs available in a specific city or market. Users can explore programs available in their area, meet the local specialists, and understand CMRE's presence in that location.

## Key Sections

### 1. Hero Section
- Headline: "[City Name] Mortgage Services"
- Subheadline: "Expert lending solutions for [State/Region]"
- Background: Location image or branded color overlay
- Quick stats:
  - Years serving the market
  - Number of local deals funded
  - Local team size
- CTA buttons:
  - Primary: "Get Pre-Qualified"
  - Secondary: "Speak with Specialist"

### 2. Office Information Card
- Location image or office interior photo
- Office name: "CMRE [City] Office"
- Address: Full street address
- Phone number (clickable)
- Email (clickable)
- Office hours (Mon-Fri HH:MM - HH:MM, Sat/Sun if applicable)
- Directions button (link to Google Maps)
- Badge: "Locally Managed" or "Specialist Team"

### 3. Local Team Section
- Headline: "Meet Our [City] Team"
- Description: "Our local lending specialists are here to help"
- Team cards (3-5 specialists):
  - Profile photo
  - Name
  - Title (e.g., "Senior Loan Officer")
  - Specialties: Tag list (e.g., "Residential", "Commercial", "FHA")
  - Bio: 2-3 sentences
  - Email link
  - Phone link
  - Years of experience badge
- "View Full Team" link to expanded team page

### 4. Local Market Overview
- 3-column stats grid:
  - **Active Programs**: X+ programs available
  - **Total Funded**: $X Billion+ funded locally
  - **Market Coverage**: X+ neighborhoods/areas served
- Market description: 2-3 sentences about local market focus

### 5. Featured Local Programs Section
- Headline: "Popular Programs in [City]"
- Description: "Programs most commonly used by borrowers in this market"
- 4-6 program cards:
  - Program name
  - Program type badge (Residential, Commercial, etc.)
  - 2-3 key highlights
  - Min credit score
  - Interest rate range
  - CTA: "View Details"
- Show availability badge: "Available in [City]"

### 6. Recent Local Funded Deals
- Headline: "Recently Funded in [City]"
- Description: "Success stories from our local borrowers"
- 6-8 deal cards in grid:
  - Deal image (property photo)
  - Loan amount
  - Property type
  - Location / neighborhood
  - Loan program used
  - Closing date
  - Hover: Brief success story or quote
- Pagination or "View More" link

### 7. Why CMRE Local Section
- Headline: "Why CMRE [City]?"
- 4-5 key reasons/differentiators:
  - **Local Expertise**: Years serving this market
  - **Fast Processing**: Average approval time
  - **Multiple Programs**: 100+ programs available locally
  - **Dedicated Support**: Local team ready to help
  - **Competitive Rates**: Market-leading rates
- Each reason with icon and brief description

### 8. Service Areas Map (Optional)
- Interactive map showing:
  - Primary office location (pin)
  - Coverage area (highlighted region or service radius)
  - Secondary offices if applicable
- Clicking areas shows neighborhoods served

### 9. Customer Testimonials
- Headline: "Success Stories from [City]"
- 3-4 testimonial cards:
  - Star rating
  - Quote/testimonial text
  - Customer name
  - Loan program used
  - Approval date
  - Photo (optional headshot)

### 10. Local Resources Section
- Headline: "Resources for [City] Borrowers"
- 4-6 resource cards or links:
  - Market guides (e.g., "First-Time Buyer Guide", "Commercial Lending Guide")
  - Interest rate trends chart
  - Local school ratings (if residential focus)
  - Neighborhood comparison tool
  - Market reports
  - Blog articles specific to region

### 11. Frequently Asked Questions
- Expandable accordion
- 4-6 local-specific questions:
  - "What programs are available in [City]?"
  - "What's the average approval time in [City]?"
  - "What are typical rates for [City] borrowers?"
  - "Can you fund non-QM loans in [City]?"
  - "What's the minimum credit score required?"
  - "How do I start the pre-qualification process?"

### 12. Bottom CTA Section
- Headline: "Ready to Start Your [City] Loan Journey?"
- Description: "Our [City] team is ready to help you find the perfect loan program"
- Two CTAs:
  - Primary: "Get Pre-Qualified Now"
  - Secondary: "Request a Callback"

## Layout & Responsive Behavior

**Desktop:**
- Full-width hero with side-by-side text and image
- 3-column grid for stats and team cards
- Office info card prominent with image
- 4+ column grids for programs and deals
- Sidebar optional for announcements or upsells

**Tablet:**
- Hero adjusted for tablet width
- 2-column layouts for stats and team
- Stacked office info and image
- 3-column grids for programs and deals

**Mobile:**
- Hero optimized for mobile height
- Single column for all sections
- Full-width office info card with stacked layout
- Horizontal scroll for team carousel or single column
- 1-2 column grids for programs and deals

## Design Tokens

**Colors:**
- Primary: Cyan-600 (inherited from design system)
- Secondary: Slate-600
- Accents: Cyan-500
- Location badge: Amber-500 (to differentiate location-specific content)
- Backgrounds: White (light), Slate-900 (dark)

**Typography:**
- H1: Bebas Neue, 3-4xl (location name emphasis)
- H2: Bebas Neue, 2-3xl
- Body: Inter, 16px
- Team card title: Inter bold, 18px

**Spacing:**
- Section: 64px (desktop), 48px (tablet), 32px (mobile)
- Component: 24px

## Data Dependencies

- **Office Information**: Address, phone, email, hours from local_cmre_address field
- **Team Members**: List of specialists for this location with photos, bios, specialties
- **Local Programs**: Filtered programs where is_local_variation=true for this location
- **Funded Deals**: Recent deals from this location
- **Market Stats**: Location-specific metrics
- **Testimonials**: Customer reviews from this market

## Interaction Patterns

- **Hero CTA**: Navigate to pre-qualification form or call specialist
- **Office Card**: Phone number initiates call, email opens mailto, directions opens maps
- **Team Cards**: Click to view full bio, email/phone for contact
- **Program Cards**: Hover shows "Available Here" badge, click navigates to program detail
- **Deals Grid**: Hover reveals success story or quote
- **FAQ**: Expand/collapse with smooth animation
- **Map**: Pinch to zoom, click areas for neighborhood details
- **Contact CTA**: Submit form or schedule callback

## Performance Considerations

- Lazy load office and team photos
- Debounce scroll animations for map
- Preload first team member photo
- Optimize location hero image for mobile
- Cache local program data

## SEO Considerations

- Page title: "[City] Mortgage Lender | CMRE"
- Meta description: "Get [City] home loans from CMRE. [Number]+ programs, local experts, fast approvals."
- Schema markup for LocalBusiness (office address, phone, hours)
- Schema markup for LocalProgram (programs available in location)
- H1 for city/location name
- Alt text on all location and team photos
- Structured data for team members (Person schema)

## URL Pattern

`/locations/[city-slug]` or `/markets/[city-slug]`

Examples:
- `/locations/new-york`
- `/locations/los-angeles`
- `/locations/chicago`

## Location Variables (Dynamic)

The page accepts location context to customize content:
- `locationName`: Full city name (e.g., "New York")
- `state`: State abbreviation (e.g., "NY")
- `officeData`: Full office details (address, hours, team)
- `localPrograms`: Programs filtered for this location
- `fundedDealsCount`: Number of deals funded locally
- `teamSize`: Number of local specialists
- `yearsServing`: How long CMRE has served this market
- `marketDescription`: Custom description of local market focus
