# Quote Wizard Component Specification

## Overview
An interactive, multi-step lead generation form that captures borrower details and provides an instant mortgage quote. It matches users with available loan programs based on their credit, location, and loan-to-value (LTV).

## User Flows
1. **Entry**: User clicks "Get Your Custom Quote" on any page.
2. **Step 1: Location**: User inputs their property state.
3. **Step 2: Amount**: User inputs desired loan amount.
4. **Step 3: Credit**: User inputs their FICO score.
5. **Step 4: Value**: User inputs estimated property value.
6. **Results**: System displays matched loan programs and rates.

## UI Requirements

### 1. The Form (Wizard View)
- **Design Style**: Card-based form with a clear progress bar (Steppers).
- **Fonts**: Headings in Bebas Neue, form labels in Lato.
- **Interactions**: Smooth transitions between steps, validation on each input.

### 2. Results Card
- **Header**: "Your Quote Results".
- **LTV Calculation**: Automatic display of the calculated LTV percentage.
- **Matched Programs**: A list of cards showing Lender, Program Name, Rate, and Points.
- **No Matches state**: "No exact matches found" message with a clear "Speak with an Expert" CTA.

## Data Model (Sample)
- `wizard_state`: { `current_step`, `form_data` }
- `results`: { `ltv`, `matches_found`, `quotes`: [ { `lender`, `program`, `rate`, `points` } ] }
- `form_fields`: [ { `label`, `type`, `placeholder`, `name` } ]
