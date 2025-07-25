# Accordion Component

## Purpose
The `Accordion` component provides a collapsible content area, allowing users to toggle the visibility of sections of information. It's useful for organizing large amounts of content into manageable, expandable panels.

## Key Features
- **Collapsible Panels:** Each item in the accordion can be expanded or collapsed to reveal or hide its content.
- **Multiple Item Expansion:** Supports `allowMultiple` prop to control whether multiple accordion items can be open simultaneously.
- **Customizable Variants:** Offers different visual styles (`default`, `bordered`, `filled`, `minimal`, `card`) to match various design needs.
- **Size Options:** Provides `small`, `medium`, and `large` sizes for different visual densities.
- **Optional Icon and Badge:** Each accordion item can display an icon and a badge (e.g., for notifications or new content).
- **Disabled State:** Individual items can be disabled, preventing them from being toggled.
- **Animated Transitions:** Uses `framer-motion` for smooth animations during expansion and collapse.
- **Controlled vs. Uncontrolled:** Can be used as a controlled component (managing `openItems` state externally) or an uncontrolled component (managing `defaultOpenItems` internally).

## Props
- `items`: An array of `AccordionItem` objects, each defining the `id`, `title`, `content`, and optional `icon`, `disabled`, and `badge`.
- `defaultOpenItems`: (Optional) An array of `id`s for items that should be open by default (uncontrolled).
- `openItems`: (Optional) An array of `id`s for currently open items (controlled).
- `onChange`: (Optional) Callback function triggered when the open items change.
- `allowMultiple`: (Optional) If `true`, multiple items can be open at once. Defaults to `false`.
- `variant`: (Optional) Visual style of the accordion. Defaults to `default`.
- `size`: (Optional) Size of the accordion items. Defaults to `medium`.
- `animated`: (Optional) If `true`, content expansion/collapse is animated. Defaults to `true`.
- `collapsible`: (Optional) If `true`, an open item can be closed by clicking its header. Defaults to `true`.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for displaying icons.
- `styled-components` for styling.

## Usage
```tsx
import React from 'react';
import { Accordion, AccordionItem } from './components/ui/Accordion';

const accordionItems: AccordionItem[] = [
  {
    id: 'item1',
    title: 'What is Afrilectrical?',
    content: 'Afrilectrical is a leading electrical engineering company specializing in renewable energy solutions across Africa.',
    icon: 'energy',
    badge: 'New',
  },
  {
    id: 'item2',
    title: 'Our Services',
    content: 'We provide comprehensive electrical engineering services including solar installations, grid connections, and energy audits.',
    icon: 'tools',
  },
  {
    id: 'item3',
    title: 'Contact Information',
    content: 'Get in touch with our team for consultations and project inquiries.',
    icon: 'contact',
    disabled: true,
  },
];

const MyAccordion = () => (
  <Accordion items={accordionItems} defaultOpenItems={['item1']} allowMultiple variant="bordered" size="large" />
);

export default MyAccordion;
```