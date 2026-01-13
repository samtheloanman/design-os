# Funded Loans Template Specification

## Overview
The Funded Loans page showcases the platform's track record by displaying a gallery of recently closed loan transactions. It serves as social proof and demonstrates the breadth of Custom Mortgage's lending capacity.

## User Flows
1. **Gallery Browsing**: User scrolls through a grid/list of funded loans to find projects similar to theirs.
2. **Detail View**: User clicks "Read More" to see specific details about a funded loan (Property type, location, loan amount, etc.).
3. **Conversion**: User sees a successful funding case and clicks "Apply Now" to start their own journey.

## UI Requirements

### 1. Header Section
- **Heading**: "Recently Funded" (Bebas Neue, XL).
- **Subheading**: "A showcase of our recent transactions across the nation."

### 2. Loan Card Grid
- **Card Anatomy**:
  - Image: Property photo or brand placeholder.
  - Category Badge: e.g., "Non-QM", "Hard Money", "FHA".
  - Title: Loan Program + Property Type.
  - Meta Info: City, State, Zip code.
  - Excerpt: Short summary of the deal.
  - Link: "Read More" (Blue link or button).
- **Shadows & Borders**: Slight shadow on hover, 2px border in accent gray (`#a5a5a5`).

### 3. Pagination/Infinite Scroll
- Load more results as the user scrolls.

## Data Model (Sample)
- `loans`: [
    {
      "id": "fha-sb-30",
      "title": "FHA HB 30-Year Fixed Mortgage",
      "location": "Santa Clarita, CA",
      "category": "FHA",
      "excerpt": "Custom Mortgage assisted in a purchase of a 4-unit property...",
      "image_url": "..."
    }
  ]
