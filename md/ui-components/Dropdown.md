# Dropdown Component

## Purpose
The `Dropdown` component provides a customizable and accessible select input, allowing users to choose one or multiple options from a list. It supports various visual styles, search functionality, and clearable selections.

## Key Features
- **Single and Multiple Selection:** Can be configured for single (`multiple=false`) or multiple (`multiple=true`) option selection.
- **Customizable Options:** Each option can have a `value`, `label`, optional `icon`, `disabled` state, and `description`.
- **Searchable:** Includes an optional search input to filter options, useful for long lists.
- **Clearable:** An optional button to clear the current selection.
- **Variants and Sizes:** Supports different visual styles (`default`, `outline`, `filled`, `ghost`) and sizes (`small`, `medium`, `large`).
- **Error and Loading States:** Visual indicators for error messages and a loading spinner.
- **Controlled Component:** Can be controlled externally via `value` and `onSelect` props.
- **Animated Menu:** Uses `framer-motion` for smooth entry and exit animations of the dropdown menu.
- **Accessibility:** Handles keyboard navigation and ARIA attributes for improved usability.

## Props
- `options`: An array of `DropdownOption` objects, each defining the `value`, `label`, and optional `icon`, `disabled`, `description`.
- `value`: (Optional) The currently selected value(s) (controlled component).
- `placeholder`: (Optional) Text displayed when no option is selected. Defaults to `'Select an option...'`.
- `label`: (Optional) A label for the dropdown input.
- `error`: (Optional) An error message to display below the dropdown.
- `disabled`: (Optional) If `true`, the dropdown is not interactive. Defaults to `false`.
- `loading`: (Optional) If `true`, displays a loading spinner. Defaults to `false`.
- `searchable`: (Optional) If `true`, includes a search input in the dropdown menu. Defaults to `false`.
- `multiple`: (Optional) If `true`, allows multiple selections. Defaults to `false`.
- `clearable`: (Optional) If `true`, displays a clear button. Defaults to `false`.
- `size`: (Optional) Size of the dropdown. Defaults to `medium`.
- `variant`: (Optional) Visual style of the dropdown. Defaults to `default`.
- `position`: (Optional) Position of the dropdown menu relative to the trigger (`bottom`, `top`, `auto`). Defaults to `auto`.
- `maxHeight`: (Optional) Maximum height of the dropdown menu before scrolling. Defaults to `200`.
- `onSelect`: (Optional) Callback function triggered when an option is selected or deselected.
- `onSearch`: (Optional) Callback function triggered when the search query changes.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for displaying icons.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React, { useState } from 'react';
import Dropdown, { DropdownOption } from './components/ui/Dropdown';

const countryOptions: DropdownOption[] = [
  { value: 'za', label: 'South Africa', description: 'The Rainbow Nation' },
  { value: 'ng', label: 'Nigeria', description: 'Giant of Africa' },
  { value: 'ke', label: 'Kenya', description: 'Land of Safaris' },
  { value: 'gh', label: 'Ghana', description: 'Gateway to Africa' },
];

const MyDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | number>('');
  const [selectedSkills, setSelectedSkills] = useState<(string | number)[]>(['react']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Dropdown
        label="Select Country"
        options={countryOptions}
        value={selectedCountry}
        onSelect={setSelectedCountry}
        placeholder="Choose a country..."
        searchable
        clearable
      />
      <Dropdown
        label="Select Skills"
        options={[
          { value: 'react', label: 'React' },
          { value: 'node', label: 'Node.js' },
          { value: 'ts', label: 'TypeScript' },
        ]}
        value={selectedSkills}
        onSelect={setSelectedSkills}
        multiple
        placeholder="Select your skills..."
      />
    </div>
  );
};

export default MyDropdown;
```