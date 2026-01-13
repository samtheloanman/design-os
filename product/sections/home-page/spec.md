# Home Page Template Specification

## Overview
The Home Page serves as the primary gateway to the Custom Mortgage platform. It highlights core lending services, establishes trust through "Recently Funded" loans, and provides clear entry points for starting an application.

## User Flows
1. **Hero Entry**: User lands on the page, sees the brand value proposition, and clicks "Start Application".
2. **Service Discovery**: User scrolls through the service grid to find a specific loan type (e.g., Stated Income).
3. **Trust Validation**: User views recently funded loans and testimonials to build confidence.

## UI Requirements

### 1. Hero Section
- **Heading**: "Custom Mortgage – Nationwide Lender" (Bebas Neue, XL).
- **Subheading**: "FinTech Financing Solutions Tailored for Your Unique Needs".
- **CTA**: "Apply Online Now" (Primary Blue Button).
- **Background**: Subtle gradient or clean image of a premium property.

### 2. Service Grid (Quick Links)
- **Grid Layout**: 4-column (Desktop), 2-column (Mobile).
- **Items**: Stated Income, Hard Money, Reverse Mortgage, Construction, Vacant Land, Commercial, etc.
- **Card Style**: Icon/Image + Program Title + "Learn More" link.

### 3. "A FinTech Real Estate Agency" (Narrative)
- **Content**: Descriptive text about combining industry expertise with FinTech.
- **CTA**: "Call Us" and "Apply Online".

### 4. Recently Funded (Dynamic Section)
- **Layout**: Grid of Funded Loan Cards.
- **Card Content**: Property Image, Loan Type, Location, Mini-description, "Read More".

## Data Model (Sample)
- `hero`: { `heading`, `subheading`, `cta_text`, `cta_link` }
- `services`: [ { `title`, `url`, `icon` } ]
- `funded_loans`: [ { `title`, `location`, `image_url`, `excerpt` } ]
