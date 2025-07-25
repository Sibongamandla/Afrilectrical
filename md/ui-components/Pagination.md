# Pagination Component

## Purpose
The `Pagination` component provides controls for navigating through a series of pages, typically used for displaying large datasets in smaller, manageable chunks. It enhances user experience by allowing efficient browsing of content.

## Key Features
- **Page Number Display:** Shows current page, total pages, and a range of surrounding page numbers.
- **Navigation Buttons:** Includes buttons for going to the first, last, previous, and next pages.
- **Ellipsis:** Automatically displays ellipses (...) for skipped page ranges to keep the pagination compact.
- **Customizable Variants:** Offers different visual styles (`default`, `outlined`, `minimal`, `rounded`, `pills`) to match design needs.
- **Size Options:** Available in `small`, `medium`, and `large` sizes.
- **Color Schemes:** Supports various color schemes (`primary`, `secondary`, `accent`).
- **Page Information:** Can display text like "Page X of Y" or "Showing X-Y of Z items."
- **Disabled State:** Buttons are disabled when navigation is not possible (e.g., on the first page, previous button is disabled).
- **Hide on Single Page:** Optionally hides the pagination controls if there's only one page.
- **Framer Motion Animations:** Uses `framer-motion` for subtle hover and tap animations on buttons.

## Props
- `currentPage`: (Required) The currently active page number.
- `totalPages`: (Required) The total number of pages available.
- `onPageChange`: (Required) Callback function triggered when a page is selected.
- `siblingCount`: (Optional) Number of page buttons to show on each side of the current page. Defaults to `1`.
- `boundaryCount`: (Optional) Number of page buttons to show at the start and end of the pagination. Defaults to `1`.
- `variant`: (Optional) Visual style of the pagination. Defaults to `default`.
- `size`: (Optional) Size of the buttons. Defaults to `medium`.
- `color`: (Optional) Color scheme. Defaults to `primary`.
- `showFirstLast`: (Optional) If `true`, displays buttons for first and last pages. Defaults to `true`.
- `showPrevNext`: (Optional) If `true`, displays buttons for previous and next pages. Defaults to `true`.
- `showPageInfo`: (Optional) If `true`, displays page information text. Defaults to `false`.
- `disabled`: (Optional) If `true`, all pagination controls are disabled. Defaults to `false`.
- `hideOnSinglePage`: (Optional) If `true`, hides pagination if `totalPages` is 1. Defaults to `false`.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for navigation arrows.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React, { useState } from 'react';
import Pagination from './components/ui/Pagination';

const MyPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        showPageInfo
        variant="rounded"
        size="large"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        variant="pills"
        color="accent"
        siblingCount={2}
      />
    </div>
  );
};

export default MyPagination;
```