# MetricsSection Component

## Purpose
The `MetricsSection` component highlights Afrilectrical's achievements and impact through key performance indicators presented in an engaging, animated format. It aims to build credibility and showcase the company's success.

## Key Features
- **Animated Counters:** Uses the `AnimatedCounter` UI component to display numerical metrics (e.g., Projects Completed, African Countries, Expert Engineers, Renewable Capacity) with a dynamic counting animation when they come into view.
- **Themed Background:** Features a gradient background with a subtle grid pattern for visual appeal.
- **Metric Cards:** Each metric is presented within a card that includes an icon, the animated value, a label, and a brief description. Cards have hover effects for interactivity.
- **Achievements List:** Below the main metrics, a list of additional achievements (e.g., ISO Certified, Zero Serious Incidents, Annual Growth) is displayed, reinforcing the company's strengths.
- **Scroll Reveal Animations:** Utilizes the `ScrollReveal` UI component to animate the entire section and individual metric cards into view as the user scrolls.
- **Responsive Design:** Adapts the grid layout and font sizes for optimal viewing on various screen sizes.

## Dependencies
- `framer-motion` for animations.
- `AnimatedCounter` (UI Component) for numerical animations.
- `ScrollReveal` (UI Component) for scroll-triggered animations.
- `Icon` (UI Component) for various icons.
- `styled-components` for styling.

## Usage
This component is typically used on the `Home` page or an `About Us` page to visually represent the company's quantitative successes and build trust with visitors.