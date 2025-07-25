# HeroSection Component

## Purpose
The `HeroSection` component serves as the primary introductory element on the homepage, designed to immediately capture user attention and convey Afrilectrical's core offerings. It features a dynamic carousel with background images and overlays, along with animated statistics.

## Key Features
- **Full-Width Carousel:** Utilizes a `Carousel` component to display multiple slides, each with a background image, subtitle, title, description, and a call-to-action button. The carousel supports auto-play, navigation arrows, dots, and progress indicators.
- **Dynamic Content:** Each slide (`HeroSlide`) presents different aspects of Afrilectrical's services (e.g., Power Transmission, Renewable Energy, Industrial Automation) with relevant imagery and descriptive text.
- **Animated Statistics Overlay:** Displays key company metrics (e.g., Specialists, Countries, Years Experience, Projects Completed) as an overlay, using `AnimatedCounter` for a dynamic counting effect. These statistics are revealed with a `ScrollReveal` animation.
- **Parallax Effect (on stats):** The statistics overlay has a subtle parallax effect based on scroll position, enhancing visual depth.
- **Scroll Indicator:** A subtle animated arrow at the bottom encourages users to scroll down for more content.
- **Responsive Design:** Adapts layout and element sizing for various screen sizes, ensuring a consistent and engaging experience across devices.
- **Accessibility Features:** Includes ARIA attributes for improved screen reader compatibility and keyboard navigation.

## Dependencies
- `framer-motion` for animations and scroll transformations.
- `react-router-dom` for navigation links.
- `ParallaxImage` (UI Component - though `HeroSlide` uses direct `backgroundImage` for simplicity, the concept is similar).
- `ScrollReveal` (UI Component) for animating elements into view.
- `AnimatedCounter` (UI Component) for numerical counting animations.
- `Carousel` (UI Component) and `HeroSlide` (UI Component - defined within `Carousel.tsx`) for the main carousel functionality.
- `Icon` (UI Component) for various icons.
- `styled-components` for styling.

## Usage
This component is typically the first section on the `Home` page, setting the tone and providing a high-level overview of the company's capabilities.