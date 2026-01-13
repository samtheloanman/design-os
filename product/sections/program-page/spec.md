# Program Page Template Specification

## Overview
A reusable template for individual loan program pages (e.g., FHA, VA, DSCR). It details the program's benefits, requirements, and provides a direct path to getting a quote.

## User Flows
1. **Program Research**: User reads the program details and benefits.
2. **Quote Generation**: User uses the embedded "Quote Wizard" or clicks a banner CTA to check rates.
3. **Application**: User proceeds to the Floify portal via "Apply Now".

## UI Requirements

### 1. Program Hero
- **Breadcrumbs**: Home / Programs / [Program Name].
- **Heading**: Program Title (e.g., "FHA HB 30-Year Fixed Mortgage").
- **Badge**: "FUNDED" or program category tag.

### 2. Main Content (Wagtail StreamField optimized)
- **Introduction**: 2-3 paragraphs of SEO-optimized content.
- **Key Features**: Bulleted list of benefits.
- **Eligibility**: Criteria for borrowers (FICO, LTV, etc.).

### 3. Integrated Quote Wizard
- Optional sidebar or full-width component for the Quote Wizard.
- Background: Brand blue palette.

### 4. Local Optimization (SEO)
- Section for "Mortgage Programs in [City]" to support programmatic SEO.

## Data Model (Sample)
- `program`: { `title`, `slug`, `category`, `description` }
- `details`: [ { `section_title`, `content_blocks` } ]
- `cta_banner`: { `text`, `button_label`, `url` }
