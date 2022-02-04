import React, { useState } from 'react';
import useDebouncy from 'use-debouncy/lib/effect';
import { HexColorPicker } from 'react-colorful';

interface Props {
  color: string;
  onChange: any;
}

const DebounceHexColor = ({color, onChange}: Props): JSX.Element => {
  const [value, setValue] = useState(color);

  useDebouncy(() => onChange(value), 200, [value]);

  return (
    <HexColorPicker
      color={value}
      onChange={setValue}
    />
  )
}

export default DebounceHexColor;
