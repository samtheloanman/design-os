# Global Application Shell Specification

## Overview
The application shell provides the persistent navigation and structural frame for the entire Unified CMTG platform. It ensures brand consistency and ease of navigation across all device types.

## Components

### 1. Global Header
- **Brand Title**: "CUSTOM MORTGAGE" (Font: Bebas Neue, Color: White).
- **Sub-brand**: "NATIONWIDE LENDER" (Font: Bebas Neue, Size: SM, Tracking: Widest).
- **Navigation Links**:
  - Home
  - Programs
  - Funded Loans
  - Locations
  - [CTA] Apply Now (Primary Blue Button)
- **Styling**:
  - Background: Secondary Gray (`#636363`).
  - Position: Sticky (top-0).
  - Height: Fixed height or auto with consistent padding.

### 2. Global Footer
- **Layout**: 3-column grid (Desktop) stacking to single column (Mobile).
- **Column 1: Quick Links**:
  - Privacy Policy
  - Terms of Service
  - Site Map
- **Column 2: Information**:
  - NMLS Identification
  - Equal Housing Opportunity logo/text
  - Licensing info
- **Column 3: Contact**:
  - Phone: (877) 976-5669
  - Address: 15910 Ventura Blvd, Encino, CA
- **Bottom Bar**: Copyright © 2026 Custom Mortgage Inc.
- **Styling**:
  - Background: Secondary Gray (`#636363`).
  - Text: White, Small/Medium size.

## User Flows
1. **Desktop Navigation**: Users hover over navigation items; active link is underlined or highlighted.
2. **Mobile Toggle**: Hamburger menu on mobile reveals vertical navigation list.
3. **Primary CTA**: "Apply Now" button is prominent and leads to external application portal or internal wizard.

## UI Requirements
- **Responsive**: Flexbox/Grid with desktop-first design adapting to mobile.
- **Accessibility**: ARIA labels for navigation landmarks and toggle buttons.
- **Mode**: Light mode for text; background remains brand gray.
