import React, { useCallback, useState } from 'react';
import SubPanelHeader from '@/components/subPanel/SubPanelHeader';
import ColorPalette from '@/components/Color/ColorPalette/ColorPalette';
import { HeaderColorWrapperStyled } from './styles';

export const linkPaletteColors = ['none', '#FF004F', '#FF8200', '#FAFF00', '#00DE62',
  '#00E3FF', '#0093FF', '#0030CC', '#6C00FF', '#FF00C3'];

const HeaderColor = (): JSX.Element => {
  const [highlight, setHighlight] = useState('');

  const changeHighlightColors = useCallback((color: string) => {
    setHighlight(color);
  }, []);

  return (
    <HeaderColorWrapperStyled>
      <SubPanelHeader title='Header Color' />
      <br />
      <div className='recommended-color'>
        <ColorPalette
          subTitle='Recommended Color'
          colors={linkPaletteColors}
          highlightColor={highlight}
          changeHighLights={changeHighlightColors}
        />
      </div>
    </HeaderColorWrapperStyled>
  );
};

export default HeaderColor;
