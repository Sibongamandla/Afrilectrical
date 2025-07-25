# Slider Component

## Purpose
The `Slider` component allows users to select a value or a range of values from a predefined range by dragging a thumb along a track. It's commonly used for adjusting settings like volume, brightness, or filtering data within a numerical range.

## Key Features
- **Single Value Selection:** The primary `Slider` component allows selecting a single value.
- **Range Selection:** The `RangeSlider` sub-component allows selecting a range between two values.
- **Customizable Range:** Define `min`, `max`, and `step` values for precise control over the selection.
- **Variants and Sizes:** Supports different visual styles (`default`, `primary`, `secondary`, `accent`, `gradient`) and sizes (`small`, `medium`, `large`).
- **Value Display:** Can optionally show the current selected value(s) above the thumb(s).
- **Tick Marks and Labels:** Can display discrete tick marks and labels along the track for better guidance.
- **Orientation:** Supports both `horizontal` (default) and `vertical` orientations.
- **Disabled State:** Visually indicates when the slider is not interactive.
- **Framer Motion Animations:** Uses `framer-motion` for smooth thumb movement and interactive effects.

## Props
### `Slider` Props
- `min`: (Optional) The minimum value of the slider. Defaults to `0`.
- `max`: (Optional) The maximum value of the slider. Defaults to `100`.
- `step`: (Optional) The step increment for the slider value. Defaults to `1`.
- `value`: (Optional) The current value of the slider (controlled component).
- `defaultValue`: (Optional) The initial value of the slider (uncontrolled component). Defaults to `min`.
- `onChange`: (Optional) Callback function triggered when the slider value changes.
- `onChangeCommitted`: (Optional) Callback function triggered when the user finishes dragging the thumb.
- `disabled`: (Optional) If `true`, the slider is not interactive. Defaults to `false`.
- `variant`: (Optional) Visual style of the slider. Defaults to `default`.
- `size`: (Optional) Size of the slider. Defaults to `medium`.
- `showValue`: (Optional) If `true`, displays the current value above the thumb. Defaults to `false`.
- `showTicks`: (Optional) If `true`, displays tick marks along the track. Defaults to `false`.
- `marks`: (Optional) An array of objects `{ value: number; label?: string }` for custom tick marks.
- `orientation`: (Optional) Orientation of the slider (`horizontal` or `vertical`). Defaults to `horizontal`.

### `RangeSlider` Props
- Inherits all `Slider` props except `value`, `defaultValue`, `onChange`, `onChangeCommitted`.
- `value`: (Optional) The current range of values `[start, end]` (controlled component).
- `defaultValue`: (Optional) The initial range of values `[start, end]` (uncontrolled component). Defaults to `[min, max]`.
- `onChange`: (Optional) Callback function triggered when the slider range changes.
- `onChangeCommitted`: (Optional) Callback function triggered when the user finishes dragging the thumb(s).

## Dependencies
- `framer-motion` for animations.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React, { useState } from 'react';
import Slider, { RangeSlider } from './components/ui/Slider';

const MySliders = () => {
  const [singleValue, setSingleValue] = useState(50);
  const [rangeValues, setRangeValues] = useState<[number, number]>([20, 80]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px' }}>
      <h3>Single Value Slider:</h3>
      <Slider
        min={0}
        max={100}
        step={5}
        value={singleValue}
        onChange={setSingleValue}
        showValue
        variant="primary"
        size="large"
        showTicks
        marks={[{ value: 0 }, { value: 50, label: 'Mid' }, { value: 100 }]}
      />

      <h3>Range Slider:</h3>
      <RangeSlider
        min={0}
        max={100}
        step={1}
        value={rangeValues}
        onChange={setRangeValues}
        showValue
        variant="gradient"
        size="medium"
      />

      <h3>Vertical Slider:</h3>
      <div style={{ height: '200px', display: 'flex', justifyContent: 'center' }}>
        <Slider
          min={0}
          max={100}
          step={10}
          defaultValue={30}
          orientation="vertical"
          showValue
          variant="accent"
          size="small"
        />
      </div>
    </div>
  );
};

export default MySliders;
```