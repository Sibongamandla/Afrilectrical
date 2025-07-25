# TechToolsSection Component

## Purpose
The `TechToolsSection` component provides interactive engineering tools and calculators to assist users with electrical project planning and decision-making. It aims to offer practical value and demonstrate Afrilectrical's technical expertise.

## Key Features
- **Interactive Calculators:** Offers three distinct calculators:
    - **Power Calculator:** Calculates electrical power based on voltage and current inputs.
    - **Cable Size Calculator:** Determines appropriate cable size based on current load, distance, and voltage type.
    - **Energy Savings Calculator:** Estimates potential energy savings from efficiency improvements.
- **Tool Cards:** Each calculator is presented within a card that includes an icon, title, and description. Cards have hover effects for interactivity.
- **Modal Integration:** Each calculator opens in a modal dialog for a focused user experience.
- **Form Inputs:** Utilizes standard form inputs within the calculators for user data entry.
- **Responsive Design:** Adapts the grid layout and modal presentation for various screen sizes.
- **Scroll Reveal Animations:** Uses the `ScrollReveal` UI component to animate the section and individual tool cards into view as the user scrolls.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for various icons.
- `ScrollReveal` (UI Component) for scroll-triggered animations.
- `styled-components` for styling.

## Usage
This component is typically used on the `Home` page or a dedicated `Tools` or `Resources` page to provide valuable utilities to visitors and showcase the company's technical capabilities.