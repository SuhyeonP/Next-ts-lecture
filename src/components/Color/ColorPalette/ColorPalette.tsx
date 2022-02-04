import React from 'react';
import { ColorButton, ColorPaletteStyled, ColorPaletteTitle } from './styles';
import { linkPaletteColors } from '@/components/HeaderColor';

interface IPaletteProps {
  subTitle: string;
  colors: string[];
  highlightColor: string;
  // eslint-disable-next-line no-unused-vars
  changeHighLights: (color: string) => void;
}

const ColorPalette = ({
  subTitle, colors, highlightColor, changeHighLights,
}: IPaletteProps): JSX.Element => {

  return (
    <ColorPaletteStyled>
      <ColorPaletteTitle>{subTitle}</ColorPaletteTitle>
      <div className='color-palette-color-wrapper'>
        {colors.map((color: string, ind) => (
          <ColorButton
            key={color + ind}
            color={color}
            highlight={!(subTitle === 'Recent Color' && linkPaletteColors.indexOf(highlightColor) !== -1) && highlightColor === color}
            disabled={color === 'inherit'}
            onClick={(): void => changeHighLights(color)}
          />
        ))}
      </div>
    </ColorPaletteStyled>
  );
};

export default ColorPalette;
