# Locations Template Specification

## Overview
A dynamic template used for state and city-specific pages (e.g., "Mortgage Loans in Los Angeles, CA"). It combines local SEO content with branch/office information and specific loan program proximity mapping.

## User Flows
1. **Search/Discovery**: User searches for their city or clicks a location link.
2. **Office Contact**: User finds the nearest physical office and clicks to call or get directions.
3. **Local Quote**: User starts a quote specifically mapped to the local office.

## UI Requirements

### 1. Local Hero
- **Heading**: "Mortgage Loans in [City], [State]" (Bebas Neue, XL).
- **Background**: Image of the local city skyline or landmark (dynamic placeholder).

### 2. Office Information Section
- **Address & Map**: Physical address of the assigned office.
- **Phone & Hours**: Local contact details.

### 3. Local SEO Content (Programmatic)
- **Introduction**: AI-generated text about the [City] housing market.
- **FAQs**: 3-5 local mortgage questions/answers.

### 4. Nearby Programs
- Grid of loan programs available or popular in that specific region.

## Data Model (Sample)
- `location`: { `city`, `state`, `zip`, `assigned_office_name` }
- `office`: { `address`, `phone`, `gps_coordinates` }
- `local_content`: { `intro_text`, `faqs`: [ { `q`, `a` } ] }
