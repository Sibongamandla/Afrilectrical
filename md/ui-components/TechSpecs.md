# TechSpecs Component

## Purpose
The `TechSpecs` component is designed to display technical specifications or detailed information in an organized, collapsible format. It allows users to expand and collapse sections to view specific details, making it ideal for product specifications, feature lists, or FAQs.

## Key Features
- **Collapsible Sections:** Each specification item can be expanded or collapsed to reveal its content.
- **Optional Title:** A main title can be provided for the entire technical specifications section.
- **Icon Support:** Each specification item can display an icon alongside its title.
- **Animated Expansion:** Uses `framer-motion` for smooth animations when expanding and collapsing content.
- **`SpecsComparison` Sub-component:** A specialized component for displaying comparative data in a grid format within a specification item.

## Props
- `specs`: (Required) An array of `SpecItem` objects, each defining an `id`, `title`, `content` (string or ReactNode), and optional `icon`.
- `title`: (Optional) The main title for the technical specifications section. Defaults to `'Technical Specifications'`.
- `defaultOpen`: (Optional) The index of the specification item that should be open by default. Defaults to `-1` (none open).

## Sub-components
### `SpecsComparison` Props
- `items`: (Required) An array of objects, where each object represents a column in the comparison table. Each item has:
    - `title`: The title of the column (e.g., 'Basic', 'Advanced').
    - `specs`: An object containing key-value pairs of specifications (e.g., `{'Capacity': '10 kWh'}`).
    - `highlight`: (Optional) If `true`, applies a highlight style to the column.

## Dependencies
- `framer-motion` for animations.
- `Typography` (UI Component) for consistent text styling.
- `Icon` (UI Component) for displaying icons.
- `styled-components` for styling.

## Usage
```tsx
import React from 'react';
import TechSpecs, { SpecsComparison } from './components/ui/TechSpecs';
import { Icon } from './components/ui/Icon';
import Typography from './components/ui/Typography';

const sampleSpecs = [
  {
    id: 1,
    title: 'Solar Panel Specifications',
    icon: <Icon name="solar" size={24} />,
    content: (
      <div>
        <Typography variant="body2" gutterBottom>
          Our high-efficiency monocrystalline solar panels deliver industry-leading performance with 22% efficiency rating and 25-year warranty.
        </Typography>
        <Typography variant="subtitle2" gutterBottom style={{ marginTop: '16px' }}>
          Key Features:
        </Typography>
        <ul>
          <li>Power output: 400-450W per panel</li>
          <li>Temperature coefficient: -0.35% per °C</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Battery Storage Systems',
    icon: <Icon name="battery" size={24} />,
    content: (
      <div>
        <Typography variant="body2" gutterBottom>
          Our lithium-ion battery storage solutions provide reliable backup power with 10-year warranty and smart energy management.
        </Typography>
        <SpecsComparison
          items={[
            {
              title: 'Basic',
              specs: {
                'Capacity': '10 kWh',
                'Cycles': '6,000',
                'Warranty': '10 years',
              },
            },
            {
              title: 'Advanced',
              specs: {
                'Capacity': '15 kWh',
                'Cycles': '8,000',
                'Warranty': '12 years',
              },
              highlight: true,
            },
          ]}
        />
      </div>
    ),
  },
];

const MyTechSpecs = () => (
  <TechSpecs specs={sampleSpecs} title="Product Technical Details" defaultOpen={0} />
);

export default MyTechSpecs;
```