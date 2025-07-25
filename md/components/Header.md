# Header Component

## Purpose
The `Header` component provides the main navigation and branding for the Afrilectrical website. It remains fixed at the top of the viewport, offering easy access to key sections of the site.

## Key Features
- **Fixed Position:** Stays at the top of the screen, ensuring navigation is always accessible.
- **Logo:** Displays the company logo and name, serving as a clickable element to return to the homepage (though not explicitly linked in the provided code).
- **Navigation Links:** Includes links to primary sections like "Our Solutions," "Projects," "About Us," "Stories," and "News."
- **Contact Button:** A prominent call-to-action button to contact experts.
- **Responsive Design:** Adapts its layout for smaller screens, though the provided code hides navigation links on mobile, implying a separate mobile menu implementation (not shown).
- **Themed Styling:** All colors, spacing, border-radii, and shadows are consistently pulled from the global `theme` object.

## Dependencies
- `styled-components` for styling.

## Usage
This component is typically rendered once in the main application layout (`App.tsx` or similar) to appear on all pages.