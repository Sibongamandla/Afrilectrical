# ServiceCard Component

## Purpose
The `ServiceCard` component is a reusable UI element designed to display information about a specific service offered by Afrilectrical. It provides a concise overview with an option to expand for more details.

## Key Features
- **Service Overview:** Displays a title, a brief description, and an icon representing the service.
- **Expandable Features List:** Optionally includes a list of detailed features that can be toggled visible/hidden via a "Learn more" / "Show less" button.
- **Animations:** Uses `framer-motion` for subtle hover effects on the card and smooth expand/collapse animations for the features list.
- **Consistent Styling:** Adheres to the application's theme for colors, typography, and spacing.

## Props
- `title`: (Required) The main title of the service.
- `description`: (Required) A brief description of the service.
- `icon`: (Required) A React node (e.g., an `Icon` component or a simple string/emoji) representing the service.
- `features`: (Optional) An array of strings, each representing a key feature of the service. If provided, an expand/collapse button will appear.

## Dependencies
- `framer-motion` for animations.
- `Typography` (UI Component) for consistent text styling.
- `Icon` (UI Component) for the expand/collapse arrow.
- `styled-components` for styling.

## Usage
```tsx
import React from 'react';
import ServiceCard from './components/ui/ServiceCard';
import { Icon } from './components/ui/Icon';

const MyServiceCards = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
    <ServiceCard
      title="Power Distribution"
      description="Designing and implementing robust electrical grids for reliable power supply."
      icon={<Icon name="lightning" size={32} />}
      features={[
        'Grid planning and optimization',
        'Substation design',
        'Load management systems',
        'Protection and control',
      ]}
    />
    <ServiceCard
      title="Renewable Energy"
      description="Harnessing clean energy sources for sustainable power solutions."
      icon={<Icon name="solar" size={32} />}
      features={[
        'Solar PV installations',
        'Wind turbine integration',
        'Energy storage solutions',
        'Off-grid systems',
      ]}
    />
  </div>
);

export default MyServiceCards;
```