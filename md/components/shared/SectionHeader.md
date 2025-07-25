# SectionHeader Component

## Purpose
The `SectionHeader` component provides a standardized and visually consistent way to present titles and descriptions for sections across the website. It centralizes the styling for section headings, ensuring a cohesive look and feel.

## Key Features
- **Standardized Typography:** Uses `Typography` components to ensure consistent font sizes, weights, and line heights for titles and descriptions, pulling values from the global theme.
- **Centralized Styling:** All spacing, alignment, and responsiveness for section headers are managed within this single component.
- **Customizable Alignment:** Supports `left`, `center`, or `right` alignment for the header content.
- **Responsive Design:** Adjusts margins and alignment for different screen sizes, ensuring optimal presentation on various devices.
- **Theme Integration:** Fully leverages the `theme` object for all styling properties, making global style changes easy and consistent.

## Props
- `title`: (Required) The main title text for the section.
- `description`: (Optional) A descriptive paragraph that provides more context for the section.
- `align`: (Optional) Horizontal alignment of the title and description (`left`, `center`, `right`). Defaults to `center`.

## Dependencies
- `Typography` (UI Component) for text styling.
- `styled-components` for layout and styling.

## Usage
```tsx
import React from 'react';
import SectionHeader from './components/shared/SectionHeader';

const MySection = () => (
  <div style={{ padding: '40px' }}>
    <SectionHeader
      title="Our Core Values"
      description="Discover the principles that guide our work and define our commitment to excellence."
      align="center"
    />
    {/* Section content goes here */}
  </div>
);

export default MySection;
```