# Footer Component

## Purpose
The `Footer` component provides consistent navigation, contact information, and copyright details across the Afrilectrical website. It serves as a persistent element at the bottom of every page.

## Key Features
- **Multi-Column Layout:** Organizes content into multiple columns for links, contact details, and social media, adapting to a single column on smaller screens.
- **Navigation Links:** Includes links to key sections of the website (Services, Projects, About Us, Contact).
- **Contact Information:** Displays essential contact details such as phone number, email, and physical address.
- **Social Media Links:** Provides links to social media profiles (e.g., LinkedIn) with interactive hover effects.
- **Copyright Information:** Displays the company's copyright notice.
- **Animated Elements:** Utilizes `framer-motion` for subtle entry animations for the footer content and interactive hover effects on links and social icons.
- **Responsive Design:** Adjusts layout and font sizes for optimal viewing on various devices.
- **Themed Styling:** All colors, spacing, border-radii, and shadows are consistently pulled from the global `theme` object.

## Dependencies
- `framer-motion` for animations.
- `styled-components` for styling.

## Usage
This component is typically rendered once in the main application layout (`App.tsx` or similar) to appear on all pages.