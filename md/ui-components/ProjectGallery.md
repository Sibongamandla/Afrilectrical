# ProjectGallery Component

## Purpose
The `ProjectGallery` component provides an interactive and filterable display of projects. It allows users to browse through a portfolio of work, filter projects by categories (tags), and view detailed information about each project in a modal.

## Key Features
- **Filterable Projects:** Users can filter projects by predefined categories (tags) or view all projects.
- **Responsive Grid Layout:** Projects are displayed in a responsive grid that adapts to different screen sizes.
- **Project Cards:** Each project is presented as a card with an image, title, description, and tags. Cards have hover effects for visual feedback.
- **Modal for Details:** Clicking on a project card opens a modal dialog that displays more comprehensive information about the selected project, including additional details like client, scope, value, and duration.
- **Animations:** Uses `framer-motion` for smooth transitions, entry animations for cards and modal elements, and interactive hover/tap effects.
- **Dynamic Tagging:** Automatically extracts unique tags from the provided project data if categories are not explicitly defined.

## Props
- `projects`: (Required) An array of `Project` objects, each containing `id`, `title`, `description`, `imageUrl`, `tags`, and optional `location`, `year`, and `details`.
- `categories`: (Optional) An array of strings representing the categories to use for filtering. If not provided, categories are extracted from project tags.

## Dependencies
- `framer-motion` for animations.
- `Typography` (UI Component) for consistent text styling.
- `Icon` (UI Component) for potential icons within the modal or tags (though not explicitly used in the provided snippet).
- `styled-components` for styling.

## Usage
```tsx
import React from 'react';
import ProjectGallery from './components/ui/ProjectGallery';

const sampleProjects = [
  {
    id: 1,
    title: 'Zambia Solar Farm',
    description: '80MW photovoltaic plant powering 120,000 homes with AI-driven maintenance drones.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
    tags: ['Renewable Energy', 'Solar', 'Zambia'],
    location: 'Lusaka, Zambia',
    year: '2023',
    details: {
      client: 'Zambia Power Authority',
      scope: 'Design, Installation, Maintenance',
      value: '$120 Million',
      duration: '18 months',
    },
  },
  {
    id: 2,
    title: 'Nairobi Grid Modernization',
    description: 'Smart metering rollout for 500,000+ consumers with 25% reduced transmission losses.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
    tags: ['Smart Grid', 'Transmission', 'Kenya'],
    location: 'Nairobi, Kenya',
    year: '2024',
  },
  // ... more projects
];

const MyProjectGallery = () => (
  <ProjectGallery projects={sampleProjects} categories={['Renewable Energy', 'Smart Grid', 'Industrial']} />
);

export default MyProjectGallery;
```