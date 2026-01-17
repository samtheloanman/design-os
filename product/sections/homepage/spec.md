# Homepage Specification

## Overview
The Homepage is the primary landing page for CMRE. It introduces the company value proposition, showcases loan program options, displays social proof (testimonials, funded deals), and guides users toward applications or callbacks.

## Key Sections

### 1. Hero Section
- Bold headline: "Find Your Loan Program"
- Subheadline: "179+ programs for every borrower and property type"
- Background: Gradient (cyan to darker cyan) or hero image
- CTA buttons:
  - Primary: "Browse Programs"
  - Secondary: "Get Pre-Qualified"
- Optional: Search/quick filter for program type

### 2. Value Proposition (3-Column)
- **Fast & Easy**: Pre-qualification in 24 hours
- **179+ Programs**: Residential, Commercial, Hard Money, Non-QM, and more
- **Expert Support**: Specialists in 50+ markets nationwide

### 3. Featured Programs Carousel
- Showcase 4-6 popular/featured programs
- Program cards: name, highlights, min credit, rate range, CTA
- Horizontal scroll on mobile, carousel controls on desktop
- "View All Programs" link

### 4. How It Works (4-Step Process)
1. **Get Pre-Qualified** - Quick online application
2. **Compare Options** - Explore available programs
3. **Choose Your Program** - Select best fit
4. **Close Your Loan** - Funding in days

Each step with icon and brief description

### 5. Trust Signals Section
- **By The Numbers**:
  - $X Billion Funded (mock: $10B+)
  - X+ Successful Closings (mock: 50,000+)
  - X Locations (mock: 50+)
  - Founded: Year (1995)

- **Customer Testimonials** (3 featured):
  - Star rating, quote, name, location
  - Carousel or grid layout

### 6. Recently Funded Deals (Showcase)
- 4-6 recent funded loan examples
- Image, loan amount, location, program type
- Grid layout, hover to see details
- "View More Deals" link

### 7. Why Choose CMRE Section
- Headline: "Why Choose CMRE?"
- 4-5 key differentiators:
  - Competitive Rates
  - Fast Approvals
  - Personalized Service
  - National Coverage
  - Expert Specialists

### 8. Loan Program Categories Grid
- Display 6-8 main program types
- Category cards with icon
- Count of programs in each category
- Link to browse category

### 9. FAQ Section (4-6 Common Questions)
- Expandable accordion
- Questions about process, programs, requirements
- "Contact us" CTA for unanswered questions

### 10. Bottom CTA Section
- Headline: "Ready to Get Started?"
- Description: "Get pre-qualified in minutes"
- Two CTAs:
  - "Start Application"
  - "Request a Callback"

## Layout & Responsive Behavior

**Desktop:**
- Full width hero
- 3-column sections
- Carousel with arrows
- Grid layouts with 4+ columns

**Tablet:**
- Hero adjusted for tablet
- 2-3 column layouts
- Carousel with pagination dots
- 3-column grids

**Mobile:**
- Hero full width
- Single column sections
- Horizontal scroll carousels
- 1-2 column grids

## Design Tokens

**Colors:**
- Primary: Cyan-600
- Secondary: Slate-600
- Accents: Cyan-500
- Backgrounds: White (light), Slate-900 (dark)

**Typography:**
- H1: Bebas Neue, 3-4xl
- H2: Bebas Neue, 2-3xl
- Body: Inter, 16px

**Spacing:**
- Section: 64px (desktop), 48px (tablet), 32px (mobile)
- Component: 24px

## Data Dependencies

- **Featured Programs**: 4-6 national programs
- **Testimonials**: 3-4 customer reviews
- **Funded Deals**: 4-6 recent deals
- **Stats**: Company metrics
- **Program Categories**: Count by type

## Interaction Patterns

- **Hero CTA**: Smooth scroll to programs or navigate to directory
- **Carousel**: Previous/Next arrows, auto-play with pause on hover
- **Testimonials**: Clickable to view full testimonial
- **FAQ**: Expand/collapse with smooth animation
- **Program Cards**: Hover effect, link to detail page

## Performance Considerations

- Lazy load carousel images
- Debounce scroll animations
- Optimize hero image for mobile
- Preload first carousel slide

## SEO Considerations

- Schema markup for Organization
- H1 for main headline
- Alt text on all images
- Structured data for loan programs
