# Rate Table Component Specification

## Overview
A clean, tabular display of current mortgage rates across different programs and lenders. It allows users to quickly compare options and see daily rate updates.

## User Flows
1. **Compare Rates**: User scans the table for the lowest rate or specific program.
2. **Filter/Sort**: User sorts by Rate or Lender to find the best deal.
3. **Conversion**: User clicks a "Select" button on a row to proceed to the quote wizard or application.

## UI Requirements

### 1. Table Container
- **Responsiveness**: Horizontal scroll on mobile or "Card-stack" transformation.
- **Borders**: Clean 1px gray borders (`#a5a5a5`) between rows.
- **Hover state**: Highlight row on hover for better readability.

### 2. Columns
- **Lender**: Logo + Company Name.
- **Program**: Program name (e.g., FHA 30-Year).
- **Rate**: Percentage value (e.g., 6.50%).
- **Points**: Points/Credits.
- **Monthly Payment**: Estimated payment based on a set loan amount.
- **Action**: "Get Started" Blue button.

## Data Model (Sample)
- `columns`: [ "Lender", "Program", "Rate", "Points", "Payment", "Action" ]
- `rows`: [
    { "lender_name": "Acra", "program": "FHA", "rate": 6.75, "points": 0.5, "payment": 2100 }
  ]
