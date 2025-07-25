# Switch Component

## Purpose
The `Switch` component is a toggle control that allows users to turn an option on or off. It provides a clear visual indication of its state and is commonly used for settings, preferences, or feature toggles.

## Key Features
- **Toggle Functionality:** Switches between `checked` (on) and `unchecked` (off) states.
- **Customizable Variants:** Supports various color schemes (`default`, `primary`, `secondary`, `accent`, `success`, `warning`, `error`) for the active state.
- **Size Options:** Available in `small`, `medium`, and `large` sizes.
- **Label and Description:** Can include a text label and a descriptive helper text alongside the switch.
- **Icon Support:** Can display an icon within the thumb, with separate icons for `checked` and `unchecked` states.
- **Disabled State:** Visually indicates when the switch is not interactive.
- **Loading State:** Shows a pulsing animation on the track and a spinning icon on the thumb when in a loading state.
- **`Checkbox` Variant:** A sub-component that provides a styled checkbox with similar features, including an `indeterminate` state.
- **Framer Motion Animations:** Uses `framer-motion` for smooth thumb movement and interactive effects.

## Props
### `Switch` Props
- `checked`: (Optional) A boolean indicating the current state of the switch (controlled component).
- `defaultChecked`: (Optional) The initial state of the switch (uncontrolled component). Defaults to `false`.
- `onChange`: (Optional) Callback function triggered when the switch state changes.
- `disabled`: (Optional) If `true`, the switch is not interactive. Defaults to `false`.
- `variant`: (Optional) Color scheme for the checked state. Defaults to `default`.
- `size`: (Optional) Size of the switch. Defaults to `medium`.
- `label`: (Optional) Text label for the switch.
- `description`: (Optional) Additional descriptive text.
- `icon`: (Optional) Name of the icon to display in the thumb (for both states).
- `checkedIcon`: (Optional) Name of the icon to display when checked.
- `uncheckedIcon`: (Optional) Name of the icon to display when unchecked.
- `loading`: (Optional) If `true`, displays a loading animation. Defaults to `false`.

### `Checkbox` Props
- Inherits most `Switch` props.
- `indeterminate`: (Optional) If `true`, the checkbox is in an indeterminate state (neither checked nor unchecked). Defaults to `false`.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for displaying icons.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React, { useState } from 'react';
import Switch, { Checkbox } from './components/ui/Switch';

const MyToggles = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [allSelected, setAllSelected] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <h3>Switches:</h3>
      <Switch
        label="Enable Notifications"
        description="Receive important updates and alerts."
        checked={notificationsEnabled}
        onChange={setNotificationsEnabled}
        variant="primary"
        size="large"
        checkedIcon="check"
        uncheckedIcon="x"
      />
      <Switch
        label="Dark Mode"
        checked={darkMode}
        onChange={setDarkMode}
        variant="accent"
        loading
      />

      <h3>Checkboxes:</h3>
      <Checkbox
        label="I accept the terms and conditions"
        checked={termsAccepted}
        onChange={setTermsAccepted}
        variant="success"
      />
      <Checkbox
        label="Select All"
        checked={allSelected}
        onChange={setAllSelected}
        indeterminate={!allSelected && termsAccepted} // Example of indeterminate state
        variant="secondary"
      />
    </div>
  );
};

export default MyToggles;
```