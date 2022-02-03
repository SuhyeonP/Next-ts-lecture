import React from 'react';
import { ColorButton, ColorPaletteStyled } from './styles';

interface IPaletteProps {
  subTitle: string;
  colors: string[];
  highlightColor: string;
  // eslint-disable-next-line no-unused-vars
  changeHighLights: (color: string) => void;
}

const ColorPalette = ({
  subTitle, colors, highlightColor, changeHighLights,
}: IPaletteProps): JSX.Element => (
  <ColorPaletteStyled>
    <p className='color-palette-title'>{subTitle}</p>
    <div className='color-palette-color-wrapper'>
      {colors.map((color: string) => (
        <ColorButton
          key={color}
          color={color}
          highlight={highlightColor === color}
          onClick={(): void => changeHighLights(color)}
        />
      ))}
    </div>
  </ColorPaletteStyled>
);

export default ColorPalette;
