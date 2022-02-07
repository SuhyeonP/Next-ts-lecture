import React from 'react';
import { linkPaletteColors } from '@/components/HeaderColor';
import { ColorButton, ColorPaletteStyled, ColorPaletteTitle } from './styles';

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
    <ColorPaletteTitle>{subTitle}</ColorPaletteTitle>
    <div className='color-palette-color-wrapper'>
      {colors.map((color: string, ind) => (
        <ColorButton
          key={color + ind.toString()}
          color={color}
          highlight={!(subTitle === 'Recent Color' && linkPaletteColors.indexOf(highlightColor) !== -1) && highlightColor === color}
          disabled={color === 'inherit'}
          onClick={(): void => changeHighLights(color)}
        />
      ))}
    </div>
  </ColorPaletteStyled>
);

export default ColorPalette;
