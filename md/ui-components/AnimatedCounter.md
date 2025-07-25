# AnimatedCounter Component

## Purpose
The `AnimatedCounter` component displays a numerical value that animates from 0 (or a starting point) up to a target `end` value. It's commonly used for showcasing statistics, metrics, or achievements in an engaging way.

## Key Features
- **Counting Animation:** Smoothly animates the number from its initial state to the `end` value.
- **Configurable Duration and Delay:** Allows control over how long the animation takes and when it starts.
- **Prefix and Suffix:** Supports adding text before (e.g., '$') and after (e.g., '%', 'M') the numerical value.
- **Decimal Precision:** Configurable number of decimal places for floating-point numbers.
- **Thousands Separator:** Automatically formats large numbers with a specified separator (e.g., comma).
- **Scroll-Triggered Animation:** Uses `framer-motion`'s `useInView` hook to trigger the animation only when the component enters the viewport, optionally animating only once.
- **Ease-Out Effect:** Employs an ease-out-expo function for a natural deceleration effect during the count.

## Props
- `end`: The final numerical value the counter should reach.
- `duration`: (Optional) The duration of the animation in seconds. Defaults to `2`.
- `delay`: (Optional) The delay before the animation starts in seconds. Defaults to `0`.
- `prefix`: (Optional) A string to display before the number. Defaults to `''`.
- `suffix`: (Optional) A string to display after the number. Defaults to `''`.
- `decimals`: (Optional) The number of decimal places to display. Defaults to `0`.
- `separator`: (Optional) The thousands separator character. Defaults to `','`.
- `once`: (Optional) If `true`, the animation plays only once when it enters the viewport. Defaults to `true`.
- `threshold`: (Optional) A number from 0 to 1, indicating the percentage of the target element that needs to be visible before the animation triggers. Defaults to `0.1`.

## Dependencies
- `framer-motion` for animation control and viewport detection.
- `styled-components` for basic container styling.

## Usage
```tsx
import React from 'react';
import AnimatedCounter from './components/ui/AnimatedCounter';

const MyStats = () => (
  <div>
    <p>Projects Completed: <AnimatedCounter end={500} suffix="+" duration={2} /></p>
    <p>Revenue: <AnimatedCounter end={12.5} prefix="$" suffix="M" decimals={1} duration={1.5} delay={0.5} /></p>
    <p>Uptime: <AnimatedCounter end={99.9} suffix="%" decimals={1} duration={1} once={false} /></p>
  </div>
);

export default MyStats;
```