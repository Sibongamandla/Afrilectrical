# Grid Component

## Purpose
The `Grid` component provides a flexible and responsive layout system based on CSS Grid. It allows for easy arrangement of content in rows and columns, adapting to different screen sizes.

## Key Features
- **Responsive Columns:** Define column spans for different breakpoints (`xs`, `sm`, `md`, `lg`, `xl`).
- **Customizable Gaps:** Control spacing between grid items using `gap`, `columnGap`, and `rowGap` props.
- **Alignment Options:** Align grid items horizontally (`justifyContent`) and vertically (`alignItems`).
- **Fluid or Fixed Width:** The `Grid.Container` can be fluid (full width) or have a fixed maximum width.

## Sub-Components
- `Grid.Container`: The parent component that defines the grid layout.
- `Grid.Item`: Child components that represent individual items within the grid.

## Props
### `Grid.Container` Props
- `children`: The `Grid.Item` components to be rendered within the grid.
- `gap`: (Optional) Defines the spacing between grid items (both row and column). Accepts `none`, `xs`, `sm`, `md`, `lg`, `xl`. Defaults to `md`.
- `columnGap`: (Optional) Defines the horizontal spacing between grid items.
- `rowGap`: (Optional) Defines the vertical spacing between grid items.
- `columns`: (Optional) Defines the number of columns in the grid. Can be a number (1-12) or `'auto'` for auto-filling columns. Defaults to `auto`.
- `justifyContent`: (Optional) Aligns items along the row axis. Accepts `start`, `end`, `center`, `between`, `around`, `evenly`. Defaults to `start`.
- `alignItems`: (Optional) Aligns items along the column axis. Accepts `start`, `end`, `center`, `stretch`, `baseline`. Defaults to `stretch`.
- `fluid`: (Optional) If `true`, the container takes 100% width and removes default max-width and horizontal padding. Defaults to `false`.

### `Grid.Item` Props
- `children`: The content to be rendered inside the grid item.
- `xs`: (Optional) Column span for extra small screens (default breakpoint).
- `sm`: (Optional) Column span for small screens.
- `md`: (Optional) Column span for medium screens.
- `lg`: (Optional) Column span for large screens.
- `xl`: (Optional) Column span for extra large screens.

## Dependencies
- `styled-components` for styling.

## Usage
```tsx
import React from 'react';
import Grid from './components/ui/Grid';
import Card from './components/ui/Card';
import Typography from './components/ui/Typography';

const MyGrid = () => (
  <Grid.Container columns={12} gap="lg">
    <Grid.Item xs={12} sm={6} md={4}>
      <Card padding>
        <Typography variant="h5">Item 1</Typography>
        <Typography variant="body2">This item takes 12 columns on extra small, 6 on small, and 4 on medium screens and up.</Typography>
      </Card>
    </Grid.Item>
    <Grid.Item xs={12} sm={6} md={4}>
      <Card padding>
        <Typography variant="h5">Item 2</Typography>
        <Typography variant="body2">Another grid item demonstrating responsiveness.</Typography>
      </Card>
    </Grid.Item>
    <Grid.Item xs={12} md={4}>
      <Card padding>
        <Typography variant="h5">Item 3</Typography>
        <Typography variant="body2">This item takes 12 columns on extra small and 4 on medium screens and up.</Typography>
      </Card>
    </Grid.Item>
  </Grid.Container>
);

export default MyGrid;
```